# SEO_RECON.md — Phase 0 (read-only)

Generated from repository source + live HTTP checks on `https://fdzconstruction.com`. No site files were changed except this report.

---

## 1. Stack

| Item | Finding |
|------|---------|
| Framework | **React 18.3.1** + **Vite 5.4.19** + **TypeScript** + **react-router-dom 6.30.1** + Tailwind / shadcn-style UI |
| Package name | `vite_react_shadcn_ts` (`package.json`) |
| Rendering | **SPA** with **static prerender** at build time (`scripts/vite-prerender-plugin.ts` writes `dist/<path>.html` and updates `dist/index.html` for `/`) |
| Hosting | **Cloudflare Pages** (evidence: `public/_redirects`, `public/_headers`, `.wrangler/` local state, comments in `src/lib/siteUrl.ts` / prerender plugin about Cloudflare 308 behavior). **No** `vercel.json`, `netlify.toml`, `nginx.conf`, `.htaccess`, `wrangler.toml`, or `Dockerfile` at repo root |
| Backend | **Supabase** (`supabase/`, `@supabase/supabase-js`) for quotes, estimates, document uploads |
| Dev | `npm run dev` → `vite` (port **8080**, `vite.config.ts`) |
| Build | `npm run build` → `vite build` (prerender runs in `closeBundle`) |
| Preview | `npm run preview` → `vite preview` |
| Tests | `npm run test` / `test:watch` (Vitest); Playwright present |

---

## 2. Routing

**How `/driveways-oklahoma-city` maps:** React Router route in `src/App.tsx` → lazy page component (e.g. `src/pages/DrivewaysOklahomaCity.tsx`). Build also emits `dist/driveways-oklahoma-city.html` from `scripts/prerender-routes.ts` + `scripts/prerender-bodies.ts` so crawlers get HTML without waiting on JS.

| URL | Lives at |
|-----|----------|
| `/` | `src/pages/Index.tsx`; prerender route `/` in `scripts/prerender-routes.ts` |
| `/oklahoma-city-concrete` | `src/App.tsx` → `<CityPage slug="oklahoma-city" />` (`src/pages/CityPage.tsx` + `src/components/CityPageTemplate.tsx`); data in `cityData["oklahoma-city"]` |
| `/driveways-oklahoma-city` | `src/pages/DrivewaysOklahomaCity.tsx` (uses `ServicePageTemplate`) |
| `/driveway-repair-oklahoma-city` | `src/pages/RepairService.tsx` + `src/content/repairPages.ts` key `driveway-repair-oklahoma-city` |
| `/patios-oklahoma-city` | `src/pages/PatiosOklahomaCity.tsx` |
| `/sidewalks-oklahoma-city` | `src/pages/SidewalksOklahomaCity.tsx` |
| `/ada-concrete-ramps-oklahoma-city` | `src/pages/ADACompliance.tsx` + `src/content/pages/ada-ramps.ts` |
| `/parking-lots-oklahoma-city` | `src/pages/ParkingLotConcrete.tsx` |
| `/concrete-parking-lot-repair-oklahoma-city` | `src/pages/ConcreteParkinglotRepair.tsx` + `src/content/pages/parking-lot-repair.ts` |
| `/industrial-concrete-repair-oklahoma-city` | `src/pages/IndustrialConcreteRepair.tsx` + `src/content/pages/industrial-repair.ts` |
| `/blog/cost-of-concrete-oklahoma-city-2026` | `src/pages/BlogPost.tsx` + `src/content/blog.ts` slug `cost-of-concrete-oklahoma-city-2026` |
| `/our-projects` | `src/pages/OurProjects.tsx` |

---

## 3. Head tags

| Tag | Where set |
|-----|-----------|
| Defaults (title, description, canonical, OG, Twitter, geo) | `index.html` (homepage defaults; geo: `geo.region=US-OK`, `geo.placename=Oklahoma City`) |
| Per-page SPA updates | `src/hooks/useSEO.tsx` — sets `document.title`, `meta[name=description]`, `link[rel=canonical]`, `og:*`, optional `noindex` |
| Prerender crawl HTML | `scripts/vite-prerender-plugin.ts` rewrites title, description, canonical, og/twitter from `scripts/prerender-routes.ts` |
| Canonical helper | `src/lib/siteUrl.ts` → `canonicalUrl()` — apex, **no trailing slash** (except `/`) |

