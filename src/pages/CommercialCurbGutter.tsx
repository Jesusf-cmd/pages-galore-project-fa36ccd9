import ServicePage from "@/components/ServicePageTemplate";

export default function CommercialCurbGutter() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="commercial-curb-and-gutter-oklahoma-city"
      metaTitle="Commercial Curb and Gutter Oklahoma City | Concrete Curb Replacement | FDZ Construction"
      metaDescription="Commercial concrete curb and gutter in Oklahoma City — new construction, replacement, curb repair, and parking lot curbing. Licensed contractor. Call (405) 458-4805."
      eyebrow="OKC Metro · Commercial Curbing · Licensed & Insured"
      title="Commercial Curb & Gutter in"
      titleAccent="Oklahoma City."
      description='Commercial concrete curb and gutter in Oklahoma City — new parking lot curbing, replacement sections, drive approach cuts, and island curbs. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Concrete curb and gutter defines the edges of every commercial parking lot, drive-through lane, and site access road in OKC. It controls drainage, protects landscaping, guides traffic, and gives a commercial property a finished, professional appearance. When curbing is cracked, broken, or missing, properties lose drainage control, vehicles damage landscape edges, and the overall appearance suffers. FDZ installs and replaces commercial concrete curb and gutter throughout the OKC metro — new construction, replacement sections, and full perimeter pours. Call (405) 458-4805."
      localExpertiseNote="Tree root intrusion and OKC's expansive clay are the two primary causes of curb failure on commercial properties. Roots lift and crack curb sections from below. Clay settlement pulls curb away from sub-base, creating gaps and toppling. A curb replacement that doesn't correct sub-base conditions on clay will fail on the same timeline as the original."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏗️",
          title: "New Curb & Gutter Construction",
          description:
            "Full perimeter curbing for new commercial sites — coordinated with site grades to ensure proper drainage flow from day one.",
        },
        {
          icon: "🔄",
          title: "Curb Section Replacement",
          description:
            "Saw-cut and replace failed sections — sub-base assessment and correction included where clay or roots have undermined the original.",
        },
        {
          icon: "🅿️",
          title: "Parking Island Curbs",
          description:
            "Formed curb surrounding landscape islands inside parking lots — standard barrier or mountable profiles.",
        },
        {
          icon: "🚗",
          title: "Drive Approach Curb Cuts",
          description:
            "Lowered curb sections at driveway entries with proper radius and ADA-compliant transitions.",
        },
        {
          icon: "🌊",
          title: "Valley Gutters & Drainage",
          description:
            "Flat concrete channels that direct water flow across pavement — used where standard curb and gutter isn't appropriate.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Curb & Gutter Services in Oklahoma City",
        items: [
          {
            title: "Standard Barrier Curb (Type B)",
            bullets: [
              "Vertical face curb — stops vehicles from overrunning landscape areas and controls parking lot perimeter",
              "Standard OKC commercial parking lot curb profile",
              "6\" height above finished pavement grade",
              "Poured on compacted sub-base with 3,500 PSI concrete",
            ],
          },
          {
            title: "Mountable / Rollover Curb",
            bullets: [
              "Sloped face for areas where vehicles need to cross — parking islands, median transitions, drive approach edges",
              "Lower height profile than barrier curb — typically 4\" above grade with 6\" sloped face",
              "Used where turning movements require crossing curb lines",
            ],
          },
          {
            title: "Curb and Gutter (Combined Monolithic Pour)",
            bullets: [
              "Combines curb and drainage gutter in a single pour",
              "Standard for street-adjacent commercial properties and sites with curb-line drainage",
              "APWA and OKC standard profiles available",
              "Coordinates with storm inlet locations",
            ],
          },
          {
            title: "Parking Island & Median Curbs",
            bullets: [
              "Curb surrounding landscape islands and medians within parking lots",
              "Can be standard barrier, mountable, or raised median depending on application",
              "Radius curves formed in place for islands with non-standard shapes",
            ],
          },
          {
            title: "Drive Approach Curb Cuts",
            bullets: [
              "Lowered curb section at commercial driveway entries",
              "Radius formed to match approach width and turning path",
              "ADA-compliant transitions where pedestrian crossing is involved",
              "Coordinate with striping and signage trades",
            ],
          },
        ],
      }}
      processSteps={[
        {
          title: "Site Walk & Measurement",
          description:
            "Linear footage, profiles needed, and drainage grades all measured before any quote is written.",
        },
        {
          title: "Written Quote",
          description:
            "Section-by-section scope with profile type, linear footage, and pricing — no lump-sum estimates for commercial curb work.",
        },
        {
          title: "Saw-Cut & Demo",
          description:
            "Failed sections saw-cut at clean joints and removed — or full layout staked for new construction.",
        },
        {
          title: "Sub-Base Correction",
          description:
            "OKC clay that has lost compaction under the existing curb is excavated and replaced with compacted gravel before re-forming.",
        },
        {
          title: "Form & Pour",
          description:
            "Forms set to grade, pour at 3,500 PSI with proper cure — broom or standard finish to match existing.",
        },
      ]}
      processEyebrow="How It Works"
      processTitle="The Curb & Gutter"
      processTitleAccent="Process."
      sections={[
        {
          eyebrow: "Common Curb Failures",
          title: "New Construction vs.",
          titleAccent: "Replacement.",
          content: [
            "For new commercial site development, FDZ coordinates curb layout with site grades to ensure drainage flows correctly from day one — getting grades wrong during curb installation creates permanent drainage problems. For replacement of existing failed sections, the process starts with root cause assessment: tree intrusion, clay settlement, vehicle impact, or simple age failure each require a different approach before pouring.",
            "We saw-cut and remove failed sections cleanly, assess the sub-base condition (OKC clay that has lost compaction under the curb must be corrected before re-pouring), and form to match existing grades and profiles.",
          ],
        },
        {
          eyebrow: "Pricing",
          title: "Curb & Gutter",
          titleAccent: "Cost Ranges.",
          content: [
            "Curb pricing is driven by linear footage, profile type, and site conditions. Replacement work typically runs slightly higher than new construction due to saw-cutting and demolition.",
            "Call (405) 458-4805 for a free on-site measurement and quote.",
          ],
          table: {
            headers: ["Service", "Typical Range"],
            rows: [
              ["New curb and gutter (per linear ft.)", "$25 – $50"],
              ["Curb replacement (per linear ft.)", "$30 – $60"],
              ["Parking island curb (per linear ft.)", "$20 – $45"],
              ["Drive approach curb cut", "$500 – $1,500"],
              ["Speed bump / wheel stop", "$300 – $700 each"],
              ["Full parking lot curb perimeter", "Quote required"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Commercial Concrete",
          titleAccent: "Services.",
          content: [
            "<a href='/parking-lots-oklahoma-city' class='text-orange no-underline font-medium'>Parking Lot Concrete</a> — New commercial parking lot installation and full replacement with ADA-compliant layouts throughout OKC.",
            "<a href='/ada-ramps-oklahoma-city' class='text-orange no-underline font-medium'>ADA Ramps & Compliance</a> — ADA curb ramps, curb cuts, detectable warning surfaces, and accessible route construction.",
            "<a href='/dumpster-pads-oklahoma-city' class='text-orange no-underline font-medium'>Dumpster Pads</a> — Commercial concrete dumpster pads and trash enclosure coordination for OKC commercial properties.",
            "<a href='/commercial-concrete-repair-oklahoma-city' class='text-orange no-underline font-medium'>Commercial Concrete Repair</a> — Crack repair, spalling, trip hazard removal, and joint sealing throughout OKC.",
          ],
        },
      ]}
      faq={[
        {
          question:
            "How much does commercial curb and gutter cost in Oklahoma City?",
          answer:
            "New curb and gutter typically runs $25–$50 per linear foot. Replacement runs slightly higher at $30–$60 per linear foot due to saw-cutting and removal of existing curb. Parking island curbs and specialized profiles vary. Free on-site quote provided.",
        },
        {
          question:
            "How long does concrete curb last on a commercial property?",
          answer:
            "Properly installed curb on correct sub-base typically lasts 20–30+ years. In OKC, tree root intrusion and clay settlement are the main early-failure causes — both are sub-base and drainage issues, not concrete quality issues.",
        },
        {
          question: "Can you replace just a section of broken curb?",
          answer:
            "Yes. FDZ saw-cuts at clean joints on either side of the failed section, removes the failed curb, assesses the sub-base, and pours a replacement section to match the existing profile. Section replacement is often half the cost of a full perimeter pour.",
        },
        {
          question:
            "What type of curb is required in OKC commercial parking lots?",
          answer:
            "Most OKC commercial parking lots use standard barrier curb (Type B or equivalent APWA profile) around the perimeter and island areas. Drive approaches require lowered curb cuts with proper radius. ADA regulations apply at pedestrian crossing points. FDZ knows OKC standard profiles.",
        },
        {
          question:
            "How do I know if my curb needs repair vs. full replacement?",
          answer:
            "Single cracked or settled sections are repair candidates. Widespread settlement along a long run of curb, or curb that has separated significantly from the pavement, typically indicates sub-base failure and warrants full section replacement with sub-base correction.",
        },
        {
          question:
            "Do I need a permit for curb replacement in Oklahoma City?",
          answer:
            "Curb replacement on private commercial property typically does not require a permit in OKC. Work that involves cutting or tying into city right-of-way (public street curb) does require a permit and ROW coordination. FDZ handles permit questions as part of the estimate.",
        },
      ]}
    />
  );
}
