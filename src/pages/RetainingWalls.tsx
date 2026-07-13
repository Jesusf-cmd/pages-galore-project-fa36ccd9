import ServicePage from "@/components/ServicePageTemplate";

export default function RetainingWalls() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="retaining-walls-oklahoma-city"
      localExpertiseNote="Oklahoma's Permian-age clay and shale base swells significantly when wet and shrinks when dry — sometimes moving several inches across a single season. On any sloped lot, that soil movement creates lateral pressure against a wall constantly, not just during rain events. The biggest variable in retaining wall longevity in OKC isn't the wall material — it's the drainage behind it."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Retaining Wall Services in Oklahoma City",
        items: [
          {
            title: "New Retaining Wall Installation",
            bullets: [
              "Site evaluation for slope, soil conditions, and drainage before any design decisions",
              "Footing sized to wall height, load, and soil type",
              "Drainage planning behind the wall — gravel backfill, weep holes, French drain where needed",
              "Wall construction in poured concrete or CMU block depending on scope",
              "Backfill compacted in lifts",
            ],
          },
          {
            title: "Retaining Wall Repair",
            bullets: [
              "Leaning or bowing walls are almost always a drainage failure, not a material failure — we evaluate the cause before recommending repair vs. replacement",
              "Structural stabilization where rebuild isn't warranted",
              "Drainage correction included where inadequate drainage caused the original failure",
            ],
          },
          {
            title: "Poured Concrete Retaining Walls",
            bullets: [
              "Monolithic structure — no block joints to shift or crack over time",
              "Best for taller walls, higher-load applications, and sites with severe soil movement",
              "Can be formed to follow curves and grade changes",
              "Finish options available (smooth, textured)",
            ],
          },
          {
            title: "CMU Block Retaining Walls",
            bullets: [
              "Concrete masonry unit construction — durable and cost-effective for mid-height walls",
              "Requires the same drainage planning behind the wall as poured concrete",
              "Good choice where an engineered poured-concrete wall isn't required by height or load",
            ],
          },
          {
            title: "Decorative and Landscape Walls",
            bullets: [
              "Lower-height walls for garden beds, landscape separation, and outdoor living areas",
              "Can be paired with a patio or stamped concrete project — <a href='/patios-oklahoma-city'>see our patios page</a>",
              "Drainage still matters even on smaller walls — we don't skip it",
            ],
          },
        ],
      }}
      metaTitle="Concrete Retaining Walls Oklahoma City | FDZ Construction LLC"
      metaDescription="Concrete retaining wall installation and repair in Oklahoma City. Poured concrete and CMU block walls built for OKC's expansive clay soil. Licensed, bonded, insured. Free estimates — (405) 458-4805."
      eyebrow="OKC Metro · Retaining Wall Contractors · Licensed & Insured"
      badge="self-performed"
      title="Concrete Retaining Wall Contractors in"
      titleAccent="Oklahoma City, OK."
      description={`Poured concrete and CMU block retaining walls built for OKC's expansive clay soil — slope stabilization, drainage, and outdoor living across the OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.`}
      modelNote="This is self-performed work — our own crew and equipment handle every retaining wall from start to finish, with no subcontracted labor."
      introText="FDZ Construction LLC builds and repairs concrete retaining walls across the Oklahoma City metro. Whether you need a wall to control a sloped yard, protect a foundation from soil movement, create usable outdoor space, or manage drainage, we design each wall around your specific site conditions — not a one-size template. Based in south OKC, licensed, bonded, and insured in Oklahoma, and every wall is backed by a 2-year workmanship warranty."
      serviceLabel="Retaining Wall"
      serviceCards={[
        {
          icon: "🧱",
          title: "Poured Concrete Walls",
          description: "Monolithic structure with no block joints — best for taller walls, higher loads, and sites with severe soil movement. Formed to any shape or grade.",
        },
        {
          icon: "🪨",
          title: "CMU Block Walls",
          description: "Durable and cost-effective for mid-height walls. Requires the same drainage planning as poured concrete — block doesn't reduce hydrostatic pressure risk.",
        },
        {
          icon: "🌿",
          title: "Decorative & Landscape Walls",
          description: "Lower-height walls for garden beds, landscape separation, and outdoor living. Often paired with patio and stamped concrete projects.",
        },
        {
          icon: "💧",
          title: "Drainage & French Drains",
          description: "Every wall includes a gravel backfill zone and a French drain or weep holes. Water pressure behind the wall is the leading cause of failure in OKC's clay soil.",
        },
        {
          icon: "🔧",
          title: "Retaining Wall Repair",
          description: "Leaning walls are almost always a drainage failure. We evaluate the cause before recommending repair vs. replacement, then correct the drainage as part of the fix.",
        },
        {
          icon: "🏢",
          title: "Commercial Retaining Walls",
          description: "Retaining structures for commercial sites, parking lots, and site development projects across the OKC metro.",
        },
      ]}
      specs={[
        { label: "Footing Depth", value: "Below frost line per Oklahoma code (18–24 inches), sized to wall height" },
        { label: "Drainage", value: "Gravel backfill zone + French drain or weep holes behind every wall" },
        { label: "Reinforcement", value: "Rebar sized for the retained earth height and surcharge loads" },
        { label: "Poured Walls", value: "4,000 PSI concrete for maximum strength and tall walls" },
        { label: "Block Walls", value: "Grouted, rebar-filled CMU cores on a reinforced footing" },
        { label: "Backfill", value: "Compacted free-draining backfill placed in lifts, graded to shed water" },
        { label: "Engineering", value: "Stamped plans coordinated for walls over height threshold or with surcharge loads" },
        { label: "Cure & Load", value: "Footing/wall cures ~7 days before staged backfill; full strength ~28 days" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Building Retaining Walls in OKC Clay", description: /* TODO: confirm exact figure or founding year */ "Over 8 years of experience building retaining walls in Oklahoma's expansive clay soil — we know what drainage failures look like and how to prevent them." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every retaining wall we build is backed by a 2-year workmanship warranty on all work." },
        { icon: "💧", title: "Drainage Evaluated Before Design", description: "We don't design the wall and figure out drainage later. Drainage planning comes first — before footing depth, before material choice, before cost." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes, no pressure. We evaluate your specific slope, soil, and drainage conditions and give you a written estimate." },
        { icon: "📍", title: "Based in South OKC — Full Metro Service", description: "We're at 7004 S Indiana Ave. Serving OKC, Edmond, Yukon, Norman, Moore, Mustang, Midwest City, and Del City." },
      ]}
      sections={[
        {
          eyebrow: "Oklahoma Soil",
          title: "Why OKC Soil Makes Retaining Walls",
          titleAccent: "a Critical Investment.",
          content: [
            "Oklahoma's Permian-age clay and shale base is among the most expansive soil in the country. It swells significantly when wet and shrinks when dry — sometimes moving several inches across a single season. On any sloped lot, that soil movement creates lateral pressure against the wall constantly, not just during rain events.",
            "This is why the biggest variable in retaining wall longevity in OKC isn't the wall material — it's the drainage behind it. Water pressure that builds up in the soil behind an inadequately drained wall is the leading cause of wall failure in this region. A wall that looks solid can lean or fail within a few years if the drainage wasn't done right from the start.",
            "On Edmond's rolling terrain specifically — where the soil can shift between sandy and clay-heavy on the same lot — proper site evaluation before design is especially important. A retaining wall that works well on a clay site in south OKC may need a different approach on a sandier Edmond lot with more elevation change.",
          ],
        },
        {
          eyebrow: "Wall Types",
          title: "Retaining Wall Types — Which Is Right",
          titleAccent: "for Your Project?",
          content: [
            "<strong>Gravity walls</strong> hold back soil using their own weight and mass. Work well for shorter walls on moderate slopes. Require a properly sized footing and good drainage to prevent overturning.",
            "<strong>Poured concrete walls</strong> are the most versatile option — can be formed to any shape, height, or grade. Preferred for taller walls, high-load applications, or where OKC's severe soil movement requires a monolithic structure with no joints. Requires rebar reinforcement and drainage engineering.",
            "<strong>CMU (concrete block) walls</strong> are faster to build than poured walls on smaller projects. Durable and well-suited to mid-height residential walls. Still requires the same drainage planning — block construction doesn't reduce the hydrostatic pressure risk.",
            "<strong>Segmental retaining walls</strong> use interlocking concrete block systems. Work well for lower-height landscape walls and garden applications. Not appropriate for high-load or tall structural walls without engineering.",
            "Note: walls over a certain height (varies by city) typically require an engineer's stamp — we confirm what's required for your specific project.",
          ],
        },
        {
          eyebrow: "Retaining Wall Pricing",
          title: "How Much Does a Retaining Wall Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Cost depends on wall height and length, material choice (poured concrete vs. CMU block), site drainage requirements, soil conditions, equipment access, and whether engineering is required. We provide free on-site estimates with a clear scope before any work begins.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to schedule your free on-site estimate.",
        },
        {
          eyebrow: "Get Started",
          title: "Request a Free",
          titleAccent: "Retaining Wall Estimate.",
          alt: true,
          content: [
            "We provide free on-site estimates across Oklahoma City, Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro including Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC.",
          ],
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/foundations-oklahoma-city' class='text-orange no-underline font-medium'>Concrete Foundations</a> — Retaining walls and foundations often go hand-in-hand on sloped lots.",
            "<a href='/patios-oklahoma-city' class='text-orange no-underline font-medium'>Patios &amp; Stamped Concrete</a> — Landscape walls frequently paired with patio or outdoor living projects.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Retaining walls for commercial site development and parking lot projects.",
          ],
        },
      ]}
      processEyebrow="How a Wall Gets Built"
      processTitle="From Site Assessment to"
      processTitleAccent="Finished Wall."
      processIntro="A retaining wall is only as good as its footing and its drainage. Here's how we take a wall from first site visit to a finished, drained structure that holds."
      processSteps={[
        { title: "Site evaluation", description: "We assess your slope, soil type, drainage patterns, and what the wall needs to hold back before recommending a wall type or height." },
        { title: "Drainage plan", description: "Gravel backfill depth, weep hole placement, and French drain routing (where needed) are planned before construction starts — not added as an afterthought." },
        { title: "Footing", description: "Sized and poured to the depth and width required for the specific wall height and soil conditions." },
        { title: "Wall construction", description: "Poured concrete or CMU block, built per the drainage plan and footing design." },
        { title: "Backfill", description: "Compacted in lifts to avoid point-loading against the new wall." },
        { title: "Final inspection", description: "We walk through the finished wall with you before we leave the job site." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Retaining Wall"
      projectTypesTitleAccent="Projects."
      projectTypesIntro="The most common retaining wall scenarios we solve across the Oklahoma City metro:"
      projectTypes={[
        { title: "Slope stabilization", description: "Holding back a sliding or steep slope to stop movement and reclaim flat, usable yard." },
        { title: "Drainage & erosion control", description: "Redirecting water and stopping soil washout on lots where runoff is undermining the grade." },
        { title: "Parking lot & driveway grade changes", description: "Structural walls that support the edge of a driveway, parking area, or raised pad." },
        { title: "Tiered / terraced landscape walls", description: "Multiple shorter walls that step down a slope for planting beds and outdoor living areas." },
        { title: "Foundation & structure protection", description: "Walls that keep shifting earth and water away from a home, garage, or commercial building." },
        { title: "Commercial site retaining walls", description: "Engineered retaining structures for commercial sites, parking areas, and developments." },
        { title: "Outdoor living walls", description: "Lower-height decorative walls for garden beds, landscape separation, and entertaining areas." },
        { title: "Retaining wall repair", description: "Structural stabilization and drainage correction for leaning or failing walls." },
      ]}
      projectGallery={{
        eyebrow: "Recent Retaining Walls",
        title: "Real Retaining Wall Projects",
        titleAccent: "in the OKC Metro.",
        intro: "A tall poured concrete retaining wall we built for a new residential construction project in Oklahoma City — forms stripped to reveal a clean monolithic structure, engineered for the lateral pressure of OKC's expansive clay soil with drainage behind the wall.",
        photos: [
          { src: "/images/projects/poured-concrete-retaining-wall-oklahoma-city.webp", alt: "Tall poured concrete retaining wall in Oklahoma City — monolithic structure supporting new residential construction on expansive clay soil" },
        ],
      }}
      cityBlockIntro={`We build retaining walls — poured concrete, CMU block, and landscape walls — throughout the Oklahoma City metro, including <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "Why do retaining walls fail?", answer: "Almost always drainage — not the wall material or age. Water pressure builds up in the soil behind a wall with inadequate drainage and pushes it out of place over time. A wall that looks structurally sound can lean or fail within a few years if drainage wasn't handled correctly from the start." },
        { question: "How tall can a retaining wall be before it needs an engineer?", answer: "This varies by city and jurisdiction. Many areas require an engineer's stamp for walls over 4 feet. We confirm the specific requirement for your project location before work begins." },
        { question: "What's the difference between poured concrete and CMU block for a retaining wall?", answer: "Poured concrete creates a monolithic structure with no joints — preferred for taller walls, higher loads, or severe soil movement. CMU block is faster and more cost-effective for mid-height walls where the load and height don't require a monolithic pour. Both need proper drainage behind them." },
        { question: "How long does a concrete retaining wall last?", answer: "A properly built wall with adequate drainage can last 50+ years. The drainage is the variable — a well-drained wall outlasts a poorly drained one by decades regardless of material." },
        { question: "Do you handle the drainage behind the wall or just the wall itself?", answer: "We handle the full scope — drainage plan, gravel backfill, weep holes, French drain where needed, and the wall itself. We don't build the wall and leave the drainage to someone else." },
        { question: "Can you repair a leaning retaining wall, or does it need to be replaced?", answer: "Depends on how far it's leaned and what caused it. Minor movement with a repairable drainage issue can often be stabilized. Significant structural displacement usually requires rebuild. We evaluate this on-site at no charge." },
        { question: "Do you build retaining walls for commercial properties?", answer: "Yes — we build retaining walls for commercial sites, parking lots, and site development projects across the OKC metro, in addition to residential work." },
        { question: "How much does a retaining wall cost in Oklahoma City?", answer: "Cost depends on wall height and length, material choice, site drainage requirements, soil conditions, equipment access, and whether engineering is required. We provide free on-site estimates with a clear scope before any work begins — call (405) 458-4805." },
        { question: "What areas do you serve for retaining walls?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC." },
      ]}
    />
  );
}
