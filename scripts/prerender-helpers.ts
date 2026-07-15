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
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  });
  return `<h2>${title}</h2><dl>${itemsHtml}</dl><script type="application/ld+json">${faqJsonLd}</script>`;
}

export function linkList(links: { href: string; label: string }[]): string {
  const items = links
    .map((link) => `<li><a href="${link.href}">${link.label}</a></li>`)
    .join("");
  return `<ul>${items}</ul>`;
}

const SEWER_SIGNS_HTML =
  "Slow or backed-up drains in more than one fixture; sewage odor near the yard or inside the house; gurgling sounds from toilets or drains; soggy or unusually green lawn patches; multiple fixtures backing up at once; standing water near the sewer cleanout.";

export function metroCitySewerBlock(city: string, localNote: string): string {
  return `
    <h2>Sewer Line Repair &amp; Installation in ${city}</h2>
    <p>FDZ Construction handles sewer line repair, replacement, and new installation for ${city} homeowners — one crew for excavation and concrete restoration, so you're not coordinating a plumber and a separate concrete contractor.</p>
    <h3>Sewer Repair Methods</h3>
    <ul>
      <li><strong>Trenchless Pipe Bursting</strong> — minimal digging when the line path is sound but the pipe is worn out</li>
      <li><strong>Traditional Excavation Repair</strong> — exposes and replaces a damaged section; we restore driveways and slabs ourselves</li>
      <li><strong>Spot Repair</strong> — fixes one failed section when the rest of the line is sound</li>
      <li><strong>Full Replacement &amp; New Installation</strong> — modern PVC installs rated for 50+ years</li>
    </ul>
    <p><strong>Signs you may need sewer line repair:</strong> ${SEWER_SIGNS_HTML}</p>
    <p>${localNote}</p>
    <p>See the full <a href="/sewer-line-repair-oklahoma-city">sewer line repair methods, OKC pricing, and FAQ</a> — including typical ranges: spot repair $1,000–$3,500, excavation repair $1,500–$7,000, trenchless bursting $4,000–$12,000, full replacement $8,000–$15,000.</p>
    <h2>Our ${city} Projects</h2>
    <p>We've completed concrete and sewer line projects across the OKC metro, including ${city}. We don't have ${city}-specific project photos or customer reviews published yet — this section will be updated with real project photos and reviews as they become available.</p>
  `;
}
