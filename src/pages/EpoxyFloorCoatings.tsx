import ServicePage from "@/components/ServicePageTemplate";

export default function EpoxyFloorCoatings() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="epoxy-floor-coatings-oklahoma-city"
      metaTitle="Epoxy Floor Coatings Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial & industrial epoxy floor coatings in Oklahoma City. Warehouses, garages, commercial kitchens & more. Chemical-resistant. Call (405) 458-4805."
      eyebrow="OKC Metro · Epoxy Floor Coatings · Licensed & Insured"
      title="Epoxy Floor Coatings in"
      titleAccent="Oklahoma City."
      description='Commercial and industrial epoxy floor coatings in Oklahoma City — warehouses, auto facilities, commercial kitchens, and garages. Proper surface prep every time. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Epoxy floor coatings bond directly to concrete and create a hard, chemical-resistant surface that outperforms bare concrete in almost every commercial and industrial application. Warehouses use epoxy to protect floors from forklift traffic and spills. Commercial kitchens require non-porous surfaces for health code compliance. Auto service facilities need chemical resistance against oil, fuel, and brake fluid. FDZ installs commercial and industrial epoxy floor coatings throughout the OKC metro — with the surface preparation that determines whether a coating lasts or peels. Call (405) 458-4805."
      localExpertiseNote="Oklahoma's seasonal moisture cycles create a specific challenge for epoxy coatings — concrete that isn't fully cured or has elevated moisture vapor emission from OKC's wet winters and spring rains will cause epoxy to delaminate regardless of product quality. FDZ requires moisture vapor testing before any coating application. We will not coat a slab that will fail."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏭",
          title: "100% Solids Industrial Epoxy",
          description: "The workhorse for warehouses, manufacturing, and industrial facilities — 10–20 mil DFT, handles forklift traffic and chemical exposure.",
        },
        {
          icon: "✨",
          title: "Broadcast Flake Decorative System",
          description: "Colored vinyl flake in wet epoxy — decorative, slip-resistant, hides surface imperfections. Popular for garages, gyms, and showrooms.",
        },
        {
          icon: "🍳",
          title: "Quartz Broadcast Epoxy",
          description: "Fine quartz aggregate in epoxy — maximum slip resistance for commercial kitchens, food processing, and wet industrial environments.",
        },
        {
          icon: "⚡",
          title: "Polyurea / Polyaspartic Topcoat",
          description: "Fast-curing topcoat over epoxy base — 1-day installation possible, UV-resistant, excellent for spaces with natural light.",
        },
        {
          icon: "🔧",
          title: "Epoxy Mortar (Heavy-Duty)",
          description: "Filled epoxy for areas with impact loads, chemical exposure, and thermal shock — industrial kitchens, chemical plants, dock areas.",
        },
        {
          icon: "🚗",
          title: "Water-Based Epoxy (Light Duty)",
          description: "Lower VOC for occupied spaces — commercial offices, light commercial, and residential garages.",
        },
      ]}
      subServices={{
        sectionEyebrow: "System Types",
        sectionTitle: "Epoxy Systems We Install",
        items: [
          {
            title: "100% Solids Industrial Epoxy",
            bullets: [
              "10–20 mil dry film thickness — significantly thicker than water-based systems",
              "Handles forklift traffic (up to Class 5 counterbalance), pallet jacks, and heavy rolling loads",
              "Chemical resistance against oil, fuel, hydraulic fluid, and most industrial chemicals",
              "Standard for warehouses, manufacturing, auto repair, and industrial facilities",
            ],
          },
          {
            title: "Decorative Broadcast Flake System",
            bullets: [
              "Vinyl flake chips broadcast into wet 100% solids epoxy base coat",
              "Full broadcast hides surface imperfections and creates slip-resistant texture",
              "Polyurea or polyaspartic clear topcoat seals flake — UV-stable, chemical-resistant",
              "Most popular system for commercial garages, CrossFit gyms, showrooms, and retail spaces",
            ],
          },
          {
            title: "Quartz Broadcast (Commercial Kitchens)",
            bullets: [
              "Fine quartz aggregate broadcast into epoxy — creates non-slip surface that meets NSF standards for food service",
              "Required or preferred in commercial kitchens, food processing, and wet industrial environments",
              "Non-porous surface eliminates bacteria-trapping grout lines",
              "FDZ installs to OKC Health Department compliance requirements",
            ],
          },
          {
            title: "Why Surface Prep Is Everything",
            bullets: [
              "Most epoxy failures are adhesion failures — not product failures. Inadequate surface preparation is the cause.",
              "Concrete must be mechanically profiled (shot-blasted or diamond-ground) to CSP 2–3 minimum for epoxy adhesion",
              "Moisture vapor emission must be tested — elevated moisture causes delamination regardless of epoxy quality",
              "Cracks and joints must be filled before coating — coating over a moving crack just moves with it",
              "FDZ will not skip surface prep. If the floor isn't properly profiled, we will not apply coating.",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "System Selection",
          title: "What Epoxy Is Right",
          titleAccent: "For Your Facility.",
          content: [
            "System selection depends on your traffic, chemical exposure, aesthetic requirements, and timeline. There is no single 'best' epoxy — the right system is the one matched to your specific use.",
          ],
          table: {
            headers: ["Facility Type", "Recommended System"],
            rows: [
              ["Warehouse / distribution center", "100% solids industrial epoxy"],
              ["Auto repair / dealership", "100% solids or decorative flake"],
              ["Commercial kitchen (NSF)", "Quartz broadcast epoxy"],
              ["CrossFit / fitness facility", "Decorative flake or quartz broadcast"],
              ["Retail showroom / garage", "Decorative flake with polyaspartic topcoat"],
              ["Manufacturing / chemical plant", "Epoxy mortar (heavy-duty)"],
              ["Office / light commercial", "Water-based or decorative flake"],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Epoxy Floor",
          titleAccent: "Cost Ranges.",
          content: [
            "Epoxy pricing is driven by system type, square footage, and existing floor condition. Surface prep is included in all system pricing.",
            "Call (405) 458-4805 to discuss your facility.",
          ],
          table: {
            headers: ["System", "Typical Range (per sq. ft.)"],
            rows: [
              ["Water-based epoxy (light duty)", "$2 – $4"],
              ["100% solids epoxy (industrial)", "$4 – $7"],
              ["Broadcast flake decorative system", "$4 – $8"],
              ["Quartz broadcast (slip-resistant)", "$5 – $9"],
              ["Epoxy mortar (heavy-duty industrial)", "$8 – $15"],
              ["Polyurea/polyaspartic topcoat upgrade", "Add $1 – $3 per sq. ft."],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Flooring &",
          titleAccent: "Concrete Services.",
          content: [
            "<a href='/polished-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Polished Concrete Floors</a> — Diamond-ground and polished concrete from industrial matte to high-gloss mirror finish.",
            "<a href='/warehouse-floor-replacement-oklahoma-city' class='text-orange no-underline font-medium'>Warehouse Floor Replacement</a> — Full phased floor replacement with flatness tolerances for forklift operations.",
            "<a href='/industrial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Industrial Concrete Repair</a> — Forklift damage, spalling, joint failure — rapid return to service.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Full range of commercial and industrial concrete services in OKC.",
          ],
        },
      ]}
      processEyebrow="Installation Process"
      processTitle="Epoxy Floor"
      processTitleAccent="Installation Steps."
      processSteps={[
        { title: "Moisture vapor testing", description: "Test concrete moisture vapor emission rate before specifying a system. Elevated moisture causes delamination — this step is not optional." },
        { title: "Slab assessment", description: "Check cracks, joint condition, surface contamination, and existing coatings that require removal." },
        { title: "Shot blasting or diamond grinding", description: "Mechanically profile the concrete to CSP 2–3 minimum. This is what makes epoxy stick — and what most cheap operators skip." },
        { title: "Crack and joint filling", description: "Fill cracks with appropriate repair material before base coat application. Coating over a crack just cracks with it." },
        { title: "Base coat application", description: "Apply 100% solids epoxy base coat to profiled, dry, contamination-free surface. System-specific application method." },
        { title: "Broadcast aggregate (if applicable)", description: "Broadcast vinyl flake or quartz aggregate into wet base coat for decorative or slip-resistant systems." },
        { title: "Topcoat application", description: "Seal with polyurea, polyaspartic, or epoxy topcoat. Provides UV resistance, chemical resistance, and surface durability." },
      ]}
      faq={[
        {
          question: "How long does epoxy floor coating last?",
          answer: "Industrial 100% solids epoxy in a properly prepared warehouse typically lasts 10–20 years. Decorative systems in commercial garages and retail spaces last 5–10 years with proper maintenance. The single biggest factor in longevity is surface preparation quality — not epoxy brand or price.",
        },
        {
          question: "Can you apply epoxy over an existing epoxy floor?",
          answer: "Sometimes. The existing coating must be assessed for adhesion and condition. Flaking or peeling existing epoxy must be removed. Sound, well-adhered existing epoxy can sometimes serve as a base after shot blasting to confirm adhesion — but we require assessment before any recoat.",
        },
        {
          question: "Is epoxy slippery when wet?",
          answer: "Broadcast flake and quartz systems are not slippery when wet — the aggregate texture provides slip resistance. Smooth 100% solids epoxy without aggregate can be slippery when wet. FDZ specifies the appropriate system finish for your application and adds anti-slip aggregate to topcoat where needed.",
        },
        {
          question: "How long does epoxy floor installation take?",
          answer: "Typical commercial epoxy installation runs 2–4 days including surface prep, base coat, and topcoat with appropriate cure times between coats. Polyurea/polyaspartic systems can compress this timeline significantly — some systems allow light foot traffic in 4–6 hours and vehicle traffic in 24 hours.",
        },
        {
          question: "How much does epoxy flooring cost in Oklahoma City?",
          answer: "Water-based systems run $2–$4 per square foot. Industrial 100% solids systems run $4–$7. Decorative flake systems run $4–$8. Heavy-duty epoxy mortar runs $8–$15. Call (405) 458-4805 for a project-specific quote.",
        },
        {
          question: "What's the difference between epoxy and polyurea?",
          answer: "Epoxy is the base coating system — it provides chemical resistance and adhesion to concrete. Polyurea (often polyaspartic) is a fast-curing topcoat applied over an epoxy base. Polyurea is more UV-stable (epoxy yellows in sunlight) and cures faster. Most quality decorative floor systems are epoxy base coat plus polyurea topcoat.",
        },
        {
          question: "Can epoxy floors be installed in an occupied facility?",
          answer: "Yes, with phased installation and ventilation management. Low-VOC water-based systems are better suited for occupied spaces. 100% solids systems require occupant clearance during application and cure. FDZ discusses facility constraints before specifying a system.",
        },
      ]}
    />
  );
}
