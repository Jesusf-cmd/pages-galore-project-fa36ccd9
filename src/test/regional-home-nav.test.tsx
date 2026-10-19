import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  WICHITA_HOME_PATH,
  WICHITA_PATHS,
  normalizePath,
  regionalHomePath,
} from "@/lib/phones";
import { buildTemplateMarkup } from "../../scripts/vite-prerender-plugin";
import { routes } from "../../scripts/prerender-routes";

const KANSAS_ROUTES = [...WICHITA_PATHS];
const NON_KANSAS_ROUTES = [
  "/",
  "/commercial-concrete-oklahoma-city",
  "/driveways-oklahoma-city",
  "/oklahoma-city-concrete",
  "/edmond-concrete",
  "/our-projects",
  "/blog",
  "/#contact",
];

function renderNavbar(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="*" element={<Navbar />} />
      </Routes>
    </MemoryRouter>,
  );
}

function headerLogo(kansas = false) {
  return screen.getAllByRole("link", {
    name: kansas
      ? "FDZ Construction LLC — Serving Wichita, KS"
      : "FDZ Construction LLC home",
  })[0];
}

function desktopHome() {
  return screen.getByRole("link", { name: "Home" });
}

describe("regionalHomePath", () => {
  it.each(KANSAS_ROUTES)("resolves %s to the Wichita landing page", (path) => {
    expect(regionalHomePath(path)).toBe(WICHITA_HOME_PATH);
  });

  it.each(NON_KANSAS_ROUTES)("resolves %s to /", (path) => {
    expect(regionalHomePath(path)).toBe("/");
  });

  it("normalizes trailing slashes and query/hash the same as isKansasPath", () => {
    expect(normalizePath("/commercial-concrete-wichita/")).toBe("/commercial-concrete-wichita");
    expect(regionalHomePath("/commercial-concrete-wichita/")).toBe(WICHITA_HOME_PATH);
    expect(regionalHomePath("/commercial-concrete-wichita?x=1")).toBe(WICHITA_HOME_PATH);
    expect(regionalHomePath("/commercial-concrete-wichita#top")).toBe(WICHITA_HOME_PATH);
    expect(regionalHomePath("/driveways-oklahoma-city/")).toBe("/");
  });
});

