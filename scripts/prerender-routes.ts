/**
 * Route metadata for static prerendering.
 * Each route gets its own index.html with proper <title>, <meta>, and visible content
 * so crawlers see real content instead of an empty <div id="root"></div>.
 */

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  h1: string;
  content: string; // key visible text for crawlers
}

const BASE = "https://fdzconstruction.com";

export const routes: PrerenderRoute[] = [
  {
    path: "/",
    title: "Concrete Contractors Oklahoma City | FDZ Construction LLC | Free Estimates",
    description: "Oklahoma City's concrete contractor for driveways, patios, slabs & more. Licensed & insured. Serving OKC metro. Call (405) 458-4805 for a free estimate.",
    h1: "Oklahoma City Concrete Contractors",
    content: "FDZ Construction LLC is a licensed and insured concrete contractor serving the Oklahoma City metro area. We specialize in driveways, patios, slabs, foundations, stamped concrete, retaining walls, sidewalks, and commercial concrete work. Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/driveways-oklahoma-city",
    title: "Concrete Driveways Oklahoma City | FDZ Construction LLC",
    description: "Professional concrete driveway installation in Oklahoma City. Licensed & insured. Broom finish, stamped, and reinforced driveways. Free estimates — call (405) 458-4805.",
    h1: "Concrete Driveway Installation in Oklahoma City, OK",
    content: "FDZ Construction LLC provides professional concrete driveway installation in Oklahoma City and surrounding areas. We build durable, clean, long-lasting driveways for homeowners, builders, and property owners who need dependable concrete work done right. Our process starts with site evaluation, grading, and preparation of the subgrade. We then install the required forms, reinforcement, and concrete placement based on the needs of the project. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/patios-oklahoma-city",
    title: "Concrete Patios, Slabs & Stamped Concrete Oklahoma City | FDZ Construction LLC",
    description: "Concrete patio, slab, and stamped concrete contractors in Oklahoma City. Broom, smooth, stamped finishes. Garage floors, shop slabs, decorative patios. Free estimate.",
    h1: "Concrete Patios, Slabs & Stamped Concrete OKC",
    content: "Patios, garage floors, shop slabs, and stamped decorative concrete for Oklahoma City homeowners — properly graded, reinforced for OKC clay soil. We offer broom finish, smooth finish, and stamped decorative options including ashlar slate, random flagstone, herringbone brick, and wood plank patterns. Professional concrete patio and slab contractors serving the OKC metro area. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/foundations-oklahoma-city",
    title: "Concrete Foundations Oklahoma City | Residential & Commercial | FDZ Construction LLC",
    description: "Concrete foundation contractor in Oklahoma City. Slab-on-grade, stem walls, footings, garage pads, and commercial foundations engineered for clay soil. Free estimate: (405) 458-4805.",
    h1: "Concrete Foundations in Oklahoma City",
    content: "FDZ Construction LLC builds residential and commercial concrete foundations in Oklahoma City. Slab-on-grade for homes and warehouses, stem walls, continuous and spread footings, garage and shop slabs, and retail pad footings — engineered for proper preparation, reinforcement, and long-term structural performance on Oklahoma's expansive clay soil. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/sidewalks-oklahoma-city",
    title: "Concrete Sidewalks, Curb & Gutter Oklahoma City | FDZ Construction LLC",
    description: "Concrete sidewalk and curb & gutter contractors in Oklahoma City. New construction, city right-of-way, ADA-compliant ramps, city-spec curb work. Free estimate.",
    h1: "Concrete Sidewalks, Curb & Gutter Oklahoma City",
    content: "Sidewalks, walkways, curb and gutter installation in Oklahoma City. New construction, city right-of-way replacements, ADA-compliant ramps, and city-spec curb work for residential and commercial projects. $6–$10/sq ft for sidewalks, $18–$30/linear ft for curb work. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/commercial-concrete-oklahoma-city",
    title: "Commercial Concrete Contractors Oklahoma City | FDZ Construction LLC",
    description: "Commercial concrete contractors in Oklahoma City. Warehouse floors, parking lots, retail pads, industrial slabs, curb & gutter. 4,000+ PSI. Free estimate: (405) 458-4805.",
    h1: "Commercial Concrete Contractors in Oklahoma City",
    content: "Commercial concrete contractors in Oklahoma City — warehouse floors, parking lots, retail pads, industrial slabs, and site work across the OKC metro. Heavy-duty commercial slabs engineered for heavy loads and high traffic. 4,000+ PSI concrete. ADA-compliant parking lots. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/parking-lots-oklahoma-city",
    title: "Concrete Parking Lot Contractors Oklahoma City | FDZ Construction LLC",
    description: "Commercial concrete parking lot installation and repair in Oklahoma City. ADA-compliant layouts, reinforced slabs, curb and gutter, striping coordination. Licensed, bonded, insured. Call (405) 458-4805.",
    h1: "Concrete Parking Lot Contractors in Oklahoma City, OK",
    content: `FDZ Construction LLC provides commercial concrete parking lot installation, repair, and replacement for businesses, property managers, retail centers, churches, warehouses, and general contractors across the Oklahoma City metro. Licensed, bonded, and insured in Oklahoma. Certificate of insurance and bonding documentation available as part of the bid process.

Parking Lot Services: New parking lot installation — site grading for drainage and ADA-compliant slopes, 4,000+ PSI concrete mix standard for vehicle loads, reinforcement sized to expected traffic and load, expansion joint planning for large-area pours, ADA-accessible stall layout, curb and gutter installation. Parking lot repair and partial replacement — section removal and replacement for cracked or failed areas, joint sealing to prevent water intrusion, sub-base evaluation before recommending repair vs. replacement. Full parking lot replacement — full demolition and removal, sub-base re-evaluation and correction before new pour, re-grading for drainage improvements, new reinforced pour with updated ADA layout. Concrete curb and gutter — perimeter curb and gutter for drainage routing, ADA curb ramps and accessible routes, slipform for longer runs and hand-formed for custom sections. ADA compliance — accessible stall count and placement per ADA requirements, van-accessible stall dimensions, accessible route from parking to building entry, curb ramp slopes and landing dimensions. Commercial drives and approaches — entry and exit drives, service drives and loading dock approaches, reinforced for truck and equipment loads.

Why Choose FDZ Construction: Licensed, bonded, and insured in Oklahoma with COI and bonding documentation available for the bid process. We coordinate with your project schedule and other trades on site — timeline changes are communicated before they happen. ADA compliance is built into every layout before we finalize design. OKC's expansive clay means parking lot failures often start below the slab — we evaluate sub-base conditions before recommending repair vs. replacement. Our proposals define exactly what's included: demolition, sub-base prep, reinforcement, concrete thickness, ADA layout, curb and gutter, and cleanup. Over 8 years of commercial concrete experience across the OKC metro, with a 1-year workmanship warranty on all parking lot work.

Common Project Types: Retail and shopping center lots, warehouse and industrial yards, office and medical building lots, church and school parking, HOA and multifamily lots, restaurant and drive-thru lanes, loading docks and truck aprons, asphalt-to-concrete conversions.

Oklahoma City Soil: Oklahoma's expansive clay and shale base moves significantly with moisture. If the sub-base wasn't properly compacted and the slab wasn't designed for that movement, the lot cracks and fails from below regardless of surface quality. Proper sub-base preparation — compacted aggregate base, drainage routing, and appropriate joint spacing for large-area pours — is what separates a parking lot that lasts 30+ years from one that needs patching within five.

Cost: Costs vary by square footage, existing site conditions, sub-base preparation requirements, ADA layout complexity, curb and gutter scope, and schedule requirements. We provide free on-site estimates with a clear, itemized scope.

Process: On-site assessment — we walk the property, evaluate existing conditions, sub-base, drainage, and ADA layout. Proposal — clear scope, defined deliverables, no hidden line items. Scheduling — coordinate around your operational needs and other trades. Site prep and grading — proper drainage grades set before any concrete is placed. Forming and reinforcement — forms set to ADA slopes and drainage grades; reinforcement placed per load requirements. Pour and finish — 4,000+ PSI mix, properly cured before opening to traffic. Curb, gutter, and ADA ramps — installed per layout plan. Cleanup and close-out — site left clean, job photos provided on completion.

FAQ: We work as sub-contractors on GC-managed projects. Certificate of insurance and bonding documentation available as part of the bid process. ADA stall count, van-accessible placement, curb ramp slopes, and accessible route continuity are part of every parking lot layout. New concrete parking lots typically require 7 days minimum before light vehicle traffic and up to 28 days for full structural cure. OKC parking lot failures usually trace back to sub-base issues — Oklahoma's expansive clay soil moves significantly with moisture, and if the sub-base wasn't properly compacted, failure starts from below the slab surface.

Serving Oklahoma City (home base — fastest response), Edmond (~30–40 min north), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC. Call (405) 458-4805 or email jesus@fdzconstruction.com.`,
  },
  {
    path: "/retaining-walls-oklahoma-city",
    title: "Concrete Retaining Walls Oklahoma City | FDZ Construction LLC",
    description: "Concrete retaining wall installation and repair in Oklahoma City. Poured concrete and CMU block walls built for OKC's expansive clay soil — drainage-first design. Licensed, bonded, insured. Free estimates — (405) 458-4805.",
    h1: "Concrete Retaining Wall Contractors in Oklahoma City, OK",
    content: `FDZ Construction LLC builds and repairs concrete retaining walls across the Oklahoma City metro — poured concrete and CMU block walls designed around site conditions, slope, drainage, and soil type. Based in south OKC, licensed, bonded, and insured in Oklahoma. Every wall is backed by a 1-year workmanship warranty.

Retaining Wall Services: New retaining wall installation — site evaluation for slope, soil, and drainage before any design decisions; footing sized to wall height, load, and soil type; drainage planning including gravel backfill, weep holes, and French drain where needed; wall construction in poured concrete or CMU block depending on scope; backfill compacted in lifts. Retaining wall repair — leaning or bowing walls are almost always a drainage failure, not a material failure; we evaluate the cause before recommending repair vs. replacement; drainage correction included where inadequate drainage caused the original failure. Poured concrete retaining walls — monolithic structure with no block joints to shift or crack over time; best for taller walls, higher-load applications, and sites with severe soil movement; can be formed to follow curves and grade changes. CMU block retaining walls — concrete masonry unit construction, durable and cost-effective for mid-height walls; requires the same drainage planning as poured concrete. Decorative and landscape walls — lower-height walls for garden beds, landscape separation, and outdoor living areas; drainage planning is not skipped even on smaller walls.

Why Choose FDZ Construction: Licensed, bonded, and insured in Oklahoma with liability and workers comp on every project. Over 8 years of experience building retaining walls in Oklahoma's expansive clay soil. 1-year workmanship warranty on all retaining wall work. Drainage planning comes before footing depth, material choice, and cost — not after. Free on-site estimates: we evaluate your specific slope, soil, and drainage conditions. Based at 7004 S Indiana Ave in south OKC, serving the full metro.

Oklahoma City Soil: Oklahoma's Permian-age clay and shale base is among the most expansive soil in the country — it swells when wet and shrinks when dry, sometimes moving several inches across a single season. On any sloped lot, that movement creates lateral pressure against the wall constantly, not just during rain events. The biggest variable in retaining wall longevity in OKC is not the wall material — it is the drainage behind it. Water pressure that builds up in the soil behind an inadequately drained wall is the leading cause of wall failure in this region.

Wall Types: Gravity walls hold back soil using their own weight — suitable for shorter walls on moderate slopes with a properly sized footing and drainage. Poured concrete walls are the most versatile option — formed to any shape, height, or grade; preferred for taller walls, high-load applications, or severe soil movement. CMU block walls are durable and cost-effective for mid-height residential walls — still requires the same drainage planning. Segmental retaining walls use interlocking concrete block systems for lower-height landscape and garden applications. Note: walls over a certain height typically require an engineer's stamp — we confirm what your specific project requires.

Common Project Types: Slope stabilization, drainage and erosion control, parking lot and driveway grade changes, tiered and terraced landscape walls, foundation and structure protection, commercial site retaining walls, outdoor living walls, retaining wall repair and drainage correction.

Cost: Cost depends on wall height and length, material choice, site drainage requirements, soil conditions, equipment access, and whether engineering is required. Costs vary by scope, site conditions, and materials — we provide free on-site estimates with a clear scope before any work begins.

Process: Site evaluation — assess slope, soil type, drainage patterns, and what the wall needs to hold back. Drainage plan — gravel backfill depth, weep hole placement, and French drain routing planned before construction starts. Footing — sized and poured to the depth and width required for the wall height and soil conditions. Wall construction — poured concrete or CMU block built per the drainage plan. Backfill — compacted in lifts to avoid point-loading against the new wall. Final inspection — walkthrough with owner before leaving the job site.

FAQ: Retaining wall failures are almost always drainage failures — water pressure builds up in the soil behind a wall with inadequate drainage and pushes it out of place over time. Many areas require an engineer's stamp for walls over 4 feet — we confirm the specific requirement for your project location. Poured concrete creates a monolithic structure with no joints, preferred for taller walls and severe soil movement; CMU block is faster and more cost-effective for mid-height walls where load and height don't require a monolithic pour. A properly built wall with adequate drainage can last 50+ years. We handle the full scope — drainage plan, gravel backfill, weep holes, French drain where needed, and the wall itself.

Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC. Call (405) 458-4805 or email jesus@fdzconstruction.com for a free on-site estimate.`,
  },
  {
    path: "/oklahoma-city-concrete",
    title: "Concrete Contractor in Oklahoma City OK | FDZ Construction LLC",
    description: "Concrete contractor in Oklahoma City, OK — FDZ Construction LLC, based in south OKC. Driveways, patios, slabs & foundations. Licensed, bonded & insured. Free estimate: (405) 458-4805.",
    h1: "Concrete Contractor in Oklahoma City, OK",
    content: "FDZ Construction LLC is based in south Oklahoma City at 7004 S Indiana Ave, so OKC is the area we work most. We pour driveways, patios, slabs, foundations, and commercial concrete across the city. Oklahoma City broadly shares the metro's Permian-age clay and shale base, with flat terrain and the North Canadian River corridor running through, so drainage planning matters most on low-lying lots near the river. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/edmond-concrete",
    title: "Concrete Contractor in Edmond OK | FDZ Construction LLC",
    description: "Concrete contractor in Edmond, OK — driveways, patios, slabs, foundations & retaining walls across Edmond and Oklahoma County. FDZ Construction LLC. Call (405) 458-4805.",
    h1: "Concrete Contractor in Edmond, OK",
    content: "Edmond is one of the areas FDZ Construction works most outside our south OKC base. Edmond sits on the northern part of the Garber-Wellington aquifer, where the formations carry more sandstone than the rest of the metro, so soil can shift between sandy and clay-heavy across a single lot and the terrain has more rolling grade. We pour driveways, patios, slabs, foundations, and retaining walls. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/norman-ok-concrete",
    title: "Concrete Contractor in Norman OK | FDZ Construction LLC",
    description: "Concrete contractor in Norman, OK serving Cleveland County. Driveways, patios, slabs & foundations built for Norman's soil and drainage. FDZ Construction LLC. (405) 458-4805.",
    h1: "Concrete Contractor in Norman, OK",
    content: "FDZ Construction serves Norman and Cleveland County with driveways, patios, slabs, foundations, and retaining walls. Norman's position along the Canadian River means some lots sit on sandier, river-influenced soil that can transition to denser clay within a short distance, so we assess each lot before pouring. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/yukon-oklahoma-concrete",
    title: "Concrete Contractor in Yukon OK | FDZ Construction LLC",
    description: "Concrete contractor in Yukon, OK — driveways, slabs, foundations & commercial concrete in Canadian County. FDZ Construction LLC. (405) 458-4805.",
    h1: "Concrete Contractor in Yukon, OK",
    content: "Yukon sits on the west side of the metro in Canadian County, with flatter terrain than Edmond on the region's expansive clay base. A lot of the work here is in newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil. We pour driveways, patios, slabs, foundations, and commercial concrete. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/mustang-oklahoma-concrete",
    title: "Concrete Contractor in Mustang OK | FDZ Construction LLC",
    description: "Concrete contractor in Mustang, OK — driveways, patios, slabs & foundations for homeowners and new-construction subdivisions. FDZ Construction LLC. Call (405) 458-4805.",
    h1: "Concrete Contractor in Mustang, OK",
    content: "Mustang sits on the west side of the metro in Canadian County and shares Yukon's flatter terrain and the region's expansive clay base. A lot of the work here is on newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil. We pour driveways, patios, slabs, and foundations. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/moore-oklahoma-concrete",
    title: "Concrete Contractor in Moore OK | FDZ Construction LLC",
    description: "Concrete contractor in Moore, OK — driveways, patios, slabs & foundations in Cleveland County. Drainage-conscious flatwork. FDZ Construction LLC. Free estimate: (405) 458-4805.",
    h1: "Concrete Contractor in Moore, OK",
    content: "Moore sits just south of Oklahoma City in Cleveland County, on flat terrain over the metro's expansive clay base with limited natural runoff in low-lying areas. That makes slope-to-drain detailing matter more here than on higher ground. We pour driveways, patios, slabs, foundations, and sidewalks. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/midwest-city-oklahoma-concrete",
    title: "Concrete Contractor in Midwest City OK | FDZ Construction LLC",
    description: "Concrete contractor in Midwest City, OK — driveway replacement, patio slabs & sidewalk work in eastern Oklahoma County. FDZ Construction LLC. Call (405) 458-4805.",
    h1: "Concrete Contractor in Midwest City, OK",
    content: "FDZ Construction serves Midwest City in eastern Oklahoma County with driveway replacement, patio slabs, sidewalk work, and foundation work. Midwest City sits along Crutcho Creek and Cherry Creek, where flood risk rises during sustained rain from North Canadian River backwater, per the city's floodplain information, so grading and drainage are a priority near those corridors. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/del-city-oklahoma-concrete",
    title: "Concrete Contractor in Del City OK | FDZ Construction LLC",
    description: "Concrete contractor in Del City, OK — driveway replacement, patio slabs, sidewalks & retaining walls. FDZ Construction LLC. Call (405) 458-4805.",
    h1: "Concrete Contractor in Del City, OK",
    content: "Del City, bordered by Midwest City and south Oklahoma City, shares the same Crutcho Creek and Cherry Creek flood dynamic confirmed by the city's floodplain information, with flat terrain over the metro's expansive clay base. We provide driveway replacement, patio slabs, sidewalk work, and retaining walls. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/our-projects",
    title: "Our Concrete Projects | FDZ Construction LLC | Oklahoma City",
    description: "View completed concrete projects by FDZ Construction LLC in Oklahoma City, Edmond, Norman, and the OKC metro. Driveways, patios, foundations, and commercial work.",
    h1: "Our Concrete Projects",
    content: "View completed concrete projects by FDZ Construction LLC across the Oklahoma City metro area. Featured projects include driveway replacements, stamped concrete patios, commercial parking lots, residential foundations, retaining walls, and sidewalk installations in Edmond, Norman, Yukon, Mustang, Moore, and Oklahoma City. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/blog",
    title: "Concrete Tips & Guides for Oklahoma City | FDZ Construction LLC",
    description: "Expert concrete guides for Oklahoma City homeowners. Pricing, specifications, soil tips, and maintenance advice from FDZ Construction LLC.",
    h1: "Concrete Tips & Guides",
    content: "Expert concrete guides for Oklahoma City homeowners from FDZ Construction LLC. Topics include why concrete driveways crack in Oklahoma, cost of concrete in Oklahoma City, rebar vs wire mesh for concrete slabs, how thick a driveway should be, and the best time of year to pour concrete in OKC.",
  },
  {
    path: "/blog/why-concrete-driveways-crack-oklahoma",
    title: "Why Concrete Driveways Crack in Oklahoma | FDZ Construction LLC",
    description: "Five real reasons concrete driveways crack in Oklahoma — clay soil, bad base prep, missing rebar — and how to prevent every one of them.",
    h1: "Why Concrete Driveways Crack in Oklahoma",
    content: "Five real causes of concrete driveway cracking in Oklahoma and how to prevent them. Oklahoma City sits on some of the most expansive clay soil in the country. The most common causes include inadequate base preparation, missing or poorly placed reinforcement, missing or wrong control joints, wrong concrete mix, and drainage problems.",
  },
  {
    path: "/blog/cost-of-concrete-oklahoma-city-2026",
    title: "Cost of Concrete in Oklahoma City 2026 | FDZ Construction LLC",
    description: "Updated 2026 concrete pricing for Oklahoma City. Per square foot rates, typical project costs, and what drives price in the OKC market.",
    h1: "Cost of Concrete in Oklahoma City (2026 Guide)",
    content: "Standard residential concrete in OKC runs $6–$10 per square foot installed. Foundation work runs $9–$14. Stamped concrete runs $15–$22. Standard driveway installation in Oklahoma City (24×40): $5,760–$9,600. Patio slab OKC (20×20): $2,400–$4,000. Stamped patio (400 sq ft): $6,000–$8,800.",
  },
  {
    path: "/blog/rebar-vs-wire-mesh-concrete-slabs",
    title: "Rebar vs Wire Mesh for Concrete Slabs | FDZ Construction LLC",
    description: "Rebar vs wire mesh for concrete slabs in Oklahoma. Which your project actually needs on OKC clay soil — and why the choice matters long-term.",
    h1: "Rebar vs Wire Mesh for Concrete Slabs",
    content: "Which reinforcement does your Oklahoma City concrete project actually need? Wire mesh controls minor shrinkage cracking but does not add significant structural strength. Rebar provides tensile strength to resist bending forces from Oklahoma's expansive clay soil. Rebar adds $0.50–$1.50 per sq ft over wire mesh.",
  },
  {
    path: "/blog/how-thick-should-driveway-be-oklahoma",
    title: "How Thick Should a Driveway Be in Oklahoma | FDZ Construction LLC",
    description: "How thick should a concrete driveway be in Oklahoma? 4 inches is standard — but not always right. Learn when you need 5–6 inches instead.",
    h1: "How Thick Should a Driveway Be in Oklahoma?",
    content: "4 inches of concrete driveway on a properly prepared base is adequate for standard passenger vehicles. Heavy trucks, RVs, boat trailers, and commercial vehicles require 5–6 inches. The base matters as much as the thickness — a 6-inch slab on uncompacted soil will fail faster than a 4-inch slab on properly prepared aggregate base.",
  },
  {
    path: "/blog/best-time-of-year-to-pour-concrete-okc",
    title: "Best Time to Pour Concrete in OKC | FDZ Construction LLC",
    description: "Best time to pour concrete in Oklahoma City. Fall is ideal, but experienced OKC contractors work year-round with the right protocols.",
    h1: "Best Time of Year to Pour Concrete in OKC",
    content: "Fall and spring offer the best temperatures for concrete work in Oklahoma City. The ideal window is October through April. Summer pours require early morning scheduling and evaporation retarders. Winter pours below 40°F need heated water and insulated blankets. Spring storm season brings heavy rain risks.",
  },
  {
    path: "/driveways-edmond",
    title: "Concrete Driveway Contractors in Edmond, OK | FDZ Construction LLC",
    description: "Concrete driveway installation and replacement in Edmond, OK. Built for Edmond's mixed sandy and clay soil with proper base prep, 4,000 PSI mix, and rebar reinforcement. Free estimate: (405) 458-4805.",
    h1: "Concrete Driveway Contractors in Edmond, OK",
    content: "FDZ Construction LLC builds and replaces concrete driveways in Edmond, Oklahoma. Edmond sits on the northern Garber-Wellington formation where soil can shift between sandy and clay-heavy across a single lot — so we read each lot before specifying base depth and reinforcement. Engineered base, 4,000 PSI mix, rebar at mid-depth, drainage detailed for Edmond's rolling grade. Tear-out and replacement, new pours, and City of Edmond permit coordination. Typical 24×40 driveway $5,760–$9,600. Call (405) 458-4805 for a free on-site estimate.",
  },
  {
    path: "/driveways-norman",
    title: "Concrete Driveway Contractors in Norman, OK | FDZ Construction LLC",
    description: "Concrete driveway installation and replacement in Norman, OK. Built for Norman's mixed river-influenced soil with proper base prep and rebar reinforcement. Free estimate: (405) 458-4805.",
    h1: "Concrete Driveway Contractors in Norman, OK",
    content: "Concrete driveway contractors serving Norman, Oklahoma. Norman's spot along the Canadian River means some lots sit on sandier river-influenced soil that transitions to denser clay within a short distance — we read soil per-lot and adjust base depth, compaction, and rebar accordingly. Tear-out and replacement, new pours, City of Norman permit coordination, and drainage detailed for the actual lot grade. Typical 24×40 Norman driveway $5,760–$9,600. Call (405) 458-4805 for a free on-site estimate.",
  },
  {
    path: "/driveways-yukon",
    title: "Concrete Driveway Contractors in Yukon, OK | FDZ Construction LLC",
    description: "Concrete driveway installation and replacement in Yukon, OK. Built for Canadian County's clay base and new-subdivision graded fill. Free estimate: (405) 458-4805.",
    h1: "Concrete Driveway Contractors in Yukon, OK",
    content: "Concrete driveway contractors in Yukon, Oklahoma. A lot of Yukon work is in newer subdivisions on graded former agricultural land, where the quality of original fill and compaction matters as much as the native clay underneath. We proof-roll every Yukon base before pouring and re-prep where original grading compaction failed. Engineered base, 4,000 PSI mix, rebar at mid-depth, sawcut joints within 24 hours. Tear-out and replacement, new pours. Typical 24×40 driveway $5,760–$9,600. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/foundations-edmond",
    title: "Concrete Foundation Contractors in Edmond, OK | FDZ Construction LLC",
    description: "Concrete foundation contractors in Edmond, OK — slab-on-grade, stem walls, pier-and-thickened-slab on fill lots. Engineered for Edmond's mixed soil. Free estimate: (405) 458-4805.",
    h1: "Concrete Foundation Contractors in Edmond, OK",
    content: "Concrete foundation contractors serving Edmond, Oklahoma. Edmond's rolling terrain means many lots required fill to level grade — pouring slab-on-grade on top of fill risks differential settlement. We read each lot first: pier-and-thickened-slab on fill lots (piers drilled to undisturbed soil, typically 4–6 ft), slab-on-grade on undisturbed-native lots, stem walls where appropriate. Engineered base, 4,000 PSI mix, rebar per spec, drainage detailed. Builder coordination for new construction. Call (405) 458-4805 for a free on-site estimate.",
  },
  {
    path: "/retaining-walls-edmond",
    title: "Retaining Wall Contractors in Edmond, OK | FDZ Construction LLC",
    description: "Poured concrete and CMU retaining walls in Edmond, OK — drainage-first design for Edmond's rolling terrain and mixed soil. Repairs included. Free estimate: (405) 458-4805.",
    h1: "Retaining Wall Contractors in Edmond, OK",
    content: "Retaining wall contractors serving Edmond, Oklahoma. Almost every leaning Edmond wall we evaluate is a drainage failure, not a material failure — Edmond's rolling grade and mixed sandy-and-clay soil create variable lateral pressure that twists walls without uniform engineered drainage. We design drainage first: gravel backfill zone, weep hole placement, French drain routing. Then wall type and footing sized to site conditions. Poured concrete for taller walls and severe soil movement, CMU for mid-height. Repair and stabilization for leaning walls. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/patios-norman",
    title: "Concrete Patio Contractors in Norman, OK | FDZ Construction LLC",
    description: "Concrete patios, slabs, and stamped concrete in Norman, OK. Built for Norman's river-influenced soil with proper drainage and reinforcement. Free estimate: (405) 458-4805.",
    h1: "Concrete Patio Contractors in Norman, OK",
    content: "Concrete patio contractors serving Norman, Oklahoma. Most Norman patio failures we see are the slab pulling away from the house — caused by undersized reinforcement and missing drainage detailing at the slab-house joint. Norman's mixed sandy and clay soil amplifies the problem. We pour with engineered rebar sized for actual soil, slope minimum 1/8″ per foot away from house, sealed isolation joint at the foundation, sawcut control joints within 24 hours. Broom finish $6–$10/sq ft, stamped finishes $15–$22/sq ft. Call (405) 458-4805 for a free on-site estimate.",
  },
  {
    path: "/patios-edmond",
    title: "Concrete Patio Contractors in Edmond, OK | FDZ Construction LLC",
    description: "Concrete patios, slabs, and stamped concrete in Edmond, OK. Built for Edmond's mixed soil and rolling grade with proper drainage. Free estimate: (405) 458-4805.",
    h1: "Concrete Patio Contractors in Edmond, OK",
    content: "Concrete patio contractors serving Edmond, Oklahoma. Most Edmond patios fail at the grade transition or the slab-house joint — both upstream issues caused by spec'ing a flat patio onto a rolling lot or skipping drainage detailing. We pour Edmond patios with rebar sized for mixed sandy and clay soil, minimum 1/8″ per foot slope away from the house, sealed isolation joint at the foundation, and sawcut control joints within 24 hours. Broom finish $6–$10/sq ft, stamped finishes $15–$22/sq ft. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/foundations-norman",
    title: "Concrete Foundation Contractors in Norman, OK | FDZ Construction LLC",
    description: "Concrete foundation contractors in Norman, OK — slab-on-grade, stem walls, pier foundations for Norman's river-influenced soil variability. Free estimate: (405) 458-4805.",
    h1: "Concrete Foundation Contractors in Norman, OK",
    content: "Concrete foundation contractors serving Norman, Oklahoma. Cracked Norman foundations almost always show a crack along a soil transition line — sandy river-influenced section meeting denser clay. We read the soil across the entire footprint before specifying type: slab-on-grade for uniform-soil lots, pier-and-thickened-slab for variable-soil or fill lots (piers drilled past the soil transition to bearing material). Engineered base, 4,000 PSI mix, rebar per spec, drainage detailed around the perimeter. Builder coordination for new construction. Call (405) 458-4805 for a free on-site estimate.",
  },
  {
    path: "/foundations-yukon",
    title: "Concrete Foundation Contractors in Yukon, OK | FDZ Construction LLC",
    description: "Concrete foundation contractors in Yukon, OK — slab-on-grade and pier foundations for Canadian County's clay base and new-subdivision fill conditions. Free estimate: (405) 458-4805.",
    h1: "Concrete Foundation Contractors in Yukon, OK",
    content: "Concrete foundation contractors serving Yukon, Oklahoma. Yukon's subdivision growth has put many new homes on graded former farmland, and original fill compaction matters as much as the native clay for any foundation. We proof-roll every Yukon base before pouring. Pier-and-thickened-slab on poor-fill lots — piers drilled to undisturbed native clay below, slab tied to piers. Slab-on-grade where the fill is sound. Engineered base, 4,000 PSI mix, rebar, drainage detailed. Builder coordination for new construction. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/driveways-moore",
    title: "Concrete Driveway Contractors in Moore, OK | FDZ Construction LLC",
    description: "Concrete driveway installation and replacement in Moore, OK. Built for Moore's flat terrain, expansive clay, and drainage-critical low-lying areas. Free estimate: (405) 458-4805.",
    h1: "Concrete Driveway Contractors in Moore, OK",
    content: "Concrete driveway contractors serving Moore, Oklahoma. Moore's flat terrain and clay soil mean water doesn't drain away on its own — a driveway without an engineered slope traps moisture under the slab and accelerates the expansive clay's swell-shrink cycle. We pour Moore driveways with mandatory slope-to-drain detailing (minimum 1/8″ per foot away from the house), apron transitions formed to shed water cleanly, 4,000 PSI mix, rebar at mid-depth, sawcut joints within 24 hours. Tear-out, replacement, new pours. Typical 24×40 driveway $5,760–$9,600. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/patios-moore",
    title: "Concrete Patio Contractors in Moore, OK | FDZ Construction LLC",
    description: "Concrete patios, slabs, and stamped concrete in Moore, OK. Drainage-first design for flat clay terrain. Free estimate: (405) 458-4805.",
    h1: "Concrete Patio Contractors in Moore, OK",
    content: "Concrete patio contractors serving Moore, Oklahoma. The Moore patios we tear out almost always failed because water pooled at the slab-house joint that wasn't drained from the start. We pour Moore patios with minimum 1/8″ per foot slope away from the foundation, sealed isolation joint at the house wall, 4,000 PSI mix, rebar at mid-depth, sawcut control joints within 24 hours. Broom finish $6–$10/sq ft, stamped finishes $15–$22/sq ft. 400 sq ft stamped patio typically $6,000–$8,800. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/driveways-mustang",
    title: "Concrete Driveway Contractors in Mustang, OK | FDZ Construction LLC",
    description: "Concrete driveway installation and replacement in Mustang, OK. Built for Canadian County's clay base and new-subdivision fill. Free estimate: (405) 458-4805.",
    h1: "Concrete Driveway Contractors in Mustang, OK",
    content: "Concrete driveway contractors serving Mustang, Oklahoma. Mustang's subdivision growth has put many new driveways on graded former farmland — and the quality of the original fill compaction decides whether the driveway is still flat at year five. We proof-roll the base on every Mustang pour and re-prep soft spots before any new aggregate goes in. Tear-out, replacement, new pours, 4,000 PSI mix, rebar at mid-depth, slope-to-drain detailing, sawcut joints within 24 hours. Typical 24×40 driveway $5,760–$9,600. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/retaining-walls-norman",
    title: "Retaining Wall Contractors in Norman, OK | FDZ Construction LLC",
    description: "Poured concrete and CMU retaining walls in Norman, OK — drainage-first design for Norman's river-corridor soil. Repairs included. Free estimate: (405) 458-4805.",
    h1: "Retaining Wall Contractors in Norman, OK",
    content: "Retaining wall contractors serving Norman, Oklahoma. Leaning Norman walls usually fail along soil transitions — sandy river-influenced section meeting denser clay. The clay section loads with water and pushes harder than the sandy section, and the wall twists rather than uniformly leans. We design uniform engineered drainage across the entire wall length: gravel backfill, weep holes spaced for wall height, French drain routed to daylight. Footing sized to actual soil bearing and wall height — not a generic spec. Poured concrete for taller walls, CMU for mid-height. Repair and stabilization included. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/driveway-repair-oklahoma-city",
    title: "Concrete Driveway Repair in Oklahoma City | FDZ Construction LLC",
    description: "Concrete driveway repair, leveling, joint sealing, and replacement in Oklahoma City. Honest repair-vs-replace evaluation. Free on-site estimate: (405) 458-4805.",
    h1: "Concrete Driveway Repair in Oklahoma City",
    content: "Most quick driveway repairs don't address why the driveway failed in the first place — the base moved, the drainage was wrong, the original joints weren't cut on time. We do real repairs that solve real problems: joint sealing, crack repair with structural epoxy or flexible sealant, section panel replacement, apron replacement, and slab leveling on sound bases. We also tell you honestly when replacement is the cheaper long-term answer. Joint sealing $300–$800, single-panel replacement $400–$1,200, apron replacement $1,500–$4,000, full replacement at $6–$10 per square foot. Free on-site evaluation. Call (405) 458-4805.",
  },
  {
    path: "/foundation-repair-oklahoma-city",
    title: "Concrete Foundation Repair in Oklahoma City | FDZ Construction LLC",
    description: "Concrete foundation repair, slab leveling, drainage correction, and partial replacement in Oklahoma City. Honest evaluation — repair vs replace. Free estimate: (405) 458-4805.",
    h1: "Concrete Foundation Repair in Oklahoma City",
    content: "Most foundation movement in OKC isn't a foundation problem — it's a drainage problem causing a foundation problem. We evaluate the actual cause of movement first: drainage correction (re-grading, gutter extensions, French drains), slab leveling where surrounding base is sound, partial slab replacement, and structural engineer coordination for cases where piers are genuinely required. We are not a pier sales operation — we won't push piers when drainage correction or slab leveling solves the problem. Drainage correction $500–$3,000, slab leveling $800–$2,500, partial replacement $1,500–$6,000, structural piers $3,500–$25,000+. Free on-site evaluation. Call (405) 458-4805.",
  },
  {
    path: "/patios-yukon",
    title: "Concrete Patio Contractors in Yukon, OK | FDZ Construction LLC",
    description: "Concrete patios, slabs, and stamped concrete in Yukon, OK. Built for Canadian County's clay base and new-subdivision fill. Free estimate: (405) 458-4805.",
    h1: "Concrete Patio Contractors in Yukon, OK",
    content: "Concrete patio contractors serving Yukon, Oklahoma. Most failed Yukon patios settled on bad subdivision fill — the same root cause we see on Yukon driveways. We proof-roll the base on every Yukon pour before any aggregate goes in. Engineered base, 4,000 PSI mix, rebar at mid-depth, minimum 1/8″ per foot slope away from the house, sealed isolation joint at the foundation, sawcut control joints within 24 hours. Broom finish $6–$10/sq ft, stamped finishes $15–$22/sq ft. Call (405) 458-4805 for a free estimate.",
  },
];

export function getCanonical(path: string): string {
  return `${BASE}${path === "/" ? "" : path}`;
}
