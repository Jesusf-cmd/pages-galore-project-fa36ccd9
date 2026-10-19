import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ConcreteContractorsWichita from "@/pages/ConcreteContractorsWichita";
import EstimateForm from "@/components/EstimateForm";
import FinalCTA from "@/components/FinalCTA";
import ProjectSpecs from "@/components/ProjectSpecs";
import {
  estimatePathForLocation,
  hasInstantEstimateRates,
  resolveEstimateOriginFrom,
} from "@/lib/estimatePath";
import { KANSAS_PHONE, WICHITA_HOME_PATH } from "@/lib/phones";
import { WICHITA_BUDGET_LABEL, type Project } from "@/data/projects";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

const invoke = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: {
      invoke: (...args: unknown[]) => invoke(...args),
    },
  },
}));

beforeAll(() => {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
});

const sampleProject: Project = {
  id: "test-wall",
  title: "Test retaining wall",
  city: "Oklahoma City, OK",
  service: "retaining walls",
  ownerPath: "/retaining-walls-oklahoma-city",
  serviceLinkLabel: "Explore retaining walls",
  details: "Poured wall example",
  images: [],
  sqft: null,
  year: null,
  featured: false,
  completedCost: "$21,000",
};

const COMMERCIAL_HUB =
  `${WICHITA_HOME_PATH}?from=commercial-concrete-wichita#estimate` as const;
const COMMERCIAL_ESTIMATE =
  `${WICHITA_HOME_PATH}?from=commercial-concrete-wichita#estimate` as const;

function renderHub(entry: string = WICHITA_HOME_PATH) {
  return render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route path={WICHITA_HOME_PATH} element={<ConcreteContractorsWichita />} />
      </Routes>
    </MemoryRouter>,
  );
}

async function fillAndSubmitKansasInquiry() {
  const selects = screen.getAllByRole("combobox");
  for (const sel of selects) {
    const el = sel as HTMLSelectElement;
    const options = Array.from(el.options).filter((o) => o.value);
    if (options.length > 0 && !el.value) {
      fireEvent.change(sel, { target: { value: options[0].value } });
    }
  }
  fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "Origin QA" } });
  fireEvent.change(screen.getByPlaceholderText("Your phone number"), {
    target: { value: "3165550199" },
  });
  fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
    target: { value: "origin-qa@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Job address in Wichita|Facility address|Wall address|Property address/i), {
    target: { value: "200 N Main St, Wichita, KS" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Wichita-area address|Wichita facility|Wichita address|areas to stamp/i), {
    target: { value: "Commercial parking lot scope for origin QA." },
  });
  fireEvent.change(screen.getByPlaceholderText(/parking area|slab size|wall length/i), {
    target: { value: "12,000 sq ft" },
  });
  fireEvent.click(screen.getByRole("button", { name: /request wichita estimate/i }));
  await waitFor(() => expect(invoke).toHaveBeenCalled());
  return invoke.mock.calls[0][1]?.body as Record<string, unknown>;
}

