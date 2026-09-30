/**
 * Phase 2b: compare hand-written template bodies vs React SSR output.
 * Writes PRERENDER_PARITY.md
 *
 * Run: npm run prerender:parity
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";
import { SEO_PAGES } from "../src/seo/pages";
import { routes } from "./prerender-routes";
import { buildTemplateMarkup } from "./vite-prerender-plugin";

type RenderFn = (url: string) => Promise<string>;

const OUT = path.resolve(process.cwd(), "PRERENDER_PARITY.md");

/** Template H2 → React H2 (or EstimateForm) that covers the same topic. */
const COVERED_BY: Record<string, Record<string, string>> = {
  "/": {
    "Concrete Services": "Two Core Services / Concrete Services in Oklahoma City Metro",
    "Sewer Line Repair & Installation": "One Crew. Digging & Concrete Restoration",
    "Service Areas": "We Come To You / Serving All of Oklahoma City Metro",
    "Request a Free Estimate": "EstimateForm",
  },
  "/oklahoma-city-concrete": {
    "FAQ": "Common Questions About Concrete & Sewer Work in Oklahoma City",
    "Request a Free Estimate": "EstimateForm",
    "Our Oklahoma City Projects": "Real Work in Oklahoma City",
    "Sewer Line Repair & Installation in Oklahoma City": "Sewer Line Repair & Installation in Oklahoma City",
  },
  "/driveways-oklahoma-city": {
    "How We Install Concrete Driveways in Oklahoma City": "From Sub-Base to Cured Slab",
    "Why Oklahoma City Homeowners and Businesses Choose FDZ": "Why Oklahoma City Property Owners Choose FDZ Construction",
    "Oklahoma City Soil and Your Driveway": "Built for Oklahoma Soil",
    "How Much Does a Concrete Driveway Cost in Oklahoma City?": "How Much Does a Concrete Driveway Cost in Oklahoma City?",
    "Driveway FAQ": "Common Questions From OKC Property Owners",
    "Related Services": "Other Concrete Services From FDZ",
  },
  "/patios-oklahoma-city": {
    "The Stamped Concrete Process": "From Base Prep to Sealed Finish / How a Stamped Patio Gets Built",
    "Why Oklahoma City Homeowners and Businesses Choose FDZ": "Why Oklahoma City Property Owners Choose FDZ Construction",
    "Why Sealing Matters in Oklahoma City": "Built for Oklahoma Soil / finish & seal sections",
    "How Much Does a Concrete Patio Cost in Oklahoma City?": "How Much Does a Concrete Patio Cost in Oklahoma City?",
    "Patio FAQ": "Common Questions From OKC Property Owners",
    "Related Services": "Other Concrete Services From FDZ",
  },
  "/sidewalks-oklahoma-city": {
    "Process": "Graded, Formed, Poured & Jointed",
    "Why Oklahoma City Homeowners and Businesses Choose FDZ": "Why Oklahoma City Property Owners Choose FDZ Construction",
    "How Much Do Sidewalks and Curb Work Cost in Oklahoma City?": "How Much Do Sidewalks and Curb Work Cost in Oklahoma City?",
    "Sidewalk FAQ": "Common Questions From OKC Property Owners",
    "Related Services": "Other Concrete Services From FDZ",
  },
  "/ada-concrete-ramps-oklahoma-city": {
    "Commercial Services": "Commercial Services in Oklahoma City",
    "The ADA Compliance Process": "The ADA Compliance Process",
    "What Makes Concrete ADA Compliant": "What Makes Concrete ADA Compliant",
    "ADA Compliance Cost Ranges": "ADA Compliance Cost Ranges",
    "Other Commercial Concrete Services": "Other Commercial Concrete Services",
    "Frequently Asked Questions": "Frequently Asked Questions",
  },
  "/our-projects": {
    "Featured Projects": "Watch Our Work In Action",
    "Recent Concrete Projects Across the Metro": "Work Across the OKC Metro",
  },
};

const CTA_H2_RE = /request a free estimate|get (a )?free estimate|free estimate/i;

