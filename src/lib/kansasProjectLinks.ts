/**
 * Kansas-hub overrides for project-card service exploration links.
 * Oklahoma ownerPath / serviceLinkLabel remain the default elsewhere.
 */

import { estimatePath } from "./estimatePath.ts";
import { WICHITA_HOME_PATH } from "./phones.ts";
import type { Project } from "../data/projects.ts";

export type ProjectServiceLink = {
  href: string;
  label: string;
};

const WICHITA_INQUIRY: ProjectServiceLink = {
  href: estimatePath("concrete-contractors-wichita-ks"),
  label: "Request a Wichita estimate",
};

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
  // Sidewalks, broom patios, and driveways have no dedicated Wichita service page.
  "star-spencer-hs": WICHITA_INQUIRY,
  "norman-patio-paver-walkway": WICHITA_INQUIRY,
  "edmond-driveway": WICHITA_INQUIRY,
};

/**
 * Service-exploration link for a project card under Kansas presentation.
 * Falls back to the Wichita hub inquiry when no honest Kansas service match exists.
 */
export function kansasProjectServiceLink(project: Project): ProjectServiceLink {
  return (
    BY_PROJECT_ID[project.id] ?? {
      href: WICHITA_HOME_PATH,
      label: "Request a Wichita estimate",
    }
  );
}
