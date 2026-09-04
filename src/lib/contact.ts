/** Public customer-contact email for FDZ Construction (verified sitewide). */
export const CONTACT_EMAIL_USER = "jesus";
export const CONTACT_EMAIL_DOMAIN = "fdzconstruction.com";

export function getContactEmail(): string {
  return `${CONTACT_EMAIL_USER}@${CONTACT_EMAIL_DOMAIN}`;
}

export function getMailtoHref(): string {
  return `mailto:${getContactEmail()}`;
}

/** Safe crawlable fallback — no email address in HTML for Cloudflare obfuscation. */
export const CONTACT_FALLBACK_HREF = "/#contact";
export const CONTACT_FALLBACK_LABEL = "Email FDZ Construction";

/**
 * Replace raw mailto / email strings in HTML blobs (infoBlocks, etc.) so Cloudflare
 * cannot rewrite them into crawlable /cdn-cgi/l/email-protection links.
 */
export function withoutCrawlableEmail(html: string): string {
  return html
    .replace(
      /<a\s+[^>]*href=["']mailto:jesus@fdzconstruction\.com["'][^>]*>[\s\S]*?<\/a>/gi,
      `<a href="${CONTACT_FALLBACK_HREF}">${CONTACT_FALLBACK_LABEL}</a>`,
    )
    .replace(/mailto:jesus@fdzconstruction\.com/gi, CONTACT_FALLBACK_HREF)
    .replace(/\s*or email jesus@fdzconstruction\.com/gi, " or use our contact form")
    .replace(/email jesus@fdzconstruction\.com/gi, "use our contact form")
    .replace(/jesus@fdzconstruction\.com/gi, "our contact form");
}
