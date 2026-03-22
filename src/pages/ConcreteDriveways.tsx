import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteDriveways() {
  return (
    <ServicePage
      metaTitle="Concrete Driveways in Oklahoma City | Redwood Construction LLC"
      metaDescription="Durable concrete driveways in Oklahoma City. Reinforced for OKC clay soil with 4,000 PSI mix. Residential driveway installation and replacement. Free estimate."
      eyebrow="OKC Metro · Driveway Contractors · Licensed & Insured"
      title="Concrete Driveways"
      titleAccent="Oklahoma City."
      description='New installs and full replacements for <strong>Oklahoma City homeowners</strong> — reinforced for OKC clay soil, 4,000 PSI mix, sealed on every pour. <a href="tel:4052470027">(405) 247-0027</a>.'
      sections={[
        {
          eyebrow: "Why OKC Driveways Fail",
          title: "The Problem With",
          titleAccent: "Cheap Driveways.",
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the country — and most <strong>concrete driveway contractors OKC</strong> don't build for it. When clay swells with rain and contracts during drought, a driveway without proper base prep and reinforcement will crack, heave, and fail within a few years.",
            "Redwood Construction is a <strong>concrete company in OKC</strong> that builds for Oklahoma conditions. Every driveway starts with proper excavation, compacted aggregate base, rebar at mid-slab depth, 4,000 PSI concrete, and control joints cut on time. We also handle <a href='/concrete-slabs'>patio slabs</a> and <a href='/concrete-foundations'>foundation work</a> with the same standards.",
          ],
          stats: [
            { value: "4,000", label: "PSI min mix" },
            { value: "4–6\"", label: "Slab thickness" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Professional Driveway Services",
          title: "Why Choose Redwood",
          titleAccent: "Construction LLC.",
          content: [
            "When you hire Redwood Construction for your <strong>concrete driveway in Oklahoma City</strong>, you get a locally owned company that understands the unique challenges of building on Oklahoma soil. We don't subcontract — our own crew handles every project from excavation to final sealing.",
            "We've completed over 500 concrete projects across the OKC metro, including driveways in <a href='/edmond-concrete'>Edmond</a>, <a href='/norman-ok-concrete'>Norman</a>, <a href='/mustang-oklahoma-concrete'>Mustang</a>, and <a href='/moore-oklahoma-concrete'>Moore</a>. Every job gets the same attention: site assessment, soil evaluation, engineered base prep, and a written quote that doesn't change.",
            "Our BBB A+ rating and 4.9-star Google reviews come from doing the work right — proper base compaction, correct rebar placement, 4,000 PSI concrete, and control joints cut within 24 hours. We respond to every estimate request within one business day.",
          ],
        },
        {
          eyebrow: "Concrete Cost Oklahoma City",
          title: "What a Driveway",
          titleAccent: "Costs in OKC.",
          alt: true,
          content: [
            "The <strong>cost of a concrete driveway in Oklahoma City</strong> in 2026 runs $6–$10 per square foot installed — including base prep, concrete, rebar, finishing, and control joints. Tear-out of existing pavement adds $1–$2/sq ft. A typical 24×40 ft driveway runs <strong>$5,760–$9,600</strong>.",
            "Pricing varies based on soil conditions, site access, thickness requirements, and finish type. <a href='/stamped-concrete'>Stamped concrete driveways</a> cost $15–$22/sq ft for premium pattern and color work.",
          ],
          table: {
            headers: ["Service", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Standard broom driveway", "24×40 ft (960 sq ft)", "<strong>$5,760–$9,600</strong>", "4\", 3,000 PSI, wire mesh"],
              ["Heavy-duty (trucks/RVs)", "24×40 ft (960 sq ft)", "<strong>$6,720–$11,520</strong>", "5–6\", 4,000 PSI, rebar"],
              ["Stamped driveway", "960 sq ft", "<strong>$14,400–$21,120</strong>", "Pattern + release + sealer"],
              ["Tear-out & replace", "960 sq ft", "<strong>$7,680–$12,480</strong>", "Demo of existing pavement"],
            ],
          },
          infoBlock: "<strong>Red flag:</strong> Any quote 30%+ below these ranges is almost certainly cutting base prep, reinforcement, or concrete PSI.",
        },
        {
          eyebrow: "Materials & Specs",
          title: "What Goes Into",
          titleAccent: "A Lasting Driveway.",
          content: [
            "We use 4,000 PSI ready-mix concrete from Oklahoma City batch plants on all residential driveways. Rebar (#3 at 18\" spacing or #4 at 24\") is specified based on load and site conditions.",
            "Aggregate base is Class A crushed limestone, compacted in lifts to 95% standard proctor density. Curing compound is applied immediately after finishing. For related structural work, see our <a href='/concrete-foundations'>foundation services</a> and <a href='/retaining-walls'>retaining wall installation</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "A standard concrete driveway typically costs $5,760–$9,600 for a 24×40 ft pour — about $6–$10 per sq ft installed." },
        { question: "What makes a good concrete driveway contractor in OKC?", answer: "A good driveway contractor in OKC will visit your site before quoting, specify concrete PSI and base depth in writing, use rebar on clay soil, and cut control joints within 24 hours." },
        { question: "Do I need rebar or wire mesh in my Oklahoma City driveway?", answer: "On Oklahoma's expansive clay soil, rebar is recommended over wire mesh. Rebar provides tensile strength to resist bending from soil movement." },
        { question: "How thick should my Oklahoma City concrete driveway be?", answer: "4 inches is standard for passenger vehicles. For heavy pickups, RVs, or boat trailers, 5–6 inches is recommended." },
        { question: "How long will a concrete driveway last in Oklahoma?", answer: "A properly built concrete driveway should last 30–50 years with minimal maintenance. The key factors are base compaction, slab thickness, rebar reinforcement, and proper control joints." },
      ]}
    />
  );
}
