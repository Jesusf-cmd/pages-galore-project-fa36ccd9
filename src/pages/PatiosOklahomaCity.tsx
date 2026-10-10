import ServicePage from "@/components/ServicePageTemplate";

export default function PatiosOklahomaCity() {
  return (
    <ServicePage
      enriched
      embedEstimateForm
      estimateHref="#estimate"
      currentServiceSlug="patios-oklahoma-city"
      localExpertiseNote="OKC's freeze-thaw cycles make sealing non-negotiable for stamped concrete. We seal every stamped pour and give you a resealing schedule — typically every 2–3 years."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Concrete Patio and Slab Services in Oklahoma City",
        items: [
          {
            title: "Standard Concrete Patios",
            bullets: [
              "Outdoor slabs for entertaining, furniture, or outdoor kitchens",
              "Broom or smooth finish; sloped away from the house",
            ],
          },
          {
            title: "Stamped Concrete Patios",
            bullets: [
              "Decorative patterns applied while the slab is still plastic",
              "Color hardener, release agent, and sealer included in the process",
              "Details under Stamped concrete in OKC below",
            ],
          },
          {
            title: "Outdoor Living Slabs",
            bullets: [
              "Slabs for outdoor kitchens, fire pits, pergolas, and pool surrounds",
              "Often paired with a retaining wall on sloped lots",
            ],
          },
          {
            title: "Concrete Slab Replacements",
            bullets: [
              "Old slab removal and disposal",
              "Base re-evaluation and drainage correction when needed",
            ],
          },
        ],
      }}
      processNearCta
      processEyebrow="How a Patio Gets Built"
      processTitle="From Base Prep to"
      processTitleAccent="Sealed Finish."
      processIntro="Decorative concrete has a tight timing window — color and stamping happen while the slab is still plastic."
      processSteps={[
        { title: "Base prep & forming", description: "Compact subgrade and aggregate base; set forms so the patio drains away from the home." },
        { title: "Pour", description: "Place 4,000 PSI concrete and screed flat." },
        { title: "Color, stamp & seal", description: "For stamped work: color hardener and release while plastic, stamp with texture mats, then pressure-wash and seal after cure." },
        { title: "Cure", description: "Foot traffic ~3 days; furniture ~1 week; full strength ~28 days." },
      ]}
      eyebrow="OKC Metro · Patio & Stamped Concrete · Licensed & Insured"
      badge="self-performed"
      title="Concrete Patio & Stamped Concrete"
      titleAccent="Contractors OKC."
      description="Stamped concrete and patio contractors in Oklahoma City — broom, stamped, and outdoor living slabs graded for Oklahoma weather. Self-performing crew, 2-year warranty. Free estimate: (405) 458-4805."
      modelNote="Self-performed work — our crew handles every patio, slab, or stamped surface start to finish."
      introText="<strong>Patios we replace usually failed from water at the slab-house joint or wrong reinforcement.</strong> We build for Oklahoma clay: compacted base, rebar on chairs, 4,000 PSI, slope away from the house, sealed isolation joint at the foundation. Garage floors and shop slabs use the same standards."
      serviceLabel="Patio & Slab"
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum for all flatwork" },
        { label: "Thickness", value: "4 inches standard patios; 5–6 inches for shop slabs" },
        { label: "Reinforcement", value: "Rebar on chairs at mid-slab depth" },
        { label: "Base", value: "4-inch compacted aggregate (6-inch on problem clay)" },
        { label: "Control Joints", value: "Cut within 24 hours to 1/4 slab depth" },
        { label: "Drainage", value: "Graded away from structure on every pour" },
      ]}
      finishLabel="Patio & Slab Finish"
      finishOptions={[
        { title: "Broom Finish", description: "Textured traction — most popular and economical for patios and walkways." },
        { title: "Stamped Concrete", description: "Stone, brick, or slate looks with color and sealer. See patterns below." },
        { title: "Smooth Trowel", description: "Sleek finish for covered patios and garage floors." },
        { title: "Exposed Aggregate", description: "Decorative stones revealed in the surface — durable and slip-resistant." },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured", description: "Fully licensed Oklahoma contractor with liability and workers comp on every project." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every patio and slab we pour is backed by a 2-year workmanship warranty." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes — we measure on site and give a written estimate." },
        { icon: "❄️", title: "Freeze-Thaw Sealing", description: "We don't skip sealer on stamped work — OKC winters punish unsealed surfaces." },
      ]}
      // TODO(FDZ): add stamped pattern photos labeled by pattern name
      projectGallery={{
        eyebrow: "Pattern Gallery",
        title: "Stamped",
        titleAccent: "Patterns.",
        photos: [],
      }}
      proof={{
        eyebrow: "Proof",
        title: "Recent patio projects",
        intro: 'Oklahoma City stamped patio (Ashlar Slate) and Moore broom-finish patio — contrast finishes, same base-prep standards. More at <a href="/our-projects" class="text-orange no-underline">our projects</a>.',
        service: "patios",
        ids: ["okc-stamped-patio", "moore-patio"],
        badgeById: {
          "okc-stamped-patio": "Stamped",
          "moore-patio": "Broom finish",
        },
      }}
      sections={[
        {
          eyebrow: "Decorative Concrete",
          title: "Stamped concrete",
          titleAccent: "in OKC",
          content: [
            "Stamped concrete is applied during the pour while the slab is still plastic — color hardener and release agent first, then texture mats for crisp pattern detail. After cure we pressure-wash the release and apply sealer.",
            "Patterns we pour (named only where we already document them): ashlar slate (including our Oklahoma City Ashlar Slate patio), random flagstone, herringbone brick, running bond, cobblestone, and wood plank. Combine a patio with a <a href='/driveways-oklahoma-city' class='text-orange no-underline font-medium'>concrete driveways</a> project or a retaining wall for a full outdoor rebuild.",
          ],
        },
        {
          eyebrow: "Finish Choice",
          title: "What finish is best",
          titleAccent: "for a patio in Oklahoma?",
          content: [
            "Broom finish is the most popular — good traction, low maintenance, and affordable. Stamped concrete offers a premium look at a higher price point. For pool decks, we specify a non-slip texture.",
          ],
        },
        {
          eyebrow: "Sealing",
          title: "How often does stamped concrete",
          titleAccent: "need to be resealed?",
          alt: true,
          content: [
            "Roughly every 2–3 years, depending on sun exposure and how much traffic the surface sees. We seal every stamped pour and provide a resealing schedule when the project is finished — OKC's freeze-thaw cycles make this non-negotiable.",
          ],
        },
        {
          eyebrow: "Patio Sizing",
          title: "Example patio",
          titleAccent: "sizes",
          content: [
            "Typical metro ranges from our cost guide: broom-finish about $6–$10 per sq ft; stamped about $15–$22 per sq ft. Exact price after an on-site visit.",
          ],
          table: {
            headers: ["Size", "Sq ft", "Broom (est.)", "Stamped (est.)"],
            rows: [
              ["12×12", "144", "$864–$1,440", "$2,160–$3,168"],
              ["16×20", "320", "$1,920–$3,200", "$4,800–$7,040"],
            ],
          },
          infoBlock: '<a href="#estimate" class="text-orange no-underline font-medium">Get a price for this size</a> — free on-site estimate. Or see <a href="/blog/cost-of-concrete-oklahoma-city-2026" class="text-orange no-underline">concrete patio cost in Oklahoma City</a>.',
        },
        {
          eyebrow: "Patio Pricing",
          title: "How Much Does a Concrete Patio Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Costs vary by square footage, finish type (broom, stamped, or decorative), slab thickness, site conditions, and whether existing concrete needs removal. Stamped concrete requires additional steps — color hardener, release agent, stamping, and sealing — which affects the overall cost.",
            "Typical metro ranges are in our <a href='/blog/cost-of-concrete-oklahoma-city-2026' class='text-orange no-underline'>concrete patio cost in Oklahoma City</a> guide. The estimate is free — use the form below or call <a href='tel:4054584805'>(405) 458-4805</a>.",
          ],
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Concrete Problems",
          titleAccent: "in Oklahoma City.",
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts — sometimes shifting several inches in a single year.",
            "The most common concrete problems we see across OKC are caused by inadequate base preparation, missing or improperly placed reinforcement, and poor drainage grading. A contractor who doesn't understand Oklahoma clay will pour a beautiful-looking slab that starts cracking within two or three years.",
          ],
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/driveways-oklahoma-city' class='text-orange no-underline font-medium'>concrete driveways</a> · <a href='/our-projects' class='text-orange no-underline font-medium'>our projects</a> · <a href='/blog/cost-of-concrete-oklahoma-city-2026' class='text-orange no-underline font-medium'>concrete patio cost in Oklahoma City</a> · <a href='/retaining-walls-oklahoma-city' class='text-orange no-underline'>retaining walls</a> · <a href='/pool-deck-oklahoma-city' class='text-orange no-underline'>pool decks</a>",
            "City pages: <a href='/patios-edmond' class='text-orange no-underline'>Edmond</a>, <a href='/patios-norman' class='text-orange no-underline'>Norman</a>, <a href='/patios-moore' class='text-orange no-underline'>Moore</a>, <a href='/patios-yukon' class='text-orange no-underline'>Yukon</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete patio cost in OKC?", answer: "Costs vary by square footage, finish type, site conditions, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form on this page." },
        { question: "How much does stamped concrete cost in Oklahoma City?", answer: "Stamped concrete requires additional steps — color hardener, release agent, stamping, and sealing — which affects cost. Typical metro ranges are about $15–$22 per sq ft. We provide free on-site estimates for your specific project." },
        { question: "What finish is best for a patio in Oklahoma?", answer: "Broom finish is the most popular — good traction, low maintenance, and affordable. Stamped concrete offers a premium look at a higher price point. For pool decks, we specify a non-slip texture." },
        { question: "How thick should a patio or slab be?", answer: "4 inches is standard for patios and light use. 5–6 inches for garage floors and heavy equipment. On known problem clay, we may recommend thickened edges or deeper base prep." },
        { question: "How often does stamped concrete need to be resealed?", answer: "Roughly every 2–3 years, depending on sun exposure and how much traffic the surface sees. We provide a resealing schedule when the project is finished." },
        { question: "Can stamped concrete be repaired if it chips or cracks?", answer: "Minor surface chips and color touch-ups are usually repairable. More significant cracking depends on whether it's a surface issue or a structural/base issue — we evaluate this on-site." },
        { question: "How long after a new patio is poured before I can put furniture on it?", answer: "Light foot traffic in about 3 days; furniture and normal use after about a week. Full structural strength takes approximately 28 days." },
        { question: "Can I pour a slab on clay soil in Oklahoma?", answer: "Yes — with proper base prep. Oklahoma's clay requires deeper aggregate base and adequate reinforcement to prevent soil movement from cracking the slab." },
      ]}
      trustLine="FDZ Construction LLC is licensed, bonded, and insured in Oklahoma — self-performing patio and stamped concrete crew across the OKC metro, backed by a 2-year workmanship warranty."
    />
  );
}