function loadRenderer(): Promise<RenderFn> {
  const candidates = [
    path.resolve(process.cwd(), "dist-ssr", "entry-server.js"),
    path.resolve(process.cwd(), "dist-ssr", "entry-server.mjs"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    return import(pathToFileURL(file).href).then((mod) => {
      if (typeof mod.render !== "function") {
        throw new Error(`No render() export in ${file}`);
      }
      return mod.render as RenderFn;
    });
  }
  throw new Error("Missing dist-ssr/entry-server.js — run npm run build:ssr first");
}

function stripChrome(root: Element): Element {
  const clone = root.cloneNode(true) as Element;
  clone
    .querySelectorAll(
      "header, footer, nav, [aria-label='Primary navigation'], a[aria-label='Call FDZ Construction LLC']",
    )
    .forEach((el) => el.remove());
  clone.querySelectorAll("a.fixed").forEach((el) => {
    if (/call/i.test(el.textContent || "")) el.remove();
  });
  return clone;
}

function visibleWords(el: Element): string[] {
  const text = (el.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
  if (!text) return [];
  return text.match(/[a-z0-9'’%-]+/g) ?? [];
}

function headingTexts(el: Element, tag: string): string[] {
  return [...el.querySelectorAll(tag)]
    .map((h) => (h.textContent || "").replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function internalLinks(el: Element): string[] {
  const hrefs = new Set<string>();
  for (const a of el.querySelectorAll("a[href]")) {
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const pathOnly = href.split("#")[0] || "/";
    hrefs.add(pathOnly === "" ? "/" : pathOnly);
  }
  return [...hrefs].sort();
}

function jsonLdTypes(html: string): string[] {
  const types = new Set<string>();
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    try {
      const data = JSON.parse(m[1]);
      const collect = (node: unknown) => {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) {
          node.forEach(collect);
          return;
        }
        const obj = node as Record<string, unknown>;
        const t = obj["@type"];
        if (typeof t === "string") types.add(t);
        else if (Array.isArray(t)) t.forEach((x) => typeof x === "string" && types.add(x));
        if (obj["@graph"]) collect(obj["@graph"]);
      };
      collect(data);
    } catch {
      // ignore
    }
  }
  return [...types].sort();
}

function analyze(html: string) {
  const dom = new JSDOM(`<div id="root">${html}</div>`);
  const root = dom.window.document.getElementById("root")!;
  const content = stripChrome(root);
  const words = visibleWords(content);
  return {
    wordCount: words.length,
    wordSet: new Set(words),
    h2s: headingTexts(content, "h2"),
    links: internalLinks(content),
    jsonLd: jsonLdTypes(html),
    text: (content.textContent || "").replace(/\s+/g, " ").trim().toLowerCase(),
    hasEstimateForm:
      !!content.querySelector("form") ||
      /request a free estimate|get free estimate|estimate form/i.test(content.textContent || ""),
  };
}

function normalizeHeading(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function classifyTemplateH2s(
  pathKey: string,
  templateH2s: string[],
  reactH2s: string[],
  reactTextNorm: string,
  hasEstimateForm: boolean,
): { missing: string[]; coveredBy: string[] } {
  const map = COVERED_BY[pathKey] || {};
  const reactNorms = reactH2s.map(normalizeHeading);
  const missing: string[] = [];
  const coveredBy: string[] = [];

  for (const h of templateH2s) {
    const n = normalizeHeading(h);
    if (!n) continue;

    if (CTA_H2_RE.test(h) && hasEstimateForm) {
      coveredBy.push(`${h} → EstimateForm`);
      continue;
    }

    const explicit = map[h];
    if (explicit) {
      coveredBy.push(`${h} → ${explicit}`);
      continue;
    }

    // Fuzzy match by normalized text
    if (reactNorms.some((r) => r === n || r.includes(n) || n.includes(r)) || reactTextNorm.includes(n)) {
      const match = reactH2s.find((r) => {
        const rn = normalizeHeading(r);
        return rn === n || rn.includes(n) || n.includes(rn);
      });
      coveredBy.push(`${h} → ${match || "(body text)"}`);
      continue;
    }

    missing.push(h);
  }

  return { missing, coveredBy };
}

function missingLinks(needles: string[], haystack: string[]): string[] {
  const set = new Set(haystack);
  return needles.filter((n) => !set.has(n));
}

function escapeCell(s: string): string {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

async function main() {
  const render = await loadRenderer();
  const indexable = SEO_PAGES.filter((p) => !p.noindex);
  const routeByPath = new Map(routes.map((r) => [r.path, r]));

  const rows: {
    path: string;
    templateWords: number;
    reactWords: number;
    missingH2s: string[];
    coveredBy: string[];
    extraH2s: string[];
    missingLinks: string[];
    jsonLd: string;
    verdict: string;
    switched: boolean;
  }[] = [];

  let safe = 0;
  let portFirst = 0;
  let errors = 0;

  for (const page of indexable) {
    const switched = page.render === "react";
    const route = routeByPath.get(page.path);
    if (!route) {
      rows.push({
        path: page.path,
        templateWords: 0,
        reactWords: 0,
        missingH2s: [],
        coveredBy: [],
        extraH2s: [],
        missingLinks: [],
        jsonLd: "n/a",
        verdict: `port first (no prerender route metadata)`,
        switched,
      });
      portFirst++;
      continue;
    }

    let templateHtml: string;
    let reactHtml: string;
    try {
      templateHtml = buildTemplateMarkup(route);
      reactHtml = await render(page.path);
    } catch (err) {
      errors++;
      rows.push({
        path: page.path,
        templateWords: 0,
        reactWords: 0,
        missingH2s: [],
        coveredBy: [],
        extraH2s: [],
        missingLinks: [],
        jsonLd: "n/a",
        verdict: `port first (SSR error: ${err instanceof Error ? err.message : String(err)})`,
        switched,
      });
      portFirst++;
      continue;
    }

    if (/Loading\.\.\./i.test(reactHtml) && !/<h1[\s>]/i.test(reactHtml)) {
      errors++;
      rows.push({
        path: page.path,
        templateWords: 0,
        reactWords: 0,
        missingH2s: [],
        coveredBy: [],
        extraH2s: [],
        missingLinks: [],
        jsonLd: "n/a",
        verdict: "port first (React output looks like Suspense fallback)",
        switched,
      });
      portFirst++;
      continue;
    }

    const t = analyze(templateHtml);
    const r = analyze(reactHtml);
    const { missing: missH2, coveredBy } = classifyTemplateH2s(
      page.path,
      t.h2s,
      r.h2s,
      normalizeHeading(r.text),
      r.hasEstimateForm,
    );
    const missLinks = missingLinks(t.links, r.links);
    const wordOk = r.wordCount >= t.wordCount;

    const missingBits: string[] = [];
    if (!wordOk) missingBits.push(`react words ${r.wordCount} < template ${t.wordCount}`);
    if (missH2.length) missingBits.push(`H2s: ${missH2.join("; ")}`);
    if (missLinks.length) missingBits.push(`links: ${missLinks.join(", ")}`);

    const verdict = missingBits.length === 0 ? "safe" : `port first (${missingBits.join(" | ")})`;
    if (verdict === "safe") safe++;
    else portFirst++;

    rows.push({
      path: page.path,
      templateWords: t.wordCount,
      reactWords: r.wordCount,
      missingH2s: missH2,
      coveredBy,
      extraH2s: [],
      missingLinks: missLinks,
      jsonLd: `${t.jsonLd.join(", ") || "—"} vs ${r.jsonLd.join(", ") || "—"}`,
      verdict,
      switched,
    });

    process.stdout.write(".");
  }

  const lines: string[] = [
    "# Prerender parity (Phase 2b)",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Indexable routes compared: ${rows.length}`,
    `Safe: ${safe} · Port first: ${portFirst} · SSR errors counted in port-first: ${errors}`,
    `Switched to render:'react': ${rows.filter((r) => r.switched).length}`,
    "",
    "Words = visible text in #root excluding nav/header/footer/sticky call CTA.",
    "Verdict **safe** = React word count ≥ template, no uncovered template H2s, no missing internal links.",
    "CTA / EstimateForm H2s and explicitly mapped topics appear in **covered by**.",
    "",
    "| path | template words | react words | template H2s missing in react | covered by | react H2s not in template | internal links missing in react | JSON-LD types (template vs react) | verdict |",
    "| --- | ---: | ---: | --- | --- | --- | --- | --- | --- |",
  ];

  for (const row of rows) {
    lines.push(
      `| ${row.path} | ${row.templateWords} | ${row.reactWords} | ${escapeCell(row.missingH2s.join("; ") || "—")} | ${escapeCell(row.coveredBy.join("; ") || "—")} | ${escapeCell(row.extraH2s.join("; ") || "—")} | ${escapeCell(row.missingLinks.join(", ") || "—")} | ${escapeCell(row.jsonLd)} | ${escapeCell(row.verdict)} |`,
    );
  }

  lines.push("");
  lines.push("## Switched routes (render: react)");
  lines.push("");
  for (const row of rows.filter((r) => r.switched)) {
    lines.push(`### ${row.path}`);
    lines.push(`- words: template ${row.templateWords} / react ${row.reactWords}`);
    lines.push(`- covered by: ${row.coveredBy.join("; ") || "—"}`);
    lines.push(`- missing H2s: ${row.missingH2s.join("; ") || "—"}`);
    lines.push(`- missing links: ${row.missingLinks.join(", ") || "—"}`);
    lines.push(`- JSON-LD: ${row.jsonLd}`);
    lines.push(`- verdict: ${row.verdict}`);
    lines.push("");
  }

  fs.writeFileSync(OUT, lines.join("\n"), "utf-8");
  console.log(`\nWrote ${OUT}`);
  console.log(`Safe: ${safe} · Port first: ${portFirst}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