**Model:** hybrid — shared shell in `index.html` + **per-page** via `useSEO` / page `metaTitle` props / city & repair **data files** / prerender **route table**. Not a single CMS data file for everything.

**Note:** SPA titles/descriptions often differ from prerender-route titles (see Risks). Geo tags are only in `index.html` (not rewritten per page in prerender).

---

## 4. Trailing slashes

| Source | Config |
|--------|--------|
| Vite / React Router | No `trailingSlash` option (SPA). Routes defined **without** trailing slash |
| Canonicals | No trailing slash (`canonicalUrl`) |
| Cloudflare Pages | `public/_redirects`: `/:page/ → /:page` **301**; `/blog/:slug/ → /blog/:slug` **301** |
| Prerender output | `path.html` (not `path/index.html`) so `/path` is **200** without Cloudflare directory 308 (`scripts/vite-prerender-plugin.ts`, `src/lib/siteUrl.ts`) |

**Prediction for `/driveways-oklahoma-city/` today:** **301** → `/driveways-oklahoma-city` (then **200**).

**Live check (2026-09-29):** `curl -sI https://fdzconstruction.com/driveways-oklahoma-city/` → `301` `Location: /driveways-oklahoma-city`; non-slash → `200`.

---

## 5. Redirects

### HTTP redirects — `public/_redirects` (Cloudflare Pages)

| From | To | Status |
|------|-----|--------|
| `/dock-leveler-pits-oklahoma-city` (+ `/`) | `/dock-leveler-pit-concrete-oklahoma-city` | 301 |
| `/truck-courts-oklahoma-city` (+ `/`) | `/truck-court-concrete-oklahoma-city` | 301 |
| `/warehouse-floor-replacement-oklahoma-city` (+ `/`) | `/warehouse-slab-repair-oklahoma-city` | 301 |
| `/equipment-foundations-oklahoma-city` (+ `/`) | `/equipment-pad-concrete-oklahoma-city` | 301 |
| `/ada-ramps-oklahoma-city` (+ `/`) | `/ada-concrete-ramps-oklahoma-city` | 301 |
| `/dumpster-pads-oklahoma-city` (+ `/`) | `/dumpster-pad-concrete-oklahoma-city` | 301 |
| `/commercial-curb-gutter-oklahoma-city` (+ `/`) | `/commercial-curb-and-gutter-oklahoma-city` | 301 |
| `/blog/cost-of-concrete-oklahoma-city` (+ `/`) | `/blog/cost-of-concrete-oklahoma-city-2026` | 301 |
| `/concrete-driveways` (+ `/`) | `/driveways-oklahoma-city` | 301 |
| `/concrete-slabs` (+ `/`) | `/patios-oklahoma-city` | 301 |
| `/stamped-concrete` (+ `/`) | `/patios-oklahoma-city` | 301 |
| `/concrete-patio-okc` (+ `/`) | `/patios-oklahoma-city` | 301 |
| `/concrete-foundations` (+ `/`) | `/foundations-oklahoma-city` | 301 |
| `/retaining-walls` (+ `/`) | `/retaining-walls-oklahoma-city` | 301 |
| `/concrete-sidewalks` (+ `/`) | `/sidewalks-oklahoma-city` | 301 |
| `/curb-and-gutter` (+ `/`) | `/sidewalks-oklahoma-city` | 301 |
| `/curb-gutter` (+ `/`) | `/sidewalks-oklahoma-city` | 301 |
| `/parking-lot-concrete` (+ `/`) | `/parking-lots-oklahoma-city` | 301 |
| `/commercial-concrete-slabs` (+ `/`) | `/commercial-concrete-oklahoma-city` | 301 |
| `/driveway-repair` (+ `/`) | `/driveway-repair-oklahoma-city` | 301 |
| `/foundation-repair` (+ `/`) | `/foundation-repair-oklahoma-city` | 301 |
| `/blog/:slug/` | `/blog/:slug` | 301 |
| `/:page/` | `/:page` | 301 |
| `/admin`, `/admin/`, `/admin/*` | `/index.html` | **200** (SPA rewrite) |
| `/quote/:id` | `/quote` | **200** (SPA rewrite) |

