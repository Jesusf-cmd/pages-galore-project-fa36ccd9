# SEO Changelog — Phase 1 (Technical)

Date: 2026-09-29

## 1. Prerender vs runtime keep table

Decision rule (revised Phase 1):

- **Phase 1 retitles** (`/parking-lots-oklahoma-city`, `/industrial-concrete-repair-oklahoma-city`): use new Phase 1 values.
- **Phase 3/4 retitle candidates** (homepage, `/oklahoma-city-concrete`, driveways, patios): keep **prerender** for now; those phases change them later.
- **Every other page**: keep **prerender** (what crawlers already see). Registry + `usePageSEO` + page `<h1>` all read `src/seo/pages.ts`.

| path | prerender title / H1 (pre-unification) | runtime title / H1 (pre-unification) | kept |
|------|----------------------------------------|--------------------------------------|------|
| `/` | Concrete & Sewer Line Contractor Oklahoma City \| FDZ Construction LLC / One Crew. Concrete & Sewer Line Done Right. | (homepage SPA varied) | prerender (Phase 3/4 later) |
| `/driveways-oklahoma-city` | Concrete Driveways Oklahoma City \| FDZ Construction LLC / Concrete Driveway Installation in Oklahoma City, OK | …Installation & Replacement… / Concrete Driveway Installation & Replacement… | **prerender** |
| `/patios-oklahoma-city` | Patios & Stamped Concrete Oklahoma City \| FDZ Construction / Patios, Slabs & Stamped Concrete in Oklahoma City | same title / Concrete Patios, Slabs & Stamped Concrete OKC. | **prerender** |
| `/sidewalks-oklahoma-city` | Concrete Sidewalks, Curb & Gutter Oklahoma City \| FDZ Construction LLC / Sidewalks, Curb & Gutter in Oklahoma City | same title / Concrete Sidewalks, Curb & Gutter Oklahoma City. | **prerender** |
| `/ada-concrete-ramps-oklahoma-city` | ADA Concrete Ramps Oklahoma City \| FDZ Construction / ADA Concrete Ramps in Oklahoma City | same title / ADA Ramps & Concrete Compliance in Oklahoma City. | **prerender** |
| `/parking-lots-oklahoma-city` | Concrete Parking Lot Contractors… / Concrete Parking Lot Contractors in Oklahoma City, OK. | same | **Phase 1 new**: title `New Concrete Parking Lots in Oklahoma City \| FDZ`; H1 `Concrete Parking Lot Construction in Oklahoma City` |
| `/industrial-concrete-repair-oklahoma-city` | Industrial Concrete Repair Oklahoma City \| FDZ Construction LLC / …in Oklahoma City, OK | same title / …in Oklahoma City. | **Phase 1**: keep title + OK H1; **new description** (forklift/spall/crack/dock-face; scheduled around operations) |
| All other registry paths (70) | = prerender HTML | = or drifted toward SPA | **prerender** → now identical via registry |

Owner review: confirm the kept column, especially Phase 3/4 candidates that still use prerender wording.

## 2. seo-check — before baseline

First `--dist` run after wiring the registry (before H1 keep-table alignment):

```
FAIL  /patios-oklahoma-city
  H1: got "Patios, Slabs & Stamped Concrete in Oklahoma City"
       want "Concrete Patios, Slabs & Stamped Concrete OKC"
FAIL  /sidewalks-oklahoma-city
  H1: got "Sidewalks, Curb & Gutter in Oklahoma City"
       want "Concrete Sidewalks, Curb & Gutter Oklahoma City"

74/76 passed (2 failed)
```

Root cause: registry initially used former SPA H1s; prerender bodies already had the crawler H1s. Fixed by keeping prerender H1s in the registry (per keep rule above).

Pre-Phase-1 (from `SEO_RECON.md`): SPA `useSEO` / page props often disagreed with prerender HTML on driveways, patios, sidewalks, ADA, parking, industrial — Google saw prerender; JS hydration swapped tags.

## 3. Redirects, 404, historical URLs

### Multi-segment trailing slashes

