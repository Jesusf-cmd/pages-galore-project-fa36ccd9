import ServicePage from "@/components/ServicePageTemplate";

export default function FoundationsOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="foundations-oklahoma-city"
      localExpertiseNote="Oklahoma's expansive red clay swells and shrinks with moisture. Footing depth, reinforcement, drainage, and foundation type should account for site soil and approved plans — not a generic national default. FDZ places foundations as a concrete contractor per plans, specs, and site conditions."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Foundation Services in Oklahoma City",
        items: [
          {
            title: "Residential Foundations",
            bullets: [
              "Footing layout and excavation for new homes and additions",
              "Rebar placement and forming when shown on approved plans",
              "Slab-on-grade and stem-wall foundation concrete placement",
              "Perimeter drainage detailing coordinated with the build when in scope",
            ],
          },
          {
            title: "Commercial Concrete Foundations",
            bullets: [
              "Coordination with GCs, builders, inspectors, and bid schedules",
              "Slab-on-grade, footings, and pads placed per plan/spec",
              "COI and bonding documentation available for commercial bid packages",
            ],
          },
          {
            title: "Slab-on-Grade Foundation Construction",
            bullets: [
              "New-home and commercial slab-on-grade foundations",
              "Thickened edges, grade beams, and embeds when shown on plans",
              "Vapor barrier and base prep when included in FDZ's contracted concrete scope",
            ],
          },
          {
            title: "Footings, Stem Walls & Pads",
            bullets: [
              "Continuous and spread footings sized per structural design",
              "Stem walls for crawl spaces, elevated structures, and additions",
              "Garage, shop, retail, and equipment pads when within concrete scope",
            ],
          },
          {
            title: "Poured Concrete Retaining Walls",
            bullets: [
              "Monolithic poured walls for grade changes that pair with foundation work",
              "Drainage planning behind the wall (gravel backfill, weep holes, French drain where needed)",
              "Best for taller walls and higher-load applications when specified",
            ],
          },
          {
            title: "CMU Block Retaining Walls",
            bullets: [
              "Faster build option on smaller or mid-height projects",
              "Still requires proper drainage behind the wall",
              "Used where poured concrete is not required by design",
            ],
          },
        ],
      }}
      metaTitle="Concrete Foundation Contractor Oklahoma City | FDZ"
      metaDescription="Concrete foundation contractor in Oklahoma City for residential and commercial work — slab-on-grade, footings, stem walls, and plan/spec foundation installation. Call (405) 458-4805."
      eyebrow="OKC Metro · Concrete Foundation Contractor · Licensed & Insured"
      badge="self-performed"
      title="Concrete Foundation Contractor in"
      titleAccent="Oklahoma City."
      description='FDZ Construction LLC is a concrete foundation contractor for residential and commercial projects in Oklahoma City — slab-on-grade foundation construction, stem walls, footings, and pads placed per approved plans and site conditions. <a href="tel:4054584805">(405) 458-4805</a>.'
      modelNote="This is self-performed work — our own crew and equipment handle foundation concrete from layout through pour, with no subcontracted labor on the concrete scope."
      introText="<strong>A foundation that fits the lot, the plans, and the soil costs less than fixing one that did not.</strong> Oklahoma clay and site grading affect footing depth, reinforcement, base prep, and drainage detailing. FDZ Construction pours residential and commercial concrete foundations across the OKC metro for homeowners, builders, and GCs — plan and specification-based concrete placement, not a webpage checklist of universal dimensions. Need a slope or grade-change wall instead? See our <a href='/retaining-walls-oklahoma-city'>retaining walls page</a>. Already dealing with cracks or movement on an existing foundation? See <a href='/foundation-repair-oklahoma-city'>foundation repair</a>."
      serviceLabel="Foundation"
      serviceCards={[
        {
          icon: "🏠",
          title: "Residential Foundations",
          description: "Slab-on-grade and stem-wall foundations for new homes, additions, and room conversions — formed and poured for Oklahoma site conditions per plans.",
        },
        {
          icon: "🏭",
          title: "Commercial Slab-on-Grade",
          description: "Commercial foundation contractors in Oklahoma City rely on clear plan/spec work — warehouse and industrial building pads with reinforcement, base prep, and joint layouts as shown on drawings.",
        },
        {
          icon: "🏪",
          title: "Retail Pad Footings",
          description: "Footings and foundation pads for retail buildings, restaurants, and storefronts — coordinated with general contractors, design professionals, and city inspectors.",
        },
        {
          icon: "🏗️",
          title: "Stem Walls & Footings",
          description: "Continuous and spread footings and stem walls as shown on approved plans for crawl spaces, elevated structures, and additions.",
        },
        {
          icon: "🚜",
          title: "Garage, Shop & Equipment Pads",
          description: "Reinforced slabs and pads for garages, shops, and equipment — HVAC, generators, and dumpster pads when included in the concrete scope.",
        },
        {
          icon: "📋",
          title: "GC & Builder Coordination",
          description: "Bid scopes, COI/bonding docs, inspection scheduling, and plan review for commercial and new-construction foundation concrete.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "Mix strength per approved plans / specifications for the project" },
        { label: "Footing Depth", value: "Per code, structural design, and site/geotechnical requirements" },
        { label: "Reinforcement", value: "Rebar placed when shown on approved plans and included in FDZ scope" },
        { label: "Base & Compaction", value: "Subgrade and aggregate base prepared as specified for the pour" },
        { label: "Vapor Barrier", value: "Under-slab vapor barrier when specified and included in contracted scope" },
        { label: "Anchorage & Embeds", value: "Anchor bolts / embeds set when shown on plans before concrete sets" },
        { label: "Code & Permits", value: "Permits and inspections coordinated as required for the project" },
        { label: "Cure / Load Schedule", value: "Strip and load timing depend on mix, weather, and project requirements" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: /* TODO: confirm exact figure or founding year */ "Oklahoma's Permian-age clay is highly expansive — it swells when wet and shrinks when dry. Foundation performance in this region depends heavily on drainage, base prep, and building what the plans and soil conditions call for. We've been working in this soil for 8+ years." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every foundation and retaining wall we pour is backed by a 2-year workmanship warranty." },
        { icon: "📍", title: "Based in Oklahoma City", description: "Based in Oklahoma City. We schedule concrete and sewer work across the OKC metro." },
        { icon: "📋", title: "Free On-Site / Plan Estimates", description: "Send plans, bid documents, or foundation drawings — or request a site visit. Written estimates; no phone guesses on complex foundation scopes." },
        { icon: "🤝", title: "GC & Builder Coordination", description: "COI and bonding documentation available for commercial bid process. We coordinate with your schedule and other trades on site." },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Residential Foundations in",
          titleAccent: "Oklahoma City.",
          content: [
            "We pour concrete foundations for homeowners building new, adding on, or replacing a failed foundation, and for builders who need a foundation crew that hits grade and schedule. Our team handles layout, excavation coordination, forming, reinforcement, and concrete placement with attention to soil and site conditions.",
            "Slab-on-grade is the most common residential foundation in the OKC metro — a monolithic pour with thickened edges and reinforcement as shown on the plans. For crawl spaces, additions, and elevated structures, we pour continuous footings and stem walls per design. In addition to foundations, we also offer <a href='/driveways-oklahoma-city'>concrete driveways</a> and <a href='/patios-oklahoma-city'>patios and slabs</a> for residential properties.",
          ],
        },
        {
          eyebrow: "Commercial Foundations",
          title: "Commercial Concrete Foundation Contractor",
          titleAccent: "for GCs & Builders.",
          content: [
            "<strong>Commercial foundation contractor Oklahoma City</strong> work is plan-driven: FDZ places commercial slab-on-grade foundations, footings, and pads for warehouses, retail buildings, shops, and developments when that concrete is in our contracted scope.",
            "Commercial projects typically involve GC coordination, bid packages, inspection windows, and reinforcement / embeds / vapor barrier details shown on approved drawings. For dedicated warehouse floor scope — new industrial slabs, flatness targets, and phased floor replacement — see our <a href='/warehouse-slab-repair-oklahoma-city'>warehouse concrete and slab-on-grade</a> page. For broader site concrete, see <a href='/commercial-concrete-oklahoma-city'>commercial concrete</a> and <a href='/parking-lots-oklahoma-city'>parking lots</a>.",
          ],
          stats: [
            { value: "Plans", label: "Spec-based pours" },
            { value: "GC", label: "Coordination" },
            { value: "COI", label: "Bid docs ready" },
          ],
        },
        {
          eyebrow: "Foundation Pricing",
          title: "How Much Do Foundations Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Foundation pricing depends on project size, depth, reinforcement, site access, excavation conditions, and concrete volume. Retaining wall cost depends on wall height, drainage complexity, soil conditions, and whether engineering is required by the jurisdiction or design.",
            "We provide free on-site or plan-based estimates — call <a href='tel:4054584805'>(405) 458-4805</a> or use the quote form above. Commercial foundations are quoted from drawings and bid documents whenever available.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> with plans or to schedule your free estimate.",
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Building Foundations on",
          titleAccent: "Oklahoma Clay.",
          content: [
            "Oklahoma City sits on expansive clay that absorbs moisture and swells during wet seasons, then contracts during dry periods. That swell-shrink cycle is one reason footing detailing, base prep, and drainage matter so much on local lots.",
            "Foundation problems after the fact are often associated with inadequate preparation, missing or improperly placed reinforcement relative to the design, or poor drainage around the structure — but every site is different. FDZ builds new foundations as a concrete contractor: we place what the approved plans, specifications, and site conditions require.",
            "Already seeing cracks or settlement on an existing foundation? That is a repair evaluation — start on our <a href='/foundation-repair-oklahoma-city'>foundation repair</a> page rather than treating this construction page as a crack-repair checklist.",
          ],
        },
        {
          eyebrow: "Get Started",
          title: "Request a Foundation",
          titleAccent: "Construction Estimate.",
          alt: true,
          content: [
            "Share foundation drawings, bid documents, or project scope for commercial and new-construction estimates — or request a residential site visit. We serve Oklahoma City, Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro. Based in Oklahoma City.",
          ],
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/foundation-repair-oklahoma-city' class='text-orange no-underline font-medium'>Foundation Repair</a> — Foundation crack repair and repair-vs-replace evaluation for existing foundations.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Cracked commercial slabs, failed panels, and site concrete repair when the issue is not foundation movement.",
            "<a href='/warehouse-slab-repair-oklahoma-city' class='text-orange no-underline font-medium'>Warehouse Concrete &amp; Slabs</a> — New warehouse slab-on-grade floors and phased industrial floor replacement for forklift operations.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Warehouse floors, retail pads, loading docks, and site concrete for commercial properties and GC projects.",
            "<a href='/retaining-walls-oklahoma-city' class='text-orange no-underline font-medium'>Retaining Wall Construction</a> — Structural walls that often pair with foundation and grade work on sloped lots.",
            "<a href='/soil-stabilization-oklahoma-city' class='text-orange no-underline font-medium'>Soil Stabilization</a> — Lime and cement treatment for Oklahoma clay before a foundation pour when specified.",
            "<a href='/crane-foundation-installation-oklahoma-city' class='text-orange no-underline font-medium'>Crane Foundation Installation</a> — Crane pads and anchor-bolt coordination installed per engineered drawings.",
            "Helpful guide: <a href='/blog/rebar-vs-wire-mesh-concrete-slabs' class='text-orange no-underline'>rebar vs wire mesh for concrete slabs</a> on expansive clay.",
            "Local foundation pages: <a href='/foundations-edmond' class='text-orange no-underline'>Edmond</a>, <a href='/foundations-norman' class='text-orange no-underline'>Norman</a>, and <a href='/foundations-yukon' class='text-orange no-underline'>Yukon</a>.",
          ],
        },
      ]}
      processEyebrow="How a Foundation Gets Poured"
      processTitle="From Layout to"
      processTitleAccent="Cured Slab."
      processIntro="On Oklahoma clay, foundation performance depends on footings, reinforcement, base prep, and drainage detailing. Here's how we take a foundation from staking to a cured, inspected slab when that work is in our scope."
      processSteps={[
        { title: "Layout & plan review", description: "We stake the foundation to the plan, review site drainage and soil conditions as they affect the concrete scope, and coordinate permits when included." },
        { title: "Excavation & footings", description: "We excavate to grade and dig and pour footings as required by the approved design, code, and site conditions." },
        { title: "Forming & reinforcement", description: "Forms are set to grade; rebar, grade beams, sleeves, and embeds are placed when shown on approved plans and included in FDZ's contracted concrete scope." },
        { title: "Vapor barrier & base", description: "We prepare the subgrade/base and install under-slab vapor barrier when specified and included in scope." },
        { title: "Pour & finish", description: "We place the specified mix, screed and finish to grade, and set anchor bolts/hold-downs when shown before the concrete sets." },
        { title: "Cure & inspection", description: "The slab cures before it carries load per project requirements. We coordinate required inspections and walk the finished foundation with you." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Foundations We"
      projectTypesTitleAccent="Pour."
      projectTypesIntro="The most common residential and commercial foundation projects we handle across the OKC metro:"
      projectTypes={[
        { title: "New home slab-on-grade", description: "Monolithic slab foundations with thickened edges and reinforcement as shown on the plans for new residential construction." },
        { title: "Room additions & garage pads", description: "Tie-in footings and slabs for additions, attached garages, and room conversions." },
        { title: "Shop & workshop slabs", description: "Reinforced slabs for detached shops, barns, and workshops built for tools and vehicles." },
        { title: "Commercial slab-on-grade", description: "Building pads and commercial foundation slabs coordinated with GCs and inspectors." },
        { title: "Retail pad footings", description: "Footings and pads for retail buildings, restaurants, and storefronts per engineered plans." },
        { title: "Stem walls & crawl-space footings", description: "Continuous and spread footings with stem walls for crawl spaces and elevated structures." },
        { title: "Equipment & generator pads", description: "Reinforced pads for HVAC units, generators, transformers, and dumpster enclosures when in scope." },
        { title: "Foundation replacement (new pour)", description: "Tear-out and new foundation concrete when replacement is the right path — repair evaluation starts on our foundation repair page." },
      ]}
      projectGallery={{
        eyebrow: "Recent Foundations",
        title: "Real Foundation Projects",
        titleAccent: "Across the OKC Metro.",
        intro: "A few recent foundation pours — from a pier-supported thickened slab in Edmond to residential slab-on-grade work in Piedmont. Project details reflect repository project evidence only.",
        photos: [
          { src: "/images/projects/pier-foundation-excavation-edmond-oklahoma-1.webp", alt: "Excavation and site grading for pier foundation in Edmond, Oklahoma — skid steer and excavator working red clay lot" },
          { src: "/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.webp", alt: "Concrete truck on site during pier foundation slab pour in Edmond, Oklahoma — crew finishing fresh slab" },
          { src: "/images/projects/pier-foundation-finished-edmond-oklahoma-curing.webp", alt: "Finished pier foundation thickened slab curing in Edmond, Oklahoma" },
          { src: "/images/projects/residential-foundation-pour-piedmont-oklahoma.webp", alt: "Residential foundation pour in Piedmont, Oklahoma — fresh slab on Oklahoma red clay subgrade" },
          { src: "/images/projects/residential-foundation-crew-piedmont-ok.webp", alt: "FDZ Construction crew finishing residential foundation slab in Piedmont, OK with power trowel" },
          { src: "/images/projects/pier-foundation-pour-edmond-oklahoma-crew-finishing.webp", alt: "Crew finishing thickened slab foundation mid-pour in Edmond, Oklahoma" },
        ],
      }}
      cityBlockIntro={`We pour residential and commercial concrete foundations throughout the Oklahoma City metro, including <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects, placed per approved plans and site conditions." },
        { question: "Do you build commercial foundations?", answer: "Yes — we pour commercial slab-on-grade for warehouses and shops, footings and pads for retail buildings, and structural foundation concrete for developments, coordinated with GCs, design professionals, and inspectors when those parties are on the project." },
        { question: "How much does a foundation cost in OKC?", answer: "Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. We provide free on-site or plan-based estimates — call (405) 458-4805 or use the quote form above." },
        { question: "How deep should footings be in Oklahoma?", answer: "Footing depth depends on code, structural design, frost considerations, and site/geotechnical requirements. We place footings as shown on approved plans rather than advertising a universal depth." },
        { question: "Do you place rebar and vapor barrier?", answer: "Yes, when shown on approved plans and included in FDZ's contracted concrete scope. Reinforcement size/spacing and vapor-barrier details come from the design — not a fixed website specification." },
        { question: "Do you handle the engineering requirements for taller retaining walls?", answer: "Many jurisdictions require an engineer's stamp for walls over a certain height. We confirm what's required for your specific project and can work with an engineer when needed. FDZ is the concrete contractor, not the design engineer." },
        { question: "How long before I can build on a new foundation?", answer: "Strip and framing schedules depend on the mix, weather, and project requirements. We'll give you a clear schedule for your pour rather than a universal cure-time promise." },
        { question: "What concrete strength do you use for foundations?", answer: "Mix strength is set by the approved plans and specifications for the project. We place the specified mix; we do not advertise a single PSI for every foundation." },
        { question: "Do you handle permits and inspections?", answer: "Yes — we coordinate necessary permits and inspections for foundation projects across the OKC metro when that coordination is part of our scope." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We serve Edmond (~30–40 min north), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City — based in Oklahoma City." },
        { question: "What if I need foundation crack repair instead of a new foundation?", answer: "Use our foundation repair page for existing foundation cracks, drainage-related movement, and repair-vs-replace evaluation. This page is for new foundation construction and replacement pours." },
      ]}
    />
  );
}
