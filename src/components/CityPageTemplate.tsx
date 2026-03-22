import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import CityGrid from "@/components/CityGrid";
import ProcessSteps from "@/components/ProcessSteps";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

interface CityPageProps {
  city: string;
  county: string;
  description: string;
  localContent: string[];
  servicesContent: string[];
  table?: { headers: string[]; rows: string[][] };
  faq: { question: string; answer: string }[];
  zipCodes?: string;
  nearbyLinks?: { name: string; to: string }[];
}

export default function CityPageTemplate({ city, county, description, localContent, servicesContent, table, faq, zipCodes, nearbyLinks }: CityPageProps) {
  useSEO({
    title: `Concrete Contractor in ${city} OK | Redwood Construction LLC`,
    description: `Professional concrete contractor in ${city}, Oklahoma. Driveways, patios, slabs, and foundations built for local soil conditions. Call for a free estimate.`,
  });
  const processSteps = [
    { title: "Site prep & excavation", description: "We start by marking the area, calling 811 for utility locates, and excavating to the correct depth for your soil conditions." },
    { title: "Base compaction", description: "We install a compacted aggregate base — minimum 4 inches on standard work, 6 inches on problem clay." },
    { title: "Forming & reinforcement", description: "Steel forms are set to grade. Rebar is placed on chairs at mid-slab depth and tied at intersections." },
    { title: "Concrete pour & finish", description: "Ready-mix concrete from a local batch plant — we specify 4,000 PSI minimum for driveways and structural work." },
    { title: "Curing & sealing", description: "Curing compound is applied immediately. Sealer after full cure. Final walkthrough before leaving." },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{city} · {county} · Licensed & Insured</span>
        <h1 className="max-w-[820px] mb-5">{city} Concrete<br/><span className="text-orange">Contractors.</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4052470027" className="btn-outline">📞 (405) 247-0027</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Concrete in {city}</div>
          <h2 className="mb-4">Local Knowledge.<br/><em className="h2-accent">{city} Results.</em></h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
            <div>
              {localContent.map((p, i) => (
                <p key={i} className="prose-muted mb-5" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">4.9★</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Google rating</div></div>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">500+</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">OKC metro projects</div></div>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">24hr</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Estimate response</div></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Services for {city} Homeowners & Businesses</div>
          <h2 className="mb-4">What We Do<br/><em className="h2-accent">in {city}.</em></h2>
          {servicesContent.map((p, i) => (
            <p key={i} className="prose-muted mb-5" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          {table && (
            <table className="cost-table">
              <thead><tr>{table.headers.map((h, k) => <th key={k}>{h}</th>)}</tr></thead>
              <tbody>
                {table.rows.map((row, k) => (
                  <tr key={k}>{row.map((cell, l) => <td key={l} dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </ScrollReveal>

      {nearbyLinks && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Nearby Service Areas</div>
            <h2 className="mb-4">We Also Cover<br/><em className="h2-accent">Surrounding Cities.</em></h2>
            <p className="prose-muted mb-4">Our {city} crew covers all of {county} and connects seamlessly with our OKC metro-wide coverage.</p>
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Our Concrete Process</div>
          <h2 className="mb-4">How We Build<br/><em className="h2-accent">Concrete In {city} That Lasts.</em></h2>
          <ProcessSteps steps={processSteps} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <FAQ items={faq} eyebrow="FAQ" title={`Common Questions About<br/><em class="h2-accent">Concrete in ${city}.</em>`} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Our Concrete Services</div>
          <h2 className="mb-4">Every Concrete Service<br/><em className="h2-accent">{city} Needs.</em></h2>
          <ServicesFooterGrid />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Service Areas We Cover</div>
          <h2 className="mb-4">Concrete Services Across<br/><em className="h2-accent">the OKC Metro.</em></h2>
          <CityGrid />
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
