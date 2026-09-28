import { isKansasPath } from "./phones";

/** City-level public address only. Street and coordinates stay off marketing pages. */
export const PUBLIC_ORGANIZATION_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Oklahoma City",
  addressRegion: "OK",
  addressCountry: "US",
} as const;

type JsonLd = Record<string, unknown>;

function withoutStreetAndGeo(address: unknown): Record<string, unknown> | undefined {
  if (!address || typeof address !== "object") return undefined;
  const next = { ...(address as Record<string, unknown>) };
  delete next.streetAddress;
  delete next.postalCode;
  delete next.postOfficeBoxNumber;
  return next;
}

/** Public Organization/LocalBusiness JSON-LD never includes a street or precise coordinates. */
export function organizationJsonLdForPath(data: JsonLd, pathname: string): JsonLd {
  if (data["@type"] !== "GeneralContractor") return data;
  const next: JsonLd = { ...data };
  delete next.geo;
  if (isKansasPath(pathname)) {
    delete next.address;
    return next;
  }
  next.address = { ...PUBLIC_ORGANIZATION_ADDRESS };
  return next;
}

/** Drop street, postal code, and precise coordinates from prerendered public HTML. */
export function stripPublicStreetAddressHtml(html: string, pathname: string): string {
  const withoutSchemaAddress = html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
    (full, json: string) => {
      try {
        const data = JSON.parse(json) as JsonLd;
        if (data["@type"] === "GeneralContractor") {
          const cleaned = organizationJsonLdForPath(data, pathname);
          return `<script type="application/ld+json">${JSON.stringify(cleaned)}</script>`;
        }
        if (data.address || data.geo) {
          const cleaned: JsonLd = { ...data };
          if (cleaned.address) {
            const address = withoutStreetAndGeo(cleaned.address);
            if (address) cleaned.address = address;
          }
          delete cleaned.geo;
          return `<script type="application/ld+json">${JSON.stringify(cleaned)}</script>`;
        }
        return full;
      } catch {
        return full;
      }
    },
  );
  return withoutSchemaAddress
    .replace(/<p>7004 S Indiana Ave, Oklahoma City, OK 73159<\/p>\s*/g, "")
    .replace(/<p><\/p>\s*/g, "")
    .replace(/<meta name="geo\.position"[^>]*>\s*/gi, "")
    .replace(/<meta name="ICBM"[^>]*>\s*/gi, "");
}

/** @deprecated Use stripPublicStreetAddressHtml — public pages omit the street everywhere. */
export function stripWichitaStreetAddressHtml(html: string, pathname: string): string {
  return stripPublicStreetAddressHtml(html, pathname);
}
