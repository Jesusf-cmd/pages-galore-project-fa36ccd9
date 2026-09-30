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

---

# SEO Changelog — Phase 2b Step 6 (One content pipeline + schema merge)

Date: 2026-09-30

## Routes switched to `render: 'react'` (13)

Static HTML for these paths is now React `renderToPipeableStream` output (still `createRoot` on the client — no `hydrateRoot` this phase). Head tags still come from `src/seo/pages.ts` via the prerender plugin. All other indexable routes remain `render: 'template'`.

| path | Content ported / covered |
|------|--------------------------|
| `/` | Ported **Site Work Services** (skid steer, excavator, sewer links) and **Why Oklahoma City Soil Matters** (template wording). Concrete Services / Sewer / Service Areas covered by existing React sections; CTA covered by `<EstimateForm>`. |
| `/oklahoma-city-concrete` | Ported **Oklahoma City Soil Conditions**, **Neighborhoods Served**, **Services Available in Oklahoma City** (template wording). FAQ / sewer / projects / CTA covered or EstimateForm. |
| `/driveways-oklahoma-city` | Added template internal link to `/driveway-repair-oklahoma-city`. Process / soil / Why FDZ / FAQ / Related covered by React H2s. FAQs already included template questions. |
| `/patios-oklahoma-city` | No new copy — stamped process, sealing, Why FDZ, FAQ, Related covered under React headings. |
| `/sidewalks-oklahoma-city` | No new copy — Process / Why FDZ / FAQ / Related covered under React headings. |
| `/ada-concrete-ramps-oklahoma-city` | Renamed local-expertise H2 to **Oklahoma City Conditions**; FAQ titled **Frequently Asked Questions**. Shared `adaRampsContent` already held template FAQs/body. |
| `/our-projects` | Ported **Services Behind This Work** (owner-page links). Featured PROJECTS titles surfaced so `mustContain` passes. Featured / Recent covered by React H2s. |
| `/blog` | Switch only (already safe). |
| `/blog/why-concrete-driveways-crack-oklahoma` | Switch only. |
| `/blog/cost-of-concrete-oklahoma-city-2026` | Switch only. |
| `/blog/rebar-vs-wire-mesh-concrete-slabs` | Switch only. |
| `/blog/how-thick-should-driveway-be-oklahoma` | Switch only. |
| `/blog/best-time-of-year-to-pour-concrete-okc` | Switch only. |

Also: FAQ accordion answers stay in the HTML when collapsed; FAQPage JSON-LD is SSR-emitted from `<FAQ>` and hoisted to `<head>`.

## Schema merge — one business entity

**Problem:** Every page had a `GeneralContractor` (`#organization`) from `index.html`, and `/` + `/oklahoma-city-concrete` also had a separate `HomeAndConstructionBusiness` (`#localbusiness`).

**Fix:** Merge into one `GeneralContractor` node:

- `@id`: `https://fdzconstruction.com/#business`
- Combined fields: name, url, telephone, email, image, logo, priceRange, description, address (city-level), openingHoursSpecification, sameAs (Facebook + Maps; TODO(FDZ) for GBP/BBB), areaServed, hasOfferCatalog
- Full node emitted **only** on `/` and `/oklahoma-city-concrete`
- Other pages: entity omitted; Service / provider refs use `{"@id":"https://fdzconstruction.com/#business"}`
- FAQPage blocks unchanged
- `seo-check --dist` fails if any page has more than one LocalBusiness-type node

## Request indexing (after deploy)

Start with (Search Console daily quota):

1. `/`
2. `/driveways-oklahoma-city`
3. `/patios-oklahoma-city`
4. `/sidewalks-oklahoma-city`
5. `/blog/cost-of-concrete-oklahoma-city-2026`

Then the rest of the switched set:

6. `/oklahoma-city-concrete`
7. `/ada-concrete-ramps-oklahoma-city`
8. `/our-projects`
9. `/blog`
10. `/blog/why-concrete-driveways-crack-oklahoma`
11. `/blog/rebar-vs-wire-mesh-concrete-slabs`
12. `/blog/how-thick-should-driveway-be-oklahoma`
13. `/blog/best-time-of-year-to-pour-concrete-okc`

## Post-deploy checks

```
npm run seo-check -- --live https://fdzconstruction.com
```

- Search Console → URL Inspection on `/` and `/driveways-oklahoma-city` → Test live URL → View tested page (full copy in HTML).
- Google Rich Results Test on `/` → one business, no errors.
- Request indexing for the list above (quota-aware).

