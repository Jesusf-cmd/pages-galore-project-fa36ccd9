import type { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import type { EstimateInquiryRow } from "../../../src/lib/estimateInquiry.ts";
import type {
  CreatedInquiryBundle,
  InquiryDb,
  InquiryNotificationRow,
} from "../../../src/lib/submitEstimateInquiryCore.ts";

type SupabaseClient = ReturnType<typeof createClient>;

const NOTIFICATION_SELECT =
  "id, inquiry_id, recipient_kind, recipient_email, status, attempt_count, last_error, provider_message_id, claim_token, claimed_at, claim_expires_at";

export function createSupabaseInquiryDb(supabase: SupabaseClient): InquiryDb {
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
    async createInquiryWithNotifications(row, internalEmail) {
      const { data, error } = await supabase.rpc(
        "create_estimate_inquiry_with_notifications",
        {
          p_inquiry: row,
          p_internal_email: internalEmail,
        },
      );
      if (error || !data) return { data: null, error: error ?? new Error("empty rpc") };
      const raw = data as {
        inquiry_id: string;
        customer_notification_id: string;
        internal_notification_id: string;
      };
      const bundle: CreatedInquiryBundle = {
        inquiryId: raw.inquiry_id,
        customerNotificationId: raw.customer_notification_id,
        internalNotificationId: raw.internal_notification_id,
      };
      return { data: bundle, error: null };
    },
    async claimNotification(entry) {
      const { data, error } = await supabase.rpc("claim_estimate_inquiry_notification", {
        p_notification_id: entry.notificationId,
        p_claim_token: entry.claimToken,
        p_claim_ttl_seconds: entry.claimTtlSeconds ?? 120,
      });
      if (error) return { data: null, error };
      return { data: (data as InquiryNotificationRow | null) ?? null, error: null };
    },
    async recordProviderAcceptance(entry) {
      const { data, error } = await supabase.rpc("record_notification_provider_acceptance", {
        p_notification_id: entry.notificationId,
        p_claim_token: entry.claimToken,
        p_expected_attempt: entry.expectedAttempt,
        p_provider_message_id: entry.providerMessageId,
      });
      if (error) return { ok: false, error };
      return { ok: Boolean(data), error: null };
    },
    async finalizeNotification(entry) {
      const { data, error } = await supabase.rpc("finalize_estimate_inquiry_notification", {
        p_notification_id: entry.notificationId,
        p_claim_token: entry.claimToken,
        p_expected_attempt: entry.expectedAttempt,
        p_status: entry.status,
        p_last_error: entry.lastError,
        p_provider_message_id: entry.providerMessageId,
      });
      if (error) return { ok: false, error };
      return { ok: Boolean(data), error: null };
    },
    async listRetryableNotifications(inquiryId) {
      const nowIso = new Date().toISOString();
      let q = supabase
        .from("estimate_inquiry_notifications")
        .select(NOTIFICATION_SELECT)
        .or(
          `status.in.(pending,failed),and(status.eq.sending,claim_expires_at.lt.${nowIso})`,
        )
        .order("updated_at", { ascending: true })
        .limit(50);
      if (inquiryId) q = q.eq("inquiry_id", inquiryId);
      const { data, error } = await q;
      return { data: data as InquiryNotificationRow[] | null, error };
    },
    async listNotificationsForInquiry(inquiryId) {
      const { data, error } = await supabase
        .from("estimate_inquiry_notifications")
        .select(NOTIFICATION_SELECT)
        .eq("inquiry_id", inquiryId);
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
    async reconcileMissingNotifications(entry) {
      const { data, error } = await supabase.rpc("reconcile_estimate_inquiry_notifications", {
        p_internal_email: entry.internalEmail,
        p_inquiry_id: entry.inquiryId ?? null,
      });
      if (error || !data) return { data: null, error: error ?? new Error("empty rpc") };
      const created = Number((data as { created?: number }).created ?? 0);
      return { data: { created }, error: null };
    },
  };
}
