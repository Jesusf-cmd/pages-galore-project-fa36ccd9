import { faqSection, processSection, trustParagraph } from "./prerender-helpers";
import type { RepairData } from "../src/content/repairPages";
import type { ServiceInCityData } from "../src/content/serviceInCityPages";
import type { PoolDeckContent } from "../src/content/pages/pool-deck";
import type { ServicePageContent } from "../src/content/servicePageTypes";
import {
  CRACK_REPAIR_TOWNS,
  buildCrackRepairServiceJsonLd,
  crackRepairFaq,
  crackRepairPhoneHref,
  crackRepairPhoneLabel,
  crackRepairRelated,
} from "../src/content/pages/crack-repair";

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
  if (page.projectGallery?.photos?.length) {
    const galleryHeading = heading(
      page.projectGallery.title || "Related Project Evidence",
      page.projectGallery.titleAccent || "",
    );
    parts.push(`<h2>${galleryHeading}</h2>`);
    if (page.projectGallery.intro) parts.push(`<p>${page.projectGallery.intro}</p>`);
    parts.push("<ul>");
    for (const photo of page.projectGallery.photos) {
      parts.push(`<li><img src="${photo.src}" alt="${photo.alt}" /></li>`);
    }
    parts.push("</ul>");
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

/** Crawler HTML for /concrete-crack-repair-oklahoma-city. */
export function renderCrackRepairHtml(h1: string, canonical: string): string {
  const phone = crackRepairPhoneLabel();
  const tel = crackRepairPhoneHref();
  const towns = CRACK_REPAIR_TOWNS.map(
    (town) => `<a href="${town.to}">${town.name}</a>`,
  ).join(", ");
  const related = crackRepairRelated
    .map((item) => `<li><a href="${item.to}">${item.label}</a></li>`)
    .join("");
  const serviceJson = JSON.stringify(buildCrackRepairServiceJsonLd(canonical));

  return [
    `<script type="application/ld+json">${serviceJson}</script>`,
    `<h1>${h1}</h1>`,
    `<p>FDZ Construction repairs cracked concrete across the Oklahoma City metro for homeowners and businesses: driveways, patios, sidewalks, garage floors, parking lots and commercial slabs. We look at what's causing the crack before recommending a fix, so you pay for a repair that fits the problem.</p>`,
    `<p><a href="#estimate">Request Free On-Site Evaluation →</a> · <a href="${tel}">${phone}</a></p>`,
    `<p>Licensed, bonded &amp; insured · 2-year workmanship warranty · 8+ years in the OKC metro.</p>`,
    `<!-- TODO(owner): add 3–4 before/after crack repair photos with captions like "Driveway crack sealing, Yukon" and descriptive alt text -->`,
    `<p><a href="/our-projects">See more of our work →</a></p>`,
    `<h2>What We Repair</h2>`,
    `<h3>At home</h3>`,
    `<ul>`,
    `<li>Driveway cracks and failed joints (<a href="/driveway-repair-oklahoma-city">driveway repair</a> for settlement, aprons and replacement)</li>`,
    `<li>Patio and pool deck cracks</li>`,
    `<li>Sidewalk and walkway cracks, including trip hazards (<a href="/sidewalks-oklahoma-city">sidewalks</a>)</li>`,
    `<li>Garage floor and slab cracks</li>`,
    `<li>Cracks in foundations: see <a href="/foundation-repair-oklahoma-city">foundation repair</a> for signs of movement</li>`,
    `</ul>`,
    `<h3>For businesses</h3>`,
    `<ul>`,
    `<li>Parking lot cracks and failed joints (<a href="/concrete-parking-lot-repair-oklahoma-city">parking lot repair</a>)</li>`,
    `<li>Cracked commercial slabs and sidewalks (<a href="/commercial-concrete-repair-oklahoma-city">commercial concrete repair</a>)</li>`,
    `<li>Warehouse and industrial floor cracks: forklift-traffic joints usually need a rigid joint filler or a slab repair, not just a flexible sealant (<a href="/industrial-concrete-repair-oklahoma-city">industrial concrete repair</a> and <a href="/warehouse-slab-repair-oklahoma-city">warehouse slab repair</a>)</li>`,
    `<li>Loading dock and dock-edge cracking (<a href="/loading-dock-concrete-repair-oklahoma-city">loading dock concrete repair</a>)</li>`,
    `<li>Repairing trip hazards on walkways and ramps (<a href="/ada-concrete-ramps-oklahoma-city">ADA ramps</a>)</li>`,
    `</ul>`,
    `<h2>Repair or Replace? How We Decide</h2>`,
    `<p>Whether a crack can be repaired depends on more than its width. On-site, we look at four things:</p>`,
    `<ul>`,
    `<li><strong>Is it still moving?</strong> A dormant crack can usually be sealed or filled. An active crack, still opening or shifting, needs a flexible repair or a fix to whatever is moving it.</li>`,
    `<li><strong>What's underneath?</strong> Settlement or a washed-out base means sealing the surface alone won't hold.</li>`,
    `<li><strong>How's the surrounding concrete?</strong> A few cracks in sound concrete are repairable. Widespread cracking, crumbling or panels that have sunk or heaved often point to section replacement.</li>`,
    `<li><strong>What does the slab carry?</strong> A patio, a driveway and a forklift aisle each need a different repair.</li>`,
    `</ul>`,
    `<p>Often the best value is in between: replace the worst panels and repair the rest. If a crack suggests structural or foundation movement, we'll tell you, and recommend a structural engineer's assessment where it's warranted. Our evaluation is a contractor's estimate, not an engineering report.</p>`,
    `<h2>Common Crack Types We See</h2>`,
    `<ul>`,
    `<li><strong>Hairline / shrinkage:</strong> thin, random lines from curing. Usually cosmetic. Sealing can help keep water out.</li>`,
    `<li><strong>Along a control joint:</strong> the slab cracking where it was designed to. Usually handled by joint sealing.</li>`,
    `<li><strong>Settlement:</strong> one side lower than the other. The support underneath needs attention.</li>`,
    `<li><strong>Heave:</strong> raised edges, often from clay soil swelling or roots. Often a trip hazard.</li>`,
    `<li><strong>Spalling / scaling:</strong> flaking or pitted surface rather than a line. Surface repair or resurfacing.</li>`,
    `<li><strong>Wide, growing or through a foundation:</strong> get it evaluated. May need a structural assessment.</li>`,
    `</ul>`,
    `<h2>How We Repair Cracks</h2>`,
    `<ul>`,
    `<li><strong>Rout, clean and seal:</strong> opens the crack into a clean channel, filled with a flexible sealant that can move with the slab</li>`,
    `<li><strong>Structural epoxy fill:</strong> for dormant cracks where the two sides need to be bonded</li>`,
    `<li><strong>Joint sealing and resealing:</strong> replaces failed joint sealant to reduce water and debris getting under the slab</li>`,
    `<li><strong>Spall patching and resurfacing:</strong> rebuilds damaged surfaces</li>`,
    `<li><strong>Trip-hazard grinding:</strong> removes small lips between panels</li>`,
    `<li><strong>Foam lifting / mudjacking:</strong> raises settled panels back toward level</li>`,
    `<li><strong>Section replacement:</strong> saw-cut and replace only the panels that can't be repaired</li>`,
    `</ul>`,
    `<!-- TODO(owner): confirm each method above; add or remove before publishing -->`,
    `<p>Sealing helps reduce water and debris getting into a crack. It doesn't stop the slab from moving. When movement continues, the repair may need maintenance over time.</p>`,
    `<h2>What Crack Repair Costs</h2>`,
    `<p>Cost depends on the total length of cracking, the repair method, access, whether panels need lifting or replacing, and the surface (residential flatwork vs. commercial slab).</p>`,
    `<ul>`,
    `<li>Joint sealing (typical driveway): $300–$800</li>`,
    `<li>Single-panel replacement: $400–$1,200 per panel</li>`,
    `</ul>`,
    `<!-- TODO(owner): add a minimum service charge and per-linear-foot crack sealing range if FDZ wants to publish them -->`,
    `<p>For broader pricing, see our <a href="/blog/cost-of-concrete-oklahoma-city-2026">2026 Oklahoma City concrete cost guide</a>.</p>`,
    `<h3>How the Estimate Works</h3>`,
    `<ol>`,
    `<li>Send a few details and photos (form below)</li>`,
    `<li>We visit, check the crack, the support underneath and drainage</li>`,
    `<li>You get a written estimate with the recommended repair and any alternatives</li>`,
    `</ol>`,
    `<h2 id="estimate">Get Your Cracked Concrete Looked At</h2>`,
    `<p>Send us a few photos or call <a href="${tel}">${phone}</a>. We'll come out, check what's causing the crack and give you a written estimate with straight answers.</p>`,
    `<p><a href="/?from=concrete-crack-repair-oklahoma-city#estimate">Request Free On-Site Evaluation →</a> · <a href="${tel}">${phone}</a></p>`,
    `<h2>Why Concrete Cracks in Oklahoma</h2>`,
    `<ul>`,
    `<li>Expansive clay soil that swells and shrinks with moisture</li>`,
    `<li>Repeated freeze-thaw cycles in winter</li>`,
    `<li>Heavy spring rain and drainage running toward slabs</li>`,
    `</ul>`,
    `<p>That's why we look at drainage and the base, not just the crack.</p>`,
    `<h3>Areas We Serve</h3>`,
    `<p>${towns}.</p>`,
    faqSection("Concrete Crack Repair FAQ", crackRepairFaq),
    `<h2>More From FDZ Construction</h2>`,
    `<ul>${related}</ul>`,
    `<p><strong>Free estimate:</strong> <a href="/?from=concrete-crack-repair-oklahoma-city#estimate">Estimate form</a> · <a href="${tel}">${phone}</a> · <a href="/#contact">Email FDZ Construction</a></p>`,
    trustParagraph(),
  ].join("\n");
}
