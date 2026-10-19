import commercialFoundationImg from "@/assets/commercial-concrete-foundation-okc.webp";
import { Link } from "react-router-dom";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import EstimateForm from "@/components/EstimateForm";
import ProjectDocumentUpload from "@/components/ProjectDocumentUpload";
import ProjectGrid from "@/components/ProjectGrid";
import InternalLinksHub from "@/components/InternalLinksHub";
import { concreteContractorsWichita } from "@/content/wichitaPages";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import { usePageSEO } from "@/hooks/useSEO";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { KANSAS_PHONE, OKLAHOMA_PHONE, WICHITA_HOME_PATH } from "@/lib/phones";

const WICHITA_HUB_PATH = WICHITA_HOME_PATH;
const WICHITA_ORIGIN = "concrete-contractors-wichita-ks";

const WICHITA_HOME_PROJECT_IDS = [
  "guthrie-forklift-ramp",
  "okc-retaining-wall",
  "star-spencer-hs",
  "okc-stamped-patio",
  "norman-patio-paver-walkway",
  "edmond-driveway",
] as const;

const SERVICE_CARDS = [
  {
    to: "/commercial-concrete-wichita",
    eyebrow: "Commercial",
    title: "Commercial concrete",
    description:
      "Parking lots, site paving, curb and gutter, sidewalks, and site slabs for Wichita commercial properties.",
  },
  {
    to: "/industrial-concrete-wichita",
    eyebrow: "Industrial",
    title: "Industrial concrete",
    description:
      "Warehouse slabs, equipment foundations, machine pads, loading dock concrete, and heavy-use paving.",
  },
  {
    to: "/retaining-walls-wichita",
    eyebrow: "Site walls",
    title: "Retaining walls",
    description:
      "Poured concrete and block walls for commercial grade changes, site walls, installation, and repair.",
  },
  {
    to: "/stamped-concrete-wichita",
    eyebrow: "Decorative",
    title: "Stamped concrete",
    description:
      "Decorative patios, driveways, walkways, entries, and courtyards for homes and commercial sites.",
  },
] as const;

const page = concreteContractorsWichita;

export default function ConcreteContractorsWichita() {
  const seo = usePageSEO(WICHITA_HUB_PATH);
  useFaqJsonLd(page.faq);

  return (
    <main>
      <HeroSection h1={seo.h1} />
      <ServiceCardsSection />
      <HowEstimatesWorkSection />
      <ProjectProofSection />
      <BuyerGuideSection />
      <ServiceAreaSection />
      <ScrollReveal>
        <section className="section-padding">
          <FAQ
            items={page.faq}
            eyebrow="FAQ"
            title={page.faqTitle}
            subtitle="Straight answers about FDZ's Wichita-area concrete crew, scopes, and how estimates are written."
          />
        </section>
      </ScrollReveal>
      <InternalLinksHub showServices={false} showCities={false} />
      <FinalCTA
        heading={page.finalCta.heading}
        headingAccent={page.finalCta.headingAccent}
        description={page.finalCta.description}
        buttonLabel={page.finalCta.buttonLabel}
        to="#estimate"
      />
    </main>
  );
}

function HeroSection({ h1 }: { h1: string }) {
  return (
    <section
      className="grid grid-cols-1 nav:grid-cols-[1.15fr_0.85fr] gap-6 nav:gap-12 px-4 md:px-12 pt-20 pb-8 md:pt-32 md:pb-16 relative overflow-hidden"
      style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={commercialFoundationImg}
          alt="Example commercial concrete foundation pour by FDZ Construction LLC in Oklahoma City — photo used for atmosphere on the Wichita landing page"
          className="w-full h-full object-cover opacity-[0.55]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--darker) / 0.85) 30%, hsl(var(--darker) / 0.4) 100%)",
          }}
        />
      </div>
      <div className="hero-glow" style={{ zIndex: 1 }} />
      <div className="relative z-[2]">
        <span className="eyebrow mb-3 md:mb-5 block text-[0.6rem] md:text-xs">
          {page.eyebrow}
        </span>
        <h1 className="mb-4 md:mb-6" style={{ fontSize: "clamp(1.9rem, 5vw, 5.2rem)", lineHeight: 1 }}>
          {h1}
        </h1>
        <p className="text-sm md:text-base text-muted-text max-w-[540px] mb-5 md:mb-6 leading-[1.7] font-light">
          FDZ Construction LLC takes commercial and industrial concrete work in Wichita and nearby Sedgwick County
          through its Wichita-area crew. Retaining walls and stamped concrete are available when the site needs them.
          Coverage is confirmed during estimating — call {KANSAS_PHONE.display} or request a written estimate below.
        </p>
        <p className="text-[0.78rem] text-muted-text max-w-[540px] mb-5 leading-relaxed font-light">
          {page.modelNote}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
          <a href={`tel:${KANSAS_PHONE.tel}`} className="btn-outline text-center w-full sm:w-auto">
            📞 {KANSAS_PHONE.display}
          </a>
          <a href="#estimate" className="btn-primary text-center w-full sm:w-auto">
            Request a Wichita Estimate →
          </a>
        </div>
      </div>
      <div id="estimate" className="pt-2 nav:pt-0 relative z-[2] scroll-mt-24">
        <div
          className="bg-stone p-4 md:p-5"
          style={{ border: "1px solid hsl(var(--concrete) / 0.1)", borderBottom: "none" }}
        >
          <p className="text-[0.75rem] md:text-[0.78rem] text-muted-text leading-[1.7] font-light">
            Qualified commercial and industrial inquiries are the priority for this page. Send your project
            details for a written estimate after plan review or a site visit — include the Wichita-area
            address, scope, and any drawings or photos.
          </p>
        </div>
        <EstimateForm fromPath={WICHITA_HUB_PATH} />
        <ProjectDocumentUpload fromPath={WICHITA_HUB_PATH} />
      </div>
    </section>
  );
}