### Client-side redirects — `src/App.tsx` (`<Navigate replace />`)

Same legacy→canonical pairs as above (SPA in-app navigation). These are **not** HTTP status codes by themselves; HTTP 301s for those paths are provided by `_redirects` where listed.

---

## 6. Sitemap and robots

| File | How produced |
|------|----------------|
| `public/sitemap.xml` | **Hand-maintained static file** (copied to dist). Not generated by a build script found in `package.json` |
| `public/robots.txt` | Static: `Allow: /`, `Disallow: /admin`, `Sitemap: https://fdzconstruction.com/sitemap.xml` |

**Trailing slashes in sitemap:** **No** (except homepage `https://fdzconstruction.com/`). Example: `https://fdzconstruction.com/driveways-oklahoma-city`.

---

## 7. Internal links with a trailing slash

Grep of source (`src/`, `scripts/`, `public/` HTML/XML/TS/TSX) for `href` / `to` / `fdzconstruction.com/...` paths ending in `/` (excluding bare `/`):

**None found.**

(Only `https://fdzconstruction.com/` homepage canonical / sitemap loc uses a trailing slash.)

---

## 8. Historical sidewalk / cement / ADA URLs

Beyond the two current pages (`/sidewalks-oklahoma-city`, `/ada-concrete-ramps-oklahoma-city`):

| URL / reference | Where |
|-----------------|-------|
| `/concrete-sidewalks` | Redirect → sidewalks (`App.tsx`, `_redirects`) |
| `/curb-and-gutter`, `/curb-gutter` | Redirect → sidewalks |
| `/ada-ramps-oklahoma-city` | Redirect → `/ada-concrete-ramps-oklahoma-city` |
| `/commercial-curb-gutter-oklahoma-city` | Redirect → `/commercial-curb-and-gutter-oklahoma-city` (related curb page, not sidewalk) |
| `/commercial-curb-and-gutter-oklahoma-city` | Live page (`CommercialCurbGutter.tsx`) — curb/gutter commercial |
| Mentions of “sidewalk” / “ADA” in copy | Many service pages, blog, projects, prerender bodies (content links to canonical URLs only) |
| “cement” as route | **Not found** as a URL slug. Only body copy (e.g. lime/cement treatment in `src/content/pages/soil-stabilization.ts`) |

No alternate historical sidewalk slug in `sitemap.xml` beyond current `/sidewalks-oklahoma-city`.

---

## 9. Estimate form

| Item | Finding |
|------|---------|
| Definition | **Homepage-only** `EstimateForm` inside `src/pages/Index.tsx` (not a reusable exported component yet). Companion upload: `src/components/ProjectDocumentUpload.tsx` |
| Fields (estimator) | Project type, length, width, finish; contact: name, phone, email, address, details; instant $ range from `src/lib/pricingConfig.ts` |
| Submit | `supabase.functions.invoke("submit-quote", …)` → `supabase/functions/submit-quote/index.ts` (creates quote + email; may return `accessToken` → `/quote/:id`) |
| Legacy | `supabase/functions/submit-estimate/index.ts` exists (`estimate_submissions` table) but **homepage form does not call it** |
| File upload | **Separate** `ProjectDocumentUpload`: PDF/JPG/PNG, max 5 files × 10 MB → `submit-project-documents` |
| `?from=` | `useSearchParams().get("from")` → `parseEstimateOrigin` allowlist in `src/lib/estimatePath.ts`; prefixes details; links via `estimatePath()` / `/?from=…#estimate` |
| Spam | Upload form: **honeypot** `company_website`. Estimator: validation only (required fields, email regex, details length). **No** CAPTCHA / Turnstile / rate-limit in repo for `submit-quote` |

---

## 10. Analytics

| Item | Finding |
|------|---------|
| GTM `GTM-TGRCW89C` | Loaded in `index.html` (head script + body noscript iframe) |
| `dataLayer.push` in app source | **None** beyond GTM bootstrap in `index.html` (`{'gtm.start': …}`) |

