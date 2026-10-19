/** Escape untrusted text for HTML element bodies. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Escape untrusted values for double-quoted HTML attributes. */
export function escapeAttr(value: string): string {
  return escapeHtml(value);
}
