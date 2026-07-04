import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RESEND_API_URL = "https://api.resend.com/emails";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { name, phone, email, projectType, finishType, length, width, sqft, estimateLow, estimateHigh, details } = body;

    if (!name || !phone || !email || !projectType || !length || !width) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase.from("estimate_submissions").insert({
      name: name.trim().slice(0, 100),
      phone: phone.trim().slice(0, 20),
      email: email.trim().slice(0, 255),
      project_type: projectType,
      finish_type: finishType || null,
      length_ft: length,
      width_ft: width,
      square_feet: sqft,
      estimate_low: estimateLow,
      estimate_high: estimateHigh,
      details: details ? details.trim().slice(0, 2000) : null,
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(JSON.stringify({ error: "Failed to save submission" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Send notification email to jesus@fdzconstruction.com
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const notifyEmail = Deno.env.get("NOTIFICATION_EMAIL") || "jesus@fdzconstruction.com";
      const fromAddress = Deno.env.get("FROM_EMAIL") || "FDZ Construction <jesus@fdzconstruction.com>";

      const projectLabel = projectType.replace(/-/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase());
      const estimateRange = estimateLow && estimateHigh
        ? `$${Number(estimateLow).toLocaleString()} – $${Number(estimateHigh).toLocaleString()}`
        : "Not calculated";

      const internalHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f5f1eb;padding:24px;">
          <div style="background:#1a1a18;padding:20px 24px;margin-bottom:0;">
            <div style="color:#c45c26;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:4px;">New Estimate Request</div>
            <div style="color:#fff;font-size:22px;font-weight:900;text-transform:uppercase;letter-spacing:0.02em;">FDZ Construction LLC</div>
          </div>
          <div style="background:#fff;padding:24px;border-top:3px solid #c45c26;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:6px 0;color:#888;width:140px;">Name:</td><td style="color:#1a1a1a;font-weight:600;">${name}</td></tr>
              <tr><td style="padding:6px 0;color:#888;">Phone:</td><td style="color:#1a1a1a;"><a href="tel:${phone.replace(/\D/g,'')}" style="color:#c45c26;">${phone}</a></td></tr>
              <tr><td style="padding:6px 0;color:#888;">Email:</td><td style="color:#1a1a1a;"><a href="mailto:${email}" style="color:#c45c26;">${email}</a></td></tr>
              <tr><td style="padding:6px 0;color:#888;">Project:</td><td style="color:#1a1a1a;">${projectLabel}${finishType ? ` — ${finishType}` : ""}</td></tr>
              <tr><td style="padding:6px 0;color:#888;">Dimensions:</td><td style="color:#1a1a1a;">${length} × ${width} ft${sqft ? ` (${Number(sqft).toLocaleString()} sq ft)` : ""}</td></tr>
              <tr><td style="padding:6px 0;color:#888;">Estimate:</td><td style="color:#c45c26;font-weight:700;font-size:16px;">${estimateRange}</td></tr>
              ${details ? `<tr><td style="padding:6px 0;color:#888;vertical-align:top;">Notes:</td><td style="color:#1a1a1a;">${details}</td></tr>` : ""}
            </table>
          </div>
          <div style="background:#f5f1eb;padding:16px 24px;text-align:center;font-size:11px;color:#888;margin-top:0;">
            (405) 458-4805 · jesus@fdzconstruction.com · fdzconstruction.com
          </div>
        </div>`;

      try {
        await fetch(RESEND_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({ from: fromAddress, to: [notifyEmail], subject: `New Estimate — ${projectLabel} — ${name}`, html: internalHtml }),
        });
      } catch (emailErr) {
        console.warn("Email send failed (non-fatal):", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set — estimate saved to DB but no notification email sent.");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Estimate submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error processing submission:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
