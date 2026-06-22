export const TRUST_LINE =
  "FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years of experience serving the OKC metro, and every project is backed by a 2-year workmanship warranty.";

export function trustParagraph(): string {
  return `<p><strong>${TRUST_LINE}</strong></p>`;
}

export function processSection(
  title: string,
  steps: { title: string; description: string }[],
): string {
  const items = steps
    .map((s) => `<li><strong>${s.title}</strong> — ${s.description}</li>`)
    .join("");
  return `<h2>${title}</h2><ol>${items}</ol>`;
}

export function faqSection(
  title: string,
  items: { question: string; answer: string }[],
): string {
  const itemsHtml = items
    .map((item) => `<dt>${item.question}</dt><dd>${item.answer}</dd>`)
    .join("");
  return `<h2>${title}</h2><dl>${itemsHtml}</dl>`;
}

export function linkList(links: { href: string; label: string }[]): string {
  const items = links
    .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join("");
  return `<ul>${items}</ul>`;
}
