import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { canonicalUrl } from "@/lib/siteUrl";
import FinalCTA from "@/components/FinalCTA";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { BLOG_POST_CONTRACTOR_LINKS, BLOG_POSTS_BY_SLUG } from "@/content/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS_BY_SLUG[slug || ""];

  useSEO({
    title: post?.seoTitle || `${post?.title || "Blog"} | FDZ Construction LLC`,
    description: post?.seoDescription || post?.deck || "Concrete tips and guides from FDZ Construction LLC in Oklahoma City.",
    canonical: post && slug ? canonicalUrl(`/blog/${slug}`) : undefined,
    noindex: !post,
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
          <span>By FDZ Construction LLC</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {post.tags.map((tag) => (
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
              {section.content.map((paragraph, j) => (
                <p key={j} className="prose-muted mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          ))}
          <div className="mt-10 mb-8">
            <p className="prose-muted" dangerouslySetInnerHTML={{ __html: BLOG_POST_CONTRACTOR_LINKS }} />
          </div>
          <div className="flex gap-4 flex-wrap mt-12 pt-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to="/blog" className="btn-outline text-sm">← All Articles</Link>
            <Link to="/#estimate" className="btn-primary text-sm">Get Free Estimate →</Link>
          </div>
        </article>
      </ScrollReveal>

      <InternalLinksHub showCities={false} />

      <FinalCTA />
    </main>
  );
}
