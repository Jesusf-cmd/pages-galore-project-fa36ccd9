import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import MailtoLink from "@/components/MailtoLink";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import { canonicalUrl } from "@/lib/siteUrl";
import { poolDeckContent as d } from "@/content/pages/pool-deck";

export default function PoolDeckOklahomaCity() {
  useFaqJsonLd(d.faq);
  useSEO({
    title: d.metaTitle,
    description: d.metaDescription,
    canonical: canonicalUrl(d.path),
    og: {
      title: d.metaTitle,
      description: d.ogDescription,
      type: "website",
      url: canonicalUrl(d.path),
    },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{d.eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">
          {d.h1Lead}<br />
          <span className="text-orange">{d.h1Accent}</span>
        </h1>
        <p className="prose-muted max-w-[680px] mb-4">{d.heroParagraphs[0]}</p>
        <p className="prose-muted max-w-[680px] mb-8">
          Call <a href="tel:4054584805" className="text-orange no-underline font-semibold">(405) 458-4805</a> for a free on-site estimate. Licensed, bonded, and insured in Oklahoma.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:4054584805" className="btn-primary">📞 (405) 458-4805 — Free Estimate</a>
          <Link to="/our-projects" className="btn-outline">See Our Work →</Link>
        </div>
      </section>

      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Why It Matters</div>
          <h2 className="mb-4">
            {d.problemTitle}<br />
            <em className="h2-accent">{d.problemAccent}</em>
          </h2>
          <div className="max-w-[760px]">
            {d.problemHtml.map((p, i) => (
              <p
                key={i}
                className={`prose-muted ${i === d.problemHtml.length - 1 ? "mb-6" : "mb-4"}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <a href="tel:4054584805" className="btn-primary">Call (405) 458-4805 for a Free Estimate</a>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Material Selection</div>
          <h2 className="mb-4">
            {d.whyTitle}<br />
            <em className="h2-accent">{d.whyAccent}</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px]">
            {d.whyItems.map((item, i) => (
              <div key={i} style={{ borderLeft: "2px solid hsl(var(--orange) / 0.4)", paddingLeft: "1.25rem" }}>
                <div className="font-display font-extrabold uppercase tracking-[0.04em] text-concrete mb-1">{item.title}</div>
                <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light">
                  {item.patioLink ? (
                    <>
                      {item.body.split("stamped concrete patios")[0]}
                      <Link to="/patios-oklahoma-city" className="text-orange no-underline">stamped concrete patios</Link>
                      {item.body.split("stamped concrete patios")[1]}
                    </>
                  ) : item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Services</div>
          <h2 className="mb-4">
            {d.servicesTitle}<br />
            <em className="h2-accent">{d.servicesAccent}</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.services.map((s, i) => (
              <div key={i} className="bg-stone p-6 md:p-8">
                <div className="text-orange font-display font-extrabold uppercase tracking-[0.04em] text-[0.72rem] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-extrabold uppercase tracking-[0.03em] text-concrete text-base mb-3">{s.title}</h3>
                <p className="text-[0.86rem] text-muted-text leading-[1.8] font-light">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Pricing</div>
          <h2 className="mb-4">
            {d.pricingTitle}<br />
            <em className="h2-accent">{d.pricingAccent}</em>
          </h2>
          <p className="prose-muted max-w-[680px] mb-8">{d.pricingIntro}</p>
          <div className="overflow-x-auto max-w-[800px]">
            <table className="w-full text-[0.86rem]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "hsl(var(--stone))", borderBottom: "2px solid hsl(var(--orange) / 0.4)" }}>
                  <th className="text-left font-display font-extrabold uppercase tracking-[0.06em] text-concrete p-3 md:p-4">Service</th>
                  <th className="text-left font-display font-extrabold uppercase tracking-[0.06em] text-concrete p-3 md:p-4">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {d.pricingRows.map(([service, cost], i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "hsl(var(--darker))" : "hsl(var(--stone))",
                      borderBottom: "1px solid hsl(var(--concrete) / 0.08)",
                    }}
                  >
                    <td className="text-muted-text p-3 md:p-4">{service}</td>
                    <td className="text-orange font-semibold p-3 md:p-4 whitespace-nowrap">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            className="prose-muted max-w-[680px] mt-6"
            dangerouslySetInnerHTML={{
              __html: d.pricingNoteHtml.replace(
                'href="tel:4054584805"',
                'href="tel:4054584805" class="text-orange no-underline font-semibold"',
              ),
            }}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Local Expertise</div>
          <h2 className="mb-4">
            {d.climateTitle}<br />
            <em className="h2-accent">{d.climateAccent}</em>
          </h2>
          <div className="max-w-[760px]">
            {d.climateHtml.map((p, i) => (
              <p
                key={i}
                className={`prose-muted ${i === d.climateHtml.length - 1 ? "" : "mb-4"}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">How It Works</div>
          <h2 className="mb-4">
            {d.processTitle}<br />
            <em className="h2-accent">{d.processAccent}</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.processSteps.map((step) => (
              <div key={step.n} className="bg-stone p-6 md:p-8 flex gap-4">
                <div className="font-display text-3xl font-black text-orange/30 leading-none shrink-0 mt-1">{step.n}</div>
                <div>
                  <h3 className="font-display font-extrabold uppercase tracking-[0.03em] text-concrete text-[0.9rem] mb-2">{step.title}</h3>
                  <p className="text-[0.85rem] text-muted-text leading-[1.8] font-light">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Material Comparison</div>
          <h2 className="mb-4">
            {d.comparisonTitle}<br />
            <em className="h2-accent">{d.comparisonAccent}</em>
          </h2>
          <p className="prose-muted max-w-[680px] mb-8">{d.comparisonIntro}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.82rem]" style={{ borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ background: "hsl(var(--stone))", borderBottom: "2px solid hsl(var(--orange) / 0.4)" }}>
                  {d.comparisonHeaders.map((h, i) => (
                    <th
                      key={i}
                      className={`p-3 font-display font-extrabold uppercase tracking-[0.05em] text-[0.72rem] ${i === 1 ? "text-orange" : "text-concrete"} ${i === 0 ? "text-left" : "text-center"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {d.comparisonRows.map(([label, ...vals], ri) => (
                  <tr
                    key={ri}
                    style={{
                      background: ri % 2 === 0 ? "hsl(var(--darker))" : "hsl(var(--stone))",
                      borderBottom: "1px solid hsl(var(--concrete) / 0.08)",
                    }}
                  >
                    <td className="p-3 font-semibold text-concrete">{label}</td>
                    {vals.map((v, vi) => (
                      <td
                        key={vi}
                        className={`p-3 text-center ${vi === 0 ? "text-orange font-semibold" : "text-muted-text"}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ
            items={d.faq}
            eyebrow="Pool Deck FAQ"
            title='Common Questions About<br/><em class="h2-accent">Pool Decks in Oklahoma City.</em>'
            subtitle="Honest answers from a crew that builds pool decks on OKC clay — not a call center."
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Service Area</div>
          <h2 className="mb-4">
            {d.serviceAreaTitle}<br />
            <em className="h2-accent">{d.serviceAreaAccent}</em>
          </h2>
          <p className="prose-muted max-w-[720px] mb-6">{d.serviceAreaIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px]">
            {d.cities.map(({ city, note }) => (
              <div key={city} className="bg-stone p-5" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div className="font-display font-extrabold uppercase tracking-[0.04em] text-orange text-[0.82rem] mb-1">{city}</div>
                <p className="text-[0.82rem] text-muted-text leading-[1.7] font-light">{note}</p>
              </div>
            ))}
          </div>
          <p className="prose-muted mt-6 text-[0.82rem] max-w-[680px]">
            Not on the list? Call us. If you're within reasonable distance of Oklahoma City, we likely serve your area. We also handle{" "}
            <Link to="/driveways-oklahoma-city" className="text-orange no-underline">concrete driveways</Link>,{" "}
            <Link to="/patios-oklahoma-city" className="text-orange no-underline">stamped concrete patios</Link>,{" "}
            <Link to="/foundations-oklahoma-city" className="text-orange no-underline">foundations</Link>, and{" "}
            <Link to="/commercial-concrete-oklahoma-city" className="text-orange no-underline">commercial concrete</Link>{" "}
            throughout the same area.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="max-w-[680px]">
            <div className="section-eye">Get Started</div>
            <h2 className="mb-4">
              {d.closingTitle}<br />
              <em className="h2-accent">{d.closingAccent}</em>
            </h2>
            {d.closingHtml.map((p, i) => (
              <p
                key={i}
                className={`prose-muted ${i === d.closingHtml.length - 1 ? "mb-6" : "mb-4"}`}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="tel:4054584805" className="btn-primary text-center">📞 (405) 458-4805</a>
              <MailtoLink className="btn-outline text-center" />
            </div>
            <p className="text-[0.78rem] text-muted-text">
              7004 S Indiana Ave, Oklahoma City, OK 73159 · Licensed, bonded & insured in Oklahoma · 2-year workmanship warranty on all pool deck work
            </p>
          </div>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
