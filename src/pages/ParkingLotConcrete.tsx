import ServicePage from "@/components/ServicePageTemplate";

export default function ParkingLotConcrete() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="parking-lots-oklahoma-city"
      localExpertiseNote="OKC's expansive clay subgrade moves with moisture — if the sub-base wasn't properly compacted and the slab wasn't designed for that movement, parking lot failure starts from below the surface, not above it. We evaluate sub-base conditions before recommending repair or replacement."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Concrete Parking Lot Services in Oklahoma City",
        items: [
          {
            title: "New Parking Lot Installation",
            bullets: [
              "Site grading for drainage and ADA-compliant slopes",
              "4,000+ PSI concrete mix standard for vehicle loads",
              "Reinforcement sized to expected traffic and load",
              "Expansion joint planning for large-area pours",
              "ADA-accessible parking stall layout",
              "Curb and gutter installation",
              // TODO: confirm whether FDZ handles striping directly or refers out — update once confirmed
              "Striping coordination — contact us to discuss your project",
            ],
          },
          {
            title: "Parking Lot Repair and Partial Replacement",
            bullets: [
              "Section removal and replacement for cracked or failed areas",
              "Joint sealing to prevent water intrusion and further deterioration",
              "Surface restoration where full replacement isn't warranted",
              "We assess the sub-base condition before recommending repair vs. replacement — OKC's expansive clay can cause slab failure from below, not just surface wear",
            ],
          },
          {
            title: "Full Parking Lot Replacement",
            bullets: [
              "Full demolition and removal of existing concrete or asphalt",
              "Sub-base re-evaluation and correction before new pour",
              "Re-grading for drainage improvements if the original lot had pooling or drainage issues",
              "New reinforced pour with updated ADA layout where required",
            ],
          },
          {
            title: "Concrete Curb and Gutter",
            bullets: [
              "Perimeter curb and gutter for drainage routing",
              "ADA curb ramps and accessible routes",
              "Slipform for longer runs; hand-formed for custom sections",
              "See also our <a href='/sidewalks-oklahoma-city'>Sidewalks &amp; Curb and Gutter page</a>",
            ],
          },
          {
            title: "ADA Compliance",
            bullets: [
              "Accessible parking stall count and placement per ADA requirements",
              "Van-accessible stall dimensions",
              "Accessible route from parking to building entry",
              "Curb ramp slopes and landing dimensions",
              "We confirm ADA layout requirements for your specific project before design",
            ],
          },
          {
            title: "Commercial Drives and Approaches",
            bullets: [
              "Entry and exit drives from public right-of-way",
              "Service drives and loading dock approaches",
              "Reinforced for truck and equipment loads",
              "Coordinate with city right-of-way requirements where applicable",
            ],
          },
        ],
      }}
      metaTitle="Concrete Parking Lot Contractors Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete parking lot installation and repair in Oklahoma City. ADA-compliant layouts, 4,000+ PSI mix, curb and gutter, striping coordination. Licensed, bonded, insured. Call (405) 458-4805."
      eyebrow="OKC Metro · Commercial Parking Lots · Licensed & Insured"
      title="Concrete Parking Lot Contractors in"
      titleAccent="Oklahoma City, OK."
      description='Commercial concrete parking lot installation, repair, and replacement — ADA-compliant layouts, 4,000+ PSI mix, curb and gutter. Serving OKC metro. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="<strong>A failed parking lot doesn't just look bad — it costs your business in liability claims, ADA violations, and customer turnover.</strong> Crumbling apron edges, ponding water that ices in winter, missing ADA-compliant stalls, faded striping over hairline cracks — every one of these is solvable upstream with the right base prep, drainage, joint layout, and PSI for the loads you actually carry. We pour and rebuild commercial parking lots across the OKC metro for property managers, business owners, and GCs. Engineered base, 4,000+ PSI mix, ADA-compliant layout, curb and gutter to city spec, striping coordination. Licensed, bonded, and insured in Oklahoma — COI and bonding documentation as part of the bid process."
      serviceLabel="Parking Lot"
      serviceCards={[
        {
          icon: "🅿️",
          title: "New Parking Lot Construction",
          description: "Full-build commercial lots from grading to curb and gutter — drainage engineering, compacted base, reinforced slabs, and ADA-compliant accessible spaces laid out to code.",
        },
        {
          icon: "♻️",
          title: "Parking Lot Replacement",
          description: "Tear-out and repour of failed concrete or asphalt lots. We remove the old surface, evaluate the sub-base, correct drainage, and pour a reinforced concrete lot built to last.",
        },
        {
          icon: "🛣️",
          title: "Curb, Gutter & Islands",
          description: "Perimeter curb and gutter, landscape islands, and drainage channels. Slipform for longer runs; hand-formed for custom sections and ADA ramps.",
        },
        {
          icon: "♿",
          title: "ADA Accessible Stalls",
          description: "Code-compliant accessible stalls, van-accessible dimensions, accessible routes, and curb ramp slopes — confirmed to current ADA requirements before layout is finalized.",
        },
        {
          icon: "📦",
          title: "Loading & Truck Areas",
          description: "Reinforced sections for loading zones, truck aprons, dumpster pads, and drive lanes built for repeated heavy-axle loads.",
        },
        {
          icon: "🔧",
          title: "Repair & Joint Sealing",
          description: "Section replacement for failed areas, joint sealing to stop water intrusion, and sub-base evaluation before recommending repair vs. full replacement.",
        },
      ]}
      specs={[
        { label: "Slab Thickness", value: "5–6 inches standard parking; 6–8 inches at loading, truck, and dumpster areas" },
        { label: "Concrete Strength", value: "4,000 PSI minimum; higher for heavy truck or equipment traffic where needed" },
        { label: "Reinforcement", value: "Rebar grid on chairs sized per load requirements" },
        { label: "Base & Compaction", value: "6+ inch compacted aggregate over proof-rolled subgrade" },
        { label: "Drainage & Grading", value: "Positive slope to inlets, curb, and gutter — no ponding" },
        { label: "ADA Compliance", value: "Accessible stalls, van-accessible placement, ramps per current ADA" },
        { label: "Joints", value: "Control joints saw-cut within 24 hrs; isolation joints at fixed objects, sealed" },
        { label: "Cure Time", value: "Foot traffic 24–48 hrs · light vehicles ~7 days · full load rating ~28 days" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Certificate of insurance and bonding documentation available as part of the bid process. Set up to work as a sub-contractor on GC-managed projects." },
        { icon: "🤝", title: "GC & Trade Coordination", description: "We coordinate with your project schedule and other trades on site. Timeline changes are communicated before they happen — not after." },
        { icon: "♿", title: "ADA Compliance Built In", description: "Stall count, van-accessible placement, curb ramp slopes, and accessible route continuity are confirmed before we finalize any layout — not treated as an afterthought." },
        { icon: "🧱", title: "Sub-Base Evaluation Before Recommendation", description: "OKC's expansive clay means parking lot failures often start below the slab. We evaluate sub-base conditions before recommending repair vs. replacement — a repair on a failed base is money wasted." },
        { icon: "📋", title: "Clear Bid Scope", description: "Our proposals define exactly what's included — demolition, sub-base prep, reinforcement, concrete thickness, ADA layout, curb and gutter, and cleanup. No hidden line items." },
        { icon: "📅", title: "8+ Years of Commercial Concrete Experience", description: /* TODO: confirm exact figure or founding year */ "Over 8 years of commercial concrete experience across the OKC metro. 2-year workmanship warranty on all parking lot work." },
      ]}
      sections={[
        {
          eyebrow: "For GCs & Property Managers",
          title: "What Property Managers and GCs Should Know",
          titleAccent: "Before Hiring a Parking Lot Contractor.",
          content: [
            "<strong>We provide a clear bid scope.</strong> Our proposals define exactly what's included — demolition, sub-base prep, reinforcement, concrete thickness, ADA layout, curb and gutter, and cleanup. You'll know what you're getting before you sign.",
            "<strong>We coordinate with your schedule and other trades.</strong> Parking lot work affects your tenants, customers, and other contractors on site. We work within your project schedule, phase work to minimize disruption where possible, and communicate timeline changes before they happen — not after.",
            "<strong>Documentation available for the bid process.</strong> Certificate of insurance and bonding documentation are available as part of the bid process. We're set up to work as a sub-contractor on GC-managed projects.",
            "<strong>We evaluate the sub-base, not just the surface.</strong> OKC's expansive clay soil means parking lot failures often originate below the slab, not at the surface. Before recommending repair vs. replacement, we evaluate sub-base conditions — a slab repair on a failed base is money wasted.",
            "<strong>ADA compliance is built into every layout.</strong> Stall count, van-accessible placement, curb ramp slopes, and accessible route continuity are confirmed before we finalize the layout.",
          ],
        },
        {
          eyebrow: "Oklahoma Soil",
          title: "Oklahoma City Soil and",
          titleAccent: "Parking Lot Longevity.",
          content: [
            "Oklahoma's expansive clay and shale base creates a challenge that most parking lot failures trace back to: the sub-base moves with moisture, and if the concrete wasn't designed around that movement, the slab cracks and fails from below regardless of surface quality. This is especially relevant for parking lots because large, continuous slabs have more cumulative exposure to soil movement than smaller residential pours.",
            "Proper sub-base preparation — compacted aggregate base, drainage routing, and appropriate joint spacing for large-area pours — is what separates a parking lot that lasts 30 years from one that needs patching within five.",
          ],
        },
        {
          eyebrow: "Parking Lot Pricing",
          title: "How Much Does a Concrete Parking Lot Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Commercial parking lot costs depend on square footage, existing site conditions, sub-base preparation requirements, ADA layout complexity, curb and gutter scope, and schedule requirements. We provide competitive bids with a clear, itemized scope — call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to discuss your project.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to discuss your project scope.",
        },
        {
          eyebrow: "Get Started",
          title: "Request a Commercial",
          titleAccent: "Parking Lot Bid.",
          alt: true,
          content: [
            "We serve commercial properties across Oklahoma City (home base — fastest response), Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro including Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC.",
          ],
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Warehouse slabs, dock pads, retail site concrete, and equipment pads.",
            "<a href='/sidewalks-oklahoma-city' class='text-orange no-underline font-medium'>Sidewalks &amp; Curb and Gutter</a> — Often part of the same commercial site scope as parking lot work.",
            "<a href='/foundations-oklahoma-city' class='text-orange no-underline font-medium'>Foundations</a> — Commercial foundation work for the buildings your parking lot serves.",
          ],
        },
      ]}
      processEyebrow="How a Lot Gets Built"
      processTitle="From Assessment to"
      processTitleAccent="Finished Lot."
      processIntro="A parking lot is a drainage and traffic-flow problem before it's a concrete problem. Here's how we take a commercial lot from first site visit to a finished surface that passes inspection."
      processSteps={[
        { title: "On-site assessment", description: "We walk the property, evaluate existing conditions, sub-base, drainage, and ADA layout before providing a proposal." },
        { title: "Proposal", description: "Clear scope, defined deliverables, no hidden line items. We explain what's included and why." },
        { title: "Scheduling", description: "We coordinate around your operational needs and other trades on site. You get a schedule before work starts." },
        { title: "Site prep and grading", description: "Proper grading for drainage is set before any concrete is placed." },
        { title: "Forming and reinforcement", description: "Forms set to ADA slopes and drainage grades; reinforcement placed per load requirements." },
        { title: "Pour and finish", description: "4,000+ PSI mix, properly cured before opening to traffic." },
        { title: "Curb, gutter, and ADA ramps", description: "Installed per layout plan — slipform for longer runs, hand-formed for custom sections." },
        { title: "Cleanup and close-out", description: "Site is left clean. Job photos provided on completion." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Parking Lots We"
      projectTypesTitleAccent="Build."
      projectTypesIntro="The most common commercial lot projects we handle across the Oklahoma City metro:"
      projectTypes={[
        { title: "Retail & shopping center lots", description: "High-visibility lots with clean traffic flow, maximized stall counts, and ADA access at every storefront." },
        { title: "Warehouse & industrial yards", description: "Thick, reinforced slabs and drive lanes engineered for loaded trucks, trailers, and forklift traffic." },
        { title: "Office & medical building lots", description: "Durable, professional lots with proper drainage, accessible parking, and clear wayfinding." },
        { title: "Church & school parking", description: "Large-capacity lots built for heavy weekend and event-day surges, with safe pedestrian routes." },
        { title: "HOA & multifamily lots", description: "Drive aisles, resident parking, and dumpster pads built to reduce recurring repair assessments." },
        { title: "Restaurant & drive-thru lanes", description: "Heavy-duty drive-thru lanes and stacking areas that resist cracking from constant slow, heavy traffic." },
        { title: "Loading docks & truck aprons", description: "Reinforced sections for repeated heavy-axle loads — sloped for drainage away from building entry." },
        { title: "Asphalt-to-concrete conversions", description: "Replacing patched asphalt with a concrete lot built to outlast it significantly." },
      ]}
      cityBlockIntro={`We build and replace commercial concrete parking lots throughout the Oklahoma City metro — for retail, warehouse, office, and industrial properties in <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "Do you work as a sub-contractor on GC-managed projects?", answer: "Yes. We're set up to work within a GC's project schedule, coordinate with other trades on site, and provide required documentation — COI, bonding information — as part of the sub process." },
        { question: "How quickly can you turn around a bid for a parking lot project?", answer: "Contact us with project details and we'll schedule an on-site assessment promptly. Bid turnaround depends on project complexity — we'll give you a timeline when we talk." },
        { question: "Can you provide a certificate of insurance and bonding documentation?", answer: "Yes, as part of the bid process." },
        { question: "Do you handle ADA compliance in the parking lot layout?", answer: "Yes. Stall count, van-accessible placement, curb ramp slopes, and accessible route continuity are part of every parking lot layout we design." },
        { question: "How long before a new concrete parking lot can be opened to traffic?", answer: "Concrete parking lots typically require 7 days minimum before light vehicle traffic, and up to 28 days for full structural cure. We provide a specific timeline as part of the project schedule." },
        { question: "Why do concrete parking lots fail in Oklahoma?", answer: "Most failures in OKC trace back to sub-base issues, not surface quality. Oklahoma's expansive clay soil moves significantly with moisture — if the sub-base wasn't properly compacted and the slab wasn't designed for that movement, failure can start from below the slab surface. We evaluate sub-base conditions before recommending repair or replacement." },
        // TODO: confirm whether FDZ handles striping directly or refers out — update this answer once confirmed
        { question: "Do you do parking lot striping?", answer: "Striping coordination is part of the project scope — contact us to discuss your specific project and we'll confirm what's included or referred out." },
        { question: "What PSI concrete do you use for parking lots?", answer: "4,000+ PSI standard for commercial vehicle loads. Adjusted upward for heavy truck or equipment traffic where needed." },
        { question: "What areas do you serve for parking lot work?", answer: "We serve the entire OKC metro — Oklahoma City (home base, fastest response), Edmond (~30–40 min north), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
