import { useState } from "react";
import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import { useSEO } from "@/hooks/useSEO";
import { supabase } from "@/integrations/supabase/client";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ServicesFooterGrid from "@/components/ServicesFooterGrid";
import CityGrid from "@/components/CityGrid";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const homeFAQ = [
  { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "In Oklahoma City, a standard concrete driveway typically costs $5,760–$9,600 for a 24×40 ft pour — about $6–$10 per sq ft installed. The concrete cost in Oklahoma City depends on base prep depth, slab thickness, PSI specification, and whether existing pavement needs removal." },
  { question: "What is the cost per square foot for concrete in OKC?", answer: "Concrete in Oklahoma City typically runs $6–$10 per square foot for standard residential slabs and driveways, $9–$14 per sq ft for foundation work, and $15–$22 per sq ft for stamped or decorative finishes." },
  { question: "How thick should a concrete driveway be?", answer: "Most residential concrete driveways in Oklahoma City are poured at 4 inches thick for standard passenger vehicles. If you park heavy trucks, RVs, or trailers, 5–6 inches is recommended." },
  { question: "Do I need rebar or wire mesh in concrete?", answer: "For most residential concrete Oklahoma City projects, rebar is strongly recommended — especially given the area's expansive clay soil. Rebar provides structural tensile strength to resist soil movement." },
  { question: "How long does concrete take to cure?", answer: "Concrete reaches about 70% of its design strength within 7 days and full cure at 28 days. You can typically walk on a fresh pour after 24–48 hours and drive on a residential driveway after 7 days." },
  { question: "How long will a concrete driveway last in Oklahoma?", answer: "A properly installed concrete driveway in Oklahoma should last 30–50 years with minimal maintenance. The key factors are base preparation, adequate thickness, proper reinforcement, and control joints." },
];

