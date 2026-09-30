#!/usr/bin/env node
/**
 * FDZ SEO checker — Node built-ins only (fs, path, fetch).
 *
 * Modes:
 *   node scripts/seo-check.mjs --dist
 *   node scripts/seo-check.mjs --live https://fdzconstruction.com
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const registryPath = path.join(root, "src", "seo", "registry.json");

function loadRegistry() {
  if (!fs.existsSync(registryPath)) {
    console.error(`Missing ${registryPath}. Run: npx tsx -e "import {SEO_PAGES} from './src/seo/pages.ts'; import fs from 'fs'; fs.writeFileSync('src/seo/registry.json', JSON.stringify(SEO_PAGES,null,2))"`);
    process.exit(2);
  }
  return JSON.parse(fs.readFileSync(registryPath, "utf8"));
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function attr(html, nameRe) {
  // Match content="..." or content='...' for a given meta/link pattern fragment.
  const m = html.match(nameRe);
  return m ? decodeEntities(m[1]) : null;
}

function parseHead(html) {
  const titleRaw = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleRaw ? stripTags(decodeEntities(titleRaw[1])) : null;
  const description =
    attr(html, /<meta\s+name=["']description["']\s+content="([^"]*)"/i) ||
    attr(html, /<meta\s+name=["']description["']\s+content='([^']*)'/i) ||
    attr(html, /<meta\s+content="([^"]*)"\s+name=["']description["']/i) ||
    attr(html, /<meta\s+content='([^']*)'\s+name=["']description["']/i);
  const canonical =
    attr(html, /<link\s+rel=["']canonical["']\s+href="([^"]*)"/i) ||
    attr(html, /<link\s+rel=["']canonical["']\s+href='([^']*)'/i) ||
    attr(html, /<link\s+href="([^"]*)"\s+rel=["']canonical["']/i) ||
    attr(html, /<link\s+href='([^']*)'\s+rel=["']canonical["']/i);
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    stripTags(decodeEntities(m[1])),
  );
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (m) => m[1],
  );
  const hrefs = [...html.matchAll(/\b(?:href|to)=["']([^"']+)["']/gi)].map((m) => m[1]);
  return { title, description, canonical, h1Matches, jsonLd, hrefs };
}

function distFileFor(pagePath) {
  if (pagePath === "/") return path.join(root, "dist", "index.html");
  return path.join(root, "dist", `${pagePath.replace(/^\//, "")}.html`);
}

/** Schema.org LocalBusiness and common subtypes we emit. */
const LOCAL_BUSINESS_TYPES = new Set([
  "LocalBusiness",
  "HomeAndConstructionBusiness",
  "GeneralContractor",
  "ProfessionalService",
]);

function isLocalBusinessType(type) {
  if (typeof type === "string") return LOCAL_BUSINESS_TYPES.has(type);
  if (Array.isArray(type)) return type.some((t) => typeof t === "string" && LOCAL_BUSINESS_TYPES.has(t));
  return false;
}

/** Count top-level LocalBusiness-type nodes across all JSON-LD blocks (incl. @graph). */
function countLocalBusinessNodes(blocks) {
  let count = 0;
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }
    if (isLocalBusinessType(node["@type"])) count++;
    if (node["@graph"]) visit(node["@graph"]);
  };
  for (const block of blocks) {
    try {
      visit(JSON.parse(block));
    } catch {
      // parse errors reported separately
    }
  }
  return count;
}

function pathFromDistFile(file) {
  const rel = path.relative(path.join(root, "dist"), file).replace(/\\/g, "/");
  if (rel === "index.html") return "/";
  if (!rel.endsWith(".html")) return null;
  return `/${rel.slice(0, -".html".length)}`;
}

function checkTrailingInternalHrefs(hrefs, pagePath) {
  const bad = [];
  for (const href of hrefs) {
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) continue;
    if (href === "/") continue;
    const pathOnly = href.split("#")[0].split("?")[0];
    if (pathOnly.length > 1 && pathOnly.endsWith("/")) bad.push(href);
  }
  return bad;
}

