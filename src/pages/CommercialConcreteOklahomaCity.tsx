import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="commercial-concrete-oklahoma-city"
      localExpertiseNote="Oklahoma City's expansive clay puts heavy pressure on large-format slabs, dock aprons, and parking surfaces. Commercial base prep here means 6+ inches of compacted, proof-rolled aggregate and engineered joint spacing — the details that keep a slab from cracking under loaded trucks and forklift traffic."
      metaTitle="Commercial Concrete Contractors Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete contractors in Oklahoma City. Warehouse floors, retail pads, loading docks, equipment pads, curb & gutter, and parking lots. 4,000+ PSI. Free estimate: (405) 458-4805."
      eyebrow="OKC Metro · Commercial Concrete · Licensed & Insured"
      title="Commercial Concrete in"
      titleAccent="Oklahoma City."
      description='Commercial concrete contractors in Oklahoma City — warehouse floors, retail pads, loading docks, equipment slabs, and site work across the OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Commercial concrete is unforgiving — a slab that fails under forklift traffic or a dock that spalls under loaded trailers shuts down your operation and costs far more to fix than to build right. FDZ Construction LLC pours commercial-grade concrete for businesses across the Oklahoma City metro using 4,000+ PSI mixes, engineered reinforcement, and base preparation built for heavy, sustained loads. This page is the hub for our commercial work; for parking surfaces specifically, see our dedicated <a href='/parking-lots-oklahoma-city'>parking lot page</a>."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏭",
          title: "Warehouse & Industrial Floors",
          description: "Heavy-duty 6–8 inch slabs with engineered rebar schedules for forklift traffic, equipment loads, and industrial operations. Smooth or burnished finish options.",
        },
        {
          icon: "🅿️",
          title: "Parking Lots",
          description: "Commercial parking lot construction with proper drainage, ADA-compliant accessible spaces, joint sealing, and 5–6 inch slabs — see our dedicated parking lot page.",
        },
        {
          icon: "🏪",
          title: "Retail Pads & Storefronts",
          description: "Foundation pads and flatwork for retail buildings, restaurants, and commercial storefronts. Coordinated with general contractors and city inspectors.",
        },
        {
          icon: "📦",
          title: "Loading Docks & Aprons",
          description: "Heavy-duty loading dock slabs and truck aprons reinforced for repeated heavy vehicle loads. Sloped for drainage.",
        },
        {
          icon: "🛣️",
          title: "Commercial Curb & Gutter",
          description: "City-spec curb and gutter for parking lots and commercial developments. Standard barrier, mountable, and valley gutter profiles.",
        },
        {
          icon: "🏗️",
          title: "Equipment Pads & Foundations",
          description: "Reinforced concrete pads for HVAC units, generators, dumpster pads, and heavy commercial equipment. Sized and reinforced per specifications.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (5,000+ PSI for industrial)" },
        { label: "Slab Thickness", value: "5–8 inches depending on use and load requirements" },
        { label: "Reinforcement", value: "Rebar per engineered specifications, tied at intersections" },
        { label: "Base & Compaction", value: "6+ inch compacted aggregate, proof-rolled for commercial loads" },
        { label: "Joint Layout", value: "Engineered joint spacing, saw-cut within 24 hrs and sealed" },
        { label: "ADA Compliance", value: "Accessible parking, ramps, and walkways per code" },
        { label: "Finish", value: "Broom, smooth/steel-trowel, or burnished per spec and use" },
        { label: "Cure Time", value: "Foot traffic 24–48 hrs · equipment ~7 days · full strength ~28 days" },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Built for Heavy",
          titleAccent: "Commercial Use.",
          content: [
            "<strong>Commercial concrete contractors in Oklahoma City</strong> — FDZ Construction pours warehouse floors, retail pads, equipment slabs, loading docks, and site flatwork for property owners, developers, and general contractors across the OKC metro.",
            "Commercial slabs require thicker pours, higher PSI concrete, and engineered reinforcement to handle forklift traffic, heavy equipment, and sustained loads that would crack a residential slab. Every commercial project starts with a proper site assessment, soil testing when needed, and a pour plan that accounts for joint spacing, drainage, and the specific loads of your operation.",
            "We work the way commercial jobs need to run — coordinated with your engineer and GC, on schedule with other trades, and inspected at each required stage. For parking surfaces we keep a dedicated <a href='/parking-lots-oklahoma-city'>parking lot page</a>, and we also handle <a href='/foundations-oklahoma-city'>commercial foundations</a> for the buildings those slabs serve.",
          ],
          stats: [
            { value: "5–8\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "GC", label: "Coordination" },
          ],
        },
        {
          eyebrow: "Commercial Pricing",
          title: "What Commercial Concrete Costs",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "<strong>Commercial concrete in Oklahoma City</strong> runs roughly $7–$14 per square foot depending on thickness, reinforcement, and finish requirements. Larger pours typically come in at lower per-square-foot rates, and tear-out or specialty finishes are quoted separately.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Warehouse floor", "5,000 sq ft", "<strong>$35,000–$70,000</strong>", "6\", 4,000 PSI, rebar"],
              ["Retail pad", "2,500 sq ft", "<strong>$17,500–$35,000</strong>", "5\", smooth finish"],
              ["Equipment slab", "400 sq ft", "<strong>$3,200–$5,600</strong>", "6–8\", heavy rebar"],
              ["Loading dock", "1,000 sq ft", "<strong>$8,000–$14,000</strong>", "6\", reinforced"],
              ["Commercial parking lot", "5,000 sq ft", "<strong>$35,000–$60,000</strong>", "5–6\", ADA compliant"],
            ],
          },
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Commercial Concrete Challenges",
          titleAccent: "in Oklahoma City.",
          content: [
            "Oklahoma City's expansive clay soil creates unique challenges for commercial concrete. The swell-shrink cycle from seasonal moisture changes puts tremendous pressure on large-format slabs, dock aprons, and parking surfaces.",
            "The most common commercial concrete failures are caused by inadequate base preparation, missing or undersized reinforcement, and poor joint layout. On commercial projects these failures are expensive to fix and disruptive to your business — often requiring you to shut down a dock or section of floor to repair it.",
            "Proper commercial base prep means 6+ inches of compacted, proof-rolled aggregate, engineered rebar schedules, and joint spacing designed for the slab dimensions. Every commercial project FDZ Construction handles follows these standards.",
          ],
        },
      ]}
      processEyebrow="How a Commercial Pour Runs"
      processTitle="From Plans to"
      processTitleAccent="Sealed Slab."
      processIntro="Commercial work has to fit your build schedule and pass inspection. Here's how we run a commercial pour from plan review to a cured, sealed slab."
      processSteps={[
        { title: "Scope & coordination", description: "We review plans and specs with your GC and engineer, confirm loads and joint layout, and lock in a pour schedule that fits the other trades." },
        { title: "Site prep & grading", description: "We excavate, grade for drainage, and prepare the subgrade so the slab sits on stable, properly shaped ground." },
        { title: "Base & compaction", description: "We install and compact 6+ inches of aggregate base and proof-roll it to confirm it will carry the design loads without settling." },
        { title: "Forming & reinforcement", description: "Forms are set to grade and the engineered rebar schedule, embeds, and dowels are placed and inspected before the trucks arrive." },
        { title: "Pour & finish", description: "We place 4,000+ PSI concrete in coordinated pours and finish to spec — broom, steel-trowel smooth, or burnished depending on use." },
        { title: "Joints, cure & seal", description: "Control joints are saw-cut within 24 hours, the slab is cured, joints and surface are sealed, and we walk it for final inspection." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Commercial Work We"
      projectTypesTitleAccent="Take On."
      projectTypesIntro="The most common commercial concrete projects we handle across the Oklahoma City metro:"
      projectTypes={[
        { title: "Warehouse & distribution floors", description: "Large-format reinforced floors built for forklift traffic, racking loads, and daily operations." },
        { title: "Industrial slabs & equipment foundations", description: "Heavy slabs and reinforced pads for machinery, generators, and process equipment." },
        { title: "Retail pads & storefront flatwork", description: "Building pads, sidewalks, and entry flatwork for retail, restaurant, and storefront builds." },
        { title: "Loading docks & truck aprons", description: "Reinforced dock slabs and aprons sloped for drainage and built for loaded-trailer traffic." },
        { title: "Commercial parking lots", description: "ADA-compliant parking lots and drive lanes — detailed on our dedicated parking lot page." },
        { title: "Curb, gutter & site flatwork", description: "City-spec curb and gutter, islands, and site sidewalks for commercial developments." },
        { title: "Dumpster & generator pads", description: "Reinforced enclosure pads and equipment slabs sized and located per plan." },
        { title: "Tilt-up & footing coordination", description: "Footing and slab work coordinated with tilt-up and structural crews on larger commercial builds." },
      ]}
      cityBlockIntro={`We provide commercial concrete throughout the Oklahoma City metro — warehouses, retail, and industrial sites in <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "How thick should a commercial concrete slab be?", answer: "Most commercial slabs require 5–6 inches minimum. Warehouse floors with forklift traffic or heavy equipment may require 6–8 inches with engineered rebar schedules." },
        { question: "How much does commercial concrete cost in OKC?", answer: "Commercial concrete runs roughly $7–$14 per square foot depending on thickness, reinforcement, and finish. Larger pours come in at lower per-square-foot rates; tear-out and specialty finishes are quoted separately." },
        { question: "What PSI concrete do you use for commercial work?", answer: "We specify 4,000 PSI minimum for commercial slabs and 5,000+ PSI for heavy industrial applications." },
        { question: "How long before we can use a new commercial slab?", answer: "Foot traffic is usually fine in 24–48 hours and light equipment after about 7 days. The slab reaches full design strength at around 28 days. We can phase pours to keep part of your operation running." },
        { question: "Do you handle large commercial pours?", answer: "Yes — we handle commercial pours from small retail pads to large warehouse floors and parking lots, coordinating with general contractors, site engineers, and building inspectors." },
        { question: "Do you work with general contractors?", answer: "Yes — we regularly coordinate with GCs on commercial projects. We follow your schedule, meet spec requirements, and coordinate with other trades on site." },
        { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs, curing methods, and scheduling to ensure quality in all seasons." },
        { question: "What areas do you serve for commercial work?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
