import { Link } from "react-router-dom";
import FinalCTA from "@/components/FinalCTA";
import TrustBar from "@/components/TrustBar";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { canonicalUrl } from "@/lib/siteUrl";
import { BLOG_INDEX_INTRO, BLOG_POSTS } from "@/content/blog";

export default function BlogIndex() {
  const title = "Concrete Tips & Guides for Oklahoma City | FDZ Construction LLC";
  const description = "Expert concrete guides for Oklahoma City homeowners. Pricing, specifications, soil tips, and maintenance advice from FDZ Construction LLC.";
  const canonical = canonicalUrl("/blog");
  useSEO({
    title,
    description,
    canonical,
    og: { title, description, type: "website", url: canonical },
  });

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow mb-5 block">OKC Concrete Blog</span>
        <h1 className="mb-4">Concrete Tips &<br/><em className="text-orange">Local OKC Guides.</em></h1>
        <p className="prose-muted max-w-[560px]" dangerouslySetInnerHTML={{ __html: BLOG_INDEX_INTRO }} />
      </section>

      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Latest Articles</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08] mt-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-stone no-underline block transition-colors hover:bg-orange/[0.05] p-6"
                style={{ borderTop: i < 2 ? "3px solid hsl(var(--orange))" : undefined }}
              >
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text mb-2.5">{post.displayDate} · {post.time}</div>
                <div className="font-display text-xl font-black uppercase tracking-[0.03em] text-concrete leading-tight mb-3">{post.title}</div>
                <p className="text-[0.85rem] text-muted-text leading-relaxed">{post.excerpt}</p>
                <div className="text-[0.72rem] text-orange font-bold tracking-[0.06em] uppercase mt-4">Read article →</div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <InternalLinksHub showBlogs={false} />

      <FinalCTA />
    </main>
  );
}
