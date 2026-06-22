import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import CityGrid from "@/components/CityGrid";
import ProcessSteps from "@/components/ProcessSteps";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import InternalLinksHub from "@/components/InternalLinksHub";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  introText?: string;
  serviceLabel?: string;
  serviceCards?: { icon: string; title: string; description: string }[];
  specs?: { label: string; value: string }[];
  finishOptions?: { title: string; description: string }[];
  finishLabel?: string;
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
  currentServiceSlug?: string;
  /**
   * Enriched pages supply their own deep, unique content. In enriched mode we
   * drop the generic boilerplate sections and the duplicate services/areas
   * blocks, relying on the global footer for the single clean services + areas
   * + NAP instance near the bottom of the page.
   */
  enriched?: boolean;
  processEyebrow?: string;
  processTitle?: string;
  processTitleAccent?: string;
  processIntro?: string;
  processSteps?: { title: string; description: string }[];
  projectTypes?: { title: string; description: string }[];
  projectTypesEyebrow?: string;
  projectTypesTitle?: string;
  projectTypesTitleAccent?: string;
  projectTypesIntro?: string;
  cityBlockIntro?: string;
  /** OKC-specific technical point relevant to this service. Rendered as a highlighted callout. */
  localExpertiseNote?: string;
  /** Experience + warranty line. Pass null to hide; defaults to the confirmed company trust line. */
  trustLine?: string | null;
  /** Sub-services breakdown: H2 section with H3 entries + bullet points. */
  subServices?: {
    sectionTitle: string;
    sectionEyebrow?: string;
    items: {
      title: string;
      bullets: string[];
    }[];
  };
  /** Real project photo gallery — pulls from completed work. Links to /our-projects. */
  projectGallery?: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    intro?: string;
    photos: { src: string; alt: string }[];
  };
}

