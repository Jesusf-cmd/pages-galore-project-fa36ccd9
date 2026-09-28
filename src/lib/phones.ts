/** Region-scoped public phone numbers. Oklahoma remains the default. */

export const OKLAHOMA_PHONE = {
  display: "(405) 458-4805",
  tel: "4054584805",
} as const;

/** Dedicated Kansas CallRail number. Wichita/Kansas pages only. */
export const KANSAS_PHONE = {
  display: "316-531-9583",
  tel: "3165319583",
} as const;

export const WICHITA_PATHS = [
  "/commercial-concrete-wichita",
  "/industrial-concrete-wichita",
  "/retaining-walls-wichita",
  "/stamped-concrete-wichita",
] as const;

export type WichitaPath = (typeof WICHITA_PATHS)[number];

export function normalizePath(pathname: string): string {
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.replace(/\/+$/, "");
  return path || "/";
}

export function isKansasPath(pathname: string): boolean {
  return (WICHITA_PATHS as readonly string[]).includes(normalizePath(pathname));
}

export function phoneForPath(pathname: string) {
  return isKansasPath(pathname) ? KANSAS_PHONE : OKLAHOMA_PHONE;
}
