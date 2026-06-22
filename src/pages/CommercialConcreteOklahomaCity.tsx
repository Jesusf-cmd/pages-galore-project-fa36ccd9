import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialConcreteOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="commercial-concrete-oklahoma-city"
      localExpertiseNote="Oklahoma City's expansive clay puts heavy pressure on large-format slabs, dock aprons, and parking surfaces. Commercial base prep here means 6+ inches of compacted, proof-rolled aggregate and engineered joint spacing — the details that keep a slab from cracking under loaded trucks and forklift traffic."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Commercial Concrete Services in Oklahoma City",
        items: [
          {
            title: "Parking Lots",
            bullets: [
              "Layout for drainage, ADA-accessible parking, and traffic flow",
              "High-PSI mix for vehicle loads",
              "Expansion joint planning for large-area pours",
              // TODO: note whether FDZ does striping or refers out — add once confirmed
              "Striping coordination — contact us to discuss your project",
            ],
          },
          {
            title: "Warehouse and Industrial Slabs",
            bullets: [
              "Flat, level pours for racking systems and forklift traffic",
              "Thickness and PSI specified per load requirements",
              "Large-area pours coordinated with GC schedule",
            ],
          },
          {
            title: "Retail Pads and Site Concrete",
            bullets: [
              "Aprons, drive approaches, sidewalks, and entry pads",
              "ADA compliance for accessible routes",
              "Coordination with other site work trades",
            ],
          },
          {
            title: "Dock Pads and Loading Areas",
            bullets: [
              "Reinforced for heavy vehicle and equipment loads",
              "Drainage away from building entry",
            ],
          },
          {
            title: "Commercial Foundations",
            bullets: [
              "See our <a href='/foundations-oklahoma-city'>Foundations page</a> for full detail",
              "COI and bonding documentation available for bid process",
              "Coordination with GC and inspection schedule",
            ],
          },
        ],
      }}
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
          description: "Heavy-duty slabs with engineered rebar schedules for forklift traffic, equipment loads, and industrial operations. Smooth or burnished finish options.",
        },
        {
          icon: "🅿️",
          title: "Parking Lots",
          description: "Commercial parking lot construction with proper drainage, ADA-compliant accessible spaces, joint sealing — see our dedicated parking lot page.",
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
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Certificate of insurance and bonding documentation available as part of the bid process." },
        { icon: "🤝", title: "GC & Trade Coordination", description: "We coordinate with your project schedule and other trades on site. Set up to work within a GC's project timeline from day one." },
        { icon: "🏗️", title: "Commercial Mix Standard", description: "4,000+ PSI commercial mix standard; adjusted for specific load requirements. Engineered base and joint layout on every pour." },
        { icon: "📋", title: "Competitive Bid Turnaround", description: "Free on-site estimates and competitive bid turnaround. Call (405) 458-4805 or email jesus@fdzconstruction.com to discuss your project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: /* TODO: confirm exact figure or founding year */ "Over 8 years of commercial concrete experience in OKC's clay soil environment." },
        { icon: "🔒", title: "1-Year Workmanship Warranty", description: "Every commercial project we deliver is backed by a 1-year workmanship warranty." },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Built for General Contractors &",
          titleAccent: "Property Managers.",
          content: [
            "<strong>Commercial concrete contractors in Oklahoma City</strong> — FDZ Construction pours warehouse floors, retail pads, equipment slabs, loading docks, and site flatwork for property owners, developers, and general contractors across the OKC metro.",
            "We work the way commercial jobs need to run — coordinated with your engineer and GC, on schedule with other trades, and inspected at each required stage. Certificate of insurance and bonding documentation is available as part of the bid process. For parking surfaces we keep a dedicated <a href='/parking-lots-oklahoma-city'>parking lot page</a>, and we also handle <a href='/foundations-oklahoma-city'>commercial foundations</a> for the buildings those slabs serve.",
          ],
          stats: [
            { value: "5–8\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "GC", label: "Coordination" },
          ],
        },
        {
          eyebrow: "Commercial Pricing",
          title: "What Does Commercial Concrete Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Commercial concrete pricing depends on scope, square footage, PSI requirements, site access, and schedule coordination. We provide competitive bids with clear line items — call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to discuss your project.",
            "What we won't do: give you a number before we've seen the site and reviewed the plans. Every commercial project has variables — slab thickness, base depth, rebar schedule, joint layout, drainage — that affect cost. The estimate is free.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to schedule your free on-site estimate.",
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
        {
          eyebrow: "Get Started",
          title: "Request a Commercial",
          titleAccent: "Concrete Bid.",
          alt: true,
          content: [
            "We serve commercial properties across Oklahoma City (home base — fastest response), Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro including Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC.",
          ],
          // TODO: embed quote form here once document-upload feature ships
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/foundations-oklahoma-city' class='text-orange no-underline font-medium'>Foundations</a> — Commercial slab-on-grade and structural foundations for the buildings your site concrete serves.",
            "<a href='/sidewalks-oklahoma-city' class='text-orange no-underline font-medium'>Sidewalks &amp; Curb and Gutter</a> — Site sidewalks, ADA ramps, and curb work for commercial developments.",
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>Parking Lots</a> — Dedicated page for commercial parking lot design, layout, and construction.",
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
      projectGallery={{
        eyebrow: "Recent Commercial Work",
        title: "Real Commercial Concrete Projects",
        titleAccent: "in the OKC Metro.",
        intro: "A concrete forklift ramp we built inside a live warehouse in Guthrie, Oklahoma — poured around active racking and inventory, with a reinforced slab sized for repeated heavy equipment loads and a power trowel finish flush with the existing floor.",
        photos: [
          { src: "/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.jpg", alt: "Power trowel finishing a concrete forklift ramp pour inside a warehouse in Guthrie, Oklahoma" },
          { src: "/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.jpg", alt: "Crew troweling concrete forklift ramp in Guthrie, OK warehouse — forms and fresh pour visible" },
          { src: "/images/projects/forklift-ramp-finished-guthrie-oklahoma.jpg", alt: "Finished concrete forklift ramp in Guthrie, Oklahoma — smooth trowel finish flush with warehouse floor" },
        ],
      }}
      cityBlockIntro={`We provide commercial concrete throughout the Oklahoma City metro — warehouses, retail, and industrial sites in <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "How thick should a commercial concrete slab be?", answer: "Most commercial slabs require 5–6 inches minimum. Warehouse floors with forklift traffic or heavy equipment may require more, with engineered rebar schedules. We specify per your load requirements." },
        { question: "How much does commercial concrete cost in OKC?", answer: "Commercial concrete pricing depends on scope, square footage, PSI requirements, site access, and schedule coordination. We provide competitive bids with clear line items — call (405) 458-4805 or email jesus@fdzconstruction.com to discuss your project." },
        { question: "What PSI concrete do you use for commercial work?", answer: "We specify 4,000 PSI minimum for commercial slabs and 5,000+ PSI for heavy industrial applications." },
        { question: "How long before we can use a new commercial slab?", answer: "Foot traffic is usually fine in 24–48 hours and light equipment after about 7 days. The slab reaches full design strength at around 28 days. We can phase pours to keep part of your operation running." },
        { question: "How quickly can you turn around a bid for a commercial project?", answer: "Contact us with project details and we'll schedule an on-site visit promptly. Bid turnaround depends on project complexity." },
        { question: "Do you work as a sub-contractor on GC-managed projects?", answer: "Yes. We're set up to work within a GC's project schedule, coordinate with other trades on site, and provide required documentation (COI, bonding) as part of the sub process." },
        { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs, curing methods, and scheduling to ensure quality in all seasons." },
        { question: "What areas do you serve for commercial work?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC — fastest response for OKC projects." },
      ]}
    />
  );
}