---

## 11. Structured data (JSON-LD)

| Type | Where |
|------|--------|
| `GeneralContractor` (+ OfferCatalog) | `index.html`; path-adjusted in SPA by `src/components/Layout.tsx` + `src/lib/organizationSchema.ts` |
| `FAQPage` | `src/lib/faqJsonLd.ts` / `useFaqJsonLd`; injected on pages with FAQs; also prerender via `faqJsonLdScriptTag` |
| `Service` | `ServicePageTemplate` per service page; also city page effect in `CityPage.tsx`; trade pages (sewer, HVAC, etc.) |
| Blog / Article | Not systematically present on cost article beyond site org + page FAQs where applicable |

---

## 12. Reusable components (relevant)

| Need | Component(s) |
|------|----------------|
| FAQs | `src/components/FAQ.tsx` (+ Accordion UI) |
| CTAs | `src/components/FinalCTA.tsx`, `EstimateCallLink.tsx` |
| Trust | `src/components/TrustBar.tsx`, `TrustSection.tsx`, `EeatBlock.tsx`, `TradeBadge.tsx` |
| Cards / grids | Service cards inside `ServicePageTemplate`; `ServicesFooterGrid.tsx`; `CityGrid.tsx`; shadcn `ui/card.tsx` |
| Galleries | `projectGallery` / `videoGallery` props on `ServicePageTemplate`; projects page custom markup |
| Process | `src/components/ProcessSteps.tsx` |
| Templates | `ServicePageTemplate.tsx`, `CityPageTemplate.tsx` |
| Internal links | `InternalLinksHub.tsx` |
| **Project cards** as a dedicated reusable SEO component | **Not found** (projects are page-local in `OurProjects.tsx`) |
| **Embeddable estimate form** | **Not found** (form is local to `Index.tsx`) |

---

## 13. Images

| Location | Notes |
|----------|--------|
| `src/assets/` | `commercial-concrete-foundation-okc.webp` (+ `.jpg`), `new-driveway.webp` (+ `.jpg`), `tied-rebar.webp` (+ `.jpg`) — Vite-imported (hashed in build) |
| `public/images/` | Posters + **project photos** under `public/images/projects/` |
| `public/og-image.jpg`, favicons | Social / icons |
| `public/videos/` | Project / sewer MP4s |
| Optimization | Manual WebP + JPG pairs for hero assets; Vite handles fingerprinted assets. No next/image-style CDN optimizer |

**Project photo paths in repo:**

- `public/images/projects/forklift-ramp-finished-guthrie-oklahoma.webp`
- `public/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.webp`
- `public/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.webp`
- `public/images/projects/pier-foundation-excavation-edmond-oklahoma-1.webp`
- `public/images/projects/pier-foundation-excavation-edmond-oklahoma-2.webp`
- `public/images/projects/pier-foundation-finished-edmond-oklahoma-curing.webp`
- `public/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.webp`
- `public/images/projects/pier-foundation-pour-edmond-oklahoma-crew-finishing.webp`
- `public/images/projects/poured-concrete-retaining-wall-oklahoma-city.webp`
- `public/images/projects/residential-foundation-crew-piedmont-ok.webp`
- `public/images/projects/residential-foundation-pour-piedmont-oklahoma.webp`
- `public/images/projects/sewer-line-excavation-oklahoma-city.webp`
- `public/images/poster-rosedale.webp`
- `public/images/poster-sewer-line-repair-1.webp`
- `public/images/poster-sewer-line-repair-2.webp`

Docs-only screenshots also exist under `docs/` (not site assets).

---

## 14. Page facts

Sources: SPA `metaTitle` / `useSEO` / content files for title & meta & H1; **H2 lists and approximate word counts** from prerender HTML bodies (`getPrerenderBody`) — crawler-visible static content. SPA often has **additional** H2s (template defaults like “Built for Oklahoma Soil”, “Specs & Build Standards”, FAQ heading “Common Questions From OKC Property Owners”, etc.) and higher word count.

### `/`

