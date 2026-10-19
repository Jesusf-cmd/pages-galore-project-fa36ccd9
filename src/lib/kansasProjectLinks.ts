/**
 * Kansas-hub overrides for project-card service exploration links.
 * Oklahoma ownerPath / serviceLinkLabel remain the default elsewhere.
 */

import { estimatePath } from "./estimatePath.ts";
import type { Project } from "../data/projects.ts";

export type ProjectServiceLink = {
  href: string;
  label: string;
};

const INQUIRY_LABEL = "Request a Wichita estimate";

/** Default inquiry when no location-aware href is supplied (direct hub / unit tests). */
function defaultInquiryHref(): string {
  return estimatePath("concrete-contractors-wichita-ks");
}

/** Explicit matches only — do not relabel scopes that lack a Wichita service page. */
const BY_PROJECT_ID: Record<string, ProjectServiceLink> = {
  "guthrie-forklift-ramp": {
    href: "/industrial-concrete-wichita",
    label: "Explore industrial concrete in Wichita",
  },
  "okc-retaining-wall": {
    href: "/retaining-walls-wichita",
    label: "Explore retaining walls in Wichita",
  },
  "okc-stamped-patio": {
    href: "/stamped-concrete-wichita",
    label: "Explore stamped concrete in Wichita",
  },
};

const INQUIRY_PROJECT_IDS = new Set([
  // Sidewalks, broom patios, and driveways have no dedicated Wichita service page.
  "star-spencer-hs",
  "norman-patio-paver-walkway",
  "edmond-driveway",
]);

/**
 * Service-exploration link for a project card under Kansas presentation.
 * Inquiry fallbacks use `inquiryHref` when provided (location-aware hub estimate path)
 * so a valid Kansas `?from=` on the hub is preserved.
 */
export function kansasProjectServiceLink(
  project: Project,
  inquiryHref?: string,
): ProjectServiceLink {
  const matched = BY_PROJECT_ID[project.id];
  if (matched) return matched;

  const href = inquiryHref ?? defaultInquiryHref();
  if (INQUIRY_PROJECT_IDS.has(project.id)) {
    return { href, label: INQUIRY_LABEL };
  }
  return { href, label: INQUIRY_LABEL };
}
