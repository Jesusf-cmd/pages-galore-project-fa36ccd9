import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectGrid from "@/components/ProjectGrid";
import OurProjects from "@/pages/OurProjects";
import CommercialConcreteOklahomaCity from "@/pages/CommercialConcreteOklahomaCity";
import CommercialConcreteRepair from "@/pages/CommercialConcreteRepair";
import { EXAMPLE_BUDGET_DISCLAIMER, PROJECTS, getProjectById } from "@/data/projects";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

const NEW_ID = "norman-patio-paver-walkway";

describe("Norman patio & paver walkway project", () => {
  it("replaces the Yukon commercial parking lot entry", () => {
    expect(getProjectById("yukon-parking-lot")).toBeUndefined();
    expect(PROJECTS.some((p) => /parking lot/i.test(p.title))).toBe(false);
    expect(PROJECTS.findIndex((p) => p.id === NEW_ID)).toBe(
      PROJECTS.findIndex((p) => p.id === "norman-stamped-patio") + 1,
    );
  });

  it("leads with the paver walkway photo and uses all three owner photos", () => {
    const project = getProjectById(NEW_ID)!;
    expect(project.images).toHaveLength(3);
    expect(project.images[0].src).toBe(
      "/images/projects/concrete-paver-walkway-river-rock-norman-oklahoma.webp",
    );
  });

  it("keeps the Stamped Patio — Norman entry unchanged", () => {
    expect(getProjectById("norman-stamped-patio")).toMatchObject({
      title: "Stamped patio",
      city: "Norman, OK",
      details: "Ashlar slate pattern",
      ownerPath: "/patios-oklahoma-city",
      sizeLabel: "580 sq ft",
      timeLabel: "3 days",
    });
  });

  it("renders specs, the example budget, and the disclaimer on the project card", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[NEW_ID]} />
      </MemoryRouter>,
    );
    const card = screen.getByRole("article");
    expect(within(card).getByRole("heading", { name: /concrete patio & decorative paver walkway/i })).toBeTruthy();
    expect(within(card).getByText(`12' × 12' concrete slab, 8" thick`)).toBeTruthy();
    expect(within(card).getByText(`Six 36" × 24" concrete pavers`)).toBeTruthy();
    expect(within(card).getByText("Broom finish with picture-frame borders")).toBeTruthy();
    expect(within(card).getByText("Decorative river rock installation")).toBeTruthy();
    expect(within(card).getByText("$8,200")).toBeTruthy();
    expect(within(card).getByText(EXAMPLE_BUDGET_DISCLAIMER)).toBeTruthy();
    expect(within(card).getByRole("img").getAttribute("src")).toContain("paver-walkway-river-rock");
    expect(within(card).getByRole("link").getAttribute("href")).toBe("/patios-oklahoma-city");
  });

  it("shows the new project on /our-projects with all three photos and no parking lot card", () => {
    render(
      <MemoryRouter>
        <OurProjects />
      </MemoryRouter>,
    );
    expect(screen.queryByText(/commercial parking lot/i)).toBeNull();
    expect(screen.getByText("Concrete patio & decorative paver walkway")).toBeTruthy();
    expect(screen.getByText("Stamped patio")).toBeTruthy();
    expect(screen.getByText("$8,200")).toBeTruthy();
    expect(screen.getByText(EXAMPLE_BUDGET_DISCLAIMER)).toBeTruthy();
    const photos = screen
      .getAllByRole("img")
      .filter((img) => img.getAttribute("src")?.includes("norman-oklahoma"));
    expect(photos).toHaveLength(3);
  });

  describe("commercial pages no longer send visitors to /our-projects for the Yukon parking lot", () => {
    const sentenceWith = (text: string, needle: string) =>
      text.split(/(?<=\.)\s+/).filter((s) => s.includes(needle));
    const SHOWN_ON_OUR_PROJECTS = /Guthrie|Star Spencer|Rosedale/;

    /** A pointer next to a Yukon mention must name what /our-projects actually shows. */
    const expectNoYukonPointer = (block: string, needle: string) => {
      for (const sentence of sentenceWith(block, needle)) {
        expect(sentence).not.toMatch(/yukon/i);
        if (/yukon/i.test(block)) expect(sentence).toMatch(SHOWN_ON_OUR_PROJECTS);
      }
    };

    const COMMERCIAL_PATHS = [
      "/commercial-concrete-oklahoma-city",
      "/commercial-concrete-repair-oklahoma-city",
    ] as const;

    it.each(COMMERCIAL_PATHS)("crawler HTML for %s", (path) => {
      const body = getPrerenderBody(path) ?? "";
      expect(body).toContain("Yukon");
      const blocks = body.match(/<(p|li)>[\s\S]*?<\/\1>/g) ?? [];
      const pointerBlocks = blocks.filter((b) => b.includes('href="/our-projects"'));
      expect(pointerBlocks.length).toBeGreaterThan(0);
      for (const block of pointerBlocks) expectNoYukonPointer(block, 'href="/our-projects"');
    });

    beforeAll(() => {
      vi.stubGlobal(
        "IntersectionObserver",
        class {
          observe() {}
          unobserve() {}
          disconnect() {}
          takeRecords() {
            return [];
          }
        },
      );
    });
    afterAll(() => {
      vi.unstubAllGlobals();
    });

    it.each([
      ["/commercial-concrete-oklahoma-city", CommercialConcreteOklahomaCity],
      ["/commercial-concrete-repair-oklahoma-city", CommercialConcreteRepair],
    ] as const)("rendered React page for %s", (path, Page) => {
      const { container, unmount } = render(
        <MemoryRouter initialEntries={[path]}>
          <Page />
        </MemoryRouter>,
      );
      expect(container.textContent).toMatch(/Yukon parking lot|Yukon — commercial parking lot/);
      const links = [...container.querySelectorAll('a[href="/our-projects"]')];
      expect(links.length).toBeGreaterThan(0);
      for (const link of links) {
        expectNoYukonPointer(link.closest("p, li")?.textContent ?? "", link.textContent ?? "");
      }
      unmount();
    });
  });

  it("does not add photos to other /our-projects More Projects cards", () => {
    render(
      <MemoryRouter>
        <OurProjects />
      </MemoryRouter>,
    );
    const others = PROJECTS.filter((p) => !p.featured && p.id !== NEW_ID).flatMap((p) => p.images);
    for (const img of others) {
      expect(document.querySelector(`img[src="${img.src}"]`)).toBeNull();
    }
  });
});
