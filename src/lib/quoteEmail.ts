import { phoneForEstimateOrigin, type EstimateOriginId } from "./estimatePath.ts";

export const DEFAULT_NOTIFICATION_EMAIL = "jesus@fdzconstruction.com";
export const BUSINESS_EMAIL = "jesus@fdzconstruction.com";

export function businessContactHtml(from: string | null | undefined): string {
  const phone = phoneForEstimateOrigin(from);
  return `<a href="tel:${phone.tel}" style="color:#888;text-decoration:none;">${phone.display}</a> · ${BUSINESS_EMAIL}`;
}

export function customerQuoteEmailHtml(input: {
  firstName: string;
  quoteNumber: string;
  estimateLow: number;
  estimateHigh: number;
  expiresDate: string;
  quoteUrl: string;
  origin: EstimateOriginId | null;
}): string {
  const contact = businessContactHtml(input.origin);
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
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">Thank you for requesting a quote! Here's a summary of your estimate:</p>
      <div style="background:#f5f1eb;border-left:4px solid #c45c26;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">QUOTE NUMBER</div>
        <div style="color:#1a1a1a;font-size:24px;font-weight:800;">${input.quoteNumber}</div>
      </div>
      <div style="background:#1a1a1a;border-radius:8px;padding:20px;text-align:center;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:8px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:28px;font-weight:800;">$${input.estimateLow.toLocaleString()} – $${input.estimateHigh.toLocaleString()}</div>
      </div>
      <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:14px 20px;margin:0 0 24px;text-align:center;">
        <div style="color:#c45c26;font-size:13px;font-weight:bold;">⏳ Valid for 30 days</div>
        <div style="color:#888;font-size:12px;margin-top:4px;">Expires on <strong style="color:#1a1a1a;">${input.expiresDate}</strong></div>
      </div>
      <div style="text-align:center;margin:0 0 16px;">
        <a href="${input.quoteUrl}" style="display:inline-block;background:#c45c26;color:#ffffff;text-decoration:none;padding:14px 36px;font-size:14px;font-weight:bold;letter-spacing:1px;border-radius:4px;">VIEW YOUR QUOTE</a>
      </div>
      <div style="text-align:center;margin:0 0 32px;">
        <a href="${input.quoteUrl}" style="display:inline-block;background:#1a1a1a;color:#ffffff;text-decoration:none;padding:12px 28px;font-size:13px;font-weight:bold;letter-spacing:1px;border-radius:4px;">ACCEPT QUOTE NOW →</a>
      </div>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">FDZ Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">${contact}</div>
      <div style="color:#666;font-size:11px;margin-top:4px;">fdzconstruction.com</div>
    </div>
  </div>
</body></html>`;
}

export function customerAcceptanceEmailHtml(input: {
  firstName: string;
  quoteNumber: string;
  estimateLow: number;
  estimateHigh: number;
  acceptedDate: string;
  quoteUrl: string;
  origin: EstimateOriginId | null;
}): string {
  const contact = businessContactHtml(input.origin);
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
      <div style="background:#dcfce7;border-left:4px solid #16a34a;padding:16px 20px;margin:0 0 24px;">
        <div style="color:#16a34a;font-size:16px;font-weight:800;">✓ QUOTE ACCEPTED</div>
        <div style="color:#555;font-size:13px;margin-top:4px;">Quote ${input.quoteNumber}</div>
      </div>
      <h1 style="color:#1a1a1a;font-size:20px;margin:0 0 16px;">Hi ${input.firstName},</h1>
      <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">Your quote ${input.quoteNumber} has been accepted. We'll be in touch within 24 hours to schedule your project.</p>
      <div style="background:#1a1a1a;border-radius:8px;padding:20px;text-align:center;margin:0 0 24px;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:8px;">TOTAL ESTIMATE</div>
        <div style="color:#c45c26;font-size:28px;font-weight:800;">$${input.estimateLow.toLocaleString()} – $${input.estimateHigh.toLocaleString()}</div>
      </div>
      <div style="background:#f5f1eb;border-radius:8px;padding:14px 20px;margin:0 0 24px;text-align:center;">
        <div style="color:#888;font-size:11px;letter-spacing:2px;font-weight:bold;margin-bottom:4px;">ACCEPTED ON</div>
        <div style="color:#1a1a1a;font-size:14px;font-weight:bold;">${input.acceptedDate}</div>
      </div>
      <div style="text-align:center;margin:0 0 32px;">
        <a href="${input.quoteUrl}" style="display:inline-block;background:#c45c26;color:#ffffff;text-decoration:none;padding:14px 36px;font-size:14px;font-weight:bold;letter-spacing:1px;border-radius:4px;">VIEW YOUR QUOTE</a>
      </div>
    </div>
    <div style="background:#1a1a1a;padding:20px 32px;text-align:center;">
      <div style="color:#ffffff;font-size:13px;font-weight:bold;">FDZ Construction LLC</div>
      <div style="color:#888;font-size:12px;margin-top:4px;">${contact}</div>
      <div style="color:#666;font-size:11px;margin-top:4px;">fdzconstruction.com</div>
    </div>
  </div>
</body></html>`;
}

