import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const faqItems = [
  {
    question: "How much does a concrete pool deck cost in Oklahoma City?",
    answer:
      "In Oklahoma City, concrete pool deck pricing typically runs $6–$10 per sq ft for a standard broom finish, $10–$18 for stamped concrete, and $8–$14 for stained or decorative finishes. For most residential pools, total project cost falls between $4,000 and $18,000 depending on square footage, the existing condition of the site, and the finish complexity. Exposed aggregate runs $8–$13 per sq ft, and resurfacing an existing deck costs $5–$12 per sq ft. These ranges reflect OKC market pricing — not national averages. The only way to get an accurate number is with an on-site look, which we provide free and without pressure.",
  },
  {
    question: "What is the best pool deck material for Oklahoma's heat?",
    answer:
      "Concrete is the best choice for Oklahoma homeowners, provided it's finished correctly. Bare dark concrete or dark pavers can reach 140°F+ on a 100-degree OKC day — uncomfortable and genuinely dangerous for kids. Light-colored concrete with a heat-reflective sealer keeps surface temps 20–35°F cooler than untreated dark surfaces. Stamped concrete in lighter tones — travertine-look, light slate, buff flagstone — combines aesthetics with comfort. Wood decking warps, splinters, and rots in Oklahoma's summer heat and wet springs. Natural stone looks great but shifts on OKC's expansive clay. Properly installed and sealed concrete lasts 25–40+ years with minimal maintenance.",
  },
  {
    question: "Is a stamped concrete pool deck slippery when wet?",
    answer:
      "This is the most common concern we hear, and the short answer is: not when it's done right. Stamped patterns inherently create texture — the recesses and edges of slate, cobblestone, or flagstone patterns give wet feet something to grip. More importantly, we finish all pool deck work with a non-slip sealer specifically rated for wet pool environments. A smooth, unsealed stamped deck CAN be slippery, which is why the sealer spec matters as much as the pattern. We don't use standard driveway sealers on pool decks — the chemistry is different and the non-slip additive concentration is higher. If you've heard horror stories about slippery stamped concrete, they usually trace back to a contractor using the wrong sealer.",
  },
  {
    question: "How long does a concrete pool deck last in Oklahoma City?",
    answer:
      "A properly installed concrete pool deck in Oklahoma should last 25–40+ years. The two biggest variables are base preparation and ongoing sealer maintenance. Oklahoma's expansive clay soil is the main threat — a deck poured on an uncompacted or improperly graded base will crack within 5–10 years as the clay moves seasonally. When we build right — compacted gravel base, rebar reinforcement, control joints placed to direct any cracking, slope graded away from the pool — the slab won't move. Resealing every 2–3 years in OKC's climate protects against freeze-thaw damage and pool chemical degradation. That maintenance is the owner's responsibility and takes about half a day every few years.",
  },
  {
    question: "Can you resurface my existing pool deck instead of replacing it?",
    answer:
      "Yes, if the existing slab is structurally sound. Resurfacing involves applying a bonded concrete overlay — typically 3/8\" to 1/2\" thick — over the cleaned and prepped existing slab, then stamping, staining, or texturing the overlay to your chosen finish. It costs significantly less than a full tear-out and replacement, and the results are indistinguishable from a new pour. The key requirement is that the existing concrete must be solid — no active heaving, major structural cracks, or delamination. We evaluate the slab before recommending resurfacing vs. replacement. If the base has failed and the slab is moving, resurfacing will crack within a year and you'd have paid for two projects instead of one.",
  },
  {
    question: "Do I need a permit to install a pool deck in Oklahoma City?",
    answer:
      "Permit requirements vary by city, scope of work, and whether the pool itself is permitted. In Oklahoma City and most OKC-area municipalities, a new pool deck installation around an existing pool typically does not require a separate permit — but this varies by jurisdiction and square footage. If the pool is new construction, the deck is usually included under the pool permit. We confirm permit requirements for every project before work begins. If a permit is needed, we can advise on the process — we won't start work that requires a permit without confirming compliance first.",
  },
  {
    question: "How long does pool deck installation take?",
    answer:
      "Most residential pool deck installations take 2–4 days from pour to sealing, not counting the estimate and scheduling phase. Day one is typically site prep, forming, and pour. Finishing and stamping happen the same day while the concrete is still workable. The slab needs 24–48 hours before foot traffic, and we return to apply sealer after the concrete has cured sufficiently — usually 3–5 days after the pour depending on weather. The full timeline, including lead time to schedule, is discussed at your estimate appointment. Oklahoma summers mean we sometimes schedule early morning pours to avoid peak heat.",
  },
  {
    question: "How often should I seal my concrete pool deck in OKC?",
    answer:
      "Every 2–3 years is our standard recommendation for OKC pool decks — more frequently than non-pool concrete. Pool chemicals (chlorine, algaecides, pH adjusters) degrade sealer chemistry faster than weather alone. Oklahoma's UV intensity is also among the highest in the region — the same sun that fades your patio furniture is breaking down the sealer protecting your deck. Signs it's time to reseal: water no longer beads on the surface, the color looks faded or chalky, or the surface feels rough where it used to feel smooth. Resealing is a straightforward maintenance task — clean the surface, let it dry fully, and apply the appropriate pool-rated sealer.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Free On-Site Estimate & Design Consultation",
    body: "We visit your property, evaluate existing conditions, discuss finish options — stamped patterns, stain colors, aggregate types — and give you a written, no-pressure estimate. We measure the actual deck area, not a guess from satellite.",
  },
  {
    n: "02",
    title: "Site Preparation & Excavation",
    body: "We excavate to the correct depth, grade for drainage away from the pool and your home's foundation, and remove any old concrete if needed. Proper slope is non-negotiable — water that sits against your pool's bond beam or your home's foundation creates problems that show up years later.",
  },
  {
    n: "03",
    title: "Sub-Base Compaction",
    body: "We lay and compact a gravel sub-base. On OKC's expansive clay, this step is what separates a deck that lasts 30 years from one that cracks in 3. Clay moves — the base controls how much of that movement reaches the slab.",
  },
  {
    n: "04",
    title: "Forming & Reinforcement",
    body: "We set forms to the correct slope and place rebar or fiber mesh reinforcement per your site's soil and load conditions. Pool decks carry foot traffic — not vehicles — but the soil movement in Oklahoma still demands proper reinforcement.",
  },
  {
    n: "05",
    title: "Concrete Pour",
    body: "We pour a quality mix and work efficiently across the full deck to maintain consistency. On large decks, we coordinate the pour to minimize cold joints. Oklahoma summer pours are scheduled early morning to work in manageable temperatures.",
  },
  {
    n: "06",
    title: "Finishing & Stamping",
    body: "While the concrete is still workable, we apply your chosen finish: broom texture, stamp patterns (flagstone, slate, cobblestone, travertine-look), or smooth base for staining. Timing matters — too early and the stamp sinks, too late and it doesn't register.",
  },
  {
    n: "07",
    title: "Coloring",
    body: "Color hardener or acid stain is applied for depth, UV resistance, and the tonal variation that makes decorative concrete look like natural material. Color hardener goes in before stamping; acid stain goes after cure.",
  },
  {
    n: "08",
    title: "Curing, Sealing & Cleanup",
    body: "After proper cure time, we apply a pool-rated non-slip sealer. We leave your property clean. You'll get guidance on when the deck is ready for foot traffic, furniture, and pool chemical splash.",
  },
];

