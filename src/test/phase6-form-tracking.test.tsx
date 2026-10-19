import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EstimateForm from "@/components/EstimateForm";
import { trackPhoneClick } from "@/lib/dataLayer";

const invoke = vi.fn();

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    functions: {
      invoke: (...args: unknown[]) => invoke(...args),
    },
  },
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe("Phase 6 form + tracking", () => {
  beforeEach(() => {
    invoke.mockReset();
    invoke.mockResolvedValue({
      data: { success: true, inquiryId: "11111111-1111-4111-8111-111111111111", ok: true },
      error: null,
    });
    window.dataLayer = [];
  });

  async function submitOn(path: string) {
    render(
      <MemoryRouter initialEntries={[path]}>
        <EstimateForm />
      </MemoryRouter>,
    );

    // Step 1 → 2
    fireEvent.click(screen.getByRole("button", { name: /next: enter dimensions/i }));
    // Step 2 → 3
    fireEvent.click(screen.getByRole("button", { name: /next: your info/i }));

    // Fill contact step
    fireEvent.change(screen.getByPlaceholderText("Full name"), {
      target: { value: "Phase6 QA" },
    });
    fireEvent.change(screen.getByPlaceholderText("(405) 000-0000"), {
      target: { value: "4055550100" },
    });
    fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
      target: { value: "phase6-qa@example.com" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(/123 Main St|Oklahoma City|street|address/i),
      { target: { value: "123 Test St Oklahoma City OK" } },
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Tell us about your project|project scope|timeline/i),
      { target: { value: "Phase 6 QA mock — do not process." } },
    );

    // Optional lead fields (selects may already have defaults)
    const selects = screen.getAllByRole("combobox");
    for (const sel of selects) {
      const el = sel as HTMLSelectElement;
      const options = Array.from(el.options).filter((o) => o.value);
      if (options.length > 0 && !el.value) {
        fireEvent.change(sel, { target: { value: options[0].value } });
      }
    }
    const approx = screen.queryByPlaceholderText(/20×24/i);
    if (approx) fireEvent.change(approx, { target: { value: "20×24 ft" } });

    fireEvent.click(screen.getByRole("button", { name: /get your quote/i }));

    await waitFor(() => expect(invoke).toHaveBeenCalled());
    const args = invoke.mock.calls[0];
    expect(args[0]).toBe("submit-quote");
    return args[1]?.body as Record<string, unknown>;
  }

  it.each(["/", "/driveways-oklahoma-city", "/sidewalks-oklahoma-city"])(
    "submits mocked estimate on %s with new fields + from and fires generate_lead",
    async (path) => {
      const body = await submitOn(path);
      expect(body.name).toBe("Phase6 QA");
      expect(body.email).toBe("phase6-qa@example.com");
      expect(body.phone).toBe("4055550100");
      expect(Object.prototype.hasOwnProperty.call(body, "from")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(body, "propertyType")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(body, "customerRole")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(body, "ownerProjectType")).toBe(true);
      expect(Object.prototype.hasOwnProperty.call(body, "approxSize")).toBe(true);
      await waitFor(() => {
        expect(window.dataLayer?.some((e) => e.event === "generate_lead")).toBe(true);
      });
    },
  );

  it("routes Wichita hub requests to submit-estimate-inquiry without invented prices or dims", async () => {
    render(
      <MemoryRouter initialEntries={["/?from=concrete-contractors-wichita-ks#estimate"]}>
        <EstimateForm />
      </MemoryRouter>,
    );
    expect(screen.getAllByText(/Wichita concrete/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Request Estimate")).toBeInTheDocument();
    expect(screen.queryByText("Instant Estimate")).not.toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "Hub QA" } });
    fireEvent.change(screen.getByPlaceholderText("Your phone number"), { target: { value: "3165550100" } });
    fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
      target: { value: "hub-qa@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Job address in Wichita, KS"), {
      target: { value: "100 Douglas Ave, Wichita, KS" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Wichita-area address/i), {
      target: { value: "Parking lot and dock apron." },
    });
    fireEvent.change(screen.getByPlaceholderText(/parking area|slab size|wall length/i), {
      target: { value: "about 8,000 sq ft parking" },
    });
    fireEvent.click(screen.getByRole("button", { name: /request wichita estimate/i }));
    await waitFor(() => expect(invoke).toHaveBeenCalled());
    const body = invoke.mock.calls[0][1]?.body as Record<string, unknown>;
    expect(invoke.mock.calls[0][0]).toBe("submit-estimate-inquiry");
    expect(body.from).toBe("concrete-contractors-wichita-ks");
    expect(body.projectType).toBe("commercial");
    expect(body.approxSize).toBe("about 8,000 sq ft parking");
    expect(String(body.details)).toContain(
      "Requested from /concrete-contractors-wichita-ks (concrete contractors, Wichita KS).",
    );
    expect(String(body.details)).toContain("Parking lot and dock apron.");
    expect(String(body.details)).not.toContain("Kansas rates not configured");
    expect(body).not.toHaveProperty("estimateLow");
    expect(body).not.toHaveProperty("estimateHigh");
    expect(body).not.toHaveProperty("lengthFt");
    expect(body).not.toHaveProperty("widthFt");
    expect(body).not.toHaveProperty("sqft");
    await waitFor(() => {
      expect(screen.getByText("Request Received")).toBeInTheDocument();
      expect(screen.getByText(/written estimate after a plan review/i)).toBeInTheDocument();
    });
    expect(window.dataLayer?.some((e) => e.event === "generate_lead")).toBe(true);
  });

  it("does not confirm or convert Kansas leads without a saved inquiryId", async () => {
    invoke.mockResolvedValue({ data: { success: true }, error: null });
    window.dataLayer = [];
    render(
      <MemoryRouter initialEntries={["/?from=concrete-contractors-wichita-ks#estimate"]}>
        <EstimateForm />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "Hub QA" } });
    fireEvent.change(screen.getByPlaceholderText("Your phone number"), { target: { value: "3165550100" } });
    fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
      target: { value: "hub-qa@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Job address in Wichita, KS"), {
      target: { value: "100 Douglas Ave, Wichita, KS" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Wichita-area address/i), {
      target: { value: "Parking lot and dock apron." },
    });
    fireEvent.click(screen.getByRole("button", { name: /request wichita estimate/i }));
    await waitFor(() => expect(invoke).toHaveBeenCalled());
    await waitFor(() => {
      expect(screen.queryByText("Request Received")).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText("Full name")).toHaveValue("Hub QA");
    });
    expect(window.dataLayer?.some((e) => e.event === "generate_lead")).toBe(false);
  });

  it("shows recoverable Turnstile errors without converting", async () => {
    invoke.mockResolvedValue({
      data: { error: "Please complete the security check and try again.", code: "turnstile_failed" },
      error: { message: "Edge Function returned a non-2xx status code" },
    });
    window.dataLayer = [];
    render(
      <MemoryRouter initialEntries={["/?from=concrete-contractors-wichita-ks#estimate"]}>
        <EstimateForm />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText("Full name"), { target: { value: "Hub QA" } });
    fireEvent.change(screen.getByPlaceholderText("Your phone number"), { target: { value: "3165550100" } });
    fireEvent.change(screen.getByPlaceholderText("email@example.com"), {
      target: { value: "hub-qa@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Job address in Wichita, KS"), {
      target: { value: "100 Douglas Ave, Wichita, KS" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Wichita-area address/i), {
      target: { value: "Retry me." },
    });
    fireEvent.click(screen.getByRole("button", { name: /request wichita estimate/i }));
    await waitFor(() => expect(invoke).toHaveBeenCalled());
    await waitFor(() => {
      expect(screen.queryByText("Request Received")).not.toBeInTheDocument();
      expect(screen.getByPlaceholderText("Full name")).toHaveValue("Hub QA");
      expect(screen.getByPlaceholderText(/Wichita-area address/i)).toHaveValue("Retry me.");
    });
    expect(window.dataLayer?.some((e) => e.event === "generate_lead")).toBe(false);
  });

  it("phone_click reaches dataLayer", () => {
    window.dataLayer = [];
    trackPhoneClick("/driveways-oklahoma-city");
    expect(window.dataLayer?.[0]).toMatchObject({
      event: "phone_click",
      link_location: "/driveways-oklahoma-city",
    });
  });
});