## Verify (this step)

```
npm run build
npm run seo-check -- --dist
→ 76/76 passed (0 failed); ≤1 LocalBusiness-type node per page
```

# SEO Changelog — Phase 3 (Homepage for "concrete contractors OKC")

Date: 2026-09-30

## Goal

One strong homepage targeting: concrete contractors okc / oklahoma city, concrete companies okc / oklahoma city. `/oklahoma-city-concrete` retargeted as the service-area page (no longer competing for those head terms). Net homepage word budget ≤ ~2,600 (restructure, not bulk).

## Head tags

| path | title | H1 | meta notes |
|------|-------|----|------------|
| `/` | Concrete Contractors in Oklahoma City, OK \| FDZ Construction | Concrete Contractors in Oklahoma City | 149 chars; uses "concrete company" once |
| `/oklahoma-city-concrete` | Concrete Services Across Oklahoma City \| FDZ Construction | Concrete Services Across Oklahoma City | Removed "concrete contractors" / "concrete company" from title, H1, and meta |

## Homepage section merges

| Prior section (job) | Phase 3 treatment |
|---------------------|-------------------|
| Two Core / residential vs commercial service grids | **Merged into** Buyer paths (`Two Paths. One Self-Performing Crew.`) with descriptive owner + commercial links |
| We Come To You / service-area copy + CityGrid | **Edited in place** — kept CityGrid; added "Oklahoma City service area" link + required owner/commercial/sewer/projects links |
| Recent projects / ad-hoc project cards | **Replaced by** `<ProjectGrid>` (ids: guthrie-forklift-ramp → okc-retaining-wall) + link to `/our-projects` |
| Why Oklahoma City Soil Matters | **Folded into** buyer-guide point 1 (base prep on expansive red clay) |
| About / EEAT / Why Us blocks | **Removed** — trust facts live in hero + TrustBar + buyer-guide warranty/license points |
| Estimate CTA / `#estimate` | **Kept** — `<EstimateForm>` still mounts at `#estimate` so `/?from=…#estimate` works |
| Site Work Services | **Kept** (skid steer / excavator / sewer) |

New (not a duplicate of an existing section): buyer guide H2 *How to choose a concrete contractor in Oklahoma City* (5 short points; rebar vs mesh links to `/blog/rebar-vs-wire-mesh-concrete-slabs`).

## `/oklahoma-city-concrete`

- Kept local soil, neighborhoods, services, FAQ content.
- Near top: sentence linking to homepage with anchor **concrete contractors in Oklahoma City**.
- Added `<ProjectGrid ids={["okc-retaining-wall"]}>` — // TODO(FDZ): add another OKC project (only 1 city project today).
- Same single `#business` GeneralContractor node — no second business schema.

## Schema

Unchanged from Phase 2b: one `GeneralContractor` `@id` `https://fdzconstruction.com/#business` on `/` and `/oklahoma-city-concrete` only.

## Verify

```
npm run build:ssr
npm run build
npm run seo-check -- --dist
→ 76/76 passed (0 failed); one H1 on `/` and `/oklahoma-city-concrete`
```

Homepage `<main>` ~1,290 words (under ~2,600 budget).

## Request indexing (after deploy)

Priority (Search Console quota):

1. `/`
2. `/oklahoma-city-concrete`
3. `/driveways-oklahoma-city`
4. `/patios-oklahoma-city`
5. `/commercial-concrete-oklahoma-city`

Then related supporting URLs as quota allows:

6. `/sidewalks-oklahoma-city`
7. `/foundations-oklahoma-city`
8. `/our-projects`
9. `/blog/rebar-vs-wire-mesh-concrete-slabs`

---

# SEO Changelog — Unpublish GC trade pages

Date: 2026-09-30

## Removed from the live site

FDZ published services are concrete, sewer line, skid steer, and excavator only. These routes are gone (real 404 after deploy):

| path | disposition |
|------|-------------|
| `/hvac-oklahoma-city` | Removed from App, `pages.ts` / registry, prerender routes & bodies |
| `/plumbing-oklahoma-city` | same |
| `/electrical-oklahoma-city` | same |
| `/emergency-services-oklahoma-city` | same |

Page components moved to `src/_archive/gc-pages/` (README: unpublished; do not re-route without verified licenses). Nothing imports them.

## Also cleaned

