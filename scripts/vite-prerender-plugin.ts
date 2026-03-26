import type { Plugin } from "vite";
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
  { href: "/our-projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const serviceLinks: LinkItem[] = [
  { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
  { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
  { href: "/foundations-oklahoma-city", label: "Foundations & Retaining Walls" },
  { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
  { href: "/commercial-concrete-oklahoma-city", label: "Commercial Concrete" },
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

  html = html.replace('<div id="root"></div>', `<div id="root">${buildPrerenderMarkup(route)}</div>`);

  return html;
}

function buildPrerenderMarkup(route: PrerenderRoute): string {
  const paragraphs = route.content
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  return `
    <header>
      <p>Redwood Construction LLC</p>
      <nav aria-label="Primary navigation">
        ${renderLinks(primaryNavLinks)}
      </nav>
    </header>
    <main>
      <article>
        <h1>${escapeHtml(route.h1)}</h1>
        ${paragraphs}
        <p><strong>Call:</strong> <a href="tel:4052470027">(405) 247-0027</a> · <a href="mailto:jesus.f@myconcreteestimate.com">jesus.f@myconcreteestimate.com</a></p>
      </article>
      <section aria-labelledby="prerender-services-heading">
        <h2 id="prerender-services-heading">Concrete Services</h2>
        <p>Redwood Construction LLC provides concrete driveways, patios, slabs, foundations, stamped concrete, sidewalks, retaining walls, curb and gutter, parking lots, and commercial concrete work.</p>
        <nav aria-label="Concrete services">
          ${renderLinks(serviceLinks)}
        </nav>
      </section>
      <section aria-labelledby="prerender-areas-heading">
        <h2 id="prerender-areas-heading">Service Areas</h2>
        <p>Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City.</p>
        <nav aria-label="Service areas">
          ${renderLinks(serviceAreaLinks)}
        </nav>
      </section>
    </main>
  `;
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
