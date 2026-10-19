/**
 * Deno-oriented handler tests (mirror of Vitest suite).
 * Run when Deno is available:
 *   deno test --allow-env --allow-net=off supabase/functions/submit-estimate-inquiry/handler_test.ts
 * Primary CI evidence uses Vitest: src/test/submit-estimate-inquiry-handler.test.ts
 */
import {
  handleSubmitEstimateInquiry,
  verifyTurnstileToken,
} from "../../../src/lib/submitEstimateInquiryCore.ts";

Deno.test("configured Turnstile rejects missing token without insert", async () => {
  let inserted = false;
  const res = await handleSubmitEstimateInquiry({
    body: {
      name: "A",
      email: "a@example.com",
      phone: "3165550100",
      projectType: "commercial",
      from: "concrete-contractors-wichita-ks",
      formStartedAt: Date.now() - 10_000,
      turnstileToken: "",
    },
    clientIp: null,
    userAgent: null,
    db: {
      insertRejectedLead: async () => ({ error: null }),
      insertInquiry: async () => {
        inserted = true;
        return { data: { id: "x" }, error: null };
      },
      insertNotificationPending: async () => ({ data: { id: "n" }, error: null }),
      updateNotificationOutcome: async () => ({ error: null }),
      listRetryableNotifications: async () => ({ data: [], error: null }),
      getInquiryRow: async () => ({ data: null, error: null }),
    },
    env: { get: (k) => (k === "TURNSTILE_SECRET" ? "secret" : undefined) },
    clock: { now: () => Date.now() },
    fetcher: { fetch: fetch },
    mailer: {
      sendEmail: async () => ({ ok: true }),
      notificationEmail: "ops@example.com",
    },
  });
  if (res.status !== 400) throw new Error(`expected 400, got ${res.status}`);
  if (inserted) throw new Error("must not insert when Turnstile token missing");
});

Deno.test("unconfigured Turnstile skips verification", async () => {
  const v = await verifyTurnstileToken({
    token: undefined,
    ip: null,
    env: { get: () => undefined },
    fetcher: { fetch },
  });
  if (v !== "skip") throw new Error(`expected skip, got ${v}`);
});
