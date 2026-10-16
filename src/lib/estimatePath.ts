/** Homepage estimate form destination. Query `from` is an allowlisted originating page. */

import { KANSAS_PHONE, OKLAHOMA_PHONE, WICHITA_PATHS } from "./phones.ts";

export const ESTIMATE_HASH = "estimate";
export const ESTIMATE_PATH = "/#estimate";

const KANSAS_ORIGIN_IDS = new Set(WICHITA_PATHS.map((path) => path.slice(1)));

export const ESTIMATE_ORIGINS = {
  "commercial-concrete-repair-oklahoma-city": {
    formLabel: "Commercial concrete repair",
    placeholder:
      "Facility type, location, affected area, what you are seeing (cracks, spalling, settlement, trip hazards), and desired timing...",
    detailsPrefix:
      "Requested from /commercial-concrete-repair-oklahoma-city (commercial concrete repair).",
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

export function estimatePath(from?: string | null): string {
  if (!from || !parseEstimateOrigin(from)) return ESTIMATE_PATH;
  return `/?from=${encodeURIComponent(from)}#${ESTIMATE_HASH}`;
}

export function parseEstimateOrigin(from: string | null | undefined) {
  if (!from || !Object.prototype.hasOwnProperty.call(ESTIMATE_ORIGINS, from)) return undefined;
  return ESTIMATE_ORIGINS[from as EstimateOriginId];
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
