import { mustangConcrete, mustangOpeningHtml } from "../src/content/mustangConcrete";
import { yukonConcrete, yukonEstimateHtml } from "../src/content/yukonConcrete";
import {
  TRUST_LINE,
  faqSection,
  linkList,
  metroCitySewerBlock,
  processSection,
  trustParagraph,
} from "./prerender-helpers";
import { renderPoolDeckHtml, renderRepairServiceHtml, renderServiceInCityHtml, renderServicePageHtml } from "./service-page-html";
import { routes } from "./prerender-routes";
import {
  BLOG_POSTS,
  renderBlogIndexHtml,
  renderBlogPostHtml,
} from "../src/content/blog";
import { repairPages } from "../src/content/repairPages";
import { adaRampsContent } from "../src/content/pages/ada-ramps";
import { commercialCurbGutterContent } from "../src/content/pages/commercial-curb-gutter";
import { parkingLotRepairContent } from "../src/content/pages/parking-lot-repair";
import { parkingLotConstructionContent } from "../src/content/pages/parking-lot-construction";
import { loadingDockRepairContent } from "../src/content/pages/loading-dock-repair";
import { dockLevelerPitsContent } from "../src/content/pages/dock-leveler-pits";
import { warehouseSlabContent } from "../src/content/pages/warehouse-slab";
import { industrialRepairContent } from "../src/content/pages/industrial-repair";
import { equipmentPadsContent } from "../src/content/pages/equipment-pads";
import { truckCourtsContent } from "../src/content/pages/truck-courts";
import { loadingDockConstructionContent } from "../src/content/pages/loading-dock-construction";
import { loadingDockReplacementContent } from "../src/content/pages/loading-dock-replacement";
import { craneFoundationContent } from "../src/content/pages/crane-foundation";
import { soilStabilizationContent } from "../src/content/pages/soil-stabilization";
import { retailRestaurantContent } from "../src/content/pages/retail-restaurant";
import { dumpsterPadsContent } from "../src/content/pages/dumpster-pads";
import { polishedConcreteContent } from "../src/content/pages/polished-concrete";
import { epoxyFloorCoatingsContent } from "../src/content/pages/epoxy-floor-coatings";
import { tiltWallConcreteContent } from "../src/content/pages/tilt-wall";
import { concreteMaintenanceContent } from "../src/content/pages/concrete-maintenance";
import { poolDeckContent } from "../src/content/pages/pool-deck";
import { serviceInCityPages } from "../src/content/serviceInCityPages";
import { WICHITA_PAGES } from "../src/content/wichitaPages";
import { renderEstimateFormHtml } from "../src/lib/estimateFormHtml";
import { renderWichitaPageHtml } from "./wichita-html";

function prerenderH1(path: string): string {
  const route = routes.find((entry) => entry.path === path);
  if (!route) throw new Error(`Missing prerender route for ${path}`);
  return route.h1;
}

