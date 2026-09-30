import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";

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
  console.warn("[submit-quote] rejected_lead", entry.reason, {
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
    if (error) console.error("[submit-quote] rejected_leads insert failed:", error);
  } catch (err) {
    console.error("[submit-quote] rejected_leads insert threw:", err);
  }
}

/** Redact for storage — keep enough to recover a mistaken block. */
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
  // TODO(FDZ): TURNSTILE_SITE_KEY / TURNSTILE_SECRET — set TURNSTILE_SECRET to enforce.
  const secret = Deno.env.get("TURNSTILE_SECRET");
  if (!secret) return "skip"; // flag off until owner supplies keys
  // Backward compatible: if the client never sent a token (old site), skip.
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
      name, email, phone, address, details,
      projectType, finishType, lengthFt, widthFt, sqft,
      estimateLow, estimateHigh, lineItems, siteUrl,
      company_website: honeypot,
      formStartedAt,
      turnstileToken,
      propertyType,
      customerRole,
      ownerProjectType,
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

    // Spam controls — only enforce fields the client actually sent (old site ↔ new function).
    // Honeypot: reject only when the field is present and non-empty.
    if (typeof honeypot === "string" && honeypot.trim()) {
      return await reject("honeypot_filled");
    }
    // Fill-time: reject only when formStartedAt is present and too fast / invalid.
    // Missing formStartedAt = legacy client → allow.
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

    if (!name || !email || !phone || !projectType || !lengthFt || !widthFt) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const leadMeta = [
      propertyType && `Property type: ${propertyType}`,
      customerRole && `Role: ${customerRole}`,
      ownerProjectType && `Owner project type: ${ownerProjectType}`,
      approxSize && `Approximate size: ${approxSize}`,
      biddingStatus && `Bidding status: ${biddingStatus}`,
    ]
      .filter(Boolean)
      .join("\n");
    const detailsWithMeta =
      leadMeta && details && !String(details).includes("Property type:")
        ? `${String(details).trim()}\n\n${leadMeta}`
        : leadMeta && !details
          ? leadMeta
          : details;

    const { data: quote, error: dbError } = await supabase
      .from("quotes")
      .insert({
        customer_name: name.trim().slice(0, 100),
        customer_email: email.trim().slice(0, 255),
        customer_phone: phone.trim().slice(0, 20),
        customer_address: (address || "").trim().slice(0, 500),
        project_details: detailsWithMeta ? String(detailsWithMeta).trim().slice(0, 2000) : null,
        project_type: projectType,
        finish_type: finishType || null,
        length_ft: lengthFt,
        width_ft: widthFt,
        square_feet: sqft,
        estimate_low: estimateLow,
        estimate_high: estimateHigh,
        line_items: lineItems || [],
        total_estimate: estimateHigh,
      })
      .select("id, quote_number, valid_until, access_token")
      .single();

    if (dbError || !quote) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save quote" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const quoteNumber = `#${String(quote.quote_number).padStart(4, "0")}`;
    const baseUrl = siteUrl || "https://fdzconstruction.com";
    // Public-facing link uses the unguessable access token, NOT the primary id.
    const quoteUrl = `${baseUrl}/quote/${quote.access_token}`;
    const firstName = name.trim().split(" ")[0];
    const expiresDate = new Date(quote.valid_until).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const customerHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f1eb;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="background:#1a1a1a;padding:24px 32px;text-align:center;">
      <div style="color:#c45c26;font-size:10px;letter-spacing:3px;font-weight:bold;margin-bottom:4px;">LICENSED & INSURED</div>
      <div style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:1px;">FDZ CONSTRUCTION</div>
    </div>
    <div style="padding:32px;">
      <h1 style="color:#1a1a1a;font-size:20px;margin:0 0 16px;">Hi ${firstName},</h1>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">Thank you for requesting a quote! Here's a summary of your estimate:</p>
      <div style="background:#f5f1eb;border-left:4px solid #c45c26;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">QUOTE NUMBER</div>
        <div style="color:#1a1a1a;font-size:24px;font-weight:800;">${quoteNumber}</div>
      </div>
      <div style="background:#1a1a1a;border-radius:8px;padding:20px;text-align:center;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:8px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:28px;font-weight:800;">$${estimateLow.toLocaleString()} – $${estimateHigh.toLocaleString()}</div>
      </div>
      <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:14px 20px;margin:0 0 24px;text-align:center;">
        <div style="color:#c45c26;font-size:13px;font-weight:bold;">⏳ Valid for 30 days</div>
        <div style="color:#888;font-size:12px;margin-top:4px;">Expires on <strong style="color:#1a1a1a;">${expiresDate}</strong></div>
      </div>
      <div style="text-align:center;margin:0 0 16px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#ffffff;text-decoration:none;padding:14px 36px;font-size:14px;font-weight:bold;letter-spacing:1px;border-radius:4px;">VIEW YOUR QUOTE</a>
      </div>
      <div style="text-align:center;margin:0 0 32px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;letter-spacing:1px;border-radius:4px;">ACCEPT QUOTE NOW →</a>
      </div>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">FDZ Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">(405) 458-4805 · jesus@fdzconstruction.com</div>
      <div style="color:#666;font-size:11px;margin-top:4px;">fdzconstruction.com</div>
    </div>
  </div>