describe("Navbar regional Home and logo", () => {
  it.each(KANSAS_ROUTES)("points desktop Home and header logo to the Wichita hub on %s", (path) => {
    renderNavbar(path);
    expect(headerLogo(true)).toHaveAttribute("href", WICHITA_HOME_PATH);
    expect(desktopHome()).toHaveAttribute("href", WICHITA_HOME_PATH);
  });

  it.each(["/", "/commercial-concrete-oklahoma-city", "/edmond-concrete"])(
    "keeps desktop Home and header logo on / for %s",
    (path) => {
      renderNavbar(path);
      expect(headerLogo()).toHaveAttribute("href", "/");
      expect(desktopHome()).toHaveAttribute("href", "/");
    },
  );

  it("uses the Wichita destination for mobile Home and overlay logo", () => {
    renderNavbar("/retaining-walls-wichita");
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const overlay = screen.getByRole("dialog");
    expect(
      within(overlay).getByRole("link", { name: "FDZ Construction LLC — Serving Wichita, KS" }),
    ).toHaveAttribute("href", WICHITA_HOME_PATH);
    expect(within(overlay).getByRole("link", { name: "Home" })).toHaveAttribute("href", WICHITA_HOME_PATH);
  });

  it("keeps mobile Home and overlay logo on / for Oklahoma routes", () => {
    renderNavbar("/driveways-oklahoma-city");
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const overlay = screen.getByRole("dialog");
    expect(within(overlay).getByRole("link", { name: "FDZ Construction LLC home" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(within(overlay).getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });

  it("closes the mobile menu after navigation", () => {
    render(
      <MemoryRouter initialEntries={["/commercial-concrete-wichita"]}>
        <Routes>
          <Route
            path="/commercial-concrete-wichita"
            element={
              <>
                <Navbar />
                <div>Commercial</div>
              </>
            }
          />
          <Route
            path="/industrial-concrete-wichita"
            element={
              <>
                <Navbar />
                <div>Industrial</div>
              </>
            }
          />
        </Routes>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole("dialog")).getByRole("link", { name: "Wichita Industrial Concrete" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByText("Industrial")).toBeInTheDocument();
  });

  it("updates Home/logo after client-side navigation between Kansas and Oklahoma", () => {
    render(
      <MemoryRouter initialEntries={["/commercial-concrete-wichita"]}>
        <Routes>
          <Route
            path="/commercial-concrete-wichita"
            element={
              <>
                <Navbar />
                <Link to="/driveways-oklahoma-city">Go Oklahoma</Link>
              </>
            }
          />
          <Route
            path="/driveways-oklahoma-city"
            element={
              <>
                <Navbar />
                <Link to="/stamped-concrete-wichita">Go Kansas</Link>
              </>
            }
          />
          <Route
            path="/stamped-concrete-wichita"
            element={
              <>
                <Navbar />
                <div>Kansas page</div>
              </>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(headerLogo(true)).toHaveAttribute("href", WICHITA_HOME_PATH);
    expect(desktopHome()).toHaveAttribute("href", WICHITA_HOME_PATH);

    fireEvent.click(screen.getByRole("link", { name: "Go Oklahoma" }));
    expect(headerLogo()).toHaveAttribute("href", "/");
    expect(desktopHome()).toHaveAttribute("href", "/");

    fireEvent.click(screen.getByRole("link", { name: "Go Kansas" }));
    expect(headerLogo(true)).toHaveAttribute("href", WICHITA_HOME_PATH);
    expect(desktopHome()).toHaveAttribute("href", WICHITA_HOME_PATH);
  });

  it("preserves Kansas phone and hub estimate targets on Wichita routes", () => {
    renderNavbar("/industrial-concrete-wichita");
    expect(screen.getByRole("link", { name: "316-365-8342" })).toHaveAttribute("href", "tel:3163658342");
    expect(screen.getByRole("link", { name: /Get Quote/ })).toHaveAttribute(
      "href",
      `${WICHITA_HOME_PATH}?from=industrial-concrete-wichita#estimate`,
    );
  });

  it("keeps a hub query origin when Get Quote is clicked again", () => {
    renderNavbar(`${WICHITA_HOME_PATH}?from=stamped-concrete-wichita`);
    expect(screen.getByRole("link", { name: /Get Quote/ })).toHaveAttribute(
      "href",
      `${WICHITA_HOME_PATH}?from=stamped-concrete-wichita#estimate`,
    );
  });

  it("puts Wichita services ahead of Oklahoma services in the Kansas mobile menu", () => {
    renderNavbar("/concrete-contractors-wichita-ks");
    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const overlay = screen.getByRole("dialog");
    const text = overlay.textContent || "";
    expect(text.indexOf("Wichita, Kansas")).toBeLessThan(text.indexOf("Oklahoma services"));
    expect(within(overlay).getByRole("link", { name: "Sewer Line Repair" })).toBeTruthy();
    expect(within(overlay).getByRole("link", { name: "Wichita Commercial Concrete" })).toBeTruthy();
  });

  it("does not show Oklahoma sewer as a top-level Kansas desktop nav item", () => {
    renderNavbar("/concrete-contractors-wichita-ks");
    expect(screen.queryByRole("link", { name: "Sewer Line" })).toBeNull();
  });
});

describe("prerender regional Home navigation", () => {
  it.each(KANSAS_ROUTES)("emits the Wichita Home href for generated Kansas HTML on %s", (path) => {
    const route = routes.find((entry) => entry.path === path);
    expect(route).toBeTruthy();
    const html = buildTemplateMarkup(route!);
    expect(html).toContain(`<a href="${WICHITA_HOME_PATH}">Home</a>`);
    expect(html).not.toMatch(/aria-label="Primary navigation">[\s\S]*?<a href="\/">Home<\/a>/);
  });

  it("keeps Home as / in generated Oklahoma HTML", () => {
    const route = routes.find((entry) => entry.path === "/commercial-concrete-oklahoma-city");
    expect(route).toBeTruthy();
    const html = buildTemplateMarkup(route!);
    expect(html).toContain('<a href="/">Home</a>');
    expect(html).not.toContain(`<a href="${WICHITA_HOME_PATH}">Home</a>`);
  });

  it("keeps Home as / on the site root template", () => {
    const route = routes.find((entry) => entry.path === "/");
    expect(route).toBeTruthy();
    const html = buildTemplateMarkup(route!);
    expect(html).toContain('<a href="/">Home</a>');
  });
});
