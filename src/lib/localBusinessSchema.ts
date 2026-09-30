/**
 * Single business entity JSON-LD (GeneralContractor).
 * Full node on `/` and `/oklahoma-city-concrete` only.
 * Other pages reference it via {"@id": ".../#business"} from Service schemas, or omit.
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

export const BUSINESS_JSON_LD_ID = "fdz-business-jsonld";
export const BUSINESS_ENTITY_ID = `${SITE_ORIGIN}/#business`;

/** Paths that emit the full business node (not a reference). */
export const FULL_BUSINESS_PATHS = new Set(["/", "/oklahoma-city-concrete"]);

/** @deprecated Use FULL_BUSINESS_PATHS */
export const LOCAL_BUSINESS_PATHS = FULL_BUSINESS_PATHS;

/**
 * Schema.org @types that count as a LocalBusiness entity for seo-check
 * (GeneralContractor ⊆ HomeAndConstructionBusiness ⊆ LocalBusiness).
 */
export const LOCAL_BUSINESS_TYPES = new Set([
  "LocalBusiness",
  "HomeAndConstructionBusiness",
  "GeneralContractor",
  "ProfessionalService",
  "Store",
  "Restaurant",
  "AutomotiveBusiness",
  "EntertainmentBusiness",
  "FoodEstablishment",
  "HealthAndBeautyBusiness",
  "SportsActivityLocation",
  "Library",
  "LodgingBusiness",
  "MedicalBusiness",
]);

export function isLocalBusinessType(type: unknown): boolean {
  if (typeof type === "string") return LOCAL_BUSINESS_TYPES.has(type);
  if (Array.isArray(type)) return type.some((t) => typeof t === "string" && LOCAL_BUSINESS_TYPES.has(t));
  return false;
}

/** Merged GeneralContractor + former HomeAndConstructionBusiness fields. One entity. */
export function buildBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ENTITY_ID,
    name: "FDZ Construction LLC",
    image: `${SITE_ORIGIN}/og-image.jpg`,
    logo: `${SITE_ORIGIN}/og-image.jpg`,
    url: SITE_ORIGIN,
    telephone: "+14054584805",
    email: "jesus@fdzconstruction.com",
    priceRange: "$$",
    description:
      "FDZ Construction LLC is a licensed, bonded, and insured concrete and sewer line contractor based in Oklahoma City, serving the OKC metro with driveways, patios, slabs, foundations, retaining walls, sidewalks, commercial concrete, and sewer line repair & installation — all self-performed by one crew. 8+ years of experience, every project backed by a 2-year workmanship warranty.",
    // City-level only — street address stays off public pages.
    // TODO(FDZ): add streetAddress only if a public address is intentionally published again.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    // TODO(FDZ): confirm Google Business Profile URL; add BBB when claimed
    sameAs: [
      "https://www.facebook.com/fdzconstruction",
      "https://www.google.com/maps/place/FDZ+Construction+LLC",
    ],
    areaServed: LOCAL_BUSINESS_CITIES.map((name) => ({
      "@type": "City",
      name,
      addressRegion: "OK",
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "FDZ Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Concrete Driveways",
            url: `${SITE_ORIGIN}/driveways-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Patios, Slabs & Stamped Concrete",
            url: `${SITE_ORIGIN}/patios-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Concrete Foundations",
            url: `${SITE_ORIGIN}/foundations-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Retaining Walls",
            url: `${SITE_ORIGIN}/retaining-walls-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sidewalks, Curb & Gutter",
            url: `${SITE_ORIGIN}/sidewalks-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Concrete",
            url: `${SITE_ORIGIN}/commercial-concrete-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Parking Lots",
            url: `${SITE_ORIGIN}/parking-lots-oklahoma-city`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sewer Line Repair & Installation",
            url: `${SITE_ORIGIN}/sewer-line-repair-oklahoma-city`,
          },
        },
      ],
    },
    // Do not add aggregateRating.
  };
}

/** @deprecated Use buildBusinessJsonLd */
export function buildLocalBusinessJsonLd() {
  return buildBusinessJsonLd();
}

export function businessJsonLdScriptTag(): string {
  const json = JSON.stringify(buildBusinessJsonLd()).replace(/</g, "\\u003c");
  return `<script type="application/ld+json" id="${BUSINESS_JSON_LD_ID}">${json}</script>`;
}

/** @deprecated Use businessJsonLdScriptTag */
export function localBusinessJsonLdScriptTag(): string {
  return businessJsonLdScriptTag();
}

function removeBusinessEntityScripts(doc: Document): void {
  for (const el of [...doc.querySelectorAll('script[type="application/ld+json"]')]) {
    if (!(el instanceof HTMLScriptElement)) continue;
    if (el.id === BUSINESS_JSON_LD_ID || el.id === "fdz-localbusiness-jsonld") {
      el.remove();
      continue;
    }
    try {
      const data = JSON.parse(el.textContent || "");
      if (isLocalBusinessType(data["@type"])) el.remove();
    } catch {
      // leave malformed alone
    }
  }
}

/**
 * Keep exactly one full business entity on `/` and `/oklahoma-city-concrete`.
 * Remove LocalBusiness-type nodes everywhere else (Service schemas may still reference #business).
 */
export function syncLocalBusinessJsonLd(pathname: string, doc: Document = document): void {
  removeBusinessEntityScripts(doc);
  if (!FULL_BUSINESS_PATHS.has(pathname)) return;

  const script = doc.createElement("script");
  script.type = "application/ld+json";
  script.id = BUSINESS_JSON_LD_ID;
  script.text = JSON.stringify(buildBusinessJsonLd()).replace(/</g, "\\u003c");
  doc.head.appendChild(script);
}
