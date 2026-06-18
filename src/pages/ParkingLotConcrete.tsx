import ServicePage from "@/components/ServicePageTemplate";

export default function ParkingLotConcrete() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="parking-lots-oklahoma-city"
      localExpertiseNote="Asphalt softens and ruts in Oklahoma's summer heat, and OKC's clay subgrade moves with moisture. We grade for positive drainage and build on a proof-rolled aggregate base so the lot carries loaded vehicles without ponding, rutting, or cracking."
      metaTitle="Concrete Parking Lots Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete parking lot contractors in Oklahoma City. Retail, warehouse, HOA & municipal lots. New construction, replacement, ADA-compliant, curb & gutter. Free estimate: (405) 458-4805."
      eyebrow="OKC Metro · Commercial Parking Lots · Licensed & Insured"
      title="Concrete Parking Lots in"
      titleAccent="Oklahoma City."
      description='Commercial concrete parking lot contractors in Oklahoma City — retail, warehouse, office, and municipal lots engineered for heavy traffic and OKC clay. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A parking lot is the first thing your customers drive onto and the most expensive surface to get wrong. FDZ Construction LLC designs and pours commercial concrete parking lots across the Oklahoma City metro that carry real traffic loads, drain correctly on expansive clay, and pass ADA inspection the first time — without the rutting, potholes, and constant resealing that plague asphalt."
      serviceLabel="Parking Lot"
      serviceCards={[
        {
          icon: "🅿️",
          title: "New Parking Lot Construction",
          description: "Full-build commercial lots from grading to striping — drainage engineering, compacted base, 5–6 inch reinforced slabs, and ADA-compliant accessible spaces laid out to code.",
        },
        {
          icon: "♻️",
          title: "Parking Lot Replacement",
          description: "Tear-out and repour of failed concrete or worn asphalt lots. We remove the old surface, correct the base and drainage, and pour a concrete lot built to outlast asphalt 2-to-1.",
        },
        {
          icon: "🛣️",
          title: "Curb, Gutter & Islands",
          description: "Integrated curb and gutter, landscape islands, and drainage channels that direct water off the lot and protect slab edges from undermining.",
        },
        {
          icon: "♿",
          title: "ADA Accessible Stalls",
          description: "Code-compliant accessible stalls, 8-foot access aisles, ramps, and detectable warnings — laid out and sloped to meet current ADA and city requirements.",
        },
        {
          icon: "📦",
          title: "Loading & Truck Areas",
          description: "Heavy-duty 6–8 inch sections for loading zones, truck aprons, dumpster pads, and drive lanes that carry repeated heavy-axle loads without cracking.",
        },
        {
          icon: "🎯",
          title: "Striping, Sealing & Repair",
          description: "Joint sealing, line striping, fire-lane and ADA marking, and targeted slab repair to extend the service life of new and existing lots.",
        },
      ]}
      specs={[
        { label: "Slab Thickness", value: "5–6 inches standard parking; 6–8 inches at loading, truck, and dumpster areas" },
        { label: "Concrete Strength", value: "4,000 PSI minimum; 4,500+ PSI for heavy industrial traffic" },
        { label: "Reinforcement", value: "#4 rebar grid on chairs — not wire mesh — for commercial vehicle loads" },
        { label: "Base & Compaction", value: "6+ inch compacted aggregate over proof-rolled subgrade" },
        { label: "Drainage & Grading", value: "Minimum 1–2% slope to inlets, curb, and gutter — no ponding" },
        { label: "ADA Compliance", value: "Accessible stalls, 8-ft aisles, ≤2% slope, ramps & signage" },
        { label: "Joints", value: "Control joints saw-cut within 24 hrs (~10–12 ft); isolation joints at fixed objects, sealed" },
        { label: "Cure Time", value: "Foot traffic 24–48 hrs · light vehicles ~7 days · full load rating ~28 days" },
      ]}
      sections={[
        {
          eyebrow: "Who It's For",
          title: "Parking Lots Built for",
          titleAccent: "OKC Businesses.",
          content: [
            "<strong>Commercial concrete parking lot contractors in Oklahoma City</strong> — FDZ Construction builds, replaces, and repairs parking lots for retail centers, warehouses, office and medical buildings, churches, schools, restaurants, HOAs, and municipal properties across the OKC metro.",
            "Every property type has different demands. A retail or shopping-center lot needs clean traffic flow, generous stall counts, and ADA access right at the storefront. A warehouse or industrial yard needs thicker slabs and reinforced drive lanes to carry loaded trucks and forklifts. An HOA or multifamily lot needs durable drive aisles and good drainage to avoid recurring assessments. We engineer each lot for the actual loads and traffic it will see — not a one-size-fits-all spec.",
            "Concrete is the right surface for high-traffic Oklahoma lots because it carries heavy loads without rutting in summer heat, reflects sunlight, resists fuel and oil staining, and lasts 30–40 years with far less maintenance than asphalt. Parking lot work pairs naturally with our <a href='/sidewalks-oklahoma-city'>curb &amp; gutter</a>, <a href='/commercial-concrete-oklahoma-city'>commercial slab</a>, and <a href='/foundations-oklahoma-city'>foundation</a> services for complete site builds.",
          ],
          stats: [
            { value: "5–6\"", label: "Slab thickness" },
            { value: "4,000+", label: "PSI concrete" },
            { value: "30+yr", label: "Concrete lifespan" },
          ],
        },
        {
          eyebrow: "Concrete vs Asphalt",
          title: "Why Concrete Lots Beat",
          titleAccent: "Asphalt in OKC.",
          content: [
            "Asphalt is cheaper up front but soft in Oklahoma's summer heat — it ruts under heavy vehicles, requires sealcoating every 2–3 years, and typically needs replacement in 15–20 years. Concrete carries heavy loads without deforming, shrugs off fuel and oil, reflects heat to keep the lot cooler, and lasts 30–40 years with minimal maintenance.",
            "Over the life of the lot, concrete almost always wins on total cost of ownership — especially for properties with delivery trucks, dumpsters, drive-thru lanes, or constant traffic. When you're ready, we'll give you an honest side-by-side comparison for your specific site and traffic.",
          ],
        },
        {
          eyebrow: "Parking Lot Pricing",
          title: "What a Concrete Parking Lot Costs",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Commercial parking lots run roughly $7–$12 per square foot installed, depending on size, base and drainage conditions, slab thickness, and curb/gutter requirements. Larger pours generally come in at lower per-square-foot rates. Tear-out of an existing surface and major drainage correction are quoted separately.",
          ],
          table: {
            headers: ["Project", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Retail parking lot", "2,500 sq ft", "<strong>$17,500–$30,000</strong>", "5\", with curb & gutter"],
              ["Commercial lot", "5,000 sq ft", "<strong>$35,000–$60,000</strong>", "5–6\", ADA compliant"],
              ["Large / industrial lot", "10,000+ sq ft", "<strong>Custom quoted</strong>", "6\", heavy-load sections"],
              ["Loading / truck apron", "1,000 sq ft", "<strong>$8,000–$14,000</strong>", "6–8\", reinforced"],
            ],
          },
        },
      ]}
      processEyebrow="How a Lot Gets Built"
      processTitle="From Estimate to"
      processTitleAccent="Striped & Sealed."
      processIntro="A parking lot is a drainage and traffic-flow problem before it's a concrete problem. Here's how we take a commercial lot from first site visit to a finished, striped surface that passes inspection."
      processSteps={[
        { title: "Site survey & layout", description: "We measure the lot, plan traffic flow and stall counts, map drainage, and lay out ADA spaces — coordinating with your engineer or GC on larger projects." },
        { title: "Demo & grading", description: "We remove the old asphalt or concrete, cut grade, and shape the subgrade to the engineered drainage slope so water moves to inlets and curb, not into the slab." },
        { title: "Base & compaction", description: "We install and compact 6+ inches of aggregate base and proof-roll it to confirm it will carry loaded trucks and forklifts without settling." },
        { title: "Forming, rebar & ADA", description: "Forms are set to grade, a #4 rebar grid is placed on chairs, and accessible stalls, aisles, and ramps are laid out and sloped to current code." },
        { title: "Pour & finish", description: "We place 4,000+ PSI concrete in planned sections with a broom or light-texture finish for traction in rain and snow." },
        { title: "Joints, seal & stripe", description: "Control joints are saw-cut within 24 hours and sealed, then we stripe stalls, fire lanes, and ADA markings to finish the lot." },
      ]}
      projectTypesEyebrow="Common Project Types"
      projectTypesTitle="Parking Lots We"
      projectTypesTitleAccent="Build."
      projectTypesIntro="A few of the most common commercial lot projects we handle across the Oklahoma City metro:"
      projectTypes={[
        { title: "Retail & shopping center lots", description: "High-visibility lots with clean traffic flow, maximized stall counts, and ADA access at every storefront." },
        { title: "Warehouse & industrial yards", description: "Thick, reinforced slabs and drive lanes engineered for loaded trucks, trailers, and forklift traffic." },
        { title: "Office & medical building lots", description: "Durable, professional lots with proper drainage, accessible parking, and clear wayfinding striping." },
        { title: "Church & school parking", description: "Large-capacity lots built for heavy weekend and event-day surges, with safe pedestrian routes." },
        { title: "HOA & multifamily lots", description: "Drive aisles, resident parking, and dumpster pads built to cut down on recurring repair assessments." },
        { title: "Municipal & city lots", description: "Public lots poured to city spec with code-compliant drainage, ADA access, and curb & gutter." },
        { title: "Restaurant & drive-thru lanes", description: "Heavy-duty drive-thru lanes and stacking areas that resist rutting from constant slow, heavy traffic." },
        { title: "Asphalt-to-concrete conversions", description: "Replacing tired, patched asphalt with a concrete lot that lasts far longer and cleans up your curb appeal." },
      ]}
      cityBlockIntro={`We build and replace commercial concrete parking lots throughout the Oklahoma City metro — for retail centers, warehouses, offices, churches, and HOAs in <a href="/oklahoma-city-concrete" class="text-orange no-underline">Oklahoma City</a>, <a href="/edmond-concrete" class="text-orange no-underline">Edmond</a>, <a href="/norman-ok-concrete" class="text-orange no-underline">Norman</a>, <a href="/moore-oklahoma-concrete" class="text-orange no-underline">Moore</a>, <a href="/yukon-oklahoma-concrete" class="text-orange no-underline">Yukon</a>, <a href="/mustang-oklahoma-concrete" class="text-orange no-underline">Mustang</a>, <a href="/midwest-city-oklahoma-concrete" class="text-orange no-underline">Midwest City</a>, and <a href="/del-city-oklahoma-concrete" class="text-orange no-underline">Del City</a>.`}
      faq={[
        { question: "How much does a commercial parking lot cost in OKC?", answer: "Commercial concrete parking lots run roughly $7–$12 per square foot installed, depending on size, base and drainage conditions, slab thickness, and curb/gutter. A 5,000 sq ft commercial lot typically lands between $35,000 and $60,000. Larger lots come in at lower per-square-foot rates." },
        { question: "Is concrete or asphalt better for a parking lot?", answer: "For heavy traffic and long-term cost, concrete. It carries heavy loads without rutting in summer heat, resists fuel and oil, reflects heat, and lasts 30–40 years. Asphalt is cheaper up front but needs sealcoating every 2–3 years and replacement in 15–20 years." },
        { question: "How long does a concrete parking lot last?", answer: "A properly built concrete parking lot lasts 30–40 years with minimal maintenance — roughly double the lifespan of asphalt, and without the recurring sealcoat cost." },
        { question: "How thick should a concrete parking lot be?", answer: "Standard parking stalls and aisles use 5–6 inch reinforced slabs. Loading zones, truck aprons, dumpster pads, and heavy drive lanes use 6–8 inches with a heavier rebar schedule." },
        { question: "How long before we can park on a new concrete lot?", answer: "Foot traffic is usually fine in 24–48 hours and light vehicles after about 7 days. Concrete reaches its full design strength and load rating at about 28 days — we'll give you a clear schedule for your lot, including phased pours to keep part of the lot open." },
        { question: "Do you handle ADA compliance and striping?", answer: "Yes — every lot we build includes ADA-compliant accessible stalls, 8-foot access aisles, ramps, and signage per current code, plus stall, fire-lane, and ADA striping to finish the job." },
        { question: "Can you replace our asphalt lot with concrete?", answer: "Yes. We remove the existing asphalt, correct the base and drainage, and pour a concrete lot built to last far longer. We'll give you an honest cost comparison for your site." },
        { question: "Do you work with general contractors and engineers?", answer: "Yes — we regularly coordinate with GCs, site engineers, and city inspectors, follow your schedule, and meet all spec, drainage, and ADA requirements." },
      ]}
    />
  );
}