- `UNPUBLISHED_ROUTE_PATHS` now only `/our-approach` (GC paths removed from that list — they are fully unpublished, not soft-hidden).
- `/our-approach` copy/title/meta/prerender body rewritten: no HVAC / plumbing / electrical / 24/7 multi-trade claims; self-performed concrete, sewer, skid steer, excavator only.
- `seo-check --live` probes: the four paths must return **404**.
- Sitemap / llms.txt / LocalBusiness `hasOfferCatalog` already excluded these (noindex / never listed).

Kept: sewer page “plumbing-only bids” comparison copy. Concrete equipment-pad mentions of HVAC pads (pads for someone else’s equipment) unchanged.

## Verify

```
npm run build:ssr
npm run build
npm run seo-check -- --dist
→ expect 72/72 (registry shrunk by 4)
```

## After deploy

```
npm run seo-check -- --live https://fdzconstruction.com
```

Confirm the four retired paths PASS as 404.

**Cache note:** Origin and `*.pages.dev` return 404 immediately. If `fdzconstruction.com` still shows old 200 HTML, purge those four URLs (or Purge Everything) in Cloudflare → Caching. `_headers` now forces `max-age=0, must-revalidate` on `/*` so this does not stick for a week again.

### Search Console (owner)

1. Pages → filter/search for “hvac”, “plumbing”, “electrical”, “emergency”.
2. If any of those URLs were indexed → Removals → New request for each.

---

# SEO Changelog — Phase 4 (Driveway & patio near-wins)

Date: 2026-09-30

## Goal

Retarget `/driveways-oklahoma-city` and `/patios-oklahoma-city` for near-win contractor / stamped keywords. Add proof (ProjectGrid), driveway spec table, stamped consolidation, FAQ honesty, on-page EstimateForm — without growing past post-2b React baselines (~2,820 driveways / ~2,490 patios).

## Head tags

| path | title | H1 | meta |
|------|-------|----|------|
| `/driveways-oklahoma-city` | Concrete Driveway Contractors Oklahoma City \| FDZ | Concrete Driveway Contractors in Oklahoma City | Leads with “concrete driveway contractors… replacement and installation”; 2-year warranty |
| `/patios-oklahoma-city` | Stamped Concrete & Patios in Oklahoma City \| FDZ | Concrete Patio & Stamped Concrete Contractors in Oklahoma City | Leads with stamped concrete and patios in OKC |

Both remain `render: "react"`. Registry synced from `src/seo/pages.ts`.

## Driveways changes

- H2 **Our driveway spec** (thickness, rebar/mesh by soil/load, compacted gravel, joints 8–10 ft, broom standard, 3/7/28-day cure).
- **Recent driveway projects** → `<ProjectGrid service="driveways">` featuring `edmond-driveway`.
- Gallery slot present in code with empty photos (renders nothing); `TODO(FDZ): add 6–10 driveway photos`.
- **Repair or replace your driveway?** with repair vs replace columns + link anchor **driveway repair**.
- FAQ: merged permit questions; added color-match (commercial-repair wording) and old-driveway removal (already claimed on page).
- Links: **stamped concrete** → patios; **concrete driveway cost in OKC** → cost article; **our projects**.
- `<TrustBar>` under H1 intro; `<EstimateForm>` at `#estimate` (replaces homepage form link-out).
- Cut overlapping Why FDZ / soil / Get Started / serviceCards bulk for word budget.

## Patios changes

- H2 **Stamped concrete in OKC** consolidates pattern / color-release / sealing / freeze-thaw (patterns already named + Ashlar Slate from Norman).
- **Recent patio projects** → `<ProjectGrid>` ids `norman-stamped-patio` (Stamped) + `moore-patio` (Broom finish).
- Pattern gallery slot empty + `TODO(FDZ): add stamped pattern photos labeled by pattern name`.
- Example size table 12×12 / 16×20 with broom $6–$10 and stamped $15–$22 ranges from cost guide; **Get a price for this size** → `#estimate`.
- Links: **concrete driveways**; **concrete patio cost in Oklahoma City**; **our projects**.
- Same TrustBar + EstimateForm placement. No separate stamped-concrete OKC page.

## Word counts (parity method: `#root` minus nav/header/footer)

| path | post-2b baseline | Phase 4 | status |
|------|------------------|---------|--------|
| `/driveways-oklahoma-city` | ~2,820 | **1,848** | ≤ baseline |
| `/patios-oklahoma-city` | ~2,490 | **1,638** | ≤ baseline |

## Verify

```
npm run build
npm run seo-check -- --dist
→ 72/72 passed (0 failed)
```

## Request indexing (after deploy)

Priority (Search Console quota):

