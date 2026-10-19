import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";
import {
  handleSubmitEstimateInquiry,
  INQUIRY_CORS_HEADERS,
  type InquiryDb,
  type InquiryNotificationRow,
} from "../../../src/lib/submitEstimateInquiryCore.ts";
import type { EstimateInquiryRow } from "../../../src/lib/estimateInquiry.ts";

function createInquiryDb(supabase: ReturnType<typeof createClient>): InquiryDb {
  return {
    async insertRejectedLead(entry) {
      const { error } = await supabase.from("rejected_leads").insert({
        reason: entry.reason,
        payload: entry.payload,
        client_ip: entry.clientIp,
        user_agent: entry.userAgent,
      });
      return { error };
    },
    async insertInquiry(row: EstimateInquiryRow) {
      const { data, error } = await supabase
        .from("estimate_inquiries")
        .insert(row)
        .select("id")
        .single();
      return { data: data as { id: string } | null, error };
    },
    async insertNotificationPending(entry) {
      const { data, error } = await supabase
        .from("estimate_inquiry_notifications")
        .insert({
          inquiry_id: entry.inquiry_id,
          recipient_kind: entry.recipient_kind,
          recipient_email: entry.recipient_email,
          status: "pending",
          attempt_count: 0,
        })
        .select("id")
        .single();
      return { data: data as { id: string } | null, error };
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
      const { data, error } = await q;
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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: INQUIRY_CORS_HEADERS });
  }

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const db = createInquiryDb(supabase);

    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;
    const userAgent = req.headers.get("user-agent");

    return await handleSubmitEstimateInquiry({
      body,
      clientIp,
      userAgent,
      db,
      env: { get: (key) => Deno.env.get(key) },
      clock: { now: () => Date.now() },
      fetcher: { fetch: (...args) => fetch(...args) },
      mailer: {
        sendEmail,
        notificationEmail: NOTIFICATION_EMAIL,
      },
    });
  } catch (err) {
    console.error("Error processing estimate inquiry:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
