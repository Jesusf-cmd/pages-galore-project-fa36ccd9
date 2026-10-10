import commercialFoundationImg from "@/assets/commercial-concrete-foundation-okc.webp";
import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import TradeBadge from "@/components/TradeBadge";
import { usePageSEO } from "@/hooks/useSEO";
import { useFaqJsonLd } from "@/hooks/useFaqJsonLd";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import CityGrid from "@/components/CityGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import InternalLinksHub from "@/components/InternalLinksHub";
import ProjectDocumentUpload from "@/components/ProjectDocumentUpload";
import EstimateForm from "@/components/EstimateForm";
import ProjectGrid from "@/components/ProjectGrid";

const HOME_PROJECT_IDS = [
  "guthrie-forklift-ramp",
  "norman-patio-paver-walkway",
  "star-spencer-hs",
  "edmond-driveway",
  "okc-stamped-patio",
  "okc-retaining-wall",
] as const;

const homeFAQ = [
  {
    question: "Do you subcontract any of the work?",
    answer:
      "No — our concrete and sewer line work is 100% self-performed by our own crew and equipment, from start to finish. We do not subcontract the excavation, pipe work, or concrete restoration on sewer line jobs.",
  },
  {
    question: "How much does a concrete driveway cost in Oklahoma City?",
    answer:
      "In Oklahoma City, a standard concrete driveway typically costs $5,760–$9,600 for a 24×40 ft pour — about $6–$10 per sq ft installed. The concrete cost in Oklahoma City depends on base prep depth, slab thickness, PSI specification, and whether existing pavement needs removal.",
  },
  {
    question: "What is the cost per square foot for concrete in OKC?",
    answer:
      "Concrete in Oklahoma City typically runs $6–$10 per square foot for standard residential slabs and driveways, $9–$14 per sq ft for foundation work, and $15–$22 per sq ft for stamped or decorative finishes.",
  },
  {
    question: "How thick should a concrete driveway be?",
    answer:
      "Most residential concrete driveways in Oklahoma City are poured at 4 inches thick for standard passenger vehicles. If you park heavy trucks, RVs, or trailers, 5–6 inches is recommended.",
  },
  {
    question: "Do I need rebar or wire mesh in concrete?",
    answer:
      "For most residential concrete Oklahoma City projects, rebar is strongly recommended — especially given the area's expansive clay soil. Rebar provides structural tensile strength to resist soil movement.",
  },
  {
    question: "How long does concrete take to cure?",
    answer:
      "Concrete reaches about 70% of its design strength within 7 days and full cure at 28 days. You can typically walk on a fresh pour after 24–48 hours and drive on a residential driveway after 7 days.",
  },
  {
    question: "How long will a concrete driveway last in Oklahoma?",
    answer:
      "A properly installed concrete driveway in Oklahoma should last 30–50 years with minimal maintenance. The key factors are base preparation, adequate thickness, proper reinforcement, and control joints.",
  },
];

export default function Index() {
  const seo = usePageSEO("/");
  useFaqJsonLd(homeFAQ);

  return (
    <main>
      <HeroSection h1={seo.h1} />
      <BuyerPathsSection />
      <HowWeWorkSection />
      <ProjectProofSection />
      <BuyerGuideSection />
      <SiteWorkSection />
      <ServiceAreaSection />
      <ScrollReveal>
        <section className="section-padding">
          <FAQ
            items={homeFAQ}
            eyebrow="FAQ"
            title='Common Questions About<br/><em class="h2-accent">Concrete &amp; Sewer Line in OKC.</em>'
            subtitle="Straight answers from a crew that's poured concrete and repaired sewer lines across the OKC metro for years."
          />
        </section>
      </ScrollReveal>
      <InternalLinksHub showServices={false} showCities={false} />
      <FinalCTA />
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
          alt="Commercial concrete foundation project in Oklahoma City by FDZ Construction LLC"
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
          Oklahoma City · Licensed, Bonded &amp; Insured · Locally Owned
        </span>
        <h1 className="mb-4 md:mb-6" style={{ fontSize: "clamp(1.9rem, 5vw, 5.2rem)", lineHeight: 1 }}>
          {h1}
        </h1>
        <p className="text-sm md:text-base text-muted-text max-w-[540px] mb-5 md:mb-6 leading-[1.7] font-light">
          FDZ Construction LLC is an Oklahoma City concrete contractor serving homeowners and businesses across the
          OKC metro — Edmond, Norman, Moore, Yukon, Mustang, Midwest City, Del City, and Stillwater. We are a locally
          owned concrete company: our own crew self-performs every pour and sewer line job, licensed, bonded, and
          insured, with 8+ years of experience and a written 2-year workmanship warranty on every project.
        </p>
        <TrustBar />
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-8">
          <a href="tel:4054584805" className="btn-outline text-center w-full sm:w-auto">
            📞 (405) 458-4805
          </a>
          <a href="#estimate" className="btn-primary text-center w-full sm:w-auto">
            Get Your Free OKC Estimate →
          </a>
        </div>
      </div>
      <div id="estimate" className="pt-2 nav:pt-0 relative z-[2]">
        <div
          className="bg-stone p-4 md:p-5"
          style={{ border: "1px solid hsl(var(--concrete) / 0.1)", borderBottom: "none" }}
        >
          <p className="text-[0.75rem] md:text-[0.78rem] text-muted-text leading-[1.7] font-light">
            Standard driveways and slabs in Oklahoma City typically run{" "}
            <strong className="text-concrete">$6–$10 per sq ft</strong>; foundation work often lands around $9–$14.
            Request a written estimate below — no phone quotes.
          </p>
        </div>
        <EstimateForm />
        <ProjectDocumentUpload />
      </div>
    </section>
  );
}

