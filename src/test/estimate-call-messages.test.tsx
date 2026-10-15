import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { EstimateCallError, EstimateCallFollowUp } from "@/components/EstimateCallLink";

const WICHITA = [
  "concrete-contractors-wichita-ks",
  "commercial-concrete-wichita",
  "industrial-concrete-wichita",
  "retaining-walls-wichita",
  "stamped-concrete-wichita",
] as const;

describe("EstimateCallLink messages", () => {
  it("links 316-365-8342 on Wichita quote error, success, and upload follow-up copy", () => {
    for (const from of WICHITA) {
      const error = render(
        <EstimateCallError prefix="Something went wrong. Please call us at" from={from} />,
      );
      const errorLink = error.getByRole("link", { name: "316-365-8342" });
      expect(errorLink).toHaveAttribute("href", "tel:3163658342");
      expect(error.container.textContent).not.toContain("405");
      expect(error.container.textContent).not.toContain("316-531-9583");
      error.unmount();

      const followUp = render(<EstimateCallFollowUp from={from} />);
      const followLink = followUp.getByRole("link", { name: "316-365-8342" });
      expect(followLink).toHaveAttribute("href", "tel:3163658342");
      expect(followUp.getByText(/Or call us now at/)).toBeInTheDocument();
      followUp.unmount();
    }
  });

  it("links (405) 458-4805 for Oklahoma and unrecognized origins", () => {
    for (const from of ["commercial-concrete-repair-oklahoma-city", "unknown", null]) {
      const view = render(<EstimateCallFollowUp from={from} />);
      const link = view.getByRole("link", { name: "(405) 458-4805" });
      expect(link).toHaveAttribute("href", "tel:4054584805");
      expect(view.container.textContent).not.toContain("316-365-8342");
      expect(view.container.textContent).not.toContain("316-531-9583");
      view.unmount();
    }
  });
});
