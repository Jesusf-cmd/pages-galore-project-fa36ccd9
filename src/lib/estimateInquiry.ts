import {
  DETAILS_MAX_LENGTH,
  detailsLimitError,
  phoneForEstimateOrigin,
  projectDetailsForStorage,
  supportedEstimateOrigin,
  type EstimateOriginId,
} from "./estimatePath.ts";
import { escapeAttr, escapeHtml } from "./htmlEscape.ts";
import { BUSINESS_EMAIL, businessContactHtml } from "./quoteEmail.ts";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Digits and common phone punctuation only — used to build tel: links. */
const PHONE_LINK_RE = /^[0-9+().\-\s]{7,20}$/;

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

function requireStringField(
  value: unknown,
  label: string,
  max: number,
): { ok: true; value: string } | { ok: false; error: string } {
  if (value === undefined || value === null) {
    return { ok: false, error: `${label} is required.` };
  }
  if (typeof value !== "string") {
    return { ok: false, error: `${label} must be text.` };
  }
  const trimmed = value.trim().slice(0, max);
  if (!trimmed) {
    return { ok: false, error: `${label} is required.` };
  }
  return { ok: true, value: trimmed };
}

function optionalStringField(
  value: unknown,
  label: string,
  max: number,
): { ok: true; value: string | null } | { ok: false; error: string } {
  if (value === undefined || value === null || value === "") {
    return { ok: true, value: null };
  }
  if (typeof value !== "string") {
    return { ok: false, error: `${label} must be text.` };
  }
  const trimmed = value.trim().slice(0, max);
  return { ok: true, value: trimmed.length ? trimmed : null };
}

/** Build a safe mailto: href from a validated email address. */
export function mailtoHref(email: string): string | null {
  if (!EMAIL_RE.test(email)) return null;
  return `mailto:${encodeURIComponent(email)}`;
}

/** Build a safe tel: href from a validated phone string (digits kept only). */
export function telHref(phone: string): string | null {
  if (!PHONE_LINK_RE.test(phone)) return null;
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.replace(/\D/g, "").length < 7) return null;
  return `tel:${digits}`;
}

/**
 * Validate and build an `estimate_inquiries` insert row.
 * No prices or dimensions — callers must not invent either.
 */
