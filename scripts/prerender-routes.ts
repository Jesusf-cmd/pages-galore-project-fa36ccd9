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

const BASE = "https://myconcreteestimate.com";

export const routes: PrerenderRoute[] = [
  {
    path: "/",
    title: "Concrete Contractors Oklahoma City | Redwood Construction LLC | Free Estimates",
    description: "Oklahoma City's concrete contractor for driveways, patios, slabs & more. Licensed & insured. Serving OKC metro. Call (405) 247-0027 for a free estimate.",
    h1: "Oklahoma City Concrete Contractors",
    content: "Redwood Construction LLC is a licensed and insured concrete contractor serving the Oklahoma City metro area. We specialize in driveways, patios, slabs, foundations, stamped concrete, retaining walls, sidewalks, and commercial concrete work. Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/concrete-driveways",
    title: "Concrete Driveways Oklahoma City | Redwood Construction LLC",
    description: "Professional concrete driveway installation in Oklahoma City. Licensed & insured. Broom finish, stamped, and reinforced driveways. Free estimates — call (405) 247-0027.",
    h1: "Concrete Driveway Installation in Oklahoma City, OK",
    content: "Redwood Construction LLC provides professional concrete driveway installation in Oklahoma City and surrounding areas. We build durable, clean, long-lasting driveways for homeowners, builders, and property owners who need dependable concrete work done right. Our process starts with site evaluation, grading, and preparation of the subgrade. We then install the required forms, reinforcement, and concrete placement based on the needs of the project. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/concrete-slabs",
    title: "Concrete Slabs in Oklahoma City | Redwood Construction LLC",
    description: "Professional concrete slab contractors in Oklahoma City. Patio slabs, garage floors, and shop pads built for OKC clay soil. $6–$10/sq ft. Free estimate.",
    h1: "Concrete Slabs Oklahoma City",
    content: "Patio slabs, garage floors, and shop slabs for Oklahoma City homeowners — properly graded, reinforced for OKC clay soil. Professional concrete slab contractors serving the OKC metro area. $6–$10 per square foot installed. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/stamped-concrete",
    title: "Stamped Concrete in Oklahoma City | Redwood Construction LLC",
    description: "Stamped concrete contractors in Oklahoma City. Custom patterns, integral color, and professional sealers for patios, pool decks, and driveways. Free estimate.",
    h1: "Stamped Concrete Oklahoma City",
    content: "Custom patterns, colors, and sealers for patios, pool decks, and driveways across OKC metro. Stamped concrete contractors in Oklahoma City offering custom decorative finishes. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/concrete-foundations",
    title: "Concrete Foundation Contractor in Oklahoma City | Redwood Construction LLC",
    description: "Concrete foundation contractor in Oklahoma City for residential and commercial projects. Call Redwood Construction LLC for reliable foundation work and free estimates.",
    h1: "Concrete Foundation Contractor in Oklahoma City",
    content: "Redwood Construction LLC provides concrete foundation services in Oklahoma City for residential and commercial projects. We install foundations with a focus on proper preparation, dependable workmanship, and long-term structural performance. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/concrete-patio-okc",
    title: "Concrete Patio Contractors in Oklahoma City | Redwood Construction LLC",
    description: "Custom concrete patios in Oklahoma City. Broom, smooth, and stamped finishes graded for proper drainage. Residential patio specialists. Free estimate.",
    h1: "Concrete Patio Contractors OKC",
    content: "Smooth, broom, and stamped finishes — properly graded and reinforced for Oklahoma weather. Custom concrete patios in Oklahoma City from residential patio specialists. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/concrete-sidewalks",
    title: "Concrete Sidewalks in Oklahoma City | Redwood Construction LLC",
    description: "Concrete sidewalk contractors in Oklahoma City. New construction, city right-of-way replacements, and ADA-compliant ramps. $6–$10/sq ft. Free estimate.",
    h1: "Concrete Sidewalks Oklahoma City",
    content: "New construction, replacements, city right-of-way work. Concrete sidewalk contractors serving OKC metro. ADA-compliant ramps and city-spec sidewalk installation. $6–$10 per square foot. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/retaining-walls",
    title: "Retaining Walls in Oklahoma City | Redwood Construction LLC",
    description: "Retaining wall contractors in Oklahoma City. Poured concrete, CMU block, and interlocking walls engineered for Oklahoma clay soil. Free estimate available.",
    h1: "Retaining Walls Oklahoma City",
    content: "Poured concrete, block, and interlocking retaining walls for slopes, drainage, and erosion control. Retaining wall contractors in Oklahoma City engineered for Oklahoma clay soil. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/parking-lot-concrete",
    title: "Parking Lot Concrete in Oklahoma City | Redwood Construction LLC",
    description: "Commercial concrete parking lot contractors in Oklahoma City. New construction, resurfacing, and ADA-compliant design. Call Redwood Construction for an estimate.",
    h1: "Parking Lot Concrete OKC",
    content: "Commercial concrete parking lot contractors in Oklahoma City. New construction, resurfacing, and repair for OKC businesses. ADA-compliant design and heavy-duty concrete for commercial properties. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/curb-and-gutter",
    title: "Curb and Gutter Contractors in Oklahoma City | Redwood Construction LLC",
    description: "Curb and gutter installation in Oklahoma City. New construction, replacement, and city-spec curb work for residential and commercial projects. Free estimate.",
    h1: "Curb & Gutter Oklahoma City",
    content: "Concrete curb and gutter contractors in Oklahoma City. New construction, replacement, and commercial curb work for residential and commercial projects. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/commercial-concrete-slabs",
    title: "Commercial Concrete Slabs in Oklahoma City | Redwood Construction LLC",
    description: "Commercial concrete slab contractors in Oklahoma City. Warehouse floors, retail pads, and industrial slabs with 4,000+ PSI concrete. Free commercial estimate.",
    h1: "Commercial Concrete Slabs",
    content: "Heavy-duty commercial slabs for warehouses, retail buildings, and industrial facilities across the OKC metro. Engineered for heavy loads and high traffic. 4,000+ PSI concrete. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/oklahoma-city-concrete",
    title: "Concrete Contractor in Oklahoma City OK | Redwood Construction LLC",
    description: "Concrete contractor in Oklahoma City, OK — Redwood Construction LLC. Driveways, slabs, foundations & patios built for OKC's expansive Permian clay. 500+ metro projects. Free estimate: (405) 247-0027.",
    h1: "Concrete Contractor in Oklahoma City, OK",
    content: "Redwood Construction LLC is headquartered in the Oklahoma City metro, giving us firsthand knowledge of the soil conditions, drainage challenges, and building codes that affect every concrete project in the area. Concrete services in Oklahoma City include driveways, patio and garage slabs, stamped decorative concrete, foundations, retaining walls, sidewalks, and commercial parking lots. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/edmond-concrete",
    title: "Concrete Contractor in Edmond OK | Redwood Construction LLC",
    description: "Concrete contractor in Edmond, OK — driveways, patios, slabs & foundations for Deer Creek, Coffee Creek, and all of Oklahoma County. Redwood Construction LLC. Call (405) 247-0027.",
    h1: "Concrete Contractor in Edmond, OK",
    content: "Edmond is one of the fastest-growing cities in the OKC metro. Redwood Construction has been pouring concrete for Edmond homeowners and builders. Concrete services in Edmond include residential driveways, patio and garage slabs, stamped decorative concrete, new construction foundations, and sidewalks. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/norman-ok-concrete",
    title: "Concrete Contractor in Norman OK | Redwood Construction LLC",
    description: "Concrete contractor in Norman, OK serving Cleveland County. Driveways, patios, slabs & retaining walls built for Norman's soil and drainage conditions. Redwood Construction LLC. (405) 247-0027.",
    h1: "Concrete Contractor in Norman, OK",
    content: "Norman, home to the University of Oklahoma, presents unique concrete challenges due to its location in Cleveland County. Concrete services in Norman include driveway installation and replacement, patio and garage slabs, stamped decorative concrete, residential foundations, and retaining walls. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/yukon-oklahoma-concrete",
    title: "Concrete Contractor in Yukon OK | Redwood Construction LLC",
    description: "Concrete contractor in Yukon, OK — driveways, slabs, patios & commercial concrete in Canadian County. Transitional clay soil experts. Redwood Construction LLC. (405) 247-0027.",
    h1: "Concrete Contractor in Yukon, OK",
    content: "Yukon sits in Canadian County on the western edge of the OKC metro. Redwood Construction serves Yukon homeowners and businesses with driveways, patios, commercial slabs, and foundation work. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/mustang-oklahoma-concrete",
    title: "Concrete Contractor in Mustang OK | Redwood Construction LLC",
    description: "Concrete contractor in Mustang, OK. Driveways, patios, slabs & foundations for Mustang homeowners and new construction subdivisions. Redwood Construction LLC. Call (405) 247-0027.",
    h1: "Concrete Contractor in Mustang, OK",
    content: "Mustang has experienced significant residential growth. Redwood Construction serves Mustang homeowners with driveways, patios, foundations, and decorative concrete — bringing the same quality we deliver across the OKC metro. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/moore-oklahoma-concrete",
    title: "Concrete Contractor in Moore OK | Redwood Construction LLC",
    description: "Concrete contractor in Moore, OK — driveways, foundations & storm damage concrete replacement in Cleveland County. Redwood Construction LLC. Free estimate: (405) 247-0027.",
    h1: "Concrete Contractor in Moore, OK",
    content: "Moore, located in Cleveland County just south of Oklahoma City, is known for its strong residential communities. Concrete services in Moore include driveway installation, patio and garage slabs, stamped concrete, residential foundations, and sidewalks. Storm damage foundation replacement available. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/midwest-city-oklahoma-concrete",
    title: "Concrete Contractor in Midwest City OK | Redwood Construction LLC",
    description: "Concrete contractor in Midwest City, OK. Driveway replacement, patio slabs & sidewalk repair in eastern Oklahoma County. Redwood Construction LLC. Call (405) 247-0027.",
    h1: "Concrete Contractor in Midwest City, OK",
    content: "Midwest City, located adjacent to Tinker Air Force Base in eastern Oklahoma County, has a well-established residential base. Concrete services include driveway replacement, patio slabs, sidewalk repair, and foundation work. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/del-city-oklahoma-concrete",
    title: "Concrete Contractor in Del City OK | Redwood Construction LLC",
    description: "Concrete contractor in Del City, OK. Affordable driveway replacement, patio slabs & sidewalk repair. Redwood Construction LLC. Call (405) 247-0027.",
    h1: "Concrete Contractor in Del City, OK",
    content: "Del City is a tight-knit community in eastern Oklahoma County with affordable housing and established neighborhoods. Concrete services include driveway replacement, patio slabs, sidewalk work, and foundation repair. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/our-projects",
    title: "Our Concrete Projects | Redwood Construction LLC | Oklahoma City",
    description: "View completed concrete projects by Redwood Construction LLC in Oklahoma City, Edmond, Norman, and the OKC metro. Driveways, patios, foundations, and commercial work.",
    h1: "Our Concrete Projects",
    content: "View completed concrete projects by Redwood Construction LLC across the Oklahoma City metro area. Featured projects include driveway replacements, stamped concrete patios, commercial parking lots, residential foundations, retaining walls, and sidewalk installations in Edmond, Norman, Yukon, Mustang, Moore, and Oklahoma City. Call (405) 247-0027 for a free estimate.",
  },
  {
    path: "/blog",
    title: "Concrete Tips & Guides for Oklahoma City | Redwood Construction LLC",
    description: "Expert concrete guides for Oklahoma City homeowners. Pricing, specifications, soil tips, and maintenance advice from Redwood Construction LLC.",
    h1: "Concrete Tips & Guides",
    content: "Expert concrete guides for Oklahoma City homeowners from Redwood Construction LLC. Topics include why concrete driveways crack in Oklahoma, cost of concrete in Oklahoma City, rebar vs wire mesh for concrete slabs, how thick a driveway should be, and the best time of year to pour concrete in OKC.",
  },
  {
    path: "/blog/why-concrete-driveways-crack-oklahoma",
    title: "Why Concrete Driveways Crack in Oklahoma | Redwood Construction LLC",
    description: "Five real reasons concrete driveways crack in Oklahoma — clay soil, bad base prep, missing rebar — and how to prevent every one of them.",
    h1: "Why Concrete Driveways Crack in Oklahoma",
    content: "Five real causes of concrete driveway cracking in Oklahoma and how to prevent them. Oklahoma City sits on some of the most expansive clay soil in the country. The most common causes include inadequate base preparation, missing or poorly placed reinforcement, missing or wrong control joints, wrong concrete mix, and drainage problems.",
  },
  {
    path: "/blog/cost-of-concrete-oklahoma-city-2026",
    title: "Cost of Concrete in Oklahoma City 2026 | Redwood Construction LLC",
    description: "Updated 2026 concrete pricing for Oklahoma City. Per square foot rates, typical project costs, and what drives price in the OKC market.",
    h1: "Cost of Concrete in Oklahoma City (2026 Guide)",
    content: "Standard residential concrete in OKC runs $6–$10 per square foot installed. Foundation work runs $9–$14. Stamped concrete runs $15–$22. Standard driveway installation in Oklahoma City (24×40): $5,760–$9,600. Patio slab OKC (20×20): $2,400–$4,000. Stamped patio (400 sq ft): $6,000–$8,800.",
  },
  {
    path: "/blog/rebar-vs-wire-mesh-concrete-slabs",
    title: "Rebar vs Wire Mesh for Concrete Slabs | Redwood Construction LLC",
    description: "Rebar vs wire mesh for concrete slabs in Oklahoma. Which your project actually needs on OKC clay soil — and why the choice matters long-term.",
    h1: "Rebar vs Wire Mesh for Concrete Slabs",
    content: "Which reinforcement does your Oklahoma City concrete project actually need? Wire mesh controls minor shrinkage cracking but does not add significant structural strength. Rebar provides tensile strength to resist bending forces from Oklahoma's expansive clay soil. Rebar adds $0.50–$1.50 per sq ft over wire mesh.",
  },
  {
    path: "/blog/how-thick-should-driveway-be-oklahoma",
    title: "How Thick Should a Driveway Be in Oklahoma | Redwood Construction LLC",
    description: "How thick should a concrete driveway be in Oklahoma? 4 inches is standard — but not always right. Learn when you need 5–6 inches instead.",
    h1: "How Thick Should a Driveway Be in Oklahoma?",
    content: "4 inches of concrete driveway on a properly prepared base is adequate for standard passenger vehicles. Heavy trucks, RVs, boat trailers, and commercial vehicles require 5–6 inches. The base matters as much as the thickness — a 6-inch slab on uncompacted soil will fail faster than a 4-inch slab on properly prepared aggregate base.",
  },
  {
    path: "/blog/best-time-of-year-to-pour-concrete-okc",
    title: "Best Time to Pour Concrete in OKC | Redwood Construction LLC",
    description: "Best time to pour concrete in Oklahoma City. Fall is ideal, but experienced OKC contractors work year-round with the right protocols.",
    h1: "Best Time of Year to Pour Concrete in OKC",
    content: "Fall and spring offer the best temperatures for concrete work in Oklahoma City. The ideal window is October through April. Summer pours require early morning scheduling and evaporation retarders. Winter pours below 40°F need heated water and insulated blankets. Spring storm season brings heavy rain risks.",
  },
];

export function getCanonical(path: string): string {
  return `${BASE}${path === "/" ? "" : path}`;
}
