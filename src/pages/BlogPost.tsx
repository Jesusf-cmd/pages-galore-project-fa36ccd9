import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const blogPosts: Record<string, { title: string; date: string; time: string; tags: string[]; deck: string; sections: { heading: string; content: string[] }[] }> = {
  "why-concrete-driveways-crack-oklahoma": {
    title: "Why Concrete Driveways Crack in Oklahoma",
    date: "2026-03-15", time: "7 min read",
    tags: ["Oklahoma City Concrete", "Driveway Cracking", "OKC Clay Soil"],
    deck: "Five real causes — and how Redwood Construction builds driveways in Oklahoma City that don't.",
    sections: [
      { heading: "The Real Culprit: Oklahoma Clay Soil", content: ["Oklahoma City sits on some of the most expansive clay soil in the country. When it rains, the clay absorbs water and expands. When drought hits, it contracts. A concrete driveway goes through this cycle multiple times every year. Concrete doesn't flex — when clay pushes up unevenly, it creates tension and cracks."] },
      { heading: "Cause #1: Inadequate Base Preparation", content: ["This is the most common cause. Proper base prep means excavating to the right depth, compacting the native subgrade, and installing 4–6 inches of compacted aggregate base. A lot of contractors cut corners here because it takes time and equipment."] },
      { heading: "Cause #2: Missing or Poorly Placed Reinforcement", content: ["On Oklahoma clay, rebar is the right call for driveways — placed at mid-depth in the slab on chairs, not lying on the ground. Wire mesh alone doesn't provide enough tensile strength to resist soil movement."] },
      { heading: "Cause #3: Missing or Wrong Control Joints", content: ["Control joints need to be cut to the right depth (minimum 1/4 of slab thickness) and spaced correctly — typically 8–12 feet apart. They need to be cut within the first 24 hours."] },
      { heading: "Cause #4: Wrong Concrete Mix", content: ["For residential driveways in Oklahoma, 4,000 PSI is the appropriate minimum. Adding extra water reduces strength and increases shrinkage."] },
      { heading: "Cause #5: Drainage Problems", content: ["Water accelerates everything that makes Oklahoma clay problematic. A driveway graded flat or toward the house keeps soil saturated, increasing swell-shrink cycles."] },
    ],
  },
  "cost-of-concrete-oklahoma-city-2026": {
    title: "Cost of Concrete in Oklahoma City (2026 Guide)",
    date: "2026-03-10", time: "8 min read",
    tags: ["Concrete Cost OKC", "Pricing Guide", "2026"],
    deck: "Per square foot rates, typical project totals, and what drives price in the OKC market — updated for 2026.",
    sections: [
      { heading: "The Short Answer: $6–$10 Per Square Foot", content: ["Standard residential concrete in OKC — driveways, patios, garage slabs — runs $6–$10 per square foot installed. Foundation work runs $9–$14. Stamped concrete runs $15–$22."] },
      { heading: "What Makes Concrete More Expensive in OKC", content: ["Deep excavation on problem clay, tight truck access requiring a pump, upgrade to 4,000 PSI mix, stamped finishes, and slope that requires more forming work all push prices higher."] },
      { heading: "Typical Project Costs in Oklahoma City (2026)", content: ["Standard driveway (24×40): $5,760–$9,600. Patio slab (20×20): $2,400–$4,000. Stamped patio (400 sq ft): $6,000–$8,800. Foundation (1,200 sq ft): $10,800–$16,800."] },
      { heading: "Getting an Accurate Quote", content: ["Phone estimates aren't reliable for concrete. Every project needs a site visit to assess soil conditions, access, grade, and scope. We provide free on-site estimates within one business day."] },
    ],
  },
  "rebar-vs-wire-mesh-concrete-slabs": {
    title: "Rebar vs Wire Mesh for Concrete Slabs",
    date: "2026-03-05", time: "6 min read",
    tags: ["Rebar", "Wire Mesh", "Concrete Reinforcement"],
    deck: "Which one does your Oklahoma City concrete project actually need — and why the answer matters on OKC clay soil.",
    sections: [
      { heading: "What Wire Mesh Actually Does", content: ["Wire mesh (welded wire fabric) controls minor shrinkage cracking and holds pieces together if a slab does crack. It does not add significant structural strength."] },
      { heading: "What Rebar Does That Wire Mesh Doesn't", content: ["Rebar provides tensile strength — the ability to resist bending forces. On Oklahoma's expansive clay, this is critical because the soil actively pushes up against slabs."] },
      { heading: "Oklahoma Clay Soil: Why the Choice Matters More Here", content: ["In a state with stable soil, wire mesh might be adequate for a patio. In Oklahoma, where clay swells and contracts dramatically, rebar is the right call for any slab that needs to last."] },
      { heading: "The Cost Difference", content: ["Rebar adds $0.50–$1.50 per sq ft over wire mesh. On a 400 sq ft patio, that's $200–$600. Over a 30-year lifespan, it's the cheapest insurance you can buy."] },
    ],
  },
  "how-thick-should-driveway-be-oklahoma": {
    title: "How Thick Should a Driveway Be in Oklahoma?",
    date: "2026-02-28", time: "5 min read",
    tags: ["Driveway Thickness", "Oklahoma", "Concrete Specs"],
    deck: "Four inches is the standard — but not always the right answer. Here's how to spec your driveway correctly for Oklahoma conditions.",
    sections: [
      { heading: "The Standard: 4 Inches for Passenger Vehicles", content: ["4 inches of concrete on a properly prepared base is adequate for standard passenger vehicles — cars, minivans, and light SUVs."] },
      { heading: "When You Need More: 5 to 6 Inches", content: ["Heavy trucks, RVs, boat trailers, and commercial vehicles require 5–6 inches. On high shrink-swell clay, we sometimes recommend 5 inches even for standard use."] },
      { heading: "The Base Matters as Much as the Thickness", content: ["A 6-inch slab on uncompacted soil will fail faster than a 4-inch slab on properly prepared aggregate base. Base prep is the single most important factor."] },
    ],
  },
  "best-time-of-year-to-pour-concrete-okc": {
    title: "Best Time of Year to Pour Concrete in OKC",
    date: "2026-02-20", time: "6 min read",
    tags: ["Concrete Timing", "OKC Weather", "Pour Season"],
    deck: "Fall is the ideal window. But experienced concrete contractors in Oklahoma City work year-round — with the right protocols.",
    sections: [
      { heading: "The Ideal Window: October Through April", content: ["Fall and spring offer the best temperatures for concrete curing in Oklahoma — moderate heat, manageable humidity, and minimal freeze risk."] },
      { heading: "Summer Concrete in OKC: It Can Be Done", content: ["Oklahoma summers regularly exceed 100°F. We adjust by pouring early morning, using evaporation retarders, and applying curing compound immediately."] },
      { heading: "Winter Concrete: The Cold Weather Rules", content: ["Below 40°F, concrete curing slows dramatically. We use heated water, insulated blankets, and monitor slab temperatures to ensure proper strength development."] },
      { heading: "Spring Storm Season: The Underrated Risk", content: ["March through May brings heavy rain that can wash out fresh concrete or saturate subgrade. Scheduling flexibility and weather monitoring are essential."] },
    ],
  },
};

