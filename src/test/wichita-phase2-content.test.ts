import { describe, expect, it } from "vitest";
import {
  commercialConcreteWichita,
  industrialConcreteWichita,
  retainingWallsWichita,
  stampedConcreteWichita,
} from "@/content/wichitaPages";
import { estimatePath } from "@/lib/estimatePath";
import { KANSAS_PHONE, WICHITA_HOME_PATH } from "@/lib/phones";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

const services = [
  commercialConcreteWichita,
  industrialConcreteWichita,
  retainingWallsWichita,
  stampedConcreteWichita,
] as const;

describe("Wichita Phase 2 service content", () => {
  it("removes blanket PSI and thickness promises from the four service pages", () => {
    for (const page of services) {
      const text = JSON.stringify(page);
      expect(text).not.toContain("4,000 PSI minimum on commercial flatwork");
      expect(text).not.toContain("4,000 PSI minimum; 5,000 PSI or higher");
      expect(text).not.toContain("4,000 PSI for cast-in-place retaining walls");
      expect(text).not.toContain("4,000 PSI flatwork");
      expect(text).not.toContain("commonly in the 5–8 inch range");
      expect(text).not.toContain("Separate thin pages");
      expect(text).not.toContain("There is no blanket Kansas rate sheet");
    }

    expect(JSON.stringify(commercialConcreteWichita.specs)).toContain(
      "not a blanket site-wide strength",
    );
    expect(JSON.stringify(industrialConcreteWichita.specs)).toContain("Per project plans");
    expect(JSON.stringify(retainingWallsWichita.specs)).toContain("not a blanket wall default");
    expect(JSON.stringify(stampedConcreteWichita.specs)).toContain(
      "not a decorative default number",
    );
  });

  it("keeps distinct estimating guidance for each service", () => {
    const commercial = JSON.stringify(commercialConcreteWichita);
    const industrial = JSON.stringify(industrialConcreteWichita);
    const retaining = JSON.stringify(retainingWallsWichita);
    const stamped = JSON.stringify(stampedConcreteWichita);

    expect(commercial).toContain("Approximate quantities for parking, paving, walks, curb");
    expect(commercial).toContain("occupied-site constraints");
    expect(industrial).toContain("Dock/pit details and equipment-vendor coordination");
    expect(industrial).toContain("possible phasing");
    expect(industrial).toContain("Concrete bases for generators, compressors");
    expect(retaining).toContain("Approximate wall length, height, and the grade change");
    expect(retaining).toContain("without diagnosing every leaning wall from symptoms alone");
    expect(stamped).toContain("Intended use and approximate area");
    expect(stamped).toContain("A full structural engineering package is not assumed");
  });

  it("preserves metadata, Kansas estimate destinations, and dock coverage in prerender HTML", () => {
    const expected = [
      [
        commercialConcreteWichita,
        "Approximate quantities for parking, paving, walks, curb",
        "not a blanket site-wide strength",
      ],
      [
        industrialConcreteWichita,
        "Warehouse slabs and floor replacement",
        "Per project plans and the specified industrial or equipment requirements",
      ],
      [
        retainingWallsWichita,
        "Approximate wall length, height, and the grade change",
        "not a blanket wall default",
      ],
      [
        stampedConcreteWichita,
        "Intended use and approximate area",
        "not a decorative default number",
      ],
    ] as const;

    for (const [page, guidance, spec] of expected) {
      const origin = page.path.replace(/^\//, "");
      expect(estimatePath(origin)).toBe(`${WICHITA_HOME_PATH}?from=${origin}#estimate`);

      const body = getPrerenderBody(page.path) ?? "";
      expect(body).toContain(`<h1>${page.h1}</h1>`);
      expect(body).toContain(guidance);
      expect(body).toContain(spec);
      expect(body).toContain(`tel:${KANSAS_PHONE.tel}`);
      expect(body).toContain(`href="${WICHITA_HOME_PATH}?from=${origin}#estimate"`);
      expect(body).not.toContain("4,000 PSI minimum on commercial flatwork");
      expect(body).not.toContain("4,000 PSI for cast-in-place retaining walls");
      expect(body).not.toContain("4,000 PSI flatwork");
    }

    const industrialBody = getPrerenderBody("/industrial-concrete-wichita") ?? "";
    expect(industrialBody).toContain("Dock aprons, approach slabs, and pit concrete");
    expect(industrialBody).toContain("/loading-dock-construction-oklahoma-city");
    expect(industrialBody).toContain("Loading Docks");
  });
});
