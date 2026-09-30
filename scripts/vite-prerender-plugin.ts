import type { Plugin } from "vite";
import { getPrerenderBody, getSkipFooterNav } from "./prerender-bodies";
import { routes, getCanonical, type PrerenderRoute } from "./prerender-routes";
import { withoutCrawlableEmail } from "./prerender-helpers";
import { faqJsonLdScriptTag } from "../src/lib/faqJsonLd";
import { stripWichitaStreetAddressHtml } from "../src/lib/organizationSchema";
import {
  FULL_BUSINESS_PATHS,
  businessJsonLdScriptTag,
  isLocalBusinessType,
} from "../src/lib/localBusinessSchema";
import { phoneForPath } from "../src/lib/phones";
import { getSeoPage } from "../src/seo/pages";
import * as fs from "fs";
import * as path from "path";
import { pathToFileURL } from "node:url";

type ReactRenderFn = (url: string) => Promise<string>;

let reactRender: ReactRenderFn | null = null;

async function loadReactRenderer(): Promise<ReactRenderFn | null> {
  const candidates = [
    path.resolve(process.cwd(), "dist-ssr", "entry-server.js"),
    path.resolve(process.cwd(), "dist-ssr", "entry-server.mjs"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const mod = await import(pathToFileURL(file).href);
    if (typeof mod.render === "function") return mod.render as ReactRenderFn;
  }
  return null;
}

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
  { href: "/sewer-line-repair-oklahoma-city", label: "Sewer Line" },
  { href: "/skid-steer-services-oklahoma-city", label: "Skid Steer" },
  { href: "/excavator-services-oklahoma-city", label: "Excavator" },
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
  { href: "/skid-steer-services-oklahoma-city", label: "Skid Steer Services" },
  { href: "/excavator-services-oklahoma-city", label: "Excavator Services" },
  { href: "/commercial-concrete-oklahoma-city", label: "Commercial Concrete" },
  { href: "/parking-lots-oklahoma-city", label: "Parking Lots" },
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
  { href: "/commercial-concrete-wichita", label: "Wichita, KS" },
];

async function generateRouteHtml(template: string, route: PrerenderRoute): Promise<string> {
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
    if (/<meta name="robots"/i.test(html)) {
      html = html.replace(
        /<meta name="robots" content="[^"]*"\s*\/?>/i,
        `<meta name="robots" content="noindex, nofollow" />`
      );
    } else {
      html = html.replace(
        "</head>",
        `<meta name="robots" content="noindex, nofollow" /></head>`
      );
    }
  }

  // Crawler HTML is written into #root. The client uses createRoot() (not
  // hydrateRoot), so React replaces this markup on startup instead of hydrating it.
  // JSON-LD <script> must not live inside #root. React createRoot() clears that
  // node, and a parser-inserted script in the container can prevent the SPA from
  // mounting — leaving only the clipped/empty beige page in the browser.
  html = stripWichitaStreetAddressHtml(html, route.path);
  // One business entity: full GeneralContractor#business only on / and OKC city page.
  // Strip any LocalBusiness-type nodes that may have leaked from the SPA template.
  html = stripLocalBusinessEntities(html);
  const { markup, headTags } = hoistJsonLdScripts(await buildPrerenderMarkup(route));
  html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const businessTag = FULL_BUSINESS_PATHS.has(route.path) ? businessJsonLdScriptTag() : "";
  if (headTags || businessTag) {
    html = html.replace("</head>", `${headTags}${businessTag}</head>`);
  }

  return html;
}

/** Remove LocalBusiness / GeneralContractor / HomeAndConstructionBusiness entity scripts. */
function stripLocalBusinessEntities(html: string): string {
  return html.replace(
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    (full, json: string) => {
      try {
        const data = JSON.parse(json);
        if (isLocalBusinessType(data["@type"])) return "";
        return full;
      } catch {
        return full;
      }
    },
  );
}

function hoistJsonLdScripts(markup: string): { markup: string; headTags: string } {
  const tags: string[] = [];
  const cleaned = markup.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
    (_match, json: string) => {
      tags.push(faqJsonLdScriptTag(json));
      return "";
    },
  );
  return { markup: cleaned, headTags: tags.join("") };
}

/** Hand-written template body (Phase 2a). Exported for parity comparison. */
export function buildTemplateMarkup(route: PrerenderRoute): string {
  const bodyHtml = getPrerenderBody(route.path);
  const skipFooterNav = getSkipFooterNav(route.path);
  const phone = phoneForPath(route.path);

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
        <p><strong>Call:</strong> <a href="tel:${phone.tel}">${phone.display}</a> · <a href="/#contact">Email FDZ Construction</a></p>
      </footer>
    `;

  return withoutCrawlableEmail(`
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
  `);
}

async function buildPrerenderMarkup(route: PrerenderRoute): Promise<string> {
  const seo = getSeoPage(route.path);
  const mode = seo?.render ?? "template";

  if (mode === "react") {
    if (!reactRender) {
      throw new Error(
        `[prerender] render:'react' for ${route.path} but dist-ssr/entry-server.js is missing. Run: npm run build:ssr`,
      );
    }
    return withoutCrawlableEmail(await reactRender(route.path));
  }

  return buildTemplateMarkup(route);
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
  let isSsrBuild = false;
  return {
    name: "prerender-routes",
    apply: "build",
    configResolved(config) {
      isSsrBuild = !!config.build.ssr;
    },
    closeBundle: {
      sequential: true,
      async handler() {
        if (isSsrBuild) return;
        const distDir = path.resolve(process.cwd(), "dist");
        const templatePath = path.join(distDir, "index.html");

        if (!fs.existsSync(templatePath)) {
          console.warn("[prerender] dist/index.html not found, skipping prerendering.");
          return;
        }

        const template = fs.readFileSync(templatePath, "utf-8");
        reactRender = await loadReactRenderer();
        const reactRoutes = routes.filter((r) => getSeoPage(r.path)?.render === "react");
        if (reactRoutes.length && !reactRender) {
          throw new Error(
            `[prerender] ${reactRoutes.length} route(s) use render:'react' but SSR bundle is missing. Run: npm run build:ssr`,
          );
        }
        let count = 0;

        for (const route of routes) {
          if (route.path === "/") {
            fs.writeFileSync(templatePath, await generateRouteHtml(template, route), "utf-8");
            count++;
            continue;
          }

          // Write path.html (not path/index.html). Cloudflare 308s directory URLs
          // from /page → /page/, which Search Console then lists as "Page with redirect".
          const htmlPath = path.join(distDir, `${route.path.replace(/^\//, "")}.html`);
          fs.mkdirSync(path.dirname(htmlPath), { recursive: true });
          fs.writeFileSync(htmlPath, await generateRouteHtml(template, route), "utf-8");
          count++;
        }

        console.log(`[prerender] Generated ${count} static HTML files.`);
      },
    },
  };
}
