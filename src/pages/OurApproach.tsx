import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import TradeBadge from "@/components/TradeBadge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const PAGE_URL = "https://fdzconstruction.com/our-approach";

function useApproachSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "our-approach-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "How FDZ Construction Works — Self-Performed Concrete & General Contracted Trades",
      description:
        "FDZ Construction LLC self-performs all concrete work with its own crews and equipment. HVAC, plumbing, and electrical work is delivered as general contractor, managing licensed trade specialists under one invoice and one warranty.",
      url: PAGE_URL,
      isPartOf: { "@id": "https://fdzconstruction.com/#organization" },
    });
    document.getElementById("our-approach-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("our-approach-schema")?.remove(); };
  }, []);
}

export default function OurApproach() {
  useApproachSchema();
  const title = "How We Work — Self-Performed Concrete & General Contracted Trades | FDZ Construction LLC";
  const description = "FDZ self-performs all concrete work with our own crews. HVAC, plumbing & electrical are delivered as general contractor, managing licensed specialists under one invoice and warranty.";
  useSEO({
    title,
    description,
    canonical: PAGE_URL,
    noindex: true,
    og: { title, description, type: "website", url: PAGE_URL },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">How FDZ Construction Works</span>
        <h1 className="max-w-[820px] mb-5">Self-Performed Concrete.<br/><span className="text-orange">Managed Trades.</span></h1>
        <p className="prose-muted max-w-[680px] mb-8">
          FDZ Construction LLC delivers every project one of two ways, depending on the trade — and we think you should know exactly which one applies before you hire us.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="mb-4"><TradeBadge model="self-performed" /></div>
          <div className="section-eye">Concrete</div>
          <h2 className="mb-5">Our Crews. Our Equipment.<br/><em className="h2-accent">Every Pour.</em></h2>
          <p className="prose-muted mb-5 max-w-[820px]">
            Concrete is where FDZ Construction started, and it's still 100% self-performed. Driveways, patios, slabs, foundations, retaining walls, sidewalks, sewer line excavation and restoration, and commercial concrete are all poured and finished by our own employees — using our own equipment, on our own schedule.
          </p>
          <p className="prose-muted mb-5 max-w-[820px]">
            Nothing gets handed off to a subcontractor we don't control. That means the crew that shows up to give you an estimate is the same crew that does the base prep, the same crew that pours and finishes the concrete, and the same crew you call if something needs to be made right under warranty. Direct quality control, start to finish, with one company accountable for the result.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="mb-4"><TradeBadge model="gc-managed" /></div>
          <div className="section-eye">HVAC, Plumbing & Electrical</div>
          <h2 className="mb-5">One Call. One Invoice.<br/><em className="h2-accent">One Warranty.</em></h2>
          <p className="prose-muted mb-5 max-w-[820px]">
            For HVAC, plumbing, and electrical work, FDZ Construction acts as your general contractor. We don't ask you to go find and vet a separate HVAC company, a separate plumber, and a separate electrician — we manage licensed, vetted trade specialists on your project so you only have to deal with one company.
          </p>
          <p className="prose-muted mb-5 max-w-[820px]">
            That's a common, well-established model for multi-trade contractors, and it exists for a good reason: no single company holds every trade license in-house, but a good general contractor still gives you a single point of contact, a single itemized invoice, and a single workmanship warranty covering the whole job — even though the on-the-tools work is performed by our licensed partner tradespeople, not FDZ's in-house concrete crew.
          </p>
          <p className="prose-muted max-w-[820px]">
            What that looks like in practice: you call FDZ, we scope the HVAC, plumbing, or electrical work, we schedule a licensed specialist from our vetted partner network, and FDZ oversees the job from start to final walkthrough. You get one bill and one warranty — we handle the coordination.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What to expect</div>
          <h2 className="mb-8">Every Project,<br/><em className="h2-accent">Step by Step.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-6 md:p-8">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-3">Concrete — Self-Performed</div>
              <ol className="space-y-3 pl-0 list-none">
                {[
                  "Free on-site estimate from our own crew",
                  "Written, itemized quote — no subcontractor markup",
                  "Our crew handles excavation, base prep, and forming",
                  "Our crew pours, finishes, and cures the concrete",
                  "Final walkthrough with the same team, backed by our 2-year warranty",
                ].map((step, i) => (
                  <li key={i} className="flex items-baseline gap-2 text-[0.85rem] text-muted-text leading-relaxed font-light">
                    <span className="text-orange flex-shrink-0">▸</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-stone p-6 md:p-8">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-3">HVAC, Plumbing & Electrical — GC Managed</div>
              <ol className="space-y-3 pl-0 list-none">
                {[
                  "You call FDZ — one number for every trade",
                  "We scope the job and give you a written estimate",
                  "We schedule a licensed specialist from our vetted partner network",
                  "FDZ oversees the work through completion",
                  "You get one invoice and one workmanship warranty from FDZ",
                ].map((step, i) => (
                  <li key={i} className="flex items-baseline gap-2 text-[0.85rem] text-muted-text leading-relaxed font-light">
                    <span className="text-orange flex-shrink-0">▸</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="info-block">
            <p>
              FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years of experience serving the OKC metro, and every project, self-performed or general contracted, is backed by a 2-year workmanship warranty.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