const services = [
  {
    title: "New Concrete Pool Deck Installation",
    body: "We handle full new installs for in-ground pools across the OKC metro. Every install starts with proper sub-base compaction on Oklahoma's expansive clay — the step most contractors rush and most homeowners don't know to ask about. We reinforce with rebar or fiber mesh and build to the slope, shape, and finish you specify. As your pool deck contractor in Oklahoma City, we size the project to your pool, your yard, and your budget.",
  },
  {
    title: "Stamped Concrete Pool Decks",
    body: "The most popular decorative option we install. Patterns include flagstone, slate, cobblestone, brick, and travertine-look — applied while the concrete is wet, not as a surface overlay. The texture from stamping also provides built-in traction, which matters around a pool. A stamped pool deck in Oklahoma City gives you the look of natural stone at a fraction of the material and labor cost. We use color hardener and release agents to create depth and variation, not flat uniform color.",
  },
  {
    title: "Decorative & Stained Concrete Pool Decks",
    body: "Acid stain, water-based stain, and color hardener each produce different results. Acid stain reacts chemically with the concrete to create variegated earth tones — no two decks look alike, which is the point. Water-based stain gives more predictable, consistent color with a wider palette. Color hardener is worked into the surface during the pour for maximum UV resistance. These can be combined with stamped patterns for a layered, natural-looking finish. Decorative concrete around your pool doesn't have to look like a decorative product — done well, it looks like it grew there.",
  },
  {
    title: "Broom Finish & Exposed Aggregate Pool Decks",
    body: "The most economical slip-resistant options. Broom finish is the classic brushed texture — excellent traction, clean appearance, long-proven durability. Exposed aggregate uses pea gravel or decorative stone embedded in the surface, creating a highly textured, durable finish that hides footprints and dirt between cleanings. Both are practical choices for families with kids who will be running around the pool.",
  },
  {
    title: "Pool Deck Resurfacing & Repair",
    body: "For existing decks that are cracked, faded, or peeling — if the slab is structurally sound, resurfacing saves significant cost vs. full replacement. We apply a bonded concrete overlay, then stamp, stain, or texture to your specification. Pool deck repair also covers individual crack repair, control joint re-routing, and re-sealing on decks that have dried out. Pool deck resurfacing in Oklahoma City is often the right move when the base is solid and only the surface has failed.",
  },
  {
    title: "Slip-Resistant Coatings & Sealing",
    body: "We finish all pool deck work with non-slip sealers rated for pool chemical exposure — not standard driveway sealer. The non-slip additive concentration is higher, and the formulas are UV-resistant to handle Oklahoma sun without yellowing or breaking down within one season. For existing decks that need new sealer, we can clean, prep, and re-seal without a full resurface. OKC pool decks should be resealed every 2–3 years given the combination of pool chemistry and Oklahoma UV.",
  },
];

