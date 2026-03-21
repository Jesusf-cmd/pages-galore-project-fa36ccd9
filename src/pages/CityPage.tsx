import CityPageTemplate from "@/components/CityPageTemplate";

const cityData: Record<string, { city: string; county: string; zips: string }> = {
  "oklahoma-city": { city: "Oklahoma City", county: "Oklahoma County", zips: "73107, 73109, 73112, 73118, 73120, 73127" },
  edmond: { city: "Edmond", county: "Oklahoma County", zips: "73003, 73012, 73013, 73025, 73034" },
  norman: { city: "Norman", county: "Cleveland County", zips: "73019, 73026, 73069, 73071, 73072" },
  yukon: { city: "Yukon", county: "Canadian County", zips: "73036, 73099" },
  mustang: { city: "Mustang", county: "Canadian County", zips: "73064" },
  moore: { city: "Moore", county: "Cleveland County", zips: "73160, 73170" },
  "midwest-city": { city: "Midwest City", county: "Oklahoma County", zips: "73110, 73130" },
  "del-city": { city: "Del City", county: "Oklahoma County", zips: "73115, 73135" },
};

export default function CityPage({ slug }: { slug: string }) {
  const data = cityData[slug] || cityData["oklahoma-city"];
  return (
    <CityPageTemplate
      city={data.city}
      county={data.county}
      description={`<a href="/concrete-driveways">Driveways</a>, <a href="/concrete-slabs">slabs</a>, <a href="/concrete-foundations">foundations</a>, and <a href="/stamped-concrete">stamped concrete</a> in <strong>${data.city}, Oklahoma</strong>. Redwood Construction LLC — locally owned <strong>concrete company in OKC</strong>. <a href="tel:4052470027">(405) 247-0027</a>.`}
      localContent={[
        `Redwood Construction LLC has been pouring concrete in ${data.city} as part of our full OKC metro coverage. We're a <strong>concrete company in Oklahoma City</strong> that understands local conditions — ${data.city}'s soil conditions require careful base preparation and reinforcement on every project.`,
        `Our <strong>concrete contractors in ${data.city}</strong> serve zip codes ${data.zips}. Every job gets the same process — site assessment, proper base prep, reinforcement, and a written quote that doesn't change.`,
      ]}
      servicesContent={[
        `<strong>Concrete services in ${data.city}, Oklahoma</strong> from Redwood Construction include <a href="/concrete-driveways">concrete driveways</a>, <a href="/concrete-slabs">patio and garage slabs</a>, <a href="/stamped-concrete">stamped decorative concrete</a>, <a href="/concrete-foundations">foundations</a>, <a href="/retaining-walls">retaining walls</a>, <a href="/concrete-sidewalks">sidewalks</a>, and <a href="/parking-lot-concrete">commercial parking lots</a>.`,
      ]}
      table={{
        headers: ["Service", "Typical Size", "Price Range", "Notes"],
        rows: [
          [`${data.city} driveway`, "24×40 ft", "<strong>$5,760–$9,600</strong>", "4\", rebar"],
          [`${data.city} patio slab`, "20×20 ft", "<strong>$2,400–$4,000</strong>", "4\", broom"],
          [`${data.city} stamped patio`, "400 sq ft", "<strong>$6,000–$8,800</strong>", "Pattern + sealer"],
          [`${data.city} foundation`, "1,200 sq ft", "<strong>$10,800–$16,800</strong>", "Slab-on-grade"],
        ],
      }}
      faq={[
        { question: `How much does concrete work cost in ${data.city}?`, answer: `Concrete pricing in ${data.city} follows OKC metro rates: $6–$10 per sq ft for standard slabs and driveways, $15–$22 for stamped work, and $9–$14 for foundation pours.` },
        { question: `Do you serve all of ${data.city}?`, answer: `Yes — Redwood Construction serves all of ${data.city} including zip codes ${data.zips}. Same crew, same pricing, same guarantee.` },
        { question: `What concrete services do you offer in ${data.city}?`, answer: `We offer driveways, patio slabs, stamped concrete, foundations, retaining walls, sidewalks, and commercial parking lots in ${data.city}.` },
      ]}
    />
  );
}
