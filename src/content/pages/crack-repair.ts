/** Shared copy for the Concrete Crack Repair page (React + prerender). */

import { OKLAHOMA_PHONE } from "../../lib/phones";
import { BUSINESS_ENTITY_ID } from "../../lib/localBusinessSchema";

export const CRACK_REPAIR_SLUG = "concrete-crack-repair-oklahoma-city";
export const CRACK_REPAIR_PATH = `/${CRACK_REPAIR_SLUG}`;

export const CRACK_REPAIR_TOWNS = [
  { name: "Oklahoma City", to: "/oklahoma-city-concrete" },
  { name: "Yukon", to: "/yukon-oklahoma-concrete" },
  { name: "Mustang", to: "/mustang-oklahoma-concrete" },
  { name: "Moore", to: "/moore-oklahoma-concrete" },
  { name: "Edmond", to: "/edmond-concrete" },
  { name: "Norman", to: "/norman-ok-concrete" },
] as const;

export const crackRepairFaq = [
  {
    question: "Are cracks in concrete normal?",
    answer:
      "Some are. Small shrinkage cracks and cracks along control joints are common as concrete cures and ages. Cracks that keep widening, have one side higher than the other, or let water collect are worth having evaluated.",
  },
  {
    question: "Will the repaired crack still be visible?",
    answer:
      "Usually, yes. Sealants and fillers rarely match the color and texture of aged concrete exactly. The goal of most crack repair is function: keeping water out and removing trip hazards. If appearance matters most, ask about resurfacing or section replacement.",
  },
  {
    question: "When can I walk or drive on the repair?",
    answer:
      "It depends on the material and the weather. <!-- TODO(owner): give FDZ's typical foot-traffic and vehicle-traffic times for sealant, epoxy and replaced panels --> We'll give you exact times with your estimate.",
  },
  {
    question: "Can you fix a crack so it never comes back?",
    answer:
      "We can't promise that. Concrete in Oklahoma moves with the soil. A good repair reduces water getting in and slows deterioration, and fixing the cause (drainage, support) gives it the best chance to last.",
  },
  {
    question: "Should I repair or replace my cracked driveway?",
    answer:
      "It depends on movement, support and how much of the driveway is affected. See our <a href='/driveway-repair-oklahoma-city' class='text-orange no-underline'>driveway repair</a> page for the full repair-vs-replace breakdown.",
  },
  {
    question: "Is a crack in my foundation serious?",
    answer:
      "Thin vertical cracks are common and often minor. Horizontal or stair-step cracks, cracks that keep growing, or doors and windows that start sticking can mean movement. See <a href='/foundation-repair-oklahoma-city' class='text-orange no-underline'>foundation repair</a>, and consider a structural engineer's assessment.",
  },
  {
    question: "Do you repair cracks for businesses?",
    answer:
      "Yes: parking lots, commercial slabs, sidewalks, loading docks and warehouse floors across the OKC metro.",
  },
];

export const crackRepairRelated = [
  { label: "Driveway Repair", to: "/driveway-repair-oklahoma-city" },
  { label: "Commercial Concrete Repair", to: "/commercial-concrete-repair-oklahoma-city" },
  { label: "Industrial Concrete Repair", to: "/industrial-concrete-repair-oklahoma-city" },
  { label: "Foundation Repair", to: "/foundation-repair-oklahoma-city" },
  { label: "Parking Lot Repair", to: "/concrete-parking-lot-repair-oklahoma-city" },
  { label: "2026 OKC concrete cost guide", to: "/blog/cost-of-concrete-oklahoma-city-2026" },
];

export function buildCrackRepairServiceJsonLd(canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Concrete crack repair",
    name: "Concrete Crack Repair in Oklahoma City",
    url: canonical,
    provider: { "@id": BUSINESS_ENTITY_ID },
    areaServed: CRACK_REPAIR_TOWNS.map((town) => ({
      "@type": "City",
      name: town.name,
      addressRegion: "OK",
    })),
  };
}

export function crackRepairPhoneHref() {
  return `tel:${OKLAHOMA_PHONE.tel}`;
}

export function crackRepairPhoneLabel() {
  return OKLAHOMA_PHONE.display;
}
