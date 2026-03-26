import { Link } from "react-router-dom";
import FinalCTA from "@/components/FinalCTA";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const posts = [
  { slug: "why-concrete-driveways-crack-oklahoma", title: "Why Concrete Driveways Crack in Oklahoma", date: "March 15, 2026", time: "7 min read", excerpt: "Five real causes — clay soil, base prep failures, missing reinforcement — and how to prevent them." },
  { slug: "cost-of-concrete-oklahoma-city-2026", title: "Cost of Concrete in Oklahoma City (2026 Guide)", date: "March 10, 2026", time: "8 min read", excerpt: "Per square foot rates, typical project totals, and what drives price in the OKC market." },
  { slug: "rebar-vs-wire-mesh-concrete-slabs", title: "Rebar vs Wire Mesh for Concrete Slabs", date: "March 5, 2026", time: "6 min read", excerpt: "Which one does your Oklahoma City project actually need — and why the answer matters on OKC clay soil." },
  { slug: "how-thick-should-driveway-be-oklahoma", title: "How Thick Should a Driveway Be in Oklahoma?", date: "February 28, 2026", time: "5 min read", excerpt: "Four inches is the standard — but not always the right answer for Oklahoma conditions." },
  { slug: "best-time-of-year-to-pour-concrete-okc", title: "Best Time of Year to Pour Concrete in OKC", date: "February 20, 2026", time: "6 min read", excerpt: "Fall is the ideal window. But experienced contractors work year-round — with the right protocols." },
];

export default function BlogIndex() {
  useSEO({
    title: "Concrete Tips & Guides for Oklahoma City | Redwood Construction LLC",
    description: "Expert concrete guides for Oklahoma City homeowners. Pricing, specifications, soil tips, and maintenance advice from Redwood Construction LLC.",
  });

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow mb-5 block">OKC Concrete Blog</span>
        <h1 className="mb-4">Concrete Tips &<br/><em className="text-orange">Local OKC Guides.</em></h1>
        <p className="prose-muted max-w-[560px]">Straight talk about concrete in Oklahoma City — pricing, specifications, soil conditions, and what actually makes <Link to="/driveways-oklahoma-city" className="text-orange no-underline">concrete driveways</Link>, <Link to="/patios-oklahoma-city" className="text-orange no-underline">patios and slabs</Link>, and <Link to="/foundations-oklahoma-city" className="text-orange no-underline">foundations</Link> last.</p>
      </section>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Latest Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08] mt-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-stone no-underline block transition-colors hover:bg-orange/[0.05] p-6"
                style={{ borderTop: i < 2 ? "3px solid hsl(var(--orange))" : undefined }}
              >
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text mb-2.5">{post.date} · {post.time}</div>
                <div className="font-display text-xl font-black uppercase tracking-[0.03em] text-concrete leading-tight mb-3">{post.title}</div>
                <p className="text-[0.85rem] text-muted-text leading-relaxed">{post.excerpt}</p>
                <div className="text-[0.72rem] text-orange font-bold tracking-[0.06em] uppercase mt-4">Read article →</div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <FinalCTA />
    </main>
  );
}