export default function PoolDeckOklahomaCity() {
  useSEO({
    title: "Pool Deck Contractor Oklahoma City | FDZ Construction LLC",
    description:
      "Oklahoma City's trusted pool deck contractor. Stamped, decorative & slip-resistant concrete pool decks. Licensed & insured. Free estimates — (405) 458-4805.",
    canonical: "https://fdzconstruction.com/pool-deck-oklahoma-city",
    og: {
      title: "Pool Deck Contractor Oklahoma City | FDZ Construction LLC",
      description:
        "Stamped, decorative & slip-resistant concrete pool decks in Oklahoma City. Licensed & insured. Free estimates.",
      type: "website",
      url: "https://fdzconstruction.com/pool-deck-oklahoma-city",
    },
  });

  return (
    <main>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">Pool Deck Contractor · Oklahoma City · Licensed & Insured</span>
        <h1 className="max-w-[820px] mb-5">
          Concrete Pool Deck Contractor<br />
          <span className="text-orange">in Oklahoma City, OK.</span>
        </h1>
        <p className="prose-muted max-w-[680px] mb-4">
          The right pool deck finish isn't just about looks — in Oklahoma, it's about staying safe when wet and staying cool when it's 105°F outside. FDZ Construction LLC installs and resurfaces concrete pool decks across the OKC metro: stamped, decorative, broom finish, and exposed aggregate. Every install is engineered for Oklahoma's expansive clay soil and sealed for pool chemical resistance.
        </p>
        <p className="prose-muted max-w-[680px] mb-8">
          Call <a href="tel:4054584805" className="text-orange no-underline font-semibold">(405) 458-4805</a> for a free on-site estimate. Licensed, bonded, and insured in Oklahoma.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="tel:4054584805" className="btn-primary">📞 (405) 458-4805 — Free Estimate</a>
          <Link to="/our-projects" className="btn-outline">See Our Work →</Link>
        </div>
      </section>

      <TrustBar />

      {/* ── INTRO / PROBLEM-FIRST ── */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Why It Matters</div>
          <h2 className="mb-4">
            The Wrong Pool Deck Finish<br />
            <em className="h2-accent">Is a Real Safety Problem.</em>
          </h2>
          <div className="max-w-[760px]">
            <p className="prose-muted mb-4">
              <strong className="text-concrete">Oklahoma hits 100°F+ for weeks at a time.</strong> Dark concrete or unsealed pavers in direct OKC sun can reach 140–150°F at the surface — hot enough to burn bare feet in seconds. And a pool deck that's smooth, faded, or sealed with the wrong product becomes a slip hazard the moment water hits it.
            </p>
            <p className="prose-muted mb-4">
              As a pool deck contractor in Oklahoma City, we build for this climate specifically. Light-colored finishes. Non-slip sealers rated for pool chemical exposure. Sub-base preparation that accounts for OKC's expansive clay soil — because a deck that's poured on unstabilized clay will crack and heave within a few years, no matter how good the surface looks on day one.
            </p>
            <p className="prose-muted mb-6">
              Whether you're installing a new pool deck, replacing a cracked one, or resurfacing faded concrete with stamped decorative concrete, we do the whole job — base prep, pour, finish, and sealing — with one crew, no subcontractors. From our shop at 7004 S Indiana Ave, we serve Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, and the rest of the OKC metro.
            </p>
            <a href="tel:4054584805" className="btn-primary">Call (405) 458-4805 for a Free Estimate</a>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHY CONCRETE ── */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Material Selection</div>
          <h2 className="mb-4">
            Why Concrete Beats Pavers, Wood & Tile<br />
            <em className="h2-accent">For Oklahoma Pool Decks.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px]">
            {[
              {
                title: "Oklahoma heat doesn't warp it",
                body: "Wood decking buckles, splinters, and rots in Oklahoma summers. Composite fades and warps. Concrete holds its shape and structure through 100°F+ summers and wet Oklahoma springs — for decades.",
              },
              {
                title: "Stays cooler with the right finish",
                body: "Light-colored concrete finished with a heat-reflective sealer stays 20–35°F cooler underfoot than dark, unsealed surfaces. On a 100°F day, that difference is the difference between usable and unusable. Decorative concrete around the pool doesn't have to be dark — we have light travertine-look, buff, and gray options.",
              },
              {
                title: "Slip-resistant textures for wet areas",
                body: "Stamped patterns, broom finish, and exposed aggregate all provide traction that smooth pavers or unsealed tile can't match. We use non-slip sealers rated for wet pool environments — not standard driveway sealer.",
              },
              {
                title: "Built for freeze-thaw cycles",
                body: "OKC winters are mild but not without freeze-thaw cycles. A properly sealed concrete pool deck handles this without spalling or surface damage. Pavers on expansive clay shift and sink after a few cycles. Properly seated concrete doesn't move.",
              },
              {
                title: "Clay soil performance",
                body: "OKC's clay swells when wet and shrinks in drought. Pavers on clay shift constantly — individual units sink, tilt, and create trip hazards. A reinforced concrete slab on a compacted gravel base distributes load across the whole deck, not through individual paver contacts.",
              },
              {
                title: "Customizable without the cost of stone",
                body: "A stamped pool deck in Oklahoma City gives you the look of flagstone or travertine at a fraction of the material cost. Acid stain and color hardener create color variation and depth that looks far more expensive than it is. For <Link>stamped concrete patios</Link> and pool decks, concrete is the highest-value decorative surface available.",
              },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: "2px solid hsl(var(--orange) / 0.4)", paddingLeft: "1.25rem" }}>
                <div className="font-display font-extrabold uppercase tracking-[0.04em] text-concrete mb-1">{item.title}</div>
                <p className="text-[0.88rem] text-muted-text leading-[1.8] font-light">
                  {i === 5 ? (
                    <>
                      A stamped pool deck in Oklahoma City gives you the look of flagstone or travertine at a fraction of the material cost. Acid stain and color hardener create color variation and depth that looks far more expensive than it is. For{" "}
                      <Link to="/patios-oklahoma-city" className="text-orange no-underline">stamped concrete patios</Link>{" "}
                      and pool decks, concrete is the highest-value decorative surface available.
                    </>
                  ) : item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── SERVICES ── */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Services</div>
          <h2 className="mb-4">
            Pool Deck Services We Offer<br />
            <em className="h2-accent">in Oklahoma City.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {services.map((s, i) => (
              <div key={i} className="bg-stone p-6 md:p-8">
                <div className="text-orange font-display font-extrabold uppercase tracking-[0.04em] text-[0.72rem] mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-extrabold uppercase tracking-[0.03em] text-concrete text-base mb-3">{s.title}</h3>
                <p className="text-[0.86rem] text-muted-text leading-[1.8] font-light">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── PRICING TABLE ── */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Pricing</div>
          <h2 className="mb-4">
            Pool Deck Cost in<br />
            <em className="h2-accent">Oklahoma City.</em>
          </h2>
          <p className="prose-muted max-w-[680px] mb-8">
            These are real OKC market ranges — not national averages. Final pricing depends on square footage, site conditions, and finish selected. Every project gets a free on-site estimate with a written number before any work begins.
          </p>
          <div className="overflow-x-auto max-w-[800px]">
            <table className="w-full text-[0.86rem]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "hsl(var(--stone))", borderBottom: "2px solid hsl(var(--orange) / 0.4)" }}>
                  <th className="text-left font-display font-extrabold uppercase tracking-[0.06em] text-concrete p-3 md:p-4">Service</th>
                  <th className="text-left font-display font-extrabold uppercase tracking-[0.06em] text-concrete p-3 md:p-4">Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Standard Broom Finish Pool Deck", "$6 – $10 per sq ft"],
                  ["Stamped Concrete Pool Deck", "$10 – $18 per sq ft"],
                  ["Stained / Decorative Concrete Pool Deck", "$8 – $14 per sq ft"],
                  ["Exposed Aggregate Pool Deck", "$8 – $13 per sq ft"],
                  ["Slip-Resistant Coating / Sealing", "$2 – $5 per sq ft"],
                  ["Pool Deck Resurfacing", "$5 – $12 per sq ft"],
                  ["Pool Deck Crack Repair", "$300 – $800 (typical)"],
                ].map(([service, cost], i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "hsl(var(--darker))" : "hsl(var(--stone))",
                      borderBottom: "1px solid hsl(var(--concrete) / 0.08)",
                    }}
                  >
                    <td className="text-muted-text p-3 md:p-4">{service}</td>
                    <td className="text-orange font-semibold p-3 md:p-4 whitespace-nowrap">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="prose-muted max-w-[680px] mt-6">
            For most residential pools in the OKC metro, a new broom-finish deck runs $4,000–$9,000 total. Stamped or stained work on the same footprint typically runs $8,000–$18,000 depending on size and complexity. We provide a free no-pressure estimate on-site — call{" "}
            <a href="tel:4054584805" className="text-orange no-underline font-semibold">(405) 458-4805</a>{" "}
            to schedule.
          </p>
        </section>
      </ScrollReveal>

      {/* ── OKC CLIMATE ── */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Local Expertise</div>
          <h2 className="mb-4">
            What Oklahoma Weather Does<br />
            <em className="h2-accent">to Pool Decks.</em>
          </h2>
          <div className="max-w-[760px]">
            <p className="prose-muted mb-4">
              <strong className="text-concrete">Summer.</strong> Oklahoma City regularly hits 100–110°F in July and August. Dark concrete or untreated stone surfaces in direct sun reach 140–150°F — that's burn-your-feet territory within seconds of stepping out barefoot. Light-colored concrete finishes in cream, buff, or light gray reflect significantly more heat. Combined with a heat-reflective sealer, you can cut surface temperature by 20–35°F compared to an untreated dark surface. That's the difference between a deck the family uses all summer and one nobody wants to cross.
            </p>
            <p className="prose-muted mb-4">
              <strong className="text-concrete">Soil movement.</strong> OKC sits on some of the most expansive clay in the country. That clay swells when it absorbs rainfall and shrinks back in drought — moving up and down seasonally, every year, indefinitely. A concrete pool deck poured directly on uncompacted clay or without adequate base depth will crack and heave within a few years. Our approach as your pool deck contractor in Oklahoma City: excavate to depth, compact a gravel sub-base, place rebar reinforcement, and cut control joints to direct any movement to the joints — not across the slab.
            </p>
            <p className="prose-muted mb-4">
              <strong className="text-concrete">Pool chemicals.</strong> Chlorine, pH adjusters, and algaecides break down sealers faster than weather alone. A concrete pool deck in OKC needs a sealer rated specifically for pool chemical exposure — not a standard driveway or patio sealer. We use penetrating and film-forming sealers selected for pool environments, and we recommend resealing every 2–3 years.
            </p>
            <p className="prose-muted">
              <strong className="text-concrete">Winter freeze-thaw.</strong> OKC winters are mild but not freeze-free. Surface water that gets into an unsealed or improperly sealed concrete pool deck freezes, expands, and damages the surface — spalling and surface pop-outs that look cosmetic but allow water infiltration to accelerate. A quality penetrating sealer prevents this. On a concrete pool deck in OKC, sealing isn't optional maintenance — it's what keeps a 30-year slab from looking like a 10-year slab by year 15.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ── INSTALLATION PROCESS ── */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">How It Works</div>
          <h2 className="mb-4">
            Our Pool Deck<br />
            <em className="h2-accent">Installation Process.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {processSteps.map((step) => (
              <div key={step.n} className="bg-stone p-6 md:p-8 flex gap-4">
                <div className="font-display text-3xl font-black text-orange/30 leading-none shrink-0 mt-1">{step.n}</div>
                <div>
                  <h3 className="font-display font-extrabold uppercase tracking-[0.03em] text-concrete text-[0.9rem] mb-2">{step.title}</h3>
                  <p className="text-[0.85rem] text-muted-text leading-[1.8] font-light">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── MATERIAL COMPARISON ── */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Material Comparison</div>
          <h2 className="mb-4">
            Concrete vs. Other Pool Deck<br />
            <em className="h2-accent">Materials.</em>
          </h2>
          <p className="prose-muted max-w-[680px] mb-8">
            Every pool deck material has trade-offs. Here's how they compare for Oklahoma homeowners — specifically for OKC's heat, clay soil, and pool chemical environment.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-[0.82rem]" style={{ borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr style={{ background: "hsl(var(--stone))", borderBottom: "2px solid hsl(var(--orange) / 0.4)" }}>
                  {["", "Concrete", "Pavers", "Natural Stone", "Wood / Composite"].map((h, i) => (
                    <th
                      key={i}
                      className={`p-3 font-display font-extrabold uppercase tracking-[0.05em] text-[0.72rem] ${i === 1 ? "text-orange" : "text-concrete"} ${i === 0 ? "text-left" : "text-center"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cost", "Moderate", "Moderate–High", "High", "High"],
                  ["Durability in OKC Heat", "Excellent", "Good", "Excellent", "Poor–Fair"],
                  ["Slip Resistance", "Excellent (textured)", "Good", "Fair", "Good"],
                  ["Performance on Clay Soil", "Excellent (with proper base)", "Poor (shifts & settles)", "Fair", "Poor"],
                  ["Maintenance", "Low", "Moderate", "Moderate", "High"],
                  ["Customization", "Very High", "Moderate", "Low", "Low"],
                  ["Pool Chemical Resistance", "Excellent (when sealed)", "Good", "Good", "Poor"],
                  ["Lifespan", "25–40+ years", "10–20 years", "25–40 years", "8–15 years"],
                ].map(([label, ...vals], ri) => (
                  <tr
                    key={ri}
                    style={{
                      background: ri % 2 === 0 ? "hsl(var(--darker))" : "hsl(var(--stone))",
                      borderBottom: "1px solid hsl(var(--concrete) / 0.08)",
                    }}
                  >
                    <td className="p-3 font-semibold text-concrete">{label}</td>
                    {vals.map((v, vi) => (
                      <td
                        key={vi}
                        className={`p-3 text-center ${vi === 0 ? "text-orange font-semibold" : "text-muted-text"}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FAQ ── */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ
            items={faqItems}
            eyebrow="Pool Deck FAQ"
            title='Common Questions About<br/><em class="h2-accent">Pool Decks in Oklahoma City.</em>'
            subtitle="Honest answers from a crew that builds pool decks on OKC clay — not a call center."
          />
        </section>
      </ScrollReveal>

      {/* ── SERVICE AREA ── */}
      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Service Area</div>
          <h2 className="mb-4">
            Pool Deck Installations<br />
            <em className="h2-accent">Across the OKC Metro.</em>
          </h2>
          <p className="prose-muted max-w-[720px] mb-6">
            FDZ Construction installs and resurfaces pool decks throughout the Oklahoma City metro. We run one crew — no subcontractors — so the same team that gives your estimate does the work. Below is where we operate regularly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[720px]">
            {[
              { city: "Oklahoma City", note: "Our home base at 7004 S Indiana Ave. We work OKC neighborhoods from Nichols Hills to south OKC regularly." },
              { city: "Edmond", note: "About 25–30 minutes north. We install pool decks in Edmond regularly — Edmond's newer construction often means pool decks on fill lots that need extra base attention." },
              { city: "Norman", note: "Norman pool deck work is a consistent part of our schedule. The University of Oklahoma area through east Norman keeps us busy." },
              { city: "Moore", note: "Moore homeowners rebuilding or improving outdoor living areas make up a solid part of our residential work." },
              { city: "Yukon", note: "Growing neighborhoods in Yukon often come with newer pools that need quality deck work to match." },
              { city: "Mustang", note: "Mustang's residential growth means new construction pool decks are common — we work with builders and direct homeowners alike." },
              { city: "Midwest City", note: "Midwest City and Del City are close to our OKC base and fully within our regular service area." },
              { city: "Del City", note: "Del City pool deck projects are handled the same as any OKC job — same crew, same standards, same warranty." },
            ].map(({ city, note }) => (
              <div key={city} className="bg-stone p-5" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
                <div className="font-display font-extrabold uppercase tracking-[0.04em] text-orange text-[0.82rem] mb-1">{city}</div>
                <p className="text-[0.82rem] text-muted-text leading-[1.7] font-light">{note}</p>
              </div>
            ))}
          </div>
          <p className="prose-muted mt-6 text-[0.82rem] max-w-[680px]">
            Not on the list? Call us. If you're within reasonable distance of Oklahoma City, we likely serve your area. We also handle{" "}
            <Link to="/driveways-oklahoma-city" className="text-orange no-underline">concrete driveways</Link>,{" "}
            <Link to="/patios-oklahoma-city" className="text-orange no-underline">stamped concrete patios</Link>,{" "}
            <Link to="/foundations-oklahoma-city" className="text-orange no-underline">foundations</Link>, and{" "}
            <Link to="/commercial-concrete-oklahoma-city" className="text-orange no-underline">commercial concrete</Link>{" "}
            throughout the same area.
          </p>
        </section>
      </ScrollReveal>

      {/* ── CLOSING CTA ── */}
      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="max-w-[680px]">
            <div className="section-eye">Get Started</div>
            <h2 className="mb-4">
              Ready to Build Your<br />
              <em className="h2-accent">Pool Deck?</em>
            </h2>
            <p className="prose-muted mb-4">
              FDZ Construction LLC has been serving OKC metro homeowners for 8+ years. We're licensed, bonded, and insured in Oklahoma, and every pool deck installation is backed by a <strong className="text-concrete">2-year workmanship warranty</strong>. We provide free, no-pressure on-site estimates with a written number before any work begins.
            </p>
            <p className="prose-muted mb-6">
              If you're looking for a pool deck contractor in Oklahoma City who will engineer the base correctly, pour quality concrete, and finish it to last — call us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href="tel:4054584805" className="btn-primary text-center">📞 (405) 458-4805</a>
              <a href="mailto:jesus@fdzconstruction.com" className="btn-outline text-center">jesus@fdzconstruction.com</a>
            </div>
            <p className="text-[0.78rem] text-muted-text">
              7004 S Indiana Ave, Oklahoma City, OK 73159 · Licensed, bonded & insured in Oklahoma · 2-year workmanship warranty on all pool deck work
            </p>
          </div>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
