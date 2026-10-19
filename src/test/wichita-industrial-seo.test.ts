import { describe, expect, it } from "vitest";
import { industrialConcreteWichita } from "@/content/wichitaPages";
import { estimatePath } from "@/lib/estimatePath";
import { KANSAS_PHONE } from "@/lib/phones";
import { getPrerenderBody } from "../../scripts/prerender-bodies";
import { routes } from "../../scripts/prerender-routes";

describe("Wichita industrial SEO content expansion", () => {
  const page = industrialConcreteWichita;
  const text = JSON.stringify(page);

  it("keeps the industrial URL, H1, and Kansas phone helpers", () => {
    expect(page.path).toBe("/industrial-concrete-wichita");
    expect(page.h1).toBe("Industrial Concrete Contractor in Wichita, Kansas");
    expect(page.metaTitle).toBe("Industrial Concrete Contractor Wichita KS | FDZ Construction");
    expect(page.introText).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(page.introText).toContain("/commercial-concrete-wichita");
    expect(page.introText).not.toContain("Separate thin pages");
    expect(page.introText).toContain("warehouse slabs");
    expect(page.introText).toContain("equipment foundations and machine pads");
  });

  it("expands warehouse and equipment scope without inventing Kansas prices or soil claims", () => {
    expect(text).toContain("Warehouse slabs and floor replacement");
    expect(text).toContain("Equipment foundations and machine pads");
    expect(text).toContain("slab-on-grade");
    expect(text).toContain(
      "Subgrade preparation and base requirements are reviewed for the conditions at your Wichita site",
    );
    expect(text).not.toContain("Oklahoma soil assumptions do not determine the Kansas scope");
    expect(text).not.toContain("already supported on this page");
    expect(text).not.toContain("There is no blanket Kansas rate sheet");
    expect(text).toMatch(/FF\/FL/);
    expect(text).toContain("Loading Docks");
    expect(text).toContain("Dock aprons, approach slabs, and pit concrete");
    expect(text).not.toMatch(/\$\d/);
    expect(text).not.toContain("pricing pending");
    expect(text).not.toContain("4,000 PSI minimum");
    expect(text).toContain("Per project plans");
  });

  it("keeps engineering with the project documents and adds useful FAQs", () => {
    expect(text).toContain(
      "Structural design, vibration-isolation design, anchorage design, and equipment installation remain",
    );
    const questions = page.faq.map((item) => item.question);
    expect(questions).toContain("Do you pour new warehouse slabs as well as replace existing floors?");
    expect(questions).toContain("Can floor replacement be planned in phases?");
    expect(questions).toContain("What drawings are needed for a machine pad or equipment foundation?");
    expect(questions).toContain(
      "Who determines slab thickness, reinforcement, anchors, and flatness targets?",
    );
    expect(questions).toContain("How is a Wichita industrial concrete estimate prepared?");
    expect(page.faq.some((item) => /loading docks/i.test(item.answer))).toBe(true);
    expect(page.faq.find((item) => /phases/i.test(item.question))?.answer).toMatch(
      /does not promise uninterrupted operation/i,
    );
  });

  it("keeps estimate origin wiring and renders new content in prerender HTML", () => {
    const origin = "industrial-concrete-wichita";
    expect(estimatePath(origin)).toBe(`/?from=${origin}#estimate`);
    const route = routes.find((entry) => entry.path === page.path);
    expect(route?.h1).toBe(page.h1);
    expect(route?.title).toBe(page.metaTitle);

    const body = getPrerenderBody("/industrial-concrete-wichita") ?? "";
    expect(body).toContain(`<h1>${page.h1}</h1>`);
    expect(body).toContain("Warehouse slabs and floor replacement");
    expect(body).toContain("Equipment foundations and machine pads");
    expect(body).toContain("Dock aprons, approach slabs, and pit concrete");
    expect(body).toContain("Approximate dimensions or square footage");
    expect(body).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(body).toContain(`href="/?from=industrial-concrete-wichita#estimate"`);
    expect(body).toContain("Do you pour new warehouse slabs as well as replace existing floors?");
    expect(body).toContain("Per project plans and the specified industrial or equipment requirements");
    expect(body).not.toContain("4,000 PSI minimum");
    expect(body).not.toContain("Separate thin pages");
    expect(body).toContain('"@type":"Service"');
  });
});
