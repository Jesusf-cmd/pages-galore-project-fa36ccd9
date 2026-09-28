import { describe, expect, it } from "vitest";
import {
  applyEstimateOriginToDetails,
  DETAILS_LIMIT_ERROR,
  DETAILS_MAX_LENGTH,
  detailsLimitError,
  ESTIMATE_PATH,
  estimatePath,
  parseEstimateOrigin,
  phoneForEstimateOrigin,
  quoteFollowUpPath,
  quoteSubmitCallFailure,
  uploadSubmitCallFailure,
} from "@/lib/estimatePath";
import { KANSAS_PHONE, OKLAHOMA_PHONE } from "@/lib/phones";

const REPAIR = "commercial-concrete-repair-oklahoma-city";
const BOLLARD = "bollard-installation-oklahoma-city";

/** Same order as EstimateForm and ProjectDocumentUpload: validate notes, then prefix. */
function constructDetailsPayload(from: string | null | undefined, details: string) {
  const error = detailsLimitError(details);
  if (error) return { error, details: null as string | null };
  return { error: null as string | null, details: applyEstimateOriginToDetails(from, details) };
}

describe("estimatePath", () => {
  it("keeps the generic homepage hash when origin is missing or unknown", () => {
    expect(estimatePath()).toBe(ESTIMATE_PATH);
    expect(estimatePath(null)).toBe(ESTIMATE_PATH);
    expect(estimatePath("not-a-page")).toBe(ESTIMATE_PATH);
  });

  it("retains Wichita route and service on the existing /#estimate destination", () => {
    const origins = [
      ["commercial-concrete-wichita", "commercial concrete, Wichita KS"],
      ["industrial-concrete-wichita", "industrial concrete, Wichita KS"],
      ["retaining-walls-wichita", "retaining walls, Wichita KS"],
      ["stamped-concrete-wichita", "stamped concrete, Wichita KS"],
    ] as const;
    for (const [slug, service] of origins) {
      expect(estimatePath(slug)).toBe(`/?from=${slug}#estimate`);
      const origin = parseEstimateOrigin(slug);
      expect(origin?.formLabel.toLowerCase()).toContain("wichita");
      const details = applyEstimateOriginToDetails(slug, "site notes");
      expect(details).toBe(`Requested from /${slug} (${service}).\nsite notes`);
      expect(details).not.toContain("submit-quote");
    }
  });

  it("retains allowlisted originating pages on the existing /#estimate destination", () => {
    expect(estimatePath(REPAIR)).toBe(`/?from=${REPAIR}#estimate`);
    expect(estimatePath(BOLLARD)).toBe(`/?from=${BOLLARD}#estimate`);
    expect(estimatePath("cost-of-concrete-oklahoma-city-2026")).toBe(
      "/?from=cost-of-concrete-oklahoma-city-2026#estimate",
    );
  });
});

describe("applyEstimateOriginToDetails", () => {
  const prefix = parseEstimateOrigin(REPAIR)!.detailsPrefix;
  const room = DETAILS_MAX_LENGTH - prefix.length - 1;

  it("prefixes ordinary short notes without adding CRM keys", () => {
    const out = applyEstimateOriginToDetails(BOLLARD, "4 bollards at dock");
    expect(out).toContain("Requested from /bollard-installation-oklahoma-city");
    expect(out).toContain("4 bollards at dock");
  });

  it("does not duplicate the prefix", () => {
    const once = applyEstimateOriginToDetails(REPAIR, "cracked dock apron");
    const twice = applyEstimateOriginToDetails(REPAIR, once);
    expect(twice).toBe(once);
  });

  it("ignores unknown origins and preserves existing valid notes", () => {
    expect(applyEstimateOriginToDetails("unknown", "notes")).toBe("notes");
    expect(applyEstimateOriginToDetails(null, "notes")).toBe("notes");
    expect(parseEstimateOrigin("unknown")).toBeUndefined();
  });

  it("retains the prefix when prefix, separator, and notes fit exactly at 2,000 characters", () => {
    const notes = "X".repeat(room);
    const out = applyEstimateOriginToDetails(REPAIR, notes);
    expect(out.length).toBe(DETAILS_MAX_LENGTH);
    expect(out.startsWith(prefix)).toBe(true);
    expect(out.endsWith(notes)).toBe(true);
  });

  it("omits the prefix when adding it would exceed the limit by one, and preserves notes", () => {
    const notes = "X".repeat(room + 1);
    const out = applyEstimateOriginToDetails(REPAIR, notes);
    expect(out).toBe(notes);
    expect(out.startsWith(prefix)).toBe(false);
    expect(out.length).toBe(room + 1);
  });

  it("retains all 2,000 characters of customer notes", () => {
    const notes = "Y".repeat(DETAILS_MAX_LENGTH);
    expect(applyEstimateOriginToDetails(REPAIR, notes)).toBe(notes);
  });
});

