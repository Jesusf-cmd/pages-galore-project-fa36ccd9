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
  introText?: string;
  serviceCards?: { icon: string; title: string; description: string }[];
  specs?: { label: string; value: string }[];
  finishOptions?: { title: string; description: string }[];
  whyChooseUs?: { icon: string; title: string; description: string }[];
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

export default function ServicePage({ eyebrow, title, titleAccent, description, introText, serviceCards, specs, finishOptions, whyChooseUs, sections, faq, metaTitle, metaDescription }: ServicePageProps) {
  useSEO({
    title: metaTitle || `${title} ${titleAccent.replace('.', '')} | Redwood Construction LLC`,
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

      {/* Intro text */}
      {introText && (
        <ScrollReveal>
          <section className="section-padding">
            <p className="prose-muted max-w-[820px]" dangerouslySetInnerHTML={{ __html: introText }} />
          </section>
        </ScrollReveal>
      )}

      {/* Service Cards Grid */}
      {serviceCards && serviceCards.length > 0 && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Our Services</div>
            <h2 className="mb-8">Driveway Services in<br/><em className="h2-accent">Oklahoma City.</em></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {serviceCards.map((card, i) => (
                <div key={i} className="bg-stone p-6 md:p-8">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h3 className="text-base mb-2">{card.title}</h3>
                  <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

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
          <div className="section-eye">Oklahoma Concrete Challenges</div>
          <h2 className="mb-4">Common Concrete Problems<br/><em className="h2-accent">in Oklahoma City.</em></h2>
          <p className="prose-muted mb-5">Oklahoma City sits on Permian red clay — some of the most expansive soil in the United States. This clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts, shifting several inches in a single year. Concrete that isn't engineered for this movement will crack, heave, and fail long before its time.</p>
          <p className="prose-muted mb-5">The most common concrete failures we see across OKC share the same three root causes: inadequate base preparation, missing or improperly placed rebar reinforcement, and poor drainage grading. A contractor who doesn't understand Oklahoma clay will pour a slab that starts cracking within two or three years — and often blames it on the weather.</p>
          <p className="prose-muted mb-5">Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a minimum 4-inch compacted aggregate base — 6 inches on known problem clay lots. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress, preventing random surface cracking. Drainage grading moves water away from your structure and reduces the swell-shrink cycle that destroys improperly built concrete.</p>
          <p className="prose-muted mb-5">If your existing concrete in Oklahoma City shows cracking, settlement, or scaling, the cause is almost always one of these three issues — not the concrete itself. Redwood Construction LLC provides honest assessments: we'll tell you whether it needs repair or full replacement, and exactly why.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Why it matters</div>
          <h2 className="mb-4">Why Hire a Professional<br/><em className="h2-accent">Concrete Contractor in OKC.</em></h2>
          <p className="prose-muted mb-5">Oklahoma's soil conditions make concrete work harder than almost anywhere else in the country. A contractor who follows generic national specs — without adjusting for OKC's clay soil, frost lines, and drainage patterns — will deliver work that looks right on day one and fails within a few years. The cost of redoing a driveway or patio far exceeds the cost of doing it right the first time.</p>
          <p className="prose-muted mb-5">Redwood Construction LLC is fully licensed and insured in the state of Oklahoma. We pull all required permits, follow Oklahoma City building codes, and coordinate with inspectors when required. Our crew handles every project from first dig to final walkthrough — no subcontractors, no handoffs to an unknown crew.</p>
          <p className="prose-muted mb-5">Every quote we give is written and itemized — labor, materials, and demolition listed separately. The price we quote is the price you pay. We don't show up and add change orders. We don't start work without your written approval. And if something is wrong with our workmanship, we come back and make it right.</p>
          <p className="prose-muted mb-5">Our 4.9-star Google rating and BBB A+ accreditation come from 500+ completed projects across Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City — all delivered by the same crew, to the same standards, every time.</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Free estimate</div>
          <h2 className="mb-4">Get a Free Concrete Estimate<br/><em className="h2-accent">in Oklahoma City.</em></h2>
          <p className="prose-muted mb-5">Redwood Construction LLC provides free, written, on-site estimates for all concrete work across Oklahoma City and the surrounding metro. We visit your property, assess the soil conditions and drainage, measure the area, and give you an itemized price — all at no cost and no obligation. Most estimates are completed within 24 hours of your site visit.</p>
          <p className="prose-muted mb-5">We serve homeowners and businesses throughout Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. If you're in the OKC metro, we come to you.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:4052470027" className="btn-primary">📞 Call (405) 247-0027</a>
            <Link to="/#estimate" className="btn-outline">Email for Estimate</Link>
          </div>
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
          <p className="prose-muted mb-3">
            Redwood Construction LLC provides concrete services throughout Oklahoma City and the surrounding metro area. We serve <a href="/oklahoma-city-concrete" className="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" className="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" className="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" className="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" className="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" className="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" className="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" className="text-orange no-underline">Del City</a> — same crew, same standards, same free estimate process on every job across the metro.
          </p>
          <p className="text-[0.78rem] text-muted-text mb-6">
            <strong className="text-concrete">OKC metro zip codes served:</strong> 73003, 73012, 73013, 73034 (Edmond) · 73025, 73099 (Yukon/Mustang) · 73069, 73071, 73072 (Norman) · 73160 (Moore) · 73110, 73130 (Midwest City) · 73107, 73109, 73112, 73118, 73120, 73127, 73132, 73142, 73159, 73162 (OKC) and surrounding areas.
          </p>
          <CityGrid />
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
