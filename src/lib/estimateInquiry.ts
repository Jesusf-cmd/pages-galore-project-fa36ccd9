import {
  DETAILS_MAX_LENGTH,
  detailsLimitError,
  phoneForEstimateOrigin,
  projectDetailsForStorage,
  supportedEstimateOrigin,
  type EstimateOriginId,
} from "./estimatePath.ts";
import { BUSINESS_EMAIL, businessContactHtml } from "./quoteEmail.ts";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type EstimateInquiryInput = {
  name: unknown;
  email: unknown;
  phone: unknown;
  address?: unknown;
  details?: unknown;
  projectType: unknown;
  propertyType?: unknown;
  customerRole?: unknown;
  approxSize?: unknown;
  biddingStatus?: unknown;
  from?: unknown;
};

export type EstimateInquiryRow = {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string | null;
  project_type: string;
  property_type: string | null;
  customer_role: string | null;
  approx_size: string | null;
  bidding_status: string | null;
  project_details: string | null;
  origin: EstimateOriginId | null;
  status: "inquiry";
};

function asTrimmedString(value: unknown, max: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

function optionalTrimmed(value: unknown, max: number): string | null {
  const s = asTrimmedString(value, max);
  return s.length ? s : null;
}

/**
 * Validate and build an `estimate_inquiries` insert row.
 * No prices or dimensions — callers must not invent either.
 */
export function buildEstimateInquiryRow(
  input: EstimateInquiryInput,
): { ok: true; row: EstimateInquiryRow } | { ok: false; error: string } {
  const name = asTrimmedString(input.name, 100);
  const email = asTrimmedString(input.email, 255);
  const phone = asTrimmedString(input.phone, 20);
  const projectType = asTrimmedString(input.projectType, 80);

  if (!name || !email || !phone || !projectType) {
    return { ok: false, error: "Name, phone, email, and project type are required." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  const detailsRaw = typeof input.details === "string" ? input.details : "";
  const detailsError = detailsLimitError(detailsRaw);
  if (detailsError) {
    return { ok: false, error: detailsError };
  }

  const propertyType = optionalTrimmed(input.propertyType, 80);
  const customerRole = optionalTrimmed(input.customerRole, 80);
  const approxSize = optionalTrimmed(input.approxSize, 200);
  const biddingStatus =
    customerRole === "General contractor" ? optionalTrimmed(input.biddingStatus, 40) : null;

  const leadMeta = [
    propertyType && `Property type: ${propertyType}`,
    customerRole && `Role: ${customerRole}`,
    projectType && `Project type: ${projectType}`,
    approxSize && `Approximate size: ${approxSize}`,
    biddingStatus && `Bidding status: ${biddingStatus}`,
  ]
    .filter(Boolean)
    .join("\n");

  let combinedDetails = detailsRaw.trim();
  if (leadMeta) {
    if (combinedDetails && !combinedDetails.includes("Property type:") && !combinedDetails.includes("Project type:")) {
      combinedDetails = `${combinedDetails}\n\n${leadMeta}`;
    } else if (!combinedDetails) {
      combinedDetails = leadMeta;
    }
  }
  if (combinedDetails.length > DETAILS_MAX_LENGTH) {
    return { ok: false, error: detailsLimitError(combinedDetails) ?? "Project details are too long." };
  }

  const storedDetails = projectDetailsForStorage(input.from, combinedDetails);
  const origin = supportedEstimateOrigin(input.from);

  return {
    ok: true,
    row: {
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      customer_address: optionalTrimmed(input.address, 500),
      project_type: projectType,
      property_type: propertyType,
      customer_role: customerRole,
      approx_size: approxSize,
      bidding_status: biddingStatus,
      project_details: storedDetails,
      origin,
      status: "inquiry",
    },
  };
}

export function customerInquiryEmailHtml(input: {
  firstName: string;
  origin: EstimateOriginId | null;
}): string {
  const contact = businessContactHtml(input.origin);
  const phone = phoneForEstimateOrigin(input.origin);
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f1eb;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="background:#1a1a1a;padding:24px 32px;text-align:center;">
      <div style="color:#c45c26;font-size:10px;letter-spacing:3px;font-weight:bold;margin-bottom:4px;">LICENSED & INSURED</div>
      <div style="color:#ffffff;font-size:22px;font-weight:800;letter-spacing:1px;">FDZ CONSTRUCTION</div>
    </div>
    <div style="padding:32px;">
      <h1 style="color:#1a1a1a;font-size:20px;margin:0 0 16px;">Hi ${input.firstName},</h1>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">
        Thank you for sending your project details. We will follow up with a written estimate after a plan review or a site visit — this request is not a priced quote and does not require acceptance or a signature.
      </p>
      <div style="background:#f5f1eb;border-left:4px solid #c45c26;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">NEXT STEP</div>
        <div style="color:#1a1a1a;font-size:14px;line-height:1.5;">Send any drawings or photos you already have, or call ${phone.display} to discuss the site.</div>
      </div>
      <p style="color:#555;font-size:13px;line-height:1.6;margin:0;">Questions? Call <a href="tel:${phone.tel}" style="color:#c45c26;text-decoration:none;font-weight:bold;">${phone.display}</a>.</p>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">FDZ Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">${contact}</div>
      <div style="color:#666;font-size:11px;margin-top:4px;">fdzconstruction.com</div>
    </div>
  </div>
</body></html>`;
}

export function internalInquiryEmailHtml(input: {
  name: string;
  email: string;
  phone: string;
  address: string | null;
  projectType: string;
  propertyType: string | null;
  customerRole: string | null;
  approxSize: string | null;
  biddingStatus: string | null;
  projectDetails: string | null;
  origin: EstimateOriginId | null;
}): string {
  const originLabel = input.origin ?? "unspecified";
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 0;color:#888;width:140px;vertical-align:top;">${label}</td><td style="color:#1a1a1a;">${value}</td></tr>`;
  return `
<!DOCTYPE html>
<html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:20px;background:#f5f5f5;font-family:Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;">
    <div style="background:#1a1a1a;padding:16px 24px;">
      <div style="color:#c45c26;font-size:16px;font-weight:bold;">New Estimate Inquiry</div>
      <div style="color:#888;font-size:12px;">Unpriced request · origin: ${originLabel}</div>
    </div>
    <div style="padding:24px;">
      <p style="color:#555;font-size:13px;margin:0 0 16px;">This is an inquiry only — no quote number, price, acceptance link, or expiry.</p>
      <h2 style="color:#1a1a1a;font-size:16px;margin:0 0 16px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Customer</h2>
      <table style="width:100%;font-size:14px;margin-bottom:24px;">
        ${row("Name:", input.name)}
        ${row("Email:", `<a href="mailto:${input.email}" style="color:#c45c26;">${input.email}</a>`)}
        ${row("Phone:", `<a href="tel:${input.phone}" style="color:#c45c26;">${input.phone}</a>`)}
        ${row("Address:", input.address || "Not provided")}
        ${row("Project type:", input.projectType)}
        ${row("Property type:", input.propertyType || "—")}
        ${row("Role:", input.customerRole || "—")}
        ${row("Approx. size:", input.approxSize || "—")}
        ${row("Bidding:", input.biddingStatus || "—")}
        ${row("Origin:", originLabel)}
      </table>
      ${
        input.projectDetails
          ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${input.projectDetails}</p>`
          : ""
      }
      <div style="color:#888;font-size:12px;margin-top:24px;">Notify: ${BUSINESS_EMAIL}</div>
    </div>
  </div>
</body></html>`;
}
