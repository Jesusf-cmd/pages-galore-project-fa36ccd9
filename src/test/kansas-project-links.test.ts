import { describe, expect, it } from "vitest";
import { getProjectById } from "@/data/projects";
import { estimatePath, estimatePathForLocation } from "@/lib/estimatePath";
import { kansasProjectServiceLink } from "@/lib/kansasProjectLinks";
import { WICHITA_HOME_PATH } from "@/lib/phones";

describe("kansasProjectServiceLink", () => {
  it("maps matching scopes to Wichita service pages", () => {
    expect(kansasProjectServiceLink(getProjectById("guthrie-forklift-ramp")!)).toEqual({
      href: "/industrial-concrete-wichita",
      label: "Explore industrial concrete in Wichita",
    });
    expect(kansasProjectServiceLink(getProjectById("okc-retaining-wall")!)).toEqual({
      href: "/retaining-walls-wichita",
      label: "Explore retaining walls in Wichita",
    });
    expect(kansasProjectServiceLink(getProjectById("okc-stamped-patio")!)).toEqual({
      href: "/stamped-concrete-wichita",
      label: "Explore stamped concrete in Wichita",
    });
  });

  it("uses an honest Wichita inquiry destination when no Kansas service page matches", () => {
    const inquiry = {
      href: estimatePath("concrete-contractors-wichita-ks"),
      label: "Request a Wichita estimate",
    };
    expect(kansasProjectServiceLink(getProjectById("star-spencer-hs")!)).toEqual(inquiry);
    expect(kansasProjectServiceLink(getProjectById("edmond-driveway")!)).toEqual(inquiry);
    expect(kansasProjectServiceLink(getProjectById("norman-patio-paver-walkway")!)).toEqual(inquiry);
  });

  it("preserves a location-aware inquiry href when the hub has a service from=", () => {
    const inquiryHref = estimatePathForLocation(
      WICHITA_HOME_PATH,
      "?from=commercial-concrete-wichita",
    );
    expect(inquiryHref).toBe(
      `${WICHITA_HOME_PATH}?from=commercial-concrete-wichita#estimate`,
    );
    expect(kansasProjectServiceLink(getProjectById("edmond-driveway")!, inquiryHref)).toEqual({
      href: inquiryHref,
      label: "Request a Wichita estimate",
    });
    expect(kansasProjectServiceLink(getProjectById("guthrie-forklift-ramp")!, inquiryHref)).toEqual({
      href: "/industrial-concrete-wichita",
      label: "Explore industrial concrete in Wichita",
    });
  });

  it("does not relabel a broom patio or driveway as stamped concrete", () => {
    const patio = kansasProjectServiceLink(getProjectById("norman-patio-paver-walkway")!);
    const drive = kansasProjectServiceLink(getProjectById("edmond-driveway")!);
    expect(patio.href).not.toContain("stamped");
    expect(drive.href).not.toContain("stamped");
    expect(patio.label.toLowerCase()).not.toContain("stamped");
    expect(drive.label.toLowerCase()).not.toContain("stamped");
  });
});