| Field | Value |
|-------|--------|
| Title | Concrete & Sewer Line Contractor Oklahoma City \| FDZ Construction LLC (`Index.tsx` / prerender aligned) |
| Meta | Oklahoma City concrete & sewer line contractor. One crew self-performs every job — driveways, slabs, foundations & sewer repair. Call (405) 458-4805. |
| H1 | One Crew. Concrete & Sewer Line Done Right. |
| H2 (prerender) | Concrete Services; Sewer Line Repair & Installation; Site Work Services; Why Oklahoma City Soil Matters; Service Areas |
| H2 (SPA extras, `Index.tsx`) | Built for Oklahoma / Built to Last; One Crew / Digging & Concrete Restoration; Two Core Services / One Crew; Built for Commercial Oklahoma City Sites; Site Work / Before the Concrete Goes In; Local Crew / Real Results; Recent Projects Across the Metro; We Come To You; Common Questions About Concrete & Sewer Line in OKC; Serving All of Oklahoma City Metro; Concrete Services in Oklahoma City Metro |
| Approx words | ~237 prerender body; SPA much longer (~2k+ visible) |

### `/oklahoma-city-concrete`

| Field | Value |
|-------|--------|
| Title | Concrete & Sewer Line Contractor Oklahoma City, OK \| FDZ Construction LLC |
| Meta | Concrete & sewer line contractor in Oklahoma City, OK — FDZ Construction LLC, based in Oklahoma City. Driveways, patios, slabs, foundations & sewer repair. Licensed, bonded & insured. Free estimate: (405) 458-4805. |
| H1 | Oklahoma City Concrete & Sewer Line Contractor. (SPA: `heroTitle` + accent) |
| H2 (prerender) | Oklahoma City Soil Conditions; Neighborhoods Served; Services Available in Oklahoma City; Sewer Line Repair & Installation in Oklahoma City; Our Oklahoma City Projects; FAQ |
| H2 (SPA template) | Local Knowledge / Oklahoma City Results; Built for Oklahoma City Ground; What We Pour in Oklahoma City; Sewer Line Repair & Installation in Oklahoma City; Why Oklahoma City Property Owners Choose FDZ Construction; Real Work in Oklahoma City; Common Questions About Concrete & Sewer Work in Oklahoma City; Nearby Areas We Serve (and related sewer blocks) |
| Approx words | ~739 prerender |

### `/driveways-oklahoma-city`

| Field | Value |
|-------|--------|
| Title (SPA) | Concrete Driveways Oklahoma City \| Installation & Replacement \| FDZ Construction |
| Title (prerender) | Concrete Driveways Oklahoma City \| FDZ Construction LLC **(mismatch)** |
| Meta (SPA) | Concrete driveway installation & replacement in Oklahoma City. Rebar reinforcement, 30+ year durability. Licensed & insured. Free estimates — call (405) 458-4805. |
| Meta (prerender) | Professional concrete driveway installation… **(mismatch)** |
| H1 (SPA) | Concrete Driveway Installation & Replacement in Oklahoma City, OK. |
| H1 (prerender) | Concrete Driveway Installation in Oklahoma City, OK **(mismatch)** |
| H2 (prerender) | Concrete Driveway Services in Oklahoma City; How We Install Concrete Driveways in Oklahoma City; Why Oklahoma City Homeowners and Businesses Choose FDZ; Oklahoma City Soil and Your Driveway; How Much Does a Concrete Driveway Cost in Oklahoma City?; Driveway FAQ; Related Services |
| Approx words | ~967 prerender |

### `/driveway-repair-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Concrete Driveway Repair in Oklahoma City \| FDZ Construction LLC |
| Meta | Concrete driveway repair, leveling, joint sealing, and replacement in Oklahoma City. Honest repair-vs-replace evaluation. Free on-site estimate: (405) 458-4805. |
| H1 | Concrete Driveway Repair in Oklahoma City. |
| H2 | Most Driveway Repairs Don't Solve the Real Problem; Repair or Replace? Here's How We Decide; Our Repair Scope; How a Driveway Repair Actually Runs; What Repair Actually Costs; Frequently Asked Questions; More From FDZ Construction |
| Approx words | ~1052 prerender |

