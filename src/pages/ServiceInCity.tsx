import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MailtoLink from "@/components/MailtoLink";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import { canonicalUrl } from "@/lib/siteUrl";
import { withoutCrawlableEmail } from "@/lib/contact";
import { serviceInCityPages } from "@/content/serviceInCityPages";

export default function ServiceInCity({ slug }: { slug: string }) {
  const d = serviceInCityPages[slug];
  useFaqJsonLd(d?.faq);
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
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: withoutCrawlableEmail(d.heroBlurbHtml) }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">The Real Failure Mode</div>
          <h2 className="mb-4">{d.problemTitle}<br/><em className="h2-accent">{d.problemAccent}</em></h2>
          {d.problemHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: withoutCrawlableEmail(p) }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Local Conditions</div>
          <h2 className="mb-4">{d.localConditionsTitle}<br/><em className="h2-accent">{d.localConditionsAccent}</em></h2>
          {d.localConditionsHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: withoutCrawlableEmail(p) }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What We Do</div>
          <h2 className="mb-8">How We Build It<br/><em className="h2-accent">Right.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.scopeBullets.map((b, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2 text-orange">{b.title}</div>
                <p className="text-[0.86rem] text-muted-text leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt text-center">
          <h2 className="mb-4">{d.midCtaTitle}<br/><em className="h2-accent">{d.midCtaAccent}</em></h2>
          <p className="prose-muted max-w-[560px] mx-auto mb-6">
            Free on-site estimate, clear scope, written quote.
            Call <a href="tel:4054584805" className="text-orange no-underline">(405) 458-4805</a> or{" "}
            <MailtoLink className="text-orange no-underline" />.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/#estimate" className="btn-primary">Request Estimate →</Link>
            <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <FAQ items={d.faq} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Related</div>
          <h2 className="mb-6">More From<br/><em className="h2-accent">FDZ Construction.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to={d.parentService.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Parent Service</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentService.label} →</div>
            </Link>
            <Link to={d.parentCity.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Parent City</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentCity.label} →</div>
            </Link>
            {d.siblings.map((s, i) => (
              <Link key={i} to={s.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text font-bold mb-2">Related</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{s.label} →</div>
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
