import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const SPENCER_VIDEO = "https://img1.wsimg.com/blobby/go/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/video/copy_AD0EB7AC-6471-4D2C-9970-C121B31EB011.mp4";
const ROSEDALE_VIDEO = "/videos/shop-foundation-pour-rosedale-oklahoma-web.mp4";

const otherProjects = [
  { title: "Pier Foundation — Thickened Slab", location: "Edmond, OK", desc: "Piers drilled 5 ft deep to undisturbed soil on a fill lot, tied to a thickened slab pour. Designed for Edmond's variable soil conditions where fill depth made standard prep insufficient.", size: "Residential", time: "Multi-day" },
  { title: "Poured Concrete Retaining Wall", location: "Oklahoma City, OK", desc: "Tall monolithic poured concrete retaining wall for new residential construction — engineered for OKC clay soil lateral pressure, drainage behind the wall.", size: "Residential", time: "Multi-day" },
  { title: "Forklift Ramp — Warehouse Concrete", location: "Guthrie, OK", desc: "Concrete forklift ramp poured inside a live warehouse. Reinforced slab, precise slope for forklift transition, power trowel finish flush with existing floor.", size: "Commercial", time: "1 day pour" },
  { title: "Residential Foundation Pour", location: "Piedmont, OK", desc: "Slab-on-grade residential foundation on Oklahoma red clay — compacted aggregate base, engineered rebar schedule, smooth trowel finish.", size: "1,400 sq ft", time: "1 day pour" },
  { title: "Driveway Replacement", location: "Edmond, OK", desc: "Full tear-out of cracked original driveway, 4\" reinforced pour with #3 rebar, broom finish.", size: "24×40", time: "2 days" },
  { title: "Stamped Concrete Patio", location: "Norman, OK", desc: "Ashlar slate pattern, custom charcoal release, matte sealer. Covered extension.", size: "580 sq ft", time: "3 days" },
  { title: "Commercial Parking Lot", location: "Yukon, OK", desc: "5\" commercial concrete parking lot for retail strip. Graded for drainage, rebar reinforced.", size: "4,200 sq ft", time: "5 days" },
  { title: "Residential Foundation", location: "Mustang, OK", desc: "Slab-on-grade foundation for new residential build. Compacted base, engineered rebar schedule.", size: "1,800 sq ft", time: "1 day pour" },
  { title: "Backyard Patio Slab", location: "Moore, OK", desc: "480 sq ft concrete patio — broom finish, rebar, proper drainage grade away from structure.", size: "480 sq ft", time: "1 day" },
  { title: "Retaining Wall + Patio", location: "Oklahoma City", desc: "36\" CMU retaining wall with French drain, topped with a 320 sq ft broom finish patio.", size: "48 LF", time: "3 days" },
  { title: "Concrete Sidewalk — City ROW", location: "Edmond, OK", desc: "City right-of-way sidewalk replacement — permitted, 5\" thick, broom finish, ADA curb ramp.", size: "120 LF", time: "1 day" },
  { title: "Garage Floor Reslab", location: "Yukon, OK", desc: "Full tear-out of heaved garage floor. Compacted new base, 4\" smooth finish with saw-cut joints.", size: "576 sq ft", time: "2 days" },
  { title: "RV Pad & Driveway Extension", location: "Norman, OK", desc: "14×40 RV pad with 5\" slab, #4 rebar, connected to existing driveway with expansion joint.", size: "560 sq ft", time: "1 day" },
];