### `/patios-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Patios & Stamped Concrete Oklahoma City \| FDZ Construction |
| Meta | Concrete patio, slab, and stamped concrete contractors in Oklahoma City. Broom, smooth, stamped finishes. Garage floors, shop slabs, decorative patios. Free estimate. |
| H1 (SPA) | Concrete Patios, Slabs & Stamped Concrete OKC. |
| H1 (prerender) | Patios, Slabs & Stamped Concrete in Oklahoma City **(mismatch)** |
| H2 (prerender) | Concrete Patio and Slab Services in Oklahoma City; The Stamped Concrete Process; Why Oklahoma City Homeowners and Businesses Choose FDZ; Why Sealing Matters in Oklahoma City; How Much Does a Concrete Patio Cost in Oklahoma City?; Patio FAQ; Related Services |
| Approx words | ~812 prerender |

### `/sidewalks-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Concrete Sidewalks, Curb & Gutter Oklahoma City \| FDZ Construction LLC |
| Meta | Concrete sidewalk and curb & gutter contractors in Oklahoma City. New construction, city right-of-way, ADA-compliant ramps, city-spec curb work. Free estimate: (405) 458-4805. (SPA; prerender meta omits phone — minor mismatch) |
| H1 (SPA) | Concrete Sidewalks, Curb & Gutter Oklahoma City. |
| H1 (prerender) | Sidewalks, Curb & Gutter in Oklahoma City **(mismatch)** |
| H2 (prerender) | Sidewalk, Curb, and Gutter Services in Oklahoma City; Process; Why Oklahoma City Homeowners and Businesses Choose FDZ; How Much Do Sidewalks and Curb Work Cost in Oklahoma City?; Sidewalk FAQ; Related Services |
| Approx words | ~551 prerender |

### `/ada-concrete-ramps-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | ADA Concrete Ramps Oklahoma City \| FDZ Construction |
| Meta (SPA/`ada-ramps.ts`) | ADA-compliant concrete ramps, curb cuts & accessible surfaces in Oklahoma City. Licensed contractor. Fix violations fast. Free estimates — (405) 458-4805. |
| Meta (prerender) | Slightly shorter IBC/ADA-focused wording **(mismatch)** |
| H1 (SPA) | ADA Ramps & Concrete Compliance in Oklahoma City. |
| H1 (prerender) | ADA Concrete Ramps in Oklahoma City **(mismatch)** |
| H2 (prerender) | Oklahoma City Conditions; Commercial Services; ADA Concrete Services in Oklahoma City; The ADA Compliance Process; What Makes Concrete ADA Compliant; ADA Compliance Cost Ranges; Other Commercial Concrete Services; Frequently Asked Questions |
| Approx words | ~1310 prerender |

### `/parking-lots-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Concrete Parking Lot Contractors Oklahoma City \| FDZ Construction LLC |
| Meta | Commercial concrete parking lot installation and repair in Oklahoma City. ADA-compliant layouts, 4,000+ PSI mix, curb and gutter, striping coordination. Licensed, bonded, insured. Call (405) 458-4805. |
| H1 | Concrete Parking Lot Contractors in Oklahoma City, OK. |
| H2 (prerender) | Concrete Parking Lot Services in Oklahoma City; What Property Managers and GCs Should Know; From Assessment to Finished Lot; Oklahoma City Soil and Parking Lot Longevity; Why Oklahoma City Businesses Choose FDZ for Parking Lot Work; How Much Does a Concrete Parking Lot Cost in Oklahoma City?; Parking Lot FAQ; Related Services |
| Approx words | ~1047 prerender |

### `/concrete-parking-lot-repair-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Concrete Parking Lot Repair OKC \| FDZ Construction |
| Meta | Concrete parking lot repair in Oklahoma City — panel replacement, trip hazard repair, joint sealing, crack repair, and partial slab replacement. Licensed & insured. Call (405) 458-4805. (SPA; prerender meta shorter) |
| H1 | Concrete Parking Lot Repair in Oklahoma City. |
| H2 (prerender) | Oklahoma City Conditions; Commercial Services; Parking Lot Repair Services in Oklahoma City; Parking Lot Repair Sequence; Specifications; Set Up to Work with Property Managers & GCs; When Repair Makes Sense and When It Doesn't; Other Commercial Concrete Services; Request a Repair Estimate; Frequently Asked Questions |
| Approx words | ~1510 prerender |

