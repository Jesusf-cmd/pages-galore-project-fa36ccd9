import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
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
  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">OKC Metro · Real Projects · Real Results</span>
        <h1 className="max-w-[820px] mb-5">Our Concrete Work<br/><span className="text-orange">Across Oklahoma.</span></h1>
        <p className="prose-muted max-w-[680px] mb-8">Real jobs for <strong>Oklahoma City homeowners and businesses</strong> — driveways, patios, stamped concrete, foundations, and commercial pours.</p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Get Your Free Estimate →</Link>
          <a href="tel:4052470027" className="btn-outline">📞 (405) 247-0027</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Recent Projects</div>
          <h2 className="mb-4">Work We've Done Across<br/><em className="h2-accent">the OKC Metro.</em></h2>
          <p className="prose-muted mb-8">Every project below was completed by our own crew — no subcontractors.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {projects.map((p, i) => (
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
        <section className="section-padding section-alt">
          <div className="section-eye">Our Concrete Services</div>
          <h2 className="mb-4">Every Concrete Service<br/><em className="h2-accent">OKC Homeowners Need.</em></h2>
          <ServicesFooterGrid />
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
