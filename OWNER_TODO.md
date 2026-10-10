# Owner TODO — Phase 6 hand-off

Items marked `TODO(FDZ)` in source. None of this text appears in built HTML (verified Phase 6).

## Photos

| File | Line | Needed |
|------|------|--------|
| `src/pages/DrivewaysOklahomaCity.tsx` | 97 | Add 6–10 driveway photos for the gallery slot |
| `src/pages/PatiosOklahomaCity.tsx` | 86 | Add stamped pattern photos labeled by pattern name |
| `src/pages/OurProjects.tsx` | 258 | Project photo placeholder |
| `src/components/ProjectCard.tsx` | 24 | Fallback when a project has no images |
| `src/data/projects.ts` | 44 | Star Spencer — replace with school-specific images when available |
| `src/data/projects.ts` | 202 | `edmond-driveway` — photos |
| `src/data/projects.ts` | 216 | `norman-stamped-patio` — photos |
| `src/data/projects.ts` | 244 | `mustang-foundation` — photos |
| `src/data/projects.ts` | 258 | `moore-patio` — photos |
| `src/data/projects.ts` | 272 | `edmond-row-sidewalk` — photos |
| `src/pages/CityPage.tsx` | 121 | Add another OKC city project id (grid currently has 1) |

## Facts and specs

| File | Line | Needed |
|------|------|--------|
| `src/data/projects.ts` | 53–54 | Confirm `sqft` / `year` for Star Spencer (or leave null) |
| `src/data/projects.ts` | 75–76 | Confirm 10,000 sq ft figure for structured data / year |
| `src/data/projects.ts` | 104–105, 127–128, 166–167, 189–190, 203–204, 217–218, 231–232, 245–246, 259–260, 273–274 | Confirm `sqft` / `year` (several have candidate figures in comments) |
| `src/components/TrustBar.tsx` | 6 | Set `googleRating` only after a verified Google Business Profile rating is confirmed (never invent) |
| `src/components/CityPageTemplate.tsx` | 269 | Reminder: when `projectIds.length < 2`, leave TODO at call site |

## Prices

| File | Line | Needed |
|------|------|--------|
| `src/pages/BlogPost.tsx` | 43 | Publish a typical $/LF or $/sq ft sidewalk range for the cost-article overview table |
| `src/pages/BlogPost.tsx` | 58 | Pick one typical commercial-repair band for the cost-article overview table |

## URLs and accounts

| File | Line | Needed |
|------|------|--------|
| `src/lib/localBusinessSchema.ts` | 74 | Add `streetAddress` only if a public address is intentionally published again |
| `src/lib/localBusinessSchema.ts` | 87 | Confirm Google Business Profile URL; add BBB `sameAs` when claimed |
| `src/components/EstimateForm.tsx` | 38, 201 | Set `VITE_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET` to enable Turnstile |
| `supabase/functions/submit-quote/index.ts` | 67 | Set `TURNSTILE_SECRET` to enforce server-side Turnstile |
| `src/components/EstimateForm.tsx` | 484 | Enable photo upload when `submit-quote` accepts files |
| `src/lib/estimateFormHtml.ts` | 72 | Same photo-upload enablement for template HTML form |

## Dist visibility check

```
rg "TODO\(FDZ\)" dist -g "*.html"
→ no matches (Phase 6)
```
