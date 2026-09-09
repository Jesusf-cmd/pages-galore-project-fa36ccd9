import { describe, expect, it } from "vitest";
import { BLOG_POSTS } from "@/content/blog";
import { getPrerenderBody } from "../../scripts/prerender-bodies";
import { routes } from "../../scripts/prerender-routes";

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
});
