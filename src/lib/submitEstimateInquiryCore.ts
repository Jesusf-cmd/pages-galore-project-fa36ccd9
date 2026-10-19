/**
 * Testable core for submit-estimate-inquiry / notification claim+retry.
 * Edge functions wrap this with Deno.env and the Supabase JS client.
 */
import {
  buildEstimateInquiryRow,
  customerInquiryEmailHtml,
  internalInquiryEmailHtml,
  type EstimateInquiryRow,
} from "./estimateInquiry.ts";

export const INQUIRY_CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

export const MIN_FILL_MS = 3000;
/** Abandoned sending claims may be recovered after this many ms (matches DB default TTL). */
export const NOTIFICATION_CLAIM_TTL_MS = 120_000;

/**
 * Resend Idempotency-Key retention is 24 hours (docs). Same key+payload returns the
 * original response without another send within that window — not unconditional exactly-once.
 */
export const RESEND_IDEMPOTENCY_RETENTION = "24 hours (Resend documented retention)";

export type TurnstileVerdict = "ok" | "fail" | "skip" | "missing";

export type SendEmailResult = {
  ok: boolean;
  status?: number;
  error?: string;
  providerMessageId?: string;
};

export type SendEmailOptions = {
  idempotencyKey?: string;
};

export type NotificationRecipientKind = "customer" | "internal";

export type NotificationStatus = "pending" | "sending" | "provider_accepted" | "failed";

export type InquiryNotificationRow = {
  id: string;
  inquiry_id: string;
  recipient_kind: NotificationRecipientKind;
  recipient_email: string;
  status: NotificationStatus;
  attempt_count: number;
  last_error: string | null;
  provider_message_id: string | null;
  claim_token?: string | null;
  claimed_at?: string | null;
  claim_expires_at?: string | null;
};

export type CreatedInquiryBundle = {
  inquiryId: string;
  customerNotificationId: string;
  internalNotificationId: string;
};

export type InquiryDb = {
  insertRejectedLead: (entry: {
    reason: string;
    payload: Record<string, unknown>;
    clientIp: string | null;
    userAgent: string | null;
  }) => Promise<{ error: unknown }>;
  /** Atomic inquiry + both pending notification rows. */
  createInquiryWithNotifications: (
    row: EstimateInquiryRow,
    internalEmail: string,
  ) => Promise<{ data: CreatedInquiryBundle | null; error: unknown }>;
  claimNotification: (entry: {
    notificationId: string;
    claimToken: string;
    claimTtlSeconds?: number;
  }) => Promise<{ data: InquiryNotificationRow | null; error: unknown }>;
  recordProviderAcceptance: (entry: {
    notificationId: string;
    claimToken: string;
    expectedAttempt: number;
    providerMessageId: string | null;
  }) => Promise<{ ok: boolean; error: unknown }>;
  finalizeNotification: (entry: {
    notificationId: string;
    claimToken: string;
    expectedAttempt: number;
    status: "provider_accepted" | "failed";
    lastError: string | null;
    providerMessageId: string | null;
  }) => Promise<{ ok: boolean; error: unknown }>;
  listRetryableNotifications: (inquiryId?: string) => Promise<{
    data: InquiryNotificationRow[] | null;
    error: unknown;
  }>;
  listNotificationsForInquiry: (inquiryId: string) => Promise<{
    data: InquiryNotificationRow[] | null;
    error: unknown;
  }>;
  getInquiryRow: (inquiryId: string) => Promise<{
    data: (EstimateInquiryRow & { id: string }) | null;
    error: unknown;
  }>;
  /** Inserts missing pending rows only; never sends mail. */
  reconcileMissingNotifications: (entry: {
    internalEmail: string;
    inquiryId?: string;
  }) => Promise<{ data: { created: number } | null; error: unknown }>;
};

export type InquiryEnv = {
  get: (key: string) => string | undefined;
};

export type InquiryClock = {
  now: () => number;
};

export type InquiryMailer = {
  sendEmail: (
    to: string,
    subject: string,
    html: string,
    options?: SendEmailOptions,
  ) => Promise<SendEmailResult>;
  notificationEmail: string;
};

export type InquiryFetcher = {
  fetch: typeof fetch;
};

export type InquiryIdFactory = {
  /** UUID v4 string for claim tokens. */
  randomUUID: () => string;
};

function jsonResponse(
  body: unknown,
  status: number,
  headers: Record<string, string> = INQUIRY_CORS_HEADERS,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, "Content-Type": "application/json" },
  });
}

/** Same shape as a real success so bots can't fingerprint spam rejection — no inquiryId. */
export function silentSuccessResponse(): Response {
  return jsonResponse({ success: true }, 200);
}

