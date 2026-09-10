import { faqSection, processSection, trustParagraph } from "./prerender-helpers";
import type { RepairData } from "../src/content/repairPages";
import type { ServiceInCityData } from "../src/content/serviceInCityPages";
import type { PoolDeckContent } from "../src/content/pages/pool-deck";
import type { ServicePageContent } from "../src/content/servicePageTypes";

function heading(title: string, accent: string): string {
  const combined = `${title} ${accent}`.replace(/\s+/g, " ").trim();
  return combined.replace(/\.$/, "");
}

function tableHtml(table: { headers: string[]; rows: string[][] }): string {
  const head = table.headers.map((h) => `<th>${h}</th>`).join("");
  const body = table.rows
    .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
    .join("");
  return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

/**
 * Crawler HTML from the same ServicePage content object React renders.
 * `h1` is passed from prerender-routes so existing crawler headings stay unchanged.
 */
export function renderServicePageHtml(page: ServicePageContent, h1: string): string {
  const parts: string[] = [];
  parts.push(`<h1>${h1}</h1>`);
  parts.push(`<p>${page.description}</p>`);
  if (page.introText) parts.push(`<p>${page.introText}</p>`);
  parts.push(`<p><a href="/#estimate">${page.ctaLabel || "Get Free Estimate"}</a> · <a href="tel:4054584805">(405) 458-4805</a></p>`);
  if (page.localExpertiseNote) {
    parts.push(`<h2>Oklahoma City Conditions</h2><p>${page.localExpertiseNote}</p>`);
  }
  if (page.serviceCards?.length) {
    parts.push(`<h2>${page.serviceLabel ? `${page.serviceLabel} Services` : "Services"}</h2><ul>`);
    for (const card of page.serviceCards) {
      parts.push(`<li><strong>${card.title}</strong> — ${card.description}</li>`);
    }
    parts.push("</ul>");
  }
  if (page.subServices?.items.length) {
    parts.push(`<h2>${page.subServices.sectionTitle}</h2>`);
    for (const item of page.subServices.items) {
      parts.push(`<h3>${item.title}</h3><ul>`);
      for (const bullet of item.bullets) parts.push(`<li>${bullet}</li>`);
      parts.push("</ul>");
    }
  }
  if (page.processSteps?.length) {
    const processTitle = heading(
      page.processTitle || "How We Build",
      page.processTitleAccent || "Concrete That Lasts.",
    );
    parts.push(processSection(processTitle, page.processSteps));
  }
  if (page.specs?.length) {
    parts.push("<h2>Specifications</h2><ul>");
    for (const spec of page.specs) {
      parts.push(`<li><strong>${spec.label}:</strong> ${spec.value}</li>`);
    }
    parts.push("</ul>");
  }
  for (const section of page.sections) {
    parts.push(`<h2>${heading(section.title, section.titleAccent)}</h2>`);
    for (const paragraph of section.content) parts.push(`<p>${paragraph}</p>`);
    if (section.table) parts.push(tableHtml(section.table));
    if (section.infoBlock) parts.push(`<p>${section.infoBlock}</p>`);
  }
  if (page.faq.length) {
    parts.push(faqSection("Frequently Asked Questions", page.faq));
  }
  parts.push(
    `<p><strong>Free estimate:</strong> <a href="/#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="/#contact">Email FDZ Construction</a></p>`,
  );
  parts.push(trustParagraph());
  return parts.join("\n");
}

/**
 * Crawler HTML from the same RepairService content object React renders.
 * `h1` is passed from prerender-routes so existing crawler headings stay unchanged.
 */
export function renderRepairServiceHtml(page: RepairData, h1: string): string {
  const parts: string[] = [];
  parts.push(`<h1>${h1}</h1>`);
  parts.push(`<p>${page.heroBlurbHtml}</p>`);
  parts.push(
    `<p><a href="/#estimate">Free On-Site Evaluation →</a> · <a href="tel:4054584805">(405) 458-4805</a></p>`,
  );
  parts.push(`<h2>${heading(page.problemTitle, page.problemAccent)}</h2>`);
  for (const paragraph of page.problemHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(`<h2>${heading(page.diagnosticTitle, page.diagnosticAccent)}</h2>`);
  parts.push("<h3>Repair Makes Sense When</h3><ul>");
  for (const item of page.repairCases) parts.push(`<li>${item}</li>`);
  parts.push("</ul>");
  parts.push("<h3>Replace Instead When</h3><ul>");
  for (const item of page.replaceCases) parts.push(`<li>${item}</li>`);
  parts.push("</ul>");
  parts.push("<h2>Our Repair Scope</h2>");
  for (const bullet of page.scopeBullets) {
    parts.push(`<h3>${bullet.title}</h3><p>${bullet.body}</p>`);
  }
  parts.push(
    processSection(
      heading(page.processTitle, page.processAccent),
      page.processSteps.map((step) => ({ title: step.title, description: step.body })),
    ),
  );
  parts.push("<h2>What Repair Actually Costs</h2>");
  for (const paragraph of page.pricingHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(`<p><a href="/#estimate">Request Free On-Site Evaluation →</a></p>`);
  if (page.faq.length) {
    parts.push(faqSection("Frequently Asked Questions", page.faq));
  }
  parts.push("<h2>More From FDZ Construction</h2><ul>");
  parts.push(
    `<li><a href="${page.parentService.to}">${page.parentService.label}</a></li>`,
  );
  for (const related of page.related) {
    parts.push(`<li><a href="${related.to}">${related.label}</a></li>`);
  }
  parts.push("</ul>");
  parts.push(
    `<p><strong>Free estimate:</strong> <a href="/#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="/#contact">Email FDZ Construction</a></p>`,
  );
  parts.push(trustParagraph());
  return parts.join("\n");
}

/**
 * Crawler HTML from the same ServiceInCity content object React renders.
 * `h1` is passed from prerender-routes so existing crawler headings stay unchanged.
 */
export function renderServiceInCityHtml(page: ServiceInCityData, h1: string): string {
  const parts: string[] = [];
  parts.push(`<h1>${h1}</h1>`);
  parts.push(`<p>${page.heroBlurbHtml}</p>`);
  parts.push(
    `<p><a href="/#estimate">Get Free Estimate →</a> · <a href="tel:4054584805">(405) 458-4805</a></p>`,
  );
  parts.push(`<h2>${heading(page.problemTitle, page.problemAccent)}</h2>`);
  for (const paragraph of page.problemHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(`<h2>${heading(page.localConditionsTitle, page.localConditionsAccent)}</h2>`);
  for (const paragraph of page.localConditionsHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push("<h2>How We Build It Right</h2>");
  for (const bullet of page.scopeBullets) {
    parts.push(`<h3>${bullet.title}</h3><p>${bullet.body}</p>`);
  }
  parts.push(`<h2>${heading(page.midCtaTitle, page.midCtaAccent)}</h2>`);
  parts.push(
    `<p>Free on-site estimate, clear scope, written quote. Call <a href="tel:4054584805">(405) 458-4805</a> or <a href="/#contact">Email FDZ Construction</a>.</p>`,
  );
  parts.push(
    `<p><a href="/#estimate">Request Estimate →</a> · <a href="tel:4054584805">(405) 458-4805</a></p>`,
  );
  if (page.faq.length) {
    parts.push(faqSection("Frequently Asked Questions", page.faq));
  }
  parts.push("<h2>More From FDZ Construction</h2><ul>");
  parts.push(`<li><a href="${page.parentService.to}">${page.parentService.label}</a></li>`);
  parts.push(`<li><a href="${page.parentCity.to}">${page.parentCity.label}</a></li>`);
  for (const related of page.siblings) {
    parts.push(`<li><a href="${related.to}">${related.label}</a></li>`);
  }
  parts.push("</ul>");
  parts.push(
    `<p><strong>Free estimate:</strong> <a href="/#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="/#contact">Email FDZ Construction</a></p>`,
  );
  parts.push(trustParagraph());
  return parts.join("\n");
}

/**
 * Crawler HTML from the same pool-deck content object React renders.
 * `h1` is passed from prerender-routes so existing crawler headings stay unchanged.
 */
export function renderPoolDeckHtml(page: PoolDeckContent, h1: string): string {
  const parts: string[] = [];
  parts.push(`<h1>${h1}</h1>`);
  for (const paragraph of page.heroParagraphs) parts.push(`<p>${paragraph}</p>`);
  parts.push(
    `<p><a href="tel:4054584805">(405) 458-4805</a> · <a href="/our-projects">See Our Work</a></p>`,
  );
  parts.push(`<h2>${heading(page.problemTitle, page.problemAccent)}</h2>`);
  for (const paragraph of page.problemHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(`<h2>${heading(page.whyTitle, page.whyAccent)}</h2>`);
  for (const item of page.whyItems) {
    const body = item.patioLink
      ? item.body.replace(
          "stamped concrete patios",
          `<a href="/patios-oklahoma-city">stamped concrete patios</a>`,
        )
      : item.body;
    parts.push(`<h3>${item.title}</h3><p>${body}</p>`);
  }
  parts.push(`<h2>${heading(page.servicesTitle, page.servicesAccent)}</h2>`);
  for (const service of page.services) {
    parts.push(`<h3>${service.title}</h3><p>${service.body}</p>`);
  }
  parts.push(`<h2>${heading(page.pricingTitle, page.pricingAccent)}</h2>`);
  parts.push(`<p>${page.pricingIntro}</p>`);
  parts.push(
    tableHtml({
      headers: ["Service", "Estimated Cost"],
      rows: page.pricingRows.map(([service, cost]) => [service, cost]),
    }),
  );
  parts.push(`<p>${page.pricingNoteHtml}</p>`);
  parts.push(`<h2>${heading(page.climateTitle, page.climateAccent)}</h2>`);
  for (const paragraph of page.climateHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(
    processSection(
      heading(page.processTitle, page.processAccent),
      page.processSteps.map((step) => ({ title: step.title, description: step.body })),
    ),
  );
  parts.push(`<h2>${heading(page.comparisonTitle, page.comparisonAccent)}</h2>`);
  parts.push(`<p>${page.comparisonIntro}</p>`);
  parts.push(
    tableHtml({
      headers: page.comparisonHeaders.map((h) => h || "Category"),
      rows: page.comparisonRows,
    }),
  );
  if (page.faq.length) {
    parts.push(faqSection("Frequently Asked Questions", page.faq));
  }
  parts.push(`<h2>${heading(page.serviceAreaTitle, page.serviceAreaAccent)}</h2>`);
  parts.push(`<p>${page.serviceAreaIntro}</p>`);
  parts.push("<ul>");
  for (const city of page.cities) {
    parts.push(`<li><strong>${city.city}</strong> — ${city.note}</li>`);
  }
  parts.push("</ul>");
  parts.push("<p>We also handle ");
  parts.push(
    page.relatedLinks
      .filter((link) => link.href !== "/our-projects")
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join(", "),
  );
  parts.push(".</p>");
  parts.push(`<h2>${heading(page.closingTitle, page.closingAccent)}</h2>`);
  for (const paragraph of page.closingHtml) parts.push(`<p>${paragraph}</p>`);
  parts.push(
    `<p><strong>Free estimate:</strong> <a href="/#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="/#contact">Email FDZ Construction</a></p>`,
  );
  parts.push(trustParagraph());
  return parts.join("\n");
}
