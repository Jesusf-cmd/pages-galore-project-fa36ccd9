import ServicePage from "@/components/ServicePageTemplate";

export default function RetainingWalls() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="retaining-walls-oklahoma-city"
      localExpertiseNote="Oklahoma's clay holds water and swells, putting enormous lateral pressure on retaining structures. That's why drainage — a gravel backfill zone and a French drain behind every wall — is the single biggest factor in whether a wall lasts, more than the wall material itself."
      metaTitle="Retaining Walls Oklahoma City | FDZ Construction LLC"
      metaDescription="Retaining wall contractors in Oklahoma City. Poured concrete, CMU block, and segmental walls for slope stabilization, drainage & erosion control — engineered for clay soil. (405) 458-4805."
      eyebrow="OKC Metro · Retaining Wall Contractors · Licensed & Insured"
      title="Retaining Walls in"
      titleAccent="Oklahoma City."
      description='Poured concrete, CMU block, and segmental retaining walls for slope stabilization, drainage, and erosion control across the OKC metro — engineered for Oklahoma clay. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A retaining wall holds back tons of saturated earth, so a failure isn't cosmetic — it's structural and expensive. FDZ Construction LLC builds retaining walls engineered for Oklahoma's expansive clay: footings below frost line, French drainage behind every wall, and reinforcement sized for the exact height of soil being retained. Whether you're stabilizing a slope, controlling drainage, or carving usable yard out of a grade change, we build walls that stand for decades."
      serviceLabel="Retaining Wall"
      serviceCards={[
        {
          icon: "🧱",
          title: "Poured Concrete Walls",
          description: "Maximum-strength poured concrete walls for tall heights, heavy loads, and structural applications. Reinforced and drained for Oklahoma clay.",
        },
        {
          icon: "🪨",
          title: "CMU Block Walls",
          description: "Cost-effective reinforced block walls for retained heights under 4 feet. Cores filled with rebar and grout for stability and longevity.",
        },
        {
          icon: "🌿",
          title: "Segmental / Interlocking",
          description: "Segmental block walls for landscape terracing, garden beds, and outdoor living areas — clean lines with engineered drainage behind.",
        },
        {
          icon: "💧",
          title: "Drainage & French Drains",
          description: "Every wall includes a gravel backfill zone and a French drain or weep holes to relieve hydrostatic pressure from saturated clay.",
        },
        {
          icon: "⛰️",
          title: "Slope & Erosion Control",
          description: "Walls and grading that stabilize slopes, stop erosion, and reclaim usable yard on Oklahoma's shifting clay lots.",
        },
        {
          icon: "🏢",
          title: "Commercial Retaining Walls",
          description: "Engineered retaining structures for commercial sites, parking areas, and developments — coordinated with engineers and inspectors.",
        },
      ]}
      specs={[
        { label: "Footing Depth", value: "Below frost line per Oklahoma code (18–24 inches), sized to wall height" },
        { label: "Drainage", value: "Gravel backfill zone + French drain or weep holes behind every wall" },
        { label: "Reinforcement", value: "Rebar sized for the retained earth height and surcharge loads" },
        { label: "Poured Walls", value: "4,000 PSI concrete for maximum strength and tall walls" },
        { label: "Block Walls", value: "Grouted, rebar-filled CMU cores on a reinforced footing" },
        { label: "Backfill", value: "Compacted free-draining backfill placed in lifts, graded to shed water" },
        { label: "Engineering", value: "Stamped plans coordinated for walls over 4 ft or with loads above" },
        { label: "Cure & Load", value: "Footing/wall cures ~7 days before staged backfill; full strength ~28 days" },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Engineered for",
          titleAccent: "Oklahoma Soil.",
          content: [
            "<strong>Retaining wall contractors in Oklahoma City</strong> — FDZ Construction builds poured concrete, CMU block, and segmental block retaining walls for homeowners, builders, and commercial property owners across the OKC metro.",
            "People call us for four main reasons: a slope that's sliding or eroding, water that's collecting in the wrong place, a grade change that's eating into usable yard or a driveway/parking area, or a structure that needs protection from shifting earth. Oklahoma's clay soil and heavy rain events put enormous lateral pressure on retaining structures, so the right answer depends on wall height, what's loading the soil above it, and how water moves across your lot.",
            "Every wall we build includes proper drainage, a footing below frost line, and reinforcement sized for the retained height. Retaining walls pair well with our <a href='/patios-oklahoma-city'>patio</a>, <a href='/sidewalks-oklahoma-city'>sidewalk</a>, <a href='/driveways-oklahoma-city'>driveway</a>, and <a href='/foundations-oklahoma-city'>foundation</a> services for complete outdoor and site projects.",
          ],
          stats: [
            { value: "$25–45", label: "Per linear ft" },
            { value: "French", label: "Drain included" },
            { value: "30+yr", label: "Expected life" },
          ],
        },
        {
          eyebrow: "Poured vs Block vs Segmental",
          title: "Choosing the Right",
          titleAccent: "Wall Type.",
          content: [
            "<strong>Poured concrete</strong> is the strongest option — best for tall walls, heavy surcharge loads (like a driveway or structure above), and structural applications. <strong>CMU block</strong>, with grouted and rebar-filled cores, is the most cost-effective choice for retained heights under about 4 feet. <strong>Segmental/interlocking block</strong> is ideal for landscape terracing and garden walls where appearance matters and loads are lighter.",
            "Whichever type fits your project, the make-or-break detail is the same: drainage. Most retaining wall failures in Oklahoma aren't strength failures — they're drainage failures, where water builds up behind the wall and hydrostatic pressure pushes it over. Every wall we build is drained to relieve that pressure.",
          ],
        },
        {
          eyebrow: "Wall Pricing",
          title: "Retaining Wall Cost",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Retaining walls run roughly $25–$45 per linear foot depending on height, material, drainage requirements, and site access. Taller walls that require engineered plans, deep footings, or surcharge reinforcement are quoted individually.",
          ],
          table: {
            headers: ["Wall Type", "Best For", "Typical Range"],
            rows: [
              ["Poured concrete", "Tall walls, heavy loads, structural", "<strong>$30–$45 / linear ft</strong>"],
              ["CMU block", "Walls under 4 ft, budget projects", "<strong>$25–$35 / linear ft</strong>"],
              ["Segmental / interlocking", "Landscape terracing, gardens", "<strong>$25–$40 / linear ft</strong>"],
            ],
          },
        },
      ]}
      processEyebrow="How a Wall Gets Built"
      processTitle="From Assessment to"
      processTitleAccent="Backfill."
      processIntro="A retaining wall is only as good as its footing and its drainage. Here's how we take a wall from first site visit to a finished, drained structure that holds."
      processSteps={[
        { title: "Site & soil assessment", description: "We measure the wall height and length, evaluate the soil and how water moves across the site, and determine whether the wall needs engineered, stamped plans." },
        { title: "Excavation & footing", description: "We excavate below the frost line and form and pour a reinforced concrete footing sized to the wall height and the load it will carry." },
        { title: "Wall construction", description: "We build the wall — poured concrete in forms, grouted CMU block, or segmental units — with rebar sized for the retained earth height." },
        { title: "Drainage installation", description: "We install a gravel backfill zone and a French drain or weep holes so water behind the wall has somewhere to go instead of pushing on the wall." },
        { title: "Backfill & compaction", description: "Free-draining backfill is placed and compacted in lifts and graded to shed surface water away from the top of the wall." },
        { title: "Cure & finish", description: "The wall cures before it carries full load. We finish grading, add caps or facing where specified, and walk the project with you." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Retaining Wall"
      projectTypesTitleAccent="Projects."
      projectTypesIntro="The most common retaining wall scenarios we solve across the Oklahoma City metro:"
      projectTypes={[
        { title: "Slope stabilization", description: "Holding back a sliding or steep slope to stop movement and reclaim flat, usable yard." },
        { title: "Drainage & erosion control", description: "Redirecting water and stopping soil washout on lots where runoff is undermining the grade." },
        { title: "Parking lot & driveway grade changes", description: "Structural walls that support the edge of a driveway, parking area, or raised pad." },
        { title: "Tiered / terraced landscape walls", description: "Multiple shorter walls that step down a slope for planting beds and outdoor living areas." },
        { title: "Foundation & structure protection", description: "Walls that keep shifting earth and water away from a home, garage, or commercial building." },
        { title: "Poured concrete walls", description: "Maximum-strength walls for tall heights and heavy loads above the wall." },
        { title: "CMU block walls", description: "Cost-effective reinforced block walls for shorter retained heights." },
        { title: "Segmental block walls", description: "Clean, modular landscape walls for terracing and garden applications." },
      ]}
      cityBlockIntro={`We build retaining walls — poured concrete, CMU block, and segmental — throughout the Oklahoma City metro, including <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "How much does a retaining wall cost in OKC?", answer: "Retaining walls run roughly $25–$45 per linear foot depending on height, material, drainage, and site access. Poured concrete is the strongest and most expensive; CMU block is the most cost-effective for shorter walls. Tall walls needing engineered plans are quoted individually." },
        { question: "What type of retaining wall is best for Oklahoma?", answer: "Poured concrete is best for tall walls and heavy loads. CMU block is cost-effective for walls under about 4 feet. Segmental/interlocking block works well for landscape terracing. The right choice depends on height, load, and appearance." },
        { question: "How long before a retaining wall can support a slope?", answer: "We don't load a wall until it's cured. The footing and wall typically cure about 7 days before we place and compact backfill in stages, and concrete reaches full design strength at around 28 days. We backfill in lifts so the wall is never overloaded before it's ready." },
        { question: "Do retaining walls need drainage?", answer: "Yes — every retaining wall in Oklahoma should include a French drain or weep holes plus a gravel backfill zone. Without drainage, hydrostatic pressure from saturated clay soil can push a wall over. Drainage is the single most important detail in a lasting wall." },
        { question: "How tall can a retaining wall be without engineering?", answer: "Walls over about 4 feet — or shorter walls with a driveway, slope, or structure loading the soil above — typically require engineered, stamped plans. We coordinate with structural engineers and ensure the work meets local code." },
        { question: "How deep should the footing be?", answer: "Footings go below the frost line — typically 18–24 inches in Oklahoma — on a compacted base, and are sized to the wall height and load. Taller walls require deeper, wider footings." },
        { question: "Do you build commercial retaining walls?", answer: "Yes — we build engineered retaining structures for commercial sites, parking areas, and developments, coordinated with engineers and city inspectors." },
        { question: "What areas do you serve for retaining walls?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
