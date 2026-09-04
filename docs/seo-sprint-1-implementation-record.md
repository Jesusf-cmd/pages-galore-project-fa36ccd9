# FDZ SEO Sprint #1 — Deployment Record

**Implementation date:** 2026-09-04  
**Site:** https://fdzconstruction.com  
**Sprint focus:** Commercial concrete hub + commercial concrete repair authority

## Primary keyword cluster
- commercial concrete Oklahoma City / commercial concrete contractor Oklahoma City

## Secondary keyword cluster
- commercial concrete repair Oklahoma City
- concrete repair Oklahoma City
- industrial / warehouse slab repair
- parking lots, loading docks (supporting architecture)

## Routes changed (content/links; no slug changes)
- `/` (homepage commercial section)
- `/commercial-concrete-oklahoma-city`
- `/commercial-concrete-repair-oklahoma-city`
- Supporting related-link updates on parking lots, parking lot repair, loading dock repair/construction, industrial repair, warehouse slab, curb & gutter, ADA, driveway repair

## Titles changed
| Page | Before | After |
|------|--------|-------|
| Commercial hub | `Commercial Concrete Contractor Oklahoma City \| FDZ Construction LLC` | `Commercial Concrete Contractor Oklahoma City \| FDZ Construction` |
| Commercial repair | `Commercial Concrete Repair Oklahoma City \| FDZ Construction LLC` | `Commercial Concrete Repair Oklahoma City \| FDZ Construction` |

## H1s changed
| Page | Before | After |
|------|--------|-------|
| Commercial hub | React: `Commercial Concrete in Oklahoma City.` / prerender mismatched plural | `Commercial Concrete Contractor in Oklahoma City` (aligned) |
| Commercial repair | Already `Commercial Concrete Repair in Oklahoma City` | Unchanged (preserved) |

## Content sections added/improved
- Commercial hub: service architecture blocks, commercial buyer section, verified project proof, commercial estimate CTA
- Repair: problem-first hero, repair vs replacement, use cases, estimate CTA, FAQs rewritten for accuracy

## Internal links
- Homepage → commercial hub (prominent section)
- Hub ↔ repair, parking, docks, foundations, ADA/sidewalks, warehouse/industrial, projects
- Supporting strong pages → hub and/or repair (minimal related-list additions only)

## CTA changes
- Commercial: “Request a Commercial Concrete Estimate” → existing `/#estimate` + upload
- Repair: “Request a Commercial Concrete Repair Estimate” → same lead system
- No new backend/forms/fields

## Schema
- Preserved sitewide Organization/LocalBusiness in `index.html`
- Service pages continue FAQPage via ServicePageTemplate when FAQ present
- No Service/BreadcrumbList added (opt-in only; avoided stacking)
- No fabricated ratings/reviews/prices in schema

## Technical fixes
- Canonicals remain apex, no trailing slash (existing `canonicalUrl`)
- Prerender titles/H1/bodies synced for hub + repair
- Legacy soft URLs fixed where touched (`/ada-ramps-…`, `/dumpster-pads-…`, `/commercial-curb-gutter-…` → canonical slugs)
- Cloudflare email-protection: source uses `mailto:` only; no `/cdn-cgi/` links in repo

## Intentionally NOT changed
- NAP (address/phone/company name)
- URL slugs / redirects architecture
- Cloudflare/DNS/GBP/Semrush
- New city pages or keyword-variant pages
- Full rewrites of strong parking/dock/warehouse pages
- Separate commercial lead form / DB fields
- Bonding amounts, certifications, fake projects/stats

## Future work
- Confirm “8+ years” figure or replace with founding year
- Embed estimate form on commercial pages when productized
- More photo-backed commercial case studies
- Loading-dock prerender FAQ schema parity (client FAQ exists; static FAQPage may be thin)
- Star Spencer image asset mismatch on Our Projects (pre-existing)
- HSTS / Cloudflare settings (deferred, account-level)

## Build status
- `npm run build` — success (71 prerendered HTML files)
- `npm run test` — pass
- `npm run lint` — pre-existing errors only (ui/admin/supabase); no new errors from sprint files