const SERVICE_LINKS = [
  { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
  { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
  { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
  { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
  { href: "/pool-deck-oklahoma-city", label: "Pool Deck Concrete" },
  { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
  { href: "/commercial-concrete-oklahoma-city", label: "Commercial Concrete" },
  { href: "/parking-lots-oklahoma-city", label: "Parking Lots" },
];

const CITY_LINKS = [
  { href: "/oklahoma-city-concrete", label: "Oklahoma City" },
  { href: "/edmond-concrete", label: "Edmond" },
  { href: "/norman-ok-concrete", label: "Norman" },
  { href: "/moore-oklahoma-concrete", label: "Moore" },
  { href: "/yukon-oklahoma-concrete", label: "Yukon" },
  { href: "/mustang-oklahoma-concrete", label: "Mustang" },
  { href: "/midwest-city-oklahoma-concrete", label: "Midwest City" },
  { href: "/del-city-oklahoma-concrete", label: "Del City" },
  { href: "/stillwater-oklahoma-concrete", label: "Stillwater" },
];

export const prerenderBodies: Record<string, string> = {
  "/": `
    <h1>One Crew. Concrete &amp; Sewer Line Done Right.</h1>
    <p>FDZ Construction LLC self-performs every concrete and sewer line job in the OKC metro — our own crew, our own equipment, start to finish. Based in Oklahoma City. Licensed, bonded &amp; insured. No subcontractors on concrete or sewer work.</p>
    ${trustParagraph()}
    <h2>Concrete Services</h2>
    ${linkList(SERVICE_LINKS)}
    <h2>Sewer Line Repair &amp; Installation</h2>
    <p><a href="/sewer-line-repair-oklahoma-city">Residential sewer line repair in Oklahoma City</a> — repair and replacement, plus driveway, sidewalk, and slab restoration by the same crew that did the digging.</p>
    <h2>Site Work Services</h2>
    <ul>
      <li><a href="/skid-steer-services-oklahoma-city">Skid Steer Services</a> — Land clearing, dirt work, leveling, gravel driveways, and brush hog mowing for lots up to about 2 acres.</li>
      <li><a href="/excavator-services-oklahoma-city">Excavator Services</a> — Heavier land clearing, deep grading, drainage work, and larger commercial pads or driveways.</li>
    </ul>
    <h2>Why Oklahoma City Soil Matters</h2>
    <p>The OKC metro sits on Permian-age clay and shale that expands when wet and shrinks in drought. That movement stresses driveways, foundations, and buried sewer pipe alike — which is why proper sub-base compaction, reinforcement, and drainage grading matter on every job.</p>
    <h2>Service Areas</h2>
    ${linkList(CITY_LINKS)}
    ${renderEstimateFormHtml({ fromPath: "/" })}
    <p><strong>Contact:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
  `,

  "/driveways-oklahoma-city": `
    <h1>Concrete Driveway Installation in Oklahoma City, OK</h1>
    <p>FDZ Construction LLC provides professional concrete driveway installation in Oklahoma City and surrounding areas. We build durable, long-lasting driveways for homeowners, builders, and property owners who need dependable concrete work done right. Every project starts with proper ground preparation and includes reinforcement for Oklahoma clay. Based in Oklahoma City — about 20–25 min from Yukon and 30–40 min from Edmond.</p>
    <h2>Concrete Driveway Services in Oklahoma City</h2>
    <h3>New Driveway Installation</h3>
    <ul>
      <li>Site evaluation, grading, and subgrade preparation</li>
      <li>Reinforcement with rebar or wire mesh based on soil and load conditions</li>
      <li>Pour, broom finish, and control joint placement</li>
      <li>Full cure before vehicle traffic — light at 7 days, full structural at 28 days</li>
    </ul>
    <h3>Driveway Replacement</h3>
    <ul>
      <li>Full removal and disposal of existing concrete</li>
      <li>Base re-evaluation — OKC's expansive clay means we check what's under the old slab, not just the surface</li>
      <li>New reinforced install with corrected drainage if needed</li>
      <li>Most common reason for replacement: inadequate base prep on the original pour</li>
    </ul>
    <h3>Stamped and Decorative Driveways</h3>
    <ul>
      <li>Color hardener and release agent options applied during the pour</li>
      <li>Same structural process as standard driveway — decorative finish applied while concrete is still plastic</li>
      <li>Requires sealing after cure and periodic resealing every 2–3 years in OKC's climate</li>
    </ul>
    <h3>Driveway Extensions</h3>
    <ul>
      <li>Adding width or length to an existing driveway</li>
      <li>Matching existing finish where possible</li>
      <li>Expansion joint between new and existing concrete to allow for independent movement</li>
    </ul>
    <h3>Commercial Driveways and Access Drives</h3>
    <ul>
      <li>Higher PSI mix for heavier vehicle loads</li>
      <li>Thicker slab where truck or equipment traffic is expected</li>
      <li>Coordinate with property manager or GC schedule</li>
    </ul>
    ${processSection("How We Install Concrete Driveways in Oklahoma City", [
      { title: "Sub-base excavation & compaction", description: "We excavate to depth and compact a gravel sub-base. On Oklahoma clay this step matters more than any other — it's where most cracked driveways are lost before concrete is poured." },
      { title: "Forming", description: "Forms are set to grade and slope so the finished driveway sheds water away from your home and garage." },
      { title: "Reinforcement", description: "We place rebar or wire mesh, chosen per the soil and load conditions of your specific driveway." },
      { title: "Pour & broom finish", description: "We place the concrete and finish with a broom texture for traction in Oklahoma rain and ice." },
      { title: "Control joints", description: "Control joints are cut every 8–10 feet to direct cracking to the joints instead of across the slab." },
      { title: "Cure", description: "Light foot traffic in about 3 days, vehicle traffic in about 7 days, and full structural cure at around 28 days." },
    ])}
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all driveway work</li>
      <li>Based in Oklahoma City</li>
      <li>Free on-site estimates, no pressure</li>
      <li>We evaluate your specific site conditions — OKC's expansive clay soil means base prep decisions aren't one-size-fits-all</li>
    </ul>
    <h2>Oklahoma City Soil and Your Driveway</h2>
    <p>Oklahoma's expansive red clay swells and shrinks with moisture, which is why proper sub-base prep — a compacted gravel base — matters far more here than in stable-soil regions. Skipping or shortcutting it is the single most common cause of driveway cracking in the OKC metro.</p>
    <h2>How Much Does a Concrete Driveway Cost in Oklahoma City?</h2>
    <p>Costs vary by square footage, site conditions, finish type, and whether existing concrete needs removal. For metro ranges, see our guide to the <a href="/blog/cost-of-concrete-oklahoma-city-2026">cost of concrete in Oklahoma City for 2026</a>. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
    ${faqSection("Driveway FAQ", [
      { question: "How much does a concrete driveway cost in Oklahoma City?", answer: "Costs vary by square footage, site conditions, finish type, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
      { question: "How long does it take to install a concrete driveway?", answer: "Most residential driveways are poured in 1 day. You can walk on new concrete after 24–48 hours, but should wait 7 days before driving on it." },
      { question: "How long does a concrete driveway last in Oklahoma City?", answer: "A properly installed driveway with adequate base prep and control joints can last 30+ years. OKC's expansive clay soil makes base preparation the biggest variable in longevity." },
      { question: "Do I need a permit to replace my driveway in Oklahoma City?", answer: "Permit requirements vary by city and project scope. We confirm what's required for your specific project before work begins." },
      { question: "Do I need to seal my concrete driveway?", answer: "We recommend sealing your driveway 30 days after installation and every 2–3 years thereafter." },
      { question: "Can you pour concrete in cold or hot weather?", answer: "Yes, with proper cold-weather or hot-weather protocols. We'll advise you on the best timing for your project." },
      { question: "Will my new driveway crack?", answer: "We cut control joints every 8–10 feet to control where cracks occur. Proper preparation and reinforcement minimize random cracking." },
      { question: "Do you handle permits?", answer: "Yes — we confirm what's required for your specific project and pull the necessary permits." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/sewer-line-repair-oklahoma-city">Residential sewer line repair</a> — When a sewer trench cuts through a driveway, we restore that concrete as part of the same job.</li>
      <li><a href="/driveway-repair-oklahoma-city">Driveway repair</a> — Crack repair, leveling, joint sealing, and honest repair-vs-replace evaluation.</li>
      <li><a href="/patios-oklahoma-city">Patios &amp; stamped concrete</a> — Backyard patios, decorative stamped surfaces, and outdoor living slabs.</li>
      <li><a href="/retaining-walls-oklahoma-city">Retaining wall construction</a> — Slope and drainage walls that often accompany driveway grade changes.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; curb and gutter</a> — Walkways, ADA curb ramps, and curb work to complete your property.</li>
      <li>Helpful guides: <a href="/blog/why-concrete-driveways-crack-oklahoma">why concrete driveways crack in Oklahoma</a>, <a href="/blog/how-thick-should-driveway-be-oklahoma">how thick a driveway should be</a>, and the <a href="/blog/best-time-of-year-to-pour-concrete-okc">best time of year to pour concrete in OKC</a>.</li>
      <li>Local driveway pages: <a href="/driveways-edmond">Edmond</a>, <a href="/driveways-norman">Norman</a>, <a href="/driveways-yukon">Yukon</a>, <a href="/driveways-moore">Moore</a>, <a href="/driveways-mustang">Mustang</a>.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/sewer-line-repair-oklahoma-city": `
    <h1>Residential Sewer Line Repair in Oklahoma City.</h1>
    <p>Recurring backups, several slow fixtures, sewer odor, roots in the line, or a pipe you already know is damaged — those are the reasons Oklahoma City homeowners call FDZ. We look at the line first, then tell you whether a repair or a replacement is the honest next step. A clog in one drain does not automatically mean excavation.</p>
    <p>First step: call <a href="tel:4054584805">(405) 458-4805</a> or <a href="/#estimate">request an estimate</a>. Send photos of the backup, a camera video if you already have one, and where the line sits relative to the driveway or slab. Camera inspection is $200–$500. After that, you get a written quote before any digging. FDZ does the sewer pipe work, the excavation, and the concrete restoration.</p>
    <h2>Estimated Sewer Line Costs in Oklahoma City</h2>
    <p>Camera inspection is $200–$500. The job prices below are estimates, not official quotes. The written quote after the camera inspection sets the actual scope and price. FDZ quotes include concrete restoration when a driveway or slab is disturbed.</p>
    <ul>
      <li>Camera inspection (fee): $200 – $500</li>
      <li>Spot repair (estimate): $1,000 – $3,500</li>
      <li>Traditional excavation repair (estimate): $1,500 – $7,000</li>
      <li>Trenchless pipe bursting (estimate): $4,000 – $12,000</li>
      <li>Full sewer line replacement (estimate): $8,000 – $15,000</li>
      <li>New sewer line installation (estimate): $2,500 – $8,000+</li>
    </ul>
    <h2>Sewer Line Repair &amp; Installation Methods We Offer</h2>
    <h3>Trenchless Pipe Bursting</h3>
    <ul>
      <li>A new pipe is pulled through the path of the old one, breaking the old pipe outward as it goes — no long open trench across your yard or driveway</li>
      <li>Right call when the line's path is sound but the pipe itself is cracked, root-damaged, or worn out along most of its length</li>
      <li>Minimizes landscaping and hardscape disruption compared to a full open-trench dig</li>
      <li>Still requires two access pits — we restore both in concrete or matching surface once the pipe work is done</li>
    </ul>
    <h3>Traditional Excavation Repair</h3>
    <ul>
      <li>The damaged section of pipe is exposed by digging down to it, removed, and replaced with new pipe</li>
      <li>Right call for isolated damage that's deep, oddly located, or not a good fit for trenchless access</li>
      <li>This is where our concrete background matters most — the trench almost always runs under a driveway, sidewalk, or slab, and we restore it ourselves instead of handing you off to a second contractor</li>
    </ul>
    <h3>Spot Repair</h3>
    <ul>
      <li>Fixes one isolated damaged section of the line without touching the rest of the pipe</li>
      <li>Right call when a camera inspection shows the rest of the line is in good condition and only one section failed</li>
      <li>The most affordable option when it's genuinely all that's needed — we won't sell you a full replacement if a spot repair solves it</li>
    </ul>
    <h3>Full Sewer Line Replacement &amp; New Installation</h3>
    <ul>
      <li>For lines too old, too damaged, or made of materials no longer worth repairing — and for new construction or additions that need a line run for the first time</li>
      <li>Modern installs use PVC, the current standard, commonly rated for 50+ years of service life with proper installation and bedding</li>
      <li>Older clay or cast iron lines are usually the ones that end up here rather than repaired — they've typically degraded past the point where a repair holds</li>
      <li>Includes full concrete restoration of any driveway, sidewalk, or slab disturbed during the install</li>
    </ul>
    <h2>Signs You Need Sewer Line Repair</h2>
    <ul>
      <li>Slow or backed-up drains in more than one fixture</li>
      <li>Sewage odor near the yard or inside the house</li>
      <li>Gurgling sounds from toilets or drains</li>
      <li>Soggy or unusually green patches of lawn, even without rain</li>
      <li>Multiple fixtures backing up at the same time</li>
      <li>Standing water near the sewer cleanout</li>
    </ul>
    <h2>Why Oklahoma City Soil Matters for Sewer Lines</h2>
    <p>The OKC metro sits on Permian-age clay and shale that expands when wet and shrinks in drought — sometimes moving several inches across a single season. That movement shifts buried sewer pipe out of alignment, creates low spots where the line sags, and stresses joints until they leak or separate. Bedding and backfill matter as much as the pipe itself during a repair — we bed and backfill every repair the same way we'd prep a sub-base for a driveway, so it doesn't have to be redone. Beyond soil movement, the most common causes of sewer line damage we see are tree root intrusion, aging or deteriorated pipe material (especially older clay or cast iron), and pipe bellying or settling from clay movement.</p>
    ${processSection("From Camera Inspection to Final Walkthrough", [
      { title: "Camera inspection", description: "We run a camera through the line first. Camera inspection is $200–$500. That look tells us whether this is a repair, a replacement, or not a sewer line problem at all." },
      { title: "Diagnosis & quote", description: "Based on what the camera shows, we tell you whether this is a spot repair, a full repair, or a replacement — and give you a written quote before any digging starts. The written quote sets the actual scope and price." },
      { title: "Repair or replacement", description: "We excavate and complete the pipe work using the method that matches what the inspection found." },
      { title: "Concrete & surface restoration", description: "Same crew — we restore the driveway, sidewalk, or slab that was disturbed, instead of leaving you to find a second contractor." },
      { title: "Final walkthrough", description: "We walk the finished work with you before we leave — the pipe repair and the concrete restoration, done together." },
    ])}
    <h2>Why Oklahoma City Homeowners Choose FDZ for Sewer Work</h2>
    <p>FDZ Construction LLC is based in Oklahoma City. Owner <strong>David Fernandez</strong> leads the crew. We handle the sewer pipe work, the excavation, and the concrete restoration with one crew.</p>
    <ul>
      <li>FDZ does the sewer pipe work, including trenchless pipe bursting when that method fits the line</li>
      <li>One crew handles excavation and concrete restoration — no coordinating two companies</li>
      <li>Camera inspection is $200–$500, then a written quote before digging. Job prices on this page are estimates; the written quote sets the actual scope and price</li>
      <li>Two-year workmanship warranty on completed sewer work, including concrete restoration we pour. Terms are in your contract</li>
      <li>Based in Oklahoma City</li>
    </ul>
    <h2 id="warranty">2-Year Workmanship Warranty</h2>
    <p>Sewer work we complete is covered by a two-year workmanship warranty, including concrete restoration we pour after excavation. The warranty terms are in your contract.</p>
    ${faqSection("Sewer Line Repair FAQ", [
      { question: "How much does sewer line repair cost in Oklahoma City?", answer: "Camera inspection is $200–$500. Estimated job prices in the OKC metro are spot repair $1,000–$3,500, traditional excavation repair $1,500–$7,000, trenchless pipe bursting $4,000–$12,000, and full line replacement $8,000–$15,000, depending on length, depth, and access. Those job prices are estimates, not official quotes. The written quote after the camera inspection sets the actual scope and price. FDZ quotes include concrete restoration when a driveway or slab is disturbed." },
      { question: "Is the camera inspection free?", answer: "No. Camera inspection is $200–$500. That look is how we decide repair versus replacement. A written quote follows the inspection and sets the job price." },
      { question: "What should I send when I contact FDZ?", answer: "Call (405) 458-4805 or use the estimate form. Send photos of the backup, a camera video if you already have one, and where the line sits relative to the driveway, sidewalk, or slab. We will tell you the next step from there." },
      { question: "Does every clog mean you have to dig up my yard?", answer: "No. A clog in one fixture is often a drain issue, not a sewer line. Recurring backups in several fixtures, sewer odor, roots, or a known damaged line are the cases we evaluate. A camera look tells us whether excavation is actually needed." },
      { question: "How do I know if I need sewer repair or full replacement?", answer: "A camera inspection tells us. Isolated damage on an otherwise sound line is usually a spot or trenchless repair. Lines that are old, degraded along their length, or made of clay or cast iron nearing the end of their service life are usually better replaced than repaired." },
      { question: "Does sewer line repair mean my driveway or yard gets torn up?", answer: "Trenchless pipe bursting avoids a long open trench and only needs two access pits. Traditional excavation repair does require digging down to the damaged section, which often means cutting into a driveway, sidewalk, or slab — which is why we handle the concrete restoration ourselves." },
      { question: "How long does sewer line replacement take?", answer: "It depends on the length of the line, the method used, and how much concrete restoration is involved. We give you a specific timeline as part of your written quote after the camera inspection." },
      { question: "Do you handle the concrete repair after the sewer work?", answer: "Yes — we're a concrete contractor that also does sewer line excavation, repair, and installation, so the concrete restoration is done by the same crew that did the digging." },
      { question: "Do you install sewer lines for new construction or additions?", answer: "Yes — we run new sewer lines for new construction and additions in addition to repairing and replacing existing lines." },
      { question: "What causes sewer line damage in Oklahoma City specifically?", answer: "Tree root intrusion, aging or deteriorated pipe material (especially older clay or cast iron), and ground movement from OKC's expansive clay and shale, which can shift pipe alignment and cause sections of the line to sag." },
      { question: "Does Oklahoma City require a permit for sewer line work?", answer: "Permit requirements depend on the City of Oklahoma City and the scope of the work. We'll tell you what applies after we see the job." },
      { question: "Does homeowners insurance cover sewer line repair?", answer: "Standard homeowners insurance policies usually do not cover sewer line repair or replacement — it's typically treated as maintenance, not a sudden covered loss. Some policies offer optional sewer backup riders. We're happy to provide documentation if you file a claim that might apply." },
      { question: "Do you warranty sewer line work?", answer: "Yes. Sewer work we complete is covered by a two-year workmanship warranty, including concrete restoration we pour after excavation. The warranty terms are in your contract." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/driveways-oklahoma-city">Concrete Driveways</a> — Restoration after excavation frequently means a driveway repair or full replacement.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; Curb and Gutter</a> — Sidewalk restoration after sewer line access.</li>
      <li><a href="/foundations-oklahoma-city">Foundations</a> — Slab restoration when a line runs under a garage or shop floor.</li>
    </ul>
    <p><strong>Call or estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="/#estimate">Request a sewer estimate</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    <p>FDZ Construction LLC is based in Oklahoma City. We handle residential sewer line repair and the concrete restoration the job requires with one crew.</p>
  `,

  "/skid-steer-services-oklahoma-city": `
    <h1>Skid Steer Land Clearing &amp; Site Work in Oklahoma City, OK</h1>
    <p>Our skid steer crew handles the site work most concrete contractors send elsewhere — clearing a wooded lot, leveling a backyard, grading a gravel base, or mowing down overgrown brush. Same self-performed crew and equipment as our concrete and sewer line work, sized right for residential lots and smaller acreage, generally under 2 acres. No subcontracted labor. Based in Oklahoma City.</p>
    <h2>Skid Steer Pricing in Oklahoma City (2026)</h2>
    <p>OKC metro ballpark ranges — your written quote after a free on-site walk is the real number.</p>
    <ul>
      <li>Land clearing, light brush (per acre): $1,000 – $1,600</li>
      <li>Land clearing, moderate brush/small trees (per acre): $1,200 – $2,200</li>
      <li>Dirt work &amp; grading (site prep): $0.80 – $2.00 / sq ft</li>
      <li>Yard &amp; lot leveling: $1 – $2 / sq ft (typical minimum ~$500)</li>
      <li>Gravel grading (base prep): $3 – $8 / sq ft</li>
      <li>Gravel or dirt driveway install: $1,500 – $6,000 typical (or $4–$10 / sq ft)</li>
      <li>Brush hog mowing: $60 – $250 / acre depending on growth density</li>
      <li>Skid steer hourly (time &amp; material): $95 – $150 / hr</li>
    </ul>
    <h2>Skid Steer Services in Oklahoma City</h2>
    <h3>Land Clearing</h3>
    <ul>
      <li>Clearing brush, saplings, and small-to-medium trees on residential lots and smaller acreage — typically under 2 acres</li>
      <li>Right-sized for building sites, fence lines, and overgrown backyards, not full timber removal</li>
      <li>Debris hauled off-site or piled on-site per your preference and local burn rules</li>
    </ul>
    <h3>Dirt Work &amp; Site Prep</h3>
    <ul>
      <li>Cut-and-fill grading to shape a building pad, shed site, or play area</li>
      <li>Rough and fine grading for drainage — critical on OKC's expansive clay</li>
      <li>Hauling fill in or out as needed, coordinated with any concrete or gravel work that follows</li>
    </ul>
    <h3>Yard &amp; Lot Leveling</h3>
    <ul>
      <li>Leveling uneven ground ahead of new sod, landscaping, or a patio pad</li>
      <li>Correcting low spots that pond water after Oklahoma spring rains</li>
    </ul>
    <h3>Gravel Grading</h3>
    <ul>
      <li>Grading and compacting a gravel base ahead of a driveway, parking pad, or outbuilding</li>
      <li>Proper crown and slope so gravel sheds water instead of washing out</li>
    </ul>
    <h3>Gravel &amp; Dirt Driveways</h3>
    <ul>
      <li>Full install — clearing, grading, compacting, and placing a gravel or dirt driveway</li>
      <li>Crowned and sloped to handle OKC clay's seasonal movement</li>
      <li>Want a poured concrete driveway instead? See our <a href="/driveways-oklahoma-city">concrete driveway page</a>.</li>
    </ul>
    <h3>Brush Hog Mowing</h3>
    <ul>
      <li>One-time or scheduled bush hogging for overgrown fields, fence lines, and pasture edges</li>
      <li>Often the right first pass before finer land clearing or grading work begins</li>
    </ul>
    ${processSection("From Site Walk to Final Grade", [
      { title: "Site walk & scope", description: "We walk the property, confirm property lines and access, and call 811 for utility locates before any equipment moves." },
      { title: "Clearing & demo", description: "Brush cutter, root rake, or bucket attachment — matched to what's actually on the site." },
      { title: "Grading & shaping", description: "Cutting and filling to the elevations the project needs, with drainage sloped away from structures." },
      { title: "Gravel placement & compaction", description: "Gravel spread and compacted in lifts — the step most corners get cut on, and the reason gravel driveways rut on OKC clay when it's skipped." },
      { title: "Final grade & cleanup", description: "Final pass for grade and slope, debris cleared, site left ready for what comes next." },
      { title: "Walkthrough", description: "We walk the finished site with you before we leave." },
    ])}
    <h2>Why Oklahoma City Property Owners Choose FDZ for Site Work</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>Same self-performed crew and equipment we use on concrete and sewer line work — no subcontractors, ever</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all site work</li>
      <li>Free on-site estimates, no phone quotes</li>
      <li>One call handles site work and the concrete that follows</li>
    </ul>
    <h2>Skid Steer or Excavator?</h2>
    <p>A skid steer is the right call for most residential jobs: lots under about 2 acres, tight or fenced access, brush and small-tree clearing, yard leveling, gravel base prep, and brush hog mowing. For larger acreage, stump grinding or large tree removal, deeper digging, or bigger commercial pads and driveways, see our <a href="/excavator-services-oklahoma-city">excavator services</a>. Not sure? Call <a href="tel:4054584805">(405) 458-4805</a> and describe the project — we'll tell you which machine fits before we schedule a site walk.</p>
    ${faqSection("Skid Steer FAQ", [
      { question: "How much does land clearing cost in Oklahoma City?", answer: "Light brush clearing typically runs $1,000–$1,600 per acre, and moderate brush or small-tree clearing runs $1,200–$2,200 per acre. Heavier clearing is priced through our excavator services. We give an exact number after a free on-site walk." },
      { question: "What size lot can a skid steer handle?", answer: "Skid steers are best suited to residential-scale lots — generally under about 2 acres — and tight or fenced access a larger machine can't reach." },
      { question: "Do you haul off debris from land clearing?", answer: "Yes — we haul debris off-site or pile it on-site per your preference and local burn rules." },
      { question: "Can you grade a lot for a gravel driveway?", answer: "Yes. Gravel grading typically runs $3–$8 per square foot, and a full gravel driveway install runs $1,500–$6,000 for a typical residential driveway." },
      { question: "What's the difference between a gravel and concrete driveway?", answer: "Gravel driveways cost less upfront but need periodic regrading and gravel top-ups. Concrete costs more upfront but requires far less ongoing maintenance." },
      { question: "Do you do one-time brush hog mowing, or only full clearing?", answer: "Both. We take on one-time or scheduled bush hogging for overgrown fields, fence lines, and pasture." },
      { question: "How do I know if I need a skid steer or an excavator?", answer: "Skid steers fit smaller lots (under about 2 acres) and lighter-duty work. Excavators handle larger acreage, stump removal, and deeper digging. Call us and describe the project." },
      { question: "Do I need a permit for land clearing or grading in Oklahoma City?", answer: "Permit requirements vary by city and project scope. We confirm what's required and handle permit coordination as part of our process." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/excavator-services-oklahoma-city">Excavator Services</a> — Heavier land clearing, deep grading, drainage work, and larger commercial pads or driveways.</li>
      <li><a href="/driveways-oklahoma-city">Concrete Driveways</a> — Want a poured concrete driveway instead of gravel or dirt?</li>
      <li><a href="/sewer-line-repair-oklahoma-city">Sewer Line Repair &amp; Installation</a> — Sewer line work, done by the same self-performed crew.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/excavator-services-oklahoma-city": `
    <h1>Excavator Land Clearing &amp; Heavy Site Work in Oklahoma City, OK</h1>
    <p>When a job needs more reach, more digging depth, or more acreage than a skid steer can handle, our excavator crew takes over — stump and tree removal, deep cut-fill grading, drainage work, and larger commercial pads and driveways. Same self-performed crew, sized for the bigger jobs. No subcontracted labor. Based in Oklahoma City.</p>
    <h2>Excavator Pricing in Oklahoma City (2026)</h2>
    <p>OKC metro ballpark ranges — your written quote after a free on-site walk is the real number.</p>
    <ul>
      <li>Land clearing, moderate (per acre): $1,200 – $2,000</li>
      <li>Land clearing, heavy/hilly with large trees (per acre): $2,000 – $6,000+</li>
      <li>Forestry mulching (per acre): $1,200 – $2,000</li>
      <li>Deep grading &amp; cut-fill / site prep: $0.80 – $2.00 / sq ft (building pad prep $2,000–$10,000)</li>
      <li>Drainage work (swales, French drains): priced per project after site walk</li>
      <li>Commercial gravel pad / larger driveway: $4 – $10 / sq ft installed</li>
      <li>Excavator hourly (time &amp; material): $150 – $225 / hr, plus mobilization</li>
    </ul>
    <h2>Excavator Services in Oklahoma City</h2>
    <h3>Heavy Land Clearing</h3>
    <ul>
      <li>Clearing larger acreage — 2+ acres — including stump grinding and removal of larger trees a skid steer can't pull</li>
      <li>Priced per acre based on vegetation density and terrain</li>
      <li>Lighter clearing on smaller, tighter-access lots — see our <a href="/skid-steer-services-oklahoma-city">skid steer land clearing</a></li>
    </ul>
    <h3>Deep Grading &amp; Cut-Fill</h3>
    <ul>
      <li>Shaping larger pads and correcting slope across bigger sites</li>
      <li>Moving significant volumes of dirt beyond what a skid steer bucket can handle</li>
    </ul>
    <h3>Drainage Work</h3>
    <ul>
      <li>Digging drainage swales and French drains to move water off larger properties</li>
      <li>Critical on Oklahoma's expansive clay, where standing water accelerates soil movement</li>
    </ul>
    <h3>Commercial Pads &amp; Larger Driveways</h3>
    <ul>
      <li>Excavation and grading for commercial gravel pads, storage yards, and extended driveways</li>
      <li>Want a concrete commercial pad or driveway instead? See our <a href="/commercial-concrete-oklahoma-city">commercial concrete</a> or <a href="/driveways-oklahoma-city">concrete driveway</a> pages.</li>
    </ul>
    <h3>Gravel Grading (Larger Sites)</h3>
    <ul>
      <li>Base grading and compaction engineered for heavier vehicle and equipment traffic</li>
    </ul>
    <h3>Brush Hog &amp; Heavy Mowing</h3>
    <ul>
      <li>Bush hogging larger acreage and pasture where terrain or reach calls for an excavator-mounted mower</li>
    </ul>
    ${processSection("From Utility Locate to Final Grade", [
      { title: "Site walk & utility locate", description: "We walk the property and call 811 for utility locates before any digging — non-negotiable on every job." },
      { title: "Clearing & stump removal", description: "Larger trees and stumps pulled and removed, not just cut down and left." },
      { title: "Cut-fill grading & drainage", description: "Shaping the site to the elevations the project needs, with drainage engineered to move water off the property." },
      { title: "Base prep & gravel placement", description: "Gravel spread and compacted in lifts, sized for the load the site will carry." },
      { title: "Final grade & cleanup", description: "Final pass for grade and slope, debris cleared, site left ready for what comes next." },
      { title: "Walkthrough", description: "We walk the finished site with you before we leave." },
    ])}
    <h2>Why Oklahoma City Property Owners Choose FDZ for Site Work</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>Same self-performed crew and equipment we use on concrete and sewer line work — no subcontractors, ever</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all site work</li>
      <li>Free on-site estimates — acreage, terrain, and access all affect the price, and we won't guess over the phone</li>
      <li>One call handles clearing and the concrete that follows</li>
    </ul>
    <h2>Excavator or Skid Steer?</h2>
    <p>An excavator is the right call for larger acreage — 2+ acres — stump grinding or large tree removal, deep digging for drainage or footings, and bigger commercial pads or driveways. For smaller, tighter-access jobs, our <a href="/skid-steer-services-oklahoma-city">skid steer services</a> are usually faster and more affordable. Not sure? Call <a href="tel:4054584805">(405) 458-4805</a> and describe the project — we'll tell you which machine fits before we schedule a site walk.</p>
    ${faqSection("Excavator FAQ", [
      { question: "How much does land clearing cost for larger acreage in Oklahoma City?", answer: "Moderate clearing runs $1,200–$2,000 per acre, and heavy or hilly clearing with large trees runs $2,000–$6,000+ per acre. We give an exact number after a free on-site walk." },
      { question: "What is a mobilization charge?", answer: "Larger or more remote excavator jobs include a mobilization charge to cover transporting the equipment to and from the site. It's disclosed in your written estimate up front." },
      { question: "Is stump grinding included in land clearing?", answer: "Yes — heavy land clearing includes removal of stumps and larger trees a skid steer can't pull." },
      { question: "What does drainage work include?", answer: "Drainage swales and French drains to move water off larger properties, tied into existing drainage or storm systems where required." },
      { question: "How much deeper can an excavator dig than a skid steer?", answer: "Excavators handle significantly deeper cuts than a skid steer bucket, which is why they're the right choice for drainage work, footings, and deep grading." },
      { question: "Do you need a permit for large-scale land clearing or grading?", answer: "Permit requirements vary by city, county, and project scope — especially on larger acreage. We confirm what's required and handle permit coordination." },
      { question: "How do I know if I need an excavator or a skid steer?", answer: "Excavators fit larger acreage (2+ acres), stump removal, and deep digging. Skid steers fit smaller lots and lighter-duty work. Call us and describe the project." },
      { question: "How long does a larger excavation or clearing job take?", answer: "Timeline depends on acreage, vegetation density, and terrain. We give you a realistic schedule as part of your written estimate." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/skid-steer-services-oklahoma-city">Skid Steer Services</a> — Lighter clearing, leveling, gravel grading, and brush hog mowing for smaller, tighter-access lots.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Warehouse floors, retail pads, and commercial slabs for the properties we've cleared and graded.</li>
      <li><a href="/sewer-line-repair-oklahoma-city">Sewer Line Repair &amp; Installation</a> — Sewer line work, done by the same self-performed crew.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/patios-oklahoma-city": `
    <h1>Patios, Slabs &amp; Stamped Concrete in Oklahoma City</h1>
    <p>From backyard patios to garage and shop slabs, FDZ Construction LLC delivers concrete flatwork built for Oklahoma's temperature swings. Every pour starts with proper subgrade compaction, a minimum 4-inch aggregate base, rebar on chairs, and 4,000 PSI ready-mix from a local batch plant.</p>
    <h2>Concrete Patio and Slab Services in Oklahoma City</h2>
    <h3>Standard Concrete Patios</h3>
    <ul>
      <li>Clean, durable outdoor slabs for entertaining, furniture, or outdoor kitchens</li>
      <li>Broom or smooth finish options</li>
      <li>Properly sloped away from the house for drainage</li>
    </ul>
    <h3>Stamped Concrete Patios</h3>
    <ul>
      <li>Applied during pour while concrete is still plastic</li>
      <li>Most popular decorative concrete service in the OKC metro — homeowners in Nichols Hills, Edmond, and Yukon regularly request it</li>
      <li>Requires sealing after cure — OKC's freeze-thaw cycles make this non-negotiable</li>
    </ul>
    <h3>Outdoor Living Slabs</h3>
    <ul>
      <li>Slabs for outdoor kitchens, fire pits, pergolas, and pool surrounds</li>
      <li>Often paired with a retaining wall on sloped lots</li>
      <li>Drainage planning especially important on Edmond's rolling terrain</li>
    </ul>
    <h3>Concrete Slab Replacements</h3>
    <ul>
      <li>Old slab removal and disposal</li>
      <li>Re-evaluation of base conditions before new pour</li>
      <li>Drainage correction if original slab had pooling issues</li>
    </ul>
    ${processSection("The Stamped Concrete Process", [
      { title: "Base prep & forming", description: "We compact the subgrade and aggregate base and set forms to grade so the patio drains away from your home." },
      { title: "Pour", description: "We place 4,000 PSI concrete and screed it to a flat, even surface." },
      { title: "Color hardener & release agent", description: "For stamped finishes, color hardener and release agent are applied while the slab is still plastic." },
      { title: "Stamp with texture mats", description: "We press texture mats into the surface at the right point in the cure for crisp pattern detail." },
      { title: "Cure", description: "The slab cures before any cleaning or sealing so the finish sets up properly." },
      { title: "Pressure wash & seal", description: "We pressure wash off the release agent and apply sealer — essential in Oklahoma's freeze-thaw climate." },
    ])}
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all patio and slab work</li>
      <li>Based in Oklahoma City</li>
      <li>Free on-site estimates, no pressure</li>
      <li>OKC's freeze-thaw cycles can damage an unsealed stamped surface within a season or two — we don't cut corners on sealing</li>
    </ul>
    <h2>Why Sealing Matters in Oklahoma City</h2>
    <p>OKC's freeze-thaw cycles make sealing non-negotiable for stamped concrete — an unsealed decorative surface is far more likely to spall, flake, or fade within a season or two. We seal every stamped pour and give you a resealing schedule to protect the look long-term.</p>
    <h2>How Much Does a Concrete Patio Cost in Oklahoma City?</h2>
    <p>Costs vary by square footage, finish type (broom, stamped, or decorative), slab thickness, site conditions, and whether existing concrete needs removal. Typical metro ranges are in our <a href="/blog/cost-of-concrete-oklahoma-city-2026">2026 Oklahoma City concrete cost guide</a>. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
    ${faqSection("Patio FAQ", [
      { question: "How much does a concrete patio cost in OKC?", answer: "Costs vary by square footage, finish type, and site conditions. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
      { question: "How much does stamped concrete cost in Oklahoma City?", answer: "Stamped concrete requires additional steps — color hardener, release agent, stamping, and sealing — which affects cost. We provide free on-site estimates for your specific project." },
      { question: "What finish is best for a patio in Oklahoma?", answer: "Broom finish is the most popular for traction and value. Stamped concrete offers a premium look at a higher price point." },
      { question: "How often does stamped concrete need to be resealed?", answer: "Roughly every 2–3 years, depending on sun exposure and traffic. We provide a resealing schedule when the project is finished." },
      { question: "Can stamped concrete be repaired if it chips or cracks?", answer: "Minor surface chips and color touch-ups are usually repairable. More significant cracking depends on whether it's a surface issue or a structural/base issue — we evaluate this on-site." },
      { question: "How long after a new patio is poured before I can put furniture on it?", answer: "Light foot traffic in about 3 days; furniture and normal use after about a week. Full structural strength takes approximately 28 days." },
      { question: "Can I pour a slab on clay soil in Oklahoma?", answer: "Yes — with proper base prep. Oklahoma's clay requires deeper aggregate base and adequate reinforcement." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/driveways-oklahoma-city">Concrete driveway installation</a> — New installation, replacement, and stamped decorative driveways.</li>
      <li><a href="/retaining-walls-oklahoma-city">Retaining wall construction</a> — Outdoor living slabs on sloped lots often pair with a retaining wall.</li>
      <li><a href="/pool-deck-oklahoma-city">Pool deck concrete</a> — Slip-resistant pool decks for homes and commercial properties.</li>
      <li>Helpful guides: <a href="/blog/rebar-vs-wire-mesh-concrete-slabs">rebar vs wire mesh for concrete slabs</a> and the <a href="/blog/best-time-of-year-to-pour-concrete-okc">best time of year to pour concrete in OKC</a>.</li>
      <li>Local patio pages: <a href="/patios-edmond">Edmond</a>, <a href="/patios-norman">Norman</a>, <a href="/patios-moore">Moore</a>, <a href="/patios-yukon">Yukon</a>.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/foundations-oklahoma-city": `
    <h1>Concrete Foundation Contractor in Oklahoma City</h1>
    <p>FDZ Construction LLC is a concrete foundation contractor for residential and commercial projects in Oklahoma City — slab-on-grade foundation construction, stem walls, footings, and pads placed per approved plans and site conditions. Call <a href="tel:4054584805">(405) 458-4805</a>.</p>
    <h2>Foundation Services in Oklahoma City</h2>
    <h3>Residential Foundations</h3>
    <ul>
      <li>Footing layout and excavation for new homes and additions</li>
      <li>Rebar placement and forming when shown on approved plans</li>
      <li>Slab-on-grade and stem-wall foundation concrete placement</li>
      <li>Related site details only when included in FDZ's contracted concrete scope</li>
    </ul>
    <h3>Commercial Concrete Foundations</h3>
    <ul>
      <li>Coordination with GCs, builders, inspectors, and bid schedules</li>
      <li>Slab-on-grade, footings, and pads placed per plan/spec</li>
      <li>COI and bonding documentation available for commercial bid packages</li>
    </ul>
    <h3>Slab-on-Grade Foundation Construction</h3>
    <ul>
      <li>New-home and commercial slab-on-grade foundations</li>
      <li>Thickened edges, grade beams, and embeds when shown on plans</li>
      <li>Vapor barrier and base prep when included in FDZ's contracted concrete scope</li>
    </ul>
    <h3>Footings, Stem Walls &amp; Pads</h3>
    <ul>
      <li>Continuous and spread footings as shown on approved plans</li>
      <li>Stem walls for crawl spaces, elevated structures, and additions</li>
      <li>Garage and shop pads when within concrete scope</li>
    </ul>
    <h2>Building Foundations in the Oklahoma City Area</h2>
    <p>Oklahoma City-area sites can include expansive or moisture-sensitive soils. Foundation design and preparation requirements depend on approved plans, site conditions, and geotechnical recommendations when provided. FDZ places foundation concrete as a concrete contractor per plans, specs, and contracted scope — we do not provide geotechnical evaluation or foundation engineering.</p>
    ${processSection("Foundation Installation Process", [
      { title: "Layout & plan review", description: "We stake the foundation to the approved plans, note site conditions that affect concrete placement, and coordinate permits when included in scope." },
      { title: "Excavation & footings", description: "We excavate to grade and dig and pour footings as shown on the approved plans and required by the project documents." },
      { title: "Forming & reinforcement", description: "Forms are set to grade; rebar, grade beams, sleeves, and embeds are placed when shown on approved plans and included in FDZ scope." },
      { title: "Vapor barrier & base", description: "We prepare the subgrade/base and install under-slab vapor barrier when specified and included in scope." },
      { title: "Pour & finish", description: "We place the specified mix, screed and finish to grade, and set anchor bolts/hold-downs when shown before the concrete sets." },
      { title: "Cure & inspection", description: "The slab cures before it carries load per project requirements. We coordinate required inspections and walk the finished foundation with you." },
    ])}
    <h2>Commercial Concrete Foundation Contractor for GCs &amp; Builders</h2>
    <p>Commercial foundation contractor Oklahoma City work is plan-driven: FDZ places commercial slab-on-grade foundations, footings, and pads for commercial projects and new construction when that concrete is in our contracted scope. Bid packages, inspection windows, and embeds/vapor barrier details come from approved drawings.</p>
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ</h2>
    <p>Oklahoma City-area sites can include expansive or moisture-sensitive soils. Foundation performance depends on building what the approved plans and site requirements call for. We've been placing concrete foundations in this market for 8+ years.</p>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on foundation work</li>
      <li>Based in Oklahoma City</li>
      <li>Free on-site or plan-based estimates</li>
      <li>COI and bonding documentation available for commercial bid process</li>
    </ul>
    <h2>How Much Do Foundations Cost in Oklahoma City?</h2>
    <p>Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. We provide free on-site or plan-based estimates — call <a href="tel:4054584805">(405) 458-4805</a>. Commercial foundations are quoted from drawings and bid documents whenever available.</p>
    <h2>Real Foundation Projects Across the OKC Metro</h2>
    <p>A few recent foundation pours — from a pier-supported thickened slab in Edmond to residential slab-on-grade work in Piedmont. FDZ placed the concrete scope; design details come from the project documents. <a href="/our-projects">See more completed projects across the OKC metro</a>.</p>
    <img src="/images/projects/pier-foundation-excavation-edmond-oklahoma-1.jpg" alt="Excavation and site grading for pier foundation in Edmond, Oklahoma — skid steer and excavator working red clay lot" loading="lazy" />
    <img src="/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.jpg" alt="Concrete truck on site during pier foundation slab pour in Edmond, Oklahoma — crew finishing fresh slab" loading="lazy" />
    <img src="/images/projects/pier-foundation-finished-edmond-oklahoma-curing.jpg" alt="Finished pier foundation thickened slab curing in Edmond, Oklahoma" loading="lazy" />
    <img src="/images/projects/residential-foundation-pour-piedmont-oklahoma.jpg" alt="Residential foundation pour in Piedmont, Oklahoma — fresh slab on Oklahoma red clay subgrade" loading="lazy" />
    <img src="/images/projects/residential-foundation-crew-piedmont-ok.jpg" alt="FDZ Construction crew finishing residential foundation slab in Piedmont, OK with power trowel" loading="lazy" />
    ${faqSection("Foundation FAQ", [
      { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects, placed per approved plans and site conditions." },
      { question: "Do you build commercial foundations?", answer: "Yes — we pour commercial slab-on-grade, footings, and pads for commercial projects and new construction, coordinated with GCs and inspectors when those parties are on the project." },
      { question: "How much does a foundation cost in OKC?", answer: "Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. We provide free on-site or plan-based estimates — call (405) 458-4805." },
      { question: "How deep should footings be in Oklahoma?", answer: "Footing depth is set by the approved plans, applicable code, and design documents for the project. We place footings as shown." },
      { question: "Do you place rebar and vapor barrier?", answer: "Yes, when shown on approved plans and included in FDZ's contracted concrete scope." },
      { question: "Do you engineer foundations?", answer: "No. FDZ is a concrete contractor. We place foundation concrete according to approved plans and specifications." },
      { question: "What concrete strength do you use for foundations?", answer: "Mix strength is set by the approved plans and specifications for the project." },
      { question: "Do you handle permits and inspections?", answer: "Yes — we coordinate necessary permits and inspections for foundation projects across the OKC metro when that coordination is part of our scope." },
      { question: "What if I need foundation crack repair instead of a new foundation?", answer: "Use our foundation repair page for existing foundation cracks and repair-vs-replace evaluation. This page is for new foundation construction and replacement pours." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/foundation-repair-oklahoma-city">Foundation repair</a> — Foundation crack repair and repair-vs-replace evaluation for existing foundations.</li>
      <li><a href="/retaining-walls-oklahoma-city">Retaining wall construction</a> — Grade-change walls that sometimes accompany foundation work on sloped lots — dedicated retaining-wall page.</li>
      <li><a href="/commercial-concrete-repair-oklahoma-city">Commercial concrete repair</a> — Cracked commercial slabs, failed panels, and site concrete repair when the issue is not foundation movement.</li>
      <li><a href="/warehouse-slab-repair-oklahoma-city">warehouse concrete and slab-on-grade</a> — New warehouse floors and phased industrial floor replacement for forklift operations.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial concrete services</a> — Site concrete for commercial properties and GC projects.</li>
      <li><a href="/soil-stabilization-oklahoma-city">Soil stabilization</a> — Subgrade treatment before a foundation pour when specified for the project.</li>
      <li><a href="/crane-foundation-installation-oklahoma-city">Crane foundation installation</a> — Crane pads and anchor-bolt coordination installed per engineered drawings.</li>
      <li>Helpful guide: <a href="/blog/rebar-vs-wire-mesh-concrete-slabs">rebar vs wire mesh for concrete slabs</a>.</li>
      <li>Local foundation pages: <a href="/foundations-edmond">Edmond</a>, <a href="/foundations-norman">Norman</a>, <a href="/foundations-yukon">Yukon</a>.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/sidewalks-oklahoma-city": `
    <h1>Sidewalks, Curb &amp; Gutter in Oklahoma City</h1>
    <p>From city right-of-way replacements to private walkways and commercial curb work, FDZ Construction delivers sidewalks and curbs built to code and graded for proper drainage. Every project uses 4,000 PSI concrete with reinforcement appropriate for the application.</p>
    <h2>Sidewalk, Curb, and Gutter Services in Oklahoma City</h2>
    <h3>Residential Sidewalks</h3>
    <ul>
      <li>Grading for proper drainage and ADA-compliant slope where required</li>
      <li>Control joint placement to prevent uncontrolled cracking</li>
      <li>Standard 4-inch thickness for pedestrian use</li>
    </ul>
    <h3>Curb and Gutter</h3>
    <ul>
      <li>Combination curb-and-gutter for streets, parking lots, and driveways</li>
      <li>Slipform for longer runs; hand-formed for custom or tight sections</li>
      <li>Drainage routing away from structures</li>
    </ul>
    <h3>Sidewalk Replacement</h3>
    <ul>
      <li>Removal of damaged sections or full runs</li>
      <li>Common need: tree root damage, settled sections, or original pour with inadequate joints</li>
      <li>ADA compliance correction where applicable</li>
    </ul>
    <h3>Commercial and Subdivision Sidewalks</h3>
    <ul>
      <li>Larger-scale runs for new subdivisions and commercial sites</li>
      <li>Coordination with site grading and other trades</li>
    </ul>
    ${processSection("Process", [
      { title: "Grading for drainage & ADA slope", description: "We grade the route for positive drainage and, where required, for ADA-compliant cross-slope and running slope." },
      { title: "Forming", description: "Forms are set to line and grade — by hand for short runs or machine-formed for long, consistent runs." },
      { title: "Pour & broom finish", description: "We place 4,000 PSI concrete and finish with a broom texture for slip resistance." },
      { title: "Joint placement", description: "We tool or saw control joints at regular intervals and place expansion joints where the walk meets driveways, curbs, and structures." },
    ])}
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all sidewalk and curb work</li>
      <li>Based in Oklahoma City</li>
      <li>ADA-compliant ramps, proper slopes, and city-spec curb profiles on every project</li>
      <li>Free on-site estimates, no pressure</li>
    </ul>
    <h2>How Much Do Sidewalks and Curb Work Cost in Oklahoma City?</h2>
    <p>Costs vary by linear footage, slab thickness, site conditions, and whether existing concrete needs removal. ADA-compliant ramps, curb profiles, and right-of-way permits also affect the total. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
    ${faqSection("Sidewalk FAQ", [
      { question: "How much does a concrete sidewalk cost in OKC?", answer: "Costs vary by linear footage, site conditions, and whether existing concrete needs removal. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
      { question: "How much does curb and gutter cost in OKC?", answer: "Curb and gutter pricing depends on linear footage, curb profile type, and site conditions. We provide free on-site estimates." },
      { question: "Do you handle city-required sidewalk repairs?", answer: "Yes — we handle permitted city right-of-way sidewalk replacements including ADA curb ramps." },
      { question: "What types of curb profiles do you pour?", answer: "We handle standard barrier curb, mountable (rollover) curb, valley gutter, and combination sections." },
      { question: "How thick should a concrete sidewalk be?", answer: "4 inches is standard for pedestrian sidewalks. 5 inches is recommended where vehicles may cross." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/sewer-line-repair-oklahoma-city">Residential sewer line repair</a> — Sidewalk restoration after sewer line access, done by the same crew that did the digging.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Parking lots, warehouse floors, site flatwork, and curb &amp; gutter for commercial developments.</li>
      <li><a href="/commercial-concrete-repair-oklahoma-city">Commercial concrete repair</a> — Cracked slabs, trip hazards, and failed panels on commercial properties, including pedestrian areas.</li>
      <li><a href="/driveways-oklahoma-city">Driveways</a> — Sidewalk work often pairs with new driveway installation or replacement.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/commercial-concrete-oklahoma-city": `
    <h1>Commercial Concrete Contractor in Oklahoma City</h1>
    <p>FDZ Construction is a commercial concrete contractor serving Oklahoma City and the metro — new pours, replacements, and repairs for GCs, property owners, developers, and facility managers. Based in Oklahoma City — call <a href="tel:4054584805">(405) 458-4805</a>.</p>
    <!-- TODO: add real commercial project photos when available -->
    <h2>Commercial Concrete Services in Oklahoma City</h2>
    <h3>Commercial Parking Lots</h3>
    <ul>
      <li>New ADA-compliant commercial parking lots and drive lanes</li>
      <li>Drainage grading, high-PSI mix, and expansion joint planning for large pours</li>
      <li><a href="/parking-lots-oklahoma-city">Parking lot construction</a> · <a href="/concrete-parking-lot-repair-oklahoma-city">Parking lot repair</a></li>
    </ul>
    <h3>Loading Docks</h3>
    <ul>
      <li>New dock construction, full replacement, and apron/face/pit repairs</li>
      <li><a href="/loading-dock-construction-oklahoma-city">Dock construction</a> · <a href="/loading-dock-replacement-oklahoma-city">Dock replacement</a> · <a href="/loading-dock-concrete-repair-oklahoma-city">Dock repair</a></li>
    </ul>
    <h3>Warehouse Concrete</h3>
    <ul>
      <li>New warehouse slab-on-grade floors for distribution and industrial buildings</li>
      <li>Phased interior slab replacement in occupied facilities</li>
      <li>Flatwork, sub-base prep, and joint systems for forklift operations — per project plans</li>
      <li><a href="/warehouse-slab-repair-oklahoma-city">Warehouse concrete &amp; slabs</a></li>
    </ul>
    <h3>Commercial &amp; Industrial Concrete Repair</h3>
    <ul>
      <li>Crack sealing, spalling, trip hazards, joint failure, and panel repair</li>
      <li><a href="/commercial-concrete-repair-oklahoma-city">Commercial concrete repair</a> · <a href="/industrial-concrete-repair-oklahoma-city">Industrial concrete repair</a></li>
    </ul>
    <h3>Concrete Foundations &amp; Slab-on-Grade</h3>
    <ul>
      <li>Commercial slab-on-grade, footings, and pads</li>
      <li>Reinforcement and thickness set to load requirements and engineered plans</li>
      <li><a href="/foundations-oklahoma-city">Commercial foundations</a></li>
    </ul>
    <h3>Equipment Pads, ADA, Curb &amp; Gutter</h3>
    <ul>
      <li><a href="/equipment-pad-concrete-oklahoma-city">Equipment pad concrete</a> · <a href="/dumpster-pad-concrete-oklahoma-city">Dumpster pads</a></li>
      <li><a href="/ada-concrete-ramps-oklahoma-city">ADA ramps</a> · <a href="/sidewalks-oklahoma-city">Sidewalks</a> · <a href="/commercial-curb-and-gutter-oklahoma-city">Curb &amp; gutter</a></li>
    </ul>
    <h3>Truck Courts &amp; Bollards</h3>
    <ul>
      <li><a href="/truck-court-concrete-oklahoma-city">Truck courts</a> · <a href="/bollard-installation-oklahoma-city">Bollard installation</a></li>
      <li><a href="/dock-leveler-pit-concrete-oklahoma-city">Dock leveler pits</a> · <a href="/crane-foundation-installation-oklahoma-city">Crane foundations</a></li>
    </ul>
    <h2>Commercial Concrete for Oklahoma City Projects</h2>
    <p>FDZ Construction works with general contractors, facility managers, developers, commercial property managers, building owners, and industrial facilities across the Oklahoma City metro. Whether you are bidding a new pad, replacing a failed dock apron, or repairing trip hazards on an occupied site, we scope the concrete work so it fits the rest of the project.</p>
    <p>On GC-managed jobs we review plans and specs, confirm slab thickness, reinforcement, and joint layout, and lock pour dates around other trades. Certificate of insurance and bonding documentation is available as part of the bid process. On owner-direct and facility work we schedule around operations — after-hours, weekends, and phased sequences when a dock, warehouse aisle, or parking lane has to stay open.</p>
    <p>We dig into base conditions before recommending repair or replacement, place rebar per the load requirements on the drawings, and saw-cut and seal joints on schedule. Estimates are written after a site visit or plan review — not over the phone. Call <a href="tel:4054584805">(405) 458-4805</a> with drawings, photos, or a scope list. <a href="/#estimate">Request a commercial concrete estimate</a>.</p>
    <h2>Verified Commercial Concrete Work Across the OKC Metro</h2>
    <ul>
      <li><strong>Guthrie warehouse forklift ramp</strong> — Reinforced ramp poured inside a live warehouse with active racking and inventory; power-trowel finish flush with the existing floor.</li>
      <li><strong>Rosedale 10,000 sq ft shop foundation</strong> — Commercial foundation pour on expansive clay with engineered rebar and a single coordinated pour. Video on <a href="/our-projects">our projects page</a>.</li>
      <li><strong>Yukon commercial parking lot</strong> — 4,200 sq ft, 5&quot; reinforced concrete for a retail strip, completed in 5 days. <a href="/parking-lots-oklahoma-city">Commercial parking lot construction</a>.</li>
      <li><strong>Star Spencer High School (Spencer)</strong> — Stairs and ADA-compliant sidewalks/ramps for a public school project. <a href="/ada-concrete-ramps-oklahoma-city">ADA ramps</a> · <a href="/sidewalks-oklahoma-city">sidewalks</a>.</li>
    </ul>
    ${processSection("From Plans to Sealed Slab", [
      { title: "Scope & coordination", description: "We review plans and specs with your GC and engineer and lock in a pour schedule that fits the other trades." },
      { title: "Site prep & grading", description: "We excavate, grade for drainage, and prepare the subgrade for stable, properly shaped ground." },
      { title: "Base & compaction", description: "We install and compact 6+ inches of aggregate base and proof-roll it for design loads." },
      { title: "Forming & reinforcement", description: "Forms are set to grade and the engineered rebar schedule is placed and inspected before the pour." },
      { title: "Pour & finish", description: "We place 4,000+ PSI concrete and finish to spec — broom, steel-trowel smooth, or burnished depending on use." },
      { title: "Joints, cure & seal", description: "Control joints are saw-cut within 24 hours, the slab is cured, joints and surface are sealed, and we walk it for final inspection." },
    ])}
    <h2>What Does Commercial Concrete Cost in Oklahoma City?</h2>
    <p>Commercial concrete pricing depends on scope, square footage, PSI requirements, site access, and schedule coordination. We provide competitive bids with clear line items — call <a href="tel:4054584805">(405) 458-4805</a> or email <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> to discuss your project.</p>
    <h2>Real Commercial Concrete Projects in the OKC Metro</h2>
    <p>A concrete forklift ramp we built inside a live warehouse in Guthrie, Oklahoma — poured around active racking and inventory, with a reinforced slab sized for repeated heavy equipment loads and a power trowel finish flush with the existing floor. <a href="/our-projects">See more completed projects across the OKC metro</a>.</p>
    <img src="/images/projects/forklift-ramp-pour-guthrie-oklahoma-1.jpg" alt="Power trowel finishing a concrete forklift ramp pour inside a warehouse in Guthrie, Oklahoma" loading="lazy" />
    <img src="/images/projects/forklift-ramp-pour-guthrie-oklahoma-2.jpg" alt="Crew troweling concrete forklift ramp in Guthrie, OK warehouse — forms and fresh pour visible" loading="lazy" />
    <img src="/images/projects/forklift-ramp-finished-guthrie-oklahoma.jpg" alt="Finished concrete forklift ramp in Guthrie, Oklahoma — smooth trowel finish flush with warehouse floor" loading="lazy" />
    ${faqSection("Commercial Concrete FAQ", [
      { question: "How thick should a commercial concrete slab be?", answer: "Commercial slab thickness depends on the project plans, engineering, soil/base conditions, and operational loads. Warehouse floors carrying forklifts, racking, or heavy equipment may require different sections and reinforcement. For warehouse-specific slab-on-grade and replacement scope, see our warehouse concrete and slabs page." },
      { question: "How much does commercial concrete cost in OKC?", answer: "Commercial concrete pricing depends on scope, square footage, PSI requirements, site access, and schedule coordination. We provide competitive bids with clear line items — call (405) 458-4805 or email jesus@fdzconstruction.com to discuss your project." },
      { question: "What PSI concrete do you use for commercial work?", answer: "Concrete strength follows the project plans, specifications, and load requirements. FDZ places the mix required for the approved commercial or industrial scope." },
      { question: "How long before we can use a new commercial slab?", answer: "Return-to-service timing depends on the mix design, project specifications, curing conditions, and anticipated loads. We can phase pours to keep part of your operation running when the schedule requires it." },
      { question: "How quickly can you turn around a bid for a commercial project?", answer: "Contact us with project details and we'll schedule an on-site visit promptly. Bid turnaround depends on project complexity." },
      { question: "Do you work as a sub-contractor on GC-managed projects?", answer: "Yes. We're set up to work within a GC's project schedule, coordinate with other trades on site, and provide required documentation (COI, bonding) as part of the sub process." },
      { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs and curing methods by season." },
      { question: "What areas do you serve for commercial work?", answer: "We serve the entire OKC metro — Oklahoma City (home base, fastest response), Edmond (~30–40 min), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/warehouse-slab-repair-oklahoma-city">Warehouse concrete &amp; slabs</a> — New warehouse slab-on-grade floors and phased replacement with flatness tolerances for forklift operations.</li>
      <li><a href="/parking-lots-oklahoma-city">Parking lot replacement</a> — Dedicated page for commercial parking lot design, layout, and construction.</li>
      <li><a href="/foundations-oklahoma-city">Concrete foundations</a> — Commercial slab-on-grade and structural foundations.</li>
      <li><a href="/foundation-repair-oklahoma-city">Foundation Repair</a> — Foundation-related cracks and movement — kept separate from general commercial slab repair.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; curb and gutter</a> — Site sidewalks, ADA ramps, and curb work for commercial developments.</li>
      <li><a href="/commercial-concrete-repair-oklahoma-city">Commercial concrete repair</a> — Spalling, joint failure, and panel replacement for commercial flatwork.</li>
      <li><a href="/polished-concrete-oklahoma-city">Polished concrete</a> — Ground and polished floors for retail, warehouses, and showrooms.</li>
      <li><a href="/epoxy-floor-coatings-oklahoma-city">Epoxy floor coatings</a> — Protective and decorative epoxy systems for commercial floors.</li>
      <li><a href="/retail-restaurant-concrete-oklahoma-city">Retail &amp; restaurant concrete</a> — Pads, entries, and flatwork for retail and restaurant builds.</li>
      <li><a href="/tilt-wall-concrete-oklahoma-city">Tilt-wall concrete</a> — Footings and slab work coordinated with tilt-up construction.</li>
      <li><a href="/soil-stabilization-oklahoma-city">Soil stabilization</a> — Base and subgrade stabilization for problem clay sites.</li>
      <li><a href="/concrete-maintenance-oklahoma-city">Concrete maintenance</a> — Joint sealing, resurfacing, and ongoing commercial slab care.</li>
      <li><a href="/pool-deck-oklahoma-city">Pool deck concrete</a> — Slip-resistant decks for HOAs, hotels, and commercial properties.</li>
      <li><a href="/bollard-installation-oklahoma-city">Bollard installation</a> · <a href="/ada-concrete-ramps-oklahoma-city">ADA concrete ramps</a> · <a href="/equipment-pad-concrete-oklahoma-city">Equipment pads</a></li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/commercial-concrete-repair-oklahoma-city": `
    <h1>Commercial Concrete Repair in Oklahoma City</h1>
    <p>If you have cracked slabs, spalling, settlement, trip hazards, failed joints, damaged loading areas, parking lot failures, warehouse slab damage, equipment pad damage, or drainage-related deterioration — this page is for an evaluation and written estimate. Call <a href="tel:4054584805">(405) 458-4805</a> or <a href="/?from=commercial-concrete-repair-oklahoma-city#estimate">request a commercial concrete repair estimate</a>.</p>
    <p>For heavy-use industrial floors and dock-related slab damage, see <a href="/industrial-concrete-repair-oklahoma-city">industrial concrete repair</a> — this page covers commercial property repair more broadly.</p>
    <h2>Who This Page Is For</h2>
    <ul>
      <li>Facility and property managers — parking lots, sidewalks, docks, and warehouse floors that need a repair-vs-replace recommendation</li>
      <li>General contractors — photo- or plan-based repair scopes, including occupied sites that need access and schedule coordination</li>
      <li>Owners and operators — warehouses, retail, offices, schools, and industrial sites in the OKC metro</li>
    </ul>
    ${processSection("How Commercial Repair Typically Proceeds", [
      { title: "Share project details and available photos", description: "Use the estimate form or call with facility type, location, affected area, what you are seeing, and desired timing. Photos help. This is a contractor estimate request, not an engineering inspection." },
      { title: "Evaluate the affected concrete and site conditions", description: "Walk the damage, note cracking, settlement, joints, drainage, and access — contractor evaluation for estimating." },
      { title: "Receive a proposed repair or replacement scope", description: "Written estimate with the recommended method — repair, partial replacement, or larger replacement. No verbal commercial quotes." },
      { title: "Coordinate scheduling and access", description: "If you move forward, sequence the work around occupied areas, access, and downtime constraints." },
    ])}
    <p><strong>Occupied site?</strong> Include access limits, areas that must stay open, desired timing, and downtime constraints when you request an estimate. After-hours or weekend work can be discussed when a facility has to stay open — it is planned per project, not a promised response window.</p>
    <h2>Commercial Slab Repair and Cracked Concrete Evaluation</h2>
    <p>Many commercial repair calls start with a cracked slab, failed panel, or surface breakout creating a trip hazard or traffic problem. Commercial slab repair can mean sealing isolated cracks, patching spalls, resealing joints, grinding trip hazards, or replacing a failed bay when adjacent concrete is still sound.</p>
    <p>Cracked commercial concrete is not automatically a foundation problem. Structural foundation movement belongs on <a href="/foundation-repair-oklahoma-city">foundation repair</a>. Residential driveway cracks belong on <a href="/driveway-repair-oklahoma-city">driveway / concrete crack repair</a>. Heavy-use industrial floors with forklift joint failure fit <a href="/industrial-concrete-repair-oklahoma-city">industrial concrete repair</a>.</p>
    <h2>When Concrete Can Be Repaired vs. When Replacement Makes More Sense</h2>
    <p>The right answer depends on cracking extent, settlement, base/subgrade condition, drainage, surface deterioration, traffic/loading, downtime, and access. FDZ does not certify structural adequacy — that stays with your design professional when required. We evaluate what we see on site and recommend repair, partial panel replacement, or larger replacement.</p>
    <ul>
      <li>Localized cracks, spalling, or failed sealant with a stable slab — often repair</li>
      <li>Single settled panel — foam lift or partial panel replacement when neighbors are sound</li>
      <li>Widespread cracking, ongoing settlement, slab flex, or failed subgrade — replacement evaluation</li>
    </ul>
    <h2>What to Include When Requesting an Estimate</h2>
    <ul>
      <li>Facility type, project location, approximate affected area, what you are seeing, desired timing, and photos of the damage</li>
    </ul>
    <h2>Related Project Evidence</h2>
    <p>A concrete forklift ramp poured inside a live warehouse in Guthrie, Oklahoma — occupied-site warehouse work. Other verified commercial work includes a Yukon parking lot and Star Spencer High School ADA sidewalks. <a href="/our-projects">See completed projects</a>.</p>
    <h2>Commercial Concrete Repair Use Cases</h2>
    <ul>
      <li><a href="/concrete-parking-lot-repair-oklahoma-city">Parking lot repair</a> · <a href="/parking-lots-oklahoma-city">Parking lot construction</a></li>
      <li><a href="/loading-dock-concrete-repair-oklahoma-city">Loading dock concrete repair</a></li>
      <li><a href="/warehouse-slab-repair-oklahoma-city">Warehouse concrete &amp; slabs</a> · <a href="/industrial-concrete-repair-oklahoma-city">Industrial concrete repair</a></li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks</a> · <a href="/ada-concrete-ramps-oklahoma-city">ADA ramps</a></li>
      <li><a href="/equipment-pad-concrete-oklahoma-city">Equipment pads</a> · <a href="/commercial-curb-and-gutter-oklahoma-city">Curb &amp; gutter</a></li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial concrete contractor</a></li>
      <li><a href="/foundation-repair-oklahoma-city">Foundation repair</a> — kept separate from general commercial slab repair</li>
    </ul>
    ${faqSection("Commercial Concrete Repair FAQ", [
      { question: "Can commercial concrete be repaired instead of replaced?", answer: "Often yes when damage is localized and the base is stable. Widespread cracking, ongoing settlement, slab flex, or failed subgrade usually push toward larger replacement." },
      { question: "Do you repair cracked commercial concrete slabs in Oklahoma City?", answer: "Yes. We evaluate cracked commercial slabs for sealing, panel repair, or partial replacement. Foundation movement belongs on foundation repair; residential driveway cracks on driveway repair; heavy industrial floor traffic damage often fits industrial concrete repair." },
      { question: "What is the difference between slab crack repair and foundation crack repair?", answer: "This page covers commercial flatwork cracks and failed panels. Foundation repair is for structural foundation movement or foundation-specific distress. FDZ does not treat every crack as a foundation job." },
      { question: "What causes commercial concrete slabs to crack or settle in Oklahoma City?", answer: "Expansive clay, poor base prep, thin slabs for the traffic, failed joint sealant, drainage problems, and heavy loading all accelerate cracking and settlement." },
      { question: "Can FDZ replace only the damaged section?", answer: "Localized panel or bay replacement may be appropriate when damage is limited and surrounding concrete and base conditions are suitable. FDZ evaluates the affected area before recommending repair or replacement." },
      { question: "Can concrete repairs be phased around facility operations?", answer: "Repairs can be planned by aisle, dock, parking bay, or other work area when site conditions allow. Scheduling around occupied operations, including potential after-hours work, can be discussed for the specific project." },
      { question: "Do you repair loading docks and parking lots?", answer: "Yes. See our loading dock concrete repair and concrete parking lot repair pages for dedicated detail." },
      { question: "How do you estimate commercial concrete repairs?", answer: "We review photos and problem details, typically walk the site, and provide a written estimate with the recommended method." },
      { question: "How do I schedule a commercial concrete repair estimate?", answer: "Call (405) 458-4805 or use the estimate form with facility type, location, affected area, problem description, photos, and desired timing." },
      { question: "Can concrete repairs be matched to the existing color and finish?", answer: "Color matching is approximate — new concrete will not perfectly match weathered existing concrete. Broom or trowel texture can usually be matched closely. Weathering tends to bring repairs closer in appearance over time." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/industrial-concrete-repair-oklahoma-city">Industrial concrete repair</a> — Heavy-use floors, forklift joint failure, and industrial slab repair.</li>
      <li><a href="/concrete-parking-lot-repair-oklahoma-city">Concrete parking lot repair</a> — Panel replacement, joint sealing, and trip hazard grinding.</li>
      <li><a href="/foundation-repair-oklahoma-city">Foundation repair</a> — Structural foundation movement — kept separate from general commercial slab repair.</li>
      <li><a href="/concrete-maintenance-oklahoma-city">Concrete maintenance</a> — Joint sealing and ongoing commercial slab care that prevents small repairs from becoming replacements.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial concrete contractor in Oklahoma City</a> — New pours and commercial site flatwork.</li>
    </ul>
    <p><strong>Request a commercial concrete repair estimate:</strong> <a href="/?from=commercial-concrete-repair-oklahoma-city#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/oklahoma-city-concrete": `
    <h1>Oklahoma City Concrete &amp; Sewer Line Contractor</h1>
    <p>FDZ Construction LLC is based in Oklahoma City — so OKC itself is the area we work most. We pour driveways, patios, slabs, foundations, and commercial concrete across the city. Owner David Fernandez leads the crew on concrete and sewer line work.</p>
    <h2>Oklahoma City Soil Conditions</h2>
    <p>Oklahoma City broadly shares the metro's Permian-age clay and shale base. The terrain is mostly flat, and the North Canadian River corridor runs through the city, so drainage planning matters most on low-lying lots near the river and its tributaries. Because conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city.</p>
    <h2>Neighborhoods Served</h2>
    <p>We work throughout Oklahoma City, including Nichols Hills and surrounding areas.</p>
    <h2>Services Available in Oklahoma City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete driveway installation" },
      { href: "/patios-oklahoma-city", label: "Patios, slabs & stamped concrete" },
      { href: "/foundations-oklahoma-city", label: "Concrete foundations" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
    ])}
    ${metroCitySewerBlock("Oklahoma City", "Many established OKC neighborhoods still run on original clay or cast-iron sewer lines that shift and crack as Permian clay swells and shrinks each season. When a line fails under a driveway or slab, we repair the pipe and restore the concrete ourselves — one crew, no second contractor.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Oklahoma City, or just concrete?", answer: "Both. We're a concrete contractor that also handles sewer line repair, replacement, and installation — including driveway or slab restoration. We serve Oklahoma City with the same crew and standards as the rest of the OKC metro." },
      { question: "How much does sewer line repair cost in Oklahoma City?", answer: "Camera inspection is $200–$500. Estimated job prices in the OKC metro are spot repair $1,000–$3,500, traditional excavation repair $1,500–$7,000, trenchless pipe bursting $4,000–$12,000, and full line replacement $8,000–$15,000. Those job prices are estimates; the written quote after the camera inspection sets the actual scope and price. FDZ quotes include concrete restoration when a driveway or slab is disturbed." },
      { question: "Do you work throughout all of Oklahoma City?", answer: "Yes. Oklahoma City is our home market. Because the city is large and conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city." },
      { question: "How much does concrete cost in Oklahoma City?", answer: "Standard driveways and slabs generally run $6–$10 per square foot and foundation work $9–$14, depending on thickness, reinforcement, and site conditions. We give an exact price after an on-site look — no phone quotes." },
      { question: "Why does base prep matter so much in Oklahoma City?", answer: "OKC sits on expansive Permian clay that swells when wet and shrinks in drought. Without a properly excavated, compacted aggregate base and adequate reinforcement, concrete is far more likely to crack and move over time." },
    ])}
    <p><strong>Drive time:</strong> We're based in Oklahoma City and serve the metro from here.</p>
    ${renderEstimateFormHtml({ fromPath: "/oklahoma-city-concrete" })}
    ${trustParagraph()}
  `,

  "/edmond-concrete": `
    <h1>Edmond Concrete &amp; Sewer Line Contractor</h1>
    <p>Edmond is one of the areas we work most often outside Oklahoma City. We pour driveways, patios, slabs, foundations, and retaining walls for Edmond homeowners and builders across Oklahoma County.</p>
    <h2>Edmond's Unique Terrain</h2>
    <p>Edmond sits on the northern part of the Garber-Wellington aquifer, where the underlying formations carry more sandstone than the rest of the metro. In practice, soil here can shift between sandy and clay-heavy across a single lot, and the terrain has more rolling grade than much of the flat OKC metro. That combination makes grading and drainage planning a bigger factor here than on flatter sites — so we evaluate each lot rather than applying a one-size approach.</p>
    <h2>Services Available in Edmond</h2>
    ${linkList([
      { href: "/driveways-edmond", label: "Concrete driveways in Edmond" },
      { href: "/patios-edmond", label: "Patios & slabs in Edmond" },
      { href: "/foundations-edmond", label: "Foundations in Edmond" },
      { href: "/retaining-walls-edmond", label: "Retaining walls in Edmond" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
    ])}
    ${metroCitySewerBlock("Edmond", "Edmond's mix of 1970s–90s housing and newer subdivisions means sewer lines range from aging clay pipe to modern PVC — and the area's sandy-to-clay soil shifts enough to stress buried lines over time. We handle sewer repair across Edmond with the same crew that restores driveways and slabs afterward.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Edmond, or just concrete?", answer: "Both. We handle sewer line repair, replacement, and installation in Edmond — including concrete restoration when a driveway or slab is disturbed — with the same crew we use across the OKC metro." },
      { question: "Does Edmond's terrain affect foundation or retaining wall work?", answer: "Yes — more than on flatter parts of the metro. The mix of sandy and clay soil and the rolling grade mean we evaluate each site and plan grading and drainage accordingly, rather than applying a one-size approach." },
      { question: "How much does concrete cost in Edmond?", answer: "Edmond pricing follows our OKC metro rates: roughly $6–$10 per square foot for standard driveways and slabs and $9–$14 for foundation work, with an exact price after an on-site estimate." },
      { question: "Do you coordinate with builders on new construction in Edmond?", answer: "Yes — we handle foundation pours, driveways, and flatwork for new builds and coordinate scheduling with builders and inspectors." },
    ])}
    <p><strong>Drive time:</strong> Edmond is about 30–40 minutes north of Oklahoma City, across the metro — still one of the areas we serve most regularly.</p>
    ${trustParagraph()}
  `,

  "/yukon-oklahoma-concrete": `
    <h1>${yukonConcrete.heading}</h1>
    <p>${yukonConcrete.intro}</p>
    <h2>Yukon Soil and Site Conditions</h2>
    <p>Yukon has flatter terrain than Edmond, on the same expansive clay base shared across the region. A lot of the work here is in newer subdivisions built on graded former agricultural land — and on those sites, the quality of the fill and the compaction done during the original grading matters as much as the native soil itself. We check compaction and drainage on these lots specifically.</p>
    <h2>Services Available in Yukon</h2>
    ${linkList([
      { href: "/driveways-yukon", label: "Concrete driveways in Yukon" },
      { href: "/patios-yukon", label: "Patios & slabs in Yukon" },
      { href: "/foundations-yukon", label: "Foundations in Yukon" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
      { href: "/commercial-concrete-repair-oklahoma-city", label: "Commercial Concrete Repair" },
      { href: "/concrete-parking-lot-repair-oklahoma-city", label: "Concrete Parking Lot Repair" },
    ])}
    ${metroCitySewerBlock("Yukon", "Yukon's fast-growing subdivisions sit on the same expansive clay as the rest of the metro — and sewer lines under driveways are often the first thing to move when that clay swells after heavy rain. We repair and replace lines across Yukon and restore the disturbed concrete in the same job.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Yukon, or just concrete?", answer: "Both. We serve Yukon homeowners with sewer line repair and concrete restoration handled by one crew — the same approach we use across the OKC metro." },
      { question: "Is new-construction concrete different in growing areas like Yukon?", answer: "The base-prep considerations differ slightly, since lots are often on graded fill rather than undisturbed native soil. We check compaction and drainage on these sites specifically before we pour." },
      { question: "How much does concrete cost in Yukon?", answer: "Yukon pricing matches our OKC metro rates — roughly $6–$10 per square foot for standard driveways and slabs — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Yukon is about 20–25 minutes west of Oklahoma City.</p>
    ${trustParagraph()}
    ${yukonEstimateHtml}
  `,

  "/norman-ok-concrete": `
    <h1>Norman Concrete &amp; Sewer Line Contractor</h1>
    <p>FDZ Construction serves Norman and Cleveland County with driveways, patios, slabs, foundations, and retaining walls — the same crew and standards we bring across the OKC metro.</p>
    <h2>Norman Terrain and Drainage</h2>
    <p>Norman's position along the Canadian River means some lots sit on sandier, river-influenced soil that can transition to denser clay within a short distance on the same property. That's a different base-prep call than the more uniform clay sites elsewhere in the metro, so we assess the soil on each lot before we pour.</p>
    <h2>Services Available in Norman</h2>
    ${linkList([
      { href: "/driveways-norman", label: "Concrete driveways in Norman" },
      { href: "/patios-norman", label: "Patios & slabs in Norman" },
      { href: "/foundations-norman", label: "Foundations in Norman" },
      { href: "/retaining-walls-norman", label: "Retaining walls in Norman" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
    ])}
    ${metroCitySewerBlock("Norman", "Norman's older homes near campus and along the Canadian River corridor often sit on sandier soil that transitions to dense clay within the same lot — conditions that stress sewer joints and encourage root intrusion. We serve Norman homeowners with sewer line repair and concrete restoration handled by one crew.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Norman, or just concrete?", answer: "Both. We handle sewer line repair, replacement, and installation in Norman — including driveway and slab restoration — with one crew." },
      { question: "What's different about pouring concrete in Norman?", answer: "Norman's spot along the Canadian River means some lots have sandier, river-influenced soil that can change to denser clay across a short distance. We evaluate the soil and adjust base prep for each site rather than assuming one approach." },
      { question: "How much does concrete cost in Norman?", answer: "Norman pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work and $9–$14 for foundations — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Norman is about 20–25 minutes south of Oklahoma City.</p>
    ${trustParagraph()}
  `,

  "/moore-oklahoma-concrete": `
    <h1>Moore Concrete &amp; Sewer Line Contractor</h1>
    <p>Moore, just south of Oklahoma City in Cleveland County, is one of the closest areas we serve. We pour driveways, patios, slabs, foundations, and sidewalks for Moore homeowners.</p>
    <h2>Moore Terrain and Drainage</h2>
    <p>Moore sits on flat terrain over the same expansive clay base found across the metro, with limited natural runoff in low-lying areas. That makes proper slope-to-drain detailing matter more here than on higher ground — we grade every slab and driveway to move water away from the structure.</p>
    <h2>Services Available in Moore</h2>
    ${linkList([
      { href: "/driveways-moore", label: "Concrete driveways in Moore" },
      { href: "/patios-moore", label: "Patios & slabs in Moore" },
      { href: "/foundations-oklahoma-city", label: "Concrete foundations" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
    ])}
    ${metroCitySewerBlock("Moore", "Much of Moore's housing stock dates to the 1980s–90s, when clay and cast-iron sewer lines were standard — and repeated storm saturation on flat clay lots can accelerate line sagging and joint failure. We repair sewer lines across Moore and restore driveways and slabs in the same job.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Moore, or just concrete?", answer: "Both. We repair and replace sewer lines across Moore and restore disturbed concrete with the same crew." },
      { question: "Why does drainage matter so much in Moore?", answer: "Moore's flat terrain and clay soil mean water doesn't drain away on its own in low-lying areas. We grade slabs and driveways with a slope that moves water away from the structure, which is critical to preventing pooling and long-term concrete and foundation problems." },
      { question: "How much does concrete cost in Moore?", answer: "Moore pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs and $9–$14 for foundations — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Moore is among the closest areas we serve, just south of Oklahoma City.</p>
    ${trustParagraph()}
  `,

  "/mustang-oklahoma-concrete": `
    <h1>${mustangConcrete.heading}</h1>
    <p>${mustangOpeningHtml}</p>
    <h2>Local Knowledge</h2>
    <p>${mustangConcrete.intro}</p>
    <h2>Mustang Soil and Site Conditions</h2>
    <p>Mustang shares Yukon's flatter west-metro terrain and the region's expansive clay base. Like Yukon, a lot of the work here is on newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil — so we check both before we pour.</p>
    <h2>Services Available in Mustang</h2>
    ${linkList([
      { href: "/driveways-mustang", label: "Concrete driveways in Mustang" },
      { href: "/patios-oklahoma-city", label: "Patios, slabs & stamped concrete" },
      { href: "/foundations-oklahoma-city", label: "Concrete foundations" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete services" },
      { href: "/parking-lots-oklahoma-city", label: "Concrete parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
    ])}
    ${metroCitySewerBlock("Mustang", "Mustang's mid-century neighborhoods and newer subdivisions alike sit on expansive clay — and original sewer lines under driveways are a common failure point as that soil moves. We handle repair and replacement across Mustang with our own excavation and concrete restoration crew.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Mustang, or just concrete?", answer: "Both. We handle sewer line work and concrete restoration across Mustang with one crew." },
      { question: "Do you work on new-construction lots in Mustang?", answer: "Yes. Many Mustang lots sit on graded fill rather than undisturbed native soil, so we check compaction and drainage on these sites specifically and coordinate with builders on scheduling." },
      { question: "How much does concrete cost in Mustang?", answer: "Mustang pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Mustang is about 20–25 minutes west of Oklahoma City.</p>
    ${trustParagraph()}
  `,

  "/midwest-city-oklahoma-concrete": `
    <h1>Midwest City Concrete &amp; Sewer Line Contractor</h1>
    <p>FDZ Construction serves Midwest City in eastern Oklahoma County with driveway replacement, patio slabs, sidewalk work, and foundation work.</p>
    <h2>Midwest City Terrain and Drainage</h2>
    <p>Midwest City sits along Crutcho Creek and Cherry Creek, and the area sees increased flood risk along those creeks during sustained rain, when backwater from the North Canadian River slows drainage — per the city's own floodplain information. Otherwise it shares the metro's flat, expansive clay base. For any work near those drainage corridors, grading and drainage are the priority.</p>
    <h2>Services Available in Midwest City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
    ])}
    ${metroCitySewerBlock("Midwest City", "Midwest City's post-war housing stock often still runs on original sewer lines that have had decades to settle and shift on the metro's expansive clay. Properties near Crutcho Creek and Cherry Creek see extra soil movement after heavy rain — a common trigger for sewer backups we repair across eastern Oklahoma County.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Midwest City, or just concrete?", answer: "Both. We repair sewer lines across Midwest City and restore driveways and slabs with the same crew." },
      { question: "Does flooding near Crutcho Creek or Cherry Creek affect concrete work?", answer: "It can. The city's floodplain information notes that flood risk along Crutcho Creek and Cherry Creek rises during sustained rain due to backwater from the North Canadian River. For work near those corridors we pay extra attention to grading and drainage so water moves away from the slab." },
      { question: "How much does concrete cost in Midwest City?", answer: "Midwest City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs, with tear-out of existing concrete adding to the cost — and an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Midwest City is about 15–20 minutes east of Oklahoma City.</p>
    ${trustParagraph()}
  `,

  "/del-city-oklahoma-concrete": `
    <h1>Del City Concrete &amp; Sewer Line Contractor</h1>
    <p>Del City, bordered by Midwest City and south Oklahoma City, is an area we serve with driveway replacement, patio slabs, sidewalk work, and retaining walls.</p>
    <h2>Del City Terrain and Drainage</h2>
    <p>Del City shares the same Crutcho Creek and Cherry Creek flood dynamic as neighboring Midwest City — the city's own floodplain information confirms flood risk rises along those creeks during sustained rain from North Canadian River backwater. That's relevant for any work near those drainage corridors. The terrain is otherwise flat, over the same expansive clay base as the rest of the metro.</p>
    <h2>Services Available in Del City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
      { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
    ])}
    ${metroCitySewerBlock("Del City", "Del City's older neighborhoods — many built during the Tinker-area growth years — often have original clay or cast-iron sewer lines nearing the end of their service life. The same clay soil movement that affects driveways also shifts buried pipe; we repair lines and restore concrete across Del City with one crew.")}
    ${faqSection("FAQ", [
      { question: "Do you do sewer line repair in Del City, or just concrete?", answer: "Both. We handle sewer line repair and concrete restoration across Del City with one crew." },
      { question: "Does flood risk near Crutcho Creek or Cherry Creek matter for my project?", answer: "If your property is near those drainage corridors, yes. Del City's floodplain information confirms flood risk along Crutcho Creek and Cherry Creek rises during sustained rain from North Canadian River backwater, so we prioritize grading and drainage on work in those areas." },
      { question: "How much does concrete cost in Del City?", answer: "Del City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Del City is about 15–20 minutes east of Oklahoma City, in the same general area as Midwest City.</p>
    ${trustParagraph()}
  `,

  "/stillwater-oklahoma-concrete": `
    <h1>Stillwater, OK Concrete &amp; Sewer Line Contractor</h1>
    <p>FDZ Construction LLC is based in south Oklahoma City, but we've completed concrete and sewer line projects for Stillwater homeowners — both are part of the work we actually do here, not just a metro-only sideline. Stillwater's housing stock is a mix of older, near-campus homes and student rental properties around Oklahoma State University alongside newer construction on the edges of town — we work on both, from a rental property's driveway repair to a new-build sewer line install.</p>
    <h2>Stillwater Terrain and Soil</h2>
    <p>Stillwater sits in Payne County's Sandstone Hills country along the Cimarron River — a different geologic base than the Permian clay and shale under the OKC metro. But the surface soils around Stillwater are still expansive clay loams (Masham silty clay loam is common in the area) that swell and shrink with moisture much the same way OKC's clay does, which is why base prep and drainage still matter here just as much as anywhere else we work.</p>
    <h2>Concrete Services in Stillwater</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
      { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
    ])}
    <h2>Sewer Line Repair &amp; Installation in Stillwater</h2>
    <p>FDZ Construction handles sewer line repair, replacement, and new installation for Stillwater homeowners and rental property owners — using the same one-crew approach we use across the OKC metro: we handle the excavation and the concrete restoration ourselves, so you're not coordinating a plumber and a separate concrete contractor.</p>
    <ul>
      <li><strong>Trenchless Pipe Bursting</strong> — Pulls new pipe through the old pipe's path — minimal digging, ideal when the line's path is sound but the pipe itself is worn out.</li>
      <li><strong>Traditional Excavation Repair</strong> — Digs down to expose and replace a damaged section — often the right call when trenchless access isn't practical.</li>
      <li><strong>Spot Repair</strong> — Fixes one isolated damaged section without replacing the whole line — the most affordable option when it's genuinely all that's needed.</li>
      <li><strong>Full Replacement &amp; New Installation</strong> — For lines too old or damaged to repair, and for new construction that needs a line run for the first time — modern installs use PVC, rated for 50+ years.</li>
    </ul>
    <p>Signs you may need sewer line repair: slow or backed-up drains in more than one fixture, sewage odor near the yard or inside the house, gurgling sounds from toilets or drains, soggy or unusually green patches of lawn, multiple fixtures backing up at the same time, and standing water near the sewer cleanout.</p>
    <p>See the full <a href="/sewer-line-repair-oklahoma-city">sewer line repair methods, process, and FAQ</a> for more detail.</p>
    <h2>Why FDZ for Stillwater Projects</h2>
    <ul>
      <li>One crew handles both the excavation and the concrete restoration on sewer work — no coordinating two companies</li>
      <li>We're not a Stillwater company — we're based in south Oklahoma City and travel to Stillwater for scheduled projects, and we're upfront about that</li>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>2-year workmanship warranty on every project, wherever it is</li>
    </ul>
    <h2>Our Stillwater Projects</h2>
    <p>We've completed both concrete and sewer line projects for Stillwater homeowners. We don't have photos or customer reviews from those jobs published yet — this section will be updated with real Stillwater project photos and reviews as they become available.</p>
    ${faqSection("Stillwater FAQ", [
      { question: "Do you actually work in Stillwater, or just Oklahoma City?", answer: "We actually work in Stillwater — we've completed both concrete and sewer line projects there. We're based in south Oklahoma City, and Stillwater is one of the areas we travel to for scheduled projects, not just a city we mention on paper." },
      { question: "Do you charge extra for travel to Stillwater?", answer: "Because Stillwater is outside our core OKC metro service area, travel is a factor we account for in scheduling and pricing. We'll go over exactly what that means for your project when we give you a written estimate — no surprises after the fact." },
      { question: "Do you do both concrete and sewer work, or just one?", answer: "Both. We're a concrete contractor that also handles sewer line repair, replacement, and installation — including the concrete restoration that sewer work usually requires. We've done both types of projects in Stillwater." },
      { question: "How do I schedule a project if you're based in OKC?", answer: "Call (405) 458-4805 or request a free estimate — we'll go over your project, confirm we can get a crew out to Stillwater on a timeline that works, and schedule your on-site estimate from there." },
    ])}
    <p><strong>Drive time:</strong> Stillwater is about 65–75 miles from Oklahoma City — roughly an hour to 90 minutes depending on route and traffic. We serve Stillwater by scheduled appointment rather than same-day OKC-metro response.</p>
    ${trustParagraph()}
  `,

  "/retaining-walls-oklahoma-city": `
    <h1>Concrete Retaining Wall Contractors in Oklahoma City, OK</h1>
    <p>FDZ Construction LLC builds and repairs concrete retaining walls across the Oklahoma City metro. Whether you need a wall to control a sloped yard, protect a foundation from soil movement, create usable outdoor space, or manage drainage, we design each wall around your specific site conditions — not a one-size template. Licensed, bonded, and insured in Oklahoma, and every wall is backed by a 2-year workmanship warranty.</p>
    <h2>Retaining Wall Services in Oklahoma City</h2>
    <h3>New Retaining Wall Installation</h3>
    <ul>
      <li>Site evaluation for slope, soil conditions, and drainage before any design decisions</li>
      <li>Footing sized to wall height, load, and soil type</li>
      <li>Drainage planning behind the wall — gravel backfill, weep holes, French drain where needed</li>
      <li>Wall construction in poured concrete or CMU block depending on scope</li>
      <li>Backfill compacted in lifts</li>
    </ul>
    <h3>Retaining Wall Repair</h3>
    <ul>
      <li>Leaning or bowing walls are almost always a drainage failure, not a material failure — we evaluate the cause before recommending repair vs. replacement</li>
      <li>Structural stabilization where rebuild isn't warranted</li>
      <li>Drainage correction included where inadequate drainage caused the original failure</li>
    </ul>
    <h3>Poured Concrete Retaining Walls</h3>
    <ul>
      <li>Monolithic structure — no block joints to shift or crack over time</li>
      <li>Best for taller walls, higher-load applications, and sites with severe soil movement</li>
      <li>Can be formed to follow curves and grade changes</li>
    </ul>
    <h3>CMU Block Retaining Walls</h3>
    <ul>
      <li>Concrete masonry unit construction — durable and cost-effective for mid-height walls</li>
      <li>Requires the same drainage planning behind the wall as poured concrete</li>
      <li>Good choice where an engineered poured-concrete wall isn't required by height or load</li>
    </ul>
    <h3>Decorative and Landscape Walls</h3>
    <ul>
      <li>Lower-height walls for garden beds, landscape separation, and outdoor living areas</li>
      <li>Often paired with a patio or stamped concrete project</li>
      <li>Drainage still matters even on smaller walls — we don't skip it</li>
    </ul>
    <h2>Why Oklahoma City Soil Makes Retaining Walls a Critical Investment</h2>
    <p>Oklahoma's Permian-age clay and shale base is among the most expansive soil in the country. It swells significantly when wet and shrinks when dry — sometimes moving several inches across a single season. On any sloped lot, that soil movement creates lateral pressure against the wall constantly, not just during rain events. The biggest variable in retaining wall longevity in OKC isn't the wall material — it's the drainage behind it. Water pressure that builds up in the soil behind an inadequately drained wall is the leading cause of wall failure in this region.</p>
    <p>On Edmond's rolling terrain specifically — where the soil can shift between sandy and clay-heavy on the same lot — proper site evaluation before design is especially important.</p>
    <h2>Retaining Wall Types — Which Is Right for Your Project?</h2>
    <p><strong>Gravity walls</strong> hold back soil using their own weight and mass. Work well for shorter walls on moderate slopes.</p>
    <p><strong>Poured concrete walls</strong> are the most versatile option — can be formed to any shape, height, or grade. Preferred for taller walls, high-load applications, or where OKC's severe soil movement requires a monolithic structure with no joints.</p>
    <p><strong>CMU (concrete block) walls</strong> are faster to build than poured walls on smaller projects. Still requires the same drainage planning.</p>
    <p><strong>Segmental retaining walls</strong> use interlocking concrete block systems. Work well for lower-height landscape walls and garden applications. Not appropriate for high-load or tall structural walls without engineering.</p>
    <p>Note: walls over a certain height (varies by city) typically require an engineer's stamp — we confirm what's required for your specific project.</p>
    ${processSection("Our Retaining Wall Process", [
      { title: "Site evaluation", description: "We assess your slope, soil type, drainage patterns, and what the wall needs to hold back before recommending a wall type or height." },
      { title: "Drainage plan", description: "Gravel backfill depth, weep hole placement, and French drain routing are planned before construction starts — not added as an afterthought." },
      { title: "Footing", description: "Sized and poured to the depth and width required for the specific wall height and soil conditions." },
      { title: "Wall construction", description: "Poured concrete or CMU block, built per the drainage plan and footing design." },
      { title: "Backfill and final inspection", description: "Compacted in lifts to avoid point-loading. We walk through the finished wall with you before we leave." },
    ])}
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ for Retaining Walls</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years building retaining walls in OKC's expansive clay soil</li>
      <li>2-year workmanship warranty on all retaining wall work</li>
      <li>We evaluate drainage before design — not after the wall fails</li>
      <li>Free on-site estimates, no pressure</li>
      <li>Based in Oklahoma City — serving OKC, Edmond, Yukon, Norman, Moore, Mustang, Midwest City, Del City</li>
    </ul>
    <h2>How Much Does a Retaining Wall Cost in Oklahoma City?</h2>
    <p>Cost depends on wall height and length, material choice (poured concrete vs. CMU block), site drainage requirements, soil conditions, equipment access, and whether engineering is required. We provide free on-site estimates with a clear scope before any work begins. Call <a href="tel:4054584805">(405) 458-4805</a> or email <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a>.</p>
    <h2>Real Retaining Wall Projects in the OKC Metro</h2>
    <p>A tall poured concrete retaining wall we built for a new residential construction project in Oklahoma City — a clean monolithic structure engineered for the lateral pressure of OKC's expansive clay soil with drainage behind the wall. <a href="/our-projects">See more completed projects across the OKC metro</a>.</p>
    <img src="/images/projects/poured-concrete-retaining-wall-oklahoma-city.jpg" alt="Tall poured concrete retaining wall in Oklahoma City — monolithic structure supporting new residential construction on expansive clay soil" loading="lazy" />
    ${faqSection("Retaining Wall FAQ", [
      { question: "Why do retaining walls fail?", answer: "Almost always drainage — not the wall material or age. Water pressure builds up in the soil behind a wall with inadequate drainage and pushes it out of place over time." },
      { question: "How tall can a retaining wall be before it needs an engineer?", answer: "This varies by city and jurisdiction. Many areas require an engineer's stamp for walls over 4 feet. We confirm the specific requirement for your project location before work begins." },
      { question: "What's the difference between poured concrete and CMU block for a retaining wall?", answer: "Poured concrete creates a monolithic structure with no joints — preferred for taller walls, higher loads, or severe soil movement. CMU block is faster and more cost-effective for mid-height walls. Both need proper drainage behind them." },
      { question: "How long does a concrete retaining wall last?", answer: "A properly built wall with adequate drainage can last 50+ years. The drainage is the variable — a well-drained wall outlasts a poorly drained one by decades regardless of material." },
      { question: "Do you handle the drainage behind the wall or just the wall itself?", answer: "We handle the full scope — drainage plan, gravel backfill, weep holes, French drain where needed, and the wall itself." },
      { question: "Can you repair a leaning retaining wall, or does it need to be replaced?", answer: "Depends on how far it's leaned and what caused it. Minor movement with a repairable drainage issue can often be stabilized. Significant structural displacement usually requires rebuild. We evaluate this on-site at no charge." },
      { question: "Do you build retaining walls for commercial properties?", answer: "Yes — we build retaining walls for commercial sites, parking lots, and site development projects across the OKC metro." },
      { question: "How much does a retaining wall cost in Oklahoma City?", answer: "Cost depends on wall height and length, material choice, drainage requirements, soil conditions, and whether engineering is required. We provide free on-site estimates — call (405) 458-4805." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/foundations-oklahoma-city">Concrete foundations</a> — Retaining walls and foundations often go hand-in-hand on sloped lots.</li>
      <li><a href="/foundation-repair-oklahoma-city">Foundation repair</a> — When grade and drainage issues show up as foundation cracks rather than a failing wall.</li>
      <li><a href="/patios-oklahoma-city">Patios &amp; stamped concrete</a> — Landscape walls frequently paired with patio or outdoor living projects.</li>
      <li><a href="/driveways-oklahoma-city">Concrete driveway installation</a> — Grade changes at driveways often need a wall and a new pour together.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial concrete services</a> — Retaining walls for commercial site development.</li>
      <li>Local retaining wall pages: <a href="/retaining-walls-edmond">Edmond</a>, <a href="/retaining-walls-norman">Norman</a>.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/our-approach": `
    <h1>Self-Performed Concrete &amp; Sewer Line.</h1>
    <p>FDZ Construction LLC self-performs concrete, sewer line repair and installation, skid steer site work, and excavator work across the Oklahoma City metro — our own crew and equipment, no subcontractors on those scopes.</p>
    <h2>Concrete — Self-Performed</h2>
    <p>Driveways, patios, slabs, foundations, retaining walls, sidewalks, and commercial concrete are poured and finished by our own employees.</p>
    <h2>Sewer Line — Same Crew</h2>
    <p>We excavate, complete the pipe work, and restore the concrete ourselves. See our <a href="/sewer-line-repair-oklahoma-city">sewer line repair page</a>.</p>
    <h2>Site Work</h2>
    <p><a href="/skid-steer-services-oklahoma-city">Skid steer</a> and <a href="/excavator-services-oklahoma-city">excavator</a> services are self-performed by the same crew.</p>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a></p>
    ${trustParagraph()}
  `,

  "/bollard-installation-oklahoma-city": `
    <h1>Bollard Installation in Oklahoma City</h1>
    <p>FDZ Construction installs concrete-set bollards for commercial properties, warehouses, distribution centers, retail storefronts, dumpster enclosures, dock areas, and drive-through facilities across the Oklahoma City metro. We handle core drilling, sleeve installation, and replacement in both new concrete and existing slabs. This page is for facility managers, property managers, GCs, and business owners who need a written bollard estimate.</p>
    <h2>Who This Page Is For</h2>
    <ul>
      <li>Retail storefronts and drive-through lanes</li>
      <li>Dumpster enclosure entries and corners</li>
      <li>Dock doors, overhead doors, and equipment pads</li>
      <li>New install, replacement, or a perimeter run</li>
    </ul>
    <h2>Bollard Installation Services in Oklahoma City</h2>
    <h3>Core Drilling &amp; Sleeve Installation</h3>
    <ul>
      <li>Core drill existing concrete to bollard sleeve diameter — typically 6" to 10" depending on bollard size</li>
      <li>Set sleeve with proper depth (typically 36"–48" for standard bollards)</li>
      <li>Pour non-shrink grout or concrete around the sleeve and finish flush with the existing slab</li>
    </ul>
    <h3>New Install, Replacement &amp; Perimeter Runs</h3>
    <ul>
      <li>New bollard installation in new slabs or existing concrete</li>
      <li>Replacement of damaged or missing bollards</li>
      <li>Dumpster enclosure, dock area, storefront, and drive-through protective bollards</li>
      <li>Equipment-pad bollards around generators, HVAC units, and transformers</li>
    </ul>
    <h2>Access, Occupied Sites, and Coordination</h2>
    <p>Bollard work is affected by whether we are core-drilling an existing slab or pouring a new base, whether a concrete truck or core drill can reach the locations, and whether the site has to stay open. We review those conditions before pricing. COI is available on request. Phased scheduling and after-hours options can be discussed when a facility has to stay open — planned per project, not a promised response window.</p>
    <h2>What We Need to Quote</h2>
    <p>Include the site address, how many bollards, new install versus replacement, whether the slab already exists, vehicle access, and any occupied-site constraints. Photos or a simple layout help. We can install owner-supplied bollards or source them as part of the scope. <a href="/?from=bollard-installation-oklahoma-city#estimate">Request a bollard installation estimate</a>.</p>
    <h2>Local Considerations for OKC Commercial Sites</h2>
    <p>Oklahoma City commercial properties along major retail corridors face higher vehicle impact risk from drive-through traffic, delivery trucks, and parking lot incidents. OKC clay soil also creates uneven settlement around bollard bases set in inadequately prepared sub-base — proper sleeve installation and compacted backfill prevent lean and tip-over over time.</p>
    <h2>Related Commercial Services</h2>
    <ul>
      <li><a href="/dumpster-pad-concrete-oklahoma-city">Dumpster pad concrete</a></li>
      <li><a href="/loading-dock-concrete-repair-oklahoma-city">Loading dock concrete repair</a></li>
      <li><a href="/equipment-pad-concrete-oklahoma-city">Equipment pad concrete</a></li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial concrete services</a></li>
    </ul>
    ${faqSection("Bollard Installation FAQ", [
      { question: "How deep should a bollard be set in concrete?", answer: "Standard bollards should be set 36\"–48\" below grade in a concrete sleeve. Shallower installation reduces impact resistance. FDZ sets bollards at proper depth for the sleeve — not an invented site impact rating." },
      { question: "Can you core drill bollards into existing concrete?", answer: "Yes. Diamond core drilling allows precise holes to the correct sleeve diameter in existing slabs without damaging the surrounding concrete. Most bollards can be installed in existing concrete in one day." },
      { question: "What type of bollard is best for storefronts?", answer: "For storefronts, 4\"–6\" diameter steel pipe bollards set in concrete sleeves are standard. Decorative covers are available in various colors and finishes. The bollard type matters less than the depth and quality of the concrete sleeve." },
      { question: "Do you install bollards around dumpster enclosures?", answer: "Yes. We install bollards at dumpster enclosure entries and corners to protect enclosure walls from collection trucks. We also pour the dumpster pad itself — see our dumpster pad page for full details." },
      { question: "How long does bollard installation take?", answer: "Single bollard installations typically complete in one day, including core drilling and concrete. Multi-bollard projects and new bases may require concrete cure time before bollards are set — typically 24–48 hours." },
      { question: "Do you work as a sub-contractor for bollard installation on GC projects?", answer: "Yes. FDZ provides COI and bonding documentation for the bid process and coordinates with GC schedules on commercial sites. Call (405) 458-4805 to discuss." },
    ])}
    <p><strong>Request a bollard installation estimate:</strong> <a href="/?from=bollard-installation-oklahoma-city#estimate">Estimate form</a> · <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/our-projects": `
    <h1>Our Concrete Work Across Oklahoma</h1>
    <p>Real jobs for Oklahoma City homeowners and businesses — <a href="/driveways-oklahoma-city">concrete driveways</a>, <a href="/patios-oklahoma-city">patios and stamped concrete</a>, foundations, retaining walls, sidewalks, and commercial pours by FDZ Construction LLC. Licensed, bonded &amp; insured. Call (405) 458-4805 for a free estimate.</p>
    <h2>Featured Projects</h2>
    <h3>Star Spencer High School — Spencer, Oklahoma</h3>
    <p>New concrete stairs and <a href="/sidewalks-oklahoma-city">sidewalks with ADA-compliant ramps</a> for the school district — precision grading, reinforcement, and accessibility compliance completed on schedule.</p>
    <h3>Shop Foundation Pour — Rosedale, Oklahoma</h3>
    <p>Self-performed foundation pour with video documentation of forming, reinforcement, and placement by our own crew.</p>
    <h2>Recent Concrete Projects Across the Metro</h2>
    <ul>
      <li><strong>Pier foundation — Edmond, OK</strong> — Piers drilled to undisturbed soil on a fill lot, tied to a thickened slab.</li>
      <li><strong>Poured concrete retaining wall — Oklahoma City</strong> — Monolithic wall engineered for OKC clay lateral pressure with drainage behind the wall.</li>
      <li><strong>Forklift ramp — Guthrie, OK</strong> — Reinforced warehouse ramp poured inside a live facility, power-trowel finished flush with the existing floor.</li>
      <li><strong>Residential foundation — Piedmont, OK</strong> — Slab-on-grade on Oklahoma red clay with compacted aggregate base and engineered rebar.</li>
      <li><strong>New driveway &amp; approach — Edmond, OK</strong> — 6" thick, 24' wide concrete drive with a new approach.</li>
      <li><strong>Stamped patio — Norman, OK</strong> — Ashlar slate pattern with custom release and matte sealer.</li>
      <li><strong>Concrete patio &amp; decorative paver walkway — Norman, OK</strong> — 12' × 12' broom-finish slab, 8" thick, with six 36" × 24" concrete pavers, picture-frame borders, and decorative river rock. Example project budget: $8,200 (not a quote; your written estimate sets the final scope and price).</li>
      <li><strong>Residential foundation — Mustang, OK</strong> — Slab-on-grade for a new residential build.</li>
      <li><strong>Backyard patio — Moore, OK</strong> — Broom-finish patio graded away from the structure.</li>
      <li><strong>City ROW sidewalk — Edmond, OK</strong> — Permitted sidewalk replacement with ADA curb ramp.</li>
    </ul>
    <h2>Services Behind This Work</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete driveways" },
      { href: "/foundations-oklahoma-city", label: "Concrete foundations" },
      { href: "/retaining-walls-oklahoma-city", label: "Retaining walls" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial concrete" },
      { href: "/parking-lots-oklahoma-city", label: "Parking lots" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, curb & gutter" },
    ])}
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a></p>
    ${trustParagraph()}
  `,

  "/blog": renderBlogIndexHtml(prerenderH1("/blog")),
  ...Object.fromEntries(
    BLOG_POSTS.map((post) => [
      `/blog/${post.slug}`,
      renderBlogPostHtml(post, prerenderH1(`/blog/${post.slug}`)),
    ]),
  ),
  "/ada-concrete-ramps-oklahoma-city": renderServicePageHtml(
    adaRampsContent,
    prerenderH1("/ada-concrete-ramps-oklahoma-city"),
  ),
  "/commercial-curb-and-gutter-oklahoma-city": renderServicePageHtml(
    commercialCurbGutterContent,
    prerenderH1("/commercial-curb-and-gutter-oklahoma-city"),
  ),
  "/parking-lots-oklahoma-city": renderServicePageHtml(
    parkingLotConstructionContent,
    prerenderH1("/parking-lots-oklahoma-city"),
  ),
  "/concrete-parking-lot-repair-oklahoma-city": renderServicePageHtml(
    parkingLotRepairContent,
    prerenderH1("/concrete-parking-lot-repair-oklahoma-city"),
  ),
  "/loading-dock-concrete-repair-oklahoma-city": renderServicePageHtml(
    loadingDockRepairContent,
    prerenderH1("/loading-dock-concrete-repair-oklahoma-city"),
  ),
  "/dock-leveler-pit-concrete-oklahoma-city": renderServicePageHtml(
    dockLevelerPitsContent,
    prerenderH1("/dock-leveler-pit-concrete-oklahoma-city"),
  ),
  "/warehouse-slab-repair-oklahoma-city": renderServicePageHtml(
    warehouseSlabContent,
    prerenderH1("/warehouse-slab-repair-oklahoma-city"),
  ),
  "/industrial-concrete-repair-oklahoma-city": renderServicePageHtml(
    industrialRepairContent,
    prerenderH1("/industrial-concrete-repair-oklahoma-city"),
  ),
  "/equipment-pad-concrete-oklahoma-city": renderServicePageHtml(
    equipmentPadsContent,
    prerenderH1("/equipment-pad-concrete-oklahoma-city"),
  ),
  "/truck-court-concrete-oklahoma-city": renderServicePageHtml(
    truckCourtsContent,
    prerenderH1("/truck-court-concrete-oklahoma-city"),
  ),
  "/loading-dock-construction-oklahoma-city": renderServicePageHtml(
    loadingDockConstructionContent,
    prerenderH1("/loading-dock-construction-oklahoma-city"),
  ),
  "/loading-dock-replacement-oklahoma-city": renderServicePageHtml(
    loadingDockReplacementContent,
    prerenderH1("/loading-dock-replacement-oklahoma-city"),
  ),
  "/crane-foundation-installation-oklahoma-city": renderServicePageHtml(
    craneFoundationContent,
    prerenderH1("/crane-foundation-installation-oklahoma-city"),
  ),
  "/driveway-repair-oklahoma-city": renderRepairServiceHtml(
    repairPages["driveway-repair-oklahoma-city"],
    prerenderH1("/driveway-repair-oklahoma-city"),
  ),
  "/foundation-repair-oklahoma-city": renderRepairServiceHtml(
    repairPages["foundation-repair-oklahoma-city"],
    prerenderH1("/foundation-repair-oklahoma-city"),
  ),
  "/soil-stabilization-oklahoma-city": renderServicePageHtml(
    soilStabilizationContent,
    prerenderH1("/soil-stabilization-oklahoma-city"),
  ),
  "/retail-restaurant-concrete-oklahoma-city": renderServicePageHtml(
    retailRestaurantContent,
    prerenderH1("/retail-restaurant-concrete-oklahoma-city"),
  ),
  ...Object.fromEntries(
    Object.values(serviceInCityPages).map((page) => [
      page.path,
      renderServiceInCityHtml(page, prerenderH1(page.path)),
    ]),
  ),
  "/pool-deck-oklahoma-city": renderPoolDeckHtml(
    poolDeckContent,
    prerenderH1("/pool-deck-oklahoma-city"),
  ),
  "/dumpster-pad-concrete-oklahoma-city": renderServicePageHtml(
    dumpsterPadsContent,
    prerenderH1("/dumpster-pad-concrete-oklahoma-city"),
  ),
  "/polished-concrete-oklahoma-city": renderServicePageHtml(
    polishedConcreteContent,
    prerenderH1("/polished-concrete-oklahoma-city"),
  ),
  "/epoxy-floor-coatings-oklahoma-city": renderServicePageHtml(
    epoxyFloorCoatingsContent,
    prerenderH1("/epoxy-floor-coatings-oklahoma-city"),
  ),
  "/tilt-wall-concrete-oklahoma-city": renderServicePageHtml(
    tiltWallConcreteContent,
    prerenderH1("/tilt-wall-concrete-oklahoma-city"),
  ),
  "/concrete-maintenance-oklahoma-city": renderServicePageHtml(
    concreteMaintenanceContent,
    prerenderH1("/concrete-maintenance-oklahoma-city"),
  ),
  ...Object.fromEntries(
    WICHITA_PAGES.map((page) => [page.path, renderWichitaPageHtml(page, prerenderH1(page.path))]),
  ),
};

export function getPrerenderBody(path: string): string | undefined {
  return prerenderBodies[path];
}

export function getSkipFooterNav(path: string): boolean {
  return path === "/";
}