export default function ServicePage({ eyebrow, title, titleAccent, description, introText, serviceLabel, serviceCards, specs, finishOptions, finishLabel, whyChooseUs, sections, faq, metaTitle, metaDescription, currentServiceSlug, enriched, processEyebrow, processTitle, processTitleAccent, processIntro, processSteps, projectTypes, projectTypesEyebrow, projectTypesTitle, projectTypesTitleAccent, projectTypesIntro, cityBlockIntro, localExpertiseNote, trustLine, subServices, projectGallery }: ServicePageProps) {
  const seoTitle = metaTitle || `${title} ${titleAccent.replace('.', '')} | FDZ Construction LLC`;
  const seoDescription = metaDescription || description.replace(/<[^>]+>/g, "").slice(0, 155);
  const canonical = currentServiceSlug ? `https://fdzconstruction.com/${currentServiceSlug}` : undefined;
  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical,
    og: canonical ? { title: seoTitle, description: seoDescription, type: "website", url: canonical } : undefined,
  });
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/<[^>]+>/g, "") },
    })),
  };
  const defaultProcessSteps = [
    { title: "Site prep & excavation", description: "We start by marking the area, calling 811 for utility locates, and excavating to the correct depth for your soil conditions. Problem soil gets flagged before the pour, not after." },
    { title: "Base compaction", description: "We install a compacted aggregate base — minimum 4 inches on standard OKC residential work, 6 inches on problem clay. This is the single biggest factor in whether your slab lasts 5 years or 40." },
    { title: "Forming & reinforcement", description: "Steel forms are set to grade. Rebar is placed on chairs at mid-slab depth and tied at intersections. The forms and rebar are inspected before the truck is called." },
    { title: "Concrete pour & finish", description: "Ready-mix concrete arrives from a local Oklahoma City batch plant — we specify 4,000 PSI minimum. Control joints are tooled or saw-cut within 24 hours." },
    { title: "Curing & sealing", description: "Curing compound is applied immediately after finishing. Sealer is applied after full cure. We do a final walkthrough with you before leaving the job site." },
  ];
  const steps = processSteps && processSteps.length > 0 ? processSteps : defaultProcessSteps;
  // TODO: "8+ years" is a placeholder phrasing — replace with the exact figure (or founding year) once confirmed.
  const defaultTrustLine = "FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years of experience serving the OKC metro, and every project is backed by a 1-year workmanship warranty.";
  const resolvedTrustLine = trustLine === null ? null : (trustLine ?? defaultTrustLine);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">{title}<br/><span className="text-orange">{titleAccent}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Free Estimate →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
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

      {/* Local expertise note — OKC-specific technical point */}
      {localExpertiseNote && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Local Expertise</div>
            <h2 className="mb-4">Built for<br/><em className="h2-accent">Oklahoma Soil.</em></h2>
            <div className="info-block"><p dangerouslySetInnerHTML={{ __html: localExpertiseNote }} /></div>
          </section>
        </ScrollReveal>
      )}

      {/* Service Cards Grid */}
      {serviceCards && serviceCards.length > 0 && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Our Services</div>
            <h2 className="mb-8">{serviceLabel || "Our"} Services in<br/><em className="h2-accent">Oklahoma City.</em></h2>
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

      {/* Sub-services section — H2 with H3 sub-types and bullet points */}
      {subServices && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">{subServices.sectionEyebrow || "Service Types"}</div>
            <h2 className="mb-10">{subServices.sectionTitle}</h2>
            <div className="space-y-10">
              {subServices.items.map((item, i) => (
                <div key={i} className={i > 0 ? "border-t border-concrete/20 pt-10" : ""}>
                  {/* TODO: add photo of specific type work when available */}
                  <h3 className="text-xl mb-4">{item.title}</h3>
                  <ul className="space-y-2 pl-0 list-none">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex items-baseline gap-2 text-[0.88rem] text-muted-text leading-relaxed font-light">
                        <span className="text-orange flex-shrink-0">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: b }} />
                      </li>
                    ))}
                  </ul>
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

      {/* Real project photo gallery */}
      {projectGallery && projectGallery.photos.length > 0 && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">{projectGallery.eyebrow || "Recent Work"}</div>
            <h2 className="mb-4">{projectGallery.title}<br/><em className="h2-accent">{projectGallery.titleAccent || "By FDZ Construction."}</em></h2>
            {projectGallery.intro && <p className="prose-muted mb-8 max-w-[820px]" dangerouslySetInnerHTML={{ __html: projectGallery.intro }} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {projectGallery.photos.map((photo, i) => (
                <div key={i} className="bg-darker overflow-hidden aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="prose-muted mt-6">
              <Link to="/our-projects" className="text-orange no-underline font-medium">See more completed projects across the OKC metro →</Link>
            </p>
          </section>
        </ScrollReveal>
      )}

      {/* Materials & Specs */}
      {specs && specs.length > 0 && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Specs That Matter</div>
            <h2 className="mb-8">Specs &<br/><em className="h2-accent">Build Standards.</em></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {specs.map((spec, i) => (
                <div key={i} className="bg-stone p-5 md:p-6">
                  <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">{spec.label}</div>
                  <div className="text-[0.88rem] text-concrete font-medium leading-relaxed">{spec.value}</div>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Finish Options */}
      {finishOptions && finishOptions.length > 0 && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Finish Options</div>
            <h2 className="mb-8">{finishLabel || "Finish"}<br/><em className="h2-accent">Options.</em></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {finishOptions.map((opt, i) => (
                <div key={i} className="bg-stone p-5 md:p-6">
                  <h3 className="text-sm mb-2">{opt.title}</h3>
                  <p className="text-[0.82rem] text-muted-text leading-relaxed font-light">{opt.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Process */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">{processEyebrow || "Our Concrete Process"}</div>
          <h2 className="mb-4">{processTitle || "How We Build"}<br/><em className="h2-accent">{processTitleAccent || "Concrete That Lasts."}</em></h2>
          <p className="prose-muted">{processIntro || "Every job follows the same proven process — because skipping any step is how you end up with concrete that fails in five years on Oklahoma clay."}</p>
          <ProcessSteps steps={steps} />
        </section>
      </ScrollReveal>

      {/* Common Project Types */}
      {projectTypes && projectTypes.length > 0 && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">{projectTypesEyebrow || "Common Project Types"}</div>
            <h2 className="mb-4">{projectTypesTitle || "Projects We"}<br/><em className="h2-accent">{projectTypesTitleAccent || "Take On."}</em></h2>
            {projectTypesIntro && <p className="prose-muted mb-6 max-w-[820px]" dangerouslySetInnerHTML={{ __html: projectTypesIntro }} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {projectTypes.map((pt, i) => (
                <div key={i} className="bg-stone p-5 md:p-6">
                  <h3 className="text-sm mb-2 flex items-baseline gap-2"><span className="text-orange">▸</span>{pt.title}</h3>
                  <p className="text-[0.82rem] text-muted-text leading-relaxed font-light">{pt.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Why Choose Us */}
      {whyChooseUs && whyChooseUs.length > 0 && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Why FDZ</div>
            <h2 className="mb-8">Why Oklahoma City Property Owners Choose<br/><em className="h2-accent">FDZ Construction.</em></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {whyChooseUs.map((item, i) => (
                <div key={i} className="bg-stone p-6 md:p-8">
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3 className="text-base mb-2">{item.title}</h3>
                  <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Generic boilerplate — only on non-enriched (residential) pages */}
      {!enriched && (
        <>
          <ScrollReveal>
            <section className="section-padding">
              <div className="section-eye">Oklahoma Concrete Challenges</div>
              <h2 className="mb-4">Common Concrete Problems<br/><em className="h2-accent">in Oklahoma City.</em></h2>
              <p className="prose-muted mb-5">Oklahoma City sits on Permian red clay — some of the most expansive soil in the United States. This clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts, shifting several inches in a single year. Concrete that isn't engineered for this movement will crack, heave, and fail long before its time.</p>
              <p className="prose-muted mb-5">The most common concrete failures we see across OKC share the same three root causes: inadequate base preparation, missing or improperly placed rebar reinforcement, and poor drainage grading. A contractor who doesn't understand Oklahoma clay will pour a slab that starts cracking within two or three years — and often blames it on the weather.</p>
              <p className="prose-muted mb-5">Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a minimum 4-inch compacted aggregate base — 6 inches on known problem clay lots. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress, preventing random surface cracking. Drainage grading moves water away from your structure and reduces the swell-shrink cycle that destroys improperly built concrete.</p>
              <p className="prose-muted mb-5">If your existing concrete in Oklahoma City shows cracking, settlement, or scaling, the cause is almost always one of these three issues — not the concrete itself. FDZ Construction LLC provides honest assessments: we'll tell you whether it needs repair or full replacement, and exactly why.</p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section className="section-padding section-alt">
              <div className="section-eye">Why it matters</div>
              <h2 className="mb-4">Why Hire a Professional<br/><em className="h2-accent">Concrete Contractor in OKC.</em></h2>
              <p className="prose-muted mb-5">Oklahoma's soil conditions make concrete work harder than almost anywhere else in the country. A contractor who follows generic national specs — without adjusting for OKC's clay soil, frost lines, and drainage patterns — will deliver work that looks right on day one and fails within a few years. The cost of redoing a driveway or patio far exceeds the cost of doing it right the first time.</p>
              <p className="prose-muted mb-5">FDZ Construction LLC is fully licensed and insured in the state of Oklahoma. We pull all required permits, follow Oklahoma City building codes, and coordinate with inspectors when required. Our crew handles every project from first dig to final walkthrough — no subcontractors, no handoffs to an unknown crew.</p>
              <p className="prose-muted mb-5">Every quote we give is written and itemized — labor, materials, and demolition listed separately. The price we quote is the price you pay. We don't show up and add change orders. We don't start work without your written approval. And if something is wrong with our workmanship, we come back and make it right.</p>
              <p className="prose-muted mb-5">With 8+ years of experience across Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City, we deliver every project with the same crew and the same standards — and back our workmanship with a 1-year warranty.</p>
            </section>
          </ScrollReveal>
        </>
      )}

      {resolvedTrustLine && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="info-block"><p dangerouslySetInnerHTML={{ __html: resolvedTrustLine }} /></div>
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <section className="section-padding">
          <FAQ items={faq} eyebrow="FAQ" title='Common Questions<br/><em class="h2-accent">From OKC Property Owners.</em>' />
        </section>
      </ScrollReveal>

      {/* Services grid — only on non-enriched pages (enriched relies on the footer) */}
      {!enriched && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Our Concrete Services in Oklahoma City</div>
            <h2 className="mb-4">Every Concrete Service<br/><em className="h2-accent">OKC Property Owners Need.</em></h2>
            <ServicesFooterGrid />
          </section>
        </ScrollReveal>
      )}

      {/* City / metro block — single instance, names every served suburb with links */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Service Areas We Cover</div>
          <h2 className="mb-4">Serving the Entire<br/><em className="h2-accent">OKC Metro.</em></h2>
          <p className="prose-muted mb-3" dangerouslySetInnerHTML={{ __html: cityBlockIntro || `FDZ Construction LLC provides this service throughout Oklahoma City and the surrounding metro. We serve <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a> — same crew, same standards, same free estimate process on every job across the metro.` }} />
          <p className="text-[0.78rem] text-muted-text mb-6">
            <strong className="text-concrete">OKC metro zip codes served:</strong> 73003, 73012, 73013, 73034 (Edmond) · 73025, 73099 (Yukon/Mustang) · 73069, 73071, 73072 (Norman) · 73160 (Moore) · 73110, 73130 (Midwest City) · 73107, 73109, 73112, 73118, 73120, 73127, 73132, 73142, 73159, 73162 (OKC) and surrounding areas.
          </p>
          <CityGrid />
        </section>
      </ScrollReveal>

      <InternalLinksHub currentServiceSlug={currentServiceSlug} showServices={!enriched} showCities={!enriched} />

      <FinalCTA />
    </main>
  );
}
