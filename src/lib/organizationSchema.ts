import { isKansasPath } from "./phones";

/** Existing Oklahoma City office location from index.html. Not used on Wichita pages. */
export const ORGANIZATION_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "7004 S Indiana Ave",
  addressLocality: "Oklahoma City",
  addressRegion: "OK",
  postalCode: "73159",
  addressCountry: "US",
} as const;

export const ORGANIZATION_GEO = {
  "@type": "GeoCoordinates",
  latitude: 35.4676,
  longitude: -97.5164,
} as const;

type JsonLd = Record<string, unknown>;

/** Wichita pages omit the street address. Other pages keep the Oklahoma City office. */
export function organizationJsonLdForPath(data: JsonLd, pathname: string): JsonLd {
  if (data["@type"] !== "GeneralContractor") return data;
  const next: JsonLd = { ...data };
  if (isKansasPath(pathname)) {
    delete next.address;
    delete next.geo;
    return next;
  }
  next.address = { ...ORGANIZATION_POSTAL_ADDRESS };
  next.geo = { ...ORGANIZATION_GEO };
  return next;
}

/** Drop the office street address from Wichita prerender HTML only. */
export function stripWichitaStreetAddressHtml(html: string, pathname: string): string {
  if (!isKansasPath(pathname)) return html;
  const withoutSchemaAddress = html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
    (full, json: string) => {
      try {
        const data = JSON.parse(json) as JsonLd;
        if (data["@type"] !== "GeneralContractor") return full;
        return `<script type="application/ld+json">${JSON.stringify(organizationJsonLdForPath(data, pathname))}</script>`;
      } catch {
        return full;
      }
    },
  );
  return withoutSchemaAddress.replace(/<p>7004 S Indiana Ave, Oklahoma City, OK 73159<\/p>\s*/g, "");
}
