import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
    const { name, phone, email, projectType, finishType, length, width, sqft, estimateLow, estimateHigh, details } = body;

    // Validate required fields
    if (!name || !phone || !email || !projectType || !length || !width) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store submission
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

    // Send notification email via Supabase's built-in SMTP (Resend)
    // For now, we log the submission. To enable email notifications,
    // configure an email service and add the sending logic here.
    console.log("New estimate submission:", {
      name, phone, email, projectType, finishType,
      dimensions: `${length}x${width} (${sqft} sq ft)`,
      estimate: `$${estimateLow} - $${estimateHigh}`,
      details,
    });

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
