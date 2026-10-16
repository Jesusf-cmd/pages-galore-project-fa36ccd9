import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  DETAILS_MAX_LENGTH,
  absoluteQuoteUrl,
  originIdFromProjectDetails,
  parseEstimateOrigin,
  phoneForEstimateOrigin,
  projectDetailsForStorage,
  resolveQuoteOrigin,
} from "@/lib/estimatePath";
import { KANSAS_PHONE, OKLAHOMA_PHONE } from "@/lib/phones";
import {
  BUSINESS_EMAIL,
  DEFAULT_NOTIFICATION_EMAIL,
  customerAcceptanceEmailHtml,
  customerQuoteEmailHtml,
} from "@/lib/quoteEmail";

const KANSAS_ORIGINS = [
  "concrete-contractors-wichita-ks",
  "commercial-concrete-wichita",
  "industrial-concrete-wichita",
  "retaining-walls-wichita",
  "stamped-concrete-wichita",
] as const;

const CUSTOMER_PHONE = "316-555-0199";
const TOKEN = "access-token-example";

function storedFor(origin: string, notes = "Dock apron at a Wichita warehouse.") {
  return projectDetailsForStorage(origin, notes);
}

function quoteHtml(origin: string | null, details: string | null) {
  const resolved = resolveQuoteOrigin(details, origin);
  const quoteUrl = absoluteQuoteUrl("https://fdzconstruction.com/", TOKEN, resolved);
  return customerQuoteEmailHtml({
    firstName: "Avery",
    quoteNumber: "#0108",
    estimateLow: 12000,
    estimateHigh: 18000,
    expiresDate: "November 14, 2026",
    quoteUrl,
    origin: resolved,
  });
}

describe("quote origin persistence", () => {
  it.each(KANSAS_ORIGINS)("keeps %s at the front of stored project details", (origin) => {
    const stored = storedFor(origin);
    const prefix = parseEstimateOrigin(origin)!.detailsPrefix;
    expect(stored?.startsWith(prefix)).toBe(true);
    expect(originIdFromProjectDetails(stored)).toBe(origin);
    expect(stored).toContain("Dock apron");
  });

  it("keeps a supported origin when notes are already 2,000 characters", () => {
    const origin = "industrial-concrete-wichita";
    const prefix = parseEstimateOrigin(origin)!.detailsPrefix;
    const stored = projectDetailsForStorage(origin, "K".repeat(DETAILS_MAX_LENGTH));
    expect(stored?.startsWith(prefix)).toBe(true);
    expect(stored!.length).toBeLessThanOrEqual(DETAILS_MAX_LENGTH);
    expect(originIdFromProjectDetails(stored)).toBe(origin);
  });

  it("does not treat a city name in notes as a Kansas origin", () => {
    const notes = "Pour a slab in Wichita, Kansas for a Sedgwick County warehouse.";
    expect(originIdFromProjectDetails(projectDetailsForStorage(undefined, notes))).toBeUndefined();
    expect(originIdFromProjectDetails(projectDetailsForStorage("not-a-page", notes))).toBeUndefined();
    expect(phoneForEstimateOrigin(resolveQuoteOrigin(notes, null))).toEqual(OKLAHOMA_PHONE);
  });

  it("strips a pasted prefix when the submitted origin is unsupported", () => {
    const pasted = parseEstimateOrigin("stamped-concrete-wichita")!.detailsPrefix;
    const stored = projectDetailsForStorage("not-a-page", `${pasted}\nPatio notes`);
    expect(originIdFromProjectDetails(stored)).toBeUndefined();
    expect(stored).not.toContain("Requested from /");
  });

  it("leaves a legacy prefix in place when from is omitted", () => {
    const prefix = parseEstimateOrigin("retaining-walls-wichita")!.detailsPrefix;
    const stored = projectDetailsForStorage(undefined, `${prefix}\nGrade change at the dock`);
    expect(originIdFromProjectDetails(stored)).toBe("retaining-walls-wichita");
  });

  it("uses the stored origin when the URL origin conflicts", () => {
    const stored = storedFor("commercial-concrete-wichita");
    expect(resolveQuoteOrigin(stored, "driveways-oklahoma-city")).toBe("commercial-concrete-wichita");
    expect(resolveQuoteOrigin(stored, "not-a-page")).toBe("commercial-concrete-wichita");
  });
});

