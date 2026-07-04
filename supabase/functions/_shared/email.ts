const RESEND_API_URL = "https://api.resend.com/emails";

export const NOTIFICATION_EMAIL =
  Deno.env.get("NOTIFICATION_EMAIL") || "jesus@fdzconstruction.com";

export const FROM_EMAIL =
  Deno.env.get("FROM_EMAIL") || "FDZ Construction <jesus@fdzconstruction.com>";

export interface SendEmailResult {
  ok: boolean;
  status?: number;
  error?: string;
}

export async function sendEmail(
  to: string | string[],
  subject: string,
  html: string,
): Promise<SendEmailResult> {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — email not sent:", subject);
    return { ok: false, error: "RESEND_API_KEY not configured" };
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: Array.isArray(to) ? to : [to],
        subject,
        html,
      }),
    });

    const bodyText = await res.text();
    let parsed: { message?: string; name?: string } | null = null;
    try {
      parsed = bodyText ? JSON.parse(bodyText) : null;
    } catch {
      parsed = null;
    }

    if (!res.ok) {
      const detail = parsed?.message || bodyText || res.statusText;
      console.error(`Resend error [${res.status}]:`, detail);
      return { ok: false, status: res.status, error: detail };
    }

    return { ok: true, status: res.status };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Resend request failed:", message);
    return { ok: false, error: message };
  }
}
