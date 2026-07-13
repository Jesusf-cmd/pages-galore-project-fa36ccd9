import { useEffect } from "react";
import ServicePage from "@/components/ServicePageTemplate";

const PAGE_URL = "https://fdzconstruction.com/hvac-oklahoma-city";
const AREAS_SERVED = ["Oklahoma City", "Edmond", "Yukon"];

function useServiceSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "hvac-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "HVAC Repair and Installation",
      name: "HVAC Repair & Installation Oklahoma City",
      description:
        "HVAC repair, installation, replacement, and emergency service for residential and commercial properties across the Oklahoma City metro.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#organization" },
      areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name, addressRegion: "OK" })),
    });
    document.getElementById("hvac-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("hvac-service-schema")?.remove(); };
  }, []);
}

export default function HvacOklahomaCity() {
  useServiceSchema();

  return (
    <ServicePage
      enriched
      currentServiceSlug="hvac-oklahoma-city"
      metaTitle="HVAC Repair & Installation Oklahoma City | FDZ Construction LLC"
      metaDescription="HVAC repair, installation & emergency service in Oklahoma City. AC, furnace & heat pump specialists. Licensed & insured. Call (405) 458-4805."
      eyebrow="OKC Metro · HVAC Repair, Installation & Emergency Service · Licensed & Insured"
      badge="gc-managed"
      title="Oklahoma City HVAC Repair,"
      titleAccent="Installation & Emergency Service."
      description="When your AC quits in a 105° OKC summer or your furnace fails on a January cold snap, you need a crew that shows up fast and fixes it right. FDZ Construction's licensed HVAC technicians handle repair, installation, and emergency service for homes and businesses across the metro."
      modelNote="As your general contractor, FDZ manages licensed HVAC specialists on your project — you get one point of contact, one invoice, and one workmanship warranty, without having to vet or coordinate a separate contractor yourself."
      introText="FDZ Construction LLC's HVAC team handles repair, installation, replacement, and emergency no-heat/no-cool service for residential and commercial properties across the Oklahoma City metro. Whether it's an aging system on its last leg or a full new install for a renovation or addition, our licensed technicians size and service equipment for Oklahoma's actual climate — not a generic spec sheet."
      localExpertiseNote="Oklahoma City summers regularly push past 100°F and winters bring hard freezes and cold snaps — a system that's undersized or poorly installed struggles, or fails outright, exactly when you need it most. We size and install for OKC's real seasonal swings, not a mild-climate average."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "HVAC Services We Offer",
        items: [
          {
            title: "AC Repair & Replacement",
            bullets: [
              "Diagnostic service for units that aren't cooling, cycling oddly, or running constantly",
              "Repair when the fix is worth it; straightforward replacement guidance when it's not",
              "New AC installation sized to your home's actual square footage and layout — not a one-size guess",
            ],
          },
          {
            title: "Furnace Repair & Replacement",
            bullets: [
              "Diagnostic and repair for furnaces that won't start, short-cycle, or blow cold air",
              "Full furnace replacement for units at end of life or beyond economical repair",
              "Proper venting and safety checks on every furnace we touch",
            ],
          },
          {
            title: "Heat Pump Service",
            bullets: [
              "Repair and maintenance for heat pump systems covering both heating and cooling",
              "Replacement and new installation for homes switching to or upgrading heat pump systems",
            ],
          },
          {
            title: "Emergency No-Heat / No-Cool Service",
            bullets: [
              "Priority response when you have no heat during a cold snap or no cooling during peak summer heat",
              "Same crew that handles routine service — no unfamiliar subcontractor showing up at your door",
              "See our <a href='/emergency-services-oklahoma-city'>emergency services</a> page for how this works across all our trades",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Warning Signs",
          title: "Signs You Need",
          titleAccent: "HVAC Service.",
          content: [
            "Not sure if it's time to call? These are the signs Oklahoma City homeowners usually notice first:",
            "▸ No cooling or no heating<br/>▸ Unusual noises — banging, squealing, or grinding<br/>▸ Utility bills spiking without a clear reason<br/>▸ Uneven temperatures from room to room<br/>▸ System cycling on and off frequently<br/>▸ Weak or poor airflow from vents",
          ],
          infoBlock:
            "If any of these sound familiar, don't wait for a full breakdown. Call <a href='tel:4054584805'>(405) 458-4805</a> and we'll get a technician out to take a look.",
        },
        {
          eyebrow: "Local Climate Conditions",
          title: "Why Oklahoma City Climate Matters",
          titleAccent: "for Your HVAC System.",
          alt: true,
          content: [
            "Oklahoma City doesn't do mild. Summers regularly push past 100°F for stretches at a time, and winters bring hard freezes and sudden cold snaps — often within the same calendar year. That kind of range puts real stress on a heating and cooling system, and it's exactly why sizing and installation quality matter more here than in a milder climate.",
            "A system that's undersized for your home's square footage will run constantly and still struggle to keep up on the hottest or coldest days — driving up utility bills and shortening the equipment's life. An oversized system short-cycles, which wears out components faster and does a worse job controlling humidity. We size every installation for your actual home, not a generic average.",
          ],
        },
      ]}
      processEyebrow="Our Process"
      processTitle="From Diagnosis to"
      processTitleAccent="System Test."
      processIntro="Every HVAC call follows the same process — because guessing at what's wrong is how homeowners end up paying for the wrong fix."
      processSteps={[
        { title: "Inspection & diagnosis", description: "We inspect the system and diagnose the actual problem before recommending anything." },
        { title: "Repair vs. replacement recommendation", description: "We tell you plainly whether a repair makes sense or whether the system is better replaced — and give you a written estimate either way." },
        { title: "Service", description: "We complete the repair, replacement, or new installation to spec — sized and set up for your home, not a generic install." },
        { title: "System test & walkthrough", description: "We test the system under real conditions and walk you through what was done before we leave." },
      ]}
      whyChooseUs={[
        { icon: "🔧", title: "Licensed HVAC Technicians", description: "Fully licensed HVAC technicians in Oklahoma. License #: [HVAC LICENSE # — TO BE PROVIDED]." },
        { icon: "🧰", title: "Part of a Multi-Trade Team", description: "When an HVAC issue overlaps with electrical — like panel capacity for a new system — we handle it under one roof instead of sending you to find a separate electrician." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every HVAC repair or installation we complete is backed by the same 2-year workmanship warranty as the rest of our work." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes for HVAC work. We inspect the system and the site before giving you a written estimate." },
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📍", title: "Based in South OKC", description: "We're at 7004 S Indiana Ave — OKC gets our fastest response of anywhere we serve." },
      ]}
      trustLine="FDZ Construction LLC's HVAC technicians are licensed, bonded, and insured in Oklahoma, backed by the same 2-year workmanship warranty as our concrete, plumbing, and electrical work."
      faq={[
        { question: "How do I know if I need repair vs. replacement?", answer: "It depends on the age of the system, the cost of the repair relative to a new install, and how many previous repairs it's needed. We'll inspect the system and tell you honestly which option makes more sense for your situation." },
        { question: "Do you offer emergency HVAC service?", answer: "Yes — no-heat and no-cool situations get priority response. See our emergency services page for details on how that works." },
        { question: "Do you install new systems for additions or new construction?", answer: "Yes — we size and install HVAC systems for additions, new construction, and full system replacements, not just repairs on existing equipment." },
        { question: "Do you work on both AC and furnace systems?", answer: "Yes — we repair and install AC systems, furnaces, and heat pumps, so you're not calling a separate company for heating versus cooling." },
        { question: "How often should I have my HVAC system serviced?", answer: "Most manufacturers recommend annual service for each system — once for cooling before summer, once for heating before winter. Regular service catches small issues before they become full breakdowns." },
      ]}
    />
  );
}
