/**
 * In-memory InquiryDb for isolated Vitest concurrency/transaction tests.
 * Mirrors the PostgreSQL claim/finalize/reconcile semantics used in production RPCs.
 */
import type { EstimateInquiryRow } from "./estimateInquiry.ts";
import {
  NOTIFICATION_CLAIM_TTL_MS,
  type CreatedInquiryBundle,
  type InquiryDb,
  type InquiryNotificationRow,
  type NotificationRecipientKind,
  type NotificationStatus,
} from "./submitEstimateInquiryCore.ts";

function newId(prefix: string): string {
  return `${prefix}-${Math.random().toString(16).slice(2)}${Date.now().toString(16)}`;
}

export type MemInquiryState = {
  inquiries: Array<EstimateInquiryRow & { id: string }>;
  notifications: InquiryNotificationRow[];
  rejections: Array<{ reason: string }>;
  /** Simulate create failure after inquiry would have been visible (transactional: nothing kept). */
  failCreate?: boolean;
  /** Fail finalize after provider accept was recorded. */
  failFinalizeOnceIds?: Set<string>;
};

export function createMemoryInquiryDb(
  state: MemInquiryState,
  clock: { now: () => number } = { now: () => Date.now() },
): InquiryDb & { state: MemInquiryState } {
  const db: InquiryDb & { state: MemInquiryState } = {
    state,
    async insertRejectedLead(entry) {
      state.rejections.push({ reason: entry.reason });
      return { error: null };
    },
    async createInquiryWithNotifications(row, internalEmail) {
      if (state.failCreate) {
        return { data: null, error: { message: "forced create failure" } };
      }
      const inquiryId = newId("inq");
      const customerNotificationId = newId("n-cust");
      const internalNotificationId = newId("n-int");
      state.inquiries.push({ ...row, id: inquiryId });
      state.notifications.push({
        id: customerNotificationId,
        inquiry_id: inquiryId,
        recipient_kind: "customer",
        recipient_email: row.customer_email,
        status: "pending",
        attempt_count: 0,
        last_error: null,
        provider_message_id: null,
        claim_token: null,
        claimed_at: null,
        claim_expires_at: null,
      });
      state.notifications.push({
        id: internalNotificationId,
        inquiry_id: inquiryId,
        recipient_kind: "internal",
        recipient_email: internalEmail,
        status: "pending",
        attempt_count: 0,
        last_error: null,
        provider_message_id: null,
        claim_token: null,
        claimed_at: null,
        claim_expires_at: null,
      });
      const data: CreatedInquiryBundle = {
        inquiryId,
        customerNotificationId,
        internalNotificationId,
      };
      return { data, error: null };
    },
    async claimNotification(entry) {
      const row = state.notifications.find((n) => n.id === entry.notificationId);
      if (!row) return { data: null, error: null };
      const now = clock.now();
      const ttlMs = (entry.claimTtlSeconds ?? Math.floor(NOTIFICATION_CLAIM_TTL_MS / 1000)) * 1000;
      const expiredSending =
        row.status === "sending" &&
        row.claim_expires_at != null &&
        Date.parse(row.claim_expires_at) < now;
      const claimable =
        row.status === "pending" || row.status === "failed" || expiredSending;
      if (!claimable) return { data: null, error: null };

      row.status = "sending";
      row.claim_token = entry.claimToken;
      row.claimed_at = new Date(now).toISOString();
      row.claim_expires_at = new Date(now + ttlMs).toISOString();
      row.attempt_count += 1;
      return { data: { ...row }, error: null };
    },
    async recordProviderAcceptance(entry) {
      const row = state.notifications.find((n) => n.id === entry.notificationId);
      if (
        !row ||
        row.claim_token !== entry.claimToken ||
        row.attempt_count !== entry.expectedAttempt ||
        row.status !== "sending"
      ) {
        return { ok: false, error: null };
      }
      row.provider_message_id = entry.providerMessageId ?? row.provider_message_id;
      row.last_error = "provider_accepted_finalize_pending";
      return { ok: true, error: null };
    },
    async finalizeNotification(entry) {
      if (state.failFinalizeOnceIds?.has(entry.notificationId)) {
        state.failFinalizeOnceIds.delete(entry.notificationId);
        return { ok: false, error: { message: "forced finalize failure" } };
      }
      const row = state.notifications.find((n) => n.id === entry.notificationId);
      if (
        !row ||
        row.claim_token !== entry.claimToken ||
        row.attempt_count !== entry.expectedAttempt ||
        row.status !== "sending"
      ) {
        return { ok: false, error: null };
      }
      row.status = entry.status;
      row.last_error = entry.status === "provider_accepted" ? null : entry.lastError;
      row.provider_message_id = entry.providerMessageId ?? row.provider_message_id;
      row.claim_token = null;
      row.claimed_at = null;
      row.claim_expires_at = null;
      return { ok: true, error: null };
    },
    async listRetryableNotifications(inquiryId) {
      const now = clock.now();
      const data = state.notifications.filter((n) => {
        if (inquiryId && n.inquiry_id !== inquiryId) return false;
        if (n.status === "pending" || n.status === "failed") return true;
        if (
          n.status === "sending" &&
          n.claim_expires_at &&
          Date.parse(n.claim_expires_at) < now
        ) {
          return true;
        }
        return false;
      });
      return { data, error: null };
    },
    async listNotificationsForInquiry(inquiryId) {
      return {
        data: state.notifications.filter((n) => n.inquiry_id === inquiryId),
        error: null,
      };
    },
    async getInquiryRow(inquiryId) {
      return {
        data: state.inquiries.find((i) => i.id === inquiryId) ?? null,
        error: null,
      };
    },
    async reconcileMissingNotifications(entry) {
      let created = 0;
      const targets = entry.inquiryId
        ? state.inquiries.filter((i) => i.id === entry.inquiryId)
        : state.inquiries;
      for (const inq of targets) {
        for (const kind of ["customer", "internal"] as NotificationRecipientKind[]) {
          const exists = state.notifications.some(
            (n) => n.inquiry_id === inq.id && n.recipient_kind === kind,
          );
          if (exists) continue;
          state.notifications.push({
            id: newId(`n-${kind}`),
            inquiry_id: inq.id,
            recipient_kind: kind,
            recipient_email:
              kind === "customer" ? inq.customer_email : entry.internalEmail,
            status: "pending" as NotificationStatus,
            attempt_count: 0,
            last_error: null,
            provider_message_id: null,
            claim_token: null,
            claimed_at: null,
            claim_expires_at: null,
          });
          created += 1;
        }
      }
      return { data: { created }, error: null };
    },
  };
  return db;
}
