/**
 * Restricted inspect / reconcile / retry for inquiry notifications.
 * Authorize with service-role Bearer or INQUIRY_NOTIFY_RETRY_SECRET.
 * GET (or action=inspect) is read-only. POST action=retry|reconcile mutates.
 */
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";
import { createSupabaseInquiryDb } from "../_shared/inquiryDb.ts";
import {
  handleInspectInquiryNotifications,
  handleReconcileInquiryNotifications,
  handleRetryInquiryNotifications,
  INQUIRY_CORS_HEADERS,
} from "../../../src/lib/submitEstimateInquiryCore.ts";

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
    const authorized = isAuthorized(req);
    const url = new URL(req.url);
    let body: Record<string, unknown> = {};
    if (req.method !== "GET" && req.method !== "HEAD") {
      body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    } else {
      const inquiryId = url.searchParams.get("inquiryId");
      if (inquiryId) body.inquiryId = inquiryId;
    }

    const actionRaw =
      typeof body.action === "string"
        ? body.action
        : req.method === "GET" || req.method === "HEAD"
          ? "inspect"
          : "retry";
    const action = actionRaw.toLowerCase();

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const db = createSupabaseInquiryDb(supabase);
    const mailer = {
      sendEmail,
      notificationEmail: NOTIFICATION_EMAIL,
    };

    if (action === "inspect") {
      return await handleInspectInquiryNotifications({ body, db, authorized });
    }
    if (action === "reconcile") {
      if (req.method === "GET" || req.method === "HEAD") {
        return new Response(
          JSON.stringify({ error: "Reconciliation requires POST" }),
          {
            status: 405,
            headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
          },
        );
      }
      return await handleReconcileInquiryNotifications({ body, db, mailer, authorized });
    }
    if (action === "retry") {
      if (req.method === "GET" || req.method === "HEAD") {
        return new Response(
          JSON.stringify({ error: "Retry requires POST" }),
          {
            status: 405,
            headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
          },
        );
      }
      return await handleRetryInquiryNotifications({ body, db, mailer, authorized });
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
      status: 400,
      headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error in inquiry notification ops:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
