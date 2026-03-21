import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import CityGrid from "@/components/CityGrid";
import ProcessSteps from "@/components/ProcessSteps";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  sections: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    content: string[];
    alt?: boolean;
    stats?: { value: string; label: string }[];
    table?: { headers: string[]; rows: string[][] };
    infoBlock?: string;
  }[];
  faq: { question: string; answer: string }[];
  metaTitle?: string;
  metaDescription?: string;
}

export default function ServicePage({ eyebrow, title, titleAccent, description, sections, faq, metaTitle, metaDescription }: ServicePageProps) {
  useSEO({
    title: metaTitle || `${title} ${titleAccent} | MyConcreteEstimate`,
    description: metaDescription || description.replace(/<[^>]+>/g, "").slice(0, 155),
  });
  const processSteps = [
    { title: "Site prep & excavation", description: "We start by marking the area, calling 811 for utility locates, and excavating to the correct depth for your soil conditions. Problem soil gets flagged before the pour, not after." },
    { title: "Base compaction", description: "We install a compacted aggregate base — minimum 4 inches on standard OKC residential work, 6 inches on problem clay. This is the single biggest factor in whether your slab lasts 5 years or 40." },
    { title: "Forming & reinforcement", description: "Steel forms are set to grade. Rebar is placed on chairs at mid-slab depth and tied at intersections. The forms and rebar are inspected before the truck is called." },
    { title: "Concrete pour & finish", description: "Ready-mix concrete arrives from a local Oklahoma City batch plant — we specify 4,000 PSI minimum. Control joints are tooled or saw-cut within 24 hours." },
    { title: "Curing & sealing", description: "Curing compound is applied immediately after finishing. Sealer is applied after full cure. We do a final walkthrough with you before leaving the job site." },
  ];

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">{title}<br/><span className="text-orange">{titleAccent}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4052470027" className="btn-outline">📞 (405) 247-0027</a>
        </div>
      </section>
      <TrustBar />

      {sections.map((s, i) => (
        <ScrollReveal key={i}>
          <section className={`section-padding ${s.alt ? "section-alt" : ""}`}>
            <div className="section-eye">{s.eyebrow}</div>
            <h2 className="mb-4">{s.title}<br/><em className="h2-accent">{s.titleAccent}</em></h2>
            {s.content.map((p, j) => (
              <p key={j} className="prose-muted mb-5" dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {s.stats && (
              <div className="grid grid-cols-3 gap-px bg-concrete/[0.08] mt-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
                {s.stats.map((st, k) => (
                  <div key={k} className="bg-stone p-6 text-center">
                    <div className="font-display text-4xl font-black text-orange leading-none">{st.value}</div>
                    <div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">{st.label}</div>
                  </div>
                ))}
              </div>
            )}
            {s.table && (
              <table className="cost-table">
                <thead><tr>{s.table.headers.map((h, k) => <th key={k}>{h}</th>)}</tr></thead>
                <tbody>
                  {s.table.rows.map((row, k) => (
                    <tr key={k}>{row.map((cell, l) => <td key={l} dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>
                  ))}
                </tbody>
              </table>
            )}
            {s.infoBlock && (
              <div className="info-block"><p dangerouslySetInnerHTML={{ __html: s.infoBlock }} /></div>
            )}
          </section>
        </ScrollReveal>
      ))}

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Our Concrete Process</div>
          <h2 className="mb-4">How We Build<br/><em className="h2-accent">Concrete That Lasts.</em></h2>
          <p className="prose-muted">Every job follows the same five-step process — because skipping any step is how you end up with a slab that fails in five years on Oklahoma clay.</p>
          <ProcessSteps steps={processSteps} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <FAQ items={faq} eyebrow="FAQ" title='Common Questions<br/><em class="h2-accent">From OKC Homeowners.</em>' />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Our Concrete Services in Oklahoma City</div>
          <h2 className="mb-4">Every Concrete Service<br/><em className="h2-accent">OKC Homeowners Need.</em></h2>
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
