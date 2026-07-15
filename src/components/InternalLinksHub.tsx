import { Link } from "react-router-dom";
import { ScrollReveal } from "@/hooks/useScrollReveal";

const ALL_SERVICES = [
  { slug: "driveways-oklahoma-city", anchor: "concrete driveways in Oklahoma City", blurb: "New installs, replacements, and stamped driveway upgrades across the OKC metro." },
  { slug: "patios-oklahoma-city", anchor: "concrete patios and backyard slabs", blurb: "Broom-finish, stamped, and decorative patio slabs built on Oklahoma clay." },
  { slug: "foundations-oklahoma-city", anchor: "garage and home foundations", blurb: "Slab-on-grade foundations, footings, stem walls, and commercial pads." },
  { slug: "retaining-walls-oklahoma-city", anchor: "retaining walls in Oklahoma City", blurb: "Poured concrete, CMU block, and interlocking walls with proper drainage." },
  { slug: "sidewalks-oklahoma-city", anchor: "sidewalks and walkways", blurb: "ADA-compliant sidewalks, curb & gutter, and city right-of-way work." },
  { slug: "sewer-line-repair-oklahoma-city", anchor: "sewer line repair and installation", blurb: "Sewer line repair, replacement, and new installation — plus the concrete restoration it requires, done by the same crew." },
  { slug: "skid-steer-services-oklahoma-city", anchor: "skid steer services for land clearing & site work", blurb: "Land clearing, dirt work, leveling, gravel driveways, and brush hog mowing — self-performed on residential-scale lots up to about 2 acres." },
  { slug: "excavator-services-oklahoma-city", anchor: "excavator services for heavy digging & larger acreage", blurb: "Heavier land clearing with stump removal, deep grading and cut-fill, drainage work, and larger driveways or pads — self-performed, no subcontractors." },
  { slug: "commercial-concrete-oklahoma-city", anchor: "commercial concrete services", blurb: "Warehouse floors, commercial slabs, and site work for OKC businesses." },
  { slug: "parking-lots-oklahoma-city", anchor: "concrete parking lots", blurb: "New construction, replacement, and ADA-compliant commercial parking lots." },
];

const ALL_BLOGS = [
  { slug: "cost-of-concrete-oklahoma-city-2026", anchor: "cost of concrete in Oklahoma City" },
  { slug: "how-thick-should-driveway-be-oklahoma", anchor: "how thick a driveway should be in Oklahoma" },
  { slug: "rebar-vs-wire-mesh-concrete-slabs", anchor: "rebar vs wire mesh for concrete slabs" },
  { slug: "why-concrete-driveways-crack-oklahoma", anchor: "why concrete driveways crack in Oklahoma" },
  { slug: "best-time-of-year-to-pour-concrete-okc", anchor: "best time of year to pour concrete in OKC" },
];

const ALL_CITIES = [
  { slug: "oklahoma-city-concrete", anchor: "concrete contractor in Oklahoma City" },
  { slug: "edmond-concrete", anchor: "concrete contractor in Edmond" },
  { slug: "norman-ok-concrete", anchor: "driveway and patio contractor in Norman" },
  { slug: "moore-oklahoma-concrete", anchor: "foundation and concrete work in Moore" },
  { slug: "yukon-oklahoma-concrete", anchor: "concrete contractor in Yukon" },
  { slug: "mustang-oklahoma-concrete", anchor: "concrete contractor in Mustang" },
  { slug: "midwest-city-oklahoma-concrete", anchor: "concrete contractor in Midwest City" },
  { slug: "del-city-oklahoma-concrete", anchor: "concrete contractor in Del City" },
  { slug: "stillwater-oklahoma-concrete", anchor: "concrete & sewer line contractor in Stillwater" },
];

interface InternalLinksHubProps {
  currentServiceSlug?: string;
  showServices?: boolean;
  showBlogs?: boolean;
  showCities?: boolean;
}

export default function InternalLinksHub({
  currentServiceSlug,
  showServices = true,
  showBlogs = true,
  showCities = true,
}: InternalLinksHubProps) {
  const services = ALL_SERVICES.filter((s) => s.slug !== currentServiceSlug);

  return (
    <>
      {showServices && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Related Services</div>
            <h2 className="mb-4">Related Concrete Services<br/><em className="h2-accent">in Oklahoma City.</em></h2>
            <p className="prose-muted mb-6 max-w-[760px]">
              Most concrete projects involve more than one element — a new driveway often pairs with a sidewalk extension, and a backyard patio frequently ties into retaining wall or foundation work. Here are the other services FDZ Construction offers across the OKC metro.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)", listStyle: "none", padding: 0 }}>
              {services.map((s) => (
                <li key={s.slug} className="bg-stone p-5 md:p-6">
                  <a href={`/${s.slug}`} className="text-orange font-display text-sm tracking-[0.04em] uppercase no-underline hover:underline">{s.anchor} →</a>
                  <p className="text-[0.82rem] text-muted-text mt-2 leading-relaxed font-light">{s.blurb}</p>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>
      )}

      {showBlogs && (
        <ScrollReveal>
          <section className="section-padding">
            <div className="section-eye">Helpful Resources</div>
            <h2 className="mb-4">Helpful Concrete Resources<br/><em className="h2-accent">for Oklahoma Homeowners.</em></h2>
            <p className="prose-muted mb-6 max-w-[760px]">
              Planning a project? These guides walk through pricing, specs, timing, and the most common questions we hear from Oklahoma homeowners before they pour.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ listStyle: "none", padding: 0 }}>
              {ALL_BLOGS.map((b) => (
                <li key={b.slug}>
                  <a href={`/blog/${b.slug}`} className="text-orange no-underline hover:underline text-[0.92rem]">→ Read about the {b.anchor}</a>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>
      )}

      {showCities && (
        <ScrollReveal>
          <section className="section-padding section-alt">
            <div className="section-eye">Areas We Serve</div>
            <h2 className="mb-4">Areas We Serve in<br/><em className="h2-accent">the Oklahoma City Metro.</em></h2>
            <p className="prose-muted mb-6 max-w-[760px]">
              FDZ Construction LLC pours concrete across the entire OKC metro. Visit your city page for local soil notes, zip codes, and recent project examples.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3" style={{ listStyle: "none", padding: 0 }}>
              {ALL_CITIES.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`} className="text-orange no-underline hover:underline text-[0.88rem]">→ {c.anchor}</a>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>
      )}
    </>
  );
}