1. `/driveways-oklahoma-city`
2. `/patios-oklahoma-city`
3. `/blog/cost-of-concrete-oklahoma-city-2026`
4. `/our-projects`
5. `/driveway-repair-oklahoma-city`

Then as quota allows:

6. `/`
7. `/oklahoma-city-concrete`
8. `/sidewalks-oklahoma-city`

---

# SEO Changelog — Phase 5 (Internal links, cost article, sidewalks)

Date: 2026-09-30

## Goal

Strengthen the cost article as a hub to owner pages; protect sidewalk rankings with light proof/FAQ/form; add exact internal links from blogs, ADA, sidewalks, and Yukon.

## Cost article (`/blog/cost-of-concrete-oklahoma-city-2026`)

- Title / H1 unchanged.
- Comparison table under intro (Driveway, Patio broom, Stamped patio, Sidewalk, Foundation, Commercial repair).
- Kept existing estimate CTAs (`/?from=cost-of-concrete-oklahoma-city-2026#estimate`) — allowlisted origin already on site; did **not** add a second `<EstimateForm>` (brief’s `cost-article` alias not used).
- Visible **Updated September 2026**; author line; Article JSON-LD with `dateModified`.
- `<ProjectGrid ids={["edmond-driveway","norman-stamped-patio"]}>` under **Real projects behind these prices**.
- All prior H2s kept.

## Sidewalks / ADA

- Sidewalks: one natural “cement sidewalk” synonym; FAQ + FAQPage JSON-LD for cement vs concrete; Recent sidewalk projects grid; ADA link anchor **ADA ramps and accessible routes**; on-page `<EstimateForm>` (replaced Get Started link-out).
- Title / H1 / meta / existing H2s unchanged on sidewalks.
- ADA: ProjectGrid `star-spencer-hs` + `edmond-row-sidewalk`; link anchor **sidewalk replacement**.

## Yukon

- `/yukon-oklahoma-concrete` stays `render: 'template'`.
- Link **commercial parking lot in Yukon** added in shared `yukonConcrete.intro` (React CityPage + `scripts/prerender-bodies.ts` template body both use that string).

## Internal links added/retargeted

| From | Anchor | To |
|------|--------|-----|
| Cost article | concrete driveway contractors in OKC | `/driveways-oklahoma-city` |
| Cost article | stamped concrete patios | `/patios-oklahoma-city` |
| Cost article | concrete sidewalk replacement | `/sidewalks-oklahoma-city` |
| Driveway-crack blog | concrete driveways in Oklahoma City | `/driveways-oklahoma-city` |
| Rebar-vs-wire-mesh blog | concrete driveways in Oklahoma City | `/driveways-oklahoma-city` |
| ADA ramps | sidewalk replacement | `/sidewalks-oklahoma-city` |
| Sidewalks | ADA ramps and accessible routes | `/ada-concrete-ramps-oklahoma-city` |
| Yukon (intro) | commercial parking lot in Yukon | `/parking-lots-oklahoma-city` |

No source rows skipped.

## Numbers in new copy (provenance)

| Number / phrase | Already on site |
|-----------------|-----------------|
| $6–$10 / sq ft | Cost article short answer; homepage |
| $15–$22 / sq ft | Cost article short answer; homepage FAQ |
| $9–$14 / sq ft | Cost article short answer |
| Priced on site visit (sidewalk, commercial repair) | Sidewalk/commercial pages have no single overview $/sq ft — `TODO(FDZ)` in table code |

## Word counts (parity method)

| path | before | after | limit |
|------|--------|-------|-------|
| Cost article | 740 | 891 | n/a (grew by table/proof/schema) |
| `/sidewalks-oklahoma-city` | 2,000 | 2,104 | ≤ +10% (2,200) |
| `/ada-concrete-ramps-oklahoma-city` | 1,918 | 1,964 | n/a |

## Verify

```
npm run build
npm run seo-check -- --dist
→ 72/72 passed (0 failed)
```

## Request indexing (after deploy)

1. `/blog/cost-of-concrete-oklahoma-city-2026`
2. `/sidewalks-oklahoma-city`
3. `/ada-concrete-ramps-oklahoma-city`
4. `/driveways-oklahoma-city`
5. `/patios-oklahoma-city`
6. `/yukon-oklahoma-concrete`
7. `/blog/why-concrete-driveways-crack-oklahoma`
8. `/blog/rebar-vs-wire-mesh-concrete-slabs`
9. `/parking-lots-oklahoma-city`

