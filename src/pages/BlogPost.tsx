import { useParams, Link } from "react-router-dom";
import { usePageSEO, useSEO } from "@/hooks/useSEO";
import FinalCTA from "@/components/FinalCTA";
import ProjectGrid from "@/components/ProjectGrid";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { BLOG_POST_CONTRACTOR_LINKS, BLOG_POSTS_BY_SLUG } from "@/content/blog";
import { estimatePath } from "@/lib/estimatePath";

const COST_SLUG = "cost-of-concrete-oklahoma-city-2026";

/** Comparison rows — ranges already published on this article or elsewhere on the site. */
const COST_COMPARISON_ROWS: {
  service: string;
  range: string;
  driver: string;
  href: string;
  linkLabel: string;
}[] = [
  {
    service: "Driveway",
    range: "$6–$10 / sq ft",
    driver: "Size, thickness, tear-out",
    href: "/driveways-oklahoma-city",
    linkLabel: "Driveways",
  },
  {
    service: "Patio (broom)",
    range: "$6–$10 / sq ft",
    driver: "Size, base depth",
    href: "/patios-oklahoma-city",
    linkLabel: "Patios",
  },
  {
    service: "Stamped patio",
    range: "$15–$22 / sq ft",
    driver: "Color, stamp, sealer",
    href: "/patios-oklahoma-city",
    linkLabel: "Stamped patios",
  },
  {
    service: "Sidewalk",
    // TODO(FDZ): publish a typical $/LF or $/sq ft sidewalk range for this table
    range: "Priced on site visit",
    driver: "Linear footage, ROW, ADA",
    href: "/sidewalks-oklahoma-city",
    linkLabel: "Sidewalks",
  },
  {
    service: "Foundation",
    range: "$9–$14 / sq ft",
    driver: "Footprint, thickness",
    href: "/foundations-oklahoma-city",
    linkLabel: "Foundations",
  },
  {
    service: "Commercial repair",
    // TODO(FDZ): pick one typical commercial-repair band for this overview table
    range: "Priced on site visit",
    driver: "Repair type, access",
    href: "/commercial-concrete-repair-oklahoma-city",
    linkLabel: "Commercial repair",
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS_BY_SLUG[slug || ""];
  if (!post || !slug) return <BlogPostMissing />;
  return <BlogPostBody path={`/blog/${slug}`} />;
}

function BlogPostMissing() {
  useSEO({
    title: "Blog | FDZ Construction LLC",
    description: "Concrete tips and guides from FDZ Construction LLC in Oklahoma City.",
    noindex: true,
  });
  return (
    <main className="page-hero">
      <h1>Post Not Found</h1>
      <Link to="/blog" className="btn-primary mt-8">
        ← Back to Blog
      </Link>
    </main>
  );
}

function BlogPostBody({ path }: { path: string }) {
  const seo = usePageSEO(path);
  const slug = path.replace(/^\/blog\//, "");
  const post = BLOG_POSTS_BY_SLUG[slug]!;
  const isCost = slug === COST_SLUG;
  const dateModified = post.dateModified ?? post.date;
  const updatedLabel =
    post.updatedLabel ??
    new Date(`${dateModified}T12:00:00`).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

  const articleJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    datePublished: post.date,
    dateModified,
    author: {
      "@type": "Organization",
      name: "FDZ Construction LLC",
    },
    publisher: { "@id": "https://fdzconstruction.com/#business" },
    mainEntityOfPage: seo.canonical,
  }).replace(/</g, "\\u003c");

  return (
    <main>
      <script
        type="application/ld+json"
        id="blog-article-schema"
        dangerouslySetInnerHTML={{ __html: articleJsonLd }}
      />
      <section className="page-hero">
        <span className="eyebrow mb-5 block">OKC Concrete Blog</span>
        <h1 className="mb-4">{seo.h1}</h1>
        <p className="prose-muted max-w-[600px] mb-4" style={{ fontSize: "1.1rem" }}>
          {post.deck}
        </p>
        <div className="flex gap-4 text-[0.75rem] text-muted-text mb-2 flex-wrap">
          <span>📅 {post.displayDate}</span>
          <span>⏱ {post.time}</span>
          {!isCost && <span>By FDZ Construction LLC</span>}
        </div>
        {isCost && (
          <>
            <p className="text-[0.78rem] text-muted-text mb-1">Updated {updatedLabel}</p>
            <p className="text-[0.78rem] text-muted-text mb-4">
              FDZ Construction LLC — licensed, bonded &amp; insured Oklahoma concrete contractor
            </p>
          </>
        )}
        <div className={`flex gap-2 flex-wrap ${isCost ? "" : "mb-4"}`}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.62rem] tracking-[0.1em] uppercase py-1 px-3 text-orange font-semibold"
              style={{ border: "1px solid hsl(var(--orange) / 0.35)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ScrollReveal>
        <article className="section-padding max-w-[780px]">
          {isCost && (
            <div className="mb-10">
              <table className="cost-table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Typical range</th>
                    <th>What drives price</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_COMPARISON_ROWS.map((row) => (
                    <tr key={row.service}>
                      <td>{row.service}</td>
                      <td>{row.range}</td>
                      <td>{row.driver}</td>
                      <td>
                        <Link to={row.href} className="text-orange no-underline font-medium">
                          {row.linkLabel}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {post.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2
                className="mb-4 text-xl"
                dangerouslySetInnerHTML={{
                  __html: section.heading.replace(/:\s*(.+)$/, ': <em class="h2-accent">$1</em>'),
                }}
              />
              {section.content.map((paragraph, j) => (
                <p key={j} className="prose-muted mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          ))}

          {isCost && (
            <div className="mb-10">
              <h2 className="mb-4 text-xl">Real projects behind these prices</h2>
              <ProjectGrid ids={["edmond-driveway", "norman-stamped-patio"]} />
            </div>
          )}

          <div className="mt-10 mb-8">
            <p className="prose-muted" dangerouslySetInnerHTML={{ __html: BLOG_POST_CONTRACTOR_LINKS }} />
          </div>
          <div
            className="flex gap-4 flex-wrap mt-12 pt-8"
            style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}
          >
            <Link to="/blog" className="btn-outline text-sm">
              ← All Articles
            </Link>
            <Link
              to={estimatePath(isCost ? COST_SLUG : undefined)}
              className="btn-primary text-sm"
            >
              {isCost ? "Request a Concrete Estimate →" : "Get Free Estimate →"}
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <InternalLinksHub showCities={false} />

      <FinalCTA
        {...(isCost
          ? {
              heading: "Need a Site-Specific Number?",
              headingAccent: "Request a Concrete Estimate.",
              description:
                "The ranges in this guide are for planning. Use the existing estimate form or call — a written estimate follows a look at the site.",
              buttonLabel: "Request a Concrete Estimate →",
              to: estimatePath(COST_SLUG),
            }
          : {})}
      />
    </main>
  );
}
