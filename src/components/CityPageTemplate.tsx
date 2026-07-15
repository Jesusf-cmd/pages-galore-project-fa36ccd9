import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const TRUST_LINE =
  "FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years of experience serving the OKC metro, and every project is backed by a 2-year workmanship warranty.";

interface LinkedService {
  label: string;
  to: string;
  blurb: string;
}

interface CityPageProps {
  city: string;
  county: string;
  canonicalUrl: string;
  heroBlurb: string;
  /** Override the default "{city} Concrete" / "Contractors." hero title split. */
  heroTitle?: string;
  heroTitleAccent?: string;
  intro: string[];
  localTerrainNote: string;
  driveTimeNote: string;
  neighborhoods?: string[];
  linkedServices: LinkedService[];
  faq: { question: string; answer: string }[];
  nearbyLinks?: { name: string; to: string }[];
  metaTitle?: string;
  metaDescription: string;
  /** Sewer line repair/installation summary — links back to the full OKC sewer page rather than duplicating it. */
  sewerSection?: {
    intro: string;
    methods: { title: string; blurb: string }[];
    signs: string[];
    localNote: string;
    linkTo: string;
  };
  /** Honest differentiator + trust signals section, e.g. for a city outside the core OKC metro. */
  whyFdzSection?: {
    points: { title: string; desc: string }[];
  };
  /** Clearly-marked placeholder for real project photos/reviews once available — do not fabricate content here. */
  projectsPlaceholder?: {
    note: string;
  };
  /** Honest travel/scheduling note for areas outside the core OKC metro. */
  serviceAreaNote?: string;
  /** Override the default "Concrete in {city}" FAQ heading, e.g. for a combined concrete + sewer page. */
  faqHeadingAccent?: string;
  /** Short local sewer line note (2–4 sentences) linking to the main sewer page. */
  sewerLocalNote?: string;
}

