import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "@/components/Footer";
import { GOOGLE_MAPS_PROFILE_URL } from "@/lib/contact";

function renderFooter(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Footer />
    </MemoryRouter>,
  );
}

describe("footer Google Business Profile link", () => {
  it("points at the FDZ Construction LLC Maps listing by CID", () => {
    expect(GOOGLE_MAPS_PROFILE_URL).toBe("https://www.google.com/maps?cid=15880952529720273707");
  });

  it.each(["/", "/driveways-oklahoma-city", "/commercial-concrete-wichita"])(
    "renders one descriptive external link on %s",
    (path) => {
      renderFooter(path);
      const links = screen.getAllByRole("link", { name: "View FDZ Construction on Google Maps" });
      expect(links).toHaveLength(1);
      expect(links[0]).toHaveAttribute("href", GOOGLE_MAPS_PROFILE_URL);
      expect(links[0]).toHaveAttribute("target", "_blank");
      expect(links[0]).toHaveAttribute("rel", "noopener noreferrer");
    },
  );

  it("keeps the estimate CTA and direct phone link in the contact section", () => {
    renderFooter("/");
    expect(screen.getByRole("link", { name: /Request an Estimate/ })).toHaveAttribute("href", "/#estimate");
    expect(screen.getAllByRole("link", { name: "(405) 458-4805" })[0]).toHaveAttribute("href", "tel:4054584805");
  });
});
