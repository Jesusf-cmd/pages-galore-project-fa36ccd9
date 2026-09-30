import { describe, expect, it } from "vitest";
import { getPrerenderBody } from "../../scripts/prerender-bodies";
import { routes } from "../../scripts/prerender-routes";
import { organizationJsonLdForPath } from "@/lib/organizationSchema";
import { isKansasPath } from "@/lib/phones";

describe("public street address removal", () => {
  it("keeps street and coordinates out of every prerender body", () => {
    for (const route of routes) {
      const body = getPrerenderBody(route.path) ?? "";
      expect(body, route.path).not.toContain("7004");
      expect(body, route.path).not.toMatch(/Indiana Ave/i);
      expect(body, route.path).not.toContain("35.4676");
      expect(body, route.path).not.toContain("-97.5164");
      expect(body, route.path).not.toMatch(/south OKC shop/i);
    }
  });

  it("omits streetAddress and geo from public organization JSON-LD", () => {
    const data = {
      "@type": "GeneralContractor",
      address: { streetAddress: "7004 S Indiana Ave", addressLocality: "Oklahoma City" },
      geo: { latitude: 35.4676, longitude: -97.5164 },
    };
    const oklahoma = organizationJsonLdForPath(data, "/sewer-line-repair-oklahoma-city");
    expect(oklahoma.geo).toBeUndefined();
    expect(oklahoma.address).toEqual({
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    });
    expect(isKansasPath("/commercial-concrete-wichita")).toBe(true);
  });
});

describe("residential sewer page", () => {
  const route = routes.find((entry) => entry.path === "/sewer-line-repair-oklahoma-city");
  const body = getPrerenderBody("/sewer-line-repair-oklahoma-city") ?? "";

  it("keeps the existing URL, canonical H1, and homeowner intent", () => {
    expect(route?.path).toBe("/sewer-line-repair-oklahoma-city");
    expect(route?.title).toBe("Residential Sewer Line Repair Oklahoma City | FDZ Construction LLC");
    expect(route?.h1).toBe("Residential Sewer Line Repair in Oklahoma City.");
    expect(route?.description).toContain("Camera inspection $200–$500");
    expect(route?.description).toContain("estimates");
    expect(route?.description).not.toMatch(/free camera/i);
    expect(body).toContain("<h1>Residential Sewer Line Repair in Oklahoma City.</h1>");
    expect(body).toContain("href=\"/#estimate\"");
    expect(body).toContain("tel:4054584805");
    expect(body).toContain("(405) 458-4805");
    expect(body).not.toContain("316-531-9583");
  });

  it("keeps published price ranges and does not claim a free camera inspection", () => {
    expect(body).toContain("$200 – $500");
    expect(body).toContain("$1,000 – $3,500");
    expect(body).toContain("$8,000 – $15,000");
    expect(body).not.toMatch(/free camera inspection/i);
    expect(body).not.toContain("FDZ pulls");
    expect(body).not.toContain("urgent response");
    expect(body).not.toContain("8+ years");
    expect(body).not.toContain("hundreds of residential");
    expect(body).not.toMatch(/published range/i);
    expect(body).toMatch(/estimates/i);
    expect(body).toContain("written quote");
    expect(body).toContain("two-year workmanship warranty");
  });

  it("is linked from driveway and sidewalk prerender bodies", () => {
    const driveways = getPrerenderBody("/driveways-oklahoma-city") ?? "";
    const sidewalks = getPrerenderBody("/sidewalks-oklahoma-city") ?? "";
    const home = getPrerenderBody("/") ?? "";
    expect(driveways).toContain('href="/sewer-line-repair-oklahoma-city"');
    expect(sidewalks).toContain('href="/sewer-line-repair-oklahoma-city"');
    expect(home).toContain('href="/sewer-line-repair-oklahoma-city"');
  });

  it("does not claim licensed plumbers or publish a plumbing license number", () => {
    const sewer = getPrerenderBody("/sewer-line-repair-oklahoma-city") ?? "";
    const sewerRoute = routes.find((entry) => entry.path === "/sewer-line-repair-oklahoma-city");
    expect(sewer).not.toMatch(/licensed plumbers/i);
    expect(sewer).not.toContain("75456");
    expect(sewerRoute?.description).not.toMatch(/licensed plumbers/i);
    expect(sewerRoute?.content).not.toMatch(/licensed plumbers/i);
  });
});