export function rejectPayload(body: Record<string, unknown>): Record<string, unknown> {
  return {
    name: body.name ?? null,
    email: body.email ?? null,
    phone: body.phone ?? null,
    address: body.address ?? null,
    projectType: body.projectType ?? null,
    from: body.from ?? null,
    propertyType: body.propertyType ?? null,
    ownerProjectType: body.ownerProjectType ?? null,
    formStartedAt: body.formStartedAt ?? null,
    hasHoneypot:
      typeof body.company_website === "string" && String(body.company_website).trim().length > 0,
    hasTurnstileToken: Boolean(body.turnstileToken),
  };
}

export function notificationIdempotencyKey(notificationId: string, attemptCount: number): string {
  return `fdz-inq-notify/${notificationId}/a${attemptCount}`;
}

/**
 * When TURNSTILE_SECRET is set, a nonempty token is required and verified.
 * Unconfigured environments return "skip" (documented open mode).
 */
export async function verifyTurnstileToken(opts: {
  token: unknown;
  ip: string | null;
  env: InquiryEnv;
  fetcher: InquiryFetcher;
}): Promise<TurnstileVerdict> {
  const secret = opts.env.get("TURNSTILE_SECRET");
  if (!secret) return "skip";
  if (typeof opts.token !== "string" || !opts.token.trim()) return "missing";
  try {
    const form = new URLSearchParams();
    form.set("secret", secret);
    form.set("response", opts.token.trim());
    if (opts.ip) form.set("remoteip", opts.ip);
    const res = await opts.fetcher.fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form },
    );
    const data = (await res.json()) as { success?: boolean };
    return data?.success ? "ok" : "fail";
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return "fail";
  }
}

async function logRejection(
  db: InquiryDb,
  entry: {
    reason: string;
    payload: Record<string, unknown>;
    clientIp: string | null;
    userAgent: string | null;
  },
): Promise<void> {
  console.warn("[submit-estimate-inquiry] rejected_lead", entry.reason, {
    clientIp: entry.clientIp,
    email: entry.payload.email,
    name: entry.payload.name,
  });
  try {
    const { error } = await db.insertRejectedLead(entry);
    if (error) console.error("[submit-estimate-inquiry] rejected_leads insert failed:", error);
  } catch (err) {
    console.error("[submit-estimate-inquiry] rejected_leads insert threw:", err);
  }
}

function buildNotificationContent(
  inquiry: EstimateInquiryRow,
  kind: NotificationRecipientKind,
): { subject: string; html: string } {
  const firstName = inquiry.customer_name.split(" ")[0] || inquiry.customer_name;
  if (kind === "customer") {
    return {
      subject: "We received your estimate request — FDZ Construction",
      html: customerInquiryEmailHtml({ firstName, origin: inquiry.origin }),
    };
  }
  return {
    subject: `New Estimate Inquiry - ${inquiry.customer_name}`,
    html: internalInquiryEmailHtml({
      name: inquiry.customer_name,
      email: inquiry.customer_email,
      phone: inquiry.customer_phone,
      address: inquiry.customer_address,
      projectType: inquiry.project_type,
      propertyType: inquiry.property_type,
      customerRole: inquiry.customer_role,
      approxSize: inquiry.approx_size,
      biddingStatus: inquiry.bidding_status,
      projectDetails: inquiry.project_details,
      origin: inquiry.origin,
    }),
  };
}

/**
 * Claim → send (or recover prior provider acceptance) → finalize.
 * Only the claim owner may finalize; stale claim tokens are rejected.
 */
