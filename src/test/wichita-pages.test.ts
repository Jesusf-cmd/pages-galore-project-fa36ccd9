import { describe, expect, it } from "vitest";
import { WICHITA_PAGES } from "@/content/wichitaPages";
import { KANSAS_PHONE, OKLAHOMA_PHONE, isKansasPath, phoneForPath } from "@/lib/phones";
import { getPrerenderBody } from "../../scripts/prerender-bodies";
import { routes } from "../../scripts/prerender-routes";

describe("Wichita phone scoping", () => {
  it("uses the Kansas number only on Wichita routes", () => {
    for (const page of WICHITA_PAGES) {
      expect(isKansasPath(page.path)).toBe(true);
      expect(phoneForPath(page.path)).toEqual(KANSAS_PHONE);
      expect(phoneForPath(`${page.path}/`)).toEqual(KANSAS_PHONE);
    }
    expect(phoneForPath("/")).toEqual(OKLAHOMA_PHONE);
    expect(phoneForPath("/commercial-concrete-oklahoma-city")).toEqual(OKLAHOMA_PHONE);
    expect(phoneForPath("/retaining-walls-oklahoma-city")).toEqual(OKLAHOMA_PHONE);
    expect(phoneForPath("/patios-oklahoma-city")).toEqual(OKLAHOMA_PHONE);
  });

  it("keeps 316-531-9583 out of Oklahoma prerender bodies", () => {
    for (const route of routes) {
      const body = getPrerenderBody(route.path) ?? "";
      if (isKansasPath(route.path)) {
        expect(body).toContain(KANSAS_PHONE.display);
        expect(body).toContain(`tel:${KANSAS_PHONE.tel}`);
        expect(body).toContain(`<h1>${route.h1}</h1>`);
        expect(body).toContain('"@type":"Service"');
        expect(body).toContain('"addressRegion":"KS"');
        expect(body).not.toContain("Wichita-based");
        expect(body).not.toContain("our Wichita office");
      } else {
        expect(body).not.toContain("316-531-9583");
        expect(body).not.toContain("3165319583");
      }
    }
  });

  it("gives each Wichita page unique metadata and one primary intent", () => {
    const titles = WICHITA_PAGES.map((page) => page.metaTitle);
    const descriptions = WICHITA_PAGES.map((page) => page.metaDescription);
    const h1s = WICHITA_PAGES.map((page) => page.h1);
    expect(new Set(titles).size).toBe(4);
    expect(new Set(descriptions).size).toBe(4);
    expect(new Set(h1s).size).toBe(4);
    expect(titles).not.toContain("Commercial Concrete Contractor Oklahoma City | FDZ Construction");
    for (const page of WICHITA_PAGES) {
      expect(page.metaDescription.length).toBeLessThanOrEqual(170);
      expect(page.metaDescription).toContain("316-531-9583");
      const route = routes.find((entry) => entry.path === page.path);
      expect(route?.title).toBe(page.metaTitle);
      expect(route?.h1).toBe(page.h1);
      expect(route?.noindex).toBeUndefined();
    }
  });
});
