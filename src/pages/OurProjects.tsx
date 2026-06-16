import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const SPENCER_VIDEO = "https://img1.wsimg.com/blobby/go/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/video/copy_AD0EB7AC-6471-4D2C-9970-C121B31EB011.mp4";
const KIDDIE_VIDEO = "https://img1.wsimg.com/blobby/go/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/video/Kiddie%20academy%20MP4.mp4";

const otherProjects = [
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
          <p className="prose-muted mb-10">Two of our proudest commercial concrete projects — with video so you can see the quality for yourself.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08] mb-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-darker relative overflow-hidden">
              <video
                className="w-full h-full object-cover min-h-[320px]"
                controls
                preload="metadata"
                playsInline
                poster=""
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-2">Commercial · Oklahoma City, OK</div>
              <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-black uppercase leading-[1.05] mb-4">
                Kiddie Academy<br/>Foundation & Parking Lot
              </h3>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-3">
                This commercial concrete project for Kiddie Academy in Oklahoma City included <Link to="/foundations-oklahoma-city" className="text-orange no-underline">foundation work</Link> and <Link to="/commercial-concrete-oklahoma-city" className="text-orange no-underline">parking lot construction</Link> from start to finish. Our team handled site preparation, grading, formwork, reinforcement installation, and concrete placement to ensure a durable, long-lasting structure.
              </p>
              <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light mb-5">
                Proper drainage and slope were carefully planned to prevent water buildup and protect the integrity of the concrete over time.
              </p>
              <div className="text-[0.72rem] text-muted-text mb-5">
                📍 <strong className="text-concrete">3100 NW 150th St, Oklahoma City, OK 73134</strong>
              </div>
              <div className="flex gap-8 pt-4" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div>
                  <div className="font-display text-xl font-black text-orange">Foundation</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Commercial pour</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-orange">Parking</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Lot concrete</div>
                </div>
              </div>
            </div>
            <div className="bg-darker relative overflow-hidden order-1 lg:order-2">
              <video
                className="w-full h-full object-cover min-h-[320px]"
                controls
                preload="metadata"
                playsInline
              >
                <source src={KIDDIE_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
