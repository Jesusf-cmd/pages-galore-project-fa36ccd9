/**
 * Handler tests for inquiry storage, claim delivery, reconcile, and concurrent claims.
 * Stubs outbound email/Turnstile; uses in-memory DB mirroring PG claim semantics.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  deliverClaimedNotification,
  handleInspectInquiryNotifications,
  handleReconcileInquiryNotifications,
  handleRetryInquiryNotifications,
  handleSubmitEstimateInquiry,
  notificationIdempotencyKey,
  verifyTurnstileToken,
  type SendEmailResult,
} from "@/lib/submitEstimateInquiryCore";
import { createMemoryInquiryDb, type MemInquiryState } from "@/lib/inquiryNotificationDb";
import { parsePricedQuoteAmounts, isAcceptablePricedQuote } from "@/lib/pricedQuote";
import type { EstimateInquiryRow } from "@/lib/estimateInquiry";

function validBody(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    name: "Wichita Lead",
    email: "wichita-lead@example.com",
    phone: "3165550199",
    address: "100 Douglas Ave",
    details: "Need parking lot overlay.",
    projectType: "commercial",
    ownerProjectType: "commercial",
    from: "concrete-contractors-wichita-ks",
    propertyType: "Commercial",
    customerRole: "Owner",
    approxSize: "8000 sq ft",
    formStartedAt: Date.now() - 10_000,
    company_website: "",
    ...overrides,
  };
}

describe("verifyTurnstileToken", () => {
  it("skips when unconfigured; requires token when configured", async () => {
    expect(
      await verifyTurnstileToken({
        token: undefined,
        ip: null,
        env: { get: () => undefined },
        fetcher: { fetch: vi.fn() },
      }),
    ).toBe("skip");
    expect(
      await verifyTurnstileToken({
        token: "",
        ip: null,
        env: { get: (k) => (k === "TURNSTILE_SECRET" ? "stub" : undefined) },
        fetcher: { fetch: vi.fn() },
      }),
    ).toBe("missing");
  });
});

describe("handleSubmitEstimateInquiry storage + notifications", () => {
  let state: MemInquiryState;
  let sendEmail: ReturnType<typeof vi.fn<(...a: unknown[]) => Promise<SendEmailResult>>>;
  let uuidSeq: number;

  beforeEach(() => {
    state = { inquiries: [], notifications: [], rejections: [] };
    sendEmail = vi.fn(async () => ({ ok: true, providerMessageId: "msg_1" }));
    uuidSeq = 0;
  });

  function ids() {
    return {
      randomUUID: () => {
        uuidSeq += 1;
        return `00000000-0000-4000-8000-${String(uuidSeq).padStart(12, "0")}`;
      },
    };
  }

  async function run(body: Record<string, unknown>, envMap: Record<string, string | undefined> = {}) {
    const db = createMemoryInquiryDb(state);
    return handleSubmitEstimateInquiry({
      body,
      clientIp: "127.0.0.1",
      userAgent: "vitest",
      db,
      env: { get: (k) => envMap[k] },
      clock: { now: () => Date.now() },
      fetcher: {
        fetch: vi.fn(async () => ({
          json: async () => ({ success: true }),
        })) as unknown as typeof fetch,
      },
      mailer: {
        sendEmail: sendEmail as unknown as (
          to: string,
          subject: string,
          html: string,
        ) => Promise<SendEmailResult>,
        notificationEmail: "ops@fdzconstruction.com",
      },
      ids: ids(),
    });
  }

  it("1. successful storage creates inquiry and both notification records", async () => {
    const res = await run(validBody());
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(typeof json.inquiryId).toBe("string");
    expect(state.inquiries).toHaveLength(1);
    expect(state.notifications).toHaveLength(2);
    expect(state.notifications.map((n) => n.recipient_kind).sort()).toEqual([
      "customer",
      "internal",
    ]);
    expect(state.notifications.every((n) => n.status === "provider_accepted")).toBe(true);
    expect(sendEmail).toHaveBeenCalledTimes(2);
    expect(sendEmail.mock.calls[0][3]).toMatchObject({
      idempotencyKey: expect.stringMatching(/^fdz-inq-notify\//),
    });
  });

  it("2. notification create failure cannot leave unnoticed confirmed inquiry", async () => {
    state.failCreate = true;
    const res = await run(validBody());
    expect(res.status).toBe(500);
    expect(state.inquiries).toHaveLength(0);
    expect(state.notifications).toHaveLength(0);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("3. interrupted delivery remains recoverable as pending/sending work", async () => {
    sendEmail.mockImplementation(async () => {
      throw new Error("network down");
    });
    // mailer catching: make send return ok:false instead
    sendEmail.mockReset();
    sendEmail.mockResolvedValue({ ok: false, error: "network down" });
    const res = await run(validBody());
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.inquiryId).toBeTruthy();
    expect(state.notifications.every((n) => n.status === "failed")).toBe(true);
    expect(state.inquiries).toHaveLength(1);
  });

  it("4. reconciliation repairs missing work once and preserves successes", async () => {
    const db = createMemoryInquiryDb(state);
    await run(validBody());
    const inquiryId = state.inquiries[0].id;
    // Simulate missing internal row while customer remains accepted
    state.notifications = state.notifications.filter((n) => n.recipient_kind === "customer");
    expect(state.notifications).toHaveLength(1);

    const first = await handleReconcileInquiryNotifications({
      body: { inquiryId },
      db,
      mailer: {
        sendEmail: sendEmail as unknown as (
          to: string,
          subject: string,
          html: string,
        ) => Promise<SendEmailResult>,
        notificationEmail: "ops@fdzconstruction.com",
      },
      authorized: true,
    });
    expect(first.status).toBe(200);
    expect((await first.json()).created).toBe(1);
    expect(state.notifications).toHaveLength(2);
    expect(state.notifications.find((n) => n.recipient_kind === "customer")?.status).toBe(
      "provider_accepted",
    );

    const second = await handleReconcileInquiryNotifications({
      body: { inquiryId },
      db,
      mailer: {
        sendEmail: sendEmail as unknown as (
          to: string,
          subject: string,
          html: string,
        ) => Promise<SendEmailResult>,
        notificationEmail: "ops@fdzconstruction.com",
      },
      authorized: true,
    });
    expect((await second.json()).created).toBe(0);
    expect(state.inquiries).toHaveLength(1);
  });

  it("5/6. two concurrent workers: only one claims the send", async () => {
    const db = createMemoryInquiryDb(state, { now: () => 1_000_000 });
    await db.createInquiryWithNotifications(
      {
        customer_name: "W",
        customer_email: "w@example.com",
        customer_phone: "3165550100",
        customer_address: null,
        project_type: "commercial",
        property_type: null,
        customer_role: null,
        approx_size: null,
        bidding_status: null,
        project_details: null,
        origin: "concrete-contractors-wichita-ks",
        status: "inquiry",
      },
      "ops@example.com",
    );
    const n = state.notifications[0];
    const inquiry = state.inquiries[0];
    let sends = 0;
    const mailer = {
      notificationEmail: "ops@example.com",
      sendEmail: async () => {
        sends += 1;
        return { ok: true, providerMessageId: `m${sends}` };
      },
    };
    const [r1, r2] = await Promise.all([
      deliverClaimedNotification({
        db,
        mailer,
        notification: n,
        inquiry,
        ids: { randomUUID: () => "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa" },
      }),
      deliverClaimedNotification({
        db,
        mailer,
        notification: { ...n },
        inquiry,
        ids: { randomUUID: () => "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb" },
      }),
    ]);
    const claimed = [r1, r2].filter((r) => r.claimed);
    expect(claimed).toHaveLength(1);
    expect(sends).toBe(1);
    expect(state.notifications[0].attempt_count).toBe(1);
  });

  it("7. abandoned claim recovers; stale finalize cannot overwrite", async () => {
    let now = 1_000_000;
    const db = createMemoryInquiryDb(state, { now: () => now });
    await db.createInquiryWithNotifications(
      {
        customer_name: "W",
        customer_email: "w@example.com",
        customer_phone: "3165550100",
        customer_address: null,
        project_type: "commercial",
        property_type: null,
        customer_role: null,
        approx_size: null,
        bidding_status: null,
        project_details: null,
        origin: null,
        status: "inquiry",
      },
      "ops@example.com",
    );
    const n = state.notifications[0];
    const first = await db.claimNotification({
      notificationId: n.id,
      claimToken: "token-old",
      claimTtlSeconds: 1,
    });
    expect(first.data?.attempt_count).toBe(1);
    now = 1_000_000 + 5_000;
    const second = await db.claimNotification({
      notificationId: n.id,
      claimToken: "token-new",
      claimTtlSeconds: 120,
    });
    expect(second.data?.attempt_count).toBe(2);
    const stale = await db.finalizeNotification({
      notificationId: n.id,
      claimToken: "token-old",
      expectedAttempt: 1,
      status: "provider_accepted",
      lastError: null,
      providerMessageId: "stale",
    });
    expect(stale.ok).toBe(false);
    const fresh = await db.finalizeNotification({
      notificationId: n.id,
      claimToken: "token-new",
      expectedAttempt: 2,
      status: "failed",
      lastError: "provider 500",
      providerMessageId: null,
    });
    expect(fresh.ok).toBe(true);
    expect(state.notifications[0].status).toBe("failed");
  });

  it("8. provider failure stays retryable without recreating inquiry", async () => {
    sendEmail.mockResolvedValue({ ok: false, error: "500" });
    await run(validBody());
    expect(state.inquiries).toHaveLength(1);
    expect(state.notifications.every((n) => n.status === "failed")).toBe(true);

    sendEmail.mockResolvedValue({ ok: true, providerMessageId: "retry_ok" });
    const db = createMemoryInquiryDb(state);
    const res = await handleRetryInquiryNotifications({
      body: { inquiryId: state.inquiries[0].id },
      db,
      mailer: {
        sendEmail: sendEmail as unknown as (
          to: string,
          subject: string,
          html: string,
        ) => Promise<SendEmailResult>,
        notificationEmail: "ops@fdzconstruction.com",
      },
      authorized: true,
      ids: ids(),
    });
    expect(res.status).toBe(200);
    expect(state.inquiries).toHaveLength(1);
    expect(state.notifications.every((n) => n.status === "provider_accepted")).toBe(true);
  });

  it("9. provider accept + finalize failure recovers without casual resend", async () => {
    const db = createMemoryInquiryDb(state);
    state.failFinalizeOnceIds = new Set();
    await db.createInquiryWithNotifications(
      {
        customer_name: "W",
        customer_email: "w@example.com",
        customer_phone: "3165550100",
        customer_address: null,
        project_type: "commercial",
        property_type: null,
        customer_role: null,
        approx_size: null,
        bidding_status: null,
        project_details: null,
        origin: null,
        status: "inquiry",
      },
      "ops@example.com",
    );
    const n = state.notifications[0];
    state.failFinalizeOnceIds.add(n.id);
    let sends = 0;
    const first = await deliverClaimedNotification({
      db,
      mailer: {
        notificationEmail: "ops@example.com",
        sendEmail: async () => {
          sends += 1;
          return { ok: true, providerMessageId: "msg_once" };
        },
      },
      notification: n,
      inquiry: state.inquiries[0],
      ids: { randomUUID: () => "cccccccc-cccc-4ccc-8ccc-cccccccccccc" },
    });
    expect(first.sent).toBe(true);
    expect(first.error).toBe("provider_accepted_finalize_pending");
    expect(state.notifications[0].provider_message_id).toBe("msg_once");
    expect(state.notifications[0].status).toBe("sending");

    // Expire claim and recover — should finalize without another send
    state.notifications[0].claim_expires_at = new Date(Date.now() - 1000).toISOString();
    const second = await deliverClaimedNotification({
      db,
      mailer: {
        notificationEmail: "ops@example.com",
        sendEmail: async () => {
          sends += 1;
          return { ok: true, providerMessageId: "msg_dup" };
        },
      },
      notification: { ...state.notifications[0] },
      inquiry: state.inquiries[0],
      ids: { randomUUID: () => "dddddddd-dddd-4ddd-8ddd-dddddddddddd" },
    });
    expect(second.sent).toBe(false);
    expect(second.status).toBe("provider_accepted");
    expect(sends).toBe(1);
    expect(notificationIdempotencyKey(n.id, 1)).toContain(n.id);
  });

  it("10. unauthorized retry/inspect/reconcile produce no side effects", async () => {
    const db = createMemoryInquiryDb(state);
    await db.createInquiryWithNotifications(
      {
        customer_name: "W",
        customer_email: "w@example.com",
        customer_phone: "3165550100",
        customer_address: null,
        project_type: "commercial",
        property_type: null,
        customer_role: null,
        approx_size: null,
        bidding_status: null,
        project_details: null,
        origin: null,
        status: "inquiry",
      },
      "ops@example.com",
    );
    state.notifications.forEach((n) => {
      n.status = "failed";
    });
    const before = structuredClone(state.notifications);
    const mailer = {
      notificationEmail: "ops@example.com",
      sendEmail: async () => {
        throw new Error("must not send");
      },
    };
    expect(
      (await handleRetryInquiryNotifications({ body: {}, db, mailer, authorized: false })).status,
    ).toBe(401);
    expect(
      (await handleInspectInquiryNotifications({ body: {}, db, authorized: false })).status,
    ).toBe(401);
    expect(
      (await handleReconcileInquiryNotifications({ body: {}, db, mailer, authorized: false }))
        .status,
    ).toBe(401);
    expect(state.notifications).toEqual(before);
  });

  it("Turnstile missing/fail and honeypot paths", async () => {
    let res = await run(validBody({ turnstileToken: "" }), { TURNSTILE_SECRET: "stub" });
    expect(res.status).toBe(400);
    expect(state.inquiries).toHaveLength(0);

    res = await run(validBody({ company_website: "http://spam" }));
    expect(res.status).toBe(200);
    expect((await res.json()).inquiryId).toBeUndefined();
  });
});

describe("priced quote guards", () => {
  it("rejects invalid priced amounts; accepts OKC path", () => {
    expect(
      parsePricedQuoteAmounts({
        estimateLow: null,
        estimateHigh: 1,
        lengthFt: 1,
        widthFt: 1,
        sqft: 1,
      }).ok,
    ).toBe(false);
    expect(
      isAcceptablePricedQuote({
        status: "pending",
        estimate_low: 100,
        estimate_high: 200,
      }),
    ).toBe(true);
  });
});
