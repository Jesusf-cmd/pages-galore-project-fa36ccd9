import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";
import { createSupabaseInquiryDb } from "../_shared/inquiryDb.ts";
import {
  handleSubmitEstimateInquiry,
  INQUIRY_CORS_HEADERS,
} from "../../../src/lib/submitEstimateInquiryCore.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: INQUIRY_CORS_HEADERS });
  }

  try {
    const body = (await req.json()) as Record<string, unknown>;
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const db = createSupabaseInquiryDb(supabase);

    const clientIp =
      req.headers.get("cf-connecting-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      null;
    const userAgent = req.headers.get("user-agent");

    return await handleSubmitEstimateInquiry({
      body,
      clientIp,
      userAgent,
      db,
      env: { get: (key) => Deno.env.get(key) },
      clock: { now: () => Date.now() },
      fetcher: { fetch: (...args) => fetch(...args) },
      mailer: {
        sendEmail,
        notificationEmail: NOTIFICATION_EMAIL,
      },
    });
  } catch (err) {
    console.error("Error processing estimate inquiry:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...INQUIRY_CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
});