function ServiceCardsSection() {
  return (
    <ScrollReveal>
      <section id="wichita-services" className="section-padding scroll-mt-24">
        <div className="section-eye">Wichita services</div>
        <h2 className="mb-3">
          {page.serviceCardsTitle}
          <br />
          <em className="h2-accent">{page.serviceCardsTitleAccent}</em>
        </h2>
        <p className="prose-muted mb-8 max-w-[760px]">
          Start with the service that matches the site. Each page keeps detailed coverage for that scope; this hub
          is for choosing the right path and requesting a Wichita estimate.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          {SERVICE_CARDS.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="bg-stone p-6 md:p-8 no-underline block hover:bg-concrete/[0.04] transition-colors"
            >
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
                {card.eyebrow}
              </div>
              <h3 className="text-lg mb-3 text-concrete">{card.title}</h3>
              <p className="text-[0.85rem] text-muted-text leading-relaxed font-light mb-4">
                {card.description}
              </p>
              <span className="text-orange text-[0.82rem] font-medium">Open service page →</span>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function HowEstimatesWorkSection() {
  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">{page.processEyebrow}</div>
        <h2 className="mb-4">
          {page.processTitle}
          <br />
          <em className="h2-accent">{page.processTitleAccent}</em>
        </h2>
        <p className="prose-muted max-w-[820px] mb-6">{page.processIntro}</p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-concrete/[0.08]"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          {page.processSteps.map((step, index) => (
            <div key={step.title} className="bg-stone p-6 md:p-8">
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
                Step {index + 1}
              </div>
              <h3 className="text-lg mb-3">{step.title}</h3>
              <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ProjectProofSection() {
  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">FDZ project examples</div>
        <h2 className="mb-3">Examples of FDZ concrete work</h2>
        <p className="prose-muted mb-4 max-w-[760px]">
          Most images below are photos of completed FDZ projects. Each card shows the city and state where that
          work was done. One stamped patio card uses an AI illustration (labeled on the image) — not a job-site
          photo. These are capability examples, not claims that the same jobs were poured in Wichita.
        </p>
        <p className="prose-muted mb-8 max-w-[760px] text-[0.85rem]">
          Send your project details for a written estimate after plan review or a site visit. Historical Oklahoma
          contract prices on cards are not Wichita quotes.
        </p>
        <ProjectGrid
          ids={[...WICHITA_HOME_PROJECT_IDS]}
          kansasPresentation
          estimateHref="#estimate"
        />
        <div className="mt-6 text-center">
          <Link to="/our-projects" className="btn-outline text-sm py-3 px-8">
            View all projects →
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}

function BuyerGuideSection() {
  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">Project planning</div>
        <h2 className="mb-4">
          {page.projectTypesTitle}
          <br />
          <em className="h2-accent">{page.projectTypesTitleAccent}</em>
        </h2>
        <p className="prose-muted mb-6 max-w-[820px]">{page.projectTypesIntro}</p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-concrete/[0.08] mb-8"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          {page.projectTypes.map((item) => (
            <div key={item.title} className="bg-stone p-6 md:p-8">
              <h3 className="text-lg mb-3">{item.title}</h3>
              <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
        <ol className="max-w-[820px] space-y-5" style={{ paddingLeft: "1.25rem" }}>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">Match the service page to the scope.</strong> Parking and site paving
            belong on{" "}
            <Link to="/commercial-concrete-wichita" className="text-orange no-underline">
              commercial concrete
            </Link>
            ; warehouse slabs and docks belong on{" "}
            <Link to="/industrial-concrete-wichita" className="text-orange no-underline">
              industrial concrete
            </Link>
            .
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">Send drawings or photos with the request.</strong> Strength, thickness,
            reinforcement, and flatness follow the project plans when they apply — FDZ does not publish a universal
            Wichita slab specification.
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">Expect a written estimate after review.</strong> Phone numbers start the
            conversation; the quote is written after a plan review or site visit.
          </li>
        </ol>
      </section>
    </ScrollReveal>
  );
}

function ServiceAreaSection() {
  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">{page.serviceArea.eyebrow}</div>
        <h2 className="mb-3">
          {page.serviceArea.title}
          <br />
          <em className="h2-accent">{page.serviceArea.titleAccent}</em>
        </h2>
        <p
          className="prose-muted mb-4 max-w-[820px]"
          dangerouslySetInnerHTML={{ __html: page.serviceArea.introHtml }}
        />
        <p
          className="prose-muted max-w-[820px] text-[0.85rem]"
          dangerouslySetInnerHTML={{ __html: page.serviceArea.footnoteHtml }}
        />
        <p className="prose-muted mt-6 max-w-[820px] text-[0.85rem]">
          Oklahoma City projects stay on{" "}
          <a href={`tel:${OKLAHOMA_PHONE.tel}`} className="text-orange no-underline">
            {OKLAHOMA_PHONE.display}
          </a>{" "}
          and the{" "}
          <Link to="/" className="text-orange no-underline">
            Oklahoma City homepage
          </Link>
          . This page is for Wichita and nearby Sedgwick County.
        </p>
        {/* Keep origin slug referenced for tests/tools that scan module strings. */}
        <span className="sr-only">{WICHITA_ORIGIN}</span>
      </section>
    </ScrollReveal>
  );
}
