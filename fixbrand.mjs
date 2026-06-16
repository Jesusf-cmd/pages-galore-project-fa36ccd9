import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = process.cwd();
const TARGET_DIRS = ["src", "scripts", "supabase/functions"];
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".html"]);

// Targeted, safe replacements only. Deliberately does NOT touch URLs that
// contain "redwood" (Google Maps embed, review link, schema logo image).
const replacements = [
  { from: /Why Choose Redwood/g, to: "Why Choose FDZ" },
  { from: /Why Redwood/g, to: "Why FDZ" },
  { from: /REDWOOD CONSTRUCTION/g, to: "FDZ CONSTRUCTION" },
  { from: /Redwood was the most knowledgeable/g, to: "FDZ was the most knowledgeable" },
  { from: /redwood-quotes-/g, to: "fdz-quotes-" },
  { from: /Redwood-Construction-Quote-/g, to: "FDZ-Construction-Quote-" },
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const s = statSync(full);
    if (s.isDirectory()) {
      if (entry === "node_modules" || entry === "dist") continue;
      walk(full, out);
    } else if (EXTS.has(extname(full))) {
      out.push(full);
    }
  }
  return out;
}

const files = [];
for (const d of TARGET_DIRS) {
  try {
    walk(join(ROOT, d), files);
  } catch {
    /* dir may not exist */
  }
}

let changedFiles = 0;
let totalHits = 0;
for (const file of files) {
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  let updated = text;
  let fileHits = 0;
  for (const { from, to } of replacements) {
    const m = updated.match(from);
    if (m) fileHits += m.length;
    updated = updated.replace(from, to);
  }
  if (updated !== text) {
    writeFileSync(file, updated, "utf8");
    changedFiles++;
    totalHits += fileHits;
    console.log(`  ${file.replace(ROOT, ".")}  (${fileHits})`);
  }
}
console.log(`\nDone. ${totalHits} replacements across ${changedFiles} files.`);