describe("detailsLimitError and request construction", () => {
  const prefix = parseEstimateOrigin(REPAIR)!.detailsPrefix;
  const room = DETAILS_MAX_LENGTH - prefix.length - 1;

  it("includes originating-page context for ordinary short notes", () => {
    const payload = constructDetailsPayload(REPAIR, "cracked warehouse slab");
    expect(payload.error).toBeNull();
    expect(payload.details).toBe(`${prefix}\ncracked warehouse slab`);
  });

  it("blocks notes over 2,000 characters before any request is built", () => {
    const notes = "Z".repeat(DETAILS_MAX_LENGTH + 1);
    const payload = constructDetailsPayload(REPAIR, notes);
    expect(payload.error).toBe(DETAILS_LIMIT_ERROR);
    expect(payload.details).toBeNull();
    expect(detailsLimitError(notes)).toBe(DETAILS_LIMIT_ERROR);
  });

  it("allows exactly 2,000 characters of notes and does not truncate them", () => {
    const notes = "Y".repeat(DETAILS_MAX_LENGTH);
    const payload = constructDetailsPayload(REPAIR, notes);
    expect(payload.error).toBeNull();
    expect(payload.details).toBe(notes);
  });

  it("preserves missing or unknown origin notes when they are within the limit", () => {
    expect(constructDetailsPayload(null, "keep me").details).toBe("keep me");
    expect(constructDetailsPayload("unknown", "keep me").details).toBe("keep me");
  });
});

describe("origin allowlist own properties", () => {
  for (const from of ["constructor", "toString", "__proto__"]) {
    it(`ignores inherited property ${from} in links, banners, and notes`, () => {
      expect(estimatePath(from)).toBe(ESTIMATE_PATH);
      expect(parseEstimateOrigin(from)).toBeUndefined();
      expect(applyEstimateOriginToDetails(from, "Customer scope")).toBe("Customer scope");
      expect(applyEstimateOriginToDetails(from, "")).toBe("");
    });
  }
});

describe("phoneForEstimateOrigin and call messages", () => {
  const wichita = [
    "commercial-concrete-wichita",
    "industrial-concrete-wichita",
    "retaining-walls-wichita",
    "stamped-concrete-wichita",
  ] as const;
  const oklahoma = [
    "commercial-concrete-repair-oklahoma-city",
    "bollard-installation-oklahoma-city",
    "cost-of-concrete-oklahoma-city-2026",
  ] as const;

  it("uses 316-531-9583 for every recognized Wichita from value", () => {
    for (const from of wichita) {
      expect(phoneForEstimateOrigin(from)).toEqual(KANSAS_PHONE);
      const quote = quoteSubmitCallFailure(from);
      expect(quote.prefix).toContain("Please call us at");
      expect(quote.phone).toEqual(KANSAS_PHONE);
      expect(quote.phone.display).toBe("316-531-9583");
      expect(quote.phone.tel).toBe("3165319583");
      const upload = uploadSubmitCallFailure(from);
      expect(upload.phone).toEqual(KANSAS_PHONE);
      const remapped = uploadSubmitCallFailure(
        from,
        "Something went wrong. Please try again or call (405) 458-4805.",
      );
      expect(remapped.phone).toEqual(KANSAS_PHONE);
      expect(remapped.prefix).not.toContain("405");
    }
  });

  it("keeps (405) 458-4805 for Oklahoma, missing, and unrecognized origins", () => {
    for (const from of [...oklahoma, null, "unknown", "constructor"]) {
      expect(phoneForEstimateOrigin(from)).toEqual(OKLAHOMA_PHONE);
      expect(quoteSubmitCallFailure(from).phone).toEqual(OKLAHOMA_PHONE);
      expect(uploadSubmitCallFailure(from).phone).toEqual(OKLAHOMA_PHONE);
    }
  });

  it("does not rewrite non-phone upload validation errors", () => {
    const failure = uploadSubmitCallFailure(
      "commercial-concrete-wichita",
      "Please attach at least one PDF, JPG, or PNG file.",
    );
    expect(failure.phone).toBeNull();
    expect(failure.prefix).toBe("Please attach at least one PDF, JPG, or PNG file.");
  });

  it("does not change quote or upload detail prefixes when selecting a call number", () => {
    const details = applyEstimateOriginToDetails("stamped-concrete-wichita", "ashlar patio");
    expect(details).toContain("Requested from /stamped-concrete-wichita");
    expect(quoteSubmitCallFailure("stamped-concrete-wichita").prefix).not.toContain("submit-quote");
  });

  it("keeps Wichita origin on the quote follow-up URL without changing storage", () => {
    expect(quoteFollowUpPath("token-1", "commercial-concrete-wichita")).toBe(
      "/quote/token-1?from=commercial-concrete-wichita",
    );
    expect(quoteFollowUpPath("token-1", null)).toBe("/quote/token-1");
    expect(quoteFollowUpPath("token-1", "unknown")).toBe("/quote/token-1");
  });
});