const blogSEO: Record<string, { title: string; description: string }> = {
  "why-concrete-driveways-crack-oklahoma": {
    title: "Why Concrete Driveways Crack in Oklahoma | Redwood Construction LLC",
    description: "Five real reasons concrete driveways crack in Oklahoma — clay soil, bad base prep, missing rebar — and how to prevent every one of them.",
  },
  "cost-of-concrete-oklahoma-city-2026": {
    title: "Cost of Concrete in Oklahoma City 2026 | Redwood Construction LLC",
    description: "Updated 2026 concrete pricing for Oklahoma City. Per square foot rates, typical project costs, and what drives price in the OKC market.",
  },
  "rebar-vs-wire-mesh-concrete-slabs": {
    title: "Rebar vs Wire Mesh for Concrete Slabs | Redwood Construction LLC",
    description: "Rebar vs wire mesh for concrete slabs in Oklahoma. Which your project actually needs on OKC clay soil — and why the choice matters long-term.",
  },
  "how-thick-should-driveway-be-oklahoma": {
    title: "How Thick Should a Driveway Be in Oklahoma | Redwood Construction LLC",
    description: "How thick should a concrete driveway be in Oklahoma? 4 inches is standard — but not always right. Learn when you need 5–6 inches instead.",
  },
  "best-time-of-year-to-pour-concrete-okc": {
    title: "Best Time to Pour Concrete in OKC | Redwood Construction LLC",
    description: "Best time to pour concrete in Oklahoma City. Fall is ideal, but experienced OKC contractors work year-round with the right protocols.",
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug || ""];
  const seo = blogSEO[slug || ""];

  useSEO({
    title: seo?.title || `${post?.title || "Blog"} | Redwood Construction LLC`,
    description: seo?.description || post?.deck || "Concrete tips and guides from Redwood Construction LLC in Oklahoma City.",
  });

  if (!post) {
    return (
      <main className="page-hero">
        <h1>Post Not Found</h1>
        <Link to="/blog" className="btn-primary mt-8">← Back to Blog</Link>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow mb-5 block">OKC Concrete Blog</span>
        <h1 className="mb-4">{post.title}</h1>
        <p className="prose-muted max-w-[600px] mb-4" style={{ fontSize: "1.1rem" }}>{post.deck}</p>
        <div className="flex gap-4 text-[0.75rem] text-muted-text mb-4">
          <span>📅 {post.date}</span>
          <span>⏱ {post.time}</span>
          <span>By Redwood Construction LLC</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map(tag => (
            <span key={tag} className="text-[0.62rem] tracking-[0.1em] uppercase py-1 px-3 text-orange font-semibold" style={{ border: "1px solid hsl(var(--orange) / 0.35)" }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <article className="section-padding max-w-[780px]">
          {post.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="mb-4 text-xl" dangerouslySetInnerHTML={{ __html: section.heading.replace(/:\s*(.+)$/, ': <em class="h2-accent">$1</em>') }} />
              {section.content.map((p, j) => (
                <p key={j} className="prose-muted mb-4">{p}</p>
              ))}
            </div>
          ))}
          <div className="mt-10 mb-8">
            <p className="prose-muted">Looking for a contractor? Redwood Construction handles <Link to="/concrete-driveways" className="text-orange no-underline">concrete driveway installation</Link>, <Link to="/concrete-slabs" className="text-orange no-underline">patio and garage slab construction</Link>, <Link to="/stamped-concrete" className="text-orange no-underline">stamped decorative concrete</Link>, and <Link to="/concrete-foundations" className="text-orange no-underline">foundation work</Link> across the <Link to="/oklahoma-city-concrete" className="text-orange no-underline">Oklahoma City metro</Link>.</p>
          </div>
          <div className="flex gap-4 flex-wrap mt-12 pt-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to="/blog" className="btn-outline text-sm">← All Articles</Link>
            <Link to="/#estimate" className="btn-primary text-sm">Get Free Estimate →</Link>
          </div>
        </article>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
