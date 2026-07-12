import type { Plugin } from "vite";
import { getPrerenderBody, getSkipFooterNav } from "./prerender-bodies";
import { routes, getCanonical, type PrerenderRoute } from "./prerender-routes";
import * as fs from "fs";
import * as path from "path";

interface LinkItem {
  href: string;
  label: string;
}

const primaryNavLinks: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/driveways-oklahoma-city", label: "Driveways" },
  { href: "/patios-oklahoma-city", label: "Patios & Slabs" },
  { href: "/foundations-oklahoma-city", label: "Foundations" },
  { href: "/sidewalks-oklahoma-city", label: "Sidewalks" },
  { href: "/commercial-concrete-oklahoma-city", label: "Commercial" },
  { href: "/hvac-oklahoma-city", label: "HVAC" },
  { href: "/plumbing-oklahoma-city", label: "Plumbing" },
  { href: "/electrical-oklahoma-city", label: "Electrical" },
  { href: "/emergency-services-oklahoma-city", label: "Emergency Services" },
  { href: "/our-projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const serviceLinks: LinkItem[] = [
  { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
  { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
  { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
  { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
  { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
  { href: "/sewer-line-repair-oklahoma-city", label: "Sewer Line Repair & Installation" },
  { href: "/commercial-concrete-oklahoma-city", label: "Commercial Concrete" },
  { href: "/parking-lots-oklahoma-city", label: "Parking Lots" },
  { href: "/hvac-oklahoma-city", label: "HVAC Repair & Installation" },
  { href: "/plumbing-oklahoma-city", label: "Plumbing Services" },
  { href: "/electrical-oklahoma-city", label: "Electrical Services" },
  { href: "/emergency-services-oklahoma-city", label: "24/7 Emergency Services" },
];

const serviceAreaLinks: LinkItem[] = [
  { href: "/oklahoma-city-concrete", label: "Oklahoma City" },
  { href: "/edmond-concrete", label: "Edmond" },
  { href: "/norman-ok-concrete", label: "Norman" },
  { href: "/moore-oklahoma-concrete", label: "Moore" },
  { href: "/yukon-oklahoma-concrete", label: "Yukon" },
  { href: "/mustang-oklahoma-concrete", label: "Mustang" },
  { href: "/midwest-city-oklahoma-concrete", label: "Midwest City" },
  { href: "/del-city-oklahoma-concrete", label: "Del City" },
  { href: "/stillwater-oklahoma-concrete", label: "Stillwater" },
];

function generateRouteHtml(template: string, route: PrerenderRoute): string {
  const canonical = getCanonical(route.path);
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(route.description)}">`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" ?\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" ?\/?>/,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" ?\/?>/,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" ?\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}">`
  );

  if (route.noindex) {
    html = html.replace(
      '</head>',
      `<meta name="robots" content="noindex, nofollow" /></head>`
    );
  }

  html = html.replace('<div id="root"></div>', `<div id="root">${buildPrerenderMarkup(route)}</div>`);

  return html;
}

function buildPrerenderMarkup(route: PrerenderRoute): string {
  const bodyHtml = getPrerenderBody(route.path);
  const skipFooterNav = getSkipFooterNav(route.path);

  const articleContent =
    bodyHtml ??
    `<h1>${escapeHtml(route.h1)}</h1>${fallbackParagraphs(route.content)}`;

  const footerNav = skipFooterNav
    ? ""
    : `
      <footer>
        <section aria-labelledby="prerender-services-heading">
          <h2 id="prerender-services-heading">Services</h2>
          <nav aria-label="Services">
            ${renderLinks(serviceLinks)}
          </nav>
        </section>
        <section aria-labelledby="prerender-areas-heading">
          <h2 id="prerender-areas-heading">Service Areas</h2>
          <nav aria-label="Service areas">
            ${renderLinks(serviceAreaLinks)}
          </nav>
        </section>
        <p><strong>Call:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
      </footer>
    `;

  return `
    <header>
      <p>FDZ Construction LLC</p>
      <nav aria-label="Primary navigation">
        ${renderLinks(primaryNavLinks)}
      </nav>
    </header>
    <main>
      <article>${articleContent}</article>
      ${footerNav}
    </main>
  `;
}

function fallbackParagraphs(content: string): string {
  return content
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderLinks(links: LinkItem[]): string {
  return links
    .map((link) => `<a href="${escapeAttr(link.href)}">${escapeHtml(link.label)}</a>`)
    .join(" ");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

function escapeAttr(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
}

export function prerenderPlugin(): Plugin {
  return {
    name: "prerender-routes",
    apply: "build",
    closeBundle: {
      sequential: true,
      async handler() {
        const distDir = path.resolve(process.cwd(), "dist");
        const templatePath = path.join(distDir, "index.html");

        if (!fs.existsSync(templatePath)) {
          console.warn("[prerender] dist/index.html not found, skipping prerendering.");
          return;
        }

        const template = fs.readFileSync(templatePath, "utf-8");
        let count = 0;

        for (const route of routes) {
          if (route.path === "/") {
            fs.writeFileSync(templatePath, generateRouteHtml(template, route), "utf-8");
            count++;
            continue;
          }

          const routeDir = path.join(distDir, route.path);
          fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, "index.html"), generateRouteHtml(template, route), "utf-8");
          count++;
        }

        console.log(`[prerender] Generated ${count} static HTML files.`);
      },
    },
  };
}
