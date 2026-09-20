import { describe, expect, it } from "vitest";
import {
  applyEstimateOriginToDetails,
  ESTIMATE_PATH,
  estimatePath,
  parseEstimateOrigin,
} from "@/lib/estimatePath";

describe("estimatePath", () => {
  it("keeps the generic homepage hash when origin is missing or unknown", () => {
    expect(estimatePath()).toBe(ESTIMATE_PATH);
    expect(estimatePath(null)).toBe(ESTIMATE_PATH);
    expect(estimatePath("not-a-page")).toBe(ESTIMATE_PATH);
  });

  it("retains allowlisted originating pages on the existing /#estimate destination", () => {
    expect(estimatePath("commercial-concrete-repair-oklahoma-city")).toBe(
      "/?from=commercial-concrete-repair-oklahoma-city#estimate",
    );
    expect(estimatePath("bollard-installation-oklahoma-city")).toBe(
      "/?from=bollard-installation-oklahoma-city#estimate",
    );
    expect(estimatePath("cost-of-concrete-oklahoma-city-2026")).toBe(
      "/?from=cost-of-concrete-oklahoma-city-2026#estimate",
    );
  });
});

describe("applyEstimateOriginToDetails", () => {
  it("prefixes the existing details field without adding CRM keys", () => {
    expect(applyEstimateOriginToDetails("bollard-installation-oklahoma-city", "4 bollards at dock")).toContain(
      "Requested from /bollard-installation-oklahoma-city",
    );
    expect(applyEstimateOriginToDetails("bollard-installation-oklahoma-city", "4 bollards at dock")).toContain(
      "4 bollards at dock",
    );
  });

  it("does not duplicate the prefix", () => {
    const once = applyEstimateOriginToDetails(
      "commercial-concrete-repair-oklahoma-city",
      "cracked dock apron",
    );
    const twice = applyEstimateOriginToDetails("commercial-concrete-repair-oklahoma-city", once);
    expect(twice).toBe(once);
  });

  it("ignores unknown origins", () => {
    expect(applyEstimateOriginToDetails("unknown", "notes")).toBe("notes");
    expect(parseEstimateOrigin("unknown")).toBeUndefined();
  });
});
