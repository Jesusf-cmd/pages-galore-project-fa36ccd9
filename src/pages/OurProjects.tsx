import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import ProjectSpecs from "@/components/ProjectSpecs";
import { usePageSEO } from "@/hooks/useSEO";
import {
  PROJECTS,
  ROSEDALE_SHOP_VIDEO,
  getProjectById,
} from "@/data/projects";

/** Featured project narratives kept from the previous /our-projects page (visible text unchanged). */
const FEATURED_COPY: Record<
  string,
  {
    eyebrow: string;
    headline: ReactNode;
    body: ReactNode;
    stats: { value: string; label: string }[];
    media?: "video" | "grid" | "single";
  }
> = {
  "star-spencer-hs": {
    eyebrow: "Commercial · Spencer, Oklahoma",
    headline: (
      <>
        Star Spencer
        <br />
        High School
      </>
    ),
    body: (
      <>
        We installed new concrete stairs and{" "}
        <Link to="/sidewalks-oklahoma-city" className="text-orange no-underline">
          sidewalks with ADA-compliant ramps
        </Link>{" "}
        at Star Spencer High School. This project required precision grading, proper reinforcement,
        and compliance with ADA accessibility standards — all completed on schedule for the school
        district.
      </>
    ),
    stats: [
      { value: "ADA", label: "Compliant ramps" },
      { value: "Stairs", label: "& Sidewalks" },
      { value: "Public", label: "School project" },
    ],
    media: "grid",
  },
  "rosedale-shop": {
    eyebrow: "Commercial · Rosedale, Oklahoma",
    headline: (
      <>
        10,000 Sq Ft
        <br />
        Shop Foundation
      </>
    ),
    body: (
      <>
        Large-scale{" "}
        <Link to="/foundations-oklahoma-city" className="text-orange no-underline">
          commercial foundation pour
        </Link>{" "}
        for a 10,000 sq ft shop in Rosedale, Oklahoma. The project required careful sub-base
        preparation on Oklahoma&apos;s expansive clay soil, a full engineered rebar schedule, and
        coordinated concrete placement across the full slab footprint in a single pour. Power trowel
        finish throughout.
      </>
    ),
    stats: [
      { value: "10,000", label: "Sq ft slab" },
      { value: "Shop", label: "Foundation" },
      { value: "1 Pour", label: "Full footprint" },
    ],
    media: "video",
  },
  "edmond-pier-foundation": {
    eyebrow: "Residential · Edmond, Oklahoma",
    headline: (
      <>
        Pier Foundation
        <br />
        Thickened Slab
      </>
    ),
    body: (
      <>
        <Link to="/foundations-oklahoma-city" className="text-orange no-underline">
          Pier foundation with thickened slab
        </Link>{" "}
        in Edmond, Oklahoma — designed for a lot that required fill to level the grade. Rather than
        pouring on compacted fill, we drilled piers 5 feet deep to reach undisturbed soil, then tied
        the thickened slab to the pier system. Edmond&apos;s mix of sandy and clay-heavy soil makes
        this kind of site-specific evaluation critical before any foundation pour.
      </>
    ),
    stats: [
      { value: "5 ft", label: "Pier depth" },
      { value: "Pier", label: "+ thickened slab" },
      { value: "Fill", label: "Lot engineered" },
    ],
    media: "grid",
  },
  "okc-retaining-wall": {
    eyebrow: "Residential · Oklahoma City, OK",
    headline: (
      <>
        Poured Concrete
        <br />
        Retaining Wall
      </>
    ),
    body: (
      <>
        Tall{" "}
        <Link to="/retaining-walls-oklahoma-city" className="text-orange no-underline">
          poured concrete retaining wall
        </Link>{" "}
        built alongside a new residential construction project in Oklahoma City. Forms stripped to
        reveal a clean monolithic structure — no block joints to shift or crack over time. Wall was
        designed for the lateral pressure of OKC&apos;s expansive clay soil with proper drainage
        behind the wall to prevent hydrostatic buildup.
      </>
    ),
    stats: [
      { value: "Poured", label: "Concrete wall" },
      { value: "Mono", label: "lithic structure" },
      { value: "Clay", label: "Soil engineered" },
    ],
    media: "single",
  },
  "guthrie-forklift-ramp": {
    eyebrow: "Commercial · Guthrie, Oklahoma",
    headline: (
      <>
        Forklift Ramp
        <br />
        Demolition &amp; Replacement
      </>
    ),
    body: (
      <>
        FDZ Construction completed a{" "}
        <Link to="/commercial-concrete-repair-oklahoma-city" className="text-orange no-underline">
          warehouse forklift ramp demolition and concrete replacement
        </Link>{" "}
        project in Guthrie, Oklahoma. The project involved removing existing concrete, preparing the
        area for replacement, placing new concrete with a line pump, and applying a power-trowel
        finish. Work was performed inside an operating warehouse — see our{" "}
        <Link to="/industrial-concrete-repair-oklahoma-city" className="text-orange no-underline">
          industrial concrete repair
        </Link>{" "}
        services.
      </>
    ),
    stats: [
      { value: "Demo", label: "& pour-back" },
      { value: "Line", label: "Pump placement" },
      { value: "Live", label: "Warehouse" },
    ],
    media: "grid",
  },
  "piedmont-foundation": {
    eyebrow: "Residential · Piedmont, Oklahoma",
    headline: (
      <>
        Residential
        <br />
        Foundation Pour
      </>
    ),
    body: (
      <>
        Slab-on-grade{" "}
        <Link to="/foundations-oklahoma-city" className="text-orange no-underline">
          residential foundation
        </Link>{" "}
        in Piedmont, Oklahoma — compacted aggregate base over Oklahoma red clay, full engineered
        rebar schedule, and power trowel finish. Piedmont&apos;s soil carries the same Permian-age
        clay and shale base as the rest of the OKC metro, so sub-base prep is critical before any
        foundation pour.
      </>
    ),
    stats: [
      { value: "Rebar", label: "Engineered schedule" },
      { value: "Trowel", label: "Finish" },
      { value: "Clay", label: "Soil prep" },
    ],
    media: "grid",
  },
};

