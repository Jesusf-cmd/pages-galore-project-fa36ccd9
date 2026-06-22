import ServicePage from "@/components/ServicePageTemplate";

export default function PatiosOklahomaCity() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="patios-oklahoma-city"
      localExpertiseNote="OKC's freeze-thaw cycles make sealing non-negotiable for stamped concrete — an unsealed decorative surface is far more likely to spall, flake, or fade within a season or two. We seal every stamped pour and give you a resealing schedule to protect the look long-term."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Concrete Patio and Slab Services in Oklahoma City",
        items: [
          {
            title: "Standard Concrete Patios",
            bullets: [
              "Clean, durable outdoor slabs for entertaining, furniture, or outdoor kitchens",
              "Broom or smooth finish options",
              "Properly sloped away from the house for drainage",
            ],
          },
          {
            title: "Stamped Concrete Patios",
            bullets: [
              "Applied during pour while concrete is still plastic",
              // TODO: add gallery link when available
              "Most popular decorative concrete service in the OKC metro — homeowners in Nichols Hills, Edmond, and Yukon regularly request it",
              "Requires sealing after cure — OKC's freeze-thaw cycles make this non-negotiable",
              "Pattern and color options available — contact us to discuss",
            ],
          },
          {
            title: "Outdoor Living Slabs",
            bullets: [
              "Slabs for outdoor kitchens, fire pits, pergolas, and pool surrounds",
              "Often paired with a retaining wall on sloped lots — <a href='/foundations-oklahoma-city'>see our foundations &amp; retaining walls page</a>",
              "Drainage planning especially important on Edmond's rolling terrain",
            ],
          },
          {
            title: "Concrete Slab Replacements",
            bullets: [
              "Old slab removal and disposal",
              "Re-evaluation of base conditions before new pour",
              "Drainage correction if original slab had pooling issues",
            ],
          },
        ],
      }}
      processEyebrow="How a Stamped Patio Gets Built"
      processTitle="From Base Prep to"
      processTitleAccent="Sealed Finish."
      processIntro="Decorative concrete has a tight timing window — color and stamping have to happen while the slab is still plastic. Here's how a stamped patio comes together."
      processSteps={[
        { title: "Base prep & forming", description: "We compact the subgrade and aggregate base and set forms to grade so the patio drains away from your home." },
        { title: "Pour", description: "We place 4,000 PSI concrete and screed it to a flat, even surface." },
        { title: "Color hardener & release agent", description: "For stamped finishes, color hardener and release agent are applied while the slab is still plastic — the window that makes or breaks the final look." },
        { title: "Stamp with texture mats", description: "We press texture mats into the surface at the right point in the cure to get crisp, defined pattern detail." },
        { title: "Cure", description: "The slab cures before any cleaning or sealing so the finish sets up properly." },
        { title: "Pressure wash & seal", description: "We pressure wash off the release agent and apply sealer — essential in Oklahoma's freeze-thaw climate." },
      ]}
      metaTitle="Concrete Patios, Slabs & Stamped Concrete Oklahoma City | FDZ Construction LLC"
      metaDescription="Concrete patio, slab, and stamped concrete contractors in Oklahoma City. Broom, smooth, stamped finishes. Garage floors, shop slabs, decorative patios. Free estimate."
      eyebrow="OKC Metro · Patio & Slab Contractors · Licensed & Insured"
      title="Concrete Patios, Slabs &"
      titleAccent="Stamped Concrete OKC."
      description='Patios, garage floors, shop slabs, and stamped decorative concrete — properly graded and reinforced for Oklahoma weather. Free estimate. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText={`<strong>The patios we replace almost always failed for the same two reasons: water pooling at the slab-house joint, and missing or wrong reinforcement.</strong> Oklahoma's expansive clay amplifies both — it pushes harder against undersized slabs and traps moisture that accelerates the next round of damage. The result is a patio that lifts away from the house and cracks down the middle by year eight. We build patios, garage slabs, and shop slabs that stay flat and tight to the structure — minimum 4" engineered base, rebar on chairs (not wire mesh), 4,000 PSI mix, slope-to-drain away from the house, and a sealed isolation joint where the slab meets the foundation.`}
      serviceLabel="Patio & Slab"
      serviceCards={[
        {
          icon: "🏡",
          title: "Backyard Patios",
          description: "Custom concrete patios designed for outdoor living. Broom finish, smooth trowel, or stamped decorative options — all graded for proper drainage away from your home.",
        },
        {
          icon: "🚗",
          title: "Garage Floors",
          description: "Reinforced garage floor slabs poured to handle vehicle weight. Smooth finish standard, with optional epoxy-ready surface preparation.",
        },
        {
          icon: "🏗️",
          title: "Shop & Barn Slabs",
          description: "Heavy-duty slabs for workshops, barns, and outbuildings. Thicker slab with engineered reinforcement for equipment and heavy loads.",
        },
        {
          icon: "🎨",
          title: "Stamped & Decorative",
          description: "Ashlar slate, flagstone, brick, cobblestone, and wood plank patterns. Integral color, color hardener, and high-solids acrylic sealer included.",
        },
        {
          icon: "🔧",
          title: "Slab Repair & Replacement",
          description: "Remove and replace cracked, settled, or damaged slabs. Proper base prep and reinforcement to prevent repeat failures on Oklahoma clay.",
        },
        {
          icon: "🏊",
          title: "Pool Decks & Equipment Pads",
          description: "Non-slip textured finishes for pool decks. Equipment pads sized and reinforced for HVAC units, hot tubs, and generators.",
        },
      ]}
      specs={[
        { label: "Concrete Strength", value: "4,000 PSI minimum for all flatwork" },
        { label: "Thickness", value: "4 inches standard patios, 5–6 inches for shop slabs" },
        { label: "Reinforcement", value: "Rebar on chairs at mid-slab depth, tied at intersections" },
        { label: "Base", value: "4-inch compacted aggregate (6-inch on problem clay)" },
        { label: "Control Joints", value: "Cut within 24 hours to 1/4 slab depth" },
        { label: "Drainage", value: "Graded away from structure on every pour" },
      ]}
      finishLabel="Patio & Slab Finish"
      finishOptions={[
        { title: "Broom Finish", description: "Classic textured surface with excellent traction. Most popular and economical. Ideal for patios, walkways, and pool decks." },
        { title: "Stamped Concrete", description: "Decorative patterns mimicking natural stone, brick, or slate. Premium curb appeal with integral color and sealer." },
        { title: "Smooth Trowel", description: "Sleek, polished appearance. Best for covered patios, garage floors, and areas with minimal water exposure." },
        { title: "Exposed Aggregate", description: "Reveals decorative stones in the surface for a unique, textured look. Durable and slip-resistant." },
        { title: "Colored Concrete", description: "Integral color mixed into the concrete or surface stain applied after curing. Wide color selection available." },
        { title: "Salt Finish", description: "Subtle pitted texture created with rock salt. Popular for patios and pool surrounds." },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: /* TODO: confirm exact figure or founding year */ "Over 8 years of experience with OKC's clay soil, drainage conditions, and weather challenges." },
        { icon: "🔒", title: "1-Year Workmanship Warranty", description: "Every patio and slab we pour is backed by a 1-year workmanship warranty." },
        { icon: "📍", title: "Based in South OKC — Fastest Response", description: "We're at 7004 S Indiana Ave. OKC gets our fastest response and tightest scheduling of anywhere we serve." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes, no pressure. We come to your property, measure the project, and give you a written estimate." },
        { icon: "❄️", title: "OKC Freeze-Thaw Expertise", description: "OKC's freeze-thaw cycles can damage an unsealed stamped surface within a season or two — we don't cut corners on sealing." },
      ]}
      sections={[
        {
          eyebrow: "Patio & Slab Contractors OKC",
          title: "Built for Oklahoma",
          titleAccent: "Backyards & Properties.",
          content: [
            "<strong>Concrete patio and slab contractors in Oklahoma City</strong> at FDZ Construction build patios, garage floors, shop slabs, and equipment pads that handle Oklahoma's temperature swings — from freezing winters to 105°F summers. Proper grading, reinforcement, and control joints keep your concrete looking new for decades.",
            "We offer broom finish, smooth finish, and stamped decorative options including ashlar slate, random flagstone, herringbone brick, running bond, cobblestone, and wood plank patterns. Every patio and slab is graded for drainage away from your home. Combine your patio with a <a href='/foundations-oklahoma-city'>retaining wall or foundation project</a> or <a href='/sidewalks-oklahoma-city'>walkway</a> for a complete outdoor transformation.",
          ],
          stats: [
            { value: "30+yr", label: "Expected life" },
            { value: "Free", label: "On-site estimate" },
            { value: "OKC", label: "Metro-wide service" },
          ],
        },
        {
          eyebrow: "Patio & Slab Pricing",
          title: "How Much Does a Concrete Patio Cost",
          titleAccent: "in Oklahoma City?",
          alt: true,
          content: [
            "Costs vary by square footage, finish type (broom, stamped, or decorative), slab thickness, site conditions, and whether existing concrete needs removal. We provide free on-site estimates — call <a href='tel:4054584805'>(405) 458-4805</a> or use the quote form above.",
            "Stamped concrete requires additional steps — color hardener, release agent, stamping, and sealing — which affects the overall cost. On Oklahoma clay, base prep depth is a variable too. The estimate is free and comes with no pressure.",
          ],
          infoBlock: "Call <a href='tel:4054584805'>(405) 458-4805</a> or email <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a> to schedule your free on-site estimate.",
        },
        {
          eyebrow: "Oklahoma Concrete Challenges",
          title: "Common Concrete Problems",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Oklahoma City sits on some of the most expansive clay soil in the United States. This Permian red clay absorbs moisture and swells during wet seasons, then contracts sharply during Oklahoma's summer droughts — sometimes shifting several inches in a single year.",
            "The most common concrete problems we see across OKC are caused by inadequate base preparation, missing or improperly placed reinforcement, and poor drainage grading. A contractor who doesn't understand Oklahoma clay will pour a beautiful-looking slab that starts cracking within two or three years.",
            "Proper base prep means excavating to the correct depth, compacting the native subgrade, and installing a minimum 4-inch aggregate base — 6 inches on known problem clay lots. Rebar placed on chairs at mid-slab depth provides the tensile strength to resist soil movement. Control joints cut within 24 hours guide where the concrete relieves stress rather than cracking randomly.",
          ],
        },
        {
          eyebrow: "Get Started",
          title: "Request a Free",
          titleAccent: "Patio Estimate.",
          alt: true,
          content: [
            "We provide free on-site estimates for patios and slabs across Oklahoma City, Edmond (~30–40 min north), Yukon (~20–25 min west), and the full OKC metro including Norman, Moore, Mustang, Midwest City, and Del City. Based at 7004 S Indiana Ave in south OKC.",
          ],
          // TODO: embed quote form here once document-upload feature ships
          infoBlock: "📞 <a href='tel:4054584805'>(405) 458-4805</a> &nbsp;·&nbsp; ✉️ <a href='mailto:jesus@fdzconstruction.com'>jesus@fdzconstruction.com</a>",
        },
        {
          eyebrow: "Related Services",
          title: "Other Concrete Services",
          titleAccent: "From FDZ.",
          content: [
            "<a href='/driveways-oklahoma-city' class='text-orange no-underline font-medium'>Driveways</a> — New installation, replacement, and stamped decorative driveways to pair with your patio project.",
            "<a href='/foundations-oklahoma-city' class='text-orange no-underline font-medium'>Foundations &amp; Retaining Walls</a> — Outdoor living slabs on sloped lots often pair with a retaining wall. We handle both.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete patio cost in OKC?", answer: "Costs vary by square footage, finish type, site conditions, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
        { question: "How much does a concrete slab cost in Oklahoma City?", answer: "Costs vary by size, thickness, finish, and site conditions. We provide free on-site estimates rather than phone quotes — every site is different on Oklahoma clay." },
        { question: "How much does stamped concrete cost in Oklahoma City?", answer: "Stamped concrete requires additional steps — color hardener, release agent, stamping, and sealing — which affects cost. We provide free on-site estimates for your specific project." },
        { question: "What finish is best for a patio in Oklahoma?", answer: "Broom finish is the most popular — good traction, low maintenance, and affordable. Stamped concrete offers a premium look at a higher price point. For pool decks, we specify a non-slip texture." },
        { question: "How thick should a patio or slab be?", answer: "4 inches is standard for patios and light use. 5–6 inches for garage floors and heavy equipment. On known problem clay, we may recommend thickened edges or deeper base prep." },
        { question: "How long does stamped concrete last in OKC?", answer: "The structural slab lasts as long as any concrete slab — decades. The decorative surface needs periodic resealing to keep its color and finish, especially in Oklahoma's sun and freeze-thaw cycles." },
        { question: "How often does stamped concrete need to be resealed?", answer: "Roughly every 2–3 years, depending on sun exposure and how much traffic the surface sees. We provide a resealing schedule when the project is finished." },
        { question: "Can stamped concrete be repaired if it chips or cracks?", answer: "Minor surface chips and color touch-ups are usually repairable. More significant cracking depends on whether it's a surface issue or a structural/base issue — we evaluate this on-site." },
        { question: "How long after a new patio is poured before I can put furniture on it?", answer: "Light foot traffic in about 3 days; furniture and normal use after about a week. Full structural strength takes approximately 28 days." },
        { question: "Can I pour a slab on clay soil in Oklahoma?", answer: "Yes — with proper base prep. Oklahoma's clay requires deeper aggregate base and adequate reinforcement to prevent soil movement from cracking the slab." },
      ]}
    />
  );
}
