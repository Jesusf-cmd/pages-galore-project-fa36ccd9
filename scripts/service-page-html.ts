import { faqSection, processSection, trustParagraph } from "./prerender-helpers";
import type { RepairData } from "../src/content/repairPages";
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