export default function Index() {
  useSEO({
    title: "Oklahoma City Concrete Contractors | Free Estimate | MyConcreteEstimate",
    description: "Licensed Oklahoma City concrete contractors. Driveways, patios, slabs, foundations & stamped concrete. Free estimates. Call (405) 247-0027. Powered by Redwood Construction LLC.",
  });

  return (
    <main>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <RecentProjectsSection />
      <GoogleReviewsSection />
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Service areas</div>
          <h2 className="mb-3">We Come To<br/><em className="h2-accent">You.</em></h2>
          <p className="prose-muted mb-6">Redwood Construction LLC serves the greater Oklahoma City metro. Click your city for local info and area-specific services.</p>
          <CityGrid />
          <p className="prose-muted mt-8 text-[0.82rem]">
            <strong className="text-concrete">Why local expertise matters for Oklahoma concrete:</strong> Oklahoma's expansive clay soil is among the most challenging in the country for flatwork. A crew that knows the OKC metro — our frost lines, drainage patterns, and soil behavior — will build you a <Link to="/concrete-slabs" className="text-orange no-underline">slab</Link> or <Link to="/concrete-foundations" className="text-orange no-underline">foundation</Link> that lasts decades. Redwood Construction has seen what happens when contractors cut corners on Oklahoma clay. We don't do it.
          </p>
          <p className="text-[0.78rem] text-muted-text mt-4">
            <strong className="text-concrete">OKC metro zip codes we serve:</strong> 73003, 73012, 73013, 73034 (Edmond) · 73025, 73099 (Yukon/Mustang) · 73069, 73071, 73072 (Norman) · 73160 (Moore) · 73107, 73109, 73112, 73118, 73120, 73127, 73132, 73142, 73159, 73162 (OKC) and surrounding areas.
          </p>
        </section>
      </ScrollReveal>
      <ServiceAreasDetailSection />
      <ScrollReveal>
        <section className="section-padding">
          <FAQ
            items={homeFAQ}
            eyebrow="FAQ"
            title='Common Questions About<br/><em class="h2-accent">Concrete in Oklahoma City.</em>'
            subtitle="Straight answers from a crew that's poured concrete across the OKC metro for years."
          />
        </section>
      </ScrollReveal>
      <FinalCTA />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 px-4 md:px-12 pt-32 pb-16 relative overflow-hidden" style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}>
      <div className="hero-glow" />
      <div className="page-hero" style={{ padding: 0, border: "none" }}>
        <div>
          <span className="eyebrow mb-5 block">OKC Metro · Licensed & Insured · Locally Owned</span>
          <h1 className="mb-6" style={{ fontSize: "clamp(3.2rem, 5.5vw, 6rem)" }}>
            Oklahoma City<br />
            Concrete Contractors<br />
            <span className="text-orange block">Done Right.</span>
          </h1>
          <p className="text-base text-muted-text max-w-[460px] mb-7 leading-[1.78] font-light">
            <Link to="/concrete-driveways" className="text-concrete font-medium no-underline">Driveways</Link>, patios, <Link to="/concrete-slabs" className="text-concrete font-medium no-underline">slabs</Link>, and <Link to="/concrete-foundations" className="text-concrete font-medium no-underline">foundations</Link> built for <strong className="text-concrete font-medium">Oklahoma's clay soil and weather</strong>. Locally owned and operated by Redwood Construction LLC — not a franchise, not a call center.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-8">
            {["Oklahoma City", "Edmond", "Norman", "Mustang", "Moore", "Yukon"].map(city => (
              <span key={city} className="text-[0.66rem] tracking-[0.1em] uppercase py-1 px-3 text-orange font-semibold" style={{ border: "1px solid hsl(var(--orange) / 0.4)", background: "hsl(var(--orange) / 0.05)" }}>
                {city}
              </span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap mb-10">
            <a href="#estimate" className="btn-primary">Get My Free Estimate →</a>
            <a href="tel:4052470027" className="btn-outline">📞 (405) 247-0027</a>
          </div>
          <div className="flex gap-10 pt-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div>
              <div className="font-display text-3xl font-black text-concrete leading-none">500<span className="text-orange">+</span></div>
              <div className="text-[0.66rem] text-muted-text mt-1 tracking-[0.06em] uppercase">OKC metro projects</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-concrete leading-none">4.9<span className="text-orange">★</span></div>
              <div className="text-[0.66rem] text-muted-text mt-1 tracking-[0.06em] uppercase">Google rating</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-concrete leading-none">24<span className="text-orange">hr</span></div>
              <div className="text-[0.66rem] text-muted-text mt-1 tracking-[0.06em] uppercase">Estimate turnaround</div>
            </div>
          </div>
        </div>
      </div>
      <div id="estimate" className="pt-4 lg:pt-0">
        <div className="bg-stone p-5" style={{ border: "1px solid hsl(var(--concrete) / 0.1)", borderBottom: "none" }}>
          <p className="text-[0.78rem] text-muted-text leading-[1.7] font-light">
            The <strong className="text-concrete">concrete cost in Oklahoma City</strong> typically runs <strong className="text-concrete">$6–$10 per sq ft</strong> for a standard driveway or patio slab, and $9–$14 for foundation work. Use the estimator below for an instant price.
          </p>
        </div>
        <EstimateForm />
      </div>
    </section>
  );
}

function EstimateForm() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState("slab");
  const [length, setLength] = useState(20);
  const [width, setWidth] = useState(20);
  const [finish, setFinish] = useState("broom");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const sqft = length * width;
  const getRange = () => {
    let low = 6, high = 10;
    if (projectType === "foundation") { low = 9; high = 14; }
    if (projectType === "wall") { low = 25; high = 45; }
    if (finish === "stamped") { low += 9; high += 12; }
    const totalLow = Math.round(sqft * low);
    const totalHigh = Math.round(sqft * high);
    return { low: totalLow, high: totalHigh, perFtLow: low, perFtHigh: high };
  };

  const range = getRange();

  const types = [
    { id: "slab", name: "Concrete Slab", sub: "Patios, garage floors, slabs" },
    { id: "foundation", name: "Foundation", sub: "Residential & commercial" },
    { id: "sidewalk", name: "Sidewalk", sub: "Walkways and pathways" },
    { id: "wall", name: "Retaining Wall", sub: "Structural walls for slopes" },
  ];

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Please fill in your name, phone, and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const { error: fnError } = await supabase.functions.invoke("submit-estimate", {
        body: {
          name, phone, email, projectType, finishType: finish,
          length, width, sqft,
          estimateLow: range.low, estimateHigh: range.high,
          details,
        },
      });

      if (fnError) throw fnError;
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please call us at (405) 247-0027.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-stone" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
        <div className="bg-orange p-4 flex justify-between items-center">
          <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">Estimate Submitted</span>
        </div>
        <div className="p-6 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h3 className="text-concrete mb-2">Thank You, {name}!</h3>
          <p className="text-muted-text text-sm mb-3">Your estimate request for <strong className="text-concrete">{sqft} sq ft</strong> of {projectType} work (<strong className="text-orange">${range.low.toLocaleString()} – ${range.high.toLocaleString()}</strong>) has been received.</p>
          <p className="text-muted-text text-sm">We'll respond within one business day with a detailed estimate. Or call us now at <a href="tel:4052470027" className="text-orange font-bold no-underline">(405) 247-0027</a>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
      <div className="bg-orange p-4 flex justify-between items-center">
        <span className="font-display text-base font-extrabold tracking-[0.1em] uppercase text-white">Instant Estimate</span>
        <span className="bg-white/20 text-white text-[0.63rem] tracking-[0.1em] uppercase px-2.5 py-1 font-bold">Step {step} of 3</span>
      </div>

      {step === 1 && (
        <div className="p-5">
          <div className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold mb-2.5">Select project type</div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {types.map(t => (
              <button
                key={t.id}
                onClick={() => setProjectType(t.id)}
                className={`text-left p-3 transition-colors cursor-pointer ${projectType === t.id ? "bg-orange/10 border-orange" : "bg-concrete/[0.03] border-concrete/10"}`}
                style={{ border: `1px solid hsl(var(--${projectType === t.id ? "orange" : "concrete"}) / ${projectType === t.id ? "0.5" : "0.1"})` }}
              >
                <div className="font-display text-xs font-extrabold uppercase tracking-[0.04em] text-concrete">{t.name}</div>
                <div className="text-[0.65rem] text-muted-text mt-0.5">{t.sub}</div>
              </button>
            ))}
          </div>
          <button onClick={() => setStep(2)} className="btn-primary w-full text-sm py-3">Next: Enter Dimensions →</button>
        </div>
      )}

      {step === 2 && (
        <div className="p-5">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Length (ft)</label>
              <input type="number" value={length} onChange={e => setLength(+e.target.value)} min={1} className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none transition-colors focus:border-orange" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
            </div>
            <div>
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">
                {projectType === "wall" ? "Height (ft)" : "Width (ft)"}
              </label>
              <input type="number" value={width} onChange={e => setWidth(+e.target.value)} min={1} className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none transition-colors focus:border-orange" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
            </div>
          </div>
          {projectType !== "wall" && (
            <div className="mb-3">
              <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Finish type</label>
              <select value={finish} onChange={e => setFinish(e.target.value)} className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none cursor-pointer" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}>
                <option value="broom" className="bg-stone text-concrete">Broom finish — standard</option>
                <option value="brushed" className="bg-stone text-concrete">Brushed / smooth</option>
                <option value="stamped" className="bg-stone text-concrete">Stamped / decorative</option>
              </select>
            </div>
          )}
          <div className="bg-concrete/[0.03] p-4 mt-4 mb-4" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="text-[0.6rem] tracking-[0.14em] uppercase text-muted-text font-bold mb-2">Estimated Range</div>
            <div className="font-display text-3xl font-black text-orange leading-none">
              ${range.low.toLocaleString()} – ${range.high.toLocaleString()}
            </div>
            <div className="text-[0.7rem] text-muted-text mt-1">{sqft} sq ft · ${range.perFtLow}–${range.perFtHigh}/sq ft installed</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep(1)} className="btn-outline text-sm py-3 flex-1">← Back</button>
            <button onClick={() => setStep(3)} className="btn-primary text-sm py-3 flex-1">Next: Your Info →</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="p-5">
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Your Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Phone</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="(405) 000-0000" className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
          </div>
          <div className="mb-3">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
          </div>
          <div className="mb-4">
            <label className="text-[0.66rem] tracking-[0.1em] uppercase text-muted-text font-semibold block mb-1">Project Details</label>
            <textarea value={details} onChange={e => setDetails(e.target.value)} placeholder="Tell us about your project..." rows={3} className="w-full bg-concrete/[0.05] px-3 py-2.5 text-concrete font-body text-sm outline-none resize-y" style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }} />
          </div>
          {error && (
            <div className="bg-red-900/20 text-red-400 text-sm p-3 mb-4" style={{ border: "1px solid hsl(0 60% 40% / 0.3)" }}>{error}</div>
          )}
          <div className="bg-concrete/[0.03] p-3 mb-4 text-center" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="font-display text-xl font-black text-orange">${range.low.toLocaleString()} – ${range.high.toLocaleString()}</div>
            <div className="text-[0.65rem] text-muted-text">{sqft} sq ft · {projectType}</div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep(2)} className="btn-outline text-sm py-3 flex-1">← Back</button>
            <button onClick={handleSubmit} disabled={submitting} className="btn-primary text-sm py-3 flex-1 disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Submitting..." : "Submit Estimate Request →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function AboutSection() {
  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="max-w-[860px]">
          <div className="section-eye">Concrete Contractors Oklahoma City</div>
          <h2 className="mb-7">Built for Oklahoma.<br/><em className="h2-accent">Built to Last.</em></h2>
          <p className="prose-muted mb-6">
            If you've been searching for <strong>concrete contractors in Oklahoma City</strong>, you already know the problem: most crews will pour and walk away. What separates a <Link to="/concrete-slabs" className="text-orange no-underline">slab</Link> that lasts 30 years from one that cracks in five isn't the mix — it's the prep. Oklahoma's expansive clay soil shifts with every wet season and every drought. It swells, it contracts, and it will push a poorly built slab apart from underneath. At Redwood Construction, every job starts with proper subgrade compaction, the right base depth for your specific lot, and reinforcement that's actually sized for the load — not just the minimum that lets a contractor hand you an invoice. That's what <strong>residential and commercial concrete in Oklahoma</strong> requires if you want it done right the first time.
          </p>
          <p className="prose-muted mb-6">
            For homeowners looking for <strong>concrete driveway contractors in OKC</strong>, the details matter more than most people realize. A driveway isn't just decorative — it takes vehicle weight, temperature swings from 10°F to 105°F, and Oklahoma's freeze-thaw cycles year after year. We use 4,000 PSI mix on most residential driveways, reinforce with rebar or wire mesh depending on the application, and cut proper control joints so cracking happens where it's supposed to — not randomly across your new surface. Same discipline goes into every <Link to="/concrete-slabs" className="text-orange no-underline">concrete slab</Link> and <Link to="/concrete-foundations" className="text-orange no-underline">foundation pour</Link> we do. The process doesn't change because the project is smaller.
          </p>
          <p className="prose-muted mb-8">
            Whether you're a homeowner in Edmond trying to replace a heaved driveway, a property owner in Norman needing a new <Link to="/concrete-slabs" className="text-orange no-underline">patio slab</Link>, or a business in Yukon looking for <strong>concrete slab contractors near you</strong> for a commercial pour — we cover the full OKC metro. Our crews work in <strong>Oklahoma City, Edmond, Norman, Mustang, Moore, and Yukon</strong> on a daily basis. We know the soil conditions zip code to zip code, and we've repaired enough failed work from other contractors to know exactly what not to do. If you want a straight quote from a crew that will show up when they say and pour it the way it's supposed to be poured, use the form above or call us directly. We respond to every estimate request within one business day.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/concrete-driveways" className="btn-primary text-[0.82rem] py-3 px-6">Driveway Contractors →</Link>
            <Link to="/concrete-slabs" className="btn-outline text-[0.82rem] py-3 px-6">Concrete Slabs →</Link>
            <Link to="/concrete-foundations" className="btn-outline text-[0.82rem] py-3 px-6">Foundations →</Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function ServicesSection() {
  const services = [
    { num: "01", name: "Concrete Driveways", desc: "New installs and full replacements. Reinforced for Oklahoma's freeze-thaw cycles and clay soil movement.", to: "/concrete-driveways" },
    { num: "02", name: "Patios & Slabs", desc: "Custom concrete patios with smooth, broom, or stamped finishes. Properly graded for Oklahoma weather.", to: "/concrete-slabs" },
    { num: "03", name: "Stamped Concrete", desc: "Flagstone, brick, or slate patterns at a fraction of the cost. Custom colors and sealed finishes.", to: "/stamped-concrete" },
    { num: "04", name: "Concrete Foundations", desc: "Residential and commercial foundation pours. Site prep, forming, reinforcing to local code.", to: "/concrete-foundations" },
    { num: "05", name: "Sidewalks & Walkways", desc: "New construction and replacement sidewalks with proper base prep and ADA-compliant options.", to: "/concrete-sidewalks" },
    { num: "06", name: "Retaining Walls", desc: "Durable concrete walls for slopes, erosion control — engineered for Oklahoma's heavy clay soil.", to: "/retaining-walls" },
  ];

  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">What we do</div>
        <h2 className="mb-3">Residential &<br/><em className="h2-accent">Commercial Concrete.</em></h2>
        <p className="prose-muted mb-8">From a single driveway to a full commercial parking lot — same crew, same standards, same guarantee.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
          {services.map(s => (
            <div key={s.num} className="bg-darker p-6 group">
              <div className="font-display text-3xl font-black text-orange/30 mb-3">{s.num}</div>
              <div className="font-display text-lg font-extrabold uppercase tracking-[0.04em] mb-2">{s.name}</div>
              <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4">{s.desc}</p>
              <Link to={s.to} className="text-[0.72rem] text-orange font-bold tracking-[0.06em] uppercase no-underline hover:underline">View work →</Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-concrete/[0.08] mt-px" style={{ border: "1px solid hsl(var(--concrete) / 0.08)", borderTop: "none" }}>
          {[
            { tag: "Commercial", name: "Parking Lot Concrete", to: "/parking-lot-concrete" },
            { tag: "Commercial", name: "Curb & Gutter", to: "/curb-and-gutter" },
            { tag: "Res & Commercial", name: "Concrete Repair", to: "/#estimate" },
            { tag: "Not sure?", name: "Get a Free Quote →", to: "/#estimate", highlight: true },
          ].map((c, i) => (
            <Link key={i} to={c.to} className={`p-4 no-underline block transition-colors ${c.highlight ? "bg-orange/[0.08]" : "bg-stone"} hover:bg-orange/[0.06]`} style={c.highlight ? { borderLeft: "3px solid hsl(var(--orange))" } : {}}>
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-1">{c.tag}</div>
              <div className={`font-display text-sm font-extrabold uppercase tracking-[0.04em] ${c.highlight ? "text-orange" : "text-concrete"}`}>{c.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function WhyUsSection() {
  const reasons = [
    { icon: "🏠", title: "Locally owned & operated", desc: "Based in the OKC metro. We know local soil, city codes, and what Oklahoma homeowners need — because we live here too." },
    { icon: "📋", title: "Free on-site estimates", desc: "No ballpark guesses over the phone. We come to your property and give you an accurate price before any work starts." },
    { icon: "🛡", title: "Licensed, bonded & insured", desc: "Fully licensed in Oklahoma with active liability insurance. Your property and investment are protected on every job." },
    { icon: "✅", title: "No surprise pricing — ever", desc: "The price we quote is the price you pay. No change orders, no hidden fees, no upsells once our crew shows up." },
    { icon: "⭐", title: "4.9 Star Google Rating", desc: "Verified reviews from real homeowners across OKC, Edmond, Norman, Mustang, Moore, and Yukon." },
    { icon: "🏆", title: "BBB Accredited Business", desc: "A+ rating with the Better Business Bureau. Verified, ethical, and committed to doing right by every customer." },
    { icon: "🌡", title: "Oklahoma Clay Soil Experts", desc: "Every pour accounts for local soil movement, frost lines, and drainage — because Oklahoma clay is unforgiving." },
    { icon: "⚡", title: "24-Hour Estimate Response", desc: "Submit your project and hear back within one business day. No waiting weeks just to get a quote." },
  ];

  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">Why Redwood Construction</div>
        <h2 className="mb-3">Local Crew.<br/><em className="h2-accent">Real Results.</em></h2>
        <p className="prose-muted mb-8">We're not a national franchise. Redwood Construction LLC is a locally owned OKC business — and we know exactly what Oklahoma soil, weather, and homeowners actually need for <Link to="/concrete-driveways" className="text-orange no-underline">driveways</Link>, <Link to="/concrete-slabs" className="text-orange no-underline">slabs</Link>, and <Link to="/concrete-foundations" className="text-orange no-underline">foundations</Link> that last.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
          {reasons.map((r, i) => (
            <div key={i} className="bg-stone p-6">
              <div className="text-2xl mb-3">{r.icon}</div>
              <h3 className="mb-2 text-sm">{r.title}</h3>
              <p className="text-[0.78rem] text-muted-text leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function RecentProjectsSection() {
  const projects = [
    { title: "Driveway Replacement", location: "Edmond, OK", desc: "Full tear-out and 4\" reinforced pour. Custom expansion joints, broom finish, and sealed surface included.", size: "24×40", time: "2 days", link: "/concrete-driveways", linkText: "See driveway work →" },
    { title: "Stamped Concrete Patio", location: "Norman, OK", desc: "Ashlar slate pattern with custom release color and matte sealer. Covered extension with integrated steps.", size: "580 sq ft", time: "3 days", link: "/stamped-concrete", linkText: "See stamped work →" },
    { title: "Parking Lot — Commercial", location: "Yukon, OK", desc: "Commercial concrete slab pour for a retail strip. Graded for drainage, reinforced for heavy traffic, striped and sealed.", size: "4,200 sq ft", time: "5 days", link: "/parking-lot-concrete", linkText: "See commercial work →" },
  ];

  return (
    <ScrollReveal>
      <section className="section-padding">
        <div className="section-eye">Our work</div>
        <h2 className="mb-3">Recent Projects<br/><em className="h2-accent">Across the Metro.</em></h2>
        <p className="prose-muted mb-8">Real jobs for real Oklahoma homeowners and businesses. Every project — from <Link to="/concrete-driveways" className="text-orange no-underline">concrete driveways</Link> to <Link to="/stamped-concrete" className="text-orange no-underline">stamped patios</Link> — backed by the Redwood Construction guarantee.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
          {projects.map((p, i) => (
            <div key={i} className="bg-darker p-6">
              <div className="font-display text-lg font-extrabold uppercase tracking-[0.04em] text-concrete mb-1">{p.title}</div>
              <div className="text-[0.66rem] tracking-[0.1em] uppercase text-orange font-semibold mb-3">{p.location}</div>
              <p className="text-[0.82rem] text-muted-text leading-relaxed mb-4">{p.desc} <Link to={p.link} className="text-orange no-underline">{p.linkText}</Link></p>
              <div className="flex gap-6">
                <div>
                  <div className="font-display text-xl font-black text-concrete">{p.size}</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Square feet</div>
                </div>
                <div>
                  <div className="font-display text-xl font-black text-concrete">{p.time}</div>
                  <div className="text-[0.6rem] text-muted-text tracking-[0.08em] uppercase">Completed in</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/our-projects" className="btn-outline text-sm py-3 px-8">View All Projects →</Link>
        </div>
      </section>
    </ScrollReveal>
  );
}

function GoogleReviewsSection() {
  const reviews = [
    { initials: "JM", name: "James M.", location: "Edmond, OK", text: "Best concrete crew we've ever used. Fair quote, showed up on time, and the driveway looks incredible. Already sent three neighbors their way.", ago: "2 months ago", project: "Concrete Driveway" },
    { initials: "TR", name: "Tamara R.", location: "Norman, OK", text: "Our stamped patio came out better than we hoped. They took time to explain every option and the result is absolutely stunning. Would hire again.", ago: "3 months ago", project: "Stamped Patio" },
    { initials: "DL", name: "Derek L.", location: "Mustang, OK", text: "Professional start to finish. Caught a drainage issue I didn't know I had and fixed it in the same pour. Cannot recommend enough.", ago: "1 month ago", project: "Driveway & Drainage" },
    { initials: "KS", name: "Karen S.", location: "Yukon, OK", text: "Got three quotes and Redwood was in the middle on price but clearly the most knowledgeable. The slab they poured is perfect — no cracks after two winters.", ago: "5 months ago", project: "Concrete Slab" },
    { initials: "RB", name: "Robert B.", location: "Oklahoma City, OK", text: "Used them for a new garage slab and a back patio. Both jobs done clean, on schedule, and the price matched the quote exactly. Zero complaints.", ago: "4 months ago", project: "Garage Slab & Patio" },
    { initials: "MH", name: "Mark H.", location: "Moore, OK", text: "Had a foundation issue that two other contractors couldn't figure out. Redwood diagnosed it correctly the first time and fixed it properly. Highly recommend.", ago: "6 months ago", project: "Foundation Repair" },
  ];

  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">Google Reviews</div>
        <h2 className="mb-3">What Oklahoma<br/><em className="h2-accent">Homeowners Say.</em></h2>
        <div className="flex items-center gap-6 mb-8">
          <a href="https://www.google.com/search?q=Redwood+Construction+LLC+Oklahoma+City+reviews" target="_blank" rel="noopener noreferrer" className="text-orange no-underline text-[0.78rem] font-medium">View all on Google →</a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Rating summary */}
          <div className="bg-darker p-6" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="font-display text-5xl font-black text-concrete leading-none mb-1">4.9</div>
            <div className="text-orange text-lg mb-1">★★★★★</div>
            <div className="text-[0.7rem] text-muted-text tracking-[0.06em] uppercase mb-4">80+ Google reviews</div>
            <div className="space-y-1.5">
              {[
                { stars: 5, pct: 91 },
                { stars: 4, pct: 7 },
                { stars: 3, pct: 2 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 },
              ].map(r => (
                <div key={r.stars} className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-muted-text w-6">{r.stars} ★</span>
                  <div className="flex-1 h-1.5 bg-concrete/[0.08] overflow-hidden">
                    <div className="h-full bg-orange transition-all" style={{ width: `${r.pct}%` }} />
                  </div>
                  <span className="text-[0.65rem] text-muted-text w-8 text-right">{r.pct}%</span>
                </div>
              ))}
            </div>
            <a href="https://g.page/r/redwood-construction-okc/review" target="_blank" rel="noopener noreferrer" className="btn-outline text-[0.72rem] w-full text-center mt-4 py-2">Leave a Review →</a>
            <div className="text-[0.6rem] text-muted-text text-center mt-1">Takes less than 60 seconds</div>
          </div>
          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {reviews.map((r, i) => (
              <div key={i} className="bg-stone p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-orange/10 flex items-center justify-center font-display text-xs font-extrabold text-orange">{r.initials}</div>
                  <div>
                    <div className="font-display text-sm font-bold text-concrete">{r.name}</div>
                    <div className="text-[0.62rem] text-muted-text">{r.location}</div>
                  </div>
                </div>
                <div className="text-orange text-xs mb-2">★★★★★</div>
                <p className="text-[0.78rem] text-muted-text leading-relaxed mb-2">"{r.text}"</p>
                <div className="text-[0.6rem] text-muted-text">{r.ago} · {r.project}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

function ServiceAreasDetailSection() {
  return (
    <ScrollReveal>
      <section className="section-padding section-alt">
        <div className="section-eye">Service Areas</div>
        <h2 className="mb-4">Concrete Services in<br/><em className="h2-accent">Oklahoma City Metro.</em></h2>
        <p className="prose-muted mb-6">
          Redwood Construction LLC provides full-service residential and commercial concrete work across the greater OKC metro. Our <Link to="/oklahoma-city-concrete" className="text-orange no-underline">Oklahoma City concrete contractors</Link> handle everything from driveway replacements in established neighborhoods to commercial slab pours in new developments — with the same crew, same standards, every time. In the north metro, our <Link to="/edmond-concrete" className="text-orange no-underline">Edmond concrete contractors</Link> work across all of Oklahoma County, serving both new construction and older properties where Oklahoma clay has done its damage over the years. South of OKC, our <Link to="/norman-ok-concrete" className="text-orange no-underline">Norman concrete contractors</Link> serve Cleveland County homeowners and businesses with driveways, patios, slabs, and foundations built for the area's specific soil and drainage conditions. To the west, our <Link to="/yukon-oklahoma-concrete" className="text-orange no-underline">Yukon concrete contractors</Link> and <Link to="/mustang-oklahoma-concrete" className="text-orange no-underline">Mustang concrete contractors</Link> cover Canadian County — one of the fastest-growing parts of the metro and an area where proper base prep and reinforcement are non-negotiable on expanding soil. We also serve <Link to="/moore-oklahoma-concrete" className="text-orange no-underline">Moore</Link> across Cleveland County, including repair and replacement work in neighborhoods that took storm damage over the years. No matter which part of the metro your project is in, you're getting the same process: proper subgrade, correct mix design, adequate reinforcement, and a crew that stands behind what they pour.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
          {[
            { county: "Oklahoma County", city: "Oklahoma City", to: "/oklahoma-city-concrete" },
            { county: "Oklahoma County", city: "Edmond", to: "/edmond-concrete" },
            { county: "Cleveland County", city: "Norman", to: "/norman-ok-concrete" },
            { county: "Canadian County", city: "Yukon", to: "/yukon-oklahoma-concrete" },
            { county: "Canadian County", city: "Mustang", to: "/mustang-oklahoma-concrete" },
            { county: "Cleveland County", city: "Moore", to: "/moore-oklahoma-concrete" },
          ].map((a, i) => (
            <Link key={i} to={a.to} className="bg-stone p-4 no-underline block hover:bg-orange/[0.04] transition-colors">
              <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-1">{a.county}</div>
              <div className="font-display text-sm font-extrabold uppercase tracking-[0.04em] text-concrete">{a.city} →</div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