export async function deliverClaimedNotification(opts: {
  db: InquiryDb;
  mailer: InquiryMailer;
  notification: InquiryNotificationRow;
  inquiry: EstimateInquiryRow;
  ids: InquiryIdFactory;
  claimTtlSeconds?: number;
}): Promise<{
  id: string;
  inquiryId: string;
  recipientKind: NotificationRecipientKind;
  status: NotificationStatus;
  error?: string;
  claimed: boolean;
  sent: boolean;
}> {
  const claimToken = opts.ids.randomUUID();
  const claimed = await opts.db.claimNotification({
    notificationId: opts.notification.id,
    claimToken,
    claimTtlSeconds: opts.claimTtlSeconds ?? Math.floor(NOTIFICATION_CLAIM_TTL_MS / 1000),
  });
  if (claimed.error || !claimed.data) {
    return {
      id: opts.notification.id,
      inquiryId: opts.notification.inquiry_id,
      recipientKind: opts.notification.recipient_kind,
      status: opts.notification.status,
      error: "not_claimed",
      claimed: false,
      sent: false,
    };
  }

  const row = claimed.data;
  const expectedAttempt = row.attempt_count;

  // Prior send accepted by provider but finalize failed — do not casually resend.
  if (row.provider_message_id && row.last_error === "provider_accepted_finalize_pending") {
    const fin = await opts.db.finalizeNotification({
      notificationId: row.id,
      claimToken,
      expectedAttempt,
      status: "provider_accepted",
      lastError: null,
      providerMessageId: row.provider_message_id,
    });
    return {
      id: row.id,
      inquiryId: row.inquiry_id,
      recipientKind: row.recipient_kind,
      status: fin.ok ? "provider_accepted" : "sending",
      error: fin.ok ? undefined : "finalize_failed_after_prior_accept",
      claimed: true,
      sent: false,
    };
  }

  const content = buildNotificationContent(opts.inquiry, row.recipient_kind);
  const idempotencyKey = notificationIdempotencyKey(row.id, expectedAttempt);
  const send = await opts.mailer.sendEmail(row.recipient_email, content.subject, content.html, {
    idempotencyKey,
  });

  if (send.ok) {
    await opts.db.recordProviderAcceptance({
      notificationId: row.id,
      claimToken,
      expectedAttempt,
      providerMessageId: send.providerMessageId ?? null,
    });
  }

  const status: "provider_accepted" | "failed" = send.ok ? "provider_accepted" : "failed";
  const fin = await opts.db.finalizeNotification({
    notificationId: row.id,
    claimToken,
    expectedAttempt,
    status,
    lastError: send.ok ? null : send.error ?? "send failed",
    providerMessageId: send.providerMessageId ?? null,
  });

  if (send.ok && !fin.ok) {
    return {
      id: row.id,
      inquiryId: row.inquiry_id,
      recipientKind: row.recipient_kind,
      status: "sending",
      error: "provider_accepted_finalize_pending",
      claimed: true,
      sent: true,
    };
  }

  return {
    id: row.id,
    inquiryId: row.inquiry_id,
    recipientKind: row.recipient_kind,
    status: fin.ok ? status : row.status,
    error: fin.ok ? (send.ok ? undefined : send.error) : "finalize_rejected_stale_or_failed",
    claimed: true,
    sent: true,
  };
}

export async function handleSubmitEstimateInquiry(opts: {
  body: Record<string, unknown>;
  clientIp: string | null;
  userAgent: string | null;
  db: InquiryDb;
  env: InquiryEnv;
  clock: InquiryClock;
  fetcher: InquiryFetcher;
  mailer: InquiryMailer;
  ids?: InquiryIdFactory;
}): Promise<Response> {
  const { body, db, env, clock, fetcher, mailer } = opts;
  const ids = opts.ids ?? { randomUUID: () => crypto.randomUUID() };
  const honeypot = body.company_website;
  const formStartedAt = body.formStartedAt;
  const turnstileToken = body.turnstileToken;

  const rejectSilent = async (reason: string) => {
    await logRejection(db, {
      reason,
      payload: rejectPayload(body),
      clientIp: opts.clientIp,
      userAgent: opts.userAgent,
    });
    return silentSuccessResponse();
  };

  if (typeof honeypot === "string" && honeypot.trim()) {
    return await rejectSilent("honeypot_filled");
  }
  if (formStartedAt !== undefined && formStartedAt !== null && formStartedAt !== "") {
    const started = typeof formStartedAt === "number" ? formStartedAt : Number(formStartedAt);
    if (!Number.isFinite(started)) {
      return await rejectSilent("form_started_at_invalid");
    }
    const elapsed = clock.now() - started;
    if (elapsed < MIN_FILL_MS) {
      return await rejectSilent(`fill_too_fast_${elapsed}ms`);
    }
  }

  const turnstile = await verifyTurnstileToken({
    token: turnstileToken,
    ip: opts.clientIp,
    env,
    fetcher,
  });
  if (turnstile === "missing" || turnstile === "fail") {
    await logRejection(db, {
      reason: turnstile === "missing" ? "turnstile_missing" : "turnstile_failed",
      payload: rejectPayload(body),
      clientIp: opts.clientIp,
      userAgent: opts.userAgent,
    });
    return jsonResponse(
      {
        error: "Please complete the security check and try again.",
        code: turnstile === "missing" ? "turnstile_required" : "turnstile_failed",
      },
      400,
    );
  }

  const resolvedProjectType = body.ownerProjectType || body.projectType;
  const built = buildEstimateInquiryRow({
    name: body.name,
    email: body.email,
    phone: body.phone,
    address: body.address,
    details: body.details,
    projectType: resolvedProjectType,
    propertyType: body.propertyType,
    customerRole: body.customerRole,
    approxSize: body.approxSize,
    biddingStatus: body.biddingStatus,
    from: body.from,
  });

  if (!built.ok) {
    return jsonResponse({ error: built.error }, 400);
  }

  const created = await db.createInquiryWithNotifications(
    built.row,
    mailer.notificationEmail,
  );
  if (created.error || !created.data) {
    console.error("estimate inquiry transactional create failed:", created.error);
    return jsonResponse({ error: "Failed to save inquiry" }, 500);
  }

  const inquiryWithId = { ...built.row, id: created.data.inquiryId };
  const listed = await db.listNotificationsForInquiry(created.data.inquiryId);
  const notifications = listed.data ?? [];

  // Delivery attempts after durable storage; email failure does not undo the inquiry.
  await Promise.all(
    notifications.map(async (n) => {
      await deliverClaimedNotification({
        db,
        mailer,
        notification: n,
        inquiry: inquiryWithId,
        ids,
      });
    }),
  );

  return jsonResponse({ success: true, inquiryId: created.data.inquiryId }, 200);
}

