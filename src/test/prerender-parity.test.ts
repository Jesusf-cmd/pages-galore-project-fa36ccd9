import { describe, expect, it } from "vitest";
import { BLOG_POSTS } from "@/content/blog";
import { getPrerenderBody } from "../../scripts/prerender-bodies";
import { routes } from "../../scripts/prerender-routes";
import { FAQ_JSON_LD_SCRIPT_ID, faqJsonLdScriptTag } from "@/lib/faqJsonLd";

const PRIORITY_ROUTES = [
  "/blog",
  "/blog/why-concrete-driveways-crack-oklahoma",
  "/blog/cost-of-concrete-oklahoma-city-2026",
  "/blog/rebar-vs-wire-mesh-concrete-slabs",
  "/blog/how-thick-should-driveway-be-oklahoma",
  "/blog/best-time-of-year-to-pour-concrete-okc",
  "/ada-concrete-ramps-oklahoma-city",
  "/commercial-curb-and-gutter-oklahoma-city",
  "/concrete-parking-lot-repair-oklahoma-city",
  "/loading-dock-concrete-repair-oklahoma-city",
  "/dock-leveler-pit-concrete-oklahoma-city",
  "/warehouse-slab-repair-oklahoma-city",
  "/industrial-concrete-repair-oklahoma-city",
  "/equipment-pad-concrete-oklahoma-city",
  "/truck-court-concrete-oklahoma-city",
  "/loading-dock-construction-oklahoma-city",
  "/loading-dock-replacement-oklahoma-city",
  "/crane-foundation-installation-oklahoma-city",
  "/driveway-repair-oklahoma-city",
  "/foundation-repair-oklahoma-city",
  "/soil-stabilization-oklahoma-city",
  "/retail-restaurant-concrete-oklahoma-city",
  "/driveways-edmond",
  "/driveways-norman",
  "/driveways-yukon",
  "/driveways-moore",
  "/driveways-mustang",
  "/foundations-edmond",
  "/foundations-norman",
  "/foundations-yukon",
  "/retaining-walls-edmond",
  "/retaining-walls-norman",
  "/patios-edmond",
  "/patios-norman",
  "/patios-moore",
  "/patios-yukon",
  "/pool-deck-oklahoma-city",
  "/dumpster-pad-concrete-oklahoma-city",
  "/polished-concrete-oklahoma-city",
  "/epoxy-floor-coatings-oklahoma-city",
  "/tilt-wall-concrete-oklahoma-city",
  "/concrete-maintenance-oklahoma-city",
] as const;

