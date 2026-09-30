import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import TradeBadge from "@/components/TradeBadge";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { usePageSEO } from "@/hooks/useSEO";

export default function OurApproach() {
  const seo = usePageSEO("/our-approach", { noindex: true });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">How FDZ Construction Works</span>
        <h1 className="max-w-[820px] mb-5">{seo.h1}</h1>
        <p className="prose-muted max-w-[680px] mb-8">
          FDZ Construction LLC self-performs concrete, sewer line, skid steer, and excavator work with our own crew and
          equipment — one company accountable from estimate to warranty.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">
            Get Free Estimate →
          </Link>
          <a href="tel:4054584805" className="btn-outline">
            📞 (405) 458-4805
          </a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="mb-4">
            <TradeBadge model="self-performed" />
          </div>
          <div className="section-eye">Concrete</div>
          <h2 className="mb-5">
            Our Crews. Our Equipment.
            <br />
            <em className="h2-accent">Every Pour.</em>
          </h2>
          <p className="prose-muted mb-5 max-w-[820px]">
            Concrete is where FDZ Construction started, and it&apos;s still 100% self-performed. Driveways, patios,
            slabs, foundations, retaining walls, sidewalks, and commercial concrete are poured and finished by our own
            employees — using our own equipment, on our own schedule.
          </p>
          <p className="prose-muted mb-5 max-w-[820px]">
            Nothing gets handed off to a subcontractor we don&apos;t control. The crew that estimates the job is the
            same crew that digs, forms, pours, and finishes — and the same crew you call under warranty.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="mb-4">
            <TradeBadge model="self-performed" />
          </div>
          <div className="section-eye">Sewer line &amp; site work</div>
          <h2 className="mb-5">
            Same Crew.
            <br />
            <em className="h2-accent">Pipe Work &amp; Restoration.</em>
          </h2>
          <p className="prose-muted mb-5 max-w-[820px]">
            Sewer line repair and installation is self-performed too — excavation, pipe work, and concrete restoration
            under one invoice. See our{" "}
            <Link to="/sewer-line-repair-oklahoma-city" className="text-orange no-underline">
              sewer line repair page
            </Link>{" "}
            for methods and FAQ.
          </p>
          <p className="prose-muted max-w-[820px]">
            <Link to="/skid-steer-services-oklahoma-city" className="text-orange no-underline">
              Skid steer
            </Link>{" "}
            and{" "}
            <Link to="/excavator-services-oklahoma-city" className="text-orange no-underline">
              excavator
            </Link>{" "}
            site work uses the same crew for clearing, grading, and pads — still self-performed, no separate
            earthwork sub.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What to expect</div>
          <h2 className="mb-8">
            Every Project,
            <br />
            <em className="h2-accent">Step by Step.</em>
          </h2>
          <ol className="max-w-[820px] space-y-3" style={{ paddingLeft: "1.25rem" }}>
            {[
              "Free on-site estimate from our own crew",
              "Written, itemized quote — no subcontractor markup on self-performed scopes",
              "Our crew handles excavation, base prep, and forming (or pipe work on sewer jobs)",
              "Our crew completes the pour, finish, or restoration",
              "Final walkthrough, backed by our 2-year workmanship warranty",
            ].map((step) => (
              <li key={step} className="text-[0.9rem] text-muted-text leading-relaxed font-light">
                {step}
              </li>
            ))}
          </ol>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="info-block">
            <p>
              FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — 8+ years serving the OKC metro. Every
              self-performed project is backed by a 2-year workmanship warranty.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
