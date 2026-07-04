import ServicePage from "@/components/ServicePageTemplate";

export default function ConcreteParkinglotRepair() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="concrete-parking-lot-repair-oklahoma-city"
      metaTitle="Concrete Parking Lot Repair Oklahoma City | Commercial Concrete Replacement | FDZ Construction"
      metaDescription="Concrete parking lot repair in Oklahoma City — panel replacement, trip hazard repair, joint sealing, crack repair, and partial slab replacement. Licensed & insured. Call (405) 458-4805."
      eyebrow="Commercial Concrete · Oklahoma City"
      title="Concrete Parking Lot Repair in"
      titleAccent="Oklahoma City."
      description='Concrete parking lot repair for commercial and retail properties across the OKC metro — panel replacement, joint sealing, crack repair, and trip hazard remediation. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A commercial parking lot that has cracked, settled, or developed trip hazards creates liability exposure and a poor customer experience. Most OKC commercial parking lot failures don't require full replacement — specific failed panels can be removed and replaced, joints can be resealed before water intrusion causes more damage, and trip hazards can be ground or patched. FDZ Construction handles commercial concrete parking lot repair for retail centers, office properties, churches, industrial facilities, and multifamily properties across Oklahoma City. We evaluate the scope honestly and tell you when repair is the right answer — and when it isn't. Call (405) 458-4805."
      localExpertiseNote="Most OKC commercial parking lot failures start below the slab. Oklahoma's expansive Permian-age clay soil swells and shrinks seasonally, creating uneven pressure under large-format slabs. Failed joints allow water to enter and saturate the sub-base, accelerating clay movement under the slab. The result: panels crack from below, not from surface wear. Repair that doesn't address sub-base conditions under failed panels will fail again."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🔧",
          title: "Panel Replacement",
          description:
            "Saw-cut and remove failed panels, evaluate and correct sub-base, pour replacement panels to match surrounding slab elevation and slope.",
        },
        {
          icon: "🔩",
          title: "Joint Sealing & Re-Sealing",
          description:
            "Clean and re-seal deteriorated control joints and expansion joints before water intrusion causes further damage. Route-and-seal or saw-and-seal methods.",
        },
        {
          icon: "⚠️",
          title: "Trip Hazard Repair",
          description:
            "Diamond grinding to remove trip hazards at panel joints and cracks. Grinding is typically faster and cheaper than panel replacement when the panel itself is structurally sound.",
        },
        {
          icon: "💉",
          title: "Crack Repair & Injection",
          description:
            "Epoxy injection for structural cracks, flexible sealant for moving cracks, and surface sealing for non-structural surface cracking.",
        },
        {
          icon: "📐",
          title: "Partial Slab Replacement",
          description:
            "Multiple adjacent panel replacement for areas with widespread failure — phased to keep portions of the lot operational during repair.",
        },
        {
          icon: "🔍",
          title: "Repair vs. Replace Evaluation",
          description:
            "Honest assessment: we tell you when spot repair makes sense and when the lot has failed broadly enough to warrant full replacement planning.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Repair Types",
        sectionTitle: "Parking Lot Repair Services in Oklahoma City",
        items: [
          {
            title: "Panel Saw-Cut & Replacement",
            bullets: [
              "Saw-cut to clean joint lines at panel boundaries — no ragged edges that create stress concentration",
              "Remove failed panel and haul off concrete debris",
              "Evaluate sub-base — if clay sub-base failed under the panel, correct before new pour",
              "Form to existing panel elevation and slope",
              "Pour 4,000 PSI minimum, matching original slab thickness or upgrading if thickness was inadequate",
              "Reinforce per requirements — rebar on clay sites, dowels at panel joints for load transfer",
              "Control joints saw-cut within 24 hours of pour",
              "Single panel or multiple adjacent panels — phased to maintain lot access",
            ],
          },
          {
            title: "Joint Sealing",
            bullets: [
              "Route deteriorated or failed joint sealant to clean V-shape",
              "Clean and dry — no sealing over contaminated or wet joint",
              "Backer rod installed to control sealant depth",
              "Pour self-leveling polyurethane sealant for flat areas, non-sag for sloped areas",
              "Traffic-safe in hours",
              "Best performed after crack repair and before panel replacement to protect adjacent joints",
              "Re-sealing every 5–7 years extends panel life significantly — prevents sub-base saturation",
            ],
          },
          {
            title: "Trip Hazard Grinding",
            bullets: [
              "Diamond grinding to remove height differential at cracked or settled panel edges",
              "ADA requirement: trip hazards over 1/2\" vertical change must be addressed at accessible routes",
              "Grinding is typically same-day service — no cure time, parking lot back in use immediately",
              "More cost-effective than panel replacement when panel is structurally sound",
              "Not appropriate when panel differential is caused by ongoing settlement — panel replacement addresses the root cause",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "On-Site Evaluation",
          description:
            "Walk the lot, identify failed panels, trip hazards, deteriorated joints, and drainage issues. Evaluate whether sub-base failure is localized or widespread.",
        },
        {
          title: "Repair Scope & Sequence",
          description:
            "Define which panels require replacement, which need joint sealing, and which trip hazards need grinding. Sequence the work to keep portions of the lot operational.",
        },
        {
          title: "Sub-Base Evaluation",
          description:
            "On every panel replacement, evaluate sub-base after removal. Correct soft spots and clay sub-base failure before new pour — not optional.",
        },
        {
          title: "Pour, Seal & Grind",
          description:
            "Replace panels to spec, seal joints in sequence, grind trip hazards. Phased completion to minimize lot downtime.",
        },
        {
          title: "Return to Service",
          description:
            "Panel replacements: light traffic in 24 hours, full vehicle traffic after 7 days. Joint sealing: traffic-safe in hours. Trip hazard grinding: immediate.",
        },
      ]}
      processEyebrow="How It Works"
      processTitle="Parking Lot Repair"
      processTitleAccent="Sequence."
      specs={[
        { label: "Replacement Concrete", value: "4,000 PSI minimum — matching or exceeding original spec" },
        { label: "Joint Sealant", value: "Polyurethane — self-leveling (flat) or non-sag (sloped)" },
        { label: "Trip Hazard Grinding", value: "Diamond grinding — same-day return to service" },
        { label: "Sub-Base", value: "Evaluated on every panel replacement — corrected before pour" },
        { label: "Panel Joints", value: "Dowels for load transfer at replacement panel edges" },
        { label: "Phasing", value: "Partial lot access maintained throughout repair sequence" },
      ]}
      sections={[
        {
          eyebrow: "Commercial Trust",
          title: "Set Up to Work with",
          titleAccent: "Property Managers & GCs.",
          content: [
            "FDZ Construction LLC is set up to work with general contractors, facility managers, property managers, builders, and business owners. We can review plans, photos, repair scopes, access limitations, and scheduling before pricing.",
            "• COI available upon request  • Bonding available for qualified projects  • Plan-based repair estimates  • Phased crew scheduling for active properties  • After-hours and weekend options  • Demo, haul-off, forming, reinforcement, placement, and finish  • Subgrade and drainage review before placement  • Coordination with GCs, owners, managers, and other trades",
          ],
        },
        {
          eyebrow: "Repair vs. Replace",
          title: "When Repair Makes Sense and",
          titleAccent: "When It Doesn't.",
          content: [
            "Spot panel replacement and joint sealing makes sense when failure is localized — a few failed panels or deteriorated joints in an otherwise sound lot. It extends the lot life cost-effectively.",
            "When more than 30–40% of panels have failed or the sub-base has deteriorated broadly, full replacement is usually more cost-effective long-term than patching. FDZ evaluates honestly. See our <a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>parking lot construction page</a> for full replacement scope.",
          ],
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/commercial-curb-and-gutter-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Curb & Gutter</a> — Curb repair, replacement, and new curb installation for parking lot perimeters and islands.",
            "<a href='/dumpster-pad-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Dumpster Pad Concrete</a> — Reinforced dumpster pads for commercial properties — often replaced alongside parking lot repair.",
            "<a href='/truck-court-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Truck Court Concrete</a> — Heavy-duty concrete paving for loading and maneuvering areas adjacent to parking lots.",
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>New Parking Lot Construction</a> — Full new parking lot installation and complete replacement for lots beyond repair.",
          ],
        },
        {
          eyebrow: "Send Photos or Scope",
          title: "Request a",
          titleAccent: "Repair Estimate.",
          content: [
            "Send photos of your failing lot sections and we'll review before the site visit. FDZ Construction provides free on-site estimates with a clear scope and honest repair vs. replace recommendation. Call (405) 458-4805 or email jesus@fdzconstruction.com.",
          ],
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
      ]}
      faq={[
        {
          question: "How much does concrete parking lot repair cost in OKC?",
          answer:
            "Single panel replacement typically runs $400–$1,500 depending on panel size and sub-base conditions. Joint sealing runs $1–$4 per linear foot. Trip hazard grinding runs $75–$300 per hazard. Full repair scopes for larger lots depend on the number of failed panels, joint linear footage, and sub-base conditions — free on-site estimate provided.",
        },
        {
          question: "Can parking lot repair be done while the lot is in use?",
          answer:
            "Yes. FDZ sequences repairs in sections to keep portions of the lot operational. Individual panel replacements typically close a small area for 7 days while concrete cures. Joint sealing and trip hazard grinding can be done with minimal disruption — joints re-open to traffic in hours.",
        },
        {
          question: "How do I know if my parking lot needs repair or full replacement?",
          answer:
            "Localized cracking, a few failed panels, and deteriorated joints usually call for repair. Widespread panel failure (more than 30–40% of panels), failed sub-base across large sections, or repeated repair failure usually indicates full replacement is more cost-effective. FDZ evaluates on-site and provides an honest recommendation.",
        },
        {
          question: "Why is my OKC parking lot cracking so quickly?",
          answer:
            "Most OKC parking lot cracking traces to sub-base failure on expansive clay soil. When joints deteriorate, water infiltrates and saturates the clay sub-base, causing the swell-shrink cycle to move panels. Proper joint sealing is the best preventive maintenance. Panel repairs that don't correct sub-base conditions will fail again on the same timeline.",
        },
        {
          question: "What is a trip hazard and how is it repaired?",
          answer:
            "A trip hazard is a vertical height change — typically over 1/4\" to 1/2\" at a joint or crack — that creates a fall risk and ADA compliance issue. Most trip hazards at panel joints are repaired by diamond grinding to reduce the height differential. Panel replacement is needed when the step differential is caused by ongoing settlement.",
        },
        {
          question: "Do you provide COI for parking lot repair work?",
          answer:
            "Yes. Certificate of insurance and bonding documentation available as part of the bid process. FDZ works as a sub-contractor on GC-managed commercial properties.",
        },
      ]}
    />
  );
}
