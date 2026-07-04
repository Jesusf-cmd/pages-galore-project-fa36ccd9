import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { NOTIFICATION_EMAIL, sendEmail } from "../_shared/email.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_FILES = 5;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_MIME_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const ALLOWED_EXTENSIONS = new Set([".pdf", ".jpg", ".jpeg", ".png"]);
const BLOCKED_EXTENSIONS = new Set([
  ".exe", ".bat", ".cmd", ".com", ".msi", ".js", ".jsx", ".ts", ".tsx",
  ".html", ".htm", ".php", ".py", ".sh", ".zip", ".rar", ".7z", ".tar", ".gz",
]);

function sanitizeFilename(name: string): string {
  const base = name.split(/[/\\]/).pop() || "upload";
  const cleaned = base.replace(/[^\w.\-() ]+/g, "_").trim().slice(0, 120);
  return cleaned || "upload";
}

function getExtension(name: string): string {
  const idx = name.lastIndexOf(".");
  return idx >= 0 ? name.slice(idx).toLowerCase() : "";
}

function hasValidMagicBytes(bytes: Uint8Array, mimeType: string): boolean {
  if (mimeType === "application/pdf") {
    return bytes.length >= 4 &&
      bytes[0] === 0x25 && bytes[1] === 0x50 && bytes[2] === 0x44 && bytes[3] === 0x46;
  }
  if (mimeType === "image/png") {
    return bytes.length >= 8 &&
      bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
  }
  if (mimeType === "image/jpeg") {
    return bytes.length >= 3 &&
      bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  }
  return false;
}

async function validateFile(file: File): Promise<string | null> {
  const ext = getExtension(file.name);
  if (BLOCKED_EXTENSIONS.has(ext)) {
    return `"${file.name}" is not an allowed file type.`;
  }
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return `"${file.name}" must be a PDF, JPG, or PNG file.`;
  }
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return `"${file.name}" must be a PDF, JPG, or PNG file.`;
  }
  if (file.size > MAX_FILE_BYTES) {
    return `"${file.name}" is too large. Maximum size is 10 MB per file.`;
  }
  if (file.size === 0) {
    return `"${file.name}" is empty.`;
  }

  const header = new Uint8Array(await file.slice(0, 8).arrayBuffer());
  if (!hasValidMagicBytes(header, file.type)) {
    return `"${file.name}" does not look like a valid ${file.type === "application/pdf" ? "PDF" : "image"} file.`;
  }

  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const formData = await req.formData();
    const honeypot = formData.get("company_website")?.toString().trim();
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const name = formData.get("name")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const address = formData.get("address")?.toString().trim() || "";
    const details = formData.get("details")?.toString().trim() || "";

    if (!name || !phone || !email) {
      return new Response(JSON.stringify({ error: "Name, phone, and email are required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const files = formData.getAll("files").filter((entry): entry is File => entry instanceof File);
    if (files.length === 0) {
      return new Response(JSON.stringify({ error: "Please attach at least one file." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (files.length > MAX_FILES) {
      return new Response(JSON.stringify({ error: "You can upload up to 5 files." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    for (const file of files) {
      const validationError = await validateFile(file);
      if (validationError) {
        return new Response(JSON.stringify({ error: validationError }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const submissionId = crypto.randomUUID();
    const uploadedFiles: { path: string; name: string; size: number; type: string }[] = [];

    for (const file of files) {
      const safeName = sanitizeFilename(file.name);
      const storagePath = `${submissionId}/${crypto.randomUUID()}-${safeName}`;
      const bytes = new Uint8Array(await file.arrayBuffer());

      const { error: uploadError } = await supabase.storage
        .from("project-documents")
        .upload(storagePath, bytes, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError.message, uploadError);
        const hint = uploadError.message?.includes("Bucket not found")
          ? "Storage bucket project-documents is missing — run the Supabase migration."
          : "Failed to upload one of your files. Please try again.";
        return new Response(JSON.stringify({ error: hint }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      uploadedFiles.push({
        path: storagePath,
        name: safeName,
        size: file.size,
        type: file.type,
      });
    }

    const { error: dbError } = await supabase.from("document_submissions").insert({
      id: submissionId,
      name: name.slice(0, 100),
      phone: phone.slice(0, 20),
      email: email.slice(0, 255),
      address: address ? address.slice(0, 500) : null,
      details: details ? details.slice(0, 2000) : null,
      file_paths: uploadedFiles,
    });

    if (dbError) {
      console.error("DB insert error:", dbError.message, dbError);
      const hint = dbError.message?.includes("document_submissions")
        ? "Document submissions table is missing — run the Supabase migration."
        : "Failed to save your submission. Please try again.";
      return new Response(JSON.stringify({ error: hint }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const signedUrlSeconds = 60 * 60 * 24 * 7;
    let emailSent = false;

    if (Deno.env.get("RESEND_API_KEY")) {
      const fileLinks: string[] = [];
      for (const file of uploadedFiles) {
        const { data: signedData, error: signedErr } = await supabase.storage
          .from("project-documents")
          .createSignedUrl(file.path, signedUrlSeconds);

        if (signedErr || !signedData?.signedUrl) {
          console.error("Signed URL error:", signedErr);
          fileLinks.push(`${file.name} (link unavailable — check Supabase storage)`);
        } else {
          fileLinks.push(`<a href="${signedData.signedUrl}" style="color:#c45c26;">${file.name}</a> (${Math.round(file.size / 1024)} KB)`);
        }
      }

      const internalHtml = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f5f5f5;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;">
    <div style="background:#1a1a1a;padding:16px 24px;">
      <div style="color:#c45c26;font-size:16px;font-weight:bold;">New Project Document Upload</div>
      <div style="color:#888;font-size:12px;">${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}</div>
    </div>
    <div style="padding:24px;">
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Contact Info</h2>
      <table style="width:100%;font-size:14px;margin-bottom:24px;">
        <tr><td style="padding:4px 0;color:#888;width:100px;">Name:</td><td style="color:#1a1a1a;font-weight:bold;">${name}</td></tr>
        <tr><td style="padding:4px 0;color:#888;">Email:</td><td style="color:#1a1a1a;"><a href="mailto:${email}" style="color:#c45c26;">${email}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Phone:</td><td style="color:#1a1a1a;"><a href="tel:${phone}" style="color:#c45c26;">${phone}</a></td></tr>
        <tr><td style="padding:4px 0;color:#888;">Address:</td><td style="color:#1a1a1a;">${address || "Not provided"}</td></tr>
      </table>
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 12px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Uploaded Files</h2>
      <ul style="margin:0 0 24px;padding-left:20px;color:#555;font-size:14px;line-height:1.7;">
        ${fileLinks.map((link) => `<li>${link}</li>`).join("")}
      </ul>
      ${details ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${details}</p>` : ""}
    </div>
  </div>
</body></html>`;

      const emailResult = await sendEmail(
        NOTIFICATION_EMAIL,
        `Project documents uploaded — ${name}`,
        internalHtml,
      );
      emailSent = emailResult.ok;
      if (!emailResult.ok) {
        console.error("Document notification email failed:", emailResult.error);
      }
    } else {
      console.warn("RESEND_API_KEY not configured, skipping notification email");
    }

    return new Response(JSON.stringify({ success: true, emailSent }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Error processing document submission:", message, err);
    return new Response(JSON.stringify({ error: "Something went wrong. Please try again or call (405) 458-4805." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
