/**
 * Restricted retry/inspection for failed or pending inquiry notifications.
 * Authorize with the service-role Bearer token or INQUIRY_NOTIFY_RETRY_SECRET
 * (x-fdz-retry-secret / Authorization: Bearer <secret>).
 * Does not create inquiries; skips provider_accepted rows.
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";
import {
  handleRetryInquiryNotifications,
  INQUIRY_CORS_HEADERS,
  type InquiryDb,
  type InquiryNotificationRow,
} from "../../../src/lib/submitEstimateInquiryCore.ts";
import type { EstimateInquiryRow } from "../../../src/lib/estimateInquiry.ts";

function createInquiryDb(supabase: ReturnType<typeof createClient>): InquiryDb {
  return {
    async insertRejectedLead() {
      return { error: null };
    },
    async insertInquiry() {
      return { data: null, error: new Error("not used") };
    },
    async insertNotificationPending() {
      return { data: null, error: new Error("not used") };
    },
    async updateNotificationOutcome(entry) {
      const { error } = await supabase
        .from("estimate_inquiry_notifications")
        .update({
          status: entry.status,
          attempt_count: entry.attempt_count,
          last_error: entry.last_error,
          provider_message_id: entry.provider_message_id,
          last_attempt_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("id", entry.id);
      return { error };
    },
    async listRetryableNotifications(inquiryId) {
      let q = supabase
        .from("estimate_inquiry_notifications")
        .select(
          "id, inquiry_id, recipient_kind, recipient_email, status, attempt_count, last_error, provider_message_id",
        )
        .in("status", ["pending", "failed"]);
      if (inquiryId) q = q.eq("inquiry_id", inquiryId);
      const { data, error } = await q.order("updated_at", { ascending: true }).limit(50);
      return { data: data as InquiryNotificationRow[] | null, error };
    },
    async getInquiryRow(inquiryId) {
      const { data, error } = await supabase
        .from("estimate_inquiries")
        .select(
          "id, customer_name, customer_email, customer_phone, customer_address, project_type, property_type, customer_role, approx_size, bidding_status, project_details, origin, status",
        )
        .eq("id", inquiryId)
        .maybeSingle();
      return {
        data: data as (EstimateInquiryRow & { id: string }) | null,
        error,
      };
    },
  };
}

function isAuthorized(req: Request): boolean {
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  const retrySecret = Deno.env.get("INQUIRY_NOTIFY_RETRY_SECRET") ?? "";
  const auth = req.headers.get("authorization") ?? "";
  const bearer = auth.toLowerCase().startsWith("bearer ") ? auth.slice(7).trim() : "";
  const headerSecret = req.headers.get("x-fdz-retry-secret")?.trim() ?? "";

  if (serviceKey && bearer && bearer === serviceKey) return true;
  if (retrySecret && (bearer === retrySecret || headerSecret === retrySecret)) return true;
  return false;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: INQUIRY_CORS_HEADERS });
  }

  try {
    const body =
      req.method === "GET" ? {} : ((await req.json().catch(() => ({}))) as Record<string, unknown>);
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    return await handleRetryInquiryNotifications({
      body,
      db: createInquiryDb(supabase),
      mailer: {
        sendEmail,
        notificationEmail: NOTIFICATION_EMAIL,
      },
      authorized: isAuthorized(req),
    });
  } catch (err) {
    console.error("Error retrying inquiry notifications:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
