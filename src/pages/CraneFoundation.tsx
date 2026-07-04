import ServicePage from "@/components/ServicePageTemplate";

export default function CraneFoundation() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="crane-foundation-installation-oklahoma-city"
      metaTitle="Crane Foundation Installation Oklahoma City | Concrete Crane Pads | FDZ Construction"
      metaDescription="Crane foundation installation in Oklahoma City — concrete crane pads, anchor bolt coordination, and reinforcement placed per engineered drawings. Licensed & insured. Call (405) 458-4805."
      eyebrow="Commercial Concrete · Oklahoma City"
      title="Crane Foundation Installation in"
      titleAccent="Oklahoma City."
      description='Crane foundations installed per approved plans — anchor bolt and embed coordination, reinforcement placed per plan/spec, and full coordination with the GC, engineer, crane provider, and owner. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Crane foundations carry some of the highest point loads of any concrete work on a commercial site. The concrete scope — excavation, forming, reinforcement placement, anchor bolt layout, and pour — must be executed exactly per engineered drawings. FDZ Construction handles the concrete installation scope for crane foundations across the Oklahoma City metro: reinforcement placed per plan/spec, anchor bolts and embeds coordinated directly with the crane supplier and engineer, and pour sequencing coordinated with the GC. We install per approved plans — we do not engineer or design crane foundations. Call (405) 458-4805 to discuss scope and scheduling."
      localExpertiseNote="Oklahoma City's expansive Permian-age clay requires deeper sub-base excavation under crane foundations than most other markets. The clay's swell-shrink cycle under heavy point loads causes differential settlement without proper sub-base correction and drainage. Every crane foundation we install includes sub-base evaluation and drainage detailing — not just the pour itself."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏗️",
          title: "Crane Foundation Pour",
          description:
            "Concrete pour per engineered drawings — forming, reinforcement placement, and pour sequenced with crane supplier and GC. Not a design service — installed per approved plans.",
        },
        {
          icon: "⚙️",
          title: "Anchor Bolt & Embed Coordination",
          description:
            "Anchor bolt templates and embed plates coordinated directly with crane supplier and structural engineer before any concrete is placed. No field improvisation on bolt pattern.",
        },
        {
          icon: "🔩",
          title: "Reinforcement Placement Per Spec",
          description:
            "Rebar schedule placed per structural drawings — bar size, spacing, and cover specified by the engineer of record. FDZ places per the drawings, period.",
        },
        {
          icon: "🧱",
          title: "Sub-Base Evaluation & Preparation",
          description:
            "Excavation, sub-base evaluation, and correction before any forming begins. OKC clay requires specific sub-base treatment under high-load foundations.",
        },
        {
          icon: "📐",
          title: "Pedestal & Elevated Foundation Pours",
          description:
            "Above-grade pedestals and elevated foundation pours for overhead crane rails — formed, reinforced, and poured to the structural engineer's drawings.",
        },
        {
          icon: "🤝",
          title: "GC & Trade Coordination",
          description:
            "Coordination with GC, owner, structural engineer, and crane supplier from scope review through anchor bolt final. Available for pre-bid scope review.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Service Scope",
        sectionTitle: "Crane Foundation Concrete Scope",
        items: [
          {
            title: "Foundation Excavation & Sub-Base",
            bullets: [
              "Excavation per engineered drawings — depth and bearing elevation per geotechnical report",
              "Sub-base assessment after excavation — soft or unsuitable material removed and replaced",
              "Compacted aggregate or lean concrete mud mat per spec before reinforcement",
              "Drainage detailing around foundation per drawings",
              "OKC clay sub-base often requires over-excavation and engineered fill — we evaluate and report to the GC and engineer",
            ],
          },
          {
            title: "Forming & Reinforcement",
            bullets: [
              "Forms set per drawing dimensions — elevation and orientation confirmed with GC and crane supplier",
              "Reinforcement placed per structural drawings — bar size, spacing, concrete cover, and lap splice locations per spec",
              "Anchor bolt templates and embed plates installed per crane supplier shop drawings before pour",
              "Utility conduit and grout sleeves placed per drawings",
              "Rebar inspection coordination with GC and special inspector before pour authorization",
            ],
          },
          {
            title: "Concrete Pour & Finishing",
            bullets: [
              "Concrete mix per spec — PSI and admixtures per structural drawings (typically 4,000–5,000 PSI)",
              "Pour sequencing coordinated with GC to avoid interference with other trades",
              "Top of foundation finished to tolerance required for base plate bearing",
              "Cure per spec — minimum cure time before any load or anchor bolt tensioning",
              "Final elevation and anchor bolt location survey available for owner and crane installer",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "Scope Review",
          description:
            "Review engineered drawings with GC and crane supplier before any work begins. Confirm anchor bolt template, embed locations, concrete spec, and pour sequence.",
        },
        {
          title: "Excavation & Sub-Base",
          description:
            "Excavate to bearing elevation per drawings. Evaluate sub-base and report any unsuitable material to GC and engineer. Correct before proceeding.",
        },
        {
          title: "Forming & Reinforcement",
          description:
            "Set forms to drawing dimensions. Place reinforcement per structural drawings. Install anchor bolt templates and embeds from crane supplier shop drawings.",
        },
        {
          title: "Inspection & Pour",
          description:
            "Coordinate with special inspector before pour. Pour per spec PSI and sequence. Finish to bearing tolerance. Cure per spec.",
        },
        {
          title: "Survey & Handoff",
          description:
            "Final elevation and anchor bolt location confirmed. Foundation turned over to GC and crane installer per project closeout sequence.",
        },
      ]}
      processEyebrow="How It Runs"
      processTitle="Crane Foundation"
      processTitleAccent="Sequence."
      specs={[
        { label: "Concrete PSI", value: "Per structural drawings — typically 4,000–5,000 PSI" },
        { label: "Reinforcement", value: "Placed per structural engineer's drawings and details" },
        { label: "Anchor Bolts", value: "Per crane supplier shop drawings — coordinated before pour" },
        { label: "Sub-Base", value: "Evaluated after excavation — corrected before forming" },
        { label: "Cure Time", value: "Per structural spec — no loading before specified strength" },
        { label: "Tolerances", value: "Bearing surface finished to spec for base plate bearing" },
      ]}
      sections={[
        {
          eyebrow: "Commercial Trust",
          title: "Set Up to Work with",
          titleAccent: "GCs, Engineers & Crane Suppliers.",
          content: [
            "FDZ Construction LLC is set up to work with general contractors, facility managers, structural engineers, and crane providers. We can review plans, photos, scope documents, and anchor bolt templates before pricing.",
            "• COI available upon request  • Bonding available for qualified projects  • Plan-based concrete estimates  • Coordination with GC, engineer, crane provider, and owner  • Sub-base evaluation and reporting before forming begins  • Reinforcement placed per plan/spec — no field improvisation  • After-hours and phased scheduling for occupied facilities",
          ],
        },
        {
          eyebrow: "Critical Note",
          title: "What FDZ Does and",
          titleAccent: "Does Not Do.",
          content: [
            "FDZ Construction installs crane foundations per approved engineered drawings. We do not design crane foundations, specify anchor bolt patterns, or determine bearing capacity — that is the structural engineer's scope. We install what the engineer draws.",
            "Anchor bolt placement comes from the crane supplier's shop drawings — we do not improvise field bolt locations. If drawings are not available, we will not place anchors until they are. This is the only correct approach for a crane foundation.",
          ],
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/equipment-pad-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Equipment Pad Concrete</a> — Generator pads, HVAC slabs, transformer bases, and mechanical equipment foundations.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Hub</a> — Full overview of FDZ Construction's commercial concrete services across OKC.",
            "<a href='/foundations-oklahoma-city' class='text-orange no-underline font-medium'>Foundations</a> — Commercial slab-on-grade and structural foundations for buildings and structures.",
            "<a href='/tilt-wall-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Tilt-Wall Concrete</a> — Grade beams, casting slabs, and structural concrete for tilt-wall construction.",
          ],
        },
        {
          eyebrow: "Send Plans or Scope",
          title: "Request a",
          titleAccent: "Commercial Estimate.",
          content: [
            "FDZ Construction can review crane foundation drawings, anchor bolt templates, or scope documents and provide a clear estimate for the concrete installation scope. Call (405) 458-4805 or email jesus@fdzconstruction.com.",
          ],
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
      ]}
      faq={[
        {
          question: "Does FDZ design crane foundations?",
          answer:
            "No. FDZ installs crane foundations per approved engineered drawings. Foundation design, anchor bolt specification, and bearing capacity determination are the structural engineer's scope. We install what the engineer draws.",
        },
        {
          question: "Who provides the anchor bolt template?",
          answer:
            "The crane supplier provides anchor bolt shop drawings with bolt pattern, diameter, projection, and template layout. FDZ installs per those drawings — coordinating with the crane supplier and GC before the pour.",
        },
        {
          question: "How do you handle OKC's clay soil under crane foundations?",
          answer:
            "We evaluate sub-base conditions after excavation and report unsuitable material to the GC and structural engineer before proceeding. OKC's expansive clay often requires over-excavation and engineered fill under high-load foundations — skipping this step causes differential settlement under point loads.",
        },
        {
          question: "Can you coordinate with our structural engineer and GC?",
          answer:
            "Yes. Coordination with the GC, structural engineer, and crane supplier is part of every crane foundation pour we run. We confirm drawings, anchor bolt templates, and pour sequence before mobilizing.",
        },
        {
          question: "What concrete PSI is required for crane foundations?",
          answer:
            "Concrete PSI is specified by the structural engineer in the drawings — typically 4,000–5,000 PSI for crane foundations. FDZ orders per spec and provides batch tickets for documentation.",
        },
        {
          question: "Do you provide sub-contractor documentation for GC bid packages?",
          answer:
            "Yes. COI and bonding documentation available as part of the bid process. We work as concrete sub-contractors on GC-managed commercial projects.",
        },
      ]}
    />
  );
}
