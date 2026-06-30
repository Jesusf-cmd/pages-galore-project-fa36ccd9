import ServicePage from "@/components/ServicePageTemplate";

export default function PolishedConcrete() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="polished-concrete-oklahoma-city"
      metaTitle="Polished Concrete Floors Oklahoma City | FDZ Construction LLC"
      metaDescription="Polished concrete floors in Oklahoma City — commercial, retail, restaurant, warehouse & industrial. Durable, low maintenance. Call (405) 458-4805."
      eyebrow="OKC Metro · Polished Concrete · Licensed & Insured"
      title="Polished Concrete Floors in"
      titleAccent="Oklahoma City."
      description='Commercial and industrial polished concrete floors in Oklahoma City — from industrial matte to high-gloss mirror finish. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Polished concrete has become the go-to flooring choice for commercial and industrial spaces across Oklahoma City — restaurants, retail showrooms, breweries, warehouses, office lobbies, and fitness facilities. It's durable enough for forklift traffic, attractive enough for high-end retail, easy to clean, and dramatically lower in long-term maintenance cost than tile, VCT, or epoxy systems that need periodic replacement. FDZ grinds and polishes concrete floors to any finish level — from industrial matte to high-gloss mirror — throughout the OKC metro."
      localExpertiseNote="Oklahoma's temperature swings — 100°F+ summers and freeze-thaw winters — are hard on alternative flooring systems. Wood flooring expands and contracts with seasonal humidity changes. VCT and LVT adhesives can fail in Oklahoma's temperature extremes. Polished concrete is dimensionally stable through OKC's seasonal range — it doesn't expand, contract, peel, or warp."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "✨",
          title: "Commercial Polish (Level 3–4)",
          description:
            "Semi-gloss to high-gloss finish for retail showrooms, restaurant dining rooms, office lobbies, and hospitality spaces.",
        },
        {
          icon: "🏭",
          title: "Industrial Polish (Level 1–2)",
          description:
            "Matte to satin finish for warehouse floors, distribution centers, and utilitarian commercial spaces.",
        },
        {
          icon: "🔄",
          title: "Existing Slab Polishing",
          description:
            "Diamond-grind and polish your existing concrete floor — remove old adhesive, coatings, or surface damage, then bring up to specified finish level.",
        },
        {
          icon: "🏗️",
          title: "New Slab Polish Coordination",
          description:
            "Advise on mix design and curing for new slabs being poured to polish — the right pour spec makes a significant difference in final polish quality.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Finish Levels",
        sectionTitle: "Polished Concrete Finish Levels",
        items: [
          {
            title: "Level 1 — Flat / Matte (Industrial)",
            bullets: [
              "16–30 grit coarse grind removes surface blemishes and opens the concrete surface",
              "Flat, non-reflective surface — light scatter, no clarity",
              "Ideal for warehouses, distribution centers, and industrial spaces where appearance is secondary to durability",
              "Lowest cost option — fewest passes",
            ],
          },
          {
            title: "Level 2 — Satin",
            bullets: [
              "80–150 grit medium grind — refines surface after coarse grind",
              "Light sheen visible — some light reflectivity but no image clarity",
              "Good for commercial kitchens, utilitarian retail, and service-industry commercial spaces",
              "Better slip resistance profile than higher-gloss levels without additives",
            ],
          },
          {
            title: "Level 3 — Semi-Gloss",
            bullets: [
              "200–400 grit polishing — develops moderate reflectivity and surface clarity",
              "Standard for most commercial retail, office lobbies, and restaurant applications",
              "Concrete densifier applied before this stage — critical for surface hardness",
              "Most popular commercial finish level",
            ],
          },
          {
            title: "Level 4 — High-Gloss",
            bullets: [
              "800–3000 grit polishing — near-mirror surface reflectivity",
              "Maximum light reflectivity — significantly reduces artificial lighting costs in retail and warehouse applications",
              "Used in high-end retail showrooms, hospitality lobbies, auto dealerships, and upscale restaurant dining rooms",
              "Requires guard/sealer application to protect the finish",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "Level 1 Matte",
          description:
            "Coarse grind only — industrial warehouses and utilitarian commercial spaces. Lowest cost, fewest passes, flat non-reflective surface.",
        },
        {
          title: "Level 2 Satin",
          description:
            "Medium grind sequence — commercial kitchens and service retail. Light sheen with improved slip resistance profile.",
        },
        {
          title: "Level 3 Semi-Gloss",
          description:
            "Fine grind plus densifier application — standard commercial retail and offices. Most requested commercial finish level.",
        },
        {
          title: "Level 4 High-Gloss",
          description:
            "Full polish sequence through 3000 grit plus guard coat — showrooms, lobbies, and upscale dining. Near-mirror reflectivity.",
        },
      ]}
      processEyebrow="Finish Levels"
      processTitle="Choosing Your"
      processTitleAccent="Polish Level."
      sections={[
        {
          eyebrow: "The Process",
          title: "How We Polish",
          titleAccent: "Your Floor.",
          content: [
            "Most polished concrete failures — cloudiness, surface peeling, uneven sheen — are application failures, not material failures. The densifier step (step 4 below) is what most discount operators skip. Without densifier, the polish doesn't achieve the hardness or clarity that makes polished concrete a superior long-term floor.",
            "FDZ backs all workmanship with a 2-year warranty. Call (405) 458-4805 to discuss your project or schedule a slab assessment.",
          ],
          table: {
            headers: ["Step", "What Happens"],
            rows: [
              [
                "1. Slab assessment",
                "Check cracks, levelness, contamination, and existing coatings",
              ],
              [
                "2. Coarse grinding (16–30 grit)",
                "Remove coatings, level imperfections, open the surface",
              ],
              [
                "3. Medium grinding (80–150 grit)",
                "Refine surface, remove coarse scratch pattern",
              ],
              [
                "4. Densifier application",
                "Penetrating silicate hardens surface at chemical level (critical step)",
              ],
              [
                "5. Fine grinding (200–400 grit)",
                "Develop sheen and clarity",
              ],
              [
                "6. High-grit polishing (800–3000 grit)",
                "Achieve specified finish level",
              ],
              ["7. Guard / sealer", "Stain protection and surface durability"],
              [
                "8. Anti-slip treatment (if required)",
                "Applied where CoF requirement exists",
              ],
            ],
          },
        },
        {
          eyebrow: "Pricing",
          title: "Polished Concrete",
          titleAccent: "Cost Ranges.",
          content: [
            "Polished concrete pricing is driven by finish level (number of passes), existing floor condition, and square footage. Larger areas typically achieve lower per-square-foot pricing.",
            "Call (405) 458-4805 to discuss your project.",
          ],
          table: {
            headers: ["Finish Level", "Typical Range (per sq. ft.)"],
            rows: [
              ["Level 1 — Matte / Industrial", "$2 – $4"],
              ["Level 2 — Satin", "$3 – $5"],
              ["Level 3 — Semi-Gloss", "$4 – $7"],
              ["Level 4 — High-Gloss", "$6 – $10"],
              ["Crack repair before polishing", "$10 – $30 per sq. ft."],
              ["Old coating / adhesive removal", "$1 – $3 per sq. ft."],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/epoxy-floor-coatings-oklahoma-city' class='text-orange no-underline font-medium'>Epoxy Floor Coatings</a> — Epoxy and urethane coating systems for commercial and industrial floors where polished concrete isn't the right fit.",
            "<a href='/warehouse-floor-replacement-oklahoma-city' class='text-orange no-underline font-medium'>Warehouse Floor Replacement</a> — Full-depth warehouse slab replacement and new industrial floor pours for OKC commercial properties.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Crack repair, spalling, and surface damage repair before polishing or as a standalone service.",
            "<a href='/retail-restaurant-concrete-oklahoma-city' class='text-orange no-underline font-medium'>Retail & Restaurant Concrete</a> — Concrete services for retail centers, restaurants, and hospitality spaces including polished floors and exterior flatwork.",
          ],
        },
      ]}
      faq={[
        {
          question:
            "What is polished concrete and how is it different from sealed concrete?",
          answer:
            "Polished concrete is mechanically ground with progressively finer diamond tooling until the surface achieves a specified reflectivity level. A concrete densifier is applied during the process to harden the surface chemically. Sealed concrete is simply a liquid sealer applied to an unpolished surface — far less durable and requires more frequent reapplication. Polished concrete is a finished floor system; sealed concrete is a surface treatment.",
        },
        {
          question: "Is polished concrete slippery when wet?",
          answer:
            "Polished concrete at Level 3–4 has a lower coefficient of friction when wet than Level 1–2. Anti-slip treatments and burnished finishes can bring CoF to ≥0.5 (commercial safety standard) at all levels. For restaurant kitchens and wet commercial environments, we specify Level 1–2 finish or add anti-slip aggregate to the guard coat.",
        },
        {
          question: "How long does polished concrete last?",
          answer:
            "Indefinitely, with minimal maintenance. The surface is the concrete itself — there's no coating to peel, chip, or wear through. Periodic re-densification and guard coat reapplication (every 1–3 years in high-traffic commercial use) maintains the appearance.",
        },
        {
          question:
            "Can you polish an existing concrete floor in my business?",
          answer:
            "Yes, in most cases. We assess the existing slab for cracks, contamination, old adhesive, and surface damage first. Heavily contaminated slabs (oil-soaked warehouse floors, extensive adhesive residue) require more prep and cost more to polish. Some severely damaged slabs are better candidates for overlay or epoxy than polishing.",
        },
        {
          question:
            "How much does polished concrete cost in Oklahoma City?",
          answer:
            "Level 1 industrial matte runs $2–$4 per square foot. Level 3 semi-gloss (standard commercial) runs $4–$7. Level 4 high-gloss showroom finish runs $6–$10. Larger areas typically achieve lower per-square-foot pricing. Call (405) 458-4805 for a project-specific quote.",
        },
        {
          question:
            "What businesses are best suited for polished concrete floors?",
          answer:
            "High-traffic retail and showrooms (durability and appearance), restaurants and breweries (easy cleaning, visual appeal), warehouses (forklift resistance, reflectivity reduces lighting costs), fitness facilities (durable, cleanable), and office lobbies (low maintenance, professional appearance).",
        },
        {
          question: "How do you maintain polished concrete?",
          answer:
            "Daily damp mop with pH-neutral cleaner. Auto-scrubber for large commercial areas. Annual or bi-annual re-densifier application in high-traffic areas. Guard coat reapplication every 1–3 years depending on traffic. No waxing, stripping, or major maintenance required.",
        },
      ]}
    />
  );
}
