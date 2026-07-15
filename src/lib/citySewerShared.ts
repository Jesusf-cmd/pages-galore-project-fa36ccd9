/** Shared sewer section content for metro + Stillwater city pages. */

export const SEWER_METHODS = [
  { title: "Trenchless Pipe Bursting", blurb: "Pulls new pipe through the old pipe's path — minimal digging, ideal when the line's path is sound but the pipe itself is worn out." },
  { title: "Traditional Excavation Repair", blurb: "Digs down to expose and replace a damaged section — often the right call when trenchless access isn't practical." },
  { title: "Spot Repair", blurb: "Fixes one isolated damaged section without replacing the whole line — the most affordable option when it's genuinely all that's needed." },
  { title: "Full Replacement & New Installation", blurb: "For lines too old or damaged to repair, and for new construction that needs a line run for the first time — modern installs use PVC, rated for 50+ years." },
] as const;

export const SEWER_SIGNS = [
  "Slow or backed-up drains in more than one fixture",
  "Sewage odor near the yard or inside the house",
  "Gurgling sounds from toilets or drains",
  "Soggy or unusually green patches of lawn, even without rain",
  "Multiple fixtures backing up at the same time",
  "Standing water near the sewer cleanout",
];

export function metroSewerIntro(city: string): string {
  return `FDZ Construction handles sewer line repair, replacement, and new installation for ${city} homeowners — using the same one-crew approach we use across the OKC metro: we handle the excavation and the concrete restoration ourselves, so you're not coordinating a plumber and a separate concrete contractor.`;
}

export function metroWhyFdz(city: string): { title: string; desc: string }[] {
  return [
    { title: "One Crew for Excavation & Concrete", desc: `Sewer line work means digging — and usually means restoring a driveway, sidewalk, or slab afterward. We do both ourselves on ${city} jobs, not two separate companies.` },
    { title: "Based in South OKC", desc: "We're at 7004 S Indiana Ave. David Fernandez leads FDZ Construction LLC — owner-operated, not a national franchise or call center." },
    { title: "Licensed, Bonded & Insured in Oklahoma", desc: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
    { title: "2-Year Workmanship Warranty", desc: "Every project — concrete or sewer — is backed by the same 2-year workmanship warranty, including concrete restoration after sewer work." },
  ];
}

export function metroProjectsNote(city: string): string {
  return `We've completed concrete and sewer line projects across the OKC metro, including work in ${city}. We don't have ${city}-specific project photos or customer reviews published yet — this section will be updated with real ${city} project photos and reviews as they become available.`;
}

export function metroSewerFaqs(city: string): { question: string; answer: string }[] {
  return [
    {
      question: `Do you do sewer line repair in ${city}, or just concrete?`,
      answer: `Both. We're a concrete contractor that also handles sewer line repair, replacement, and installation — including the driveway or slab restoration sewer work usually requires. We serve ${city} with the same crew and standards as the rest of the OKC metro.`,
    },
    {
      question: `How much does sewer line repair cost in ${city}?`,
      answer: `In the OKC metro, spot repairs typically run $1,000–$3,500, traditional excavation repairs $1,500–$7,000, trenchless pipe bursting $4,000–$12,000, and full line replacements $8,000–$15,000 depending on length, depth, and access. A camera inspection ($200–$500) tells us which range applies. FDZ quotes include concrete restoration when a driveway or slab is disturbed.`,
    },
    {
      question: `Does ${city}'s soil affect sewer lines?`,
      answer: `Yes — the same expansive clay and seasonal moisture shifts that stress driveways and foundations also move buried sewer pipe. Proper bedding and backfill during a repair matter as much as the pipe itself, which is why we prep sewer trenches the same way we'd prep a sub-base for concrete.`,
    },
    {
      question: `How do I get a sewer or concrete estimate in ${city}?`,
      answer: `Call (405) 458-4805 or request a free estimate through our site. We'll schedule an on-site visit, run a camera inspection if it's a sewer issue, and give you a written quote before any digging starts.`,
    },
  ];
}

export function buildSewerSection(city: string, localNote: string) {
  return {
    intro: metroSewerIntro(city),
    methods: [...SEWER_METHODS],
    signs: [...SEWER_SIGNS],
    localNote,
    linkTo: "/sewer-line-repair-oklahoma-city",
  };
}
