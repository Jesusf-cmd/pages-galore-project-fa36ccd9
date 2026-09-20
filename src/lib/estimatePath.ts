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

export function estimatePath(from?: string | null): string {
  if (!from || !(from in ESTIMATE_ORIGINS)) return ESTIMATE_PATH;
  return `/?from=${encodeURIComponent(from)}#${ESTIMATE_HASH}`;
}

export function parseEstimateOrigin(from: string | null | undefined) {
  if (!from) return undefined;
  return ESTIMATE_ORIGINS[from as EstimateOriginId];
}

export function applyEstimateOriginToDetails(
  from: string | null | undefined,
  details: string,
): string {
  const origin = parseEstimateOrigin(from);
  if (!origin) return details;
  const trimmed = details.trim();
  if (trimmed.includes(origin.detailsPrefix)) return trimmed.slice(0, 2000);
  const combined = trimmed ? `${origin.detailsPrefix}\n${trimmed}` : origin.detailsPrefix;
  return combined.slice(0, 2000);
}
