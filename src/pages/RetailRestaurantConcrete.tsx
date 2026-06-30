import ServicePage from "@/components/ServicePageTemplate";

export default function RetailRestaurantConcrete() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="retail-restaurant-concrete-oklahoma-city"
      metaTitle="Retail & Restaurant Concrete Oklahoma City | FDZ Construction LLC"
      metaDescription="Concrete for restaurants, retail, and food service in OKC — interior slabs, outdoor dining, drive-throughs, grease pads, ADA ramps. Call (405) 458-4805."
      eyebrow="OKC Metro · Retail & Restaurant Concrete · Licensed & Insured"
      title="Retail & Restaurant Concrete in"
      titleAccent="Oklahoma City."
      description='Interior slabs, outdoor dining patios, drive-through approaches, grease trap pads, and ADA site work for OKC restaurants and retail. Built to health code and ADA standards. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Restaurants and retail spaces have concrete requirements that go well beyond standard commercial flatwork. Interior slabs must meet health department standards — non-porous, cleanable, without grout lines that trap bacteria. Outdoor dining patios need proper slope, drainage, and a finish that handles foot traffic and chair legs without spalling. Drive-through approaches take constant vehicle wear. Grease trap pads require chemical-resistant concrete. FDZ installs concrete for restaurants, retail, and food service businesses throughout Oklahoma City — Western Ave corridor, Plaza District, Bricktown, Midtown, and the suburban OKC metro. Call (405) 458-4805."
      localExpertiseNote="OKC's clay soil movement creates special challenges for retail and restaurant concrete — interior slabs on expansive clay can heave and crack if the subgrade isn't properly prepared and stabilized. FDZ requires subgrade moisture conditioning and compaction testing before any interior slab pour. We know OKC Health Department inspection requirements and build to pass, not just to pour."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🍽️",
          title: "Restaurant Interior Slabs",
          description: "Health-code-compliant interior concrete floors — proper slope to drains, non-porous surface, compatible with tile or epoxy overlay.",
        },
        {
          icon: "☀️",
          title: "Outdoor Dining Patios",
          description: "Broom-finish or stamped concrete outdoor dining areas with proper slope, drainage, and pedestrian-safe finish.",
        },
        {
          icon: "🚗",
          title: "Drive-Through Approaches",
          description: "Heavy-duty concrete for drive-through lanes — thickened slab design, proper joint spacing, skid-resistant finish.",
        },
        {
          icon: "🛢️",
          title: "Grease Trap & Equipment Pads",
          description: "Chemical-resistant concrete pads for grease traps, dumpster enclosures, and kitchen equipment — designed for hosing and chemical cleaning.",
        },
        {
          icon: "♿",
          title: "ADA Ramps & Site Accessibility",
          description: "ADA-compliant ramps, accessible parking, and accessible routes — built to current IBC and ADA standards.",
        },
        {
          icon: "🏪",
          title: "Retail Site Concrete",
          description: "Sidewalks, curb and gutter, entrance aprons, and parking lot concrete for retail sites and strip centers.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Applications",
        sectionTitle: "Restaurant & Retail Concrete We Install",
        items: [
          {
            title: "Restaurant Interior Slabs",
            bullets: [
              "Properly sloped to floor drains — typically 1/8\" to 1/4\" per foot toward drain locations",
              "Health department compliance for food service: non-porous surface without grout-line bacteria traps",
              "Compatible with quarry tile, ceramic tile, or epoxy floor coating overlays",
              "Subgrade stabilization and vapor barrier required on OKC clay soil before pour",
            ],
          },
          {
            title: "Outdoor Dining & Patio Concrete",
            bullets: [
              "Minimum 2% slope away from building for positive drainage — prevents ponding and ice accumulation",
              "Broom finish standard for pedestrian slip resistance — stamped concrete available with proper sealant",
              "Expansion joints placed to control cracking and allow seasonal movement",
              "OKC freeze-thaw cycles require air-entrained concrete mix — FDZ specifies properly",
            ],
          },
          {
            title: "Drive-Through Approaches",
            bullets: [
              "6\" minimum slab thickness for drive-through lanes — heavier if delivery trucks use same approach",
              "Reinforced with rebar or fiber for constant vehicle loading",
              "Tined or grooved finish for skid resistance on slopes and at stopping points",
              "Joint placement at stress points — curb transitions, radius returns, threshold crossings",
            ],
          },
          {
            title: "Grease Trap, Dumpster & Equipment Pads",
            bullets: [
              "Grease trap pads: oil and chemical-resistant concrete with sealed surface or epoxy coating",
              "Dumpster enclosure pads: reinforced, sloped for drainage, with concrete curb containment",
              "Equipment pads: level, isolated from adjacent slab, sized for anchor bolt pattern",
              "Health department and fire code setback requirements incorporated into layout",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "OKC Locations",
          title: "Restaurant & Retail Corridors",
          titleAccent: "We Serve.",
          content: [
            "FDZ works in commercial and restaurant corridors across Oklahoma City — Western Avenue, Plaza District, Bricktown, Midtown, NW 23rd Street, and the suburban retail corridors in Edmond, Moore, Norman, and Yukon.",
            "We understand that restaurants and retail spaces can't shut down for weeks. FDZ coordinates phased work schedules to minimize business disruption — night and weekend pours available for high-traffic locations.",
          ],
          table: {
            headers: ["Concrete Scope", "Typical Specification"],
            rows: [
              ["Restaurant interior slab", "4\" reinforced, vapor barrier, sloped to drains"],
              ["Outdoor patio", "4\" with air entrainment, broom finish, 2% slope"],
              ["Drive-through approach", "6\" reinforced, tined finish, thickened edge"],
              ["Grease trap pad", "4\" sealed concrete or epoxy-coated"],
              ["Dumpster pad", "6\" reinforced with containment curb"],
              ["ADA ramp", "4\" per ADA slope requirements, flared sides"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial",
          titleAccent: "Concrete Services.",
          content: [
            "<a href='/ada-ramps-oklahoma-city' class='text-orange no-underline font-medium'>ADA Ramps & Accessibility</a> — Full ADA compliance work including ramps, detectable warning surfaces, and accessible routes.",
            "<a href='/dumpster-pads-oklahoma-city' class='text-orange no-underline font-medium'>Dumpster Pads</a> — Heavy-duty dumpster enclosure pads for commercial properties.",
            "<a href='/epoxy-floor-coatings-oklahoma-city' class='text-orange no-underline font-medium'>Epoxy Floor Coatings</a> — Commercial kitchen quartz broadcast epoxy — NSF-compliant, non-porous, cleanable.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>All Commercial Concrete</a> — Full range of commercial and industrial concrete services in OKC.",
          ],
        },
      ]}
      processEyebrow="How It Works"
      processTitle="Restaurant Concrete"
      processTitleAccent="Installation Process."
      processSteps={[
        { title: "Site and code review", description: "Review health department requirements, ADA compliance needs, and local building code requirements before any work begins." },
        { title: "Subgrade preparation", description: "Excavate, moisture-condition, and compact subgrade to required density. Critical on OKC clay — skip this and the slab moves." },
        { title: "Vapor barrier and reinforcement", description: "Install vapor barrier for interior slabs. Place rebar or wire mesh per structural requirement." },
        { title: "Form setting and drain coordination", description: "Set forms to achieve proper slope to drain locations. Coordinate with plumbing rough-in before pour." },
        { title: "Concrete placement", description: "Pour and finish concrete — air-entrained exterior mix for freeze-thaw, appropriate finish for application." },
        { title: "Curing", description: "Apply curing compound or wet cure to protect concrete during initial strength gain." },
        { title: "Joint cutting and sealing", description: "Cut control joints within 24 hours. Seal joints after 28-day cure for health code compliance." },
      ]}
      faq={[
        {
          question: "What concrete finish is required for restaurant floors by the OKC Health Department?",
          answer: "OKC Health Department requires food service floors to be smooth, non-absorbent, and easily cleanable. Bare concrete is generally not acceptable for food prep areas — a sealed concrete, tile over concrete, or epoxy coating system is required. FDZ pours the structural slab and can install epoxy coating systems; tile is a separate trade.",
        },
        {
          question: "Can you pour restaurant concrete while we're still operating?",
          answer: "Interior slabs require full closure during pour and cure. Exterior work — patios, drive-throughs, ADA ramps — can often be phased to maintain access. FDZ schedules around your operations when possible, including night and weekend work for high-traffic locations.",
        },
        {
          question: "Do you handle ADA compliance for restaurant sites?",
          answer: "Yes. FDZ installs ADA-compliant ramps, accessible parking stalls, accessible routes, and detectable warning surfaces. We build to current ADA Standards for Accessible Design and IBC requirements. We don't provide architectural drawings, but we build from permit-approved plans.",
        },
        {
          question: "How thick should a drive-through approach be?",
          answer: "Minimum 6\" for passenger vehicle drive-through lanes. If delivery trucks or service vehicles use the same approach, 7\"–8\" with heavier reinforcement is appropriate. FDZ sizes the slab to the actual loading, not the minimum spec.",
        },
        {
          question: "What's the difference between a grease trap pad and a regular concrete slab?",
          answer: "A grease trap pad requires chemical-resistant concrete (or a chemical-resistant coating) because grease and cleaning chemicals degrade standard concrete over time. FDZ uses appropriate sealer or epoxy coating on grease trap pads and slopes them for drainage — bare concrete is not appropriate in this application.",
        },
      ]}
    />
  );
}
