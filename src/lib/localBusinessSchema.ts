/**
 * HomeAndConstructionBusiness JSON-LD for homepage and /oklahoma-city-concrete only.
 * Must appear in prerendered HTML (seo-check --dist parses it).
 */

import { SITE_ORIGIN } from "./siteUrl";

/** Metro cities served — matches the public service-area list. */
export const LOCAL_BUSINESS_CITIES = [
  "Oklahoma City",
  "Edmond",
  "Norman",
  "Moore",
  "Yukon",
  "Mustang",
  "Midwest City",
  "Del City",
  "Stillwater",
] as const;

export const LOCAL_BUSINESS_PATHS = new Set(["/", "/oklahoma-city-concrete"]);

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: "FDZ Construction LLC",
    url: SITE_ORIGIN,
    telephone: "+14054584805",
    // City-level only — street address was removed from public pages.
    // TODO(FDZ): add streetAddress only if a public address is intentionally published again.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
    areaServed: LOCAL_BUSINESS_CITIES.map((name) => ({
      "@type": "City",
      name,
      addressRegion: "OK",
    })),
    // TODO(FDZ): Google Business Profile URL, Facebook, BBB
    sameAs: [] as string[],
    // Do not add aggregateRating.
  };
}

export function localBusinessJsonLdScriptTag(): string {
  const json = JSON.stringify(buildLocalBusinessJsonLd()).replace(/</g, "\\u003c");
  return `<script type="application/ld+json" id="fdz-localbusiness-jsonld">${json}</script>`;
}

/** Sync LocalBusiness JSON-LD in the SPA for the two allowed paths only. */
export function syncLocalBusinessJsonLd(pathname: string, doc: Document = document): void {
  const existing = doc.getElementById("fdz-localbusiness-jsonld");
  if (!LOCAL_BUSINESS_PATHS.has(pathname)) {
    existing?.remove();
    return;
  }
  const script =
    existing instanceof HTMLScriptElement
      ? existing
      : (() => {
          const el = doc.createElement("script");
          el.type = "application/ld+json";
          el.id = "fdz-localbusiness-jsonld";
          doc.head.appendChild(el);
          return el;
        })();
  script.text = JSON.stringify(buildLocalBusinessJsonLd()).replace(/</g, "\\u003c");
}
