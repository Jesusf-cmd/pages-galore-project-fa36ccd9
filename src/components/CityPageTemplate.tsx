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
  metaDescription?: string;
}

export default function CityPageTemplate({ city, county, description, localContent, servicesContent, table, faq, zipCodes, nearbyLinks, metaDescription }: CityPageProps) {
  useSEO({
    title: `Concrete Contractor in ${city} OK | FDZ Construction LLC`,
    description: metaDescription || `Professional concrete contractor in ${city}, Oklahoma. Driveways, patios, slabs, and foundations built for local soil conditions. Call for a free estimate.`,
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
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
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
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">4.9★</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Customer rating</div></div>
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

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Services in {city}</div>
          <h2 className="mb-4">Concrete Services<br/><em className="h2-accent">Available in {city}.</em></h2>
          <p className="prose-muted mb-6 max-w-[760px]">
            FDZ Construction offers the full range of residential and commercial concrete work for {city} homeowners and businesses. Every service below is delivered by the same crew, with the same materials and standards we use across the OKC metro.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/driveways-oklahoma-city" className="text-orange no-underline hover:underline">→ Concrete driveways in {city}</a></li>
            <li><a href="/patios-oklahoma-city" className="text-orange no-underline hover:underline">→ Stamped patios and slabs in {city}</a></li>
            <li><a href="/foundations-oklahoma-city" className="text-orange no-underline hover:underline">→ Foundation contractors in {city}</a></li>
            <li><a href="/sidewalks-oklahoma-city" className="text-orange no-underline hover:underline">→ Sidewalks and curb work in {city}</a></li>
            <li><a href="/commercial-concrete-oklahoma-city" className="text-orange no-underline hover:underline">→ Commercial concrete in {city}</a></li>
          </ul>
        </section>
      </ScrollReveal>

      {nearbyLinks && nearbyLinks.length > 0 && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Nearby Service Areas</div>
            <h2 className="mb-4">Nearby Areas<br/><em className="h2-accent">We Serve.</em></h2>
            <p className="prose-muted mb-4 max-w-[760px]">Our {city} crew also covers the surrounding {county} and OKC metro communities — same crew, same pricing.</p>
            <ul className="flex flex-wrap gap-4" style={{ listStyle: "none", padding: 0 }}>
              {nearbyLinks.map((n) => (
                <li key={n.to}><Link to={n.to} className="text-orange no-underline hover:underline">→ Concrete contractor in {n.name}</Link></li>
              ))}
            </ul>
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
