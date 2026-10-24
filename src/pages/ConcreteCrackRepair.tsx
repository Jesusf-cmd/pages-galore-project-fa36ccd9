import { useEffect } from "react";
import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import EstimateForm from "@/components/EstimateForm";
import InternalLinksHub from "@/components/InternalLinksHub";
import CityGrid from "@/components/CityGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { usePageSEO } from "@/hooks/useSEO";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import { useRegionalPhone } from "@/hooks/useRegionalPhone";
import {
  CRACK_REPAIR_PATH,
  CRACK_REPAIR_SLUG,
  CRACK_REPAIR_TOWNS,
  buildCrackRepairServiceJsonLd,
  crackRepairFaq,
  crackRepairRelated,
} from "@/content/pages/crack-repair";

const DECISION_CARDS = [
  {
    title: "Is it still moving?",
    body: "A dormant crack can usually be sealed or filled. An active crack, still opening or shifting, needs a flexible repair or a fix to whatever is moving it.",
  },
  {
    title: "What's underneath?",
    body: "Settlement or a washed-out base means sealing the surface alone won't hold.",
  },
  {
    title: "How's the surrounding concrete?",
    body: "A few cracks in sound concrete are repairable. Widespread cracking, crumbling or panels that have sunk or heaved often point to section replacement.",
  },
  {
    title: "What does the slab carry?",
    body: "A patio, a driveway and a forklift aisle each need a different repair.",
  },
];

const CRACK_TYPES = [
  {
    title: "Hairline / shrinkage",
    body: "Thin, random lines from curing. Usually cosmetic. Sealing can help keep water out.",
  },
  {
    title: "Along a control joint",
    body: "The slab cracking where it was designed to. Usually handled by joint sealing.",
  },
  {
    title: "Settlement",
    body: "One side lower than the other. The support underneath needs attention.",
  },
  {
    title: "Heave",
    body: "Raised edges, often from clay soil swelling or roots. Often a trip hazard.",
  },
  {
    title: "Spalling / scaling",
    body: "Flaking or pitted surface rather than a line. Surface repair or resurfacing.",
  },
  {
    title: "Wide, growing or through a foundation",
    body: "Get it evaluated. May need a structural assessment.",
  },
];

const METHODS = [
  {
    title: "Rout, clean and seal",
    body: "Opens the crack into a clean channel, filled with a flexible sealant that can move with the slab",
  },
  {
    title: "Structural epoxy fill",
    body: "For dormant cracks where the two sides need to be bonded",
  },
  {
    title: "Joint sealing and resealing",
    body: "Replaces failed joint sealant to reduce water and debris getting under the slab",
  },
  {
    title: "Spall patching and resurfacing",
    body: "Rebuilds damaged surfaces",
  },
  {
    title: "Trip-hazard grinding",
    body: "Removes small lips between panels",
  },
  {
    title: "Foam lifting / mudjacking",
    body: "Raises settled panels back toward level",
  },
  {
    title: "Section replacement",
    body: "Saw-cut and replace only the panels that can't be repaired",
  },
];

