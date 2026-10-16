import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import QuotePage from "@/pages/QuotePage";
import { QuoteContactProvider, useBusinessPhone } from "@/hooks/quoteContact";
import { parseEstimateOrigin, projectDetailsForStorage } from "@/lib/estimatePath";
import { KANSAS_PHONE, OKLAHOMA_PHONE } from "@/lib/phones";

const invoke = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: {
      invoke: (...args: unknown[]) => invoke(...args),
    },
  },
}));

vi.mock("react-signature-canvas", () => ({
  default: () => null,
}));

function PhoneProbe() {
  const phone = useBusinessPhone();
  return <div data-testid="business-phone">{phone ? `${phone.display}|tel:${phone.tel}` : "pending"}</div>;
}

function renderQuote(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <QuoteContactProvider>
        <Routes>
          <Route
            path="/quote/:id"
            element={
              <>
                <QuotePage />
                <PhoneProbe />
              </>
            }
          />
        </Routes>
      </QuoteContactProvider>
    </MemoryRouter>,
  );
}

function quote(details: string | null) {
  return {
    quote_number: 108,
    customer_name: "Avery Example",
    customer_email: "avery@example.com",
    customer_phone: "316-555-0199",
    customer_address: "100 Example St, Wichita, KS",
    project_details: details,
    project_type: "Commercial",
    finish_type: null,
    length_ft: 40,
    width_ft: 20,
    square_feet: 800,
    estimate_low: 12000,
    estimate_high: 18000,
    line_items: [],
    total_estimate: 18000,
    valid_until: "2099-01-01T00:00:00.000Z",
    created_at: "2026-10-15T00:00:00.000Z",
    status: "pending",
    signature_url: null,
    accepted_at: null,
  };
}

describe("QuotePage regional phone", () => {
  beforeEach(() => {
    invoke.mockReset();
    document.head.innerHTML = "";
  });

  it("shows the Kansas number from stored details when the emailed link has no from", async () => {
    const details = projectDetailsForStorage("concrete-contractors-wichita-ks", "Warehouse slab.");
    invoke.mockResolvedValue({ data: { quote: quote(details) }, error: null });
    renderQuote("/quote/token-example");
    expect(screen.getByTestId("business-phone")).toHaveTextContent("pending");
    expect(document.querySelector("a[href^='tel:']")).toBeNull();
    await waitFor(() => {
      expect(screen.getByTestId("business-phone")).toHaveTextContent(`${KANSAS_PHONE.display}|tel:${KANSAS_PHONE.tel}`);
    });
    const phoneLinks = screen.getAllByRole("link", { name: KANSAS_PHONE.display });
    expect(phoneLinks.length).toBeGreaterThan(0);
    for (const link of phoneLinks) {
      expect(link).toHaveAttribute("href", `tel:${KANSAS_PHONE.tel}`);
    }
    expect(invoke).toHaveBeenCalledTimes(1);
    expect(invoke).toHaveBeenCalledWith("get-quote", { body: { token: "token-example" } });
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, nofollow");
  });

  it("lets the stored Kansas origin override a conflicting URL origin", async () => {
    const details = projectDetailsForStorage("retaining-walls-wichita", "Grade change.");
    invoke.mockResolvedValue({ data: { quote: quote(details) }, error: null });
    renderQuote("/quote/token-example?from=bollard-installation-oklahoma-city");
    await waitFor(() => {
      expect(screen.getByTestId("business-phone")).toHaveTextContent(KANSAS_PHONE.display);
    });
    expect(screen.queryByText(OKLAHOMA_PHONE.display)).toBeNull();
  });

  it("keeps the Oklahoma number for a legacy quote and for notes that only mention Kansas", async () => {
    invoke.mockResolvedValue({
      data: { quote: quote("Pour a slab in Wichita, Kansas.") },
      error: null,
    });
    renderQuote("/quote/legacy-token");
    await waitFor(() => {
      expect(screen.getByTestId("business-phone")).toHaveTextContent(OKLAHOMA_PHONE.display);
    });
    expect(parseEstimateOrigin("not-a-page")).toBeUndefined();
  });

  it("uses Oklahoma after a missing quote finishes loading", async () => {
    invoke.mockResolvedValue({ data: null, error: { message: "not found" } });
    renderQuote("/quote/missing-token");
    expect(screen.getByTestId("business-phone")).toHaveTextContent("pending");
    await waitFor(() => {
      expect(screen.getByText("Quote Not Found")).toBeInTheDocument();
    });
    expect(screen.getByTestId("business-phone")).toHaveTextContent(OKLAHOMA_PHONE.display);
  });
});