Added above the single-segment rule in `public/_redirects`:

```
/blog/:slug/ /blog/:slug 301
/:page/ /:page 301
```

No `/* /index.html 200` catch-all (already absent). Soft-404 risk avoided.

### Client-only routes (kept; do not remove)

SPA fallbacks that must stay (not every app route is prerendered):

| rule | purpose |
|------|---------|
| `/admin`, `/admin/`, `/admin/*` → `/index.html` 200 | admin app |
| `/quote/:id` → `/quote` 200 | quote viewer (pretty URL; avoids `/index.html` 308→`/` trap) |

Stopped here for catch-all removal: those client-only routes remain; no sitewide `/*` SPA fallback was present to delete.

### Follow-up: keep admin/quote out of the index

| control | status |
|---------|--------|
| `public/_headers` `X-Robots-Tag: noindex, nofollow` on `/admin`, `/admin/*`, `/quote`, `/quote/*` | added |
| `sitemap.xml` contains `/admin` or `/quote` | none (verified) |
| `robots.txt` `Disallow: /admin` | already present; **not** Disallow `/quote/` (so crawlers can see the noindex header) |
| Registry | `/quote` is `noindex: true`; admin is not a registry/prerender route |

### Real 404s

`public/404.html` (and build output): `noindex`, links to home, key services, estimate form (`/#estimate`).

### Historical sidewalk / cement / ADA (recon item 8)

All historical URLs already 301 in `_redirects` / `App.tsx` to the two live pages or related commercial curb page. **No additional historical sidewalk/cement/ADA slugs found in code** beyond those already redirected. Cement-as-route: none found in code.

## 4. Content changes (Phase 1)

### `/parking-lots-oklahoma-city`

- Title / H1 / description: new-construction + full replacement only (no “repair” in meta).
- Former “Parking Lot Repair and Partial Replacement” → short bridge + link **concrete parking lot repair** → `/concrete-parking-lot-repair-oklahoma-city`.
- Kept **Full Parking Lot Replacement**.

### `/industrial-concrete-repair-oklahoma-city`

- Removed duplicate Commercial Services card list (`serviceCards: undefined`).
- H2 renamed to **Industrial Floor and Dock Repairs We Handle**.
- Description + intro: forklift joint, spall, crack, dock-face; scheduled around operations — no “fast return to service” / rapid-response marketing.

## 5. seo-check — after

```
npm run build
npm run seo-check -- --dist
→ 76/76 passed (0 failed)
```

Re-run after admin/quote noindex headers follow-up (2026-09-29): **76/76 passed (0 failed)** again.
Warnings only (title > 60 or description outside 140–160 on many long-tail pages; Phase 3/4 may shorten). Full transcript saved during verify as `seo-check-after.txt` then folded here:

- **PASS** including `/parking-lots-oklahoma-city` (clean title/desc/H1/canonical).
- **WARN** examples: `/` title 69; `/driveways-oklahoma-city` desc 168; `/retaining-walls-wichita` desc 161; `/builders` / `/quote` short noindex-style desc.
- Registry ↔ `dist/**/*.html` coverage: no orphans.
- Exactly one `<h1>` per checked file; LD+JSON parses; no trailing-slash internal hrefs (except `/` / `#`).

## 6. Request indexing

Submit in Google Search Console (changed or newly corrected canonicals):

1. `https://fdzconstruction.com/parking-lots-oklahoma-city`
2. `https://fdzconstruction.com/concrete-parking-lot-repair-oklahoma-city` (inbound link target from parking page)
3. `https://fdzconstruction.com/industrial-concrete-repair-oklahoma-city`
4. `https://fdzconstruction.com/blog/cost-of-concrete-oklahoma-city-2026` (slash URL should 301; confirm preferred no-slash)
5. `https://fdzconstruction.com/driveways-oklahoma-city`
6. `https://fdzconstruction.com/patios-oklahoma-city`
7. `https://fdzconstruction.com/sidewalks-oklahoma-city`
8. `https://fdzconstruction.com/ada-concrete-ramps-oklahoma-city`
9. `https://fdzconstruction.com/` (unified head tags)

