import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(req: Request): string | null {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim().slice(0, 64);
  const real = req.headers.get("x-real-ip");
  if (real) return real.trim().slice(0, 64);
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { accessToken, signatureDataUrl, signerName, signerEmail } = await req.json();

    // Validate the token BEFORE doing anything else. Never accept a primary-id lookup from the public.
    if (!accessToken || !UUID_RE.test(accessToken)) {
      return new Response(JSON.stringify({ error: "Invalid quote link" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!signatureDataUrl || typeof signatureDataUrl !== "string" || !signatureDataUrl.startsWith("data:image/")) {
      return new Response(JSON.stringify({ error: "Signature is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!signerName || typeof signerName !== "string" || signerName.trim().length < 2) {
      return new Response(JSON.stringify({ error: "Signer name is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!signerEmail || typeof signerEmail !== "string" || !EMAIL_RE.test(signerEmail)) {
      return new Response(JSON.stringify({ error: "Valid signer email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Token-scoped lookup: this function can ONLY ever touch the one quote tied to the provided token.
    const { data: quote, error: fetchErr } = await supabase
      .from("quotes")
      .select("*")
      .eq("access_token", accessToken)
      .maybeSingle();

    if (fetchErr || !quote) {
      return new Response(JSON.stringify({ error: "Quote not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (quote.status !== "pending") {
      return new Response(JSON.stringify({ error: "Quote is not pending" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (new Date(quote.valid_until) < new Date()) {
      return new Response(JSON.stringify({ error: "Quote has expired" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const quoteId = quote.id;

    // Upload signature image
    const base64Data = signatureDataUrl.replace(/^data:image\/\w+;base64,/, "");
    const binaryData = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
    const signaturePath = `quote-${quoteId}.png`;

    const { error: uploadErr } = await supabase.storage
      .from("signatures")
      .upload(signaturePath, binaryData, {
        contentType: "image/png",
        upsert: true,
      });

    if (uploadErr) {
      console.error("Signature upload error:", uploadErr);
      return new Response(JSON.stringify({ error: "Failed to save signature" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Bucket is private — issue a long-lived signed URL (10 years) so emails and
    // the post-acceptance display can render the signature without exposing the bucket.
    const TEN_YEARS_SECONDS = 60 * 60 * 24 * 365 * 10;
    const { data: signedData, error: signedErr } = await supabase.storage
      .from("signatures")
      .createSignedUrl(signaturePath, TEN_YEARS_SECONDS);

    if (signedErr || !signedData?.signedUrl) {
      console.error("Signed URL error:", signedErr);
      return new Response(JSON.stringify({ error: "Failed to prepare signature" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const signatureUrl = signedData.signedUrl;
    const acceptedAt = new Date().toISOString();
    const acceptedIp = getClientIp(req);
    const cleanSignerName = signerName.trim().slice(0, 100);
    const cleanSignerEmail = signerEmail.trim().slice(0, 255).toLowerCase();

    // Scoped update: ONLY this quote, ONLY if still pending (atomic guard).
    const { error: updateErr } = await supabase
      .from("quotes")
      .update({
        status: "accepted",
        signature_url: signatureUrl,
        accepted_at: acceptedAt,
        signer_name: cleanSignerName,
        signer_email: cleanSignerEmail,
        accepted_ip: acceptedIp,
      })
      .eq("access_token", accessToken)
      .eq("status", "pending");

    if (updateErr) {
      console.error("Quote update error:", updateErr);
      return new Response(JSON.stringify({ error: "Failed to update quote" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send emails
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const quoteNumber = `#${String(quote.quote_number).padStart(4, "0")}`;
    const siteUrl = Deno.env.get("SITE_URL") || "https://fdzconstruction.com";
    const quoteUrl = `${siteUrl}/quote/${quote.access_token}`;
    const acceptedDateStr = new Date(acceptedAt).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
    });

    if (RESEND_API_KEY) {
      const firstName = quote.customer_name.trim().split(" ")[0];

      // Line items for internal email
      const itemsHtml = (quote.line_items as any[] || []).map((item: any) => `
        <div style="margin-bottom:12px;">
          <div style="font-weight:bold;color:#1a1a1a;font-size:14px;">ITEM ${String(item.number).padStart(2, "0")}: ${item.title}</div>
          <div style="color:#c45c26;font-weight:bold;font-size:14px;">$${item.priceLow?.toLocaleString()} – $${item.priceHigh?.toLocaleString()}</div>
        </div>
      `).join("");

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
      <div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#16a34a;font-size:16px;font-weight:800;">✓ QUOTE ACCEPTED</div>
        <div style="color:#555;font-size:13px;margin-top:4px;">Quote ${quoteNumber}</div>
      </div>
      <h1 style="color:#1a1a1a;font-size:20px;margin:0 0 16px;">Hi ${firstName},</h1>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">Your quote ${quoteNumber} has been accepted. We'll be in touch within 24 hours to schedule your project.</p>
      <div style="background:#1a1a1a;border-radius:8px;padding:20px;text-align:center;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:8px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:28px;font-weight:800;">$${quote.estimate_low.toLocaleString()} – $${quote.estimate_high.toLocaleString()}</div>
      </div>
      <div style="background:#f5f1eb;border-radius:8px;padding:14px 20px;margin:0 0 24px;text-align:center;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">ACCEPTED ON</div>
        <div style="color:#1a1a1a;font-size:14px;font-weight:bold;">${acceptedDateStr}</div>
      </div>
      <div style="text-align:center;margin:0 0 32px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#ffffff;text-decoration:none;padding:14px 36px;font-size:14px;font-weight:bold;letter-spacing:1px;border-radius:4px;">VIEW YOUR QUOTE</a>
      </div>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">FDZ Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">(405) 458-4805 · jesus@fdzconstruction.com</div>
      <div style="color:#666;font-size:11px;margin-top:4px;">fdzconstruction.com</div>
    </div>
  </div>
</body></html>`;

      const internalHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f5f5f5;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;">
    <div style="background:#16a34a;padding:16px 24px;">
      <div style="color:#fff;font-size:16px;font-weight:bold;">✓ Quote ${quoteNumber} ACCEPTED</div>
      <div style="color:#dcfce7;font-size:12px;">${acceptedDateStr}</div>
    </div>
    <div style="padding:24px;">
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #16a34a;padding-bottom:8px;">Customer Details</h2>
      <table style="width:100%;font-size:14px;margin-bottom:24px;">
        <tr><td style="padding:4px 0;color:#888;width:100px;">Name:</td><td style="color:#1a1a1a;font-weight:bold;">${quote.customer_name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Email:</td><td><a href="mailto:${quote.customer_email}" style="color:#c45c26;">${quote.customer_email}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Phone:</td><td><a href="tel:${quote.customer_phone}" style="color:#c45c26;">${quote.customer_phone}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Address:</td><td style="color:#1a1a1a;">${quote.customer_address || "Not provided"}</td></tr>
      </table>
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #16a34a;padding-bottom:8px;">Quote Summary</h2>
      ${itemsHtml}
      <div style="background:#1a1a1a;padding:16px 20px;margin:24px 0;border-radius:4px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;margin-bottom:4px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:24px;font-weight:800;">$${quote.estimate_low.toLocaleString()} – $${quote.estimate_high.toLocaleString()}</div>
      </div>
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 12px;border-bottom:2px solid #16a34a;padding-bottom:8px;">Customer Signature</h2>
      <div style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:4px;padding:12px;margin:0 0 24px;text-align:center;">
        <img src="${signatureUrl}" alt="Customer Signature" style="max-width:300px;height:auto;" />
      </div>
      ${quote.project_details ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #16a34a;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${quote.project_details}</p>` : ""}
      <div style="text-align:center;margin-top:24px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#fff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;border-radius:4px;margin-right:8px;">VIEW QUOTE</a>
        <a href="${siteUrl}/admin" style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;border-radius:4px;">ADMIN DASHBOARD</a>
      </div>
    </div>
  </div>
</body></html>`;

      const sendAcceptEmail = async (to: string, subject: string, html: string) => {
        const result = await sendEmail(to, subject, html);
        if (!result.ok) {
          console.error(`Accept quote email failed (${subject}):`, result.error);
        }
      };

      await Promise.allSettled([
        sendAcceptEmail(quote.customer_email, `Quote ${quoteNumber} Accepted - FDZ Construction`, customerHtml),
        sendAcceptEmail(NOTIFICATION_EMAIL, `ACCEPTED: Quote ${quoteNumber} - ${quote.customer_name}`, internalHtml),
      ]);
    } else {
      console.warn("RESEND_API_KEY not configured, skipping email sends");
    }

    return new Response(
      JSON.stringify({ success: true, signatureUrl, acceptedAt }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error accepting quote:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