function BuyerPathsSection() {
  const homeowners = [
    { to: "/driveways-oklahoma-city", label: "concrete driveways" },
    { to: "/patios-oklahoma-city", label: "patios & stamped concrete" },
    { to: "/sidewalks-oklahoma-city", label: "sidewalks, curb & gutter" },
    { to: "/foundations-oklahoma-city", label: "concrete foundations" },
    { to: "/retaining-walls-oklahoma-city", label: "retaining walls" },
  ];
  const commercial = [
    { to: "/commercial-concrete-oklahoma-city", label: "commercial concrete" },
    { to: "/parking-lots-oklahoma-city", label: "concrete parking lots" },
    { to: "/commercial-concrete-repair-oklahoma-city", label: "commercial concrete repair" },
    { to: "/industrial-concrete-repair-oklahoma-city", label: "industrial concrete repair" },
    { to: "/loading-dock-concrete-repair-oklahoma-city", label: "loading dock concrete repair" },
  ];

  return (
    <ScrollReveal>
      <section id="concrete-services" className="section-padding scroll-mt-24">
        <div className="section-eye">Who we help</div>
        <h2 className="mb-3">
          Two Paths.
          <br />
          <em className="h2-accent">One Self-Performing Crew.</em>
        </h2>
        <p className="prose-muted mb-8 max-w-[760px]">
          Whether you need a residential pour or commercial flatwork, FDZ self-performs the work — same crew,
          same standards across the metro.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          <div className="bg-stone p-6 md:p-8">
            <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Homeowners</div>
            <h3 className="text-lg mb-4">Residential concrete</h3>
            <ul className="space-y-2" style={{ listStyle: "none", padding: 0 }}>
              {homeowners.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-orange no-underline hover:underline text-[0.92rem]">
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone p-6 md:p-8">
            <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
              Commercial &amp; GCs
            </div>
            <h3 className="text-lg mb-4">Commercial &amp; industrial</h3>
            <ul className="space-y-2" style={{ listStyle: "none", padding: 0 }}>
              {commercial.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-orange no-underline hover:underline text-[0.92rem]">
                    → {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function HowWeWorkSection() {
  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">How we work</div>
        <h2 className="mb-4">
          One Crew.
          <br />
          <em className="h2-accent">Digging &amp; Concrete Restoration.</em>
        </h2>
        <p className="prose-muted max-w-[820px] mb-6">
          Most sewer repairs mean digging through a driveway or slab — then finding a second contractor to pour it
          back. We don&apos;t split the job. Our own crew handles the excavation and the concrete restoration, start
          to finish.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          <div className="bg-stone p-6 md:p-8">
            <div className="mb-4">
              <TradeBadge model="self-performed" />
            </div>
            <h3 className="text-lg mb-3">Concrete — Our Crew, Every Pour</h3>
            <p className="text-[0.85rem] text-muted-text leading-relaxed font-light">
              Driveways, patios, slabs, foundations, retaining walls, sidewalks, and commercial concrete are poured
              and finished by our own employees — not subcontracted labor.
            </p>
          </div>
          <div className="bg-stone p-6 md:p-8">
            <div className="mb-4">
              <TradeBadge model="self-performed" />
            </div>
            <h3 className="text-lg mb-3">Sewer Line — Same Crew, No Handoff</h3>
            <p className="text-[0.85rem] text-muted-text leading-relaxed font-light mb-4">
              We excavate, complete the pipe work, and restore the concrete ourselves — no second phone call for the
              patch.
            </p>
            <Link
              to="/sewer-line-repair-oklahoma-city"
              className="text-orange no-underline font-medium text-[0.82rem]"
            >
              Residential sewer line repair in Oklahoma City →
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function ProjectProofSection() {
  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">Our work</div>
        <h2 className="mb-3">Recent concrete projects across the OKC metro</h2>
        <p className="prose-muted mb-8 max-w-[760px]">
          Real pours for Oklahoma homeowners and businesses — from{" "}
          <Link to="/driveways-oklahoma-city" className="text-orange no-underline">
            concrete driveways
          </Link>{" "}
          to commercial slabs. See more on{" "}
          <Link to="/our-projects" className="text-orange no-underline">
            our projects
          </Link>
          .
        </p>
        <ProjectGrid ids={[...HOME_PROJECT_IDS]} />
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
        <div className="section-eye">Buying advice</div>
        <h2 className="mb-4">How to choose a concrete contractor in Oklahoma City</h2>
        <p className="prose-muted mb-6 max-w-[820px]">
          A long-lasting pour in Oklahoma depends less on the surface finish and more on decisions made before the
          truck arrives. Use these checkpoints when you compare written scopes.
        </p>
        <ol className="max-w-[820px] space-y-5" style={{ paddingLeft: "1.25rem" }}>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">Base prep on expansive red clay.</strong> OKC sits on clay that swells
            when wet and shrinks in drought. Compacted aggregate base and correct drainage grading do more for
            lifespan than any sealer applied later.
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">Reinforcement matched to the load.</strong> Passenger driveways and
            light slabs often use rebar or mesh by design; heavier traffic needs a deliberate choice. Read our guide
            to{" "}
            <Link to="/blog/rebar-vs-wire-mesh-concrete-slabs" className="text-orange no-underline">
              rebar vs wire mesh for concrete slabs
            </Link>
            .
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">A written scope and estimate.</strong> Ask for thickness, base depth,
            reinforcement, joint layout, and finish in writing — not a verbal number over the phone.
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">License and insurance on file.</strong> Confirm the company is licensed,
            bonded, and insured in Oklahoma before work starts.
          </li>
          <li className="text-[0.9rem] text-muted-text leading-relaxed font-light">
            <strong className="text-concrete">A workmanship warranty in writing.</strong> FDZ backs every project with
            a 2-year workmanship warranty in writing.
          </li>
        </ol>
      </section>
    </ScrollReveal>
  );
}

function SiteWorkSection() {
  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">Also from our crew</div>
        <h2 className="mb-3">Site Work Services</h2>
        <p className="prose-muted max-w-[820px]">
          <Link to="/skid-steer-services-oklahoma-city" className="text-orange no-underline font-medium">
            Skid Steer Services
          </Link>{" "}
          — land clearing, dirt work, leveling, gravel driveways, and brush hog mowing for lots up to about 2 acres.{" "}
          <Link to="/excavator-services-oklahoma-city" className="text-orange no-underline font-medium">
            Excavator Services
          </Link>{" "}
          — heavier clearing, deep grading, drainage, and larger pads. The same crew also handles{" "}
          <Link to="/sewer-line-repair-oklahoma-city" className="text-orange no-underline font-medium">
            residential sewer line repair
          </Link>
          .
        </p>
      </section>
    </ScrollReveal>
  );
}

function ServiceAreaSection() {
  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">Service areas</div>
        <h2 className="mb-3">
          We Come To
          <br />
          <em className="h2-accent">You.</em>
        </h2>
        <p className="prose-muted mb-6 max-w-[820px]">
          FDZ serves the greater Oklahoma City metro from our base in the city. Start with the{" "}
          <Link to="/oklahoma-city-concrete" className="text-orange no-underline">
            Oklahoma City service area
          </Link>{" "}
          page for local soil and neighborhoods, or pick your suburb below for city-specific concrete and sewer
          details.
        </p>
        <CityGrid />
        <p className="prose-muted mt-8 text-[0.85rem] max-w-[820px]">
          Looking for a specific service? See{" "}
          <Link to="/driveways-oklahoma-city" className="text-orange no-underline">
            concrete driveways
          </Link>
          ,{" "}
          <Link to="/patios-oklahoma-city" className="text-orange no-underline">
            patios &amp; stamped concrete
          </Link>
          ,{" "}
          <Link to="/sidewalks-oklahoma-city" className="text-orange no-underline">
            sidewalks
          </Link>
          ,{" "}
          <Link to="/foundations-oklahoma-city" className="text-orange no-underline">
            foundations
          </Link>
          ,{" "}
          <Link to="/commercial-concrete-oklahoma-city" className="text-orange no-underline">
            commercial concrete
          </Link>
          ,{" "}
          <Link to="/sewer-line-repair-oklahoma-city" className="text-orange no-underline">
            sewer line repair
          </Link>
          , and{" "}
          <Link to="/our-projects" className="text-orange no-underline">
            our projects
          </Link>
          .
        </p>
      </section>
    </ScrollReveal>
  );
}
