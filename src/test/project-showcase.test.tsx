import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectGrid from "@/components/ProjectGrid";
import OurProjects from "@/pages/OurProjects";
import PatiosOklahomaCity from "@/pages/PatiosOklahomaCity";
import RetainingWalls from "@/pages/RetainingWalls";
import CommercialConcreteOklahomaCity from "@/pages/CommercialConcreteOklahomaCity";
import CommercialConcreteRepair from "@/pages/CommercialConcreteRepair";
import { COMPLETED_COST_NOTE, PROJECTS, getProjectById, type Project } from "@/data/projects";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

const NEW_ID = "norman-patio-paver-walkway";
const GUTHRIE_ID = "guthrie-forklift-ramp";
const STAMPED_ID = "okc-stamped-patio";
const RETAINING_ID = "okc-retaining-wall";

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
      "Reinforced with wire mesh",
      "Graded slope for forklift transitions",
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
    expect(within(card).getByText("Reinforced with wire mesh")).toBeTruthy();
    expect(within(card).getByText("Graded slope for forklift transitions")).toBeTruthy();
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
    expect(text).toContain("Reinforced with wire mesh");
    expect(text).toContain("Graded slope for forklift transitions");
    expect(within(block).getByText("$3,200")).toBeTruthy();
    expect(within(block).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    const hrefs = within(block).getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/commercial-concrete-repair-oklahoma-city");
    expect(hrefs).toContain("/industrial-concrete-repair-oklahoma-city");
    expect(within(block).getAllByRole("img")).toHaveLength(3);
  });

  describe("/commercial-concrete-oklahoma-city describes the ramp as demolition and replacement", () => {
    const GENERIC_REINFORCEMENT = /Reinforced (commercial )?ramp|reinforced slab/i;
    const NEW_BUILD = /forklift ramp we built|ramp poured inside/i;

    it("in the rendered page", () => {
      const { container } = render(
        <MemoryRouter initialEntries={["/commercial-concrete-oklahoma-city"]}>
          <CommercialConcreteOklahomaCity />
        </MemoryRouter>,
      );
      const text = container.textContent ?? "";
      expect(text).toContain("Demolition and concrete replacement inside a live warehouse");
      expect(text).toContain("forklift ramp we demolished and replaced inside a live warehouse in Guthrie");
      expect(text.match(/reinforced with wire mesh/g)).toHaveLength(2);
      expect(text).toContain("graded for forklift transitions");
      expect(text).toContain("designed for repeated heavy forklift loads");
      expect(text).not.toMatch(GENERIC_REINFORCEMENT);
      expect(text).not.toMatch(NEW_BUILD);
    });

    it("in the crawler HTML, matching the visible copy", () => {
      const body = getPrerenderBody("/commercial-concrete-oklahoma-city") ?? "";
      expect(body).toContain("Demolition and concrete replacement inside a live warehouse");
      expect(body).toContain("forklift ramp we demolished and replaced inside a live warehouse in Guthrie");
      expect(body.match(/reinforced with wire mesh/g)).toHaveLength(2);
      expect(body).toContain("graded for forklift transitions");
      expect(body).toContain("designed for repeated heavy forklift loads");
      expect(body).not.toMatch(GENERIC_REINFORCEMENT);
      expect(body).not.toMatch(NEW_BUILD);
    });
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

  it("shows a visible Illustration tag on the home card", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[STAMPED_ID]} />
      </MemoryRouter>,
    );
    const card = screen.getByRole("article");
    expect(within(card).getByRole("img").getAttribute("alt")).toMatch(/AI-generated illustration/);
    expect(within(card).getByText("Illustration")).toBeTruthy();
    expect(within(card).getByText("$7,500")).toBeTruthy();
  });

  it("does not label real project photos as illustrations", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[GUTHRIE_ID, NEW_ID]} />
      </MemoryRouter>,
    );
    expect(screen.queryByText("Illustration")).toBeNull();
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

  it("uses the same completed-cost presentation for all four priced projects", () => {
    const priced = PROJECTS.filter((p) => p.completedCost).map((p) => [p.id, p.completedCost]);
    expect(priced).toEqual([
      [RETAINING_ID, "$21,000"],
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

describe("Oklahoma City poured concrete retaining wall", () => {
  const wall = () => getProjectById(RETAINING_ID)!;
  const UNSUPPORTED = /engineer|monolithic|lateral pressure|PSI|rebar|stamped by|hydrostatic/i;
  const SCOPE = [
    "120 linear ft poured concrete retaining wall",
    "5 ft wall height",
    "18-inch footing",
    "Excavation and earthwork",
    "Site grading and preparation",
    "Drainage installed per project specifications",
    "Backfilling",
    "Construction designed to address Oklahoma City clay soil conditions",
  ];

  it("updates the existing entry with the confirmed scope and cost", () => {
    expect(PROJECTS.filter((p) => /retaining wall/i.test(p.title))).toHaveLength(1);
    expect(wall()).toMatchObject({
      title: "Poured concrete retaining wall",
      city: "Oklahoma City, OK",
      ownerPath: "/retaining-walls-oklahoma-city",
      completedCost: "$21,000",
      featured: true,
    });
    expect(wall().specs).toEqual(SCOPE);
    expect(wall().timeLabel).toBeUndefined();
    expect(JSON.stringify(wall())).not.toMatch(UNSUPPORTED);
  });

  it("keeps the existing authentic photo with descriptive Oklahoma City alt text", () => {
    expect(wall().images).toHaveLength(1);
    expect(wall().images[0].src).toBe("/images/projects/poured-concrete-retaining-wall-oklahoma-city.webp");
    expect(wall().images[0].alt).toMatch(/Oklahoma City, OK/);
    expect(wall().images[0].illustration).toBeUndefined();
  });

  it("shows the scope, $21,000 cost, and note on the home card", () => {
    render(
      <MemoryRouter>
        <ProjectGrid ids={[RETAINING_ID]} />
      </MemoryRouter>,
    );
    const card = screen.getByRole("article");
    for (const item of SCOPE) expect(within(card).getByText(item)).toBeTruthy();
    expect(within(card).getByText("$21,000")).toBeTruthy();
    expect(within(card).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    expect(within(card).getByRole("link").getAttribute("href")).toBe("/retaining-walls-oklahoma-city");
  });

  it("uses the confirmed description, specs, and cost in the /our-projects featured block", () => {
    renderOurProjects();
    const block = ourProjectsBlock(wall()).parentElement!;
    const text = block.textContent ?? "";
    expect(text).toContain("FDZ Construction completed a 120-linear-foot poured concrete retaining wall in Oklahoma City");
    expect(text).toContain("The five-foot-tall retaining wall project included an 18-inch footing");
    expect(text).toContain("drainage and backfill completed according to project specifications");
    for (const item of SCOPE) expect(within(block).getByText(item)).toBeTruthy();
    expect(within(block).getByText("$21,000")).toBeTruthy();
    expect(within(block).getByText(COMPLETED_COST_NOTE)).toBeTruthy();
    expect(text).not.toMatch(UNSUPPORTED);
    const hrefs = within(block).getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/retaining-walls-oklahoma-city");
  });

  it("describes the same project on the retaining wall service page, visible and crawler, without a price", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/retaining-walls-oklahoma-city"]}>
        <RetainingWalls />
      </MemoryRouter>,
    );
    const visible = container.textContent ?? "";
    const crawler = getPrerenderBody("/retaining-walls-oklahoma-city") ?? "";
    const sentence =
      "A 120-linear-foot, five-foot-tall poured concrete retaining wall we completed in Oklahoma City — 18-inch footing, excavation and earthwork, site preparation, drainage installation, and backfilling, with the construction scope addressing local clay soil conditions.";
    expect(visible).toContain(sentence);
    expect(crawler).toContain(sentence);
    expect(visible).not.toContain("$21,000");
    expect(crawler).not.toContain("$21,000");
    expect(container.querySelector('a[href="/our-projects"]')).not.toBeNull();
    expect(crawler).toContain('href="/our-projects"');
    expect(visible).not.toMatch(/lateral pressure of OKC/);
    expect(crawler).not.toMatch(/engineered for the lateral pressure/);
  });
});

describe("/our-projects crawler HTML matches the visible project details", () => {
  const body = () => getPrerenderBody("/our-projects") ?? "";

  it("lists the Guthrie ramp with its confirmed scope and cost", () => {
    expect(body()).toContain("Warehouse forklift ramp — concrete demolition &amp; replacement — Guthrie, OK");
    expect(body()).toContain("line pump");
    expect(body()).toContain("reinforced with wire mesh, graded for forklift transitions");
    expect(body()).toContain("Completed Project Cost: $3,200");
  });

  it("lists the retaining wall with its confirmed scope and cost", () => {
    expect(body()).toContain("Poured concrete retaining wall — Oklahoma City, OK");
    expect(body()).toContain("120 linear ft, 5 ft tall poured concrete retaining wall with an 18-inch footing");
    expect(body()).toContain("Completed Project Cost: $21,000");
    expect(body()).not.toMatch(/Monolithic wall engineered/);
  });

  it("lists the stamped patio in Oklahoma City, not Norman", () => {
    expect(body()).toContain("Ashlar slate stamped concrete patio — Oklahoma City, OK");
    expect(body()).toContain("30' × 14' (420 sq ft)");
    expect(body()).toContain("Completed Project Cost: $7,500");
    expect(body()).not.toMatch(/Stamped patio — Norman/);
    expect(body()).toContain("Completed Project Cost: $8,200");
  });
});
