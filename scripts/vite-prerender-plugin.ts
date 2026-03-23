/**
 * Custom Vite plugin that generates static HTML files for each route at build time.
 * Each route gets its own directory with an index.html containing:
 * - Correct <title> and <meta description>
 * - OG tags
 * - Canonical link
 * - Visible content inside <div id="root"> so crawlers see real text
 * React will replace this content when it hydrates on the client.
 */
import type { Plugin } from "vite";
import { routes, getCanonical } from "./prerender-routes";
import * as fs from "fs";
import * as path from "path";

function generateRouteHtml(template: string, route: typeof routes[0]): string {
  const canonical = getCanonical(route.path);
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(route.description)}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" ?\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Replace OG tags
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

  // Replace twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}">`
  );

  // Inject visible content into <div id="root">
  const prerenderContent = `
    <h1>${escapeHtml(route.h1)}</h1>
    <p>${escapeHtml(route.content)}</p>
    <p><a href="tel:4052470027">(405) 247-0027</a> · <a href="/#estimate">Get Free Estimate</a></p>
  `;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${prerenderContent}</div>`
  );

  return html;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str: string): string {
  return str.replace(/"/g, "&quot;").replace(/&/g, "&amp;");
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
            // Overwrite the root index.html with prerendered version
            const html = generateRouteHtml(template, route);
            fs.writeFileSync(templatePath, html, "utf-8");
            count++;
            continue;
          }

          const routeDir = path.join(distDir, route.path);
          fs.mkdirSync(routeDir, { recursive: true });

          const html = generateRouteHtml(template, route);
          fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
          count++;
        }

        console.log(`[prerender] Generated ${count} static HTML files.`);
      },
    },
  };
}