describe("customer quote and acceptance email rendering", () => {
  it.each(KANSAS_ORIGINS)("renders a Kansas customer quote email for %s", (origin) => {
    const stored = storedFor(origin);
    const html = quoteHtml(origin, stored);
    expect(html).toContain(KANSAS_PHONE.display);
    expect(html).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(html).toContain(`from=${origin}`);
    expect(html).toContain("VIEW YOUR QUOTE");
    expect(html).toContain("ACCEPT QUOTE NOW");
    expect(html).toContain(BUSINESS_EMAIL);
    expect(html).not.toContain(OKLAHOMA_PHONE.display);
    expect(html).not.toContain(CUSTOMER_PHONE);
    expect(html).toContain(`https://fdzconstruction.com/quote/${TOKEN}?from=${origin}`);
  });

  it("keeps Oklahoma contact details for Oklahoma, missing, and unsupported origins", () => {
    for (const origin of [null, "bollard-installation-oklahoma-city", "not-a-page"]) {
      const stored = projectDetailsForStorage(origin, "Driveway in Oklahoma City.");
      const html = quoteHtml(origin, stored);
      expect(html).toContain(OKLAHOMA_PHONE.display);
      expect(html).toContain(`tel:${OKLAHOMA_PHONE.tel}`);
      expect(html).not.toContain(KANSAS_PHONE.display);
      if (origin === "bollard-installation-oklahoma-city") {
        expect(html).toContain(`from=${origin}`);
      } else {
        expect(html).not.toContain("?from=");
      }
    }
  });

  it("renders acceptance email from the stored quote, not a new browser origin", () => {
    const stored = storedFor("concrete-contractors-wichita-ks", "Commercial paving.");
    const origin = originIdFromProjectDetails(stored) ?? null;
    const quoteUrl = absoluteQuoteUrl("https://fdzconstruction.com", TOKEN, origin);
    const html = customerAcceptanceEmailHtml({
      firstName: "Avery",
      quoteNumber: "#0108",
      estimateLow: 12000,
      estimateHigh: 18000,
      acceptedDate: "October 15, 2026",
      quoteUrl,
      origin,
    });
    expect(html).toContain(KANSAS_PHONE.display);
    expect(html).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(html).toContain(quoteUrl);
    expect(html).not.toContain(OKLAHOMA_PHONE.display);

    const legacy = customerAcceptanceEmailHtml({
      firstName: "Avery",
      quoteNumber: "#0108",
      estimateLow: 4000,
      estimateHigh: 6000,
      acceptedDate: "October 15, 2026",
      quoteUrl: absoluteQuoteUrl("https://fdzconstruction.com", TOKEN, null),
      origin: originIdFromProjectDetails("Notes mention Wichita, Kansas.") ?? null,
    });
    expect(legacy).toContain(OKLAHOMA_PHONE.display);
    expect(legacy).toContain(`tel:${OKLAHOMA_PHONE.tel}`);
    expect(legacy).not.toContain("?from=");
  });
});

describe("quote function wiring", () => {
  const submit = readFileSync("supabase/functions/submit-quote/index.ts", "utf8");
  const accept = readFileSync("supabase/functions/accept-quote/index.ts", "utf8");
  const getQuote = readFileSync("supabase/functions/get-quote/index.ts", "utf8");

  it("keeps customer and internal recipients and the customer phone on internal mail", () => {
    expect(DEFAULT_NOTIFICATION_EMAIL).toBe("jesus@fdzconstruction.com");
    expect(submit).toContain("sendQuoteEmail(email, `Your Quote ${quoteNumber} from FDZ Construction`, customerHtml)");
    expect(submit).toContain("sendQuoteEmail(NOTIFICATION_EMAIL, `New Quote ${quoteNumber} - ${name}`, internalHtml)");
    expect(submit).toContain("tel:${phone}");
    expect(submit).not.toContain(KANSAS_PHONE.display);
    expect(submit).not.toContain(OKLAHOMA_PHONE.display);
    expect(accept).toContain("sendAcceptEmail(quote.customer_email, `Quote ${quoteNumber} Accepted - FDZ Construction`, customerHtml)");
    expect(accept).toContain("sendAcceptEmail(NOTIFICATION_EMAIL, `ACCEPTED: Quote ${quoteNumber} - ${quote.customer_name}`, internalHtml)");
    expect(accept).toContain("tel:${quote.customer_phone}");
    expect(accept).toContain("originIdFromProjectDetails(quote.project_details)");
    expect(accept).not.toContain("body.from");
  });

  it("still returns project details from the existing get-quote response", () => {
    expect(getQuote).toContain("access_token");
    expect(getQuote).not.toContain("project_details:");
    expect(submit).toContain("projectDetailsForStorage(body.from, detailsWithMeta)");
  });
});
