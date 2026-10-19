# Phase 1 verification — Wichita customer journey

**Branch:** `feature/wichita-customer-journey`  
**Base SHA:** `935998cd6536b65af99218307c28092df0adcd79` (merge of PR #40)  
**Final commit SHA:** `62326a71f9c33b6e76541ddf1a0bec04155d2b3b`  
**Worktree:** `C:\Users\jesus\fdz-construction-wichita-journey`  
**Stop point:** local implementation, verification, and commit only — not pushed, no PR, no deploy, no Phase 2.

## Working-tree status (after commit)

```
## feature/wichita-customer-journey...origin/main [ahead 1]
?? .preview-evidence/desktop-wichita-hub-commercial-from.png
?? .preview-evidence/mobile-wichita-menu-wichita-first.png
?? .preview-evidence/tablet-900-wichita-industrial-from.png
?? phase1.diff
?? phase1-verification.md
```

Review exports and preview screenshots are intentionally untracked (outside the commit).

## Changed files and reasons

| File | Reason |
|---|---|
| `src/lib/estimatePath.ts` | Kansas origins → Wichita hub `?from=#estimate`; `estimateOriginForLocation` / `estimatePathForLocation` preserve hub query origins |
| `src/lib/kansasProjectLinks.ts` | Explicit Wichita hub project-card service-link overrides |
| `src/components/Navbar.tsx` | Kansas primary nav (Wichita services first); Oklahoma grouped; regional Home/Get Quote |
| `src/components/Footer.tsx` | Kansas estimate destinations via shared helpers |
| `src/components/Logo.tsx` | `region` prop; “SERVING WICHITA, KS.” + matching accessible name |
| `src/components/EstimateForm.tsx` | Kansas phone placeholder → `Your phone number` |
| `src/components/ProjectCard.tsx` | Apply Kansas service-link overrides under Kansas presentation |
| `scripts/vite-prerender-plugin.ts` | Prerendered Kansas Home + estimate destinations match React |
| `src/test/estimate-path.test.ts` | Hub destinations, location helpers, origin attribution |
| `src/test/kansas-project-links.test.ts` | Kansas vs Oklahoma project-card link behavior |
| `src/test/regional-home-nav.test.tsx` | Regional Home/logo, menu close, origin-preserving Get Quote |
| `src/test/wichita-homepage.test.tsx` | Hub estimate panel / Kansas presentation |
| `src/test/phase6-form-tracking.test.tsx` | Placeholder + mocked Kansas inquiry expectations |

## Route-by-route estimate destinations (before → after)

| Origin / context | Before | After |
|---|---|---|
| Wichita hub | `/?from=concrete-contractors-wichita-ks#estimate` | `/concrete-contractors-wichita-ks?from=concrete-contractors-wichita-ks#estimate` |
| Commercial | `/?from=commercial-concrete-wichita#estimate` | `/concrete-contractors-wichita-ks?from=commercial-concrete-wichita#estimate` |
| Industrial | `/?from=industrial-concrete-wichita#estimate` | `/concrete-contractors-wichita-ks?from=industrial-concrete-wichita#estimate` |
| Retaining walls | `/?from=retaining-walls-wichita#estimate` | `/concrete-contractors-wichita-ks?from=retaining-walls-wichita#estimate` |
| Stamped concrete | `/?from=stamped-concrete-wichita#estimate` | `/concrete-contractors-wichita-ks?from=stamped-concrete-wichita#estimate` |
| Hub + valid `?from=` (subsequent CTAs) | Could drop to root OKC chrome | Preserves originating `from` on hub |
| Direct hub (no query) | Hub chrome; origin from pathname | Unchanged intent — hub origin retained |
| Legacy `/?from=<Kansas-origin>#estimate` | Worked on root | Still functional (allowlist); no new redirects |
| Oklahoma origins | `/?from=<ok-origin>#estimate` | Unchanged |

Canonicals remain bare production URLs (no query/hash), verified in prerender HTML for all five Kansas routes.

## Commands and results

### Focused suites

```
npx vitest run src/test/estimate-path.test.ts src/test/regional-home-nav.test.tsx src/test/kansas-project-links.test.ts src/test/wichita-homepage.test.tsx src/test/phase6-form-tracking.test.tsx
```

- **Exit code:** `0`
- **Result:** 5 files / 77 tests passed

### Production build

```
npm run build
```

- **Exit code:** `0`
- **Result:** SSR + client build OK; `[prerender] Generated 73 static HTML files.`

### Unrelated baseline title-parity

No title-parity suite was re-run as a gate for this phase. Known prerender/title-parity baseline issues outside these five Kansas routes are unchanged by this commit and are **not** attributed to Phase 1. Document separately if a full `prerender-parity` / SEO title sweep is required later.

## Mocked inquiry and upload-origin evidence

### Kansas inquiry (`phase6-form-tracking.test.tsx`)

Legacy root entry `/?from=concrete-contractors-wichita-ks#estimate` still drives the Kansas panel:

- Invokes `submit-estimate-inquiry` (not priced `submit-quote`)
- `body.from === "concrete-contractors-wichita-ks"`
- Details include structured origin prefix; no invented prices/dimensions (`estimateLow` / `lengthFt` / `sqft` absent)
- Phone placeholder asserted as `Your phone number`
- Confirmation requires a saved `inquiryId`

### Document-upload attribution (`estimate-path.test.ts`)

`applyEstimateOriginToDetails("stamped-concrete-wichita", …)` retains `Requested from /stamped-concrete-wichita…` — same helper used by `ProjectDocumentUpload` when appending `details` for `submit-project-documents`. No live uploads performed.

## Preview evidence (local `vite preview` on `:4179`)

| Evidence | Path |
|---|---|
| Desktop hub + commercial `from` + form context | `.preview-evidence/desktop-wichita-hub-commercial-from.png` |
| Mobile menu — Wichita services first, Oklahoma grouped | `.preview-evidence/mobile-wichita-menu-wichita-first.png` |
| Intermediate ~900px — industrial `from`, placeholder, logo line | `.preview-evidence/tablet-900-wichita-industrial-from.png` |

Observed live:

- Logo texts include `SERVING WICHITA, KS.`; aria-label `FDZ Construction LLC — Serving Wichita, KS`
- Form banner: industrial origin context preserved; phone placeholder `Your phone number`
- Quote href preserved `from=industrial-concrete-wichita` on hub
- Canonical bare `https://fdzconstruction.com/concrete-contractors-wichita-ks`
- Project cards: industrial / retaining / stamped explore links; unmatched scopes → Wichita inquiry
- OKC `/`: Oklahoma logo line, Home `/`, estimate `/#estimate`, `tel:4054584805`

No live form submits, uploads, calls, or notification sends.

## Limitations

- Kansas project-type select still defaults to `commercial` for all Kansas origins; service context is carried by origin label + details prefix (pre-existing; not redesigned this phase).
- Cloudflare preview vs production Supabase project mismatch left unchanged.
- PR #41 / industrial SEO branch untouched.
- Not pushed; no PR opened; not deployed.
