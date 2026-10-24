/** Homepage estimate form destination. Query `from` is an allowlisted originating page. */

import {
  KANSAS_PHONE,
  OKLAHOMA_PHONE,
  WICHITA_HOME_PATH,
  WICHITA_PATHS,
} from "./phones.ts";

export const ESTIMATE_HASH = "estimate";
export const ESTIMATE_PATH = "/#estimate";
/** Wichita hub form destination (Kansas origins). */
export const WICHITA_ESTIMATE_BASE = WICHITA_HOME_PATH;

const KANSAS_ORIGIN_IDS = new Set(WICHITA_PATHS.map((path) => path.slice(1)));

export const ESTIMATE_ORIGINS = {
  "commercial-concrete-repair-oklahoma-city": {
    formLabel: "Commercial concrete repair",
    placeholder:
      "Facility type, location, affected area, what you are seeing (cracks, spalling, settlement, trip hazards), and desired timing...",
    detailsPrefix:
      "Requested from /commercial-concrete-repair-oklahoma-city (commercial concrete repair).",
  },
  "concrete-crack-repair-oklahoma-city": {
    formLabel: "Concrete crack repair",
    placeholder:
      "City, concrete surface (driveway, patio, sidewalk, garage floor, parking lot, commercial/warehouse slab, or other), approximate size of the damage, and timing...",
    detailsPrefix:
      "Requested from /concrete-crack-repair-oklahoma-city (concrete crack repair).",
  },
  "bollard-installation-oklahoma-city": {
    formLabel: "Bollard installation",
    placeholder:
      "Site address, number of bollards, new install vs replacement, existing slab or new base, vehicle access, and any schedule limits...",
    detailsPrefix: "Requested from /bollard-installation-oklahoma-city (bollard installation).",
  },
  "cost-of-concrete-oklahoma-city-2026": {
    formLabel: "Concrete estimate (from 2026 cost guide)",
    placeholder:
      "Project type (driveway, patio, foundation, or commercial), address, approximate size, and site access notes...",
    detailsPrefix: "Requested from /blog/cost-of-concrete-oklahoma-city-2026 (concrete cost guide).",
  },
  "concrete-contractors-wichita-ks": {
    formLabel: "Wichita concrete",
    placeholder:
      "Wichita-area address, commercial or industrial scope, and any plans or schedule limits...",
    addressPlaceholder: "Job address in Wichita, KS",
    detailsPrefix: "Requested from /concrete-contractors-wichita-ks (concrete contractors, Wichita KS).",
  },
  "commercial-concrete-wichita": {
    formLabel: "Wichita commercial concrete",
    placeholder:
      "Wichita-area address, approximate area, parking or paving scope, and any drawings or schedule limits...",
    addressPlaceholder: "Job address in Wichita, KS",
    detailsPrefix: "Requested from /commercial-concrete-wichita (commercial concrete, Wichita KS).",
  },
  "industrial-concrete-wichita": {
    formLabel: "Wichita industrial concrete",
    placeholder:
      "Wichita facility address, slab or paving area, equipment or dock scope, and drawings you already have...",
    addressPlaceholder: "Facility address in Wichita, KS",
    detailsPrefix: "Requested from /industrial-concrete-wichita (industrial concrete, Wichita KS).",
  },
  "retaining-walls-wichita": {
    formLabel: "Wichita retaining wall",
    placeholder:
      "Wichita address, approximate wall length and height, photos, and any drawings...",
    addressPlaceholder: "Wall address in Wichita, KS",
    detailsPrefix: "Requested from /retaining-walls-wichita (retaining walls, Wichita KS).",
  },
  "stamped-concrete-wichita": {
    formLabel: "Wichita stamped concrete",
    placeholder:
      "Wichita address, areas to stamp, and any pattern direction you already have...",
    addressPlaceholder: "Property address in Wichita, KS",
    detailsPrefix: "Requested from /stamped-concrete-wichita (stamped concrete, Wichita KS).",
  },
} as const;

export type EstimateOriginId = keyof typeof ESTIMATE_ORIGINS;

