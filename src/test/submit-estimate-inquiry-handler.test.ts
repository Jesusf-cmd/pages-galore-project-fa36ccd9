/**
 * Runtime-style handler tests for submit-estimate-inquiry / notification retry.
 * Stubs DB, fetch (Turnstile), and email — no network, uploads, or real credentials.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  handleRetryInquiryNotifications,
  handleSubmitEstimateInquiry,
  verifyTurnstileToken,
  type InquiryDb,
  type InquiryNotificationRow,
  type SendEmailResult,
} from "@/lib/submitEstimateInquiryCore";
import { parsePricedQuoteAmounts, isAcceptablePricedQuote } from "@/lib/pricedQuote";
import type { EstimateInquiryRow } from "@/lib/estimateInquiry";

const INQUIRY_ID = "aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee";
const NOTIFY_CUSTOMER_ID = "n1111111-1111-4111-8111-111111111111";
const NOTIFY_INTERNAL_ID = "n2222222-2222-4222-8222-222222222222";

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

function createMemDb(): InquiryDb & {
  inquiries: Array<EstimateInquiryRow & { id: string }>;
  notifications: InquiryNotificationRow[];
  rejections: Array<{ reason: string }>;
} {
  const state = {
    inquiries: [] as Array<EstimateInquiryRow & { id: string }>,
    notifications: [] as InquiryNotificationRow[],
    rejections: [] as Array<{ reason: string }>,
  };
  const db: InquiryDb & typeof state = {
    ...state,
    async insertRejectedLead(entry) {
      state.rejections.push({ reason: entry.reason });
      return { error: null };
    },
    async insertInquiry(row) {
      const record = { ...row, id: INQUIRY_ID };
      state.inquiries.push(record);
      return { data: { id: INQUIRY_ID }, error: null };
    },
    async insertNotificationPending(entry) {
      const id =
        entry.recipient_kind === "customer" ? NOTIFY_CUSTOMER_ID : NOTIFY_INTERNAL_ID;
      state.notifications.push({
        id,
        inquiry_id: entry.inquiry_id,
        recipient_kind: entry.recipient_kind,
        recipient_email: entry.recipient_email,
        status: "pending",
        attempt_count: 0,
        last_error: null,
        provider_message_id: null,
      });
      return { data: { id }, error: null };
    },
    async updateNotificationOutcome(entry) {
      const row = state.notifications.find((n) => n.id === entry.id);
      if (row) {
        row.status = entry.status;
        row.attempt_count = entry.attempt_count;
        row.last_error = entry.last_error;
        row.provider_message_id = entry.provider_message_id;
      }
      return { error: null };
    },
    async listRetryableNotifications(inquiryId) {
      const data = state.notifications.filter(
        (n) =>
          (n.status === "pending" || n.status === "failed") &&
          (!inquiryId || n.inquiry_id === inquiryId),
      );
      return { data, error: null };
    },
    async getInquiryRow(inquiryId) {
      const data = state.inquiries.find((i) => i.id === inquiryId) ?? null;
      return { data, error: null };
    },
  };
  return db;
}

describe("verifyTurnstileToken", () => {
  it("skips when secret is unconfigured", async () => {
    const verdict = await verifyTurnstileToken({
      token: undefined,
      ip: null,
      env: { get: () => undefined },
      fetcher: { fetch: vi.fn() },
    });
    expect(verdict).toBe("skip");
  });

  it("requires a nonempty token when secret is configured", async () => {
    const fetchMock = vi.fn();
    expect(
      await verifyTurnstileToken({
        token: "",
        ip: null,
        env: { get: (k) => (k === "TURNSTILE_SECRET" ? "stub-secret" : undefined) },
        fetcher: { fetch: fetchMock },
      }),
    ).toBe("missing");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns fail/ok from siteverify", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce({ json: async () => ({ success: false }) })
      .mockResolvedValueOnce({ json: async () => ({ success: true }) });
    const env = { get: (k: string) => (k === "TURNSTILE_SECRET" ? "stub-secret" : undefined) };
    expect(
      await verifyTurnstileToken({
        token: "bad",
        ip: "1.1.1.1",
        env,
        fetcher: { fetch: fetchMock },
      }),
    ).toBe("fail");
    expect(
      await verifyTurnstileToken({
        token: "good",
        ip: null,
        env,
        fetcher: { fetch: fetchMock },
      }),
    ).toBe("ok");
  });
});

describe("handleSubmitEstimateInquiry", () => {
  let db: ReturnType<typeof createMemDb>;
  let sendEmail: ReturnType<typeof vi.fn<(...args: unknown[]) => Promise<SendEmailResult>>>;

  beforeEach(() => {
    db = createMemDb();
    sendEmail = vi.fn(async () => ({ ok: true, providerMessageId: "msg_1" }));
  });

  async function run(
    body: Record<string, unknown>,
    envMap: Record<string, string | undefined> = {},
  ) {
    return handleSubmitEstimateInquiry({
      body,
      clientIp: "127.0.0.1",
      userAgent: "vitest",
      db,
      env: { get: (k) => envMap[k] },
      clock: { now: () => Date.now() },
      fetcher: {
        fetch: vi.fn(async () => ({ json: async () => ({ success: true }) })) as unknown as typeof fetch,
      },
      mailer: {
        sendEmail: sendEmail as unknown as (
          to: string,
          subject: string,
          html: string,
        ) => Promise<SendEmailResult>,
        notificationEmail: "ops@fdzconstruction.com",
      },
    });
  }

  it("stores a valid Kansas inquiry and records provider-accepted notifications", async () => {
    const res = await run(validBody());
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ success: true, inquiryId: INQUIRY_ID });
    expect(db.inquiries).toHaveLength(1);
    expect(db.inquiries[0].origin).toBe("concrete-contractors-wichita-ks");
    expect(db.inquiries[0].project_type).toBe("commercial");
    expect(JSON.stringify(db.inquiries[0])).not.toMatch(/estimate_low|length_ft/);
    expect(db.notifications).toHaveLength(2);
    expect(db.notifications.every((n) => n.status === "provider_accepted")).toBe(true);
    expect(sendEmail).toHaveBeenCalledTimes(2);
  });

  it("rejects invalid inputs with HTTP 400 and no insert", async () => {
    const res = await run(validBody({ email: "not-an-email" }));
    expect(res.status).toBe(400);
    expect(db.inquiries).toHaveLength(0);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns recoverable 400 when Turnstile is configured and token is missing", async () => {
    const res = await run(validBody({ turnstileToken: "" }), {
      TURNSTILE_SECRET: "stub-secret",
    });
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.code).toBe("turnstile_required");
    expect(db.inquiries).toHaveLength(0);
    expect(db.rejections.some((r) => r.reason === "turnstile_missing")).toBe(true);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("returns recoverable 400 when Turnstile verification fails", async () => {
    const res = await handleSubmitEstimateInquiry({
      body: validBody({ turnstileToken: "expired" }),
      clientIp: null,
      userAgent: null,
      db,
      env: { get: (k) => (k === "TURNSTILE_SECRET" ? "stub-secret" : undefined) },
      clock: { now: () => Date.now() },
      fetcher: {
        fetch: vi.fn(async () => ({
          json: async () => ({ success: false }),
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
    });
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.code).toBe("turnstile_failed");
    expect(db.inquiries).toHaveLength(0);
  });

  it("returns 500 when database insert fails and does not email", async () => {
    db.insertInquiry = async () => ({ data: null, error: { message: "db down" } });
    const res = await run(validBody());
    expect(res.status).toBe(500);
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it("keeps stored inquiry when both emails fail and persists failed notification rows", async () => {
    sendEmail.mockResolvedValue({ ok: false, status: 500, error: "provider 500" });
    const res = await run(validBody());
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.inquiryId).toBe(INQUIRY_ID);
    expect(db.notifications).toHaveLength(2);
    expect(db.notifications.every((n) => n.status === "failed")).toBe(true);
    expect(db.notifications.every((n) => n.last_error === "provider 500")).toBe(true);
  });

  it("honeypot returns silent success without inquiryId or conversion storage", async () => {
    const res = await run(validBody({ company_website: "http://spam.test" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ success: true });
    expect(json.inquiryId).toBeUndefined();
    expect(db.inquiries).toHaveLength(0);
  });
});

describe("handleRetryInquiryNotifications", () => {
  it("rejects unauthorized callers", async () => {
    const db = createMemDb();
    const res = await handleRetryInquiryNotifications({
      body: {},
      db,
      mailer: {
        sendEmail: async () => ({ ok: true }),
        notificationEmail: "ops@fdzconstruction.com",
      },
      authorized: false,
    });
    expect(res.status).toBe(401);
  });

  it("retries failed notifications without creating a new inquiry", async () => {
    const db = createMemDb();
    db.inquiries.push({
      id: INQUIRY_ID,
      customer_name: "Wichita Lead",
      customer_email: "wichita-lead@example.com",
      customer_phone: "3165550199",
      customer_address: null,
      project_type: "commercial",
      property_type: null,
      customer_role: null,
      approx_size: null,
      bidding_status: null,
      project_details: "notes",
      origin: "concrete-contractors-wichita-ks",
      status: "inquiry",
    });
    db.notifications.push({
      id: NOTIFY_INTERNAL_ID,
      inquiry_id: INQUIRY_ID,
      recipient_kind: "internal",
      recipient_email: "ops@fdzconstruction.com",
      status: "failed",
      attempt_count: 1,
      last_error: "provider 500",
      provider_message_id: null,
    });
    db.notifications.push({
      id: NOTIFY_CUSTOMER_ID,
      inquiry_id: INQUIRY_ID,
      recipient_kind: "customer",
      recipient_email: "wichita-lead@example.com",
      status: "provider_accepted",
      attempt_count: 1,
      last_error: null,
      provider_message_id: "msg_ok",
    });

    const sendEmail = vi.fn(async () => ({ ok: true, providerMessageId: "msg_retry" }));
    const res = await handleRetryInquiryNotifications({
      body: { inquiryId: INQUIRY_ID },
      db,
      mailer: {
        sendEmail,
        notificationEmail: "ops@fdzconstruction.com",
      },
      authorized: true,
    });
    expect(res.status).toBe(200);
    expect(db.inquiries).toHaveLength(1);
    expect(sendEmail).toHaveBeenCalledTimes(1);
    const failed = db.notifications.find((n) => n.id === NOTIFY_INTERNAL_ID)!;
    expect(failed.status).toBe("provider_accepted");
    expect(failed.attempt_count).toBe(2);
    const alreadyOk = db.notifications.find((n) => n.id === NOTIFY_CUSTOMER_ID)!;
    expect(alreadyOk.status).toBe("provider_accepted");
    expect(alreadyOk.attempt_count).toBe(1);
  });
});

describe("priced quote runtime guards (side-effect prevention)", () => {
  it("rejects null/non-finite/non-numeric prices and requires positive dimensions", () => {
    for (const bad of [null, undefined, NaN, Infinity, "12000"]) {
      expect(
        parsePricedQuoteAmounts({
          estimateLow: bad,
          estimateHigh: 18000,
          lengthFt: 40,
          widthFt: 20,
          sqft: 800,
        }).ok,
      ).toBe(false);
    }
    expect(
      parsePricedQuoteAmounts({
        estimateLow: 12000,
        estimateHigh: 18000,
        lengthFt: 0,
        widthFt: 20,
        sqft: 800,
      }).ok,
    ).toBe(false);
  });

  it("accepts a valid priced OKC path and blocks unpriced acceptance", () => {
    const priced = parsePricedQuoteAmounts({
      estimateLow: 12000,
      estimateHigh: 18000,
      lengthFt: 40,
      widthFt: 20,
      sqft: 800,
    });
    expect(priced.ok).toBe(true);
    expect(
      isAcceptablePricedQuote({
        status: "pending",
        estimate_low: 12000,
        estimate_high: 18000,
      }),
    ).toBe(true);
    expect(
      isAcceptablePricedQuote({
        status: "pending",
        estimate_low: null,
        estimate_high: null,
      }),
    ).toBe(false);
  });
});
