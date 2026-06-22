import ServicePage from "@/components/ServicePageTemplate";

export default function FoundationsOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="foundations-oklahoma-city"
      localExpertiseNote="Oklahoma's expansive red clay swells and shrinks with moisture and is the leading cause of foundation cracking in this region. Footing depth, reinforcement, and drainage all have to account for that movement — which is why we engineer each foundation to the soil, not a generic national spec."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Foundation and Retaining Wall Services in Oklahoma City",
        items: [
          {
            title: "Residential Foundations",
            bullets: [
              "Footing layout and excavation",
              "Rebar placement and forming",
              "Pour and cure",
              "Oklahoma's expansive clay means footing depth matters more here than in stable-soil regions",
            ],
          },
          {
            title: "Commercial and Structural Foundations",
            bullets: [
              "Coordination with GC and inspection schedule",
              "Higher PSI mixes for structural loads",
              "COI and bonding documentation available for bid process",
            ],
          },
          {
            title: "Poured Concrete Retaining Walls",
            bullets: [
              "Monolithic structure — no block joints to shift or crack over time",
              "Drainage planning behind the wall is the single biggest factor in longevity (gravel backfill, weep holes, French drain where needed)",
              "Best for taller walls and higher-load applications",
            ],
          },
          {
            title: "CMU Block Retaining Walls",
            bullets: [
              "Faster to build than poured walls on smaller projects",
              "Still requires proper drainage behind the wall",
              "Good option for mid-height walls where engineered poured concrete isn't required",
            ],
          },
          {
            title: "Retaining Wall Repair",
            bullets: [
              "Leaning or bowing walls almost always caused by water pressure from inadequate drainage — not just age",
              "We evaluate the drainage situation before recommending repair vs. replacement",
              "Stabilization and drainage correction where rebuild isn't necessary",
            ],
          },
        ],
      }}
      metaTitle="Concrete Foundations Oklahoma City | Residential & Commercial | FDZ Construction LLC"
      metaDescription="Concrete foundation contractor in Oklahoma City. Slab-on-grade, stem walls, footings, garage pads, and commercial warehouse & retail foundations engineered for clay soil. (405) 458-4805."
      eyebrow="OKC Metro · Foundation Contractors · Licensed & Insured"
      title="Concrete Foundations in"
      titleAccent="Oklahoma City."
      description='FDZ Construction LLC builds residential and commercial concrete foundations in Oklahoma City — slab-on-grade, stem walls, footings, and structural pads engineered for Oklahoma clay. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Your foundation supports everything above it — there is no part of a build where shortcuts cost more later. FDZ Construction LLC pours residential and commercial foundations across the Oklahoma City metro with proper footing depth, engineered reinforcement, and 4,000+ PSI concrete designed for the swell-shrink cycle of Oklahoma's expansive clay. Looking for slope or grade-change work instead? See our dedicated <a href='/retaining-walls-oklahoma-city'>retaining wall page</a>."
      serviceLabel="Foundation"
      serviceCards={[
        {
          icon: "🏠",
          title: "Residential Foundations",
          description: "Slab-on-grade and stem wall foundations for new homes, additions, and room conversions — engineered for Oklahoma's expansive clay soil.",
        },
        {
          icon: "🏭",
          title: "Commercial Slab-on-Grade",
          description: "Warehouse and industrial floor foundations with engineered rebar schedules, 6+ inch compacted base, and joint layouts built for forklift and equipment loads.",
        },
        {
          icon: "🏪",
          title: "Retail Pad Footings",
          description: "Footings and foundation pads for retail buildings, restaurants, and storefronts — coordinated with general contractors, engineers, and city inspectors.",
        },
        {
          icon: "🏗️",
          title: "Stem Walls & Footings",
          description: "Continuous and spread footings poured below frost line. Stem walls for crawl spaces, elevated structures, and additions.",
        },
        {
          icon: "🚜",
          title: "Garage, Shop & Equipment Pads",
          description: "Reinforced slabs and foundations for garages, shops, and heavy equipment — HVAC, generators, and dumpster pads sized per spec.",
        },
        {
          icon: "🔧",
          title: "Foundation Repair Coordination",
          description: "We assess existing foundation damage and coordinate repairs — an honest evaluation of whether it needs patching or full replacement.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (5,000+ PSI for commercial/industrial)" },
        { label: "Footing Depth", value: "Below frost line per Oklahoma code (18–24 inches)" },
        { label: "Reinforcement", value: "Rebar per engineered plans, tied at every intersection" },
        { label: "Base & Compaction", value: "Compacted subgrade + aggregate base (6+ inches commercial)" },
        { label: "Vapor Barrier", value: "Under-slab vapor barrier (typically 10–15 mil) where required by use" },
        { label: "Anchorage", value: "Anchor bolts / hold-downs set per plan before the concrete sets" },
        { label: "Code & Permits", value: "Permits pulled, inspections coordinated to OKC building code" },
        { label: "Cure Time", value: "Forms strip ~1–2 days · framing ~7 days · full strength ~28 days" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: /* TODO: confirm exact figure or founding year */ "Oklahoma's Permian-age clay is highly expansive — it swells when wet and shrinks when dry. Most foundation and retaining wall problems in this region trace back to inadequate drainage or footings that didn't account for this movement. We've been working in this soil for 8+ years and know what it takes to build structures that last." },
        { icon: "🔒", title: "1-Year Workmanship Warranty", description: "Every foundation and retaining wall we pour is backed by a 1-year workmanship warranty." },
        { icon: "📍", title: "Based in South OKC — Fastest Response", description: "We're at 7004 S Indiana Ave. OKC gets our fastest response and tightest scheduling of anywhere we serve." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes, no pressure. We evaluate your specific site conditions and give you a written estimate." },
        { icon: "🤝", title: "GC & Builder Coordination", description: "COI and bonding documentation available for commercial bid process. We coordinate with your schedule and other trades on site." },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Residential Foundations in",
          titleAccent: "Oklahoma City.",
          content: [
            "We pour concrete foundations for homeowners building new, adding on, or replacing a failed foundation, and for builders who need a foundation crew that hits grade and schedule. Our team handles layout, excavation coordination, forming, reinforcement, and concrete placement with attention to soil and site conditions.",
            "Slab-on-grade is the most common residential foundation in the OKC metro — a monolithic pour with thickened edges and engineered reinforcement that performs well on our clay when it's built right. For crawl spaces, additions, and elevated structures, we pour continuous footings and stem walls below frost line. In addition to foundations, we also offer <a href='/driveways-oklahoma-city'>concrete driveways</a> and <a href='/patios-oklahoma-city'>patios and slabs</a> for residential properties.",
          ],
        },
        {
          eyebrow: "Commercial Foundations",
          title: "Commercial Foundations Built for",
          titleAccent: "Heavy Loads.",
          content: [
            "<strong>Commercial foundation contractors in Oklahoma City</strong> — FDZ Construction pours slab-on-grade foundations for warehouses, footings and pads for retail buildings, and structural foundations for commercial developments across the OKC metro.",
            "Commercial slab-on-grade for warehouses requires thicker pours, engineered rebar schedules, and 6+ inch compacted aggregate base to carry forklift traffic, racking loads, and equipment without cracking. Retail pad footings are sized and reinforced per engineered plans and coordinated with your general contractor and city inspectors. For complete commercial site builds, we also handle <a href='/commercial-concrete-oklahoma-city'>commercial concrete</a> and <a href='/parking-lots-oklahoma-city'>parking lots</a>.",
          ],
          stats: [
            { value: "5,000+", label: "PSI available" },
            { value: "6\"+", label: "Commercial base" },
            { value: "GC", label: "Coordination" },
          ],
        },
        {
          eyebrow: "Foundation & Wall Pricing",
          title: "How Much Do Foundations and Retaining Walls Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Foundation pricing depends on project size, depth, reinforcement, site access, excavation conditions, and concrete volume. Retaining wall cost depends on wall height, drainage complexity, soil conditions, and whether engineering is required.",
            "We provide free on-site estimates — call <a href='tel:4054584805'>(405) 458-4805</a> or use the quote form above. Commercial foundations are quoted from engineered plans.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to schedule your free on-site estimate.",
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Foundation Problems",
          titleAccent: "in Oklahoma City.",
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during summer droughts — sometimes shifting several inches in a single year.",
            "Foundation failures in OKC are almost always caused by inadequate footing depth, missing or improperly placed reinforcement, and poor drainage around the structure. A contractor who doesn't understand Oklahoma clay will pour a foundation that cracks and settles within a few years.",
            "Proper foundation construction means footings below frost line, compacted subgrade, rebar per engineered plans, and drainage grading that moves water away from the structure. Every foundation FDZ Construction pours follows this standard.",
          ],
        },
        {
          eyebrow: "Get Started",
          title: "Request a Free",
          titleAccent: "Foundation Estimate.",
          alt: true,
          content: [
            "We provide free on-site estimates for foundations and retaining walls across Oklahoma City, Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro. Based at 7004 S Indiana Ave in south OKC.",
          ],
          // TODO: embed quote form here once document-upload feature ships
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Warehouse floors, retail pads, loading docks, and site concrete for commercial properties and GC projects.",
            "<a href='/patios-oklahoma-city' class='text-orange no-underline font-medium'>Patios &amp; Stamped Concrete</a> — Outdoor living slabs on sloped lots often pair with a retaining wall. We handle both.",
          ],
        },
      ]}
      processEyebrow="How a Foundation Gets Poured"
      processTitle="From Layout to"
      processTitleAccent="Cured Slab."
      processIntro="On Oklahoma clay, a foundation lives or dies on its footings, reinforcement, and base prep. Here's how we take a foundation from staking to a cured, inspected slab."
      processSteps={[
        { title: "Layout & soil evaluation", description: "We stake the foundation to the plan, evaluate the clay and site drainage, and coordinate engineered plans and permits before any dirt moves." },
        { title: "Excavation & footings", description: "We excavate to grade and dig and pour footings below the frost line, sized and reinforced for the structure and soil conditions." },
        { title: "Forming & reinforcement", description: "Forms are set to grade, rebar and grade beams are placed per the engineered plan, and plumbing sleeves and anchor points are located." },
        { title: "Vapor barrier & base", description: "We install and compact the aggregate base and lay the under-slab vapor barrier where the use requires it." },
        { title: "Pour & finish", description: "We place 4,000+ PSI concrete, screed and float to grade, finish the surface, and set anchor bolts and hold-downs before the concrete sets." },
        { title: "Cure & inspection", description: "The slab cures before it carries load. We coordinate required inspections and walk the finished foundation with you." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Foundations We"
      projectTypesTitleAccent="Pour."
      projectTypesIntro="The most common residential and commercial foundation projects we handle across the OKC metro:"
      projectTypes={[
        { title: "New home slab-on-grade", description: "Monolithic slab foundations with thickened edges and engineered rebar for new residential construction." },
        { title: "Room additions & garage pads", description: "Tie-in footings and slabs for additions, attached garages, and room conversions." },
        { title: "Shop & workshop slabs", description: "Reinforced slabs for detached shops, barns, and workshops built to carry tools and vehicles." },
        { title: "Warehouse slab-on-grade", description: "Commercial floor foundations with heavy rebar schedules and 6\"+ base for forklift and racking loads." },
        { title: "Retail pad footings", description: "Engineered footings and pads for retail buildings, restaurants, and storefronts." },
        { title: "Stem walls & crawl-space footings", description: "Continuous and spread footings with stem walls for crawl spaces and elevated structures." },
        { title: "Equipment & generator pads", description: "Reinforced pads for HVAC units, generators, transformers, and dumpster enclosures." },
        { title: "Foundation replacement & repair coordination", description: "Honest assessment of failing foundations and coordination of repair or full replacement." },
      ]}
      projectGallery={{
        eyebrow: "Recent Foundations",
        title: "Real Foundation Projects",
        titleAccent: "Across the OKC Metro.",
        intro: "A few recent foundation pours — from a pier-supported thickened slab in Edmond to residential slab-on-grade work in Piedmont. Every foundation is engineered for the specific soil and site conditions of the lot.",
        photos: [
          { src: "/images/projects/pier-foundation-excavation-edmond-oklahoma-1.jpg", alt: "Excavation and site grading for pier foundation in Edmond, Oklahoma — skid steer and excavator working red clay lot" },
          { src: "/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.jpg", alt: "Concrete truck on site during pier foundation slab pour in Edmond, Oklahoma — crew finishing fresh slab" },
          { src: "/images/projects/pier-foundation-finished-edmond-oklahoma-curing.jpg", alt: "Finished pier foundation thickened slab curing in Edmond, Oklahoma" },
          { src: "/images/projects/residential-foundation-pour-piedmont-oklahoma.jpg", alt: "Residential foundation pour in Piedmont, Oklahoma — fresh slab on Oklahoma red clay subgrade" },
          { src: "/images/projects/residential-foundation-crew-piedmont-ok.jpg", alt: "FDZ Construction crew finishing residential foundation slab in Piedmont, OK with power trowel" },
          { src: "/images/projects/pier-foundation-pour-edmond-oklahoma-crew-finishing.jpg", alt: "Crew finishing thickened slab foundation mid-pour in Edmond, Oklahoma" },
        ],
      }}
      cityBlockIntro={`We pour residential and commercial concrete foundations throughout the Oklahoma City metro, including <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects. Every foundation is engineered for Oklahoma's clay soil conditions." },
        { question: "Do you build commercial foundations?", answer: "Yes — we pour commercial slab-on-grade for warehouses, footings and pads for retail buildings, and structural foundations for developments, coordinated with engineers, GCs, and inspectors." },
        { question: "How much does a foundation cost in OKC?", answer: "Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
        { question: "How deep should footings be in Oklahoma?", answer: "Oklahoma code requires footings below the frost line — typically 18–24 inches deep. On expansive clay, we may go deeper based on soil conditions and load." },
        { question: "How do I know if my retaining wall needs repair or full replacement?", answer: "If the wall is leaning significantly, has visible cracking through the structure, or has lost its footing, replacement is usually the right call. Minor surface cracking without structural movement is often repairable. We evaluate this on-site at no charge." },
        { question: "Do you handle the engineering requirements for taller retaining walls?", answer: "Many jurisdictions require an engineer's stamp for walls over a certain height. We confirm what's required for your specific project and can work with an engineer when needed." },
        { question: "How long before I can build on a new foundation?", answer: "Forms can usually be stripped in 1–2 days and framing often starts around 7 days, but concrete reaches full design strength at about 28 days. We'll give you a clear schedule based on your mix and the weather." },
        { question: "What concrete strength do you use for foundations?", answer: "We specify 4,000 PSI minimum for residential foundations and 5,000+ PSI for commercial and industrial work, with reinforcement per engineered plans." },
        { question: "Do you handle permits and inspections?", answer: "Yes — we coordinate all necessary permits and inspections for foundation projects across the OKC metro." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We serve Edmond (~30–40 min north), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City — based at 7004 S Indiana Ave in south OKC." },
      ]}
    />
  );
}