async function runDist() {
  const registry = loadRegistry();
  const byPath = Object.fromEntries(registry.map((p) => [p.path, p]));
  const distDir = path.join(root, "dist");
  if (!fs.existsSync(distDir)) {
    console.error("dist/ missing — run npm run build first");
    process.exit(2);
  }

  /** @type {{path:string, fails:string[], warns:string[]}[]} */
  const rows = [];
  let failCount = 0;

  for (const page of registry) {
    const fails = [];
    const warns = [];
    const file = distFileFor(page.path);
    if (!fs.existsSync(file)) {
      fails.push("missing prerender file");
      rows.push({ path: page.path, fails, warns });
      failCount++;
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const head = parseHead(html);

    if (head.title !== page.title) fails.push(`title mismatch\n    got: ${head.title}\n    want: ${page.title}`);
    if (head.description !== page.description) fails.push(`description mismatch\n    got: ${head.description}\n    want: ${page.description}`);
    if (head.canonical !== page.canonical) fails.push(`canonical mismatch\n    got: ${head.canonical}\n    want: ${page.canonical}`);
    if (head.h1Matches.length !== 1) fails.push(`expected 1 h1, found ${head.h1Matches.length}`);
    else if (head.h1Matches[0] !== page.h1) fails.push(`h1 mismatch\n    got: ${head.h1Matches[0]}\n    want: ${page.h1}`);

    if (head.title && head.title.length > 60) warns.push(`title length ${head.title.length} > 60`);
    if (head.description) {
      const n = head.description.length;
      if (n < 140 || n > 160) warns.push(`description length ${n} (want 140–160)`);
    }

    if (page.canonical) {
      if (!page.canonical.startsWith("https://fdzconstruction.com")) fails.push("canonical not absolute apex");
      if (page.path === "/") {
        if (page.canonical !== "https://fdzconstruction.com/") fails.push("homepage canonical must end with /");
      } else if (page.canonical.endsWith("/")) fails.push("canonical has trailing slash");
    }

    const badHrefs = checkTrailingInternalHrefs(head.hrefs, page.path);
    if (badHrefs.length) fails.push(`trailing-slash hrefs: ${badHrefs.join(", ")}`);

    for (const [i, block] of head.jsonLd.entries()) {
      try {
        JSON.parse(block);
      } catch (e) {
        fails.push(`json-ld[${i}] parse error: ${e.message}`);
      }
    }

    {
      const localBusinessCount = countLocalBusinessNodes(head.jsonLd);
      if (localBusinessCount > 1) {
        fails.push(`more than one LocalBusiness-type node (${localBusinessCount})`);
      }
    }

    if (Array.isArray(page.mustContain)) {
      const searchable = stripTags(decodeEntities(html));
      for (const needle of page.mustContain) {
        if (!needle) continue;
        if (!searchable.includes(needle) && !html.includes(needle)) {
          fails.push(`mustContain missing: ${JSON.stringify(needle)}`);
        }
      }
    }

    if (fails.length) failCount++;
    rows.push({ path: page.path, fails, warns });
  }

  // Orphans: prerender files without registry / registry without files
  const htmlFiles = [];
  function walk(dir) {
    for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, name.name);
      if (name.isDirectory()) walk(full);
      else if (name.name.endsWith(".html")) htmlFiles.push(full);
    }
  }
  walk(distDir);

  const skipFiles = new Set(["404.html"]);
  for (const file of htmlFiles) {
    const base = path.basename(file);
    if (skipFiles.has(base)) continue;
    const p = pathFromDistFile(file);
    if (!p) continue;
    if (!byPath[p]) {
      rows.push({ path: p, fails: ["prerender orphan — no registry entry"], warns: [] });
      failCount++;
    }
  }

  console.log("\n=== seo-check --dist ===\n");
  for (const row of rows) {
    const status = row.fails.length ? "FAIL" : row.warns.length ? "WARN" : "PASS";
    console.log(`${status}  ${row.path}`);
    for (const f of row.fails) console.log(`  ✗ ${f}`);
    for (const w of row.warns) console.log(`  ⚠ ${w}`);
  }
  console.log(`\n${rows.filter((r) => !r.fails.length).length}/${rows.length} passed (${failCount} failed)\n`);
  process.exit(failCount ? 1 : 0);
}

async function follow(url, maxHops = 5) {
  const chain = [];
  let current = url;
  for (let i = 0; i < maxHops; i++) {
    const res = await fetch(current, { redirect: "manual" });
    const loc = res.headers.get("location");
    chain.push({ url: current, status: res.status, location: loc });
    if (res.status < 300 || res.status >= 400 || !loc) break;
    current = new URL(loc, current).toString();
  }
  return chain;
}