### `/industrial-concrete-repair-oklahoma-city`

| Field | Value |
|-------|--------|
| Title | Industrial Concrete Repair Oklahoma City \| FDZ Construction LLC |
| Meta | Industrial concrete repair in Oklahoma City — forklift damage, spalling, joint failure, dock repairs. Fast return to service. Licensed & insured. Call (405) 458-4805. |
| H1 (SPA) | Industrial Concrete Repair in Oklahoma City. |
| H1 (prerender) | Industrial Concrete Repair in Oklahoma City, OK **(minor mismatch)** |
| H2 (prerender) | Oklahoma City Conditions; Commercial Services; What We Repair; The Industrial Repair Process; Repair or Replace?; Industrial Repair Cost Ranges; Other Commercial Concrete Services; Frequently Asked Questions |
| Approx words | ~1183 prerender |

### `/blog/cost-of-concrete-oklahoma-city-2026`

| Field | Value |
|-------|--------|
| Title | Cost of Concrete in Oklahoma City 2026 \| FDZ Construction LLC |
| Meta | Typical 2026 concrete cost ranges in Oklahoma City — per square foot rates and example project totals for planning. A written estimate follows a site visit. Call (405) 458-4805. |
| H1 | Cost of Concrete in Oklahoma City (2026 Guide) |
| H2 | The Short Answer: $6–$10 Per Square Foot; What These Ranges Assume; What Makes Concrete More Expensive in OKC; Typical Project Costs in Oklahoma City (2026); Getting a Site-Specific Estimate |
| Approx words | ~407 prerender / article body |

### `/our-projects`

| Field | Value |
|-------|--------|
| Title | Our Concrete Projects \| FDZ Construction LLC |
| Meta | Browse completed concrete projects across the OKC metro. Driveways, patios, foundations, commercial pours, and retaining walls by FDZ Construction LLC. |
| H1 | Our Concrete Work Across Oklahoma. |
| H2 (SPA) | Watch Our Work In Action; Work Across the OKC Metro; Every Concrete Service OKC Homeowners Need |
| H2 (prerender labels) | Featured Projects; Recent Concrete Projects Across the Metro; Services Behind This Work |
| Approx words | ~316 prerender; SPA longer with project narratives |

---

## Risks and blockers

1. **SPA vs prerender title/H1/meta drift** on priority pages (driveways, patios, sidewalks, ADA, parking repair). Google may index prerender HTML while users/JS see different tags — Phases 1–4 must sync `prerender-routes.ts`, `prerender-bodies.ts`, and page `metaTitle`/`title` props together.
2. **Dual content pipelines** (`ServicePageTemplate` React + large `prerender-bodies.ts` HTML strings) make “one edit” easy to miss; Phase 4/5 copy changes are high-churn.
3. **Trailing-slash 301 already live** via `_redirects`; Phase 1 should verify completeness (nested paths, blog) rather than reinvent — avoid conflicting redirect rules.
4. **Estimate form is homepage-only** — Phase 2 “form on any page” requires extracting `EstimateForm` from `Index.tsx` and wiring origins; `submit-estimate` vs `submit-quote` split is confusing.
5. **Weak spam protection** on primary quote submit (no CAPTCHA); scaling lead CTAs may increase spam.
6. **No `dataLayer.push` events** for lead/`from=` — Phase 2 lead tracking may need GTM work outside the repo.
7. **Sitemap is manual** — new Phase 3–5 URLs can be omitted unless someone updates `public/sitemap.xml`.
8. **Sidewalk rankings sensitivity** — legacy aliases (`/concrete-sidewalks`, curb URLs) already 301; content changes on sidewalks must preserve internal-link equity (Phase 5 explicitly).
9. **Limited project imagery** for driveway/patio proof (Phase 4); many service pages rely on copy without dedicated photo sets.
10. **Cloudflare Pages quirks** already documented (no `/* → index.html 200`; `path.html` vs directory URLs; quote rewrite) — Phase 1 redirects must not reintroduce soft-404s.