/** Existing submit-quote / submit-project-documents details cap. */
export const DETAILS_MAX_LENGTH = 2000;
export const DETAILS_LIMIT_ERROR =
  "Project details must be 2,000 characters or fewer. Shorten your notes to continue.";

export function detailsLimitError(details: string): string | null {
  return details.trim().length > DETAILS_MAX_LENGTH ? DETAILS_LIMIT_ERROR : null;
}

/**
 * Build an estimate form deep link.
 * Kansas origins land on the Wichita hub so chrome stays Kansas-focused.
 * Oklahoma / unknown origins keep the OKC homepage form.
 * Legacy `/?from=<Kansas-origin>#estimate` links remain functional via the form's
 * origin allowlist when the root page still mounts EstimateForm.
 */
export function estimatePath(from?: string | null): string {
  if (!from || !parseEstimateOrigin(from)) return ESTIMATE_PATH;
  if (isKansasEstimateOrigin(from)) {
    return `${WICHITA_HOME_PATH}?from=${encodeURIComponent(from)}#${ESTIMATE_HASH}`;
  }
  return `/?from=${encodeURIComponent(from)}#${ESTIMATE_HASH}`;
}

/**
 * Prefer an allowlisted `?from=` on the current URL, otherwise the route slug when
 * it is an allowlisted origin. Used by nav/footer CTAs so hub visits with a service
 * `from` keep that origin on subsequent estimate actions.
 */
export function estimateOriginForLocation(
  pathname: string | null | undefined,
  search?: string | null,
): string | null {
  const raw = search?.startsWith("?") ? search.slice(1) : search ?? "";
  const queryFrom = new URLSearchParams(raw).get("from");
  return resolveEstimateOriginFrom(queryFrom, pathname);
}

export function estimatePathForLocation(
  pathname: string | null | undefined,
  search?: string | null,
): string {
  return estimatePath(estimateOriginForLocation(pathname, search));
}

export function parseEstimateOrigin(from: string | null | undefined) {
  if (!from || !Object.prototype.hasOwnProperty.call(ESTIMATE_ORIGINS, from)) return undefined;
  return ESTIMATE_ORIGINS[from as EstimateOriginId];
}

