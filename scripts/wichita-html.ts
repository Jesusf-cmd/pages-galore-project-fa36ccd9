import { canonicalUrl } from "../src/lib/siteUrl";
import { estimatePath } from "../src/lib/estimatePath";
import { KANSAS_PHONE } from "../src/lib/phones";
import type { WichitaPageContent } from "../src/content/wichitaPages";
import { faqSection, processSection } from "./prerender-helpers";

function heading(title: string, accent: string): string {
  return `${title} ${accent}`.replace(/\s+/g, " ").trim().replace(/\.$/, "");
}

function serviceJsonLd(page: WichitaPageContent): string {
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.serviceSchema.serviceType,
    name: page.serviceSchema.name,
    url: canonicalUrl(page.path),
    telephone: page.serviceSchema.telephone,
    provider: { "@id": "https://fdzconstruction.com/#organization" },
    areaServed: { "@type": "City", name: "Wichita", addressRegion: "KS" },
  }).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">${json}</script>`;
}

/** Crawler HTML for a Wichita page. Kansas phone only. No Oklahoma trust-line claims. */
export function renderWichitaPageHtml(page: WichitaPageContent, h1: string): string {
  const estimateHref = estimatePath(page.path.replace(/^\//, ""));
  const parts: string[] = [];
  parts.push(`<h1>${h1}</h1>`);
  parts.push(`<p>${page.description}</p>`);
  parts.push(`<p>${page.modelNote}</p>`);
  parts.push(`<p>${page.introText}</p>`);
  parts.push(
    `<p><a href="${estimateHref}">${page.ctaLabel.replace(/ →$/, "")}</a> · <a href="tel:${KANSAS_PHONE.tel}">${KANSAS_PHONE.display}</a></p>`,
  );
  parts.push(`<h2>${heading(page.serviceCardsTitle, page.serviceCardsTitleAccent)}</h2><ul>`);
  for (const card of page.serviceCards) {
    parts.push(`<li><strong>${card.title}</strong> — ${card.description}</li>`);
  }
  parts.push("</ul>");
  parts.push(`<h2>${page.subServices.sectionTitle}</h2>`);
  for (const item of page.subServices.items) {
    parts.push(`<h3>${item.title}</h3><ul>`);
    for (const bullet of item.bullets) parts.push(`<li>${bullet}</li>`);
    parts.push("</ul>");
  }
  for (const section of page.sections) {
    parts.push(`<h2>${heading(section.title, section.titleAccent)}</h2>`);
    for (const paragraph of section.content) parts.push(`<p>${paragraph}</p>`);
    if (section.infoBlock) parts.push(`<p>${section.infoBlock}</p>`);
  }
  parts.push("<h2>Build notes</h2><ul>");
  for (const spec of page.specs) {
    parts.push(`<li><strong>${spec.label}:</strong> ${spec.value}</li>`);
  }
  parts.push("</ul>");
  parts.push(
    processSection(heading(page.processTitle, page.processTitleAccent), page.processSteps),
  );
  parts.push(`<h2>${heading(page.projectTypesTitle, page.projectTypesTitleAccent)}</h2>`);
  parts.push(`<p>${page.projectTypesIntro}</p><ul>`);
  for (const project of page.projectTypes) {
    parts.push(`<li><strong>${project.title}</strong> — ${project.description}</li>`);
  }
  parts.push("</ul>");
  parts.push(`<h2>${heading(page.serviceArea.title, page.serviceArea.titleAccent)}</h2>`);
  parts.push(`<p>${page.serviceArea.introHtml}</p>`);
  parts.push(`<p>${page.serviceArea.footnoteHtml}</p>`);
  parts.push(faqSection("Frequently Asked Questions", page.faq));
  parts.push(serviceJsonLd(page));
  parts.push(
    `<p><strong>Kansas project line:</strong> <a href="tel:${KANSAS_PHONE.tel}">${KANSAS_PHONE.display}</a> · <a href="${estimateHref}">Estimate form</a></p>`,
  );
  return parts.join("\n");
}
