import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectGrid from "@/components/ProjectGrid";
import OurProjects from "@/pages/OurProjects";
import PatiosOklahomaCity from "@/pages/PatiosOklahomaCity";
import CommercialConcreteOklahomaCity from "@/pages/CommercialConcreteOklahomaCity";
import CommercialConcreteRepair from "@/pages/CommercialConcreteRepair";
import { COMPLETED_COST_NOTE, PROJECTS, getProjectById, type Project } from "@/data/projects";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

const NEW_ID = "norman-patio-paver-walkway";
const GUTHRIE_ID = "guthrie-forklift-ramp";
const STAMPED_ID = "okc-stamped-patio";

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

function renderOurProjects() {
  return render(
    <MemoryRouter>
      <OurProjects />
    </MemoryRouter>,
  );
}

/** The /our-projects card or featured block that carries a project's title. */
function ourProjectsBlock(project: Project): HTMLElement {
  const title = screen.getByText(project.title);
  const block = title.closest<HTMLElement>(".bg-stone");
  if (!block) throw new Error(`no card for ${project.id}`);
  return block;
}

describe("Norman patio & paver walkway project", () => {
  it("replaces the Yukon commercial parking lot entry", () => {
    expect(getProjectById("yukon-parking-lot")).toBeUndefined();
    expect(PROJECTS.some((p) => /parking lot/i.test(p.title))).toBe(false);
    expect(PROJECTS.findIndex((p) => p.id === NEW_ID)).toBe(
      PROJECTS.findIndex((p) => p.id === STAMPED_ID) + 1,
    );
  });

  it("leads with the paver walkway photo and uses all three owner photos", () => {
    const project = getProjectById(NEW_ID)!;
    expect(project.images).toHaveLength(3);
    expect(project.images[0].src).toBe(
      "/images/projects/concrete-paver-walkway-river-rock-norman-oklahoma.webp",
    );
  });

  it("renders specs, the completed project cost, and the contract-price note on the project card", () => {
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
    expect(within(card).getByText("Completed Project Cost:")).toBeTruthy();
    expect(within(card).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    expect(card.textContent).not.toMatch(/example (project )?budget|not a quote/i);
    expect(within(card).getByRole("img").getAttribute("src")).toContain("paver-walkway-river-rock");
    expect(within(card).getByRole("link").getAttribute("href")).toBe("/patios-oklahoma-city");
  });

  it("shows the Norman project on /our-projects with all three photos and no parking lot card", () => {
    renderOurProjects();
    expect(screen.queryByText(/commercial parking lot/i)).toBeNull();
    const card = ourProjectsBlock(getProjectById(NEW_ID)!);
    expect(within(card).getByText("$8,200")).toBeTruthy();
    expect(within(card).getByText("Completed Project Cost:")).toBeTruthy();
    expect(within(card).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    const photos = within(card)
      .getAllByRole("img")
      .filter((img) => img.getAttribute("src")?.includes("norman-oklahoma"));
    expect(photos).toHaveLength(3);
  });

  describe("commercial pages make no unverified Yukon parking lot project claims", () => {
    const YUKON_LOT_CLAIM = /Yukon[^.]{0,80}parking lot|parking lot[^.]{0,40}Yukon|4,200 sq ft|retail strip/i;
    const VERIFIED_PROJECTS = ["Guthrie", "Star Spencer"];

    const COMMERCIAL_PATHS = [
      "/commercial-concrete-oklahoma-city",
      "/commercial-concrete-repair-oklahoma-city",
    ] as const;

    it.each(COMMERCIAL_PATHS)("crawler HTML for %s", (path) => {
      const body = getPrerenderBody(path) ?? "";
      expect(body).not.toMatch(YUKON_LOT_CLAIM);
      expect(body).toMatch(/href=["']\/parking-lots-oklahoma-city["']/);
      expect(body).toMatch(/href=["']\/our-projects["']/);
      for (const name of VERIFIED_PROJECTS) expect(body).toContain(name);
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
      const text = container.textContent ?? "";
      expect(text).not.toMatch(YUKON_LOT_CLAIM);
      expect(container.querySelector('a[href="/parking-lots-oklahoma-city"]')).not.toBeNull();
      expect(container.querySelector('a[href="/our-projects"]')).not.toBeNull();
      for (const name of VERIFIED_PROJECTS) expect(text).toContain(name);
      unmount();
    });
  });

  it("does not add photos to other /our-projects More Projects cards", () => {
    renderOurProjects();
    const others = PROJECTS.filter((p) => !p.featured && p.images.length < 3).flatMap((p) => p.images);
    for (const img of others) {
      expect(document.querySelector(`img[src="${img.src}"]`)).toBeNull();
    }
  });
});

describe("Guthrie warehouse forklift ramp", () => {
  const guthrie = () => getProjectById(GUTHRIE_ID)!;

  it("carries the owner-confirmed scope, cost, and related service", () => {
    expect(guthrie()).toMatchObject({
      title: "Warehouse forklift ramp — concrete demolition & replacement",
      city: "Guthrie, OK",
      ownerPath: "/commercial-concrete-repair-oklahoma-city",
      completedCost: "$3,200",
      featured: true,
    });
    expect(guthrie().specs).toEqual([
      "Demolition and removal of existing concrete",
      "Concrete ramp replacement and pour-back",
      "Concrete placed with a line pump",
      "Power-trowel finish",
      "Work performed inside an active warehouse",
    ]);
  });

  it("keeps the three existing authentic photos in their original order", () => {
    expect(guthrie().images.map((i) => i.src)).toEqual([
      "/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.webp",
      "/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.webp",
      "/images/projects/forklift-ramp-finished-guthrie-oklahoma.webp",
    ]);
    for (const img of guthrie().images) expect(img.alt).toMatch(/Guthrie, OK/);
  });

  it("shows the cost, note, and commercial repair link on the home card", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[GUTHRIE_ID]} />
      </MemoryRouter>,
    );
    const card = screen.getByRole("article");
    expect(within(card).getByText("$3,200")).toBeTruthy();
    expect(within(card).getByText("Completed Project Cost:")).toBeTruthy();
    expect(within(card).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    expect(within(card).getByText("Concrete placed with a line pump")).toBeTruthy();
    expect(within(card).getByRole("link").getAttribute("href")).toBe("/commercial-concrete-repair-oklahoma-city");
  });

  it("describes demolition, pour-back, line pump, and power-trowel finish on /our-projects", () => {
    renderOurProjects();
    const block = ourProjectsBlock(guthrie()).parentElement!;
    const text = block.textContent ?? "";
    expect(text).toContain("removing existing concrete");
    expect(text).toContain("placing new concrete with a line pump");
    expect(text).toContain("power-trowel finish");
    expect(text).toContain("Concrete ramp replacement and pour-back");
    expect(text).not.toMatch(/reinforced slab|slope grading|heavy equipment loads/i);
    expect(within(block).getByText("$3,200")).toBeTruthy();
    expect(within(block).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    const hrefs = within(block).getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/commercial-concrete-repair-oklahoma-city");
    expect(hrefs).toContain("/industrial-concrete-repair-oklahoma-city");
    expect(within(block).getAllByRole("img")).toHaveLength(3);
  });
});

describe("Oklahoma City Ashlar slate stamped patio", () => {
  const stamped = () => getProjectById(STAMPED_ID)!;

  it("is the same project entry, now located in Oklahoma City with confirmed specs", () => {
    expect(getProjectById("norman-stamped-patio")).toBeUndefined();
    expect(PROJECTS.filter((p) => /stamped/i.test(p.title))).toHaveLength(1);
    expect(stamped()).toMatchObject({
      title: "Ashlar slate stamped concrete patio",
      city: "Oklahoma City, OK",
      ownerPath: "/patios-oklahoma-city",
      sqft: 420,
      sizeLabel: "420 sq ft",
      completedCost: "$7,500",
      featured: false,
    });
    expect(stamped().timeLabel).toBeUndefined();
    expect(stamped().specs).toContain(`30' × 14' (420 sq ft)`);
    expect(stamped().specs).toContain("Concrete placed with a line pump");
    expect(JSON.stringify(stamped())).not.toMatch(/norman/i);
  });

  it("uses a single image that is labeled as an AI illustration, not a project photo", () => {
    expect(stamped().images).toEqual([
      {
        src: "/images/projects/ashlar-slate-stamped-concrete-patio-ai-illustration-oklahoma-city.webp",
        alt: expect.stringMatching(/^AI-generated illustration .*not a photo of the completed Oklahoma City project$/),
        illustration: true,
      },
    ]);
    expect(PROJECTS.filter((p) => p.id !== STAMPED_ID).flatMap((p) => p.images).some((i) => i.illustration)).toBe(false);
  });

  it("shows the visible AI illustration label on the home card", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[STAMPED_ID]} />
      </MemoryRouter>,
    );
    const card = screen.getByRole("article");
    expect(within(card).getByRole("img").getAttribute("alt")).toMatch(/AI-generated illustration/);
    expect(within(card).getByText("AI illustration — not a project photo")).toBeTruthy();
    expect(within(card).getByText("$7,500")).toBeTruthy();
  });

  it("does not label real project photos as illustrations", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[GUTHRIE_ID, NEW_ID]} />
      </MemoryRouter>,
    );
    expect(screen.queryByText("AI illustration — not a project photo")).toBeNull();
  });

  it("shows Oklahoma City, 420 sq ft, and $7,500 on the /our-projects card", () => {
    renderOurProjects();
    const card = ourProjectsBlock(stamped());
    expect(within(card).getByText("Oklahoma City, OK")).toBeTruthy();
    expect(within(card).getByText(`30' × 14' (420 sq ft)`)).toBeTruthy();
    expect(within(card).getByText("420 sq ft")).toBeTruthy();
    expect(within(card).getByText("$7,500")).toBeTruthy();
    expect(within(card).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    expect(card.textContent).not.toMatch(/norman/i);
  });

  it("keeps the Norman paver walkway separate and unchanged at $8,200", () => {
    renderOurProjects();
    expect(within(ourProjectsBlock(getProjectById(NEW_ID)!)).getByText("Norman, OK")).toBeTruthy();
    expect(getProjectById(NEW_ID)!.completedCost).toBe("$8,200");
  });

  it("uses the same completed-cost presentation for all three priced projects", () => {
    const priced = PROJECTS.filter((p) => p.completedCost).map((p) => [p.id, p.completedCost]);
    expect(priced).toEqual([
      [GUTHRIE_ID, "$3,200"],
      [STAMPED_ID, "$7,500"],
      [NEW_ID, "$8,200"],
    ]);
  });

  it("no longer calls it a Norman patio on the patios page", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/patios-oklahoma-city"]}>
        <PatiosOklahomaCity />
      </MemoryRouter>,
    );
    const text = container.textContent ?? "";
    expect(text).toContain("Oklahoma City stamped patio (Ashlar Slate)");
    expect(text).not.toMatch(/Norman (stamped|Ashlar)/i);
  });
});

describe("/our-projects crawler HTML matches the visible project details", () => {
  const body = () => getPrerenderBody("/our-projects") ?? "";

  it("lists the Guthrie ramp with its confirmed scope and cost", () => {
    expect(body()).toContain("Warehouse forklift ramp — concrete demolition &amp; replacement — Guthrie, OK");
    expect(body()).toContain("line pump");
    expect(body()).toContain("Completed Project Cost: $3,200");
  });

  it("lists the stamped patio in Oklahoma City, not Norman", () => {
    expect(body()).toContain("Ashlar slate stamped concrete patio — Oklahoma City, OK");
    expect(body()).toContain("30' × 14' (420 sq ft)");
    expect(body()).toContain("Completed Project Cost: $7,500");
    expect(body()).not.toMatch(/Stamped patio — Norman/);
    expect(body()).toContain("Completed Project Cost: $8,200");
  });
});
