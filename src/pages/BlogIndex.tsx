import { Link } from "react-router-dom";
import FinalCTA from "@/components/FinalCTA";
import TrustBar from "@/components/TrustBar";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { usePageSEO } from "@/hooks/useSEO";
import { BLOG_INDEX_INTRO, BLOG_POSTS } from "@/content/blog";

export default function BlogIndex() {
  const seo = usePageSEO("/blog");

  return (
    <main>
      <section className="page-hero">
        <span className="eyebrow mb-5 block">OKC Concrete Blog</span>
        <h1 className="mb-4">{seo.h1}</h1>
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
                <div className="text-[0.62rem] tracking-[0.1em] uppercase text-orange font-semibold mb-2">{post.displayDate}</div>
                <h2 className="font-display text-xl font-extrabold uppercase tracking-[0.02em] text-concrete mb-2">{post.title}</h2>
                <p className="text-[0.86rem] text-muted-text leading-relaxed">{post.excerpt}</p>
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
