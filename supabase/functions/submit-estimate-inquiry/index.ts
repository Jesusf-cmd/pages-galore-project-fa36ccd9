import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";
import {
  buildEstimateInquiryRow,
  customerInquiryEmailHtml,
  internalInquiryEmailHtml,
} from "../../../src/lib/estimateInquiry.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

/** Same shape as a real success so bots can't fingerprint spam rejection. */
function silentSuccess() {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

const MIN_FILL_MS = 3000;

type RejectLog = {
  reason: string;
  payload: Record<string, unknown>;
  clientIp: string | null;
  userAgent: string | null;
};

async function logRejection(
  supabase: ReturnType<typeof createClient>,
  entry: RejectLog,
): Promise<void> {
  console.warn("[submit-estimate-inquiry] rejected_lead", entry.reason, {
    clientIp: entry.clientIp,
    email: entry.payload.email,
    name: entry.payload.name,
  });
  try {
    const { error } = await supabase.from("rejected_leads").insert({
      reason: entry.reason,
      payload: entry.payload,
      client_ip: entry.clientIp,
      user_agent: entry.userAgent,
    });
    if (error) console.error("[submit-estimate-inquiry] rejected_leads insert failed:", error);
  } catch (err) {
    console.error("[submit-estimate-inquiry] rejected_leads insert threw:", err);
  }
}

function rejectPayload(body: Record<string, unknown>): Record<string, unknown> {
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
    hasHoneypot: typeof body.company_website === "string" && String(body.company_website).trim().length > 0,
    hasTurnstileToken: Boolean(body.turnstileToken),
  };
}

async function verifyTurnstile(token: string | undefined, ip: string | null): Promise<"ok" | "fail" | "skip"> {
  const secret = Deno.env.get("TURNSTILE_SECRET");
  if (!secret) return "skip";
  if (token === undefined || token === null || token === "") return "skip";
  try {
    const form = new URLSearchParams();
    form.set("secret", secret);
    form.set("response", token);
    if (ip) form.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = await res.json();
    return data?.success ? "ok" : "fail";
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return "fail";
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      details,
      projectType,
      ownerProjectType,
      company_website: honeypot,
      formStartedAt,
      turnstileToken,
      propertyType,
      customerRole,
      approxSize,
      biddingStatus,
    } = body;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;
    const userAgent = req.headers.get("user-agent");

    const reject = async (reason: string) => {
      await logRejection(supabase, {
        reason,
        payload: rejectPayload(body),
        clientIp,
        userAgent,
      });
      return silentSuccess();
    };

    if (typeof honeypot === "string" && honeypot.trim()) {
      return await reject("honeypot_filled");
    }
    if (formStartedAt !== undefined && formStartedAt !== null && formStartedAt !== "") {
      const started = typeof formStartedAt === "number" ? formStartedAt : Number(formStartedAt);
      if (!Number.isFinite(started)) {
        return await reject("form_started_at_invalid");
      }
      const elapsed = Date.now() - started;
      if (elapsed < MIN_FILL_MS) {
        return await reject(`fill_too_fast_${elapsed}ms`);
      }
    }
    const turnstile = await verifyTurnstile(turnstileToken, clientIp);
    if (turnstile === "fail") {
      return await reject("turnstile_failed");
    }

    // Prefer the selected owner project type; never invent slab/dimensions/prices.
    const resolvedProjectType = ownerProjectType || projectType;
    const built = buildEstimateInquiryRow({
      name,
      email,
      phone,
      address,
      details,
      projectType: resolvedProjectType,
      propertyType,
      customerRole,
      approxSize,
      biddingStatus,
      from: body.from,
    });

    if (!built.ok) {
      return new Response(JSON.stringify({ error: built.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: inquiry, error: dbError } = await supabase
      .from("estimate_inquiries")
      .insert(built.row)
      .select("id")
      .single();

    if (dbError || !inquiry) {
      console.error("estimate_inquiries insert error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save inquiry" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      const firstName = built.row.customer_name.split(" ")[0];
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

      await Promise.allSettled([
        sendEmail(
          built.row.customer_email,
          "We received your estimate request — FDZ Construction",
          customerHtml,
        ),
        sendEmail(
          NOTIFICATION_EMAIL,
          `New Estimate Inquiry - ${built.row.customer_name}`,
          internalHtml,
        ),
      ]);
    } else {
      console.warn("RESEND_API_KEY not configured, skipping inquiry email sends");
    }

    // No accessToken — inquiries are not accept-ready quotes.
    return new Response(
      JSON.stringify({ success: true, inquiryId: inquiry.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Error processing estimate inquiry:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
