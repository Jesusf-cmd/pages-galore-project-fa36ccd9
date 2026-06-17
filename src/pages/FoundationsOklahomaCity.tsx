import ServicePage from "@/components/ServicePageTemplate";

export default function FoundationsOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="foundations-oklahoma-city"
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
          eyebrow: "Foundation Pricing",
          title: "Cost of Foundations in",
          titleAccent: "Oklahoma City.",
          alt: true,
          content: [
            "Foundation pricing depends on project size, depth, reinforcement, site access, excavation conditions, and concrete volume. Residential slab-on-grade typically runs $9–$14 per square foot; commercial foundations are custom-quoted from engineered plans.",
          ],
          table: {
            headers: ["Service", "Typical Range", "Notes"],
            rows: [
              ["Residential slab-on-grade", "$9–$14 per sq ft", "Depends on size, depth, reinforcement"],
              ["Garage / shop slab", "$8–$12 per sq ft", "Thickened edges, rebar reinforced"],
              ["Stem wall & footing", "Custom quoted", "Below frost line, per soil conditions"],
              ["Commercial slab-on-grade", "Custom quoted", "Engineered rebar, 6\"+ base"],
              ["Retail pad / footings", "Custom quoted", "Engineered plans required"],
            ],
          },
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
      cityBlockIntro={`We pour residential and commercial concrete foundations throughout the Oklahoma City metro, including <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects. Every foundation is engineered for Oklahoma's clay soil conditions." },
        { question: "Do you build commercial foundations?", answer: "Yes — we pour commercial slab-on-grade for warehouses, footings and pads for retail buildings, and structural foundations for developments, coordinated with engineers, GCs, and inspectors." },
        { question: "How much does a foundation cost in OKC?", answer: "Residential slab-on-grade typically runs $9–$14 per square foot depending on size, depth, and reinforcement. Commercial foundations are custom-quoted from engineered plans." },
        { question: "How deep should footings be in Oklahoma?", answer: "Oklahoma code requires footings below the frost line — typically 18–24 inches deep. On expansive clay, we may go deeper based on soil conditions and load." },
        { question: "How long before I can build on a new foundation?", answer: "Forms can usually be stripped in 1–2 days and framing often starts around 7 days, but concrete reaches full design strength at about 28 days. We'll give you a clear schedule based on your mix and the weather." },
        { question: "What concrete strength do you use for foundations?", answer: "We specify 4,000 PSI minimum for residential foundations and 5,000+ PSI for commercial and industrial work, with reinforcement per engineered plans." },
        { question: "Do you handle permits and inspections?", answer: "Yes — we coordinate all necessary permits and inspections for foundation projects across the OKC metro." },
        { question: "Do you serve areas outside Oklahoma City?", answer: "Yes. We serve Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
