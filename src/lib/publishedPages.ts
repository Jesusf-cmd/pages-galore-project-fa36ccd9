/** Live routes hidden from nav, sitemap, and indexing until re-enabled. Files stay in repo. */
export const UNPUBLISHED_ROUTE_PATHS = ["/our-approach"] as const;

export function isUnpublishedRoute(path: string): boolean {
  return (UNPUBLISHED_ROUTE_PATHS as readonly string[]).includes(path);
}