describe("Wichita homepage redesign", () => {
  beforeEach(() => {
    invoke.mockReset();
    invoke.mockResolvedValue({
      data: { success: true, inquiryId: "22222222-2222-4222-8222-222222222222", ok: true },
      error: null,
    });
  });
  it("keeps Kansas origin without a from query on direct hub visits", () => {
    expect(resolveEstimateOriginFrom(null, "/concrete-contractors-wichita-ks")).toBe(
      "concrete-contractors-wichita-ks",
    );
    expect(resolveEstimateOriginFrom("commercial-concrete-wichita", "/")).toBe(
      "commercial-concrete-wichita",
    );
    expect(hasInstantEstimateRates("concrete-contractors-wichita-ks")).toBe(false);
    expect(hasInstantEstimateRates(null)).toBe(true);
  });

  it("renders hub hero, service destinations, and Kansas estimate panel", () => {
    renderHub();
    expect(
      screen.getByRole("heading", { level: 1, name: /Concrete Contractors in Wichita, Kansas/i }),
    ).toBeInTheDocument();
    const ksPhones = screen.getAllByRole("link", { name: new RegExp(KANSAS_PHONE.display) });
    expect(ksPhones.length).toBeGreaterThan(0);
    expect(ksPhones.every((el) => el.getAttribute("href") === `tel:${KANSAS_PHONE.tel}`)).toBe(true);
    expect(document.querySelector('a[href="/commercial-concrete-wichita"]')).toBeTruthy();
    expect(document.querySelector('a[href="/industrial-concrete-wichita"]')).toBeTruthy();
    expect(document.querySelector('a[href="/retaining-walls-wichita"]')).toBeTruthy();
    expect(document.querySelector('a[href="/stamped-concrete-wichita"]')).toBeTruthy();
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
    expect(screen.queryByText("Instant Estimate")).not.toBeInTheDocument();
    expect(
      screen.getAllByText(/Send your project details for a written estimate after plan review or a site visit/i)
        .length,
    ).toBeGreaterThan(0);
    expect(screen.queryByText(/calculated from Oklahoma rates/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/owner approval/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/Example of FDZ work completed in/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/AI illustration/i)).toBeInTheDocument();
  });

  it("derives estimate origin from the Wichita route when from is absent", () => {
    expect(resolveEstimateOriginFrom(null, "/concrete-contractors-wichita-ks")).toBe(
      "concrete-contractors-wichita-ks",
    );
    render(
      <MemoryRouter initialEntries={["/concrete-contractors-wichita-ks"]}>
        <EstimateForm fromPath="/concrete-contractors-wichita-ks" />
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText("Job address in Wichita, KS")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your phone number")).toBeInTheDocument();
    expect(screen.queryByPlaceholderText("316-365-8342")).not.toBeInTheDocument();
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
  });

  it("uses request-only EstimateForm for legacy Kansas origins on the OKC homepage query", () => {
    render(
      <MemoryRouter initialEntries={["/?from=industrial-concrete-wichita#estimate"]}>
        <EstimateForm />
      </MemoryRouter>,
    );
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
    expect(screen.queryByText("Instant Estimate")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Facility address in Wichita, KS")).toBeInTheDocument();
  });

  it("keeps commercial service origin when the hub is opened with from=", () => {
    render(
      <MemoryRouter
        initialEntries={[
          "/concrete-contractors-wichita-ks?from=commercial-concrete-wichita#estimate",
        ]}
      >
        <EstimateForm fromPath="/concrete-contractors-wichita-ks" />
      </MemoryRouter>,
    );
    expect(screen.getByPlaceholderText("Job address in Wichita, KS")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        /Wichita-area address, approximate area, parking or paving scope/i,
      ),
    ).toBeInTheDocument();
  });

  it("separates Oklahoma completed cost from Wichita budget CTA on Kansas cards", () => {
    render(
      <MemoryRouter>
        <ProjectSpecs project={sampleProject} kansasPresentation estimateHref="#estimate" />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Actual Oklahoma Project Cost/i)).toBeInTheDocument();
    expect(screen.getByText("$21,000")).toBeInTheDocument();
    expect(screen.getByText(WICHITA_BUDGET_LABEL)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Request a Wichita estimate/i })).toHaveAttribute(
      "href",
      "#estimate",
    );
    expect(screen.queryByText(/pricing pending/i)).not.toBeInTheDocument();
  });

  it("keeps Oklahoma ProjectSpecs labels unchanged without kansasPresentation", () => {
    render(
      <MemoryRouter>
        <ProjectSpecs project={sampleProject} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Completed Project Cost/i)).toBeInTheDocument();
    expect(screen.queryByText(WICHITA_BUDGET_LABEL)).not.toBeInTheDocument();
  });

  it("preserves a hub service from= on FinalCTA and project-card inquiry links", () => {
    renderHub(COMMERCIAL_HUB);
    const expected = estimatePathForLocation(
      WICHITA_HOME_PATH,
      "?from=commercial-concrete-wichita",
    );
    expect(expected).toBe(COMMERCIAL_ESTIMATE);
    const finalCta = document.querySelector("a.btn-white");
    expect(finalCta).toHaveAttribute("href", COMMERCIAL_ESTIMATE);
    expect(finalCta).toHaveTextContent("Request a Wichita Estimate →");
    const inquiryFallbacks = screen.getAllByRole("link", {
      name: /^Request a Wichita estimate$/i,
    });
    expect(inquiryFallbacks.length).toBeGreaterThan(0);
    expect(
      inquiryFallbacks.every((link) => link.getAttribute("href") === COMMERCIAL_ESTIMATE),
    ).toBe(true);
    expect(
      screen.getByRole("link", { name: /Explore industrial concrete in Wichita/i }),
    ).toHaveAttribute("href", "/industrial-concrete-wichita");
  });

  it("keeps commercial origin after clicking FinalCTA and on mocked inquiry submit", async () => {
    renderHub(COMMERCIAL_HUB);
    fireEvent.click(document.querySelector("a.btn-white")!);
    expect(screen.getByText("Wichita commercial concrete")).toBeInTheDocument();
    const body = await fillAndSubmitKansasInquiry();
    expect(invoke.mock.calls[0][0]).toBe("submit-estimate-inquiry");
    expect(body.from).toBe("commercial-concrete-wichita");
    expect(String(body.details)).toContain(
      "Requested from /commercial-concrete-wichita (commercial concrete, Wichita KS).",
    );
    expect(body).not.toHaveProperty("estimateLow");
    expect(body).not.toHaveProperty("sqft");
  });

  it("keeps commercial origin after clicking a project-card inquiry fallback and submit", async () => {
    renderHub(COMMERCIAL_HUB);
    const drivewayCard = screen.getByRole("heading", {
      name: /New driveway & approach/i,
    }).closest("article");
    expect(drivewayCard).toBeTruthy();
    fireEvent.click(
      within(drivewayCard as HTMLElement).getByRole("link", {
        name: /^Request a Wichita estimate$/i,
      }),
    );
    expect(screen.getByText("Wichita commercial concrete")).toBeInTheDocument();
    const body = await fillAndSubmitKansasInquiry();
    expect(invoke.mock.calls[0][0]).toBe("submit-estimate-inquiry");
    expect(body.from).toBe("commercial-concrete-wichita");
    expect(String(body.details)).toContain(
      "Requested from /commercial-concrete-wichita (commercial concrete, Wichita KS).",
    );
  });

  it("defaults FinalCTA to the hub origin on a direct hub visit", () => {
    renderHub(WICHITA_HOME_PATH);
    expect(document.querySelector("a.btn-white")).toHaveAttribute(
      "href",
      `${WICHITA_HOME_PATH}?from=concrete-contractors-wichita-ks#estimate`,
    );
  });

  it("keeps Oklahoma FinalCTA on the OKC homepage estimate destination", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <FinalCTA />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: /Get Free Estimate/i })).toHaveAttribute(
      "href",
      "/#estimate",
    );
  });

  it("updates hub prerender HTML with service links, FAQs, and Kansas estimate form", () => {
    const hubBody = getPrerenderBody("/concrete-contractors-wichita-ks") ?? "";
    expect(hubBody).toContain('href="/commercial-concrete-wichita"');
    expect(hubBody).toContain('href="/industrial-concrete-wichita"');
    expect(hubBody).toContain('href="/retaining-walls-wichita"');
    expect(hubBody).toContain('href="/stamped-concrete-wichita"');
    expect(hubBody).toContain("FDZ reviews the drawings, access, site conditions, and schedule requirements");
    expect(hubBody).toContain("Examples of FDZ concrete work");
    expect(hubBody).toContain(
      "Send your project details for a written estimate after plan review or a site visit",
    );
    expect(hubBody).toContain("AI illustration");
    expect(hubBody).not.toContain("owner approval");
    expect(hubBody).toContain(`tel:${KANSAS_PHONE.tel}`);
    expect(hubBody).toContain('data-from="concrete-contractors-wichita-ks"');
    expect(hubBody).toContain("Request a Wichita Estimate");
    expect(hubBody).not.toContain("pricing pending");
  });
});
