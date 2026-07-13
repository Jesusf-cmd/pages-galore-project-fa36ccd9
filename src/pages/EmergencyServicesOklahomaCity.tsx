import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import TradeBadge, { type TradeModel } from "@/components/TradeBadge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://fdzconstruction.com/emergency-services-oklahoma-city";

const trades: {
  icon: string;
  title: string;
  desc: string;
  to: string;
  linkLabel: string;
  model: TradeModel;
  secondaryTo?: string;
  secondaryLabel?: string;
}[] = [
  {
    icon: "🧱",
    title: "Concrete Emergencies",
    desc: "A collapsed or heaving slab, a driveway or sidewalk that's become a safety hazard, or storm damage to a concrete structure — we respond and stabilize the situation before doing the full repair.",
    to: "/driveways-oklahoma-city",
    linkLabel: "See Concrete Services",
    model: "self-performed",
  },
  {
    icon: "🌡️",
    title: "HVAC Emergencies",
    desc: "No heat during a cold snap or no cooling during peak OKC summer heat isn't a wait-a-few-days problem. Our HVAC technicians prioritize these calls.",
    to: "/hvac-oklahoma-city",
    linkLabel: "See HVAC Services",
    model: "gc-managed",
  },
  {
    icon: "🚰",
    title: "Plumbing Emergencies",
    desc: "Active leaks, no water, and sewer line failures — including backups, standing water near the cleanout, or a line that's failed outright — get priority response. Sewer emergencies are handled by our dedicated sewer team.",
    to: "/plumbing-oklahoma-city",
    linkLabel: "See Plumbing Services",
    model: "gc-managed",
    secondaryTo: "/sewer-line-repair-oklahoma-city",
    secondaryLabel: "Sewer Line Repair →",
  },
  {
    icon: "⚡",
    title: "Electrical Emergencies",
    desc: "A burning smell, sparking, or total loss of power is not a wait-and-see situation. Our licensed electricians treat active electrical hazards as priority calls.",
    to: "/electrical-oklahoma-city",
    linkLabel: "See Electrical Services",
    model: "gc-managed",
  },
];

function useEmergencySchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "emergency-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Emergency Home Services",
      name: "24/7 Emergency Services Oklahoma City",
      description:
        "Emergency concrete, HVAC, plumbing, and electrical service across the Oklahoma City metro — one company, one call, for every trade.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#organization" },
      areaServed: ["Oklahoma City", "Edmond", "Yukon"].map((name) => ({ "@type": "City", name, addressRegion: "OK" })),
    });
    document.getElementById("emergency-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("emergency-service-schema")?.remove(); };
  }, []);
}

export default function EmergencyServicesOklahomaCity() {
  useEmergencySchema();
  const title = "24/7 Emergency Services Oklahoma City | Concrete, HVAC, Plumbing & Electrical | FDZ Construction LLC";
  const description = "24/7 emergency concrete, HVAC, plumbing & electrical service in Oklahoma City. One call handles every trade. Call (405) 458-4805.";
  useSEO({
    title,
    description,
    canonical: PAGE_URL,
    og: { title, description, type: "website", url: PAGE_URL },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">OKC Metro · 24/7 Emergency Service · Licensed &amp; Insured</span>
        <h1 className="max-w-[820px] mb-5">24/7 Emergency Services in<br/><span className="text-orange">Oklahoma City.</span></h1>
        <p className="prose-muted max-w-[680px] mb-4">
          One call handles concrete, HVAC, plumbing, and electrical emergencies — no juggling separate contractors while you're dealing with an active problem.
        </p>
        <p className="text-[0.78rem] text-muted-text max-w-[680px] mb-8 leading-relaxed">
          Concrete emergencies are handled by our own self-performed crew. For HVAC, plumbing, and electrical emergencies, FDZ acts as your general contractor, managing licensed specialists so you still get one point of contact, one invoice, and one workmanship warranty.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:4054584805" className="btn-primary">📞 Call (405) 458-4805</a>
          <Link to="/#estimate" className="btn-outline">Get Free Estimate →</Link>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Emergency Services by Trade</div>
          <h2 className="mb-8">What Counts as an<br/><em className="h2-accent">Emergency, By Trade.</em></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {trades.map((t, i) => (
              <div key={i} className="bg-stone p-6 md:p-8">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-2xl">{t.icon}</div>
                  <TradeBadge model={t.model} />
                </div>
                <h3 className="text-base mb-2">{t.title}</h3>
                <p className="text-[0.85rem] text-muted-text leading-relaxed font-light mb-4">{t.desc}</p>
                <div className="flex flex-col gap-1.5">
                  <Link to={t.to} className="text-[0.72rem] text-orange font-bold tracking-[0.06em] uppercase no-underline hover:underline">{t.linkLabel} →</Link>
                  {t.secondaryTo && (
                    <Link to={t.secondaryTo} className="text-[0.72rem] text-orange font-bold tracking-[0.06em] uppercase no-underline hover:underline">{t.secondaryLabel}</Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Why FDZ</div>
          <h2 className="mb-4">Why One Company for<br/><em className="h2-accent">Every Trade.</em></h2>
          <p className="prose-muted max-w-[760px] mb-5">
            When something breaks, the last thing you want is to spend the next hour calling around to find out who even handles your problem. FDZ Construction LLC covers concrete, HVAC, plumbing, and electrical under one roof — so one call gets you to the right crew, faster.
          </p>
          <p className="prose-muted max-w-[760px]">
            That means faster response, one point of contact instead of several, and no coordinating multiple contractors during an already stressful situation. Every technician is licensed in their trade, and every job — emergency or scheduled — is backed by the same 2-year workmanship warranty.
          </p>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
