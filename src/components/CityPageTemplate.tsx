import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const TRUST_LINE =
  "FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years of experience serving the OKC metro, and every project is backed by a 1-year workmanship warranty.";

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
  intro: string[];
  localTerrainNote: string;
  driveTimeNote: string;
  neighborhoods?: string[];
  linkedServices: LinkedService[];
  faq: { question: string; answer: string }[];
  nearbyLinks?: { name: string; to: string }[];
  metaTitle?: string;
  metaDescription: string;
}

export default function CityPageTemplate({
  city,
  county,
  canonicalUrl,
  heroBlurb,
  intro,
  localTerrainNote,
  driveTimeNote,
  neighborhoods,
  linkedServices,
  faq,
  nearbyLinks,
  metaTitle,
  metaDescription,
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
        <h1 className="max-w-[820px] mb-5">{city} Concrete<br/><span className="text-orange">Contractors.</span></h1>
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
              <div className="bg-stone p-6 text-center"><div className="font-display text-4xl font-black text-orange leading-none">1yr</div><div className="text-[0.66rem] text-muted-text tracking-[0.08em] uppercase mt-1">Workmanship warranty</div></div>
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

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ items={faq} eyebrow="FAQ" title={`Common Questions About<br/><em class="h2-accent">Concrete in ${city}.</em>`} />
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
