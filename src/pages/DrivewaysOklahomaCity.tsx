import ServicePage from "@/components/ServicePageTemplate";

export default function DrivewaysOklahomaCity() {
  return (
    <ServicePage
      metaTitle="Concrete Driveways Oklahoma City | Installation & Replacement | Redwood Construction"
      metaDescription="Concrete driveway installation & replacement in Oklahoma City. 4,000 PSI concrete, rebar reinforcement, 30+ year durability. Licensed & insured. Free estimates — call (405) 247-0027."
      eyebrow="OKC Metro · Driveway Contractors · Licensed & Insured"
      title="Concrete Driveway Installation & Replacement in"
      titleAccent="Oklahoma City, OK."
      description="Your driveway is the first thing visitors see when they arrive at your home. At Redwood Construction LLC, we specialize in concrete driveway installation, replacement, and repair throughout the Oklahoma City metro area. Whether you need a simple broom-finish driveway or an elegant stamped concrete entrance, our experienced crew delivers quality craftsmanship that stands up to Oklahoma's harsh weather conditions."
      introText="We've poured hundreds of driveways across Oklahoma City, Edmond, Norman, Moore, and surrounding communities. Every project starts with proper ground preparation, uses 4,000 PSI concrete minimum, and includes fiber mesh reinforcement for long-lasting durability."
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
          description: "Add extra parking space or extend your driveway to a new garage or carport. We match existing concrete color and texture when possible.",
        },
        {
          icon: "🎨",
          title: "Stamped & Decorative Driveways",
          description: "Upgrade your curb appeal with stamped patterns that mimic brick, stone, or slate. Multiple colors and patterns available.",
        },
        {
          icon: "🔧",
          title: "Driveway Repair",
          description: "Fix cracks, spalling, and minor damage before it spreads. We offer crack sealing, partial replacement, and resurfacing options.",
        },
        {
          icon: "↔️",
          title: "Concrete Driveway Widening",
          description: "Widen narrow driveways for easier parking or to accommodate larger vehicles like RVs and trucks.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum (5,000 PSI for heavy vehicles)" },
        { label: "Thickness", value: '4 inches standard residential, 6 inches for heavy loads' },
        { label: "Reinforcement", value: "Fiber mesh standard, rebar for large pours" },
        { label: "Base", value: "4-inch compacted gravel subbase" },
        { label: "Control Joints", value: "Cut every 8-10 feet to control cracking" },
        { label: "Curing", value: "Applied curing compound for strength development" },
      ]}
      finishOptions={[
        { title: "Broom Finish", description: "Classic textured finish with excellent traction. Most popular and economical choice." },
        { title: "Stamped Concrete", description: "Decorative patterns resembling brick, stone, slate, or tile. Premium curb appeal." },
        { title: "Exposed Aggregate", description: "Reveals decorative stones in the concrete surface. Unique texture and durability." },
        { title: "Colored Concrete", description: "Integral color mixed throughout or stain applied after. Many colors available." },
        { title: "Salt Finish", description: "Subtle texture created with rock salt. Popular for patios and pool decks." },
        { title: "Polished / Smooth", description: "Sleek modern finish. Best for covered areas." },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed & Insured", description: "Fully licensed Oklahoma contractor. Liability and workers comp insurance protects you." },
        { icon: "📍", title: "Local & Experienced", description: "Locally owned and operated. We know Oklahoma soil conditions and weather challenges." },
        { icon: "💪", title: "Quality Materials", description: "We use 4,000+ PSI concrete from trusted local suppliers. No shortcuts." },
        { icon: "📋", title: "Free Estimates", description: "Honest, detailed estimates with no hidden fees. We show up when we say we will." },
      ]}
      sections={[
        {
          eyebrow: "Driveway Pricing",
          title: "Cost of Concrete Driveway",
          titleAccent: "Installation in OKC.",
          alt: true,
          content: [
            "Concrete driveway cost in Oklahoma City depends on size, thickness, site access, demolition needs, reinforcement, and finish requirements. We provide clear estimates so property owners understand the scope of work before the project starts.",
          ],
          table: {
            headers: ["Driveway Type", "Price Per Sq Ft", "Example: 600 sq ft"],
            rows: [
              ["Basic broom finish", "$6 – $8", "$3,600 – $4,800"],
              ["Reinforced with rebar", "$8 – $10", "$4,800 – $6,000"],
              ["Stamped / decorative", "$10 – $14", "$6,000 – $8,400"],
              ["Demolition of old driveway", "$1 – $2 / sq ft", "Add to above"],
            ],
          },
          infoBlock: "Ready for a free driveway estimate? Call <a href='tel:4052470027'>(405) 247-0027</a> or <a href='/#estimate'>contact us online</a> — we'll measure your project and give you a clear price with no pressure.",
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
          infoBlock: "For most Oklahoma City homeowners, concrete is the better long-term investment — especially given our clay soil conditions and summer heat. Call <a href='tel:4052470027'>(405) 247-0027</a> to discuss the best option for your property.",
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
            "Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a minimum 4-inch aggregate base — 6 inches on known problem clay lots. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress rather than cracking randomly.",
          ],
        },
        {
          eyebrow: "Permits & Codes",
          title: "Do You Need a Permit for a Concrete Driveway in",
          titleAccent: "Oklahoma City?",
          content: [
            "In most cases, yes — Oklahoma City requires a permit for new driveway construction or significant replacement. Permit requirements vary depending on the scope of work, property location, and whether the driveway connects to a public street or alley.",
            "The good news: Redwood Construction LLC handles permit coordination as part of our process. We'll let you know exactly what's required before we start and make sure your project is fully compliant with city codes.",
            "Call <a href='tel:4052470027'>(405) 247-0027</a> if you have questions about permits before your project starts.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "Most residential concrete driveways in the OKC area cost between $6-$12 per square foot, depending on size, thickness, and finish type. A standard 2-car driveway (400-600 sq ft) typically ranges from $2,400 to $7,200. Stamped and decorative options cost more. We provide free detailed estimates for your specific project." },
        { question: "How long does it take to install a concrete driveway?", answer: "Most residential driveways are poured in 1 day. However, the complete process including preparation and curing takes about 2 weeks. You can walk on new concrete after 24-48 hours, but should wait 7 days before driving on it." },
        { question: "How long will a concrete driveway last?", answer: "A properly installed concrete driveway in Oklahoma typically lasts 25-30 years or more with minimal maintenance. Factors affecting longevity include proper installation, drainage, sealing, and avoiding deicing salts." },
        { question: "Do I need to seal my concrete driveway?", answer: "We recommend sealing your driveway 30 days after installation and every 2-3 years thereafter. Sealing protects against moisture, stains, and freeze-thaw damage common in Oklahoma winters." },
        { question: "Can you pour concrete in cold or hot weather?", answer: "Yes, but we take precautions. In cold weather (below 40°F), we use heated water and insulating blankets. In extreme heat, we pour early morning and use evaporation retarders. We'll advise you on the best timing for your project." },
        { question: "What's the difference between concrete and cement?", answer: "Cement is an ingredient in concrete. Concrete is the finished product made from cement, sand, gravel, and water. When you hire us for a 'cement driveway,' you're getting concrete — the strong, durable surface you need." },
        { question: "Will my new driveway crack?", answer: "We cut control joints every 8-10 feet to control where cracks occur. Hairline cracks can appear as concrete cures, but our proper preparation and reinforcement minimize cracking. We stand behind our work." },
        { question: "Do you handle permits?", answer: "Yes, we pull all necessary permits and schedule inspections. Permit requirements vary by city — Oklahoma City, Edmond, and Norman each have different requirements. We handle the paperwork so you don't have to." },
      ]}
    />
  );
}
