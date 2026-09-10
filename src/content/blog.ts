export type BlogSection = {
  heading: string;
  content: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  tags: string[];
  deck: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-concrete-driveways-crack-oklahoma",
    title: "Why Concrete Driveways Crack in Oklahoma",
    date: "2026-03-15",
    displayDate: "March 15, 2026",
    time: "7 min read",
    tags: ["Oklahoma City Concrete", "Driveway Cracking", "OKC Clay Soil"],
    deck: "Five real causes — and how FDZ Construction builds driveways in Oklahoma City that don't.",
    excerpt: "Five real causes — clay soil, base prep failures, missing reinforcement — and how to prevent them.",
    seoTitle: "Why Concrete Driveways Crack in Oklahoma | FDZ Construction LLC",
    seoDescription:
      "Five real reasons concrete driveways crack in Oklahoma — clay soil, bad base prep, missing rebar — and how to prevent every one of them.",
    sections: [
      {
        heading: "The Real Culprit: Oklahoma Clay Soil",
        content: [
          "Oklahoma City sits on some of the most expansive clay soil in the country. When it rains, the clay absorbs water and expands. When drought hits, it contracts. A concrete driveway goes through this cycle multiple times every year. Concrete doesn't flex — when clay pushes up unevenly, it creates tension and cracks.",
        ],
      },
      {
        heading: "Cause #1: Inadequate Base Preparation",
        content: [
          "This is the most common cause of <a href='/driveways-oklahoma-city' class='text-orange no-underline'>concrete driveway</a> failure in Oklahoma City. Proper base prep means excavating to the right depth, compacting the native subgrade, and installing 4–6 inches of compacted aggregate base. A lot of contractors cut corners here because it takes time and equipment.",
        ],
      },
      {
        heading: "Cause #2: Missing or Poorly Placed Reinforcement",
        content: [
          "On Oklahoma clay, rebar is the right call for driveways — placed at mid-depth in the slab on chairs, not lying on the ground. Wire mesh alone doesn't provide enough tensile strength to resist soil movement. For more on reinforcement, see our <a href='/patios-oklahoma-city' class='text-orange no-underline'>concrete slab installation</a> page and the comparison of <a href='/blog/rebar-vs-wire-mesh-concrete-slabs' class='text-orange no-underline'>rebar vs wire mesh for concrete slabs</a>.",
        ],
      },
      {
        heading: "Cause #3: Missing or Wrong Control Joints",
        content: [
          "Control joints need to be cut to the right depth (minimum 1/4 of slab thickness) and spaced correctly — typically 8–12 feet apart. They need to be cut within the first 24 hours.",
        ],
      },
      {
        heading: "Cause #4: Wrong Concrete Mix",
        content: [
          "For residential driveways in Oklahoma, 4,000 PSI is the appropriate minimum. Adding extra water reduces strength and increases shrinkage.",
        ],
      },
      {
        heading: "Cause #5: Drainage Problems",
        content: [
          "Water accelerates everything that makes Oklahoma clay problematic. A driveway graded flat or toward the house keeps soil saturated, increasing swell-shrink cycles. Every <a href='/patios-oklahoma-city' class='text-orange no-underline'>concrete patio</a> and <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundation</a> we pour in OKC is graded for drainage.",
        ],
      },
    ],
  },
  {
    slug: "cost-of-concrete-oklahoma-city-2026",
    title: "Cost of Concrete in Oklahoma City (2026 Guide)",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    time: "8 min read",
    tags: ["Concrete Cost OKC", "Pricing Guide", "2026"],
    deck: "Per square foot rates, typical project totals, and what drives price in the OKC market — updated for 2026.",
    excerpt: "Per square foot rates, typical project totals, and what drives price in the OKC market.",
    seoTitle: "Cost of Concrete in Oklahoma City 2026 | FDZ Construction LLC",
    seoDescription:
      "Updated 2026 concrete pricing for Oklahoma City. Per square foot rates, typical project costs, and what drives price in the OKC market.",
    sections: [
      {
        heading: "The Short Answer: $6–$10 Per Square Foot",
        content: [
          "Standard residential concrete in OKC — driveways, patios, garage slabs — runs $6–$10 per square foot installed. Foundation work runs $9–$14. Stamped concrete runs $15–$22.",
        ],
      },
      {
        heading: "What Makes Concrete More Expensive in OKC",
        content: [
          "Deep excavation on problem clay, tight truck access requiring a pump, upgrade to 4,000 PSI mix, stamped finishes, and slope that requires more forming work all push prices higher.",
        ],
      },
      {
        heading: "Typical Project Costs in Oklahoma City (2026)",
        content: [
          "Standard <a href='/driveways-oklahoma-city' class='text-orange no-underline'>driveway installation</a> in Oklahoma City (24×40): $5,760–$9,600. <a href='/patios-oklahoma-city' class='text-orange no-underline'>Patio slab OKC</a> (20×20): $2,400–$4,000. Stamped patio (400 sq ft): $6,000–$8,800. <a href='/foundations-oklahoma-city' class='text-orange no-underline'>Foundation work</a> in OKC (1,200 sq ft): $10,800–$16,800.",
        ],
      },
      {
        heading: "Getting an Accurate Quote",
        content: [
          "Phone estimates aren't reliable for concrete. Every project needs a site visit to assess soil conditions, access, grade, and scope. We provide free on-site estimates within one business day.",
        ],
      },
    ],
  },
  {
    slug: "rebar-vs-wire-mesh-concrete-slabs",
    title: "Rebar vs Wire Mesh for Concrete Slabs",
    date: "2026-03-05",
    displayDate: "March 5, 2026",
    time: "6 min read",
    tags: ["Rebar", "Wire Mesh", "Concrete Reinforcement"],
    deck: "Which one does your Oklahoma City concrete project actually need — and why the answer matters on OKC clay soil.",
    excerpt: "Which one does your Oklahoma City project actually need — and why the answer matters on OKC clay soil.",
    seoTitle: "Rebar vs Wire Mesh for Concrete Slabs | FDZ Construction LLC",
    seoDescription:
      "Rebar vs wire mesh for concrete slabs in Oklahoma. Which your project actually needs on OKC clay soil — and why the choice matters long-term.",
    sections: [
      {
        heading: "What Wire Mesh Actually Does",
        content: [
          "Wire mesh (welded wire fabric) controls minor shrinkage cracking and holds pieces together if a slab does crack. It does not add significant structural strength.",
        ],
      },
      {
        heading: "What Rebar Does That Wire Mesh Doesn't",
        content: [
          "Rebar provides tensile strength — the ability to resist bending forces. On Oklahoma's expansive clay, this is critical because the soil actively pushes up against slabs.",
        ],
      },
      {
        heading: "Oklahoma Clay Soil: Why the Choice Matters More Here",
        content: [
          "In a state with stable soil, wire mesh might be adequate for a patio. In Oklahoma, where clay swells and contracts dramatically, rebar is the right call for any <a href='/patios-oklahoma-city' class='text-orange no-underline'>concrete slab in OKC</a> that needs to last. This applies equally to <a href='/driveways-oklahoma-city' class='text-orange no-underline'>concrete driveways</a>, <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundations</a>, and <a href='/patios-oklahoma-city' class='text-orange no-underline'>patio slabs</a> across the Oklahoma City metro.",
        ],
      },
      {
        heading: "The Cost Difference",
        content: [
          "Rebar adds $0.50–$1.50 per sq ft over wire mesh. On a 400 sq ft patio, that's $200–$600. Over a 30-year lifespan, it's the cheapest insurance you can buy.",
        ],
      },
    ],
  },
  {
    slug: "how-thick-should-driveway-be-oklahoma",
    title: "How Thick Should a Driveway Be in Oklahoma?",
    date: "2026-02-28",
    displayDate: "February 28, 2026",
    time: "5 min read",
    tags: ["Driveway Thickness", "Oklahoma", "Concrete Specs"],
    deck: "Four inches is the standard — but not always the right answer. Here's how to spec your driveway correctly for Oklahoma conditions.",
    excerpt: "Four inches is the standard — but not always the right answer for Oklahoma conditions.",
    seoTitle: "How Thick Should a Driveway Be in Oklahoma | FDZ Construction LLC",
    seoDescription:
      "How thick should a concrete driveway be in Oklahoma? 4 inches is standard — but not always right. Learn when you need 5–6 inches instead.",
    sections: [
      {
        heading: "The Standard: 4 Inches for Passenger Vehicles",
        content: [
          "4 inches of <a href='/driveways-oklahoma-city' class='text-orange no-underline'>concrete driveway</a> on a properly prepared base is adequate for standard passenger vehicles — cars, minivans, and light SUVs. If the original slab was thinner or the base was skipped, that's often why we see the failures covered in <a href='/blog/why-concrete-driveways-crack-oklahoma' class='text-orange no-underline'>why concrete driveways crack in Oklahoma</a>.",
        ],
      },
      {
        heading: "When You Need More: 5 to 6 Inches",
        content: [
          "Heavy trucks, RVs, boat trailers, and commercial vehicles require 5–6 inches. On high shrink-swell clay, we sometimes recommend 5 inches even for standard use.",
        ],
      },
      {
        heading: "The Base Matters as Much as the Thickness",
        content: [
          "A 6-inch slab on uncompacted soil will fail faster than a 4-inch slab on properly prepared aggregate base. Base prep is the single most important factor. Our <a href='/patios-oklahoma-city' class='text-orange no-underline'>concrete slab contractors in OKC</a> always begin with a thorough base prep assessment — it matters more than the slab thickness.",
        ],
      },
    ],
  },
  {
    slug: "best-time-of-year-to-pour-concrete-okc",
    title: "Best Time of Year to Pour Concrete in OKC",
    date: "2026-02-20",
    displayDate: "February 20, 2026",
    time: "6 min read",
    tags: ["Concrete Timing", "OKC Weather", "Pour Season"],
    deck: "Fall is the ideal window. But experienced concrete contractors in Oklahoma City work year-round — with the right protocols.",
    excerpt: "Fall is the ideal window. But experienced contractors work year-round — with the right protocols.",
    seoTitle: "Best Time to Pour Concrete in OKC | FDZ Construction LLC",
    seoDescription:
      "Best time to pour concrete in Oklahoma City. Fall is ideal, but experienced OKC contractors work year-round with the right protocols.",
    sections: [
      {
        heading: "The Ideal Window: October Through April",
        content: [
          "Fall and spring offer the best temperatures for new <a href='/driveways-oklahoma-city' class='text-orange no-underline'>driveway installation</a> in Oklahoma City, <a href='/patios-oklahoma-city' class='text-orange no-underline'>patio concrete pours</a>, and <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundation pours</a> — moderate heat, manageable humidity, and minimal freeze risk.",
        ],
      },
      {
        heading: "Summer Concrete in OKC: It Can Be Done",
        content: [
          "Oklahoma summers regularly exceed 100°F. We adjust by pouring early morning, using evaporation retarders, and applying curing compound immediately.",
        ],
      },
      {
        heading: "Winter Concrete: The Cold Weather Rules",
        content: [
          "Below 40°F, concrete curing slows dramatically. We use heated water, insulated blankets, and monitor slab temperatures to ensure proper strength development.",
        ],
      },
      {
        heading: "Spring Storm Season: The Underrated Risk",
        content: [
          "March through May brings heavy rain that can wash out fresh concrete or saturate subgrade. Scheduling flexibility and weather monitoring are essential.",
        ],
      },
    ],
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
);