const EXPECTED_SECTIONS: Record<(typeof PRIORITY_ROUTES)[number], string[]> = {
  "/blog": BLOG_POSTS.map((post) => `href="/blog/${post.slug}"`),
  "/blog/why-concrete-driveways-crack-oklahoma": [
    "The Real Culprit: Oklahoma Clay Soil",
    "href='/driveways-oklahoma-city'",
  ],
  "/blog/cost-of-concrete-oklahoma-city-2026": [
    "Typical Project Costs in Oklahoma City (2026)",
    "href='/foundations-oklahoma-city'",
  ],
  "/blog/rebar-vs-wire-mesh-concrete-slabs": [
    "What Rebar Does That Wire Mesh Doesn't",
    "href='/patios-oklahoma-city'",
  ],
  "/blog/how-thick-should-driveway-be-oklahoma": [
    "The Standard: 4 Inches for Passenger Vehicles",
    "href='/driveways-oklahoma-city'",
  ],
  "/blog/best-time-of-year-to-pour-concrete-okc": [
    "The Ideal Window: October Through April",
    "href='/driveways-oklahoma-city'",
  ],
  "/ada-concrete-ramps-oklahoma-city": [
    "ADA Concrete Services in Oklahoma City",
    "href='/sidewalks-oklahoma-city'",
    "href='/commercial-concrete-repair-oklahoma-city'",
  ],
  "/commercial-curb-and-gutter-oklahoma-city": [
    "Curb & Gutter Services in Oklahoma City",
    "href='/parking-lots-oklahoma-city'",
    "href='/ada-concrete-ramps-oklahoma-city'",
  ],
  "/concrete-parking-lot-repair-oklahoma-city": [
    "Parking Lot Repair Services in Oklahoma City",
    "href='/parking-lots-oklahoma-city'",
    "href='/commercial-concrete-repair-oklahoma-city'",
  ],
  "/loading-dock-concrete-repair-oklahoma-city": [
    "Loading Dock Concrete Repair Scope",
    "href='/dock-leveler-pit-concrete-oklahoma-city'",
    "href='/warehouse-slab-repair-oklahoma-city'",
  ],
  "/dock-leveler-pit-concrete-oklahoma-city": [
    "What We Build & Repair",
    "Dock Leveler Pit",
  ],
  "/warehouse-slab-repair-oklahoma-city": [
    "Floor Flatness & Levelness (FF/FL)",
    "href='/industrial-concrete-repair-oklahoma-city'",
    "href='/loading-dock-concrete-repair-oklahoma-city'",
  ],
  "/industrial-concrete-repair-oklahoma-city": [
    "What We Repair",
    "href='/commercial-concrete-oklahoma-city'",
    "href='/loading-dock-concrete-repair-oklahoma-city'",
    "href='/warehouse-slab-repair-oklahoma-city'",
  ],
  "/equipment-pad-concrete-oklahoma-city": [
    "What We Pour",
    "Equipment Foundation Specs",
    "href=\"/#estimate\"",
  ],
  "/truck-court-concrete-oklahoma-city": [
    "What Makes Truck Court Concrete Different",
    "href=\"/#estimate\"",
  ],
  "/loading-dock-construction-oklahoma-city": [
    "Loading Dock Concrete Is Different",
    "href='/loading-dock-concrete-repair-oklahoma-city'",
    "href='/loading-dock-replacement-oklahoma-city'",
    "href='/dock-leveler-pit-concrete-oklahoma-city'",
  ],
  "/loading-dock-replacement-oklahoma-city": [
    "When to Replace, Not Repair",
    "href=\"/#estimate\"",
  ],
  "/crane-foundation-installation-oklahoma-city": [
    "Crane Foundation Concrete Scope",
    "href='/equipment-pad-concrete-oklahoma-city'",
    "href='/tilt-wall-concrete-oklahoma-city'",
    "href='/foundations-oklahoma-city'",
  ],
  "/driveway-repair-oklahoma-city": [
    "Our Repair Scope",
    "href='/driveways-oklahoma-city'",
    'href="/foundation-repair-oklahoma-city"',
  ],
  "/foundation-repair-oklahoma-city": [
    "Our Repair Scope",
    "href='/foundations-oklahoma-city'",
    'href="/driveway-repair-oklahoma-city"',
  ],
  "/soil-stabilization-oklahoma-city": [
    "Soil Stabilization Methods We Use",
    "href='/warehouse-floor-replacement-oklahoma-city'",
    "href='/equipment-foundations-oklahoma-city'",
  ],
  "/retail-restaurant-concrete-oklahoma-city": [
    "Restaurant & Retail Concrete We Install",
    "href='/ada-ramps-oklahoma-city'",
    "href='/dumpster-pads-oklahoma-city'",
    "href='/epoxy-floor-coatings-oklahoma-city'",
  ],
  "/driveways-edmond": [
    "Edmond Driveways Fail for Two Specific Reasons",
    "href=\"/driveways-oklahoma-city\"",
    "href=\"/edmond-concrete\"",
    "href=\"/foundations-edmond\"",
    "Garber-Wellington",
  ],
  "/driveways-norman": [
    "Canadian River",
    "href=\"/norman-ok-concrete\"",
    "href=\"/patios-norman\"",
  ],
  "/driveways-yukon": [
    "Yukon's Real Driveway Risk",
    "href=\"/yukon-oklahoma-concrete\"",
    "href=\"/driveways-edmond\"",
  ],
  "/driveways-moore": [
    "Water Has Nowhere to Go",
    "href=\"/moore-oklahoma-concrete\"",
    "href=\"/patios-moore\"",
  ],
  "/driveways-mustang": [
    "Bad Subdivision Fill",
    "href=\"/mustang-oklahoma-concrete\"",
    "href=\"/driveways-yukon\"",
  ],
  "/foundations-edmond": [
    "Edmond Fill Lots Need Pier Foundations",
    "href=\"/foundations-oklahoma-city\"",
    "href=\"/driveways-edmond\"",
  ],
  "/foundations-norman": [
    "Soil Transitions",
    "href=\"/foundations-oklahoma-city\"",
    "href=\"/patios-norman\"",
  ],
  "/foundations-yukon": [
    "What's Underneath",
    "href=\"/driveways-mustang\"",
    "href=\"/yukon-oklahoma-concrete\"",
  ],
  "/retaining-walls-edmond": [
    "Drainage — Not the Wall",
    "href=\"/retaining-walls-oklahoma-city\"",
    "href=\"/foundations-edmond\"",
  ],
  "/retaining-walls-norman": [
    "Soil Changes",
    "href=\"/retaining-walls-oklahoma-city\"",
    "href=\"/foundations-norman\"",
  ],
  "/patios-edmond": [
    "Grade Transition",
    "href=\"/patios-oklahoma-city\"",
    "href=\"/driveways-edmond\"",
  ],
  "/patios-norman": [
    "Slab-House Joint",
    "href=\"/patios-oklahoma-city\"",
    "href=\"/retaining-walls-norman\"",
  ],
  "/patios-moore": [
    "Pools at the House",
    "href=\"/driveways-moore\"",
    "href=\"/moore-oklahoma-concrete\"",
  ],
  "/patios-yukon": [
    "the Base Wasn't Right",
    "href=\"/driveways-yukon\"",
    "href=\"/foundations-yukon\"",
  ],
  "/pool-deck-oklahoma-city": [
    "Pool Deck Services We Offer in Oklahoma City",
    "href=\"/patios-oklahoma-city\"",
    "href=\"/driveways-oklahoma-city\"",
    "href=\"/our-projects\"",
    "Stamped Concrete Pool Deck",
  ],
  "/dumpster-pad-concrete-oklahoma-city": [
    "Dumpster Pad Services in Oklahoma City",
    "href='/parking-lots-oklahoma-city'",
    "href='/commercial-curb-gutter-oklahoma-city'",
  ],
  "/polished-concrete-oklahoma-city": [
    "Polished Concrete Finish Levels",
    "href='/epoxy-floor-coatings-oklahoma-city'",
    "href='/warehouse-floor-replacement-oklahoma-city'",
  ],
  "/epoxy-floor-coatings-oklahoma-city": [
    "Epoxy Systems We Install",
    "href='/polished-concrete-oklahoma-city'",
    "href='/industrial-concrete-repair-oklahoma-city'",
  ],
  "/tilt-wall-concrete-oklahoma-city": [
    "Tilt-Wall Concrete We Provide",
    "href='/equipment-foundations-oklahoma-city'",
    "href='/loading-dock-construction-oklahoma-city'",
  ],
  "/concrete-maintenance-oklahoma-city": [
    "Concrete Maintenance We Provide",
    "href='/industrial-concrete-repair-oklahoma-city'",
    "href='/driveway-repair-oklahoma-city'",
  ],
};

