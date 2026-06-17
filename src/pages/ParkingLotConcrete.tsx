import ServicePage from "@/components/ServicePageTemplate";

export default function ParkingLotConcrete() {
  return (
    <ServicePage
      currentServiceSlug="parking-lots-oklahoma-city"
      metaTitle="Concrete Parking Lots Oklahoma City | FDZ Construction LLC"
      metaDescription="Commercial concrete parking lot contractors in Oklahoma City. New construction, replacement, ADA-compliant design, curb & gutter. 5–6 inch reinforced slabs. Free estimate: (405) 458-4805."
      eyebrow="OKC Metro · Commercial Parking Lots · Licensed & Insured"
      title="Concrete Parking Lots in"
      titleAccent="Oklahoma City."
      description='Commercial concrete parking lot contractors in Oklahoma City — new construction, replacement, and ADA-compliant design built for heavy traffic. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="A concrete parking lot is the first thing your customers drive onto and the last thing you want to repour. FDZ Construction LLC builds commercial parking lots engineered for OKC's clay soil and heavy traffic — 5–6 inch reinforced slabs, proper drainage grading, sealed joints, and ADA-compliant layouts that pass inspection the first time."
      serviceLabel="Parking Lot"
      serviceCards={[
        {
          icon: "🅿️",
          title: "New Parking Lot Construction",
          description: "Full-build commercial lots from grading to striping. Drainage engineering, compacted base, 5–6 inch reinforced slabs, and ADA-compliant accessible spaces per code.",
        },
        {
          icon: "♻️",
          title: "Parking Lot Replacement",
          description: "Tear-out and repour of failed or asphalt lots. We remove the old surface, correct the base and drainage, and pour a concrete lot built to outlast asphalt 3-to-1.",
        },
        {
          icon: "🛣️",
          title: "Curb, Gutter & Islands",
          description: "Integrated curb and gutter, landscape islands, and drainage channels that direct water off your lot and protect the slab edges from undermining.",
        },
        {
          icon: "♿",
          title: "ADA Accessible Spaces",
          description: "Code-compliant accessible stalls, access aisles, ramps, and detectable warnings — laid out and sloped to meet current ADA and city requirements.",
        },
        {
          icon: "📦",
          title: "Loading & Truck Areas",
          description: "Heavy-duty 6–8 inch sections for loading zones, truck aprons, and drive lanes that carry repeated heavy-axle loads without cracking.",
        },
        {
          icon: "🎯",
          title: "Striping & Sealing",
          description: "Joint sealing, line striping, and surface sealing to finish the lot and extend its service life across Oklahoma's freeze-thaw and heat cycles.",
        },
      ]}
      specs={[
        { label: "Slab Thickness", value: "5–6 inches standard; 6–8 inches at loading/truck areas" },
        { label: "Concrete Strength", value: "4,000 PSI minimum for commercial traffic" },
        { label: "Reinforcement", value: "Rebar grid on chairs, sized for vehicle loads" },
        { label: "Base", value: "6+ inch compacted aggregate over prepared subgrade" },
        { label: "Drainage", value: "Engineered slope to inlets, curb, and gutter" },
        { label: "ADA Compliance", value: "Accessible stalls, aisles, ramps & signage per code" },
      ]}
      whyChooseUs={[
        { icon: "🛡️", title: "Licensed & Insured", description: "Fully licensed Oklahoma contractor, BBB A+ accredited, with liability and workers comp on every commercial job." },
        { icon: "🏗️", title: "Commercial Experience", description: "Parking lots, drive lanes, and site work delivered across the OKC metro — see our Kiddie Academy project." },
        { icon: "📐", title: "Built to Spec", description: "We coordinate with engineers, GCs, and city inspectors so the lot meets drainage, load, and ADA requirements." },
        { icon: "📋", title: "Written Estimates", description: "Itemized, on-site estimates. The price we quote is the price you pay — no surprise change orders." },
      ]}
      sections={[
        {
          eyebrow: "Commercial Parking Lots",
          title: "Built for Heavy",
          titleAccent: "Commercial Traffic.",
          content: [
            "<strong>Commercial concrete parking lot contractors in Oklahoma City</strong> — FDZ Construction handles new parking lot construction, full replacement, and major repairs for OKC businesses, retail centers, churches, and industrial properties.",
            "Concrete parking lots require 5–6 inch slabs, proper drainage grading, sealed joints, and reinforcement designed for heavy vehicle loads. Our parking lot work integrates with <a href='/sidewalks-oklahoma-city'>curb and gutter</a>, <a href='/commercial-concrete-oklahoma-city'>commercial slab</a>, and <a href='/foundations-oklahoma-city'>foundation</a> services for complete site builds.",
          ],
          stats: [
            { value: "5–6\"", label: "Slab thickness" },
            { value: "4,000", label: "PSI minimum" },
            { value: "30+yr", label: "Concrete lifespan" },
          ],
        },
        {
          eyebrow: "Concrete vs Asphalt",
          title: "Why Concrete Lots Beat",
          titleAccent: "Asphalt in OKC.",
          content: [
            "Asphalt is cheaper up front but soft in Oklahoma's summer heat — it rutts under heavy vehicles, requires resealing every few years, and typically needs replacement in 15–20 years. Concrete carries heavy loads without deforming, reflects heat, and lasts 30–40 years with minimal maintenance.",
            "Over the life of the lot, concrete almost always wins on total cost of ownership — especially for properties with delivery trucks, dumpsters, or constant traffic. We'll give you an honest comparison for your specific site.",
          ],
        },
        {
          eyebrow: "Parking Lot Pricing",
          title: "What a Concrete Parking Lot Costs",
          titleAccent: "in Oklahoma City.",
          alt: true,
          content: [
            "Commercial parking lots run $7–$12 per square foot installed, depending on size, base conditions, drainage work, and curb/gutter requirements. Larger pours typically come in at lower per-square-foot rates.",
          ],
          table: {
            headers: ["Project", "Typical Size", "Price Range", "Notes"],
            rows: [
              ["Retail parking lot", "2,500 sq ft", "<strong>$17,500–$30,000</strong>", "5\", with curb & gutter"],
              ["Commercial lot", "5,000 sq ft", "<strong>$35,000–$60,000</strong>", "5–6\", ADA compliant"],
              ["Large/industrial lot", "10,000+ sq ft", "<strong>Custom quoted</strong>", "6\", heavy-load sections"],
              ["Loading/truck apron", "1,000 sq ft", "<strong>$8,000–$14,000</strong>", "6–8\", reinforced"],
            ],
          },
        },
        {
          eyebrow: "Our Parking Lot Process",
          title: "From Site Prep to",
          titleAccent: "Striped & Sealed.",
          alt: true,
          content: [
            "Parking lot construction requires careful planning for drainage, traffic flow, ADA compliance, and long-term durability. We coordinate with engineers and property owners to develop a pour plan that accounts for all of these factors before the first truck arrives.",
            "Our process includes thorough site grading for proper drainage, compacted aggregate base, reinforcement per specifications, and 4,000 PSI concrete placed in coordinated pours. Joint spacing is engineered for the slab dimensions, ADA-compliant spaces are included per code, and the lot is sealed and striped to finish. We serve commercial clients across the <a href='/oklahoma-city-concrete'>OKC metro</a> including <a href='/edmond-concrete'>Edmond</a>, <a href='/yukon-oklahoma-concrete'>Yukon</a>, and <a href='/moore-oklahoma-concrete'>Moore</a>.",
          ],
        },
      ]}
      faq={[
        { question: "How much does a concrete parking lot cost in OKC?", answer: "Commercial parking lots run $7–$12 per sq ft installed, depending on size, base conditions, drainage, and curb/gutter requirements. Larger lots come in at lower per-square-foot rates." },
        { question: "How long does a concrete parking lot last?", answer: "A properly built concrete parking lot lasts 30–40 years with minimal maintenance — roughly double the lifespan of asphalt, and without the recurring reseal cost." },
        { question: "Is concrete better than asphalt for a parking lot?", answer: "For heavy traffic and long-term cost, yes. Concrete carries heavy loads without rutting, reflects heat, and lasts far longer. Asphalt is cheaper up front but needs resealing and earlier replacement." },
        { question: "Do you handle ADA compliance for parking lots?", answer: "Yes — every commercial parking lot we build includes ADA-compliant accessible spaces, access aisles, ramps, and signage per current code requirements." },
        { question: "How thick should a concrete parking lot be?", answer: "Standard parking areas use 5–6 inch reinforced slabs. Loading zones, truck aprons, and drive lanes that carry heavy axle loads use 6–8 inches." },
        { question: "Do you work with general contractors and engineers?", answer: "Yes — we regularly coordinate with GCs, site engineers, and city inspectors, follow your schedule, and meet all spec and drainage requirements." },
        { question: "What areas do you serve for parking lots?", answer: "We serve the entire OKC metro including Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, and Del City." },
      ]}
    />
  );
}