export default function OurProjects() {
  useSEO({
    title: "Our Concrete Projects in Oklahoma City | FDZ Construction LLC",
    description: "Browse completed concrete projects across the OKC metro. Driveways, patios, foundations, commercial pours, and retaining walls by FDZ Construction LLC.",
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">OKC Metro · Real Projects · Real Results</span>
        <h1 className="max-w-[820px] mb-5">Our Concrete Work<br/><span className="text-orange">Across Oklahoma.</span></h1>
        <p className="prose-muted max-w-[680px] mb-8">Real jobs for <strong>Oklahoma City homeowners and businesses</strong> — <Link to="/driveways-oklahoma-city" className="text-orange no-underline">concrete driveways</Link>, <Link to="/patios-oklahoma-city" className="text-orange no-underline">patios</Link>, <Link to="/patios-oklahoma-city" className="text-orange no-underline">stamped concrete</Link>, foundations, and commercial pours.</p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Your Free Estimate →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Featured Projects</div>
          <h2 className="mb-4">Watch Our Work<br/><em className="h2-accent">In Action.</em></h2>
          <p className="prose-muted mb-10">Some of our proudest commercial concrete projects — with video so you can see the quality for yourself.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-darker relative overflow-hidden">
              <video
                className="w-full h-full object-cover min-h-[320px]"
                controls
                preload="none"
                playsInline
                poster="/images/poster-rosedale.webp"
              >
                <source src={SPENCER_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Commercial · Spencer, Oklahoma</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Star Spencer<br/>High School
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                We installed new concrete stairs and <Link to="/sidewalks-oklahoma-city" className="text-orange no-underline">sidewalks with ADA-compliant ramps</Link> at Star Spencer High School. This project required precision grading, proper reinforcement, and compliance with ADA accessibility standards — all completed on schedule for the school district.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">ADA</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Compliant ramps</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Stairs</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">& Sidewalks</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Public</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">School project</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rosedale shop foundation — video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-darker relative overflow-hidden">
              <video
                className="w-full h-full object-cover min-h-[320px]"
                controls
                preload="none"
                playsInline
                poster="/images/poster-rosedale.webp"
              >
                <source src={ROSEDALE_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Commercial · Rosedale, Oklahoma</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                10,000 Sq Ft<br/>Shop Foundation
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                Large-scale <Link to="/foundations-oklahoma-city" className="text-orange no-underline">commercial foundation pour</Link> for a 10,000 sq ft shop in Rosedale, Oklahoma. The project required careful sub-base preparation on Oklahoma's expansive clay soil, a full engineered rebar schedule, and coordinated concrete placement across the full slab footprint in a single pour. Power trowel finish throughout.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">10,000</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Sq ft slab</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Shop</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Foundation</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">1 Pour</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Full footprint</div>
                </div>
              </div>
            </div>
          </div>

          {/* Edmond pier foundation — photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Residential · Edmond, Oklahoma</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Pier Foundation<br/>Thickened Slab
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                <Link to="/foundations-oklahoma-city" className="text-orange no-underline">Pier foundation with thickened slab</Link> in Edmond, Oklahoma — designed for a lot that required fill to level the grade. Rather than pouring on compacted fill, we drilled piers 5 feet deep to reach undisturbed soil, then tied the thickened slab to the pier system. Edmond's mix of sandy and clay-heavy soil makes this kind of site-specific evaluation critical before any foundation pour.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">5 ft</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Pier depth</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Pier</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">+ thickened slab</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Fill</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Lot engineered</div>
                </div>
              </div>
            </div>
            <div className="bg-darker relative overflow-hidden order-first lg:order-last">
              <div className="grid grid-cols-2 h-full min-h-[320px]">
                <img
                  src="/images/projects/pier-foundation-excavation-edmond-oklahoma-1.webp"
                  alt="Excavation and site grading for pier foundation in Edmond, Oklahoma — skid steer and mini excavator working red clay lot with fill"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/projects/pier-foundation-excavation-edmond-oklahoma-2.webp"
                  alt="Site prep and pier layout for thickened slab foundation in Edmond, OK — graded lot on fill dirt before pier drilling"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.webp"
                  alt="Concrete truck on site during pier foundation slab pour in Edmond, Oklahoma — crew finishing fresh slab with power trowel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/projects/pier-foundation-finished-edmond-oklahoma-curing.webp"
                  alt="Finished pier foundation slab curing in Edmond, Oklahoma — thickened slab on pier system, white curing compound applied"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* OKC poured concrete retaining wall */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Residential · Oklahoma City, OK</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Poured Concrete<br/>Retaining Wall
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                Tall <Link to="/retaining-walls-oklahoma-city" className="text-orange no-underline">poured concrete retaining wall</Link> built alongside a new residential construction project in Oklahoma City. Forms stripped to reveal a clean monolithic structure — no block joints to shift or crack over time. Wall was designed for the lateral pressure of OKC's expansive clay soil with proper drainage behind the wall to prevent hydrostatic buildup.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">Poured</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Concrete wall</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Mono</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">lithic structure</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Clay</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Soil engineered</div>
                </div>
              </div>
            </div>
            <div className="bg-darker relative overflow-hidden min-h-[320px]">
              <img
                src="/images/projects/poured-concrete-retaining-wall-oklahoma-city.webp"
                alt="Tall poured concrete retaining wall in Oklahoma City — forms just stripped, monolithic structure supporting new residential construction on expansive clay soil"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Guthrie forklift ramp — photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-darker relative overflow-hidden">
              <div className="grid grid-cols-2 h-full min-h-[320px]" style={{ gridTemplateRows: "1fr 1fr" }}>
                <img
                  src="/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.webp"
                  alt="FDZ Construction power trowel finishing a concrete forklift ramp pour inside a warehouse in Guthrie, Oklahoma"
                  className="w-full h-full object-cover col-span-1"
                  loading="lazy"
                />
                <img
                  src="/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.webp"
                  alt="FDZ Construction crew troweling concrete forklift ramp in Guthrie, OK warehouse — forms and fresh pour visible"
                  className="w-full h-full object-cover col-span-1"
                  loading="lazy"
                />
                <img
                  src="/images/projects/forklift-ramp-finished-guthrie-oklahoma.webp"
                  alt="Finished concrete forklift ramp in Guthrie, Oklahoma — smooth trowel finish, flush transition to existing warehouse floor"
                  className="w-full h-full object-cover col-span-2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center order-first lg:order-last">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Commercial · Guthrie, Oklahoma</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Forklift Ramp<br/>Warehouse Concrete
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                <Link to="/commercial-concrete-oklahoma-city" className="text-orange no-underline">Commercial concrete ramp</Link> built for forklift traffic inside a warehouse in Guthrie, Oklahoma. The ramp required precise slope grading for smooth forklift transitions, a reinforced slab thickness to handle repeated heavy equipment loads, and a power trowel finish flush with the surrounding warehouse floor. Formed and poured in a live warehouse environment with active racking and inventory on site.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">Heavy</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Equipment loads</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Trowel</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Smooth finish</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Live</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Warehouse pour</div>
                </div>
              </div>
            </div>
          </div>

          {/* Piedmont residential foundation — photos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Residential · Piedmont, Oklahoma</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Residential<br/>Foundation Pour
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                Slab-on-grade <Link to="/foundations-oklahoma-city" className="text-orange no-underline">residential foundation</Link> in Piedmont, Oklahoma — compacted aggregate base over Oklahoma red clay, full engineered rebar schedule, and power trowel finish. Piedmont's soil carries the same Permian-age clay and shale base as the rest of the OKC metro, so sub-base prep is critical before any foundation pour.
              </p>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">Rebar</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Engineered schedule</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Trowel</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Finish</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Clay</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Soil prep</div>
                </div>
              </div>
            </div>
            <div className="bg-darker relative overflow-hidden order-1 lg:order-2">
              <div className="grid grid-cols-2 h-full min-h-[320px]">
                <img
                  src="/images/projects/residential-foundation-pour-piedmont-oklahoma.webp"
                  alt="FDZ Construction residential foundation pour in Piedmont, Oklahoma — fresh slab on Oklahoma red clay subgrade with forms visible"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/projects/residential-foundation-crew-piedmont-ok.webp"
                  alt="FDZ Construction crew finishing residential foundation slab in Piedmont, OK — power trowel finish with rebar anchors visible"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">More Projects</div>
          <h2 className="mb-4">Work Across<br/><em className="h2-accent">the OKC Metro.</em></h2>
          <p className="prose-muted mb-8">Every project below was completed by our own crew — no subcontractors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {otherProjects.map((p, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-1">{p.title}</div>
                <div className="text-[0.66rem] text-orange tracking-[0.1em] uppercase font-bold mb-3">{p.location}</div>
                <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4">{p.desc}</p>
                <div className="flex gap-6">
                  <div><div className="font-display text-lg font-black text-orange">{p.size}</div><div className="text-[0.6rem] text-muted-text uppercase tracking-wider">Size</div></div>
                  <div><div className="font-display text-lg font-black text-orange">{p.time}</div><div className="text-[0.6rem] text-muted-text uppercase tracking-wider">Completed in</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Our Concrete Services</div>
          <h2 className="mb-4">Every Concrete Service<br/><em className="h2-accent">OKC Homeowners Need.</em></h2>
          <ServicesFooterGrid />
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
