import ServicePage from "@/components/ServicePageTemplate";

export default function DrivewaysOklahomaCity() {
  return (
    <ServicePage
      enriched
      embedEstimateForm
      estimateHref="#estimate"
      currentServiceSlug="driveways-oklahoma-city"
      localExpertiseNote="Oklahoma's expansive red clay swells and shrinks with moisture. A compacted gravel base — evaluated per site — is the difference between a driveway that lasts decades and one that cracks by year five."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Concrete Driveway Services in Oklahoma City",
        items: [
          {
            title: "New Driveway Installation",
            bullets: [
              "Site evaluation, grading, and subgrade preparation",
              "Reinforcement with rebar or wire mesh based on soil and load",
              "Pour, broom finish, and control joints every 8–10 ft",
              "Foot traffic at about 3 days; vehicles at 7; full cure at 28",
            ],
          },
          {
            title: "Driveway Replacement",
            bullets: [
              "Full removal and disposal of existing concrete",
              "Base re-evaluation under the old slab — not just surface cracks",
              "New reinforced pour with drainage corrected when needed",
            ],
          },
          {
            title: "Stamped and Decorative Driveways",
            bullets: [
              "Color hardener and release agent applied during the pour",
              "Same structural process as a standard driveway",
              "Seal after cure; reseal every 2–3 years in OKC's climate",
            ],
          },
          {
            title: "Driveway Extensions",
            bullets: [
              "Add width or length to an existing driveway",
              "Match finish where possible; expansion joint at the cold joint",
            ],
          },
          {
            title: "Commercial Driveways and Access Drives",
            bullets: [
              "Higher PSI and thicker slab for truck or equipment traffic",
              "Coordinate with property manager or GC schedule",
            ],
          },
        ],
      }}
      processNearCta
      processEyebrow="How a Driveway Gets Poured"
      processTitle="From Sub-Base to"
      processTitleAccent="Cured Slab."
      processIntro="On Oklahoma clay, a driveway is won or lost in the base prep — long before the concrete arrives."
      processSteps={[
        { title: "Sub-base excavation & compaction", description: "Excavate to depth and compact a gravel sub-base. On Oklahoma clay this step matters more than any other." },
        { title: "Forming", description: "Forms set to grade and slope so the driveway sheds water away from the home and garage." },
        { title: "Reinforcement", description: "Rebar or wire mesh chosen per soil and load — evaluated per project, not one default for every lot." },
        { title: "Pour & broom finish", description: "Place concrete and broom-finish for traction in Oklahoma rain and ice. Broom is our standard finish." },
        { title: "Control joints & cure", description: "Joints every 8–10 feet. Foot traffic ~3 days, vehicles ~7 days, full structural cure ~28 days." },
      ]}
      eyebrow="OKC Metro · Driveway Contractors · Licensed & Insured"
      badge="self-performed"
      title="Concrete Driveway Contractors in"
      titleAccent="Oklahoma City."
      description="Concrete driveway contractors in Oklahoma City for replacement, installation, and new pours. Self-performing crew, 2-year workmanship warranty. Free estimate — call (405) 458-4805."
      modelNote="Self-performed work — our crew and equipment handle every driveway start to finish, with no subcontracted labor."
      introText="<strong>Most cracked driveways we tear out failed at the base — not the slab.</strong> We pour for Oklahoma clay: compacted gravel base, 4,000 PSI mix, rebar or mesh by load, joints on time, slope-to-drain. Serving Oklahoma City, Edmond, Norman, Moore, Yukon, and the metro. If a sewer repair cut through your driveway, we restore that concrete as part of the <a href='/sewer-line-repair-oklahoma-city' class='text-orange no-underline'>residential sewer line repair</a> job — same crew."
      serviceLabel="Driveway"
      specsTitle="Our driveway spec"
      specs={[
        { label: "Thickness", value: "4 inches standard residential; 6 inches for heavy loads" },
        { label: "Reinforcement", value: "Rebar or wire mesh by soil and load conditions" },
        { label: "Base", value: "Compacted gravel base — depth per soil conditions" },
        { label: "Control Joints", value: "Every 8–10 ft to control cracking" },
        { label: "Finish", value: "Broom finish standard" },
        { label: "Cure timeline", value: "Foot traffic ~3 days · vehicles ~7 days · full cure ~28 days" },
      ]}
      finishOptions={[
        { title: "Broom Finish", description: "Standard textured finish with excellent traction. Most popular and economical." },
        { title: "Stamped Concrete", description: "Decorative patterns with color hardener and release agent — same structural driveway, decorative surface." },
        { title: "Exposed Aggregate", description: "Reveals decorative stones in the surface. Unique texture and durability." },
        { title: "Colored Concrete", description: "Integral color mixed throughout or stain applied after." },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured", description: "Fully licensed Oklahoma contractor with liability and workers comp on every project." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every driveway we pour is backed by a 2-year workmanship warranty on all work." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes. We measure on site and give you a written estimate." },
        { icon: "🧱", title: "Site-Specific Base Prep", description: "OKC clay isn't one-size-fits-all — we evaluate your lot before we pour." },
      ]}
      // TODO(FDZ): add 6–10 driveway photos for the gallery slot below
      projectGallery={{
        eyebrow: "Photo Gallery",
        title: "Driveway",
        titleAccent: "Photos.",
        photos: [],
      }}
      proof={{
        eyebrow: "Proof",
        title: "Recent driveway projects",
        intro: 'Featured: Edmond driveway replacement — 4" reinforced broom finish. More work across the metro on <a href="/our-projects" class="text-orange no-underline">our projects</a> page.',
        service: "driveways",
        ids: ["edmond-driveway"],
      }}
      sections={[
        {
          eyebrow: "Repair vs Replace",
          title: "Repair or replace",
          titleAccent: "your driveway?",
          alt: true,
          content: [
            "Not every cracked driveway needs a full tear-out. Here's how we usually sort it — and when <a href='/driveway-repair-oklahoma-city' class='text-orange no-underline font-medium'>driveway repair</a> is the smarter first step.",
          ],
          table: {
            headers: ["Repair when…", "Replace when…"],
            rows: [
              ["Cracks are localized and the slab is still level", "Widespread cracking or multiple failed panels"],
              ["Joints need sealing or minor spalls need patching", "Settlement or heaving from a failed base"],
              ["You want to buy time before a full rebuild", "Drainage or thickness was never right for clay"],
            ],
          },
        },
        {
          eyebrow: "Driveway Pricing",
          title: "How Much Does a Concrete Driveway Cost",
          titleAccent: "in Oklahoma City?",
          content: [
            "Costs vary by square footage, site conditions, finish type (broom, stamped, or decorative), slab thickness, and whether existing concrete needs removal. For metro ranges, see our guide to <a href='/blog/cost-of-concrete-oklahoma-city-2026' class='text-orange no-underline'>concrete driveway cost in OKC</a>.",
            "We provide free on-site estimates — call <a href='tel:4054584805'>(405) 458-4805</a> or use the quote form below. What we won't do: give you a number over the phone without seeing your property.",
          ],
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
        },
        {
          eyebrow: "Driveway Sizing",
          title: "What Size Should",
          titleAccent: "My Driveway Be?",
          content: [
            "Driveway size affects both the usability of your property and the total project cost. Standard sizing guidelines we follow:",
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
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Concrete Problems",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts — sometimes shifting several inches in a single year.",
            "The most common concrete problems we see across OKC are caused by the same three issues: inadequate base preparation, missing or improperly placed reinforcement, and poor drainage grading. Proper base prep, rebar on chairs at mid-slab depth, and control joints cut within 24 hours are how we fight that on every pour.",
          ],
        },
        {
          eyebrow: "Permits & Codes",
          title: "Do You Need a Permit for a Concrete Driveway in",
          titleAccent: "Oklahoma City?",
          content: [
            "Permit requirements for driveways vary by city and by the scope of work — and by whether the driveway ties into a public street or alley. Rather than guess at the rules for your area, we confirm exactly what your specific project requires before we start.",
            "FDZ Construction LLC handles permit coordination as part of our process — we'll tell you what's needed and pull the necessary permits so the work is done properly.",
          ],
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/patios-oklahoma-city' class='text-orange no-underline font-medium'>stamped concrete</a> · <a href='/driveway-repair-oklahoma-city' class='text-orange no-underline font-medium'>driveway repair</a> · <a href='/our-projects' class='text-orange no-underline font-medium'>our projects</a> · <a href='/blog/cost-of-concrete-oklahoma-city-2026' class='text-orange no-underline font-medium'>concrete driveway cost in OKC</a>",
            "<a href='/sewer-line-repair-oklahoma-city' class='text-orange no-underline'>Residential sewer line repair</a> — When a sewer trench cuts through a driveway, we restore that concrete as part of the same job. City pages: <a href='/driveways-edmond' class='text-orange no-underline'>Edmond</a>, <a href='/driveways-norman' class='text-orange no-underline'>Norman</a>, <a href='/driveways-yukon' class='text-orange no-underline'>Yukon</a>, <a href='/driveways-moore' class='text-orange no-underline'>Moore</a>, <a href='/driveways-mustang' class='text-orange no-underline'>Mustang</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "Costs vary by square footage, site conditions, finish type, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form on this page." },
        { question: "How long does it take to install a concrete driveway?", answer: "Most residential driveways are poured in 1 day. Foot traffic in about 3 days, vehicle traffic in about 7 days, and full structural cure at around 28 days." },
        { question: "How long does a concrete driveway last in Oklahoma City?", answer: "A properly installed driveway with adequate base prep and control joints can last 30+ years. OKC's expansive clay soil makes base preparation the biggest variable in longevity." },
        { question: "Do I need a permit for a concrete driveway in Oklahoma City?", answer: "Permit requirements vary by city and by project scope — and by whether the driveway ties into a public street or alley. We confirm what's required for your specific project and handle permit coordination as part of our process." },
        { question: "Do I need to seal my concrete driveway?", answer: "We recommend sealing your driveway 30 days after installation and every 2–3 years thereafter. Sealing protects against moisture, stains, and freeze-thaw damage common in Oklahoma winters." },
        { question: "Can you pour concrete in cold or hot weather?", answer: "Yes, but we take precautions. In cold weather (below 40°F), we use heated water and insulating blankets. In extreme heat, we pour early morning and use evaporation retarders. We'll advise you on the best timing for your project." },
        { question: "Will my new driveway crack?", answer: "We cut control joints every 8–10 feet to control where cracks occur. Hairline cracks can appear as concrete cures, but proper preparation and reinforcement minimize cracking. We stand behind our work." },
        { question: "Can you match my existing concrete?", answer: "Color matching is approximate — new concrete will not perfectly match weathered existing concrete. Broom or trowel texture can usually be matched closely. Weathering tends to bring repairs closer in appearance over time." },
        { question: "Do you remove the old driveway?", answer: "Yes. On replacement jobs we handle full removal and disposal of the existing concrete, then re-evaluate the base before the new pour." },
      ]}
      trustLine="FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — self-performing crew across the OKC metro, every driveway backed by a 2-year workmanship warranty."
    />
  );
}
