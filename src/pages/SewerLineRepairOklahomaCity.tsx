import { useEffect } from "react";
import ServicePage from "@/components/ServicePageTemplate";
import { canonicalUrl } from "@/lib/siteUrl";

const PAGE_URL = canonicalUrl("/sewer-line-repair-oklahoma-city");
const AREAS_SERVED = ["Oklahoma City", "Edmond", "Norman", "Moore", "Yukon", "Mustang", "Midwest City", "Del City", "Stillwater"];

function useServiceSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "sewer-line-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Residential Sewer Line Repair and Replacement",
      name: "Residential Sewer Line Repair Oklahoma City",
      description:
        "Residential sewer line repair and replacement in Oklahoma City, including camera inspection, excavation, and concrete restoration by the same crew.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#business" },
      areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name, addressRegion: "OK" })),
    });
    document.getElementById("sewer-line-service-schema")?.remove();
    document.head.appendChild(script);
    return () => { document.getElementById("sewer-line-service-schema")?.remove(); };
  }, []);
}

export default function SewerLineRepairOklahomaCity() {
  useServiceSchema();

  return (
    <ServicePage
      enriched
      currentServiceSlug="sewer-line-repair-oklahoma-city"
      cityBlockIntro="FDZ Construction LLC handles residential sewer line repair and replacement throughout Oklahoma City and the surrounding metro. We serve <a href='/oklahoma-city-concrete' class='text-orange no-underline'>Oklahoma City</a>, <a href='/edmond-concrete' class='text-orange no-underline'>Edmond</a>, <a href='/norman-ok-concrete' class='text-orange no-underline'>Norman</a>, <a href='/moore-oklahoma-concrete' class='text-orange no-underline'>Moore</a>, <a href='/yukon-oklahoma-concrete' class='text-orange no-underline'>Yukon</a>, <a href='/mustang-oklahoma-concrete' class='text-orange no-underline'>Mustang</a>, <a href='/midwest-city-oklahoma-concrete' class='text-orange no-underline'>Midwest City</a>, and <a href='/del-city-oklahoma-concrete' class='text-orange no-underline'>Del City</a>. We've also completed concrete and sewer line projects in <a href='/stillwater-oklahoma-concrete' class='text-orange no-underline'>Stillwater</a>, about 65–75 miles from Oklahoma City, by scheduled appointment."
      metaTitle="Residential Sewer Line Repair Oklahoma City | FDZ Construction LLC"
      metaDescription="Residential sewer line repair in OKC. Camera inspection $200–$500. Job prices are estimates; the written quote sets the scope and price. Call (405) 458-4805."
      showEeatBlock={false}
      showTrustBar={false}
      internalLinks={{ services: true, cities: true, blogs: true }}
      eyebrow="Oklahoma City · Residential Sewer Line Repair"
      badge="self-performed"
      title="Residential Sewer Line Repair in"
      titleAccent="Oklahoma City."
      description="Recurring backups, several slow fixtures, sewer odor, roots in the line, or a pipe you already know is damaged — those are the reasons Oklahoma City homeowners call us. We look at the line first, then tell you whether a repair or a replacement is the honest next step. A clog in one drain does not automatically mean excavation."
      emergencyCallout="Sewage backing up into the house? Call <a href='tel:4054584805' class='text-white font-bold underline'>(405) 458-4805</a>."
      modelNote="First step: call <a href='tel:4054584805'>(405) 458-4805</a> or request an estimate. Send photos of the backup, a camera video if you already have one, and where the line sits relative to the driveway or slab. Camera inspection is $200–$500. After that, you get a written quote before any digging. FDZ does the sewer pipe work, the excavation, and the concrete restoration."
      ctaLabel="Request a Sewer Estimate →"
      finalCta={{
        heading: "Need the Sewer Line Looked At?",
        headingAccent: "Request a Written Quote.",
        description: "Call (405) 458-4805 or send photos and a camera video if you have one. Camera inspection is $200–$500. The written quote sets the job scope and price before digging starts.",
        buttonLabel: "Request a Sewer Estimate →",
      }}
      introText="<strong>FDZ Construction LLC repairs and replaces residential sewer lines in Oklahoma City</strong> — including the pipe work, the excavation, and the driveway, sidewalk, or slab restoration when the trench runs through it. One crew handles the job, so you are not left with a hole and a second contractor to patch the concrete."
      localExpertiseNote="Oklahoma City sits on Permian-age clay and shale that expands when wet and shrinks in drought — the same ground movement that cracks driveways also shifts and stresses buried sewer pipe. That is a common reason a line that was fine for years starts backing up or sagging."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Sewer Line Repair & Replacement Options",
        items: [
          {
            title: "Trenchless Pipe Bursting",
            bullets: [
              "A new pipe is pulled through the path of the old one, breaking the old pipe outward as it goes — no long open trench across your yard or driveway",
              "Right call when the line's path is sound but the pipe itself is cracked, root-damaged, or worn out along most of its length",
              "Minimizes landscaping and hardscape disruption compared to a full open-trench dig",
              "Still requires two access pits — we restore both in concrete or matching surface once the pipe work is done",
            ],
          },
          {
            title: "Traditional Excavation Repair",
            bullets: [
              "The damaged section of pipe is exposed by digging down to it, removed, and replaced with new pipe",
              "Right call for isolated damage that's deep, oddly located, or not a good fit for trenchless access",
              "This is where our concrete background matters most — the trench often runs under a driveway, sidewalk, or slab, and we restore it ourselves instead of handing you off to a second contractor",
            ],
          },
          {
            title: "Spot Repair",
            bullets: [
              "Fixes one isolated damaged section of the line without touching the rest of the pipe",
              "Right call when a camera inspection shows the rest of the line is in good condition and only one section failed",
              "The most affordable option when it's genuinely all that's needed — we won't sell you a full replacement if a spot repair solves it",
            ],
          },
          {
            title: "Full Sewer Line Replacement & New Installation",
            bullets: [
              "For lines too old, too damaged, or made of materials no longer worth repairing — and for new construction or additions that need a line run for the first time",
              "Modern installs use PVC, the current standard, commonly rated for 50+ years of service life with proper installation and bedding",
              "Older clay or cast iron lines are usually the ones that end up here rather than repaired — they've typically degraded past the point where a repair holds",
              "Includes full concrete restoration of any driveway, sidewalk, or slab disturbed during the install",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Warning Signs",
          title: "When a Homeowner Should",
          titleAccent: "Call About the Sewer Line.",
          content: [
            "A single slow sink is often a drain issue, not a sewer line. These are the situations that usually mean the main line, not just one fixture:",
            "▸ Recurring backups after a plumber already snaked a drain<br/>▸ Several fixtures slow or backing up at the same time<br/>▸ Sewage odor near the yard, cleanout, or inside the house<br/>▸ Gurgling from toilets or drains when another fixture is used<br/>▸ Soggy or unusually green patches of lawn, even without rain<br/>▸ A known damaged, collapsed, or root-filled line",
          ],
          infoBlock:
            "If that sounds like your house, call <a href='tel:4054584805'>(405) 458-4805</a> or <a href='/#estimate'>request an estimate</a>. A camera look tells us whether this is a spot repair, a replacement, or not a sewer job.",
        },
        {
          eyebrow: "Oklahoma City Pricing",
          title: "How Much Does Sewer Line Repair",
          titleAccent: "Cost in OKC?",
          content: [
            "Sewer line pricing in the Oklahoma City metro depends on the repair method, how much of the line is affected, pipe depth, and whether the trench runs under a driveway or slab. Camera inspection is $200–$500. The job prices below are estimates for typical residential work — not official quotes. The written quote after the camera inspection sets the actual scope and price.",
            "FDZ quotes include concrete restoration when a driveway, sidewalk, or slab is disturbed — most plumbing-only bids quote pipe work and leave the concrete to someone else. That difference matters when you're comparing estimates.",
          ],
          table: {
            headers: ["Service", "Estimated OKC range"],
            rows: [
              ["Camera inspection (fee)", "$200 – $500"],
              ["Spot repair (isolated section)", "$1,000 – $3,500"],
              ["Traditional excavation repair", "$1,500 – $7,000"],
              ["Trenchless pipe bursting", "$4,000 – $12,000"],
              ["Full sewer line replacement", "$8,000 – $15,000"],
              ["New sewer line installation", "$2,500 – $8,000+"],
            ],
          },
          infoBlock:
            "Job prices on this page are estimates. Line length, depth, access, permits, and how much concrete restoration is involved all move the final number. Your written quote is what we work from — it covers the pipe work and the concrete restoration together.",
        },
        {
          eyebrow: "Local Soil Conditions",
          title: "Why Oklahoma City Soil Matters",
          titleAccent: "for Sewer Lines.",
          alt: true,
          content: [
            "The OKC metro sits on Permian-age clay and shale that expands when wet and shrinks in drought — sometimes moving several inches across a single season. That's a well-known problem for driveways and foundations, but it affects buried sewer pipe just as much. As the clay around a line swells and contracts, it can shift pipe out of alignment, create low spots where the line sags (bellying), and put stress on joints and connections until they leak or separate.",
            "That's also why bedding and backfill matter as much as the pipe itself during a repair. A line dropped back into a trench and covered with whatever came out of the ground — without proper bedding material and compaction — is set up to move again with the next wet-dry cycle. We bed and backfill every repair the same way we'd prep a sub-base for a driveway: correctly, so it doesn't have to be redone.",
            "Beyond soil movement, the most common causes of sewer line damage we see in Oklahoma City are tree root intrusion (roots seeking moisture find their way into joints and small cracks), aging or deteriorated pipe material — especially older clay or cast iron lines nearing the end of their service life — and pipe bellying or settling from the same clay movement described above.",
          ],
        },
        {
          eyebrow: "Warranty",
          title: "2-Year Workmanship",
          titleAccent: "Warranty.",
          id: "warranty",
          alt: true,
          content: [
            "Sewer work we complete is covered by a two-year workmanship warranty, including concrete restoration we pour after excavation. The warranty terms are in your contract.",
          ],
        },
      ]}
      projectGallery={{
        eyebrow: "Recent Sewer Line Work",
        title: "Real Sewer Line Repair",
        titleAccent: "in Oklahoma City.",
        intro: "A sewer line excavation alongside a home foundation in Oklahoma City — new PVC pipe run through the trench ahead of backfill and concrete restoration.",
        photos: [
          { src: "/images/projects/sewer-line-excavation-oklahoma-city.webp", alt: "New PVC sewer line trenched alongside a home foundation during a sewer line repair excavation in Oklahoma City" },
        ],
      }}
      videoGallery={{
        eyebrow: "Watch Our Work",
        title: "Sewer Line Repair",
        titleAccent: "On the Job in OKC.",
        intro: "Real clips from a sewer line repair job in Oklahoma City — videos are muted by default, tap to play with sound.",
        videos: [
          { src: "/videos/sewer-line-repair-1-web.mp4", poster: "/images/poster-sewer-line-repair-1.webp", alt: "New PVC pipe fitting installed during a sewer line repair excavation in Oklahoma City" },
          { src: "/videos/sewer-line-repair-2-web.mp4", poster: "/images/poster-sewer-line-repair-2.webp", alt: "Sewer line trench dug through Oklahoma City clay soil during a repair job" },
        ],
      }}
      processEyebrow="Our Process"
      processTitle="From Camera Inspection to"
      processTitleAccent="Final Walkthrough."
      processIntro="Every sewer line job starts with a look at the line — because guessing at what's wrong underground is how homeowners end up paying for the wrong fix."
      processSteps={[
        { title: "Camera inspection", description: "We run a camera through the line first. Camera inspection is $200–$500. That look tells us whether this is a repair, a replacement, or not a sewer line problem at all." },
        { title: "Diagnosis & written quote", description: "Based on what the camera shows, we tell you whether this is a spot repair, a full repair, or a replacement — and give you a written quote before any digging starts. The written quote sets the actual scope and price." },
        { title: "Repair or replacement", description: "We complete the pipe work using the method that matches what the inspection found — trenchless, traditional excavation, spot repair, or full replacement." },
        { title: "Concrete & surface restoration", description: "Same crew, same job — we restore the driveway, sidewalk, or slab that was disturbed, instead of leaving you to find a second contractor for the concrete." },
        { title: "Final walkthrough", description: "We walk the finished work with you before we leave — the pipe repair and the concrete restoration, done together." },
      ]}
      whyChooseUs={[
        { icon: "🚧", title: "One Crew for Pipe Work and Concrete", description: "Sewer line repair often means digging through a driveway, sidewalk, or slab. We excavate, complete the pipe work, and restore the concrete ourselves — no second phone call for the patch." },
        { icon: "📹", title: "Camera First, Then a Written Quote", description: "We do not quote a repair from a phone description. Camera inspection is $200–$500 and decides the method. You get a written quote before digging starts — that quote sets the job price." },
        { icon: "🧱", title: "Driveway and Slab Restoration Included", description: "When the trench cuts through hardscape, FDZ quotes include the concrete restoration. That is the part most plumbing-only bids leave out." },
        { icon: "📍", title: "Based in Oklahoma City", description: "FDZ Construction LLC is based in Oklahoma City and serves the OKC metro, plus Stillwater by scheduled appointment." },
      ]}
      trustLine="FDZ Construction LLC is based in Oklahoma City. We handle residential sewer line repair and the concrete restoration the job requires with one crew."
      faq={[
        { question: "How much does sewer line repair cost in Oklahoma City?", answer: "Camera inspection is $200–$500. Estimated job prices in the OKC metro are spot repair $1,000–$3,500, traditional excavation repair $1,500–$7,000, trenchless pipe bursting $4,000–$12,000, and full line replacement $8,000–$15,000, depending on length, depth, and access. Those job prices are estimates, not official quotes. The written quote after the camera inspection sets the actual scope and price. FDZ quotes include concrete restoration when a driveway or slab is disturbed." },
        { question: "Is the camera inspection free?", answer: "No. Camera inspection is $200–$500. That look is how we decide repair versus replacement. A written quote follows the inspection and sets the job price." },
        { question: "What should I send when I contact FDZ?", answer: "Call (405) 458-4805 or use the estimate form. Send photos of the backup, a camera video if you already have one, and where the line sits relative to the driveway, sidewalk, or slab. We will tell you the next step from there." },
        { question: "Does every clog mean you have to dig up my yard?", answer: "No. A clog in one fixture is often a drain issue, not a sewer line. Recurring backups in several fixtures, sewer odor, roots, or a known damaged line are the cases we evaluate. A camera look tells us whether excavation is actually needed." },
        { question: "How do I know if I need sewer repair or full replacement?", answer: "A camera inspection tells us. Isolated damage on an otherwise sound line is usually a spot or trenchless repair. Lines that are old, degraded along their length, or made of clay or cast iron nearing the end of their service life are usually better replaced than repaired — we'll tell you which one applies to your line." },
        { question: "Does sewer line repair mean my driveway or yard gets torn up?", answer: "It depends on the method. Trenchless pipe bursting avoids a long open trench and only needs two access pits. Traditional excavation repair does require digging down to the damaged section, which often does mean cutting into a driveway, sidewalk, or slab — which is exactly why we handle the concrete restoration ourselves instead of leaving that to a second contractor." },
        { question: "How long does sewer line replacement take?", answer: "It depends on the length of the line, the method used, and how much concrete restoration is involved. We give you a specific timeline as part of your written quote after the camera inspection, not before." },
        { question: "Do you handle the concrete repair after the sewer work?", answer: "Yes — that's our background. We're a concrete contractor that also does sewer line excavation, repair, and installation, so the driveway, sidewalk, or slab restoration is done by the same crew that did the digging." },
        { question: "Do you install sewer lines for new construction or additions?", answer: "Yes — we run new sewer lines for new construction and additions in addition to repairing and replacing existing lines." },
        { question: "What causes sewer line damage in Oklahoma City specifically?", answer: "The most common causes we see are tree root intrusion, aging or deteriorated pipe material (especially older clay or cast iron), and ground movement from OKC's expansive clay and shale — which can shift pipe alignment and cause sections of the line to sag over time." },
        { question: "Does Oklahoma City require a permit for sewer line work?", answer: "Permit requirements depend on the City of Oklahoma City and the scope of the work. We'll tell you what applies after we see the job." },
        { question: "Does homeowners insurance cover sewer line repair?", answer: "Standard homeowners insurance policies usually do not cover sewer line repair or replacement — it's typically treated as a maintenance issue, not a sudden covered loss. Some policies offer optional sewer backup coverage as a rider, and some utility companies sell service line protection plans. We're happy to provide documentation of our work if you file a claim that might apply, but most homeowners should plan on paying out of pocket unless they have a specific rider." },
        { question: "Do you warranty sewer line work?", answer: "Yes. Sewer work we complete is covered by a two-year workmanship warranty, including concrete restoration we pour after excavation. The warranty terms are in your contract." },
      ]}
    />
  );
}
