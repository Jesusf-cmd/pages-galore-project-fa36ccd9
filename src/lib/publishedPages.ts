/** Live routes hidden from nav, sitemap, and indexing until re-enabled. Files stay in repo. */
export const UNPUBLISHED_ROUTE_PATHS = [
  "/hvac-oklahoma-city",
  "/plumbing-oklahoma-city",
  "/electrical-oklahoma-city",
  "/emergency-services-oklahoma-city",
  "/our-approach",
] as const;

export function isUnpublishedRoute(path: string): boolean {
  return (UNPUBLISHED_ROUTE_PATHS as readonly string[]).includes(path);
}