Optional bulk: any other registry URL that previously showed SPA/prerender title mismatch in Search Console.

## 7. Post-deploy command (owner)

```bash
npm run seo-check -- --live https://fdzconstruction.com
```

Expects: path → 200; `path/` → one 301/308 to path; `path.html` → redirect or 404 (not 200 duplicate); blog cost article slash → no-slash; unknown path → 404.

### Live run (2026-09-29, post-deploy `f8ad2ab`)

```
PASS  /blog/cost-of-concrete-oklahoma-city-2026/ → no-slash
PASS  /this-page-should-not-exist-xyz → 404
PASS  *.html → redirect or 404 (all registry paths)
live probes done — 0 failed
```

---

# Phase 2 — Shared building blocks (2026-09-29)

## Delivered

| Block | Location |
|-------|----------|
| Projects data | `src/data/projects.ts` (12 seeded jobs; `sqft`/`year` null + `TODO(FDZ)`) |
| `ProjectCard` / `ProjectGrid` | `src/components/ProjectCard.tsx`, `ProjectGrid.tsx` |
| `TrustBar` | Updated: licensed/bonded · 8+ years · 2-year warranty · self-performing crew; Google rating slot only when `googleRating` prop set (`TODO(FDZ)` — never hard-coded) |
| `EstimateForm` | `src/components/EstimateForm.tsx` (extracted from homepage); auto `from` = current path; new optional lead fields |
| Spam | Honeypot + min 3s fill time + Turnstile behind flag in `submit-quote`; silent success on reject |
| dataLayer | `generate_lead` on form success; `phone_click` on any `tel:` (Layout) |
| LocalBusiness | `src/lib/localBusinessSchema.ts` — prerendered on `/` and `/oklahoma-city-concrete` only (`HomeAndConstructionBusiness`) |

## Notes

- Photo upload on EstimateForm skipped — `submit-quote` is JSON-only (`TODO(FDZ): enable photo upload`). Use `ProjectDocumentUpload` for files.
- Turnstile off until `VITE_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET` (`TODO(FDZ)`).
- `/our-projects` renders from `projects.ts`; three unseeded legacy cards (OKC retaining+patio combo, Yukon garage reslab, Norman RV pad) dropped to match the Phase 2 seed list.
- Estimate form markup is in prerendered HTML for `/` and `/oklahoma-city-concrete`.
- **Owner:** redeploy Supabase function `submit-quote` so honeypot / timing / Turnstile checks go live.

### Spam-check rollout (compat + logging)

- Missing `company_website` / `formStartedAt` / `turnstileToken` → **allowed** (old site + new function).
- Present honeypot filled, or `formStartedAt` present and &lt; 3s, or Turnstile token present and fails → silent success + row in `rejected_leads` (+ function log).
- Migration: `supabase/migrations/20260930010000_rejected_leads.sql`
- Review weekly: `select * from rejected_leads order by created_at desc;`

### Deploy / smoke (2026-09-29 evening)

- Site pushed (`a61abd3`, city form embed `194ee46`); Cloudflare live.
- `submit-quote` edge function redeployed.
- `rejected_leads` migration **not applied** from CLI (needs `SUPABASE_DB_PASSWORD`) — run SQL in Dashboard → SQL Editor from `supabase/migrations/20260930010000_rejected_leads.sql`. Until then, rejections still appear in **function logs**.
- Smoke:
  - Homepage browser submit → quote `d7b4b30e-…` created.
  - Legacy API payload (no spam fields) → quote **#3** (`accessToken` returned).
  - New payload with honeypot empty + aged `formStartedAt` → quote **#4**.
  - Too-fast `formStartedAt` → `{success:true}` **without** `accessToken` (silent reject).

## Verify

```
npm run build
npm run seo-check -- --dist
→ 76/76 passed (0 failed)
```

Confirmed in dist: `HomeAndConstructionBusiness` on `/` + `/oklahoma-city-concrete` only; estimate `<form>` fields present without JS.
