import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { canonicalUrl } from "@/lib/siteUrl";
import { repairPages } from "@/content/repairPages";

const data = repairPages;

export default function RepairService({ slug }: { slug: string }) {
  const d = data[slug];
  useSEO({
    title: d?.metaTitle || "Page not found | FDZ Construction LLC",
    description: d?.metaDescription || "That page does not exist.",
    canonical: d ? canonicalUrl(d.path) : undefined,
    noindex: !d,
    og: d
      ? { title: d.metaTitle, description: d.metaDescription, type: "website", url: canonicalUrl(d.path) }
      : undefined,
  });
  if (!d) {
    return (
      <main className="page-hero">
        <h1>Page Not Found</h1>
        <Link to="/" className="btn-primary mt-8">← Back home</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{d.eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">{d.h1Lead}<br/><span className="text-orange">{d.h1Accent}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: d.heroBlurbHtml }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Free On-Site Evaluation →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">The Honest Conversation</div>
          <h2 className="mb-4">{d.problemTitle}<br/><em className="h2-accent">{d.problemAccent}</em></h2>
          {d.problemHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Diagnostic Guide</div>
          <h2 className="mb-8">{d.diagnosticTitle}<br/><em className="h2-accent">{d.diagnosticAccent}</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-3">Repair Makes Sense When</div>
              <ul className="space-y-3">
                {d.repairCases.map((c, i) => (
                  <li key={i} className="text-[0.86rem] text-muted-text leading-relaxed flex gap-3">
                    <span className="text-orange font-bold mt-1">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone p-8">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-3">Replace Instead When</div>
              <ul className="space-y-3">
                {d.replaceCases.map((c, i) => (
                  <li key={i} className="text-[0.86rem] text-muted-text leading-relaxed flex gap-3">
                    <span className="text-orange font-bold mt-1">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What We Do</div>
          <h2 className="mb-8">Our Repair<br/><em className="h2-accent">Scope.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.scopeBullets.map((b, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2 text-orange">{b.title}</div>
                <p className="text-[0.86rem] text-muted-text leading-relaxed" dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Process</div>
          <h2 className="mb-8">{d.processTitle}<br/><em className="h2-accent">{d.processAccent}</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.processSteps.map((s, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Step {i + 1}</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2">{s.title}</div>
                <p className="text-[0.82rem] text-muted-text leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Pricing Reality</div>
          <h2 className="mb-4">What Repair<br/><em className="h2-accent">Actually Costs.</em></h2>
          {d.pricingHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]">{p}</p>
          ))}
          <div className="mt-6">
            <Link to="/#estimate" className="btn-primary">Request Free On-Site Evaluation →</Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ items={d.faq} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Related</div>
          <h2 className="mb-6">More From<br/><em className="h2-accent">FDZ Construction.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to={d.parentService.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">New Construction</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentService.label} →</div>
            </Link>
            {d.related.map((r, i) => (
              <Link key={i} to={r.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text font-bold mb-2">Related</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{r.label} →</div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <InternalLinksHub />
      <FinalCTA />
    </main>
  );
}
