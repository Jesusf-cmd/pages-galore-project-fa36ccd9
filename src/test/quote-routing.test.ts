import { readFileSync, existsSync } from "fs";
import { resolve } from "path";
import { describe, expect, it } from "vitest";

const redirects = readFileSync(resolve("public/_redirects"), "utf8");

describe("quote direct-link routing", () => {
  it("proxies /quote/:id onto the noindex quote shell, not /index.html", () => {
    expect(redirects).toMatch(/^\/quote\/:id \/quote 200$/m);
    expect(redirects).not.toMatch(/\/quote\/\* \/index\.html 200/);
    expect(redirects).not.toMatch(/\/quote\/:id \/index\.html 200/);
  });

  it("does not add a site-wide SPA catch-all", () => {
    expect(redirects).not.toMatch(/^\/\* \/index\.html 200$/m);
    expect(redirects).not.toMatch(/^\/\* \/ 200$/m);
  });

  it("keeps a genuine static 404 page", () => {
    expect(existsSync(resolve("public/404.html"))).toBe(true);
    expect(readFileSync(resolve("public/404.html"), "utf8")).toContain("Page not found");
  });
});
