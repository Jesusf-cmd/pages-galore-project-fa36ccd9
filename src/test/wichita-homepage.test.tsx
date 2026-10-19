import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ConcreteContractorsWichita from "@/pages/ConcreteContractorsWichita";
import EstimateForm from "@/components/EstimateForm";
import ProjectSpecs from "@/components/ProjectSpecs";
import {
  hasInstantEstimateRates,
  resolveEstimateOriginFrom,
} from "@/lib/estimatePath";
import { KANSAS_PHONE } from "@/lib/phones";
import { WICHITA_BUDGET_LABEL, type Project } from "@/data/projects";
import { getPrerenderBody } from "../../scripts/prerender-bodies";

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: { invoke: vi.fn() },
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

function renderHub() {
  return render(
    <MemoryRouter initialEntries={["/concrete-contractors-wichita-ks"]}>
      <Routes>
        <Route path="/concrete-contractors-wichita-ks" element={<ConcreteContractorsWichita />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Wichita homepage redesign", () => {
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
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
  });

  it("uses request-only EstimateForm for Kansas origins on the OKC homepage query", () => {
    render(
      <MemoryRouter initialEntries={["/?from=industrial-concrete-wichita#estimate"]}>
        <EstimateForm />
      </MemoryRouter>,
    );
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
    expect(screen.queryByText("Instant Estimate")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Facility address in Wichita, KS")).toBeInTheDocument();
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