describe("prerender content parity for priority routes", () => {
  it("prerenders 71 routes", () => {
    expect(routes).toHaveLength(71);
  });

  it("exposes page-specific sections and crawlable links in generated bodies", () => {
    for (const path of PRIORITY_ROUTES) {
      const body = getPrerenderBody(path);
      expect(body, `missing prerender body for ${path}`).toBeTruthy();
      const route = routes.find((entry) => entry.path === path);
      expect(body).toContain(`<h1>${route?.h1}</h1>`);
      for (const snippet of EXPECTED_SECTIONS[path]) {
        expect(body, `${path} missing ${snippet}`).toContain(snippet);
      }
    }
  });

  it("links the blog hub to all five articles", () => {
    const hub = getPrerenderBody("/blog") ?? "";
    expect(BLOG_POSTS).toHaveLength(5);
    for (const post of BLOG_POSTS) {
      expect(hub).toContain(`href="/blog/${post.slug}"`);
      expect(hub).toContain(post.title);
    }
  });

  it("keeps crawler H1s that differ from React titles", () => {
    expect(getPrerenderBody("/equipment-pad-concrete-oklahoma-city")).toContain(
      "<h1>Equipment Pad Concrete in Oklahoma City</h1>",
    );
    expect(getPrerenderBody("/truck-court-concrete-oklahoma-city")).toContain(
      "<h1>Truck Court Concrete in Oklahoma City</h1>",
    );
    expect(getPrerenderBody("/industrial-concrete-repair-oklahoma-city")).toContain(
      "<h1>Industrial Concrete Repair in Oklahoma City, OK</h1>",
    );
  });

  it("keeps crawler H1s that differ from React titles on phase 2b pages", () => {
    expect(getPrerenderBody("/dumpster-pad-concrete-oklahoma-city")).toContain(
      "<h1>Dumpster Pad Concrete in Oklahoma City</h1>",
    );
    expect(getPrerenderBody("/concrete-maintenance-oklahoma-city")).toContain(
      "<h1>Concrete Maintenance Programs in Oklahoma City</h1>",
    );
    expect(getPrerenderBody("/driveways-edmond")).toContain(
      "<h1>Concrete Driveway Contractors in Edmond, OK</h1>",
    );
  });

  it("selects the correct city and service copy and optional sibling links", () => {
    const edmond = getPrerenderBody("/driveways-edmond") ?? "";
    const yukon = getPrerenderBody("/driveways-yukon") ?? "";
    expect(edmond).toContain("Edmond");
    expect(edmond).not.toContain("Canadian River corridor");
    expect(edmond).toContain('href="/retaining-walls-edmond"');
    expect(yukon).toContain("Canadian County");
    expect(yukon).toContain('href="/driveways-norman"');
    expect(yukon).not.toContain('href="/driveways-moore"');
    expect(getPrerenderBody("/foundations-yukon")).toContain('href="/driveways-mustang"');
  });

  it("leaves only /builders on the fallback path among prerender routes", () => {
    const missing = routes
      .filter((route) => !getPrerenderBody(route.path))
      .map((route) => route.path);
    expect(missing).toEqual(["/builders"]);
  });

  it("emits valid FAQ JSON-LD for phase 2a and 2b pages", () => {
    const paths = [
      "/industrial-concrete-repair-oklahoma-city",
      "/equipment-pad-concrete-oklahoma-city",
      "/truck-court-concrete-oklahoma-city",
      "/loading-dock-construction-oklahoma-city",
      "/loading-dock-replacement-oklahoma-city",
      "/crane-foundation-installation-oklahoma-city",
      "/driveway-repair-oklahoma-city",
      "/foundation-repair-oklahoma-city",
      "/soil-stabilization-oklahoma-city",
      "/retail-restaurant-concrete-oklahoma-city",
      "/driveways-edmond",
      "/patios-norman",
      "/pool-deck-oklahoma-city",
      "/dumpster-pad-concrete-oklahoma-city",
      "/polished-concrete-oklahoma-city",
      "/epoxy-floor-coatings-oklahoma-city",
      "/tilt-wall-concrete-oklahoma-city",
      "/concrete-maintenance-oklahoma-city",
    ];
    for (const path of paths) {
      const body = getPrerenderBody(path) ?? "";
      const match = body.match(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      );
      expect(match, `${path} missing FAQ JSON-LD`).toBeTruthy();
      const parsed = JSON.parse(match![1]) as {
        "@type": string;
        mainEntity: unknown[];
      };
      expect(parsed["@type"]).toBe("FAQPage");
      expect(parsed.mainEntity.length).toBeGreaterThan(0);
    }
  });

  it("hoists FAQ JSON-LD with a stable script id and leaves other JSON-LD untagged", () => {
    const faqTag = faqJsonLdScriptTag(
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{ "@type": "Question", name: "Q", acceptedAnswer: { "@type": "Answer", text: "A" } }],
      }),
    );
    expect(faqTag).toContain(`id="${FAQ_JSON_LD_SCRIPT_ID}"`);
    expect(faqJsonLdScriptTag(JSON.stringify({ "@type": "GeneralContractor" }))).not.toContain(
      `id="${FAQ_JSON_LD_SCRIPT_ID}"`,
    );
  });
});