async function runLive(baseUrl) {
  const registry = loadRegistry();
  const base = baseUrl.replace(/\/$/, "");
  console.log(`\n=== seo-check --live ${base} ===\n`);

  let failCount = 0;
  const probes = [];

  for (const page of registry.filter((p) => !p.noindex)) {
    probes.push({ label: `${page.path} → 200`, run: async () => {
      const chain = await follow(`${base}${page.path === "/" ? "/" : page.path}`);
      const last = chain[chain.length - 1];
      if (last.status !== 200) return `expected 200, got ${JSON.stringify(chain)}`;
      return null;
    }});

    if (page.path !== "/") {
      probes.push({ label: `${page.path}/ → 301/308 to path`, run: async () => {
        const chain = await follow(`${base}${page.path}/`);
        if (chain.length < 2) return `expected redirect, got ${JSON.stringify(chain)}`;
        const first = chain[0];
        if (![301, 308].includes(first.status)) return `expected 301/308, got ${first.status}`;
        const dest = new URL(first.location, base).pathname.replace(/\/$/, "") || "/";
        const want = page.path;
        if (dest !== want) return `Location ${dest} != ${want}`;
        if (chain.length > 2) return `redirect chain longer than 1 hop: ${JSON.stringify(chain)}`;
        return null;
      }});

      probes.push({ label: `${page.path}.html → redirect or 404`, run: async () => {
        const chain = await follow(`${base}${page.path}.html`);
        const first = chain[0];
        if (first.status === 200) return `.html served 200 (duplicate)`;
        if ([301, 302, 308].includes(first.status) || first.status === 404) return null;
        return `unexpected ${JSON.stringify(chain)}`;
      }});
    }
  }

  probes.push({
    label: "/blog/cost-of-concrete-oklahoma-city-2026/ → no-slash",
    run: async () => {
      const chain = await follow(`${base}/blog/cost-of-concrete-oklahoma-city-2026/`);
      const first = chain[0];
      if (![301, 308].includes(first.status)) return `expected 301/308, got ${first.status}`;
      const dest = new URL(first.location, base).pathname.replace(/\/$/, "");
      if (dest !== "/blog/cost-of-concrete-oklahoma-city-2026") return `Location ${dest}`;
      return null;
    },
  });

  probes.push({
    label: "/this-page-should-not-exist-xyz → 404",
    run: async () => {
      const chain = await follow(`${base}/this-page-should-not-exist-xyz`);
      const last = chain[chain.length - 1];
      if (last.status === 200) return "soft 404 (200)";
      if (last.status !== 404) return `expected 404, got ${last.status}`;
      return null;
    },
  });

  for (const retired of [
    "/hvac-oklahoma-city",
    "/plumbing-oklahoma-city",
    "/electrical-oklahoma-city",
    "/emergency-services-oklahoma-city",
  ]) {
    probes.push({
      label: `${retired} → 404`,
      run: async () => {
        const chain = await follow(`${base}${retired}`);
        const last = chain[chain.length - 1];
        if (last.status === 200) return "soft 404 (200) — page still published";
        if (last.status !== 404) return `expected 404, got ${JSON.stringify(chain)}`;
        return null;
      },
    });
  }

  for (const probe of probes) {
    try {
      const err = await probe.run();
      if (err) {
        failCount++;
        console.log(`FAIL  ${probe.label}\n  ✗ ${err}`);
      } else {
        console.log(`PASS  ${probe.label}`);
      }
    } catch (e) {
      failCount++;
      console.log(`FAIL  ${probe.label}\n  ✗ ${e.message}`);
    }
  }

  console.log(`\nlive probes done — ${failCount} failed\n`);
  process.exit(failCount ? 1 : 0);
}

const args = process.argv.slice(2);
if (args[0] === "--dist") {
  await runDist();
} else if (args[0] === "--live") {
  const base = args[1] || "https://fdzconstruction.com";
  await runLive(base);
} else {
  console.log(`Usage:
  node scripts/seo-check.mjs --dist
  node scripts/seo-check.mjs --live https://fdzconstruction.com`);
  process.exit(2);
}
