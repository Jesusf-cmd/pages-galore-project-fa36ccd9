export const SITE_ORIGIN = "https://fdzconstruction.com";

/**
 * Absolute canonical URL for a site path.
 * Prerender emits `path.html` so Cloudflare Pages serves `/path` as 200 (no trailing-slash 308).
 */
export function canonicalUrl(path: string): string {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const withLeading = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${withLeading.replace(/\/+$/, "")}`;
}
