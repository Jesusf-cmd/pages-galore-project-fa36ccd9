import ServicePage from "@/components/ServicePageTemplate";

export default function SoilStabilization() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="soil-stabilization-oklahoma-city"
      metaTitle="Soil Stabilization Oklahoma City | FDZ Construction LLC"
      metaDescription="Soil stabilization for concrete subgrade in Oklahoma City — lime treatment, cement stabilization, geogrid, subgrade replacement. OKC clay experts. Call (405) 458-4805."
      eyebrow="OKC Metro · Soil Stabilization · Licensed & Insured"
      title="Soil Stabilization in"
      titleAccent="Oklahoma City."
      description='Lime and cement soil stabilization for concrete subgrade in Oklahoma City. OKC clay shrinks and swells — stabilized subgrade is what keeps concrete flat. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Oklahoma City concrete fails from the bottom up. Permian red clay shrinks in dry summers and swells in wet winters — a cycle that breaks concrete slabs regardless of how well they were poured. Proper subgrade stabilization — lime treatment, cement stabilization, geogrid reinforcement, or subgrade replacement — is what separates concrete that stays flat from concrete that cracks and heaves. FDZ provides subgrade stabilization as a standalone service and as part of all commercial and industrial concrete projects throughout the OKC metro. Call (405) 458-4805."
      localExpertiseNote="OKC sits on Permian red clay with plasticity index (PI) values often ranging from 30–60 — among the most expansive soils in the country. A PI above 20 is considered problematic for concrete slabs. FDZ tests PI before specifying a treatment method. Lime stabilization typically reduces PI from 40+ to under 20 in two treatment cycles. Skipping this step on OKC clay is not a cost savings — it's deferred slab replacement."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🧪",
          title: "Lime Stabilization",
          description: "Hydrated lime mixed into clay subgrade — chemically reduces plasticity index (PI) and stops volume change. Standard treatment for OKC Permian clay.",
        },
        {
          icon: "🏗️",
          title: "Cement Stabilization",
          description: "Portland cement mixed into subgrade — increases bearing capacity and reduces PI. Used where lime alone is insufficient or when faster strength gain is needed.",
        },
        {
          icon: "🔲",
          title: "Geogrid Reinforcement",
          description: "Biaxial or triaxial geogrid placed in granular base — improves load distribution and controls differential settlement.",
        },
        {
          icon: "🔄",
          title: "Subgrade Replacement",
          description: "Remove and replace unstable native soil with engineered fill — used when lime/cement treatment isn't sufficient for project requirements.",
        },
        {
          icon: "📊",
          title: "PI Testing & Soil Assessment",
          description: "Atterberg limits testing to determine plasticity index before specifying treatment — we don't guess at OKC soil conditions.",
        },
        {
          icon: "💧",
          title: "Moisture Conditioning",
          description: "Pre-wetting or drying native clay to optimum moisture content before compaction — required for proper compaction density.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Treatment Methods",
        sectionTitle: "Soil Stabilization Methods We Use",
        items: [
          {
            title: "Lime Stabilization",
            bullets: [
              "Hydrated lime (calcium hydroxide) mixed into clay at 4–8% by dry weight of soil",
              "Lime reacts with clay minerals through pozzolanic reaction — permanently reduces PI and volume change potential",
              "Two-pass treatment common on high-PI OKC soils: initial lime mix, cure period, then second pass",
              "Most cost-effective treatment for OKC Permian clay with PI > 25",
            ],
          },
          {
            title: "Cement Stabilization",
            bullets: [
              "Portland cement mixed into subgrade at 3–7% by dry weight",
              "Achieves faster strength gain than lime — useful when schedule requires quick turnaround",
              "Less effective than lime at reducing PI on highly plastic clays — often combined with lime for dual treatment",
              "Standard for granular soils and low-PI clays where bearing capacity increase is the primary goal",
            ],
          },
          {
            title: "Geogrid and Base Reinforcement",
            bullets: [
              "Biaxial geogrid placed at subgrade/base interface to improve load distribution",
              "Triaxial geogrid for heavily loaded areas — dock approaches, truck courts, industrial slabs",
              "Reduces required base thickness and controls pumping at subgrade/base interface",
              "Always combined with proper compaction — geogrid does not substitute for compacted base",
            ],
          },
          {
            title: "Why OKC Clay Requires Treatment",
            bullets: [
              "Permian red clay PI values in OKC commonly range from 30–60 — highly to extremely expansive",
              "Expansive clay exerts 2,000–20,000 psf of upward pressure as it swells — concrete slabs are overwhelmed",
              "Annual OKC rainfall cycle (wet spring, dry late summer) creates repeated shrink-swell cycles",
              "Lime stabilization reduces PI from 40+ to under 20 — eliminates problematic volume change",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Treatment Selection",
          title: "Which Stabilization Method",
          titleAccent: "Is Right?",
          content: [
            "Method selection depends on existing soil PI, project loading, schedule, and budget. FDZ requires PI testing before specifying a treatment — guessing is not appropriate on OKC clay.",
          ],
          table: {
            headers: ["Condition", "Recommended Treatment"],
            rows: [
              ["Clay with PI 25–40", "Single-pass lime stabilization"],
              ["Clay with PI 40+", "Two-pass lime stabilization"],
              ["Low-PI soil, low bearing capacity", "Cement stabilization"],
              ["Highly plastic clay + bearing issue", "Lime + cement dual treatment"],
              ["Localized soft spots", "Subgrade replacement with engineered fill"],
              ["All treated subgrades", "Geogrid at subgrade/base interface"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete",
          titleAccent: "Foundation Services.",
          content: [
            "<a href='/warehouse-floor-replacement-oklahoma-city' class='text-orange no-underline font-medium'>Warehouse Floor Replacement</a> — Full slab replacement with proper subgrade treatment for OKC industrial facilities.",
            "<a href='/tilt-wall-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Tilt-Wall Concrete</a> — Casting slabs, grade beams, and interior slabs — all requiring proper subgrade treatment.",
            "<a href='/equipment-foundations-oklahoma-city' class='text-orange no-underline font-medium'>Equipment Foundations</a> — Isolated machine foundations where subgrade bearing capacity is critical.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>All Commercial Concrete</a> — Full range of commercial and industrial concrete services in OKC.",
          ],
        },
      ]}
      processEyebrow="Stabilization Process"
      processTitle="Soil Stabilization"
      processTitleAccent="Process Steps."
      processSteps={[
        { title: "Soil sampling and PI testing", description: "Collect soil samples from subgrade at proposed slab locations. Test for Atterberg limits (liquid limit, plastic limit, plasticity index) before specifying treatment." },
        { title: "Treatment design", description: "Based on PI test results and project loading requirements, specify lime percentage, cement percentage, or combination treatment. No guessing." },
        { title: "Subgrade scarification", description: "Scarify existing subgrade to treatment depth — typically 8\"–12\" for lime or cement stabilization." },
        { title: "Lime or cement spreading", description: "Spread treated material uniformly across scarified subgrade using rotary spreader — rate per treatment design." },
        { title: "Mixing", description: "Mix lime or cement into scarified soil using reclaimer or rotary tiller. Multiple passes required for uniform distribution." },
        { title: "Cure period (lime) / immediate compaction (cement)", description: "Lime requires 24–72 hour cure period before final compaction. Cement must be compacted within 2 hours of mixing." },
        { title: "Compaction and testing", description: "Compact treated subgrade to 95% standard Proctor minimum. Nuclear density testing to confirm — FDZ does not certify untested subgrade." },
      ]}
      faq={[
        {
          question: "Does every concrete slab in Oklahoma City need soil stabilization?",
          answer: "Not every slab, but most commercial and industrial slabs benefit from it. Residential driveways on OKC clay often develop problems without stabilization, but the cost-benefit calculation is different from a warehouse floor. For any slab where flatness and longevity matter — warehouses, tilt-wall buildings, truck courts — stabilization is not optional in OKC's clay environment.",
        },
        {
          question: "What is plasticity index (PI) and why does it matter?",
          answer: "Plasticity index measures how much a soil's volume changes with moisture — high PI means more shrink-swell. OKC clay commonly has PI of 30–60. Concrete slabs on high-PI clay crack and heave as the clay moves seasonally. Lime stabilization chemically reduces PI to under 20, which stops problematic volume change. FDZ tests PI before every commercial slab project in OKC.",
        },
        {
          question: "How deep does lime stabilization treat the soil?",
          answer: "Standard lime stabilization treats the top 8\"–12\" of subgrade. This is typically sufficient for most slab-on-grade applications. Heavier loaded slabs or poor subgrade at greater depth may require deeper treatment or subgrade replacement. FDZ specifies treatment depth based on project loading and subgrade conditions.",
        },
        {
          question: "How long does lime stabilization cure before we can pour concrete?",
          answer: "Lime-treated subgrade requires a minimum 72-hour cure period (often longer on high-PI soils) before final compaction and base placement. After compaction and nuclear density testing, granular base is placed and the slab can proceed. FDZ does not rush the lime cure — the pozzolanic reaction needs time to permanently modify the clay.",
        },
        {
          question: "What's the cost difference between stabilization and replacing a failed slab later?",
          answer: "Lime stabilization on a 10,000 sq. ft. warehouse slab typically adds $0.50–$1.50 per sq. ft. to the project. Replacing a failed warehouse slab later runs $8–$20 per sq. ft. and requires business disruption, forklift downtime, and often rack relocation. The math is not close — stabilization is the lower-cost option over any reasonable time horizon in OKC.",
        },
      ]}
    />
  );
}