export default function CityPageTemplate({
  city,
  county,
  canonicalUrl,
  heroBlurb,
  heroTitle,
  heroTitleAccent,
  intro,
  localTerrainNote,
  driveTimeNote,
  neighborhoods,
  linkedServices,
  faq,
  nearbyLinks,
  metaTitle,
  metaDescription,
  sewerSection,
  whyFdzSection,
  projectsPlaceholder,
  serviceAreaNote,
  faqHeadingAccent,
  sewerLocalNote,
}: CityPageProps) {
  const title = metaTitle || `Concrete Contractor in ${city} OK | FDZ Construction LLC`;
  useSEO({
    title,
    description: metaDescription,
    canonical: canonicalUrl,
    og: { title, description: metaDescription, type: "website", url: canonicalUrl },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{city} · {county} · Licensed, Bonded & Insured</span>
        <h1 className="max-w-[820px] mb-5">{heroTitle || `${city} Concrete`}<br/><span className="text-orange">{heroTitleAccent || "Contractors."}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: heroBlurb }} />
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
              {intro.map((p, i) => (
                <p key={i} className="prose-muted mb-5" dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              {neighborhoods && neighborhoods.length > 0 && (
                <p className="prose-muted mb-5">
                  Areas we serve in {city} include {neighborhoods.join(", ")}.
                </p>
              )}
              {/* TODO: add real {city} project photos when available */}
            </div>
            <div className="grid grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">8+</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Years experience</div></div>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">2yr</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Workmanship warranty</div></div>
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">24hr</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Estimate response</div></div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Local Terrain & Soil</div>
          <h2 className="mb-4">Built for<br/><em className="h2-accent">{city} Ground.</em></h2>
          <p className="prose-muted max-w-[760px] mb-6" dangerouslySetInnerHTML={{ __html: localTerrainNote }} />
          <p className="prose-muted max-w-[760px] mb-6"><strong className="text-concrete">Getting to {city}:</strong> {driveTimeNote}</p>
          <p className="text-[0.8rem] text-orange font-semibold uppercase tracking-[0.06em] max-w-[760px]">{TRUST_LINE}</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Concrete Services in {city}</div>
          <h2 className="mb-4">What We Pour<br/><em className="h2-accent">in {city}.</em></h2>
          <p className="prose-muted mb-8 max-w-[760px]">
            We bring the same crew, materials, and standards to {city} that we use across the OKC metro. The work most requested here:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {linkedServices.map((s) => (
              <Link key={s.to} to={s.to} className="bg-stone p-6 no-underline block hover:bg-orange/[0.04] transition-colors">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete mb-2">{s.label} →</div>
                <p className="text-[0.82rem] text-muted-text leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {sewerLocalNote && !sewerSection && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Sewer Line Repair</div>
            <h2 className="mb-4">Sewer Lines in<br/><em className="h2-accent">{city}.</em></h2>
            <p className="prose-muted max-w-[820px] mb-4" dangerouslySetInnerHTML={{ __html: sewerLocalNote }} />
            <p className="prose-muted">
              <Link to="/sewer-line-repair-oklahoma-city" className="text-orange no-underline font-medium">Full sewer line repair methods, process &amp; FAQ →</Link>
            </p>
          </section>
        </ScrollReveal>
      )}

      {sewerSection && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Sewer Line Repair &amp; Installation</div>
            <h2 className="mb-4">Sewer Line Repair &amp; Installation<br/><em className="h2-accent">in {city}.</em></h2>
            <p className="prose-muted max-w-[820px] mb-6" dangerouslySetInnerHTML={{ __html: sewerSection.intro }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {sewerSection.methods.map((m, i) => (
                <div key={i} className="bg-stone p-5 md:p-6">
                  <h3 className="text-sm mb-2">{m.title}</h3>
                  <p className="text-[0.82rem] text-muted-text leading-relaxed font-light">{m.blurb}</p>
                </div>
              ))}
            </div>
            <div className="info-block mb-6">
              <p className="mb-2"><strong className="text-concrete">Signs you may need sewer line repair:</strong></p>
              <p dangerouslySetInnerHTML={{ __html: sewerSection.signs.map((s) => `▸ ${s}`).join("<br/>") }} />
            </div>
            <p className="prose-muted max-w-[820px] mb-6" dangerouslySetInnerHTML={{ __html: sewerSection.localNote }} />
            <p className="prose-muted">
              <Link to={sewerSection.linkTo} className="text-orange no-underline font-medium">See full sewer line repair methods, process, and FAQ →</Link>
            </p>
          </section>
        </ScrollReveal>
      )}

      {whyFdzSection && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Why FDZ</div>
            <h2 className="mb-8">Why {city} Property Owners Choose<br/><em className="h2-accent">FDZ Construction.</em></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
              {whyFdzSection.points.map((p, i) => (
                <div key={i} className="bg-stone p-6 md:p-8">
                  <h3 className="text-base mb-2">{p.title}</h3>
                  <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      )}

      {projectsPlaceholder && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Our {city} Projects</div>
            <h2 className="mb-4">Real Work in<br/><em className="h2-accent">{city}.</em></h2>
            <p className="prose-muted max-w-[760px] mb-6">{projectsPlaceholder.note}</p>
            {/* TODO: add real {city} project photos and customer reviews here once available */}
            <div
              className="p-8 text-center text-[0.82rem] text-muted-text"
              style={{ border: "1px dashed hsl(var(--concrete) / 0.2)" }}
            >
              Project photos and customer reviews from {city} are coming soon.
            </div>
          </section>
        </ScrollReveal>
      )}

      {serviceAreaNote && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Service Area Note</div>
            <h2 className="mb-4">Scheduling a Project<br/><em className="h2-accent">in {city}.</em></h2>
            <p className="prose-muted max-w-[760px]" dangerouslySetInnerHTML={{ __html: serviceAreaNote }} />
          </section>
        </ScrollReveal>
      )}

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ items={faq} eyebrow="FAQ" title={`Common Questions About<br/><em class="h2-accent">${faqHeadingAccent || `Concrete in ${city}`}.</em>`} />
        </section>
      </ScrollReveal>

      {nearbyLinks && nearbyLinks.length > 0 && (
        <ScrollReveal>
          <section className="section-padding">
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

      <FinalCTA />
    </main>
  );
}
