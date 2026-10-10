/**
 * Shared project proof for /our-projects and Phase 3–5 service pages.
 * Seeded only from verified /our-projects facts. Unknown metrics stay null.
 */

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  city: string;
  /** Free-text service label (e.g. "driveways", "sidewalks + ADA"). */
  service: string;
  /** Owner service page path. */
  ownerPath: string;
  details: string;
  images: ProjectImage[];
  sqft: number | null;
  year: number | null;
  featured: boolean;
  /** Optional UI labels preserved from /our-projects "More Projects" cards. */
  sizeLabel?: string | null;
  timeLabel?: string | null;
  /** Optional owner-confirmed specification bullets. */
  specs?: string[];
  /** Optional owner-confirmed contract price; always rendered with COMPLETED_COST_NOTE. */
  completedCost?: string | null;
};

export const COMPLETED_COST_NOTE =
  "Actual contract price for this completed project. Pricing for similar work varies based on site conditions, accessibility, materials, and project specifications.";

function alt(details: string, title: string, city: string): string {
  return `${details} — ${title}, ${city}`;
}

export const PROJECTS: Project[] = [
  {
    id: "star-spencer-hs",
    title: "Star Spencer High School",
    city: "Spencer, OK",
    service: "sidewalks + ADA",
    ownerPath: "/sidewalks-oklahoma-city",
    details: "New concrete stairs and sidewalks with ADA-compliant ramps",
    images: [
      {
        src: "/images/projects/concrete-sidewalk-star-spencer-high-school-spencer-ok.webp",
        alt: "New concrete sidewalk leading to the covered entrance at Star Spencer High School, Spencer, OK",
      },
      {
        src: "/images/projects/ada-concrete-ramp-star-spencer-high-school-spencer-ok.webp",
        alt: "Freshly poured ADA-compliant concrete curb ramp with detectable warning area at Star Spencer High School, Spencer, OK",
      },
    ],
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: true,
  },
  {
    id: "rosedale-shop",
    title: "Shop foundation pour",
    city: "Rosedale, OK",
    service: "foundations",
    ownerPath: "/foundations-oklahoma-city",
    details: "Self-performed; video of forming, reinforcement, placement",
    images: [
      {
        src: "/images/poster-rosedale.webp",
        alt: alt(
          "Self-performed; video of forming, reinforcement, placement",
          "Shop foundation pour",
          "Rosedale, OK",
        ),
      },
    ],
    // Video lives at /videos/shop-foundation-pour-rosedale-oklahoma-web.mp4 on /our-projects
    sqft: null, // TODO(FDZ): confirm 10,000 sq ft figure for structured data
    year: null, // TODO(FDZ)
    featured: true,
  },
  {
    id: "edmond-pier-foundation",
    title: "Pier foundation",
    city: "Edmond, OK",
    service: "foundations",
    ownerPath: "/foundations-oklahoma-city",
    details: "Piers to undisturbed soil; thickened slab",
    images: [
      {
        src: "/images/projects/pier-foundation-excavation-edmond-oklahoma-1.webp",
        alt: alt("Piers to undisturbed soil; thickened slab", "Pier foundation", "Edmond, OK"),
      },
      {
        src: "/images/projects/pier-foundation-excavation-edmond-oklahoma-2.webp",
        alt: alt("Piers to undisturbed soil; thickened slab", "Pier foundation", "Edmond, OK"),
      },
      {
        src: "/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.webp",
        alt: alt("Piers to undisturbed soil; thickened slab", "Pier foundation", "Edmond, OK"),
      },
      {
        src: "/images/projects/pier-foundation-finished-edmond-oklahoma-curing.webp",
        alt: alt("Piers to undisturbed soil; thickened slab", "Pier foundation", "Edmond, OK"),
      },
    ],
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: true,
    sizeLabel: "Residential",
    timeLabel: "Multi-day",
  },
  {
    id: "okc-retaining-wall",
    title: "Poured concrete retaining wall",
    city: "Oklahoma City, OK",
    service: "retaining walls",
    ownerPath: "/retaining-walls-oklahoma-city",
    details: "Engineered for OKC clay with drainage",
    images: [
      {
        src: "/images/projects/poured-concrete-retaining-wall-oklahoma-city.webp",
        alt: alt(
          "Engineered for OKC clay with drainage",
          "Poured concrete retaining wall",
          "Oklahoma City, OK",
        ),
      },
    ],
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: true,
    sizeLabel: "Residential",
    timeLabel: "Multi-day",
  },
  {
    id: "guthrie-forklift-ramp",
    title: "Forklift ramp",
    city: "Guthrie, OK",
    service: "commercial / industrial",
    ownerPath: "/commercial-concrete-oklahoma-city",
    details: "Power-trowel finish; poured inside a live warehouse",
    images: [
      {
        src: "/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.webp",
        alt: alt(
          "Power-trowel finish; poured inside a live warehouse",
          "Forklift ramp",
          "Guthrie, OK",
        ),
      },
      {
        src: "/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.webp",
        alt: alt(
          "Power-trowel finish; poured inside a live warehouse",
          "Forklift ramp",
          "Guthrie, OK",
        ),
      },
      {
        src: "/images/projects/forklift-ramp-finished-guthrie-oklahoma.webp",
        alt: alt(
          "Power-trowel finish; poured inside a live warehouse",
          "Forklift ramp",
          "Guthrie, OK",
        ),
      },
    ],
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: true,
    sizeLabel: "Commercial",
    timeLabel: "1 day pour",
  },
  {
    id: "piedmont-foundation",
    title: "Residential foundation",
    city: "Piedmont, OK",
    service: "foundations",
    ownerPath: "/foundations-oklahoma-city",
    details: "Slab-on-grade with compacted base",
    images: [
      {
        src: "/images/projects/residential-foundation-pour-piedmont-oklahoma.webp",
        alt: alt("Slab-on-grade with compacted base", "Residential foundation", "Piedmont, OK"),
      },
      {
        src: "/images/projects/residential-foundation-crew-piedmont-ok.webp",
        alt: alt("Slab-on-grade with compacted base", "Residential foundation", "Piedmont, OK"),
      },
    ],
    sqft: null, // TODO(FDZ): confirm 1,400 sq ft
    year: null, // TODO(FDZ)
    featured: true,
    sizeLabel: "1,400 sq ft",
    timeLabel: "1 day pour",
  },
  {
    id: "edmond-driveway",
    title: "New driveway & approach",
    city: "Edmond, OK",
    service: "driveways",
    ownerPath: "/driveways-oklahoma-city",
    details: `6" thick, 24' wide concrete drive with new approach`,
    images: [
      {
        src: "/images/projects/new-concrete-driveway-approach-6-inch-24-ft-wide-oklahoma.webp",
        alt: "New 6-inch thick, 24-foot wide concrete driveway and approach being finished by the FDZ Construction crew",
      },
    ],
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "24' wide",
    timeLabel: "2 days",
  },
  {
    id: "norman-stamped-patio",
    title: "Stamped patio",
    city: "Norman, OK",
    service: "patios",
    ownerPath: "/patios-oklahoma-city",
    details: "Ashlar slate pattern",
    images: [], // TODO(FDZ): photo
    sqft: null, // TODO(FDZ): confirm 580 sq ft
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "580 sq ft",
    timeLabel: "3 days",
  },
  {
    id: "norman-patio-paver-walkway",
    title: "Concrete patio & decorative paver walkway",
    city: "Norman, OK",
    service: "patios",
    ownerPath: "/patios-oklahoma-city",
    details:
      "Broom-finish patio slab and concrete paver walkway with picture-frame borders, set in decorative river rock",
    images: [
      {
        src: "/images/projects/concrete-paver-walkway-river-rock-norman-oklahoma.webp",
        alt: "Broom-finish concrete pavers with picture-frame borders set in decorative river rock leading to a new concrete patio in Norman, OK",
      },
      {
        src: "/images/projects/concrete-patio-slab-broom-finish-norman-oklahoma.webp",
        alt: "New 12 × 12 ft, 8-inch broom-finish concrete patio slab in a Norman, OK backyard",
      },
      {
        src: "/images/projects/concrete-patio-paver-walkway-norman-oklahoma.webp",
        alt: "Concrete paver walkway in river rock running from the covered porch to a new concrete patio in Norman, OK",
      },
    ],
    sqft: 144,
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "12×12",
    specs: [
      `12' × 12' concrete slab, 8" thick`,
      `Six 36" × 24" concrete pavers`,
      "Broom finish with picture-frame borders",
      "Decorative river rock installation",
    ],
    completedCost: "$8,200",
  },
  {
    id: "mustang-foundation",
    title: "Residential foundation",
    city: "Mustang, OK",
    service: "foundations",
    ownerPath: "/foundations-oklahoma-city",
    details: "Slab-on-grade for new build",
    images: [], // TODO(FDZ): photo
    sqft: null, // TODO(FDZ): confirm 1,800 sq ft
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "1,800 sq ft",
    timeLabel: "1 day pour",
  },
  {
    id: "moore-patio",
    title: "Backyard patio",
    city: "Moore, OK",
    service: "patios",
    ownerPath: "/patios-oklahoma-city",
    details: "Broom finish, graded away from structure",
    images: [], // TODO(FDZ): photo
    sqft: null, // TODO(FDZ): confirm 480 sq ft
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "480 sq ft",
    timeLabel: "1 day",
  },
  {
    id: "edmond-row-sidewalk",
    title: "City right-of-way sidewalk",
    city: "Edmond, OK",
    service: "sidewalks",
    ownerPath: "/sidewalks-oklahoma-city",
    details: "Permitted replacement with ADA curb ramp",
    images: [], // TODO(FDZ): photo
    sqft: null, // TODO(FDZ)
    year: null, // TODO(FDZ)
    featured: false,
    sizeLabel: "120 LF",
    timeLabel: "1 day",
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function filterProjects(opts: {
  service?: string;
  ids?: string[];
  featured?: boolean;
  limit?: number;
}): Project[] {
  let list = PROJECTS.slice();
  if (opts.ids?.length) {
    const set = new Set(opts.ids);
    list = list.filter((p) => set.has(p.id));
  }
  if (opts.service) {
    const needle = opts.service.toLowerCase();
    list = list.filter(
      (p) =>
        p.service.toLowerCase().includes(needle) ||
        p.ownerPath.toLowerCase().includes(needle.replace(/\s+/g, "-")),
    );
  }
  if (typeof opts.featured === "boolean") {
    list = list.filter((p) => p.featured === opts.featured);
  }
  if (typeof opts.limit === "number" && opts.limit >= 0) {
    list = list.slice(0, opts.limit);
  }
  return list;
}

/** Rosedale shop foundation video used on /our-projects. */
export const ROSEDALE_SHOP_VIDEO = "/videos/shop-foundation-pour-rosedale-oklahoma-web.mp4";