const FEATURED_ORDER = [
  "star-spencer-hs",
  "rosedale-shop",
  "edmond-pier-foundation",
  "okc-retaining-wall",
  "guthrie-forklift-ramp",
  "piedmont-foundation",
] as const;

function FeaturedMedia({
  id,
  media,
}: {
  id: string;
  media?: "video" | "grid" | "single";
}) {
  const project = getProjectById(id);
  if (!project) return null;

  if (media === "video") {
    return (
      <div className="bg-darker relative overflow-hidden">
        <video
          className="w-full h-full object-cover min-h-[320px]"
          controls
          preload="none"
          playsInline
          poster={project.images[0]?.src}
        >
          <source src={ROSEDALE_SHOP_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (media === "grid") {
    const imgs = project.images;
    const isGuthrie = id === "guthrie-forklift-ramp";
    return (
      <div className="bg-darker relative overflow-hidden">
        <div
          className="grid grid-cols-2 h-full min-h-[320px]"
          style={isGuthrie ? { gridTemplateRows: "1fr 1fr" } : undefined}
        >
          {imgs.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`w-full h-full object-cover ${
                isGuthrie && i === imgs.length - 1 ? "col-span-2" : "col-span-1"
              }`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    );
  }

  const img = project.images[0];
  return (
    <div className="bg-darker relative overflow-hidden min-h-[320px]">
      {img ? (
        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <div className="w-full h-full min-h-[320px] flex items-center justify-center text-muted-text text-sm">
          {/* TODO(FDZ): photo */}
          Photo coming soon
        </div>
      )}
    </div>
  );
}

export default function OurProjects() {
  const seo = usePageSEO("/our-projects");
  const moreProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">OKC Metro · Real Projects · Real Results</span>
        <h1 className="max-w-[820px] mb-5">{seo.h1}</h1>
        <p className="prose-muted max-w-[680px] mb-8">
          Real jobs for <strong>Oklahoma City homeowners and businesses</strong> —{" "}
          <Link to="/driveways-oklahoma-city" className="text-orange no-underline">
            concrete driveways
          </Link>
          ,{" "}
          <Link to="/patios-oklahoma-city" className="text-orange no-underline">
            patios
          </Link>
          ,{" "}
          <Link to="/patios-oklahoma-city" className="text-orange no-underline">
            stamped concrete
          </Link>
          , foundations, and commercial pours.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">
            Get Your Free Estimate →
          </Link>
          <a href="tel:4054584805" className="btn-outline">
            📞 (405) 458-4805
          </a>
        </div>
      </section>
      <TrustBar />

      <section className="section-padding">
        <div className="section-eye">Featured Projects</div>
        <h2 className="mb-4">
          Watch Our Work
          <br />
          <em className="h2-accent">In Action.</em>
        </h2>
        <p className="prose-muted mb-10">
          Some of our proudest commercial concrete projects — with video so you can see the quality
          for yourself.
        </p>

        {FEATURED_ORDER.map((id, index) => {
          const copy = FEATURED_COPY[id];
          const project = getProjectById(id);
          if (!copy || !project) return null;
          const textFirst =
            id === "star-spencer-hs" ||
            id === "edmond-pier-foundation" ||
            id === "okc-retaining-wall" ||
            id === "piedmont-foundation";
          const isLast = index === FEATURED_ORDER.length - 1;
          const textBlock = (
            <div
              className={`bg-stone p-8 lg:p-10 flex flex-col justify-center ${
                id === "piedmont-foundation" ? "order-2 lg:order-1" : ""
              } ${id === "guthrie-forklift-ramp" ? "order-first lg:order-last" : ""}`}
            >
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">
                {copy.eyebrow}
              </div>
              <p className="text-[0.78rem] text-muted-text mb-2">{project.title}</p>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                {copy.headline}
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                {copy.body}
              </p>
              <ProjectSpecs project={project} />
              <div
                className="flex gap-8 pt-4"
                style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}
              >
                {copy.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-xl font-black text-orange">{stat.value}</div>
                    <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
          const mediaBlock = (
            <div
              className={
                id === "edmond-pier-foundation"
                  ? "bg-darker relative overflow-hidden order-first lg:order-last"
                  : id === "piedmont-foundation"
                    ? "order-1 lg:order-2"
                    : undefined
              }
            >
              <FeaturedMedia id={id} media={copy.media} />
            </div>
          );

          return (
            <div
              key={id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] ${
                isLast ? "" : "mb-8"
              }`}
              style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
            >
              {textFirst ? (
                <>
                  {textBlock}
                  {mediaBlock}
                </>
              ) : (
                <>
                  {mediaBlock}
                  {textBlock}
                </>
              )}
            </div>
          );
        })}
      </section>

      <section className="section-padding section-alt">
        <div className="section-eye">More Projects</div>
        <h2 className="mb-4">
          Work Across
          <br />
          <em className="h2-accent">the OKC Metro.</em>
        </h2>
        <p className="prose-muted mb-8">
          Every project below was completed by our own crew — no subcontractors.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}
        >
          {moreProjects.map((p) => (
            <div key={p.id} className="bg-stone p-6">
              {p.images.length >= 3 && (
                <div className="mb-4 -mx-6 -mt-6 grid grid-cols-3 grid-rows-2 gap-px aspect-[16/10] overflow-hidden bg-concrete/[0.08]">
                  {p.images.slice(0, 3).map((img, i) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full min-h-0 object-cover ${
                        i === 0 ? "col-span-2 row-span-2" : ""
                      }`}
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1">
                {p.title}
              </div>
              <div className="text-[0.66rem] text-orange tracking-[0.1em] uppercase font-bold mb-3">
                {p.city}
              </div>
              <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4">{p.details}</p>
              <ProjectSpecs project={p} />
              <div className="flex gap-6">
                {p.sizeLabel && (
                  <div>
                    <div className="font-display text-lg font-black text-orange">{p.sizeLabel}</div>
                    <div className="text-[0.6rem] text-muted-text uppercase tracking-wider">Size</div>
                  </div>
                )}
                {p.timeLabel && (
                  <div>
                    <div className="font-display text-lg font-black text-orange">{p.timeLabel}</div>
                    <div className="text-[0.6rem] text-muted-text uppercase tracking-wider">
                      Completed in
                    </div>
                  </div>
                )}
              </div>
              <Link
                to={p.ownerPath}
                className="inline-block mt-4 text-orange no-underline text-[0.78rem] font-semibold"
              >
                Related service →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="section-eye">Our Concrete Services</div>
        <h2 className="mb-4">Services Behind This Work</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" style={{ listStyle: "none", padding: 0 }}>
          {[
            { href: "/driveways-oklahoma-city", label: "Concrete driveways" },
            { href: "/foundations-oklahoma-city", label: "Concrete foundations" },
            { href: "/retaining-walls-oklahoma-city", label: "Retaining walls" },
            { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete" },
            { href: "/parking-lots-oklahoma-city", label: "Parking lots" },
            { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
          ].map((s) => (
            <li key={s.href}>
              <Link to={s.href} className="text-orange no-underline hover:underline text-[0.92rem]">
                → {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FinalCTA />
    </main>
  );
}
