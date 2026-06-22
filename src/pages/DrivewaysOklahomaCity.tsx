import ServicePage from "@/components/ServicePageTemplate";

export default function DrivewaysOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="driveways-oklahoma-city"
      localExpertiseNote="Oklahoma's expansive red clay swells and shrinks with moisture, which is why proper sub-base prep — a compacted gravel base — matters far more here than in stable-soil regions. Skipping or shortcutting it is the single most common cause of driveway cracking in the OKC metro."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Concrete Driveway Services in Oklahoma City",
        items: [
          {
            title: "New Driveway Installation",
            bullets: [
              "Site evaluation, grading, and subgrade preparation",
              "Reinforcement with rebar or wire mesh based on soil and load conditions",
              "Pour, broom finish, and control joint placement",
              "Full cure before vehicle traffic — light at 7 days, full structural at 28 days",
            ],
          },
          {
            title: "Driveway Replacement",
            bullets: [
              "Full removal and disposal of existing concrete",
              "Base re-evaluation — OKC's expansive clay means we check what's under the old slab, not just the surface",
              "New reinforced install with corrected drainage if needed",
              "Most common reason for replacement: inadequate base prep on the original pour",
            ],
          },
          {
            title: "Stamped and Decorative Driveways",
            bullets: [
              "Color hardener and release agent options applied during the pour",
              "Same structural process as standard driveway — decorative finish applied while concrete is still plastic",
              "Requires sealing after cure and periodic resealing every 2–3 years in OKC's climate",
              // TODO: list specific stamp patterns once gallery is built
              "Pattern options available — contact us to discuss what's suitable for your project",
            ],
          },
          {
            title: "Driveway Extensions",
            bullets: [
              "Adding width or length to an existing driveway",
              "Matching existing finish where possible",
              "Expansion joint between new and existing concrete to allow for independent movement",
            ],
          },
          {
            title: "Commercial Driveways and Access Drives",
            bullets: [
              "Higher PSI mix for heavier vehicle loads",
              "Thicker slab where truck or equipment traffic is expected",
              "Coordinate with property manager or GC schedule",
            ],
          },
        ],
      }}
      processEyebrow="How a Driveway Gets Poured"
      processTitle="From Sub-Base to"
      processTitleAccent="Cured Slab."
      processIntro="On Oklahoma clay, a driveway is won or lost in the base prep — long before the concrete arrives. Here's how we build one that lasts."
      processSteps={[
        { title: "Sub-base excavation & compaction", description: "We excavate to depth and compact a gravel sub-base. On Oklahoma clay this step matters more than any other — it's where most cracked driveways are lost before a single yard of concrete is poured." },
        { title: "Forming", description: "Forms are set to grade and slope so the finished driveway sheds water away from your home and garage instead of pooling against the foundation." },
        { title: "Reinforcement", description: "We place rebar or wire mesh, chosen per the soil and load conditions of your specific driveway — we evaluate this per project rather than defaulting to one." },
        { title: "Pour & broom finish", description: "We place the concrete and finish with a broom texture for traction in Oklahoma rain and ice." },
        { title: "Control joints", description: "Control joints are cut every 8–10 feet to direct any cracking to the joints instead of across the slab." },
        { title: "Cure", description: "Light foot traffic in about 3 days, vehicle traffic in about 7 days, and full structural cure at around 28 days." },
      ]}
      metaTitle="Concrete Driveways Oklahoma City | Installation & Replacement | FDZ Construction"
      metaDescription="Concrete driveway installation & replacement in Oklahoma City. Rebar reinforcement, 30+ year durability. Licensed & insured. Free estimates — call (405) 458-4805."
      eyebrow="OKC Metro · Driveway Contractors · Licensed & Insured"
      title="Concrete Driveway Installation & Replacement in"
      titleAccent="Oklahoma City, OK."
      description="Your driveway is the first thing visitors see when they arrive at your home. At FDZ Construction LLC, we specialize in concrete driveway installation, replacement, and repair throughout the Oklahoma City metro area. Whether you need a simple broom-finish driveway or an elegant stamped concrete entrance, our experienced crew delivers quality craftsmanship that stands up to Oklahoma's harsh weather conditions."
      introText="<strong>Most cracked driveways we tear out failed at the base — not the slab.</strong> Oklahoma's expansive clay swells when wet, shrinks in drought, and pushes against any slab poured on a base that wasn't excavated, compacted, and reinforced for that movement. A driveway that looked fine at year three is a tripping hazard by year ten. We pour driveways that don't get torn out — engineered base, 4,000 PSI mix, rebar at mid-depth, joints cut on time, slope-to-drain detailed. Serving Oklahoma City, Edmond, Norman, Moore, Yukon, and the surrounding metro from our south OKC shop at 7004 S Indiana Ave."
      serviceLabel="Driveway"
      serviceCards={[
        {
          icon: "🏗️",
          title: "New Driveway Installation",
          description: "Complete driveway installation from excavation to final finish. We handle permits, grading, forming, pouring, and finishing. Most residential driveways completed in 1-2 days.",
        },
        {
          icon: "🔄",
          title: "Driveway Replacement",
          description: "Remove and replace old, cracked, or sunken driveways. We properly dispose of old concrete and install a fresh driveway with improved drainage and reinforcement.",
        },
        {
          icon: "➕",
          title: "Driveway Extensions",
          description: "Add extra parking space or extend your driveway to a new garage or carport. We match existing concrete finish where possible and install an expansion joint between old and new.",
        },
        {
          icon: "🎨",
          title: "Stamped & Decorative Driveways",
          description: "Upgrade your curb appeal with stamped patterns. Color hardener and release agent applied during the pour. Requires sealing after cure and every 2–3 years in OKC's climate.",
        },
        {
          icon: "🔧",
          title: "Driveway Repair",
          description: "Fix cracks, spalling, and minor damage before it spreads. We offer crack sealing, partial replacement, and resurfacing options.",
        },
        {
          icon: "↔️",
          title: "Commercial Access Drives",
          description: "Higher PSI mix and thicker slab for heavier vehicle loads on commercial properties. Coordinate with property manager or GC schedule.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (higher for heavy vehicles)" },
        { label: "Thickness", value: "4 inches standard residential, 6 inches for heavy loads" },
        { label: "Reinforcement", value: "Rebar or wire mesh per site and load conditions" },
        { label: "Base", value: "Compacted gravel sub-base — depth per soil conditions" },
        { label: "Control Joints", value: "Cut every 8–10 feet to control cracking" },
        { label: "Curing", value: "Applied curing compound for strength development" },
      ]}
      finishOptions={[
        { title: "Broom Finish", description: "Classic textured finish with excellent traction. Most popular and economical choice." },
        { title: "Stamped Concrete", description: "Decorative patterns applied during pour. Premium curb appeal with color hardener and release agent." },
        { title: "Exposed Aggregate", description: "Reveals decorative stones in the concrete surface. Unique texture and durability." },
        { title: "Colored Concrete", description: "Integral color mixed throughout or stain applied after. Many colors available." },
        { title: "Salt Finish", description: "Subtle texture created with rock salt. Popular for patios and pool decks." },
        { title: "Polished / Smooth", description: "Sleek modern finish. Best for covered areas." },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: /* TODO: confirm exact figure or founding year */ "Over 8 years of experience with OKC's clay soil, drainage conditions, and weather challenges." },
        { icon: "🔒", title: "1-Year Workmanship Warranty", description: "Every driveway we pour is backed by a 1-year workmanship warranty on all work." },
        { icon: "📍", title: "Based in South OKC — Fastest Response", description: "We're at 7004 S Indiana Ave. OKC gets our fastest response and tightest scheduling of anywhere we serve." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes, no pressure. We come to your property, measure the project, and give you a written estimate." },
        { icon: "🧱", title: "Site-Specific Base Prep", description: "OKC's expansive clay means base prep decisions aren't one-size-fits-all. We evaluate your specific site conditions before we pour." },
      ]}
      sections={[
        {
          eyebrow: "Driveway Pricing",
          title: "How Much Does a Concrete Driveway Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Costs vary by square footage, site conditions, finish type (broom, stamped, or decorative), slab thickness, and whether existing concrete needs removal. We provide free on-site estimates — call <a href='tel:4054584805'>(405) 458-4805</a> or use the quote form above.",
            "What we won't do: give you a number over the phone without seeing your property. OKC clay conditions, drainage, slope, and access all affect the final cost. The estimate is free and comes with no pressure.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to schedule your free on-site estimate.",
        },
        {
          eyebrow: "Concrete vs Asphalt",
          title: "Concrete vs Asphalt Driveways in Oklahoma —",
          titleAccent: "Which Is Better?",
          content: [
            "One of the most common questions we get is whether concrete or asphalt is the better choice for an Oklahoma driveway. Both materials work, but they perform very differently in Oklahoma's climate and soil conditions.",
          ],
          table: {
            headers: ["Feature", "Concrete", "Asphalt"],
            rows: [
              ["Lifespan", "30–50 years", "15–25 years"],
              ["Performance in Oklahoma heat", "Excellent — does not soften", "Can soften and rut in extreme heat"],
              ["Oklahoma clay soil performance", "Better — rigid slab resists soil movement", "More flexible but more prone to cracking"],
              ["Maintenance", "Seal every 3–5 years", "Reseal every 1–2 years"],
              ["Upfront cost", "Higher", "Lower"],
              ["Long-term value", "Higher — less replacement cost", "Lower — more frequent repairs"],
              ["Appearance options", "Broom, stamped, stained, colored", "Limited — black only"],
            ],
          },
          infoBlock: "For most Oklahoma City homeowners, concrete is the better long-term investment — especially given our clay soil conditions and summer heat. Call <a href='tel:4054584805'>(405) 458-4805</a> to discuss the best option for your property.",
        },
        {
          eyebrow: "Driveway Sizing",
          title: "What Size Should",
          titleAccent: "My Driveway Be?",
          content: [
            "Driveway size affects both the usability of your property and the total project cost. Here are standard sizing guidelines we follow on every project:",
          ],
          table: {
            headers: ["Driveway Type", "Recommended Size"],
            rows: [
              ["Single-car driveway", "10–12 ft wide × 18–20 ft long (min. per vehicle)"],
              ["Double-car driveway", "20–24 ft wide × 18–20 ft long"],
              ["Three-car / wide driveway", "30+ ft wide"],
              ["Turnaround or apron", "Add 10–12 ft of extra depth"],
              ["Typical residential total", "400–800 sq ft depending on layout"],
            ],
          },
          infoBlock: "Not sure what size you need? We measure your property during the free estimate and recommend the right dimensions based on your vehicles, garage layout, and available space.",
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Concrete Problems",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts — sometimes shifting several inches in a single year.",
            "The most common concrete problems we see across OKC are caused by the same three issues: inadequate base preparation, missing or improperly placed reinforcement, and poor drainage grading.",
            "Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a compacted aggregate base. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress rather than cracking randomly.",
          ],
        },
        {
          eyebrow: "Permits & Codes",
          title: "Do You Need a Permit for a Concrete Driveway in",
          titleAccent: "Oklahoma City?",
          content: [
            "Permit requirements for driveways vary by city and by the scope of work — and by whether the driveway ties into a public street or alley. Rather than guess at the rules for your area, we confirm exactly what your specific project requires before we start.",
            "FDZ Construction LLC handles permit coordination as part of our process — we'll tell you what's needed and pull the necessary permits so the work is done properly.",
            "Call <a href='tel:4054584805'>(405) 458-4805</a> if you have questions about permits before your project starts.",
          ],
        },
        {
          eyebrow: "Get Started",
          title: "Request a Free",
          titleAccent: "Driveway Estimate.",
          alt: true,
          content: [
            "We provide free on-site driveway estimates across Oklahoma City, Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro including Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC.",
          ],
          // TODO: embed quote form here once document-upload feature ships
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/patios-oklahoma-city' class='text-orange no-underline font-medium'>Patios &amp; Stamped Concrete</a> — Backyard patios, decorative stamped surfaces, and outdoor living slabs to pair with your new driveway.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete</a> — Parking lots, warehouse floors, loading dock aprons, and site concrete for commercial properties.",
            "<a href='/sidewalks-oklahoma-city' class='text-orange no-underline font-medium'>Sidewalks &amp; Curb and Gutter</a> — Walkways, ADA curb ramps, and curb work to complete your property.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "Costs vary by square footage, site conditions, finish type, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
        { question: "How long does it take to install a concrete driveway?", answer: "Most residential driveways are poured in 1 day. However, the complete process including preparation and curing takes about 2 weeks. You can walk on new concrete after 24–48 hours, but should wait 7 days before driving on it." },
        { question: "How long does a concrete driveway last in Oklahoma City?", answer: "A properly installed driveway with adequate base prep and control joints can last 30+ years. OKC's expansive clay soil makes base preparation the biggest variable in longevity." },
        { question: "Do I need a permit to replace my driveway in Oklahoma City?", answer: "Permit requirements vary by city and project scope. We confirm what's required for your specific project before work begins." },
        { question: "Do I need to seal my concrete driveway?", answer: "We recommend sealing your driveway 30 days after installation and every 2–3 years thereafter. Sealing protects against moisture, stains, and freeze-thaw damage common in Oklahoma winters." },
        { question: "Can you pour concrete in cold or hot weather?", answer: "Yes, but we take precautions. In cold weather (below 40°F), we use heated water and insulating blankets. In extreme heat, we pour early morning and use evaporation retarders. We'll advise you on the best timing for your project." },
        { question: "What's the difference between concrete and cement?", answer: "Cement is an ingredient in concrete. Concrete is the finished product made from cement, sand, gravel, and water. When you hire us for a 'cement driveway,' you're getting concrete — the strong, durable surface you need." },
        { question: "Will my new driveway crack?", answer: "We cut control joints every 8–10 feet to control where cracks occur. Hairline cracks can appear as concrete cures, but proper preparation and reinforcement minimize cracking. We stand behind our work." },
        { question: "Do you handle permits?", answer: "Yes — we handle permit coordination as part of our process. Requirements vary by city and by project scope, so we confirm what's required for your specific project and pull the necessary permits so you don't have to." },
      ]}
    />
  );
}
