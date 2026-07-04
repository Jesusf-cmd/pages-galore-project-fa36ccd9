import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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
    } = body;

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

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: quote, error: dbError } = await supabase
      .from("quotes")
      .insert({
        customer_name: name.trim().slice(0, 100),
        customer_email: email.trim().slice(0, 255),
        customer_phone: phone.trim().slice(0, 20),
        customer_address: (address || "").trim().slice(0, 500),
        project_details: details ? details.trim().slice(0, 2000) : null,
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
      ${details ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${details}</p>` : ""}
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