export const BLOG_INDEX_INTRO =
  "Straight talk about concrete in Oklahoma City — pricing, specifications, soil conditions, and what actually makes <a href='/driveways-oklahoma-city' class='text-orange no-underline'>concrete driveways</a>, <a href='/patios-oklahoma-city' class='text-orange no-underline'>patios and slabs</a>, and <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundations</a> last.";

export const BLOG_POST_CONTRACTOR_LINKS = `Looking for a contractor? FDZ Construction handles <a href="/driveways-oklahoma-city" class="text-orange no-underline">concrete driveway installation</a>, <a href="/patios-oklahoma-city" class="text-orange no-underline">patio and garage slab construction</a>, <a href="/foundations-oklahoma-city" class="text-orange no-underline">foundation and retaining wall work</a>, and <a href="/commercial-concrete-oklahoma-city" class="text-orange no-underline">commercial concrete</a> across the <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City metro</a>.`;

export function renderBlogIndexHtml(h1: string): string {
  const items = BLOG_POSTS.map(
    (post) =>
      `<li><a href="/blog/${post.slug}"><strong>${post.title}</strong></a> — ${post.excerpt}</li>`,
  ).join("");
  return `
    <h1>${h1}</h1>
    <p>${BLOG_INDEX_INTRO}</p>
    <h2>Latest Articles</h2>
    <ul>${items}</ul>
    <p><a href="/#estimate">Get Free Estimate</a> · <a href="tel:4054584805">(405) 458-4805</a></p>
  `;
}

export function renderBlogPostHtml(post: BlogPost, h1: string): string {
  const sections = post.sections
    .map((section) => {
      const paragraphs = section.content.map((p) => `<p>${p}</p>`).join("");
      return `<h2>${section.heading}</h2>${paragraphs}`;
    })
    .join("");
  return `
    <h1>${h1}</h1>
    <p>${post.deck}</p>
    <p>${post.displayDate} · ${post.time} · By FDZ Construction LLC</p>
    ${sections}
    <p>${BLOG_POST_CONTRACTOR_LINKS}</p>
    <p><a href="/blog">All articles</a> · <a href="/#estimate">Get Free Estimate</a> · <a href="tel:4054584805">(405) 458-4805</a></p>
  `;
}
