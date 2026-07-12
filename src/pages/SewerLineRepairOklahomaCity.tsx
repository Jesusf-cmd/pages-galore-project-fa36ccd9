import { useEffect } from "react";
import ServicePage from "@/components/ServicePageTemplate";

const PAGE_URL = "https://fdzconstruction.com/sewer-line-repair-oklahoma-city";
const AREAS_SERVED = ["Oklahoma City", "Edmond", "Norman", "Moore", "Yukon", "Mustang", "Midwest City", "Del City", "Stillwater"];

function useServiceSchema() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "sewer-line-service-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Sewer Line Repair and Installation",
      name: "Sewer Line Repair & Installation Oklahoma City",
      description:
        "Sewer line repair, replacement, and new installation across the Oklahoma City metro, including excavation and concrete restoration by the same crew.",
      url: PAGE_URL,
      provider: { "@id": "https://fdzconstruction.com/#organization" },
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
      cityBlockIntro="FDZ Construction LLC provides sewer line repair and installation throughout Oklahoma City and the surrounding metro. We serve <a href='/oklahoma-city-concrete' class='text-orange no-underline'>Oklahoma City</a>, <a href='/edmond-concrete' class='text-orange no-underline'>Edmond</a>, <a href='/norman-ok-concrete' class='text-orange no-underline'>Norman</a>, <a href='/moore-oklahoma-concrete' class='text-orange no-underline'>Moore</a>, <a href='/yukon-oklahoma-concrete' class='text-orange no-underline'>Yukon</a>, <a href='/mustang-oklahoma-concrete' class='text-orange no-underline'>Mustang</a>, <a href='/midwest-city-oklahoma-concrete' class='text-orange no-underline'>Midwest City</a>, and <a href='/del-city-oklahoma-concrete' class='text-orange no-underline'>Del City</a> — same crew, same standards, same free estimate process on every job across the metro. We've also completed concrete and sewer line projects in <a href='/stillwater-oklahoma-concrete' class='text-orange no-underline'>Stillwater</a>, about 65–75 miles from our south OKC shop, available by scheduled appointment."
      metaTitle="Sewer Line Repair & Installation Oklahoma City | FDZ Construction LLC"
      metaDescription="Sewer line repair, replacement & installation in OKC. One crew handles excavation and concrete restoration — no second contractor. (405) 458-4805."
      eyebrow="OKC Metro · Sewer Line Repair & Installation · Licensed & Insured"
      title="Sewer Line Repair & Installation in"
      titleAccent="Oklahoma City, OK."
      description="Sewer line repair almost always means digging through a driveway, sidewalk, or slab — then someone has to pour it back. Most plumbers subcontract that part or leave you to find a second contractor. FDZ Construction does the excavation and the concrete restoration with the same crew, so nothing gets left half-finished."
      introText="FDZ Construction LLC handles sewer line repair, replacement, and new-line installation for homeowners across the Oklahoma City metro — plus new construction and additions that need a fresh line run. Because we're a concrete contractor first, we do the digging and the driveway, sidewalk, or slab restoration ourselves once the pipe work is done. No second phone call, no second contractor, no mismatched patch where the old and new concrete meet."
      localExpertiseNote="Oklahoma City sits on Permian-age clay and shale that expands when wet and shrinks in drought — the same ground movement that cracks driveways also shifts and stresses buried sewer pipe over time. It's a major reason lines that were fine for years suddenly start backing up or sagging."
      subServices={{
        sectionEyebrow: "Service Types",
        sectionTitle: "Sewer Line Repair & Installation Methods We Offer",
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
              "This is where our concrete background matters most — the trench almost always runs under a driveway, sidewalk, or slab, and we restore it ourselves instead of handing you off to a second contractor",
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
          title: "Signs You Need",
          titleAccent: "Sewer Line Repair.",
          content: [
            "Not sure if what you're dealing with is actually a sewer line problem? These are the signs we hear about most from Oklahoma City homeowners right before they call us:",
            "▸ Slow or backed-up drains in more than one fixture<br/>▸ Sewage odor near the yard or inside the house<br/>▸ Gurgling sounds from toilets or drains<br/>▸ Soggy or unusually green patches of lawn, even without rain<br/>▸ Multiple fixtures backing up at the same time<br/>▸ Standing water near the sewer cleanout",
          ],
          infoBlock:
            "If any of these sound familiar, don't wait for it to get worse. Call <a href='tel:4054584805'>(405) 458-4805</a> and we'll get a camera inspection scheduled to find out exactly what's going on.",
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
      processIntro="Every sewer line job follows the same process — because guessing at what's wrong underground is how homeowners end up paying for the wrong fix."
      processSteps={[
        { title: "Camera inspection", description: "We run a camera through the line first. Guessing at what's wrong underground leads to the wrong fix — we look before we recommend anything." },
        { title: "Diagnosis & quote", description: "Based on what the camera shows, we tell you plainly whether this is a spot repair, a full repair, or a replacement — and give you a written quote before any digging starts." },
        { title: "Repair or replacement", description: "We excavate and complete the pipe work using the method that matches what the inspection actually found — trenchless, traditional excavation, spot repair, or full replacement." },
        { title: "Concrete & surface restoration", description: "Same crew, same job — we restore the driveway, sidewalk, or slab that was disturbed, instead of leaving you to find a second contractor for the concrete." },
        { title: "Final walkthrough", description: "We walk the finished work with you before we leave — the pipe repair and the concrete restoration, done and inspected together." },
      ]}
      whyChooseUs={[
        { icon: "🚧", title: "One Crew, Start to Finish", description: "Sewer line repair almost always means digging through a driveway, sidewalk, or slab. Most plumbers subcontract that excavation and concrete work, or leave you to hire a second contractor. We do both ourselves — no coordinating two companies, no second scheduling delay, no mismatched patch job after the plumber leaves." },
        { icon: "🛡️", title: "Licensed, Bonded & Insured in Oklahoma", description: "Fully licensed Oklahoma contractor with liability and workers comp insurance on every project." },
        { icon: "📅", title: "8+ Years Serving the OKC Metro", description: "Years of hands-on concrete and excavation work across Oklahoma City's clay soil conditions." },
        { icon: "🔒", title: "2-Year Workmanship Warranty", description: "Every sewer line repair or installation we complete is backed by the same 2-year workmanship warranty as the rest of our work." },
        { icon: "📋", title: "Free On-Site Estimates", description: "No phone quotes for sewer work. We inspect the line and the site before giving you a written estimate." },
        { icon: "📍", title: "Based in South OKC", description: "We're at 7004 S Indiana Ave — OKC gets our fastest response of anywhere we serve." },
      ]}
      trustLine="FDZ Construction LLC handles your sewer line repair and the concrete restoration it requires with one crew, start to finish — licensed, bonded, and insured in Oklahoma, with 8+ years serving the OKC metro and a 2-year workmanship warranty on every job."
      faq={[
        { question: "How do I know if I need sewer repair or full replacement?", answer: "A camera inspection tells us for certain. Isolated damage on an otherwise sound line is usually a spot or trenchless repair. Lines that are old, degraded along their length, or made of clay or cast iron nearing the end of their service life are usually better replaced than repaired — we'll tell you honestly which one applies to your line." },
        { question: "Does sewer line repair mean my driveway or yard gets torn up?", answer: "It depends on the method. Trenchless pipe bursting avoids a long open trench and only needs two access pits. Traditional excavation repair does require digging down to the damaged section, which often does mean cutting into a driveway, sidewalk, or slab — which is exactly why we handle the concrete restoration ourselves instead of leaving that to a second contractor." },
        { question: "How long does sewer line replacement take?", answer: "It depends on the length of the line, the method used, and how much concrete restoration is involved. We give you a specific timeline as part of your written quote after the camera inspection, not before." },
        { question: "Do you handle the concrete repair after the sewer work?", answer: "Yes — that's actually our background. We're a concrete contractor that also does sewer line excavation, repair, and installation, so the driveway, sidewalk, or slab restoration is done by the same crew that did the digging, not handed off to someone else." },
        { question: "Do you install sewer lines for new construction or additions?", answer: "Yes — we run new sewer lines for new construction and additions in addition to repairing and replacing existing lines." },
        { question: "What causes sewer line damage in Oklahoma City specifically?", answer: "The most common causes we see are tree root intrusion, aging or deteriorated pipe material (especially older clay or cast iron), and ground movement from OKC's expansive clay and shale — which can shift pipe alignment and cause sections of the line to sag over time." },
      ]}
    />
  );
}
