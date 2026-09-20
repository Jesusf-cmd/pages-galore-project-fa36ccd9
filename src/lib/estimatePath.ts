/** Homepage estimate form destination. Query `from` is an allowlisted originating page. */

export const ESTIMATE_HASH = "estimate";
export const ESTIMATE_PATH = "/#estimate";

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
  if (!parseEstimateOrigin(from)) return ESTIMATE_PATH;
  return `/?from=${encodeURIComponent(from)}#${ESTIMATE_HASH}`;
}

export function parseEstimateOrigin(from: string | null | undefined) {
  if (!from || !Object.prototype.hasOwnProperty.call(ESTIMATE_ORIGINS, from)) return undefined;
  return ESTIMATE_ORIGINS[from as EstimateOriginId];
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
