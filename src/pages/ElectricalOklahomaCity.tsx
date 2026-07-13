import { useEffect } from "react";
import ServicePage from "@/components/ServicePageTemplate";

const PAGE_URL = "https://fdzconstruction.com/electrical-oklahoma-city";
const AREAS_SERVED = ["Oklahoma City", "Edmond", "Yukon"];

function useServiceSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "electrical-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Electrical Repair and Installation",
      name: "Electrical Services Oklahoma City",
      description:
        "Residential and commercial electrical repair and installation across the Oklahoma City metro — panel upgrades, wiring, lighting, generators, EV chargers, and emergency service.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#organization" },
      areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name, addressRegion: "OK" })),
    });
    document.getElementById("electrical-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("electrical-service-schema")?.remove(); };
  }, []);
}

export default function ElectricalOklahomaCity() {
  useServiceSchema();

  return (
    <ServicePage
      enriched
      currentServiceSlug="electrical-oklahoma-city"
      metaTitle="Electrical Services Oklahoma City | FDZ Construction LLC"
      metaDescription="Residential & commercial electrical services in Oklahoma City. Panel upgrades, wiring, lighting, generators & EV chargers. Licensed. Call (405) 458-4805."
      eyebrow="OKC Metro · Electrical Repair & Installation · Licensed & Insured"
      badge="gc-managed"
      title="Oklahoma City"
      titleAccent="Electrical Services."
      description="From a flickering light to a full panel upgrade, FDZ Construction's licensed electricians handle residential and commercial electrical repair and installation across the OKC metro — including emergency service when something can't wait."
      modelNote="As your general contractor, FDZ manages licensed electrical specialists on your project — you get one point of contact, one invoice, and one workmanship warranty, without having to vet or coordinate a separate contractor yourself."
      introText="FDZ Construction LLC's electrical team handles repair and installation for homes and businesses across the Oklahoma City metro — panel upgrades, wiring and outlet repair, lighting, generator and EV charger installation, and emergency electrical service. Our licensed electricians work to code on every job, residential or commercial."
      localExpertiseNote="Oklahoma City's severe storm season — high winds, hail, and tornado activity — brings real power surge and outage risk. A properly protected panel and, for some homes, a backup generator aren't optional extras here; they're a practical response to conditions this area actually sees every spring."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Electrical Services We Offer",
        items: [
          {
            title: "Panel Upgrades & Repairs",
            bullets: [
              "Panel upgrades for homes with outdated or undersized electrical service",
              "Repairs for panels that trip breakers frequently or show signs of wear",
              "Capacity checks before adding major new equipment — including HVAC systems",
            ],
          },
          {
            title: "Outlet & Wiring Repair",
            bullets: [
              "Repair and replacement of faulty outlets, switches, and wiring",
              "Rewiring for older homes with outdated or unsafe wiring",
              "Diagnosis of warm outlets, burning smells, or intermittent power — don't wait on these",
            ],
          },
          {
            title: "Lighting Installation",
            bullets: [
              "Interior and exterior lighting installation for residential and commercial properties",
              "Fixture replacement and new circuit runs where needed",
            ],
          },
          {
            title: "Generator Installation",
            bullets: [
              "Backup generator installation for homes and businesses concerned about storm-related outages",
              "Proper transfer switch installation so backup power integrates safely with your panel",
            ],
          },
          {
            title: "EV Charger Installation",
            bullets: [
              "Home EV charger installation, including panel capacity evaluation before install",
              "Proper circuit sizing and code-compliant installation",
            ],
          },
          {
            title: "Emergency Electrical Service",
            bullets: [
              "Priority response for active electrical hazards — burning smells, sparking, or total loss of power",
              "See our <a href='/emergency-services-oklahoma-city'>emergency services</a> page for how this works across all our trades",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Warning Signs",
          title: "Signs You Need",
          titleAccent: "an Electrician.",
          content: [
            "Some electrical issues can wait for a scheduled appointment. Others can't. These are the signs to watch for:",
            "▸ Flickering lights<br/>▸ Breakers that trip frequently<br/>▸ Warm or discolored outlets<br/>▸ Any burning smell — treat this as urgent<br/>▸ Outdated wiring in an older home you haven't had inspected",
          ],
          infoBlock:
            "A burning smell or warm outlet is not a wait-and-see situation. Call <a href='tel:4054584805'>(405) 458-4805</a> right away.",
        },
      ]}
      processEyebrow="Our Process"
      processTitle="From Inspection to"
      processTitleAccent="Final Test."
      processIntro="Every electrical job follows the same process — because electrical work is exactly the wrong place to cut corners."
      processSteps={[
        { title: "Inspection & diagnosis", description: "We inspect the panel, wiring, or fixture in question and diagnose the actual issue before recommending work." },
        { title: "Written estimate", description: "We give you a clear, written estimate for the repair or installation before any work starts." },
        { title: "Code-compliant service", description: "We complete the work to current electrical code — no shortcuts, whether it's a single outlet or a full panel upgrade." },
        { title: "Test & walkthrough", description: "We test everything under load and walk you through what was done before we leave." },
      ]}
      whyChooseUs={[
        { icon: "⚡", title: "Licensed Electricians", description: "Fully licensed electricians in Oklahoma. License #: [ELECTRICAL LICENSE # — TO BE PROVIDED]." },
        { icon: "🧰", title: "Part of a Multi-Trade Team", description: "Need a panel capacity check before an HVAC or generator install? We coordinate that internally instead of sending you to find a separate contractor." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every electrical repair or installation we complete is backed by the same 2-year workmanship warranty as the rest of our work." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes for electrical work. We inspect the site and give you a written estimate before work starts." },
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📍", title: "Based in South OKC", description: "We're at 7004 S Indiana Ave — OKC gets our fastest response of anywhere we serve." },
      ]}
      trustLine="FDZ Construction LLC's electricians are licensed, bonded, and insured in Oklahoma, backed by the same 2-year workmanship warranty as our concrete, HVAC, and plumbing work."
      faq={[
        { question: "Do you handle both residential and commercial electrical work?", answer: "Yes — panel upgrades, wiring, lighting, and installation work for homes and businesses across the OKC metro." },
        { question: "Do you offer emergency electrical service?", answer: "Yes — active hazards like burning smells, sparking, or total power loss get priority response. See our emergency services page for details." },
        { question: "Can you check if my panel can handle a new HVAC system or EV charger?", answer: "Yes — panel capacity checks are a routine part of our process before installing a new HVAC system, generator, or EV charger, since undersized panels are a common reason installs get delayed or fail inspection." },
        { question: "Do I need to rewire my whole house if it's older?", answer: "Not necessarily. We inspect the existing wiring and tell you honestly whether targeted repairs are sufficient or whether a fuller rewire is the safer long-term call." },
        { question: "Do you install generators and EV chargers?", answer: "Yes — including the panel and transfer switch work both require to integrate safely with your home's electrical system." },
      ]}
    />
  );
}