export function buildEstimateInquiryRow(
  input: EstimateInquiryInput,
): { ok: true; row: EstimateInquiryRow } | { ok: false; error: string } {
  const name = requireStringField(input.name, "Name", 100);
  if (!name.ok) return name;
  const email = requireStringField(input.email, "Email", 255);
  if (!email.ok) return email;
  const phone = requireStringField(input.phone, "Phone", 20);
  if (!phone.ok) return phone;
  const projectType = requireStringField(input.projectType, "Project type", 80);
  if (!projectType.ok) return projectType;

  if (!EMAIL_RE.test(email.value)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (input.details !== undefined && input.details !== null && typeof input.details !== "string") {
    return { ok: false, error: "Project details must be text." };
  }
  const detailsRaw = typeof input.details === "string" ? input.details : "";
  const detailsError = detailsLimitError(detailsRaw);
  if (detailsError) {
    return { ok: false, error: detailsError };
  }

  const propertyType = optionalStringField(input.propertyType, "Property type", 80);
  if (!propertyType.ok) return propertyType;
  const customerRole = optionalStringField(input.customerRole, "Role", 80);
  if (!customerRole.ok) return customerRole;
  const approxSize = optionalStringField(input.approxSize, "Approximate size", 200);
  if (!approxSize.ok) return approxSize;
  const address = optionalStringField(input.address, "Address", 500);
  if (!address.ok) return address;

  const biddingStatus =
    customerRole.value === "General contractor"
      ? optionalStringField(input.biddingStatus, "Bidding status", 40)
      : ({ ok: true as const, value: null });
  if (!biddingStatus.ok) return biddingStatus;

  if (input.from !== undefined && input.from !== null && typeof input.from !== "string") {
    return { ok: false, error: "Origin must be text." };
  }

  const leadMeta = [
    propertyType.value && `Property type: ${propertyType.value}`,
    customerRole.value && `Role: ${customerRole.value}`,
    projectType.value && `Project type: ${projectType.value}`,
    approxSize.value && `Approximate size: ${approxSize.value}`,
    biddingStatus.value && `Bidding status: ${biddingStatus.value}`,
  ]
    .filter(Boolean)
    .join("\n");

  let combinedDetails = detailsRaw.trim();
  if (leadMeta) {
    if (
      combinedDetails &&
      !combinedDetails.includes("Property type:") &&
      !combinedDetails.includes("Project type:")
    ) {
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
      customer_name: name.value,
      customer_email: email.value,
      customer_phone: phone.value,
      customer_address: address.value,
      project_type: projectType.value,
      property_type: propertyType.value,
      customer_role: customerRole.value,
      approx_size: approxSize.value,
      bidding_status: biddingStatus.value,
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
  const safeFirst = escapeHtml(input.firstName);
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
      <h1 style="color:#1a1a1a;font-size:20px;margin:0 0 16px;">Hi ${safeFirst},</h1>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">
        Thank you for sending your project details. We will follow up with a written estimate after a plan review or a site visit — this request is not a priced quote and does not require acceptance or a signature.
      </p>
      <div style="background:#f5f1eb;border-left:4px solid #c45c26;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">NEXT STEP</div>
        <div style="color:#1a1a1a;font-size:14px;line-height:1.5;">Send any drawings or photos you already have, or call ${escapeHtml(phone.display)} to discuss the site.</div>
      </div>
      <p style="color:#555;font-size:13px;line-height:1.6;margin:0;">Questions? Call <a href="tel:${escapeAttr(phone.tel)}" style="color:#c45c26;text-decoration:none;font-weight:bold;">${escapeHtml(phone.display)}</a>.</p>
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
  const originLabel = escapeHtml(input.origin ?? "unspecified");
  const row = (label: string, valueHtml: string) =>
    `<tr><td style="padding:4px 0;color:#888;width:140px;vertical-align:top;">${label}</td><td style="color:#1a1a1a;">${valueHtml}</td></tr>`;

  const mail = mailtoHref(input.email);
  const tel = telHref(input.phone);
  const emailCell = mail
    ? `<a href="${escapeAttr(mail)}" style="color:#c45c26;">${escapeHtml(input.email)}</a>`
    : escapeHtml(input.email);
  const phoneCell = tel
    ? `<a href="${escapeAttr(tel)}" style="color:#c45c26;">${escapeHtml(input.phone)}</a>`
    : escapeHtml(input.phone);

  const notes = input.projectDetails
    ? `<h2 style="color:#1a1a1a;font-size:16px;margin:0 0 8px;border-bottom:2px solid #c45c26;padding-bottom:8px;">Project Notes</h2><p style="color:#555;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(input.projectDetails)}</p>`
    : "";

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
        ${row("Name:", escapeHtml(input.name))}
        ${row("Email:", emailCell)}
        ${row("Phone:", phoneCell)}
        ${row("Address:", escapeHtml(input.address || "Not provided"))}
        ${row("Project type:", escapeHtml(input.projectType))}
        ${row("Property type:", escapeHtml(input.propertyType || "—"))}
        ${row("Role:", escapeHtml(input.customerRole || "—"))}
        ${row("Approx. size:", escapeHtml(input.approxSize || "—"))}
        ${row("Bidding:", escapeHtml(input.biddingStatus || "—"))}
        ${row("Origin:", originLabel)}
      </table>
      ${notes}
      <div style="color:#888;font-size:12px;margin-top:24px;">Notify: ${escapeHtml(BUSINESS_EMAIL)}</div>
    </div>
  </div>
</body></html>`;
}
