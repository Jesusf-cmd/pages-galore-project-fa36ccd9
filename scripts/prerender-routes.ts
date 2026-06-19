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
    title: "Concrete Parking Lots Oklahoma City | FDZ Construction LLC",
    description: "Commercial concrete parking lot contractors in Oklahoma City. New construction, replacement, ADA-compliant design, curb & gutter. 5–6 inch reinforced slabs. Free estimate: (405) 458-4805.",
    h1: "Concrete Parking Lots in Oklahoma City",
    content: "FDZ Construction LLC builds commercial concrete parking lots in Oklahoma City — new construction, full replacement, and major repairs for businesses, retail centers, churches, and industrial properties. 5–6 inch reinforced slabs, engineered drainage grading, sealed joints, curb and gutter, and ADA-compliant accessible spaces. Concrete lasts 30–40 years versus asphalt's 15–20. Call (405) 458-4805 for a free estimate.",
  },
  {
    path: "/retaining-walls-oklahoma-city",
    title: "Retaining Walls Oklahoma City | FDZ Construction LLC",
    description: "Retaining wall contractors in Oklahoma City. Poured concrete, CMU block, and interlocking walls engineered for clay soil with French drainage. Free estimate: (405) 458-4805.",
    h1: "Retaining Walls in Oklahoma City",
    content: "FDZ Construction LLC builds retaining walls in Oklahoma City engineered for the lateral pressure of expansive clay soil — poured concrete for maximum strength, reinforced CMU block for walls under four feet, and interlocking segmental walls for landscape terracing. Every wall includes footings below frost line and a French drain to relieve hydrostatic pressure. Retaining walls run $25–$45 per linear foot. Call (405) 458-4805 for a free estimate.",
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
];

export function getCanonical(path: string): string {
  return `${BASE}${path === "/" ? "" : path}`;
}