export async function handleInspectInquiryNotifications(opts: {
  body: Record<string, unknown>;
  db: InquiryDb;
  authorized: boolean;
}): Promise<Response> {
  if (!opts.authorized) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }
  const inquiryId =
    typeof opts.body.inquiryId === "string" && opts.body.inquiryId.trim()
      ? opts.body.inquiryId.trim()
      : undefined;
  const listed = inquiryId
    ? await opts.db.listNotificationsForInquiry(inquiryId)
    : await opts.db.listRetryableNotifications();
  if (listed.error) {
    return jsonResponse({ error: "Failed to list notifications" }, 500);
  }
  return jsonResponse(
    {
      success: true,
      notifications: listed.data ?? [],
      idempotencyRetention: RESEND_IDEMPOTENCY_RETENTION,
    },
    200,
  );
}

export async function handleReconcileInquiryNotifications(opts: {
  body: Record<string, unknown>;
  db: InquiryDb;
  mailer: InquiryMailer;
  authorized: boolean;
}): Promise<Response> {
  if (!opts.authorized) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }
  const inquiryId =
    typeof opts.body.inquiryId === "string" && opts.body.inquiryId.trim()
      ? opts.body.inquiryId.trim()
      : undefined;
  const result = await opts.db.reconcileMissingNotifications({
    internalEmail: opts.mailer.notificationEmail,
    inquiryId,
  });
  if (result.error || !result.data) {
    return jsonResponse({ error: "Reconciliation failed" }, 500);
  }
  return jsonResponse({ success: true, created: result.data.created }, 200);
}

export async function handleRetryInquiryNotifications(opts: {
  body: Record<string, unknown>;
  db: InquiryDb;
  mailer: InquiryMailer;
  authorized: boolean;
  ids?: InquiryIdFactory;
}): Promise<Response> {
  if (!opts.authorized) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const ids = opts.ids ?? { randomUUID: () => crypto.randomUUID() };
  const inquiryId =
    typeof opts.body.inquiryId === "string" && opts.body.inquiryId.trim()
      ? opts.body.inquiryId.trim()
      : undefined;

  const listed = await opts.db.listRetryableNotifications(inquiryId);
  if (listed.error) {
    return jsonResponse({ error: "Failed to list notifications" }, 500);
  }
  const rows = listed.data ?? [];
  const results: Array<{
    id: string;
    inquiryId: string;
    recipientKind: NotificationRecipientKind;
    status: NotificationStatus;
    error?: string;
    claimed?: boolean;
    sent?: boolean;
  }> = [];

  for (const row of rows) {
    if (row.status === "provider_accepted") {
      results.push({
        id: row.id,
        inquiryId: row.inquiry_id,
        recipientKind: row.recipient_kind,
        status: "provider_accepted",
        claimed: false,
        sent: false,
      });
      continue;
    }

    const inquiry = await opts.db.getInquiryRow(row.inquiry_id);
    if (inquiry.error || !inquiry.data) {
      results.push({
        id: row.id,
        inquiryId: row.inquiry_id,
        recipientKind: row.recipient_kind,
        status: "failed",
        error: "Inquiry not found",
        claimed: false,
        sent: false,
      });
      continue;
    }

    const delivered = await deliverClaimedNotification({
      db: opts.db,
      mailer: opts.mailer,
      notification: row,
      inquiry: inquiry.data,
      ids,
    });
    results.push(delivered);
  }

  return jsonResponse({ success: true, retried: results.length, results }, 200);
}
