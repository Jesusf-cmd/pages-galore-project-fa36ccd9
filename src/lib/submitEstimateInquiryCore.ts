/**
 * Testable core for submit-estimate-inquiry (and shared Turnstile/notification helpers).
 * Edge function wraps this with Deno.env and the Supabase JS client.
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

export type TurnstileVerdict = "ok" | "fail" | "skip" | "missing";

export type SendEmailResult = {
  ok: boolean;
  status?: number;
  error?: string;
  providerMessageId?: string;
};

export type NotificationRecipientKind = "customer" | "internal";

export type NotificationStatus = "pending" | "provider_accepted" | "failed";

export type InquiryNotificationRow = {
  id: string;
  inquiry_id: string;
  recipient_kind: NotificationRecipientKind;
  recipient_email: string;
  status: NotificationStatus;
  attempt_count: number;
  last_error: string | null;
  provider_message_id: string | null;
};

export type InquiryDb = {
  insertRejectedLead: (entry: {
    reason: string;
    payload: Record<string, unknown>;
    clientIp: string | null;
    userAgent: string | null;
  }) => Promise<{ error: unknown }>;
  insertInquiry: (
    row: EstimateInquiryRow,
  ) => Promise<{ data: { id: string } | null; error: unknown }>;
  insertNotificationPending: (entry: {
    inquiry_id: string;
    recipient_kind: NotificationRecipientKind;
    recipient_email: string;
  }) => Promise<{ data: { id: string } | null; error: unknown }>;
  updateNotificationOutcome: (entry: {
    id: string;
    status: NotificationStatus;
    attempt_count: number;
    last_error: string | null;
    provider_message_id: string | null;
  }) => Promise<{ error: unknown }>;
  listRetryableNotifications: (inquiryId?: string) => Promise<{
    data: InquiryNotificationRow[] | null;
    error: unknown;
  }>;
  getInquiryRow: (inquiryId: string) => Promise<{
    data: (EstimateInquiryRow & { id: string }) | null;
    error: unknown;
  }>;
};

export type InquiryEnv = {
  get: (key: string) => string | undefined;
};

export type InquiryClock = {
  now: () => number;
};

export type InquiryMailer = {
  sendEmail: (to: string, subject: string, html: string) => Promise<SendEmailResult>;
  notificationEmail: string;
};

export type InquiryFetcher = {
  fetch: typeof fetch;
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

async function recordAndSendNotification(opts: {
  db: InquiryDb;
  mailer: InquiryMailer;
  inquiryId: string;
  kind: NotificationRecipientKind;
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const pending = await opts.db.insertNotificationPending({
    inquiry_id: opts.inquiryId,
    recipient_kind: opts.kind,
    recipient_email: opts.to,
  });
  if (pending.error || !pending.data) {
    console.error("[submit-estimate-inquiry] notification pending insert failed:", pending.error);
    return;
  }

  const result = await opts.mailer.sendEmail(opts.to, opts.subject, opts.html);
  const status: NotificationStatus = result.ok ? "provider_accepted" : "failed";
  const { error } = await opts.db.updateNotificationOutcome({
    id: pending.data.id,
    status,
    attempt_count: 1,
    last_error: result.ok ? null : result.error ?? "send failed",
    provider_message_id: result.providerMessageId ?? null,
  });
  if (error) {
    console.error("[submit-estimate-inquiry] notification outcome update failed:", error);
  }
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
}): Promise<Response> {
  const { body, db, env, clock, fetcher, mailer } = opts;
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

  const { data: inquiry, error: dbError } = await db.insertInquiry(built.row);
  if (dbError || !inquiry) {
    console.error("estimate_inquiries insert error:", dbError);
    return jsonResponse({ error: "Failed to save inquiry" }, 500);
  }

  const firstName = built.row.customer_name.split(" ")[0] || built.row.customer_name;
  const customerHtml = customerInquiryEmailHtml({
    firstName,
    origin: built.row.origin,
  });
  const internalHtml = internalInquiryEmailHtml({
    name: built.row.customer_name,
    email: built.row.customer_email,
    phone: built.row.customer_phone,
    address: built.row.customer_address,
    projectType: built.row.project_type,
    propertyType: built.row.property_type,
    customerRole: built.row.customer_role,
    approxSize: built.row.approx_size,
    biddingStatus: built.row.bidding_status,
    projectDetails: built.row.project_details,
    origin: built.row.origin,
  });

  // Persist pending work before delivery attempts so interruption remains visible.
  await Promise.all([
    recordAndSendNotification({
      db,
      mailer,
      inquiryId: inquiry.id,
      kind: "customer",
      to: built.row.customer_email,
      subject: "We received your estimate request — FDZ Construction",
      html: customerHtml,
    }),
    recordAndSendNotification({
      db,
      mailer,
      inquiryId: inquiry.id,
      kind: "internal",
      to: mailer.notificationEmail,
      subject: `New Estimate Inquiry - ${built.row.customer_name}`,
      html: internalHtml,
    }),
  ]);

  return jsonResponse({ success: true, inquiryId: inquiry.id }, 200);
}

export async function handleRetryInquiryNotifications(opts: {
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
  }> = [];

  for (const row of rows) {
    if (row.status === "provider_accepted") {
      results.push({
        id: row.id,
        inquiryId: row.inquiry_id,
        recipientKind: row.recipient_kind,
        status: "provider_accepted",
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
      });
      continue;
    }

    const firstName = inquiry.data.customer_name.split(" ")[0] || inquiry.data.customer_name;
    const html =
      row.recipient_kind === "customer"
        ? customerInquiryEmailHtml({ firstName, origin: inquiry.data.origin })
        : internalInquiryEmailHtml({
            name: inquiry.data.customer_name,
            email: inquiry.data.customer_email,
            phone: inquiry.data.customer_phone,
            address: inquiry.data.customer_address,
            projectType: inquiry.data.project_type,
            propertyType: inquiry.data.property_type,
            customerRole: inquiry.data.customer_role,
            approxSize: inquiry.data.approx_size,
            biddingStatus: inquiry.data.bidding_status,
            projectDetails: inquiry.data.project_details,
            origin: inquiry.data.origin,
          });
    const subject =
      row.recipient_kind === "customer"
        ? "We received your estimate request — FDZ Construction"
        : `New Estimate Inquiry - ${inquiry.data.customer_name}`;

    const send = await opts.mailer.sendEmail(row.recipient_email, subject, html);
    const status: NotificationStatus = send.ok ? "provider_accepted" : "failed";
    await opts.db.updateNotificationOutcome({
      id: row.id,
      status,
      attempt_count: row.attempt_count + 1,
      last_error: send.ok ? null : send.error ?? "send failed",
      provider_message_id: send.providerMessageId ?? row.provider_message_id,
    });
    results.push({
      id: row.id,
      inquiryId: row.inquiry_id,
      recipientKind: row.recipient_kind,
      status,
      error: send.ok ? undefined : send.error,
    });
  }

  return jsonResponse({ success: true, retried: results.length, results }, 200);
}