</body></html>`;

      const includesHtml = (lineItems || []).map((item: any) => `
        <div style="margin-bottom:16px;">
          <div style="font-weight:bold;color:#1a1a1a;font-size:14px;margin-bottom:4px;">ITEM ${String(item.number).padStart(2, "0")}: ${item.title}</div>
          <div style="color:#c45c26;font-weight:bold;font-size:14px;margin-bottom:4px;">$${item.priceLow.toLocaleString()} – $${item.priceHigh.toLocaleString()}</div>
          <ul style="margin:0;padding-left:20px;color:#555;font-size:13px;">
            ${(item.includes || []).map((inc: string) => `<li style="margin-bottom:2px;">${inc}</li>`).join("")}
          </ul>
        </div>
      `).join("");

      const internalHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f5f5f5;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;">
    <div style="background:#1a1a1a;padding:16px 24px;">
      <div style="color:#c45c26;font-size:16px;font-weight:bold;">New Quote ${quoteNumber}</div>
      <div style="color:#888;font-size:12px;">${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
    </div>
    <div style="padding:24px;">
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Customer Details</h2>
      <table style="width:100%;font-size:14px;margin-bottom:24px;">
        <tr><td style="padding:4px 0;color:#888;width:100px;">Name:</td><td style="color:#1a1a1a;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Email:</td><td style="color:#1a1a1a;"><a href="mailto:${email}" style="color:#c45c26;">${email}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Phone:</td><td style="color:#1a1a1a;"><a href="tel:${phone}" style="color:#c45c26;">${phone}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Address:</td><td style="color:#1a1a1a;">${address || "Not provided"}</td></tr>
      </table>
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Itemized Breakdown</h2>
      ${includesHtml}
      <div style="background:#1a1a1a;padding:16px 20px;margin:24px 0;border-radius:4px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;margin-bottom:4px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:24px;font-weight:800;">$${estimateLow.toLocaleString()} – $${estimateHigh.toLocaleString()}</div>
      </div>
      <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:4px;padding:10px 16px;margin:0 0 24px;">
        <div style="color:#c45c26;font-size:12px;font-weight:bold;">Expires: ${expiresDate}</div>
      </div>
      ${detailsWithMeta ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${detailsWithMeta}</p>` : ""}
      <div style="text-align:center;margin-top:24px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#fff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;border-radius:4px;margin-right:8px;">VIEW QUOTE</a>
        <a href="${baseUrl}/admin" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;border-radius:4px;">ADMIN DASHBOARD</a>
      </div>
    </div>
  </div>
</body></html>`;

      const sendQuoteEmail = async (to: string, subject: string, html: string) => {
        const result = await sendEmail(to, subject, html);
        if (!result.ok) {
          console.error(`Quote email failed (${subject}):`, result.error);
        }
      };

      await Promise.allSettled([
        sendQuoteEmail(email, `Your Quote ${quoteNumber} from FDZ Construction`, customerHtml),
        sendQuoteEmail(NOTIFICATION_EMAIL, `New Quote ${quoteNumber} - ${name}`, internalHtml),
      ]);
    } else {
      console.warn("RESEND_API_KEY not configured, skipping email sends");
    }

    return new Response(
      JSON.stringify({ success: true, accessToken: quote.access_token, quoteNumber: quote.quote_number }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error processing quote:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