export default function ConcreteCrackRepair() {
  const seo = usePageSEO(CRACK_REPAIR_PATH);
  const phone = useRegionalPhone();
  useFaqJsonLd(crackRepairFaq);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "service-page-schema";
    script.text = JSON.stringify(buildCrackRepairServiceJsonLd(seo.canonical)).replace(/</g, "\\u003c");
    document.querySelectorAll('script[type="application/ld+json"]').forEach((el) => {
      if (el.id === "service-page-schema") {
        el.remove();
        return;
      }
      try {
        const parsed = JSON.parse(el.textContent || "");
        if (parsed["@type"] === "Service") el.remove();
      } catch {
        /* leave unrelated JSON-LD in place */
      }
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById("service-page-schema")?.remove();
    };
  }, [seo.canonical]);

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">OKC Metro · Concrete Crack Repair · Licensed &amp; Insured</span>
        <h1 className="max-w-[820px] mb-5">{seo.h1}</h1>
        <p className="prose-muted max-w-[680px] mb-8">
          FDZ Construction repairs cracked concrete across the Oklahoma City metro for homeowners and
          businesses: driveways, patios, sidewalks, garage floors, parking lots and commercial slabs. We
          look at what&apos;s causing the crack before recommending a fix, so you pay for a repair that
          fits the problem.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#estimate" className="btn-primary">
            Request Free On-Site Evaluation →
          </a>
          <a href={`tel:${phone.tel}`} className="btn-outline">
            📞 {phone.display}
          </a>
        </div>
        <p className="text-[0.78rem] text-muted-text mt-5 max-w-[680px] leading-relaxed">
          Licensed, bonded &amp; insured · 2-year workmanship warranty · 8+ years in the OKC metro.
        </p>
      </section>
      <TrustBar />

      {/* TODO(owner): add 3–4 before/after crack repair photos with captions like "Driveway crack sealing, Yukon" and descriptive alt text */}
      <ScrollReveal>
        <section className="section-padding">
          <p className="prose-muted max-w-[680px] mb-0">
            <Link to="/our-projects" className="text-orange no-underline font-medium">
              See more of our work →
            </Link>
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Scope</div>
          <h2 className="mb-8">What We Repair</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            <div className="bg-stone p-6 md:p-8">
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
                At home
              </div>
              <h3 className="text-lg mb-4">Residential cracks</h3>
              <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Driveway cracks and failed joints (
                  <Link to="/driveway-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    driveway repair
                  </Link>{" "}
                  for settlement, aprons and replacement)
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">Patio and pool deck cracks</li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Sidewalk and walkway cracks, including trip hazards (
                  <Link to="/sidewalks-oklahoma-city" className="text-orange no-underline font-medium">
                    sidewalks
                  </Link>
                  )
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">Garage floor and slab cracks</li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Cracks in foundations: see{" "}
                  <Link to="/foundation-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    foundation repair
                  </Link>{" "}
                  for signs of movement
                </li>
              </ul>
            </div>
            <div className="bg-stone p-6 md:p-8">
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
                For businesses
              </div>
              <h3 className="text-lg mb-4">Commercial cracks</h3>
              <ul className="space-y-3" style={{ listStyle: "none", padding: 0 }}>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Parking lot cracks and failed joints (
                  <Link to="/concrete-parking-lot-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    parking lot repair
                  </Link>
                  )
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Cracked commercial slabs and sidewalks (
                  <Link to="/commercial-concrete-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    commercial concrete repair
                  </Link>
                  )
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Warehouse and industrial floor cracks: forklift-traffic joints usually need a rigid
                  joint filler or a slab repair, not just a flexible sealant (
                  <Link to="/industrial-concrete-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    industrial concrete repair
                  </Link>{" "}
                  and{" "}
                  <Link to="/warehouse-slab-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    warehouse slab repair
                  </Link>
                  )
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Loading dock and dock-edge cracking (
                  <Link to="/loading-dock-concrete-repair-oklahoma-city" className="text-orange no-underline font-medium">
                    loading dock concrete repair
                  </Link>
                  )
                </li>
                <li className="text-[0.86rem] text-muted-text leading-relaxed">
                  Repairing trip hazards on walkways and ramps (
                  <Link to="/ada-concrete-ramps-oklahoma-city" className="text-orange no-underline font-medium">
                    ADA ramps
                  </Link>
                  )
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Diagnostic Guide</div>
          <h2 className="mb-4">
            Repair or Replace?
            <br />
            <em className="h2-accent">How We Decide.</em>
          </h2>
          <p className="prose-muted mb-8 max-w-[820px]">
            Whether a crack can be repaired depends on more than its width. On-site, we look at four
            things:
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08]"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            {DECISION_CARDS.map((card) => (
              <div key={card.title} className="bg-stone p-6">
                <h3 className="text-base mb-2">{card.title}</h3>
                <p className="text-[0.86rem] text-muted-text leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="prose-muted mt-8 mb-4 max-w-[820px]">
            Often the best value is in between: replace the worst panels and repair the rest. If a
            crack suggests structural or foundation movement, we&apos;ll tell you, and recommend a
            structural engineer&apos;s assessment where it&apos;s warranted. Our evaluation is a
            contractor&apos;s estimate, not an engineering report.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">What We See</div>
          <h2 className="mb-8">Common Crack Types We See</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            {CRACK_TYPES.map((card) => (
              <div key={card.title} className="bg-stone p-5 md:p-6">
                <h3 className="text-sm mb-2">{card.title}</h3>
                <p className="text-[0.82rem] text-muted-text leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Methods</div>
          <h2 className="mb-6">How We Repair Cracks</h2>
          {/* TODO(owner): confirm each method above; add or remove before publishing */}
          <ul className="space-y-3 max-w-[820px]" style={{ listStyle: "none", padding: 0 }}>
            {METHODS.map((method) => (
              <li key={method.title} className="text-[0.9rem] text-muted-text leading-relaxed">
                <strong className="text-concrete">{method.title}:</strong> {method.body}
              </li>
            ))}
          </ul>
          <p className="prose-muted mt-6 max-w-[820px]">
            Sealing helps reduce water and debris getting into a crack. It doesn&apos;t stop the slab
            from moving. When movement continues, the repair may need maintenance over time.
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Pricing Reality</div>
          <h2 className="mb-4">What Crack Repair Costs</h2>
          <p className="prose-muted mb-4 max-w-[820px]">
            Cost depends on the total length of cracking, the repair method, access, whether panels
            need lifting or replacing, and the surface (residential flatwork vs. commercial slab).
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-concrete/[0.08] mb-6 max-w-[820px]"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            <div className="bg-stone p-5">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">
                Typical range
              </div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1">
                Joint sealing
              </div>
              <p className="text-[0.86rem] text-muted-text">Typical driveway: $300–$800</p>
            </div>
            <div className="bg-stone p-5">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">
                Typical range
              </div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1">
                Single-panel replacement
              </div>
              <p className="text-[0.86rem] text-muted-text">$400–$1,200 per panel</p>
            </div>
          </div>
          {/* TODO(owner): add a minimum service charge and per-linear-foot crack sealing range if FDZ wants to publish them */}
          <p className="prose-muted mb-8 max-w-[820px]">
            For broader pricing, see our{" "}
            <Link
              to="/blog/cost-of-concrete-oklahoma-city-2026"
              className="text-orange no-underline font-medium"
            >
              2026 Oklahoma City concrete cost guide
            </Link>
            .
          </p>

          <h3 className="mb-4">How the Estimate Works</h3>
          <ol className="space-y-3 max-w-[820px] mb-8 pl-0" style={{ listStyle: "none" }}>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              <strong className="text-concrete">1.</strong> Send a few details and photos (form below)
            </li>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              <strong className="text-concrete">2.</strong> We visit, check the crack, the support
              underneath and drainage
            </li>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              <strong className="text-concrete">3.</strong> You get a written estimate with the
              recommended repair and any alternatives
            </li>
          </ol>

          <section id="estimate" className="scroll-mt-24">
            <div className="section-eye">Free Estimate</div>
            <h3 className="mb-4">
              Request a Free
              <br />
              <em className="h2-accent">On-Site Evaluation.</em>
            </h3>
            <p className="prose-muted mb-6 max-w-[680px]">
              Include city, concrete surface (driveway, patio, sidewalk, garage floor, parking lot,
              commercial/warehouse slab, or other), approximate size of the damage, and timing. We
              visit before quoting — or call{" "}
              <a href={`tel:${phone.tel}`} className="text-orange no-underline font-medium">
                {phone.display}
              </a>
              .
            </p>
            <EstimateForm fromPath={CRACK_REPAIR_PATH} />
          </section>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Local Expertise</div>
          <h2 className="mb-4">Why Concrete Cracks in Oklahoma</h2>
          <ul className="space-y-3 max-w-[820px] mb-6" style={{ listStyle: "none", padding: 0 }}>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              Expansive clay soil that swells and shrinks with moisture
            </li>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              Repeated freeze-thaw cycles in winter
            </li>
            <li className="text-[0.9rem] text-muted-text leading-relaxed">
              Heavy spring rain and drainage running toward slabs
            </li>
          </ul>
          <p className="prose-muted max-w-[820px] mb-10">
            That&apos;s why we look at drainage and the base, not just the crack.
          </p>

          <h3 className="mb-3">Areas We Serve</h3>
          <p className="prose-muted mb-8 max-w-[820px]">
            {CRACK_REPAIR_TOWNS.map((town, i) => (
              <span key={town.to}>
                {i > 0 ? ", " : ""}
                <Link to={town.to} className="text-orange no-underline font-medium">
                  {town.name}
                </Link>
              </span>
            ))}
            .
          </p>
          <div className="section-eye">Service Areas We Cover</div>
          <h2 className="mb-4">
            Serving the Entire
            <br />
            <em className="h2-accent">OKC Metro.</em>
          </h2>
          <CityGrid />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ
            items={crackRepairFaq}
            eyebrow="FAQ"
            title='Concrete Crack Repair<br/><em class="h2-accent">FAQ.</em>'
          />
        </section>
      </ScrollReveal>

      <FinalCTA
        heading="Get Your Cracked Concrete"
        headingAccent="Looked At."
        description={`Send us a few photos or call ${phone.display}. We'll come out, check what's causing the crack and give you a written estimate with straight answers.`}
        buttonLabel="Request Free On-Site Evaluation →"
        to="#estimate"
      />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Related</div>
          <h2 className="mb-6">
            More From
            <br />
            <em className="h2-accent">FDZ Construction.</em>
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]"
            style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            {crackRepairRelated.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors"
              >
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text font-bold mb-2">
                  Related
                </div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">
                  {item.label} →
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <InternalLinksHub currentServiceSlug={CRACK_REPAIR_SLUG} />
    </main>
  );
}
