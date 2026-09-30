/** GTM dataLayer helpers — events only; GA4 mapping lives in GTM. */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function push(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackGenerateLead(args: {
  formLocation: string;
  propertyType?: string;
  projectType?: string;
}) {
  push({
    event: "generate_lead",
    form_location: args.formLocation,
    property_type: args.propertyType || "",
    project_type: args.projectType || "",
  });
}

export function trackPhoneClick(linkLocation: string) {
  push({
    event: "phone_click",
    link_location: linkLocation,
  });
}
