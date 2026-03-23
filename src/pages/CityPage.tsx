import CityPageTemplate from "@/components/CityPageTemplate";

const cityData: Record<string, {
  city: string;
  county: string;
  zips: string;
  intro: string[];
  servicesIntro: string[];
  localDetails: string;
  soilNote: string;
  faq: { question: string; answer: string }[];
  metaDescription: string;
}> = {
  "oklahoma-city": {
    city: "Oklahoma City",
    county: "Oklahoma County",
    zips: "73107, 73109, 73112, 73118, 73120, 73127",
    metaDescription: "Concrete contractor in Oklahoma City, OK — Redwood Construction LLC. Driveways, slabs, foundations & patios built for OKC's expansive Permian clay. 500+ metro projects. Free estimate: (405) 247-0027.",
    intro: [
      "Redwood Construction LLC is headquartered in the Oklahoma City metro, giving us firsthand knowledge of the soil conditions, drainage challenges, and building codes that affect every concrete project in the area. From the historic neighborhoods near Capitol Hill to the growing developments in northwest OKC, we've poured concrete across every part of this city.",
      "Oklahoma City's expansive Permian red clay is among the most challenging soil types for concrete work in the entire country. This clay swells dramatically during wet seasons and contracts during Oklahoma's intense summer droughts, creating a cycle of movement that destroys improperly built concrete. Our crews understand this at a granular level — we adjust base depth, reinforcement, and drainage for each zip code we serve.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Oklahoma City</strong> from Redwood Construction include <a href='/concrete-driveways'>concrete driveways</a>, <a href='/concrete-slabs'>patio and garage slabs</a>, <a href='/stamped-concrete'>stamped decorative concrete</a>, <a href='/concrete-foundations'>foundations</a>, <a href='/retaining-walls'>retaining walls</a>, <a href='/concrete-sidewalks'>sidewalks</a>, and <a href='/parking-lot-concrete'>commercial parking lots</a>. We also handle <a href='/curb-and-gutter'>curb and gutter</a> and <a href='/commercial-concrete-slabs'>commercial slabs</a>.",
    ],
    localDetails: "We've completed projects near Lake Hefner, in Nichols Hills, across the Paseo district, and throughout south OKC. Our knowledge of local permitting requirements and city right-of-way specifications keeps projects running on schedule.",
    soilNote: "OKC sits on Permian-age red clay with a Plasticity Index often exceeding 35. This means aggressive swell-shrink cycles that demand deeper base prep and heavier reinforcement than most cities require.",
    faq: [
      { question: "How much does concrete work cost in Oklahoma City?", answer: "Concrete pricing in Oklahoma City runs $6–$10 per sq ft for standard slabs and driveways, $15–$22 for stamped work, and $9–$14 for foundation pours. Get a free on-site estimate for accurate pricing." },
      { question: "Do you serve all of Oklahoma City?", answer: "Yes — Redwood Construction serves all of Oklahoma City including zip codes 73107, 73109, 73112, 73118, 73120, 73127, and surrounding areas. Same crew, same pricing." },
      { question: "What concrete services do you offer in Oklahoma City?", answer: "We offer driveways, patio slabs, stamped concrete, foundations, retaining walls, sidewalks, curb and gutter, and commercial parking lots throughout Oklahoma City." },
      { question: "Why is base prep so important in Oklahoma City?", answer: "OKC's expansive clay soil swells and contracts with moisture changes. Without proper base prep — excavation, aggregate base, and compaction — concrete will crack and heave within a few years." },
    ],
  },
  edmond: {
    city: "Edmond",
    county: "Oklahoma County",
    zips: "73003, 73012, 73013, 73025, 73034",
    intro: [
      "Edmond is one of the fastest-growing cities in the OKC metro, with new residential construction booming in areas like Deer Creek, Coffee Creek, and along the 15th Street corridor. Redwood Construction has been pouring concrete for Edmond homeowners and builders since our earliest days — we know the neighborhoods, the soil variations, and the local expectations.",
      "Edmond's soil conditions vary significantly by location. The western sections near Piedmont feature heavier clay with higher swell potential, while the eastern areas closer to I-35 have more mixed soil profiles. We adjust our base prep and reinforcement recommendations based on the specific lot — not a one-size-fits-all approach.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Edmond, Oklahoma</strong> include <a href='/concrete-driveways'>residential driveways</a>, <a href='/concrete-slabs'>patio and garage slabs</a>, <a href='/stamped-concrete'>stamped decorative concrete</a>, <a href='/concrete-foundations'>new construction foundations</a>, and <a href='/concrete-sidewalks'>sidewalks</a>. Edmond's newer subdivisions often require coordination with builders on <a href='/concrete-foundations'>foundation work</a> and <a href='/concrete-driveways'>driveway pours</a>.",
    ],
    localDetails: "Our Edmond projects include driveways in Deer Creek, stamped patios near UCO, and foundation work in the growing communities along Covell Road. We understand Edmond's specific permitting requirements and HOA standards.",
    soilNote: "Western Edmond near Piedmont has some of the heaviest clay in Oklahoma County, often requiring 6-inch aggregate base and #4 rebar at 18-inch spacing. Eastern Edmond soils are more forgiving but still require proper preparation.",
    faq: [
      { question: "How much does concrete cost in Edmond, OK?", answer: "Concrete in Edmond follows OKC metro rates: $6–$10 per sq ft for driveways and slabs, $15–$22 for stamped work. New construction foundation work runs $9–$14/sq ft." },
      { question: "Do you serve all Edmond neighborhoods?", answer: "Yes — we serve all of Edmond including Deer Creek, Coffee Creek, Spring Creek, and zip codes 73003, 73012, 73013, 73025, and 73034." },
      { question: "Can you match existing concrete in Edmond subdivisions?", answer: "Yes — we match existing colors, finishes, and grades for driveway extensions, patio additions, and replacement work in established Edmond neighborhoods." },
    ],
  },
  norman: {
    city: "Norman",
    county: "Cleveland County",
    zips: "73019, 73026, 73069, 73071, 73072",
    intro: [
      "Norman, home to the University of Oklahoma, presents unique concrete challenges due to its location in Cleveland County. The soil profile in Norman differs from central Oklahoma City — it includes both heavy red clay in the western sections and lighter sandy-clay mix near the Canadian River corridor in the east.",
      "Redwood Construction has completed numerous projects in Norman, from driveway replacements in established neighborhoods near Main Street to new construction foundations in the growing communities along 24th Avenue NW. Norman's weather exposure is slightly different from OKC — the city catches more direct storm paths, making proper drainage grading critical on every pour.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Norman, Oklahoma</strong> include <a href='/concrete-driveways'>driveway installation and replacement</a>, <a href='/concrete-slabs'>patio and garage slabs</a>, <a href='/stamped-concrete'>stamped decorative concrete</a>, <a href='/concrete-foundations'>residential foundations</a>, and <a href='/retaining-walls'>retaining walls</a>. Norman homeowners near the Canadian River floodplain especially benefit from proper <a href='/concrete-foundations'>foundation engineering</a> and drainage planning.",
    ],
    localDetails: "We've worked on projects throughout Norman — from the historic neighborhoods near OU campus to the newer developments along Rock Creek Road. Our understanding of Cleveland County building codes and soil conditions ensures compliant, durable concrete work.",
    soilNote: "Norman's western areas have heavy clay similar to OKC, but the eastern sections near the Canadian River feature alluvial deposits with different bearing capacity. We adjust footing depth and base specifications accordingly.",
    faq: [
      { question: "How much does concrete cost in Norman, OK?", answer: "Norman follows OKC metro concrete pricing: $6–$10/sq ft for standard work, $15–$22 for stamped. Foundation work runs $9–$14/sq ft. Get a free estimate for your specific project." },
      { question: "Do you serve all of Norman?", answer: "Yes — we cover all Norman zip codes including 73019, 73026, 73069, 73071, and 73072. Same crew and standards as our OKC projects." },
      { question: "What's different about pouring concrete in Norman?", answer: "Norman's soil profile varies more than OKC — western areas have heavy clay while eastern sections near the river have different characteristics. We adjust our approach for each site." },
    ],
  },
  yukon: {
    city: "Yukon",
    county: "Canadian County",
    zips: "73036, 73099",
    intro: [
      "Yukon sits in Canadian County on the western edge of the OKC metro, where the soil transitions from Oklahoma County's red clay to the slightly sandier profiles found further west. This transition zone creates unique concrete challenges — the soil can behave differently across a single property.",
      "Redwood Construction serves Yukon homeowners and businesses with the same standards and crew we use across the entire metro. We've completed driveways, patios, commercial slabs, and foundation work throughout Yukon — including projects near the downtown district and in the newer developments along SH-66.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Yukon, Oklahoma</strong> include <a href='/concrete-driveways'>driveways</a>, <a href='/concrete-slabs'>patio and garage slabs</a>, <a href='/stamped-concrete'>stamped concrete</a>, <a href='/concrete-foundations'>foundations</a>, and <a href='/parking-lot-concrete'>commercial parking lots</a>. Yukon's growing commercial corridor along I-40 keeps our <a href='/commercial-concrete-slabs'>commercial concrete</a> crew busy.",
    ],
    localDetails: "Our Yukon projects span from residential driveways near Czech Hall to commercial pours along the I-40 corridor. We understand Canadian County's building requirements and coordinate with local inspectors.",
    soilNote: "Canadian County soil in Yukon is transitional — less aggressive than Oklahoma County red clay but still expansive enough to require proper base prep. We typically spec 4-inch aggregate base minimum with rebar reinforcement.",
    faq: [
      { question: "How much does concrete cost in Yukon, OK?", answer: "Yukon concrete pricing matches OKC metro rates: $6–$10/sq ft for standard driveways and slabs, $15–$22 for stamped finishes. Contact us for a free on-site estimate." },
      { question: "Do you serve all of Yukon?", answer: "Yes — we serve all of Yukon including zip codes 73036 and 73099, plus the surrounding Canadian County areas." },
      { question: "Is Yukon soil easier to work with than OKC?", answer: "Slightly — Canadian County clay is generally less aggressive than Oklahoma County red clay, but proper base prep and reinforcement are still essential for durable concrete." },
    ],
  },
  mustang: {
    city: "Mustang",
    county: "Canadian County",
    zips: "73064",
    intro: [
      "Mustang has experienced significant residential growth over the past decade, with new subdivisions expanding south and west of the city center. Redwood Construction serves Mustang homeowners with driveways, patios, foundations, and decorative concrete — bringing the same quality we deliver across the OKC metro.",
      "Like neighboring Yukon, Mustang's Canadian County soil is transitional between the heavy red clay of central OKC and the sandier profiles further west. Our crew evaluates each Mustang property individually — adjusting base depth and reinforcement based on actual soil conditions, not assumptions.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Mustang, Oklahoma</strong> include <a href='/concrete-driveways'>driveway construction</a>, <a href='/concrete-slabs'>patio and garage floor slabs</a>, <a href='/stamped-concrete'>stamped decorative concrete</a>, and <a href='/concrete-foundations'>residential foundations</a>. Many Mustang homeowners combine a <a href='/concrete-patio-okc'>new patio</a> with <a href='/retaining-walls'>retaining wall</a> work for complete backyard upgrades.",
    ],
    localDetails: "We've completed projects throughout Mustang — from driveway replacements in established neighborhoods to new construction foundations in the subdivisions south of SH-152. Our familiarity with Mustang's growth patterns helps us anticipate site conditions.",
    soilNote: "Mustang soil profiles are similar to Yukon — transitional clay that still requires proper base compaction and reinforcement. New construction sites often have fill soil that needs additional compaction before pouring.",
    faq: [
      { question: "How much does concrete cost in Mustang, OK?", answer: "Mustang concrete pricing follows OKC metro rates: $6–$10/sq ft for standard work, $15–$22 for stamped concrete. Foundation work runs $9–$14/sq ft." },
      { question: "Do you work in new Mustang subdivisions?", answer: "Yes — we coordinate with builders on foundation pours and handle driveway and patio work in both new and established Mustang neighborhoods." },
      { question: "What services do you offer in Mustang?", answer: "We offer driveways, patios, slabs, stamped concrete, foundations, retaining walls, and sidewalks throughout Mustang. Same crew and pricing as our OKC work." },
    ],
  },
  moore: {
    city: "Moore",
    county: "Cleveland County",
    zips: "73160, 73170",
    intro: [
      "Moore, located in Cleveland County just south of Oklahoma City, is known for its strong residential communities and, unfortunately, its exposure to severe weather. The tornado activity in Moore has led to significant rebuilding over the years — and Redwood Construction has been part of that recovery, pouring foundations and flatwork for homeowners rebuilding after storms.",
      "Moore's soil conditions are consistent with the broader Cleveland County profile — moderate to heavy clay that requires proper base preparation on every concrete project. The city's flat terrain means drainage grading is especially important — without proper slope, water pools on slabs and against foundations.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Moore, Oklahoma</strong> include <a href='/concrete-driveways'>driveway installation</a>, <a href='/concrete-slabs'>patio and garage slabs</a>, <a href='/stamped-concrete'>stamped concrete</a>, <a href='/concrete-foundations'>residential foundations</a>, and <a href='/concrete-sidewalks'>sidewalks</a>. Moore homeowners rebuilding after storm damage benefit from our experience with <a href='/concrete-foundations'>foundation replacement</a> and complete site work.",
    ],
    localDetails: "Our Moore projects include foundation replacement after storm damage, driveway work near Warren Theatre, and patio installations in the neighborhoods along 19th Street. We understand Moore's specific building requirements and work with local inspectors.",
    soilNote: "Moore's flat terrain and Cleveland County clay create drainage challenges. We grade every slab and driveway to direct water away from structures — a critical detail in a city where standing water can cause foundation problems.",
    faq: [
      { question: "How much does concrete cost in Moore, OK?", answer: "Moore concrete pricing follows OKC metro rates: $6–$10/sq ft for driveways and slabs, $9–$14 for foundations. Storm damage replacement costs vary based on scope." },
      { question: "Do you handle foundation replacement after storm damage?", answer: "Yes — we've completed multiple foundation and flatwork projects in Moore for homeowners rebuilding after severe weather. We coordinate with insurance adjusters and builders." },
      { question: "What areas of Moore do you serve?", answer: "We serve all of Moore including zip codes 73160 and 73170 — from the neighborhoods near I-35 to the western developments." },
    ],
  },
  "midwest-city": {
    city: "Midwest City",
    county: "Oklahoma County",
    zips: "73110, 73130",
    intro: [
      "Midwest City, located adjacent to Tinker Air Force Base in eastern Oklahoma County, has a well-established residential base with many homes built in the mid-20th century. This means a significant portion of our Midwest City work involves replacing aging driveways, patios, and sidewalks that have reached the end of their service life.",
      "The soil in eastern Oklahoma County tends to be slightly less aggressive than the central OKC red clay, but still contains enough expansive minerals to require proper base preparation. Midwest City's older neighborhoods often have mature trees with root systems that can affect concrete work — our crew identifies and addresses these issues during the site assessment.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Midwest City, Oklahoma</strong> include <a href='/concrete-driveways'>driveway replacement</a>, <a href='/concrete-slabs'>patio slabs</a>, <a href='/concrete-sidewalks'>sidewalk repair</a>, and <a href='/concrete-foundations'>foundation work</a>. Midwest City's older homes often need complete <a href='/concrete-driveways'>driveway tear-out and replacement</a> — our crew handles demolition and new construction in one project.",
    ],
    localDetails: "We've completed projects near Tinker AFB, throughout the Rose State College area, and in the established neighborhoods along Reno Avenue. Our familiarity with Midwest City's older infrastructure helps us plan efficient replacement projects.",
    soilNote: "Eastern Oklahoma County soil in Midwest City is moderately expansive — less aggressive than central OKC but still requires a minimum 4-inch compacted base. Older lots may have compromised soil from decades of settling.",
    faq: [
      { question: "How much does concrete cost in Midwest City?", answer: "Midwest City pricing follows OKC metro rates: $6–$10/sq ft for driveways and slabs. Replacement work that includes tear-out of existing concrete adds $1–$2/sq ft." },
      { question: "Do you do concrete replacement in older neighborhoods?", answer: "Yes — a large portion of our Midwest City work is tear-out and replacement of aging driveways, patios, and sidewalks in established neighborhoods." },
      { question: "Do you serve areas near Tinker AFB?", answer: "Yes — we serve all of Midwest City including zip codes 73110 and 73130, covering neighborhoods near Tinker and throughout the city." },
    ],
  },
  "del-city": {
    city: "Del City",
    county: "Oklahoma County",
    zips: "73115, 73135",
    intro: [
      "Del City is a tightly-knit community in southeastern Oklahoma County, bordered by Midwest City and south Oklahoma City. Like its neighbors, Del City has an established housing stock that frequently needs concrete replacement — driveways, sidewalks, and patios that were originally poured decades ago.",
      "Redwood Construction serves Del City homeowners with affordable, quality concrete work. The soil conditions in this part of Oklahoma County are moderate clay — manageable with proper base prep but still requiring attention to drainage and reinforcement. Our crew treats every Del City project with the same standards we apply across the entire OKC metro.",
    ],
    servicesIntro: [
      "<strong>Concrete services in Del City, Oklahoma</strong> include <a href='/concrete-driveways'>driveway replacement and new construction</a>, <a href='/concrete-slabs'>patio slabs</a>, <a href='/concrete-sidewalks'>sidewalk repair</a>, and <a href='/retaining-walls'>retaining walls</a>. Del City homeowners looking to upgrade their outdoor living space can combine a <a href='/concrete-patio-okc'>new patio</a> with a <a href='/stamped-concrete'>stamped finish</a> for a premium look at a fraction of natural stone costs.",
    ],
    localDetails: "Our Del City work includes driveway replacements in the neighborhoods near SE 44th Street, patio installations in the areas along Sunnylane Road, and sidewalk repairs for homeowners responding to city notices.",
    soilNote: "Del City's southeastern Oklahoma County soil is moderately expansive. We specify a minimum 4-inch aggregate base with rebar reinforcement on all flatwork — adequate for the local conditions when properly compacted.",
    faq: [
      { question: "How much does concrete cost in Del City?", answer: "Del City concrete follows OKC metro pricing: $6–$10/sq ft for driveways and slabs, $15–$22 for stamped work. Tear-out of old concrete adds $1–$2/sq ft." },
      { question: "Do you serve all of Del City?", answer: "Yes — we cover all Del City zip codes including 73115 and 73135, with the same crew and pricing as our OKC metro work." },
      { question: "Can you help with city-required sidewalk repairs?", answer: "Yes — we handle permitted sidewalk replacements in Del City, including coordination with city requirements and ADA-compliant installations." },
    ],
  },
};

export default function CityPage({ slug }: { slug: string }) {
  const data = cityData[slug] || cityData["oklahoma-city"];
  return (
    <CityPageTemplate
      city={data.city}
      county={data.county}
      description={`<a href="/concrete-driveways">Driveways</a>, <a href="/concrete-slabs">slabs</a>, <a href="/concrete-foundations">foundations</a>, and <a href="/stamped-concrete">stamped concrete</a> in <strong>${data.city}, Oklahoma</strong>. Redwood Construction LLC — locally owned <strong>concrete company in OKC</strong>. <a href="tel:4052470027">(405) 247-0027</a>.`}
      localContent={data.intro}
      servicesContent={[
        ...data.servicesIntro,
        data.localDetails,
        `<strong>Soil conditions in ${data.city}:</strong> ${data.soilNote}`,
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
      faq={data.faq}
    />
  );
}
