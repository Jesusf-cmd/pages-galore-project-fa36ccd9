import { describe, expect, it } from "vitest";
import { WICHITA_PAGES } from "@/content/wichitaPages";
import { estimatePath } from "@/lib/estimatePath";
import { organizationJsonLdForPath, stripWichitaStreetAddressHtml } from "@/lib/organizationSchema";
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
        expect(body).toContain(`href="${estimatePath(route.path.replace(/^\//, ""))}"`);
        expect(body).not.toContain('href="/#estimate"');
        expect(body).not.toContain("7004 S Indiana");
        expect(body.toLowerCase()).not.toContain("from oklahoma");
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

  it("omits the street address and coordinates on every public path", () => {
    const organization = {
      "@type": "GeneralContractor",
      address: { streetAddress: "7004 S Indiana Ave", addressLocality: "Oklahoma City", postalCode: "73159" },
      geo: { latitude: 35.4676, longitude: -97.5164 },
    };
    const wichita = organizationJsonLdForPath(organization, "/commercial-concrete-wichita");
    expect(wichita.address).toBeUndefined();
    expect(wichita.geo).toBeUndefined();
    const oklahoma = organizationJsonLdForPath(organization, "/commercial-concrete-oklahoma-city");
    expect(oklahoma.address).toMatchObject({ addressLocality: "Oklahoma City", addressRegion: "OK" });
    expect(oklahoma.address).not.toHaveProperty("streetAddress");
    expect(oklahoma.address).not.toHaveProperty("postalCode");
    expect(oklahoma.geo).toBeUndefined();

    const html = `<script type="application/ld+json">${JSON.stringify(organization)}</script><p>7004 S Indiana Ave, Oklahoma City, OK 73159</p><meta name="geo.position" content="35.4676;-97.5164" />`;
    const strippedOk = stripWichitaStreetAddressHtml(html, "/");
    expect(strippedOk).not.toContain("7004");
    expect(strippedOk).not.toContain("35.4676");
    expect(strippedOk).not.toContain("streetAddress");
    const strippedKs = stripWichitaStreetAddressHtml(html, "/stamped-concrete-wichita");
    expect(strippedKs).not.toContain("7004");
    expect(strippedKs).not.toContain("addressLocality");
  });
});
