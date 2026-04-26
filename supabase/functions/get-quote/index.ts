import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    let token = url.searchParams.get("token") || url.searchParams.get("id");
    if (!token && (req.method === "POST" || req.method === "PUT")) {
      const body = await req.json().catch(() => ({}));
      token = body?.token ?? body?.id ?? null;
    }

    if (!token || !UUID_RE.test(token)) {
      return new Response(JSON.stringify({ error: "Invalid quote link" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Look up by access_token only — never expose lookup by primary id to the public.
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("access_token", token)
      .maybeSingle();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Quote not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Strip server-only fields before returning to the client.
    const { id: _id, access_token: _t, accepted_ip: _ip, ...publicQuote } = data as Record<string, unknown>;

    return new Response(JSON.stringify({ quote: publicQuote }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("get-quote error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