/** Pathname slug used as `from` when the query string is absent (direct page visits). */
export function estimateOriginFromPathname(pathname: string | null | undefined): string | null {
  if (!pathname) return null;
  const slug = pathname.split("?")[0].split("#")[0].replace(/^\//, "").replace(/\/+$/, "");
  if (!slug || slug === "home") return null;
  return parseEstimateOrigin(slug) ? slug : null;
}

/**
 * Prefer an allowlisted `?from=` query, otherwise the current route when it is an allowlisted origin.
 * Direct Wichita hub visits therefore keep Kansas attribution without requiring a query param.
 */
export function resolveEstimateOriginFrom(
  queryFrom: string | null | undefined,
  pathname?: string | null,
): string | null {
  if (queryFrom && parseEstimateOrigin(queryFrom)) return queryFrom;
  return estimateOriginFromPathname(pathname);
}

/**
 * Instant calculator rates are Oklahoma-only.
 * Kansas origins use the unpriced inquiry panel (submit-estimate-inquiry).
 */
export function hasInstantEstimateRates(from: string | null | undefined): boolean {
  return !isKansasEstimateOrigin(from);
}

export function estimateAddressPlaceholder(from: string | null | undefined): string | undefined {
  const origin = parseEstimateOrigin(from);
  if (!origin || !("addressPlaceholder" in origin)) return undefined;
  return origin.addressPlaceholder;
}

export function applyEstimateOriginToDetails(
  from: string | null | undefined,
  details: string,
): string {
  const origin = parseEstimateOrigin(from);
  if (!origin) return details;
  const trimmed = details.trim();
  if (trimmed.includes(origin.detailsPrefix)) return trimmed;
  if (!trimmed) return origin.detailsPrefix;
  const combined = `${origin.detailsPrefix}\n${trimmed}`;
  return combined.length <= DETAILS_MAX_LENGTH ? combined : trimmed;
}

/** Recognized Wichita `from` values only. Oklahoma, unknown, and missing origins stay on the OKC number. */
export function isKansasEstimateOrigin(from: string | null | undefined): boolean {
  return !!from && KANSAS_ORIGIN_IDS.has(from) && !!parseEstimateOrigin(from);
}

export function phoneForEstimateOrigin(from: string | null | undefined) {
  return isKansasEstimateOrigin(from) ? KANSAS_PHONE : OKLAHOMA_PHONE;
}

export const QUOTE_SUBMIT_CALL_PREFIX = "Something went wrong. Please call us at";
export const UPLOAD_SUBMIT_CALL_PREFIX =
  "Something went wrong uploading your files. Please try again or call";

export function isServerPhoneError(message: string): boolean {
  return /\(405\)\s*458-4805|4054584805|316-365-8342|3163658342|316-531-9583|3165319583/.test(message);
}

export function quoteSubmitCallFailure(from: string | null | undefined) {
  return { prefix: QUOTE_SUBMIT_CALL_PREFIX, phone: phoneForEstimateOrigin(from) };
}

export function uploadSubmitCallFailure(from: string | null | undefined, serverMessage?: string) {
  if (serverMessage && !isServerPhoneError(serverMessage)) {
    return { prefix: serverMessage, phone: null as ReturnType<typeof phoneForEstimateOrigin> | null };
  }
  return { prefix: UPLOAD_SUBMIT_CALL_PREFIX, phone: phoneForEstimateOrigin(from) };
}

export function quoteFollowUpPath(accessToken: string, from: string | null | undefined): string {
  const path = `/quote/${accessToken}`;
  if (!from || !parseEstimateOrigin(from)) return path;
  return `${path}?from=${encodeURIComponent(from)}`;
}

export function supportedEstimateOrigin(from: unknown): EstimateOriginId | null {
  if (typeof from !== "string" || !parseEstimateOrigin(from)) return null;
  return from as EstimateOriginId;
}

function stripKnownOriginPrefixes(details: string): string {
  let body = details;
  for (const id of Object.keys(ESTIMATE_ORIGINS) as EstimateOriginId[]) {
    body = body.split(ESTIMATE_ORIGINS[id].detailsPrefix).join(" ");
  }
  return body.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

/**
 * Persist the validated `from` value inside project_details.
 * The structured prefix stays at the front so a 2,000-character cap cannot drop it.
 * Free-form notes that mention a city are not treated as an origin.
 * An explicit unsupported `from` strips any pasted prefix so notes cannot spoof a region.
 * A missing `from` leaves an already stored prefix in place for older clients.
 */
export function projectDetailsForStorage(
  from: unknown,
  details: string | null | undefined,
): string | null {
  const raw = details ? String(details).trim() : "";
  const validated = supportedEstimateOrigin(from);
  const fromWasSent = from !== undefined && from !== null && String(from).trim() !== "";
  let body = validated || fromWasSent ? stripKnownOriginPrefixes(raw) : raw;
  if (validated) {
    const prefix = ESTIMATE_ORIGINS[validated].detailsPrefix;
    body = body ? `${prefix}\n${body}` : prefix;
  }
  const stored = body.slice(0, DETAILS_MAX_LENGTH).trim();
  return stored.length ? stored : null;
}

/** Exactly one structured origin prefix. City names in notes do not count. */
export function originIdFromProjectDetails(details: string | null | undefined): EstimateOriginId | undefined {
  if (!details) return undefined;
  const matches = (Object.keys(ESTIMATE_ORIGINS) as EstimateOriginId[]).filter((id) =>
    details.includes(ESTIMATE_ORIGINS[id].detailsPrefix),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

/** Stored project details win over a conflicting URL `from`. */
export function resolveQuoteOrigin(
  projectDetails: string | null | undefined,
  urlFrom: string | null | undefined,
): EstimateOriginId | null {
  return originIdFromProjectDetails(projectDetails) ?? supportedEstimateOrigin(urlFrom);
}

export function absoluteQuoteUrl(
  siteUrl: string | null | undefined,
  accessToken: string,
  from: string | null | undefined,
): string {
  const base = (siteUrl || "https://fdzconstruction.com").replace(/\/+$/, "");
  return `${base}${quoteFollowUpPath(accessToken, supportedEstimateOrigin(from))}`;
}
