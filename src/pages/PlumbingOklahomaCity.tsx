import { useEffect } from "react";
import ServicePage from "@/components/ServicePageTemplate";

const PAGE_URL = "https://fdzconstruction.com/plumbing-oklahoma-city";
const AREAS_SERVED = ["Oklahoma City", "Edmond", "Yukon"];

function useServiceSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "plumbing-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Plumbing Repair and Installation",
      name: "Plumbing Services Oklahoma City",
      description:
        "General plumbing repair, drain cleaning, water heater service, leak detection, and sewer line repair across the Oklahoma City metro.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#organization" },
      areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name, addressRegion: "OK" })),
    });
    document.getElementById("plumbing-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("plumbing-service-schema")?.remove(); };
  }, []);
}

export default function PlumbingOklahomaCity() {
  useServiceSchema();

  return (
    <ServicePage
      enriched
      currentServiceSlug="plumbing-oklahoma-city"
      metaTitle="Plumbing Services Oklahoma City | FDZ Construction LLC"
      metaDescription="Plumbing repair, drain cleaning, water heaters, leak detection & sewer line service in Oklahoma City. Licensed plumbers. Call (405) 458-4805."
      eyebrow="OKC Metro · Plumbing Repair & Installation · Licensed & Insured"
      title="Oklahoma City"
      titleAccent="Plumbing Services."
      description="FDZ Construction's licensed plumbers handle everything from a slow drain to a full sewer line replacement — for homeowners and businesses across the OKC metro, with the same crew that handles the concrete restoration when a job requires it."
      introText="FDZ Construction LLC's plumbing team covers the full range of residential and commercial plumbing — general repair, drain cleaning, water heater service, and leak detection. Sewer line repair and installation is a distinct specialty of ours: see our <a href='/sewer-line-repair-oklahoma-city'>dedicated sewer line repair page</a> for the full breakdown of methods, process, and FAQ."
      localExpertiseNote="Oklahoma's hard water accelerates mineral buildup in pipes and water heaters over time, and the same expansive clay soil that stresses driveways and foundations also stresses buried plumbing lines. Both are conditions we plan around, not surprises we discover halfway through a job."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Plumbing Services We Offer",
        items: [
          {
            title: "General Plumbing Repair",
            bullets: [
              "Leak repair, fixture repair and replacement, and general plumbing troubleshooting",
              "Residential and commercial service calls across the OKC metro",
            ],
          },
          {
            title: "Drain Cleaning",
            bullets: [
              "Clearing slow or clogged drains in sinks, tubs, and floor drains",
              "Diagnosis of recurring clogs that point to a deeper line issue",
            ],
          },
          {
            title: "Water Heater Repair & Installation",
            bullets: [
              "Repair for water heaters that are underperforming, leaking, or failing intermittently",
              "Full replacement and new installation, including gas and electrical coordination through our multi-trade team",
            ],
          },
          {
            title: "Leak Detection",
            bullets: [
              "Locating hidden leaks before they cause structural or water damage",
              "Straightforward reporting on what we find and what it takes to fix it",
            ],
          },
          {
            title: "Sewer Line Repair & Installation",
            bullets: [
              "Trenchless pipe bursting, traditional excavation repair, spot repair, and full replacement or new installation",
              "One crew handles the excavation and the concrete restoration — no coordinating a separate concrete contractor",
              "Full detail on methods, symptoms, local soil conditions, and process: <a href='/sewer-line-repair-oklahoma-city'>see our dedicated sewer line repair page →</a>",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Warning Signs",
          title: "Signs You Need",
          titleAccent: "a Plumber.",
          content: [
            "Beyond the sewer-specific symptoms covered on our <a href='/sewer-line-repair-oklahoma-city'>sewer line repair page</a>, these are the signs that usually mean a plumbing call is overdue:",
            "▸ Active leaks, even small ones<br/>▸ Low water pressure throughout the house<br/>▸ Slow drains in more than one fixture<br/>▸ Water heater issues — no hot water, inconsistent temperature, or visible leaking<br/>▸ Unexplained increases in your water bill",
          ],
          infoBlock:
            "If you're seeing any of these, call <a href='tel:4054584805'>(405) 458-4805</a> and we'll get a plumber out to look at it.",
        },
      ]}
      whyChooseUs={[
        { icon: "🔧", title: "Licensed Plumbers", description: "Fully licensed plumbers in Oklahoma. License #: 75456." },
        { icon: "🧰", title: "Part of a Multi-Trade Team", description: "A water heater replacement often touches plumbing, electrical, and gas. We coordinate that internally instead of sending you to find separate contractors." },
        { icon: "🚧", title: "Sewer Line Specialists", description: "Our sewer line repair work is handled by the same crew that does the excavation and the concrete restoration — no handoff to a second contractor." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every plumbing repair or installation we complete is backed by the same 2-year workmanship warranty as the rest of our work." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes for plumbing work. We inspect the issue and give you a written estimate before work starts." },
        { icon: "📍", title: "Based in South OKC", description: "We're at 7004 S Indiana Ave — OKC gets our fastest response of anywhere we serve." },
      ]}
      trustLine="FDZ Construction LLC's plumbers are licensed, bonded, and insured in Oklahoma, backed by the same 2-year workmanship warranty as our concrete, HVAC, and electrical work."
      processEyebrow="Our Plumbing Process"
      processTitle="How We Handle"
      processTitleAccent="Every Plumbing Call."
      processIntro="Whether it's a single leaky fixture or a full sewer line replacement, every plumbing job follows the same process."
      processSteps={[
        { title: "Diagnosis", description: "We inspect the fixture, line, or system to identify the actual cause — not just the symptom you're seeing." },
        { title: "Written estimate", description: "You get a clear, itemized estimate before any work starts. No phone quotes, no surprise add-ons." },
        { title: "Repair or replacement", description: "We complete the work with the right materials for Oklahoma's water conditions and soil, whether that's a fixture swap or a full line replacement." },
        { title: "Test & walkthrough", description: "We test water pressure, drainage, and any affected fixtures, then walk you through what was done before we leave." },
      ]}
      faq={[
        { question: "Do you handle sewer line repair, or is that a separate company?", answer: "Sewer line repair is one of our specialties, handled by the same team — not outsourced. See our dedicated sewer line repair page for the full detail on methods and process." },
        { question: "Do you offer emergency plumbing service?", answer: "Yes — active leaks and no-water situations get priority response. See our emergency services page for details." },
        { question: "Can you replace a water heater that involves electrical or gas work?", answer: "Yes — water heater replacement often touches plumbing, electrical, and gas, and we coordinate all of it internally rather than requiring you to hire separate contractors." },
        { question: "How does Oklahoma's hard water affect my plumbing?", answer: "Hard water accelerates mineral buildup inside pipes and water heaters over time, which can reduce water heater lifespan and contribute to reduced water pressure. We factor this into repair and replacement recommendations." },
        { question: "Do you work on both residential and commercial plumbing?", answer: "Yes — general repair, drain cleaning, water heaters, leak detection, and sewer line work for homes and businesses across the OKC metro." },
      ]}
    />
  );
}
