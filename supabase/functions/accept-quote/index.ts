import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

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
    const { quoteId, signatureDataUrl } = await req.json();

    if (!quoteId || !signatureDataUrl) {
      return new Response(JSON.stringify({ error: "Missing quoteId or signature" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch quote
    const { data: quote, error: fetchErr } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", quoteId)
      .single();

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

    const { data: urlData } = supabase.storage
      .from("signatures")
      .getPublicUrl(signaturePath);

    const signatureUrl = urlData.publicUrl;
    const acceptedAt = new Date().toISOString();

    // Update quote
    const { error: updateErr } = await supabase
      .from("quotes")
      .update({
        status: "accepted",
        signature_url: signatureUrl,
        accepted_at: acceptedAt,
      })
      .eq("id", quoteId);

    if (updateErr) {
      console.error("Quote update error:", updateErr);
      return new Response(JSON.stringify({ error: "Failed to update quote" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send emails
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const quoteNumber = `#${String(quote.quote_number).padStart(4, "0")}`;
    const siteUrl = "https://myconcreteestimate.com";
    const quoteUrl = `${siteUrl}/quote/${quoteId}`;
    const fromAddress = "Redwood Construction <estimates@myconcreteestimate.com>";

    if (LOVABLE_API_KEY && RESEND_API_KEY) {
      const sendEmail = async (to: string, subject: string, html: string) => {
        try {
          const res = await fetch(`${GATEWAY_URL}/emails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({ from: fromAddress, to: [to], subject, html }),
          });
          if (!res.ok) {
            const data = await res.json();
            console.error(`Email failed [${res.status}]:`, JSON.stringify(data));
          }
        } catch (e) {
          console.error("Email error:", e);
        }
      };

      const firstName = quote.customer_name.trim().split(" ")[0];

      const customerHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f1eb;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="background:#1a1a1a;padding:24px 32px;text-align:center;">
      <div style="color:#c45c26;font-size:10px;letter-spacing:3px;font-weight:bold;margin-bottom:4px;">LICENSED & INSURED</div>
      <div style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:1px;">REDWOOD CONSTRUCTION</div>
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
      <div style="text-align:center;margin:0 0 32px;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#ffffff;text-decoration:none;padding:14px 36px;font-size:14px;font-weight:bold;letter-spacing:1px;border-radius:4px;">VIEW YOUR QUOTE</a>
      </div>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">Redwood Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">(405) 247-0027 · jesus.f@myconcreteestimate.com</div>
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
      <div style="color:#dcfce7;font-size:12px;">${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
    </div>
    <div style="padding:24px;">
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #16a34a;padding-bottom:8px;">Customer Details</h2>
      <table style="width:100%;font-size:14px;margin-bottom:24px;">
        <tr><td style="padding:4px 0;color:#888;width:100px;">Name:</td><td style="color:#1a1a1a;font-weight:bold;">${quote.customer_name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Email:</td><td style="color:#1a1a1a;">${quote.customer_email}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Phone:</td><td style="color:#1a1a1a;">${quote.customer_phone}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Address:</td><td style="color:#1a1a1a;">${quote.customer_address || "Not provided"}</td></tr>
      </table>
      <div style="background:#1a1a1a;padding:16px 20px;margin:0 0 24px;border-radius:4px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;margin-bottom:4px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:24px;font-weight:800;">$${quote.estimate_low.toLocaleString()} – $${quote.estimate_high.toLocaleString()}</div>
      </div>
      <div style="text-align:center;">
        <a href="${quoteUrl}" style="display:inline-block;background:#c45c26;color:#fff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;border-radius:4px;">VIEW FULL QUOTE</a>
      </div>
    </div>
  </div>
</body></html>`;

      await Promise.allSettled([
        sendEmail(quote.customer_email, `Quote ${quoteNumber} Accepted - Redwood Construction`, customerHtml),
        sendEmail("jesus.f@myconcreteestimate.com", `✓ Quote ${quoteNumber} ACCEPTED by ${quote.customer_name}`, internalHtml),
      ]);
    }

    return new Response(
      JSON.stringify({ success: true, signatureUrl: signatureUrl, acceptedAt }),
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
