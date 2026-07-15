import {
  TRUST_LINE,
  faqSection,
  linkList,
  processSection,
  trustParagraph,
} from "./prerender-helpers";

const SERVICE_LINKS = [
  { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
  { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
  { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
  { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
  { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
  { href: "/sewer-line-repair-oklahoma-city", label: "Sewer Line Repair & Installation" },
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
    <p>FDZ Construction LLC self-performs every concrete and sewer line job in the OKC metro — our own crew, our own equipment, start to finish. Based in south Oklahoma City at 7004 S Indiana Ave. Licensed, bonded &amp; insured. No subcontractors on concrete or sewer work.</p>
    ${trustParagraph()}
    <h2>Concrete Services</h2>
    ${linkList(SERVICE_LINKS)}
    <h2>Sewer Line Repair &amp; Installation</h2>
    <p><a href="/sewer-line-repair-oklahoma-city">Sewer line repair, replacement &amp; installation</a> — plus driveway, sidewalk, and slab restoration by the same crew that did the digging.</p>
    <h2>Why Oklahoma City Soil Matters</h2>
    <p>The OKC metro sits on Permian-age clay and shale that expands when wet and shrinks in drought. That movement stresses driveways, foundations, and buried sewer pipe alike — which is why proper sub-base compaction, reinforcement, and drainage grading matter on every job.</p>
    <h2>Service Areas</h2>
    ${linkList(CITY_LINKS)}
    <p><strong>Contact:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
  `,

  "/driveways-oklahoma-city": `
    <h1>Concrete Driveway Installation in Oklahoma City, OK</h1>
    <p>FDZ Construction LLC provides professional concrete driveway installation in Oklahoma City and surrounding areas. We build durable, long-lasting driveways for homeowners, builders, and property owners who need dependable concrete work done right. Every project starts with proper ground preparation and includes reinforcement for Oklahoma clay. Based at 7004 S Indiana Ave in south OKC — about 20–25 min from Yukon and 30–40 min from Edmond.</p>
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
      <li>Based in south OKC — fastest response time in the metro</li>
      <li>Free on-site estimates, no pressure</li>
      <li>We evaluate your specific site conditions — OKC's expansive clay soil means base prep decisions aren't one-size-fits-all</li>
    </ul>
    <h2>Oklahoma City Soil and Your Driveway</h2>
    <p>Oklahoma's expansive red clay swells and shrinks with moisture, which is why proper sub-base prep — a compacted gravel base — matters far more here than in stable-soil regions. Skipping or shortcutting it is the single most common cause of driveway cracking in the OKC metro.</p>
    <h2>How Much Does a Concrete Driveway Cost in Oklahoma City?</h2>
    <p>Costs vary by square footage, site conditions, finish type, and whether existing concrete needs removal. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
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
      <li><a href="/patios-oklahoma-city">Patios &amp; Stamped Concrete</a> — Backyard patios, decorative stamped surfaces, and outdoor living slabs.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Parking lots, warehouse floors, loading docks, and site concrete for commercial properties.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; Curb and Gutter</a> — Walkways, ADA curb ramps, and curb work to complete your property.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/sewer-line-repair-oklahoma-city": `
    <h1>One Crew. Sewer Repair &amp; Concrete Restoration.</h1>
    <p>Most sewer repairs mean digging through a driveway, sidewalk, or slab — then finding a second contractor to pour it back. FDZ Construction does the excavation and the concrete restoration with the same crew, so nothing gets left half-finished. We handle sewer line repair, replacement, and new-line installation for homeowners across the OKC metro.</p>
    <h2>Typical Sewer Line Costs in Oklahoma City (2026)</h2>
    <p>OKC metro ballpark ranges — your written quote after a camera inspection is the real number. FDZ quotes include concrete restoration when a driveway or slab is disturbed.</p>
    <ul>
      <li>Camera inspection: $200 – $500</li>
      <li>Spot repair: $1,000 – $3,500</li>
      <li>Traditional excavation repair: $1,500 – $7,000</li>
      <li>Trenchless pipe bursting: $4,000 – $12,000</li>
      <li>Full sewer line replacement: $3,000 – $15,000</li>
      <li>New sewer line installation: $2,500 – $8,000+</li>
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
      { title: "Camera inspection", description: "We run a camera through the line first. Guessing at what's wrong underground leads to the wrong fix." },
      { title: "Diagnosis & quote", description: "Based on what the camera shows, we tell you plainly whether this is a spot repair, a full repair, or a replacement — and give you a written quote before any digging starts." },
      { title: "Repair or replacement", description: "We excavate and complete the pipe work using the method that matches what the inspection found." },
      { title: "Concrete & surface restoration", description: "Same crew — we restore the driveway, sidewalk, or slab that was disturbed, instead of leaving you to find a second contractor." },
      { title: "Final walkthrough", description: "We walk the finished work with you before we leave — the pipe repair and the concrete restoration, done together." },
    ])}
    <h2>Why Oklahoma City Homeowners Choose FDZ for Sewer Work</h2>
    <ul>
      <li>One crew handles both the excavation and the concrete restoration — no coordinating two companies</li>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all sewer line work</li>
      <li>Free on-site estimates, no phone quotes</li>
      <li>Based in south OKC — fastest response time in the metro</li>
    </ul>
    ${faqSection("Sewer Line Repair FAQ", [
      { question: "How do I know if I need sewer repair or full replacement?", answer: "A camera inspection tells us for certain. Isolated damage on an otherwise sound line is usually a spot or trenchless repair. Lines that are old, degraded along their length, or made of clay or cast iron nearing the end of their service life are usually better replaced than repaired." },
      { question: "Does sewer line repair mean my driveway or yard gets torn up?", answer: "Trenchless pipe bursting avoids a long open trench and only needs two access pits. Traditional excavation repair does require digging down to the damaged section, which often means cutting into a driveway, sidewalk, or slab — which is why we handle the concrete restoration ourselves." },
      { question: "How long does sewer line replacement take?", answer: "It depends on the length of the line, the method used, and how much concrete restoration is involved. We give you a specific timeline as part of your written quote after the camera inspection." },
      { question: "Do you handle the concrete repair after the sewer work?", answer: "Yes — we're a concrete contractor that also does sewer line excavation, repair, and installation, so the concrete restoration is done by the same crew that did the digging." },
      { question: "Do you install sewer lines for new construction or additions?", answer: "Yes — we run new sewer lines for new construction and additions in addition to repairing and replacing existing lines." },
      { question: "What causes sewer line damage in Oklahoma City specifically?", answer: "Tree root intrusion, aging or deteriorated pipe material (especially older clay or cast iron), and ground movement from OKC's expansive clay and shale, which can shift pipe alignment and cause sections of the line to sag." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/driveways-oklahoma-city">Concrete Driveways</a> — Restoration after excavation frequently means a driveway repair or full replacement.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; Curb and Gutter</a> — Sidewalk restoration after sewer line access.</li>
      <li><a href="/foundations-oklahoma-city">Foundations</a> — Slab restoration when a line runs under a garage or shop floor.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
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
      <li>Based in south OKC — fastest response time in the metro</li>
      <li>Free on-site estimates, no pressure</li>
      <li>OKC's freeze-thaw cycles can damage an unsealed stamped surface within a season or two — we don't cut corners on sealing</li>
    </ul>
    <h2>Why Sealing Matters in Oklahoma City</h2>
    <p>OKC's freeze-thaw cycles make sealing non-negotiable for stamped concrete — an unsealed decorative surface is far more likely to spall, flake, or fade within a season or two. We seal every stamped pour and give you a resealing schedule to protect the look long-term.</p>
    <h2>How Much Does a Concrete Patio Cost in Oklahoma City?</h2>
    <p>Costs vary by square footage, finish type (broom, stamped, or decorative), slab thickness, site conditions, and whether existing concrete needs removal. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
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
      <li><a href="/driveways-oklahoma-city">Driveways</a> — New installation, replacement, and stamped decorative driveways.</li>
      <li><a href="/foundations-oklahoma-city">Foundations &amp; Retaining Walls</a> — Outdoor living slabs on sloped lots often pair with a retaining wall.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/foundations-oklahoma-city": `
    <h1>Concrete Foundations in Oklahoma City</h1>
    <p>FDZ Construction LLC builds residential and commercial concrete foundations in Oklahoma City — slab-on-grade, stem walls, footings, and structural pads engineered for Oklahoma clay. Your foundation supports everything above it; we pour with proper footing depth, engineered reinforcement, and 4,000+ PSI concrete designed for the swell-shrink cycle of expansive soil.</p>
    <h2>Foundation and Retaining Wall Services in Oklahoma City</h2>
    <h3>Residential Foundations</h3>
    <ul>
      <li>Footing layout and excavation</li>
      <li>Rebar placement and forming</li>
      <li>Pour and cure</li>
      <li>Oklahoma's expansive clay means footing depth matters more here than in stable-soil regions</li>
    </ul>
    <h3>Commercial and Structural Foundations</h3>
    <ul>
      <li>Coordination with GC and inspection schedule</li>
      <li>Higher PSI mixes for structural loads</li>
      <li>COI and bonding documentation available for bid process</li>
    </ul>
    <h3>Poured Concrete Retaining Walls</h3>
    <ul>
      <li>Monolithic structure — no block joints to shift or crack over time</li>
      <li>Drainage planning behind the wall is the single biggest factor in longevity (gravel backfill, weep holes, French drain where needed)</li>
      <li>Best for taller walls and higher-load applications</li>
    </ul>
    <h3>CMU Block Retaining Walls</h3>
    <ul>
      <li>Faster to build than poured walls on smaller projects</li>
      <li>Still requires proper drainage behind the wall</li>
      <li>Good option for mid-height walls where engineered poured concrete isn't required</li>
    </ul>
    <h3>Retaining Wall Repair</h3>
    <ul>
      <li>Leaning or bowing walls almost always caused by water pressure from inadequate drainage — not just age</li>
      <li>We evaluate the drainage situation before recommending repair vs. replacement</li>
      <li>Stabilization and drainage correction where rebuild isn't necessary</li>
    </ul>
    <h2>Oklahoma's Expansive Clay Soil and What It Means for Foundations</h2>
    <p>Oklahoma's expansive red clay swells and shrinks with moisture and is the leading cause of foundation cracking in this region. Footing depth, reinforcement, and drainage all have to account for that movement — which is why we engineer each foundation to the soil, not a generic national spec.</p>
    ${processSection("Foundation Installation Process", [
      { title: "Layout & soil evaluation", description: "We stake the foundation to the plan, evaluate clay and site drainage, and coordinate engineered plans and permits." },
      { title: "Excavation & footings", description: "We excavate to grade and pour footings below the frost line, sized and reinforced for the structure and soil." },
      { title: "Forming & reinforcement", description: "Forms are set to grade, rebar and grade beams are placed per the engineered plan, and anchor points are located." },
      { title: "Vapor barrier & base", description: "We install and compact the aggregate base and lay the under-slab vapor barrier where required." },
      { title: "Pour & finish", description: "We place 4,000+ PSI concrete, screed and float to grade, and set anchor bolts before the concrete sets." },
      { title: "Cure & inspection", description: "The slab cures before it carries load. We coordinate required inspections and walk the finished foundation with you." },
    ])}
    <h2>Why Oklahoma City Homeowners and Businesses Choose FDZ</h2>
    <p>Oklahoma's Permian-age clay is highly expansive — it swells when wet and shrinks when dry. Most foundation and retaining wall problems in this region trace back to inadequate drainage or footings that didn't account for this movement. We've been working in this soil for 8+ years and know what it takes to build structures that last.</p>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years serving the OKC metro</li>
      <li>2-year workmanship warranty on all foundation and retaining wall work</li>
      <li>Based in south OKC — fastest response time in the metro</li>
      <li>Free on-site estimates, no pressure</li>
      <li>COI and bonding documentation available for commercial bid process</li>
    </ul>
    <h2>How Much Do Foundations and Retaining Walls Cost in Oklahoma City?</h2>
    <p>Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. Retaining wall cost depends on wall height, drainage complexity, soil conditions, and whether engineering is required. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
    <h2>Real Foundation Projects Across the OKC Metro</h2>
    <p>A few recent foundation pours — from a pier-supported thickened slab in Edmond to residential slab-on-grade work in Piedmont. <a href="/our-projects">See more completed projects across the OKC metro</a>.</p>
    <img src="/images/projects/pier-foundation-excavation-edmond-oklahoma-1.jpg" alt="Excavation and site grading for pier foundation in Edmond, Oklahoma — skid steer and excavator working red clay lot" loading="lazy" />
    <img src="/images/projects/pier-foundation-pour-edmond-oklahoma-concrete-truck.jpg" alt="Concrete truck on site during pier foundation slab pour in Edmond, Oklahoma — crew finishing fresh slab" loading="lazy" />
    <img src="/images/projects/pier-foundation-finished-edmond-oklahoma-curing.jpg" alt="Finished pier foundation thickened slab curing in Edmond, Oklahoma" loading="lazy" />
    <img src="/images/projects/residential-foundation-pour-piedmont-oklahoma.jpg" alt="Residential foundation pour in Piedmont, Oklahoma — fresh slab on Oklahoma red clay subgrade" loading="lazy" />
    <img src="/images/projects/residential-foundation-crew-piedmont-ok.jpg" alt="FDZ Construction crew finishing residential foundation slab in Piedmont, OK with power trowel" loading="lazy" />
    ${faqSection("Foundation FAQ", [
      { question: "What types of foundations do you install?", answer: "We handle slab-on-grade, stem wall, and continuous footing foundations for residential and commercial projects." },
      { question: "Do you build commercial foundations?", answer: "Yes — we pour commercial slab-on-grade for warehouses, footings and pads for retail buildings, and structural foundations for developments." },
      { question: "How much does a foundation cost in OKC?", answer: "Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. We provide free on-site estimates — call (405) 458-4805 or use the quote form above." },
      { question: "How deep should footings be in Oklahoma?", answer: "Oklahoma code requires footings below the frost line — typically 18–24 inches deep." },
      { question: "How do I know if my retaining wall needs repair or full replacement?", answer: "If the wall is leaning significantly, has visible cracking through the structure, or has lost its footing, replacement is usually the right call. Minor surface cracking without structural movement is often repairable. We evaluate this on-site at no charge." },
      { question: "Do you handle the engineering requirements for taller retaining walls?", answer: "Many jurisdictions require an engineer's stamp for walls over a certain height. We confirm what's required for your specific project and can work with an engineer when needed." },
      { question: "How long before I can build on a new foundation?", answer: "Forms can usually be stripped in 1–2 days and framing often starts around 7 days, but concrete reaches full design strength at about 28 days. We'll give you a clear schedule based on your mix and the weather." },
      { question: "Do you handle permits and inspections?", answer: "Yes — we coordinate all necessary permits and inspections for foundation projects across the OKC metro." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Warehouse floors, retail pads, loading docks, and site concrete for commercial properties.</li>
      <li><a href="/patios-oklahoma-city">Patios &amp; Stamped Concrete</a> — Outdoor living slabs on sloped lots often pair with a retaining wall.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
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
      <li>Based in south OKC — fastest response time in the metro</li>
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
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Parking lots, warehouse floors, site flatwork, and curb &amp; gutter for commercial developments.</li>
      <li><a href="/driveways-oklahoma-city">Driveways</a> — Sidewalk work often pairs with new driveway installation or replacement.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/commercial-concrete-oklahoma-city": `
    <h1>Commercial Concrete Contractors in Oklahoma City</h1>
    <p>Commercial concrete contractors in Oklahoma City — FDZ Construction pours warehouse floors, retail pads, equipment slabs, loading docks, and site flatwork for property owners, developers, and general contractors across the OKC metro using 4,000+ PSI mixes and base preparation built for heavy, sustained loads. Based at 7004 S Indiana Ave in south OKC — fastest response for OKC projects.</p>
    <!-- TODO: add real commercial project photos when available -->
    <h2>Commercial Concrete Services in Oklahoma City</h2>
    <h3>Parking Lots</h3>
    <ul>
      <li>Layout for drainage, ADA-accessible parking, and traffic flow</li>
      <li>High-PSI mix for vehicle loads</li>
      <li>Expansion joint planning for large-area pours</li>
    </ul>
    <h3>Warehouse and Industrial Slabs</h3>
    <ul>
      <li>Flat, level pours for racking systems and forklift traffic</li>
      <li>Thickness and PSI specified per load requirements</li>
      <li>Large-area pours coordinated with GC schedule</li>
    </ul>
    <h3>Retail Pads and Site Concrete</h3>
    <ul>
      <li>Aprons, drive approaches, sidewalks, and entry pads</li>
      <li>ADA compliance for accessible routes</li>
      <li>Coordination with other site work trades</li>
    </ul>
    <h3>Dock Pads and Loading Areas</h3>
    <ul>
      <li>Reinforced for heavy vehicle and equipment loads</li>
      <li>Drainage away from building entry</li>
    </ul>
    <h3>Commercial Foundations</h3>
    <ul>
      <li>See our <a href="/foundations-oklahoma-city">Foundations page</a> for full detail</li>
      <li>COI and bonding documentation available for bid process</li>
      <li>Coordination with GC and inspection schedule</li>
    </ul>
    <h2>Working with General Contractors and Property Managers</h2>
    <ul>
      <li>Certificate of insurance and bonding documentation available as part of the bid process</li>
      <li>We coordinate with your project schedule and other trades on site</li>
      <li>4,000+ PSI commercial mix standard; adjusted for specific load requirements</li>
      <li>Free on-site estimates and competitive bid turnaround</li>
      <li>Licensed, bonded, and insured in Oklahoma</li>
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
      { question: "How thick should a commercial concrete slab be?", answer: "Most commercial slabs require 5–6 inches minimum. Warehouse floors with forklift traffic may require more, with engineered rebar schedules. We specify per your load requirements." },
      { question: "How much does commercial concrete cost in OKC?", answer: "Commercial concrete pricing depends on scope, square footage, PSI requirements, site access, and schedule coordination. We provide competitive bids with clear line items — call (405) 458-4805 or email jesus@fdzconstruction.com to discuss your project." },
      { question: "What PSI concrete do you use for commercial work?", answer: "We specify 4,000 PSI minimum for commercial slabs and 5,000+ PSI for heavy industrial applications." },
      { question: "How long before we can use a new commercial slab?", answer: "Foot traffic is usually fine in 24–48 hours and light equipment after about 7 days. The slab reaches full design strength at around 28 days. We can phase pours to keep part of your operation running." },
      { question: "How quickly can you turn around a bid for a commercial project?", answer: "Contact us with project details and we'll schedule an on-site visit promptly. Bid turnaround depends on project complexity." },
      { question: "Do you work as a sub-contractor on GC-managed projects?", answer: "Yes. We're set up to work within a GC's project schedule, coordinate with other trades on site, and provide required documentation (COI, bonding) as part of the sub process." },
      { question: "Can you pour commercial concrete year-round in Oklahoma?", answer: "Yes — with proper cold-weather or hot-weather protocols. We adjust mix designs and curing methods by season." },
      { question: "What areas do you serve for commercial work?", answer: "We serve the entire OKC metro — Oklahoma City (home base, fastest response), Edmond (~30–40 min), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/foundations-oklahoma-city">Foundations</a> — Commercial slab-on-grade and structural foundations for the buildings your site concrete serves.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; Curb and Gutter</a> — Site sidewalks, ADA ramps, and curb work for commercial developments.</li>
      <li><a href="/parking-lots-oklahoma-city">Parking Lots</a> — Dedicated page for commercial parking lot design, layout, and construction.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/oklahoma-city-concrete": `
    <h1>Concrete Contractor in Oklahoma City, OK</h1>
    <p>FDZ Construction LLC is based in south Oklahoma City, at 7004 S Indiana Ave — so OKC itself is the area we work most. We pour driveways, patios, slabs, foundations, and commercial concrete across the city, with the fastest response of anywhere we serve.</p>
    <h2>Oklahoma City Soil Conditions</h2>
    <p>Oklahoma City broadly shares the metro's Permian-age clay and shale base. The terrain is mostly flat, and the North Canadian River corridor runs through the city, so drainage planning matters most on low-lying lots near the river and its tributaries. Because conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city.</p>
    <h2>Neighborhoods Served</h2>
    <p>We work throughout Oklahoma City, including Nichols Hills and surrounding areas.</p>
    <h2>Services Available in Oklahoma City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped Concrete" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
      { href: "/commercial-concrete-oklahoma-city", label: "Commercial Concrete" },
    ])}
    ${faqSection("FAQ", [
      { question: "Do you work throughout all of Oklahoma City?", answer: "Yes, with a particular concentration in south OKC near our shop. Because the city is large and conditions vary block to block, we evaluate soil and grading on a per-site basis rather than assuming one answer fits the whole city." },
      { question: "How much does concrete cost in Oklahoma City?", answer: "Standard driveways and slabs generally run $6–$10 per square foot and foundation work $9–$14, depending on thickness, reinforcement, and site conditions. We give an exact price after an on-site look — no phone quotes." },
      { question: "Why does base prep matter so much in Oklahoma City?", answer: "OKC sits on expansive Permian clay that swells when wet and shrinks in drought. Without a properly excavated, compacted aggregate base and adequate reinforcement, concrete is far more likely to crack and move over time." },
    ])}
    <p><strong>Drive time:</strong> We're based right here in south OKC, so Oklahoma City gets the fastest response of any area we serve.</p>
    ${trustParagraph()}
  `,

  "/edmond-concrete": `
    <h1>Concrete Contractor in Edmond, OK</h1>
    <p>Edmond is one of the areas we work most often outside our south OKC home base. We pour driveways, patios, slabs, foundations, and retaining walls for Edmond homeowners and builders across Oklahoma County.</p>
    <h2>Edmond's Unique Terrain</h2>
    <p>Edmond sits on the northern part of the Garber-Wellington aquifer, where the underlying formations carry more sandstone than the rest of the metro. In practice, soil here can shift between sandy and clay-heavy across a single lot, and the terrain has more rolling grade than much of the flat OKC metro. That combination makes grading and drainage planning a bigger factor here than on flatter sites — so we evaluate each lot rather than applying a one-size approach.</p>
    <h2>Services Available in Edmond</h2>
    ${linkList([
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
      { href: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
    ])}
    ${faqSection("FAQ", [
      { question: "Does Edmond's terrain affect foundation or retaining wall work?", answer: "Yes — more than on flatter parts of the metro. The mix of sandy and clay soil and the rolling grade mean we evaluate each site and plan grading and drainage accordingly, rather than applying a one-size approach." },
      { question: "How much does concrete cost in Edmond?", answer: "Edmond pricing follows our OKC metro rates: roughly $6–$10 per square foot for standard driveways and slabs and $9–$14 for foundation work, with an exact price after an on-site estimate." },
      { question: "Do you coordinate with builders on new construction in Edmond?", answer: "Yes — we handle foundation pours, driveways, and flatwork for new builds and coordinate scheduling with builders and inspectors." },
    ])}
    <p><strong>Drive time:</strong> Edmond is about 30–40 minutes north of the shop, across the metro — still one of the areas we serve most regularly.</p>
    ${trustParagraph()}
  `,

  "/yukon-oklahoma-concrete": `
    <h1>Concrete Contractor in Yukon, OK</h1>
    <p>Yukon, on the west side of the metro in Canadian County, is one of the areas we work frequently. We handle driveways, patios, slabs, foundations, and commercial concrete for Yukon homeowners and businesses.</p>
    <h2>Yukon Soil and Site Conditions</h2>
    <p>Yukon has flatter terrain than Edmond, on the same expansive clay base shared across the region. A lot of the work here is in newer subdivisions built on graded former agricultural land — and on those sites, the quality of the fill and the compaction done during the original grading matters as much as the native soil itself. We check compaction and drainage on these lots specifically.</p>
    ${faqSection("FAQ", [
      { question: "Is new-construction concrete different in growing areas like Yukon?", answer: "The base-prep considerations differ slightly, since lots are often on graded fill rather than undisturbed native soil. We check compaction and drainage on these sites specifically before we pour." },
      { question: "How much does concrete cost in Yukon?", answer: "Yukon pricing matches our OKC metro rates — roughly $6–$10 per square foot for standard driveways and slabs — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Yukon is about 20–25 minutes west of the shop.</p>
    ${trustParagraph()}
  `,

  "/norman-ok-concrete": `
    <h1>Concrete Contractor in Norman, OK</h1>
    <p>FDZ Construction serves Norman and Cleveland County with driveways, patios, slabs, foundations, and retaining walls — the same crew and standards we bring across the OKC metro.</p>
    <h2>Norman Terrain and Drainage</h2>
    <p>Norman's position along the Canadian River means some lots sit on sandier, river-influenced soil that can transition to denser clay within a short distance on the same property. That's a different base-prep call than the more uniform clay sites elsewhere in the metro, so we assess the soil on each lot before we pour.</p>
    <h2>Services Available in Norman</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
    ])}
    ${faqSection("FAQ", [
      { question: "What's different about pouring concrete in Norman?", answer: "Norman's spot along the Canadian River means some lots have sandier, river-influenced soil that can change to denser clay across a short distance. We evaluate the soil and adjust base prep for each site rather than assuming one approach." },
      { question: "How much does concrete cost in Norman?", answer: "Norman pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work and $9–$14 for foundations — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Norman is about 20–25 minutes south of the shop.</p>
    ${trustParagraph()}
  `,

  "/moore-oklahoma-concrete": `
    <h1>Concrete Contractor in Moore, OK</h1>
    <p>Moore, just south of Oklahoma City in Cleveland County, is one of the closest areas to our shop. We pour driveways, patios, slabs, foundations, and sidewalks for Moore homeowners.</p>
    <h2>Moore Terrain and Drainage</h2>
    <p>Moore sits on flat terrain over the same expansive clay base found across the metro, with limited natural runoff in low-lying areas. That makes proper slope-to-drain detailing matter more here than on higher ground — we grade every slab and driveway to move water away from the structure.</p>
    <h2>Services Available in Moore</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
    ])}
    ${faqSection("FAQ", [
      { question: "Why does drainage matter so much in Moore?", answer: "Moore's flat terrain and clay soil mean water doesn't drain away on its own in low-lying areas. We grade slabs and driveways with a slope that moves water away from the structure, which is critical to preventing pooling and long-term concrete and foundation problems." },
      { question: "How much does concrete cost in Moore?", answer: "Moore pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs and $9–$14 for foundations — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Moore is among the closest areas we serve, just south of the shop.</p>
    ${trustParagraph()}
  `,

  "/mustang-oklahoma-concrete": `
    <h1>Concrete Contractor in Mustang, OK</h1>
    <p>Mustang, on the west side of the metro in Canadian County, is an area we serve with driveways, patios, slabs, and foundations for homeowners and new-construction subdivisions.</p>
    <h2>Mustang Soil and Site Conditions</h2>
    <p>Mustang shares Yukon's flatter west-metro terrain and the region's expansive clay base. Like Yukon, a lot of the work here is on newer subdivisions built on graded former agricultural land, where fill quality and compaction matter as much as the native soil — so we check both before we pour.</p>
    <h2>Services Available in Mustang</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/foundations-oklahoma-city", label: "Concrete Foundations" },
    ])}
    ${faqSection("FAQ", [
      { question: "Do you work on new-construction lots in Mustang?", answer: "Yes. Many Mustang lots sit on graded fill rather than undisturbed native soil, so we check compaction and drainage on these sites specifically and coordinate with builders on scheduling." },
      { question: "How much does concrete cost in Mustang?", answer: "Mustang pricing follows our OKC metro rates — roughly $6–$10 per square foot for standard work — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Mustang is about 20–25 minutes west of the shop.</p>
    ${trustParagraph()}
  `,

  "/midwest-city-oklahoma-concrete": `
    <h1>Concrete Contractor in Midwest City, OK</h1>
    <p>FDZ Construction serves Midwest City in eastern Oklahoma County with driveway replacement, patio slabs, sidewalk work, and foundation work.</p>
    <h2>Midwest City Terrain and Drainage</h2>
    <p>Midwest City sits along Crutcho Creek and Cherry Creek, and the area sees increased flood risk along those creeks during sustained rain, when backwater from the North Canadian River slows drainage — per the city's own floodplain information. Otherwise it shares the metro's flat, expansive clay base. For any work near those drainage corridors, grading and drainage are the priority.</p>
    <h2>Services Available in Midwest City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
    ])}
    ${faqSection("FAQ", [
      { question: "Does flooding near Crutcho Creek or Cherry Creek affect concrete work?", answer: "It can. The city's floodplain information notes that flood risk along Crutcho Creek and Cherry Creek rises during sustained rain due to backwater from the North Canadian River. For work near those corridors we pay extra attention to grading and drainage so water moves away from the slab." },
      { question: "How much does concrete cost in Midwest City?", answer: "Midwest City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs, with tear-out of existing concrete adding to the cost — and an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Midwest City is about 15–20 minutes east of the shop.</p>
    ${trustParagraph()}
  `,

  "/del-city-oklahoma-concrete": `
    <h1>Concrete Contractor in Del City, OK</h1>
    <p>Del City, bordered by Midwest City and south Oklahoma City, is an area we serve with driveway replacement, patio slabs, sidewalk work, and retaining walls.</p>
    <h2>Del City Terrain and Drainage</h2>
    <p>Del City shares the same Crutcho Creek and Cherry Creek flood dynamic as neighboring Midwest City — the city's own floodplain information confirms flood risk rises along those creeks during sustained rain from North Canadian River backwater. That's relevant for any work near those drainage corridors. The terrain is otherwise flat, over the same expansive clay base as the rest of the metro.</p>
    <h2>Services Available in Del City</h2>
    ${linkList([
      { href: "/driveways-oklahoma-city", label: "Concrete Driveways" },
      { href: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
    ])}
    ${faqSection("FAQ", [
      { question: "Does flood risk near Crutcho Creek or Cherry Creek matter for my project?", answer: "If your property is near those drainage corridors, yes. Del City's floodplain information confirms flood risk along Crutcho Creek and Cherry Creek rises during sustained rain from North Canadian River backwater, so we prioritize grading and drainage on work in those areas." },
      { question: "How much does concrete cost in Del City?", answer: "Del City pricing follows our OKC metro rates — roughly $6–$10 per square foot for driveways and slabs — with an exact price after a free on-site estimate." },
    ])}
    <p><strong>Drive time:</strong> Del City is about 15–20 minutes east of the shop, in the same general area as Midwest City.</p>
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
    <p><strong>Drive time:</strong> Stillwater is about 65–75 miles from our south OKC shop — roughly an hour to 90 minutes depending on route and traffic. We serve Stillwater by scheduled appointment rather than same-day OKC-metro response.</p>
    ${trustParagraph()}
  `,

  "/parking-lots-oklahoma-city": `
    <h1>Concrete Parking Lot Contractors in Oklahoma City, OK</h1>
    <p>FDZ Construction LLC provides concrete parking lot installation, repair, and site concrete services for commercial properties across the Oklahoma City metro. We work directly with property managers, business owners, and general contractors — handling the full scope from grading and forming through ADA-compliant layout, curb and gutter, and striping coordination. Licensed, bonded, and insured in Oklahoma. Certificate of insurance and bonding documentation available as part of the bid process.</p>
    <h2>Concrete Parking Lot Services in Oklahoma City</h2>
    <h3>New Parking Lot Installation</h3>
    <ul>
      <li>Site grading for drainage and ADA-compliant slopes</li>
      <li>4,000+ PSI concrete mix standard for vehicle loads</li>
      <li>Reinforcement sized to expected traffic and load</li>
      <li>Expansion joint planning for large-area pours</li>
      <li>ADA-accessible parking stall layout</li>
      <li>Curb and gutter installation</li>
    </ul>
    <h3>Parking Lot Repair and Partial Replacement</h3>
    <ul>
      <li>Section removal and replacement for cracked or failed areas</li>
      <li>Joint sealing to prevent water intrusion and further deterioration</li>
      <li>We assess the sub-base condition before recommending repair vs. replacement — OKC's expansive clay can cause slab failure from below, not just surface wear</li>
    </ul>
    <h3>Full Parking Lot Replacement</h3>
    <ul>
      <li>Full demolition and removal of existing concrete or asphalt</li>
      <li>Sub-base re-evaluation and correction before new pour</li>
      <li>Re-grading for drainage improvements if the original lot had pooling or drainage issues</li>
      <li>New reinforced pour with updated ADA layout where required</li>
    </ul>
    <h3>Concrete Curb and Gutter</h3>
    <ul>
      <li>Perimeter curb and gutter for drainage routing</li>
      <li>ADA curb ramps and accessible routes</li>
      <li>Slipform for longer runs; hand-formed for custom sections</li>
    </ul>
    <h3>ADA Compliance</h3>
    <ul>
      <li>Accessible parking stall count and placement per ADA requirements</li>
      <li>Van-accessible stall dimensions</li>
      <li>Accessible route from parking to building entry</li>
      <li>Curb ramp slopes and landing dimensions confirmed before design is finalized</li>
    </ul>
    <h2>What Property Managers and GCs Should Know</h2>
    <p>Our proposals define exactly what's included — demolition, sub-base prep, reinforcement, concrete thickness, ADA layout, curb and gutter, and cleanup. We coordinate with your project schedule and other trades on site, communicate timeline changes before they happen, and are set up to work as a sub-contractor on GC-managed projects. COI and bonding documentation available for the bid process.</p>
    <p>OKC's expansive clay soil means parking lot failures often originate below the slab. Before recommending repair vs. replacement, we evaluate sub-base conditions — a slab repair on a failed base is money wasted. ADA compliance is confirmed before we finalize any layout.</p>
    ${processSection("From Assessment to Finished Lot", [
      { title: "On-site assessment", description: "We walk the property, evaluate existing conditions, sub-base, drainage, and ADA layout before providing a proposal." },
      { title: "Proposal", description: "Clear scope, defined deliverables, no hidden line items." },
      { title: "Site prep and grading", description: "Proper grading for drainage is set before any concrete is placed." },
      { title: "Forming and reinforcement", description: "Forms set to ADA slopes and drainage grades; reinforcement placed per load requirements." },
      { title: "Pour and finish", description: "4,000+ PSI mix, properly cured before opening to traffic." },
      { title: "Curb, gutter, ADA ramps, and close-out", description: "Installed per layout plan. Site left clean. Job photos provided on completion." },
    ])}
    <h2>Oklahoma City Soil and Parking Lot Longevity</h2>
    <p>Oklahoma's expansive clay and shale base creates a challenge that most parking lot failures trace back to: the sub-base moves with moisture, and if the concrete wasn't designed around that movement, the slab cracks and fails from below regardless of surface quality. Proper sub-base preparation — compacted aggregate base, drainage routing, and appropriate joint spacing for large-area pours — is what separates a parking lot that lasts 30 years from one that needs patching within five.</p>
    <h2>Why Oklahoma City Businesses Choose FDZ for Parking Lot Work</h2>
    <ul>
      <li>Licensed, bonded, and insured in Oklahoma</li>
      <li>8+ years of commercial concrete experience across the OKC metro</li>
      <li>2-year workmanship warranty</li>
      <li>COI and bonding documentation available for bid process</li>
      <li>ADA-compliant layouts on every project</li>
      <li>4,000+ PSI commercial mix standard</li>
      <li>Sub-base evaluation before repair or replacement recommendations</li>
    </ul>
    <h2>How Much Does a Concrete Parking Lot Cost in Oklahoma City?</h2>
    <p>Commercial parking lot costs depend on square footage, existing site conditions, sub-base preparation requirements, ADA layout complexity, curb and gutter scope, and schedule requirements. We provide competitive bids with a clear, itemized scope. Call <a href="tel:4054584805">(405) 458-4805</a> or email <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> to discuss your project.</p>
    ${faqSection("Parking Lot FAQ", [
      { question: "Do you work as a sub-contractor on GC-managed projects?", answer: "Yes. We're set up to work within a GC's project schedule, coordinate with other trades on site, and provide required documentation — COI, bonding information — as part of the sub process." },
      { question: "How quickly can you turn around a bid for a parking lot project?", answer: "Contact us with project details and we'll schedule an on-site assessment promptly. Bid turnaround depends on project complexity." },
      { question: "Can you provide a certificate of insurance and bonding documentation?", answer: "Yes, as part of the bid process." },
      { question: "Do you handle ADA compliance in the parking lot layout?", answer: "Yes. Stall count, van-accessible placement, curb ramp slopes, and accessible route continuity are part of every parking lot layout we design." },
      { question: "How long before a new concrete parking lot can be opened to traffic?", answer: "Concrete parking lots typically require 7 days minimum before light vehicle traffic, and up to 28 days for full structural cure. We provide a specific timeline as part of the project schedule." },
      { question: "Why do concrete parking lots fail in Oklahoma?", answer: "Most failures in OKC trace back to sub-base issues, not surface quality. Oklahoma's expansive clay soil moves significantly with moisture — if the sub-base wasn't properly compacted and the slab wasn't designed for that movement, failure can start from below the slab surface." },
      { question: "What PSI concrete do you use for parking lots?", answer: "4,000+ PSI standard for commercial vehicle loads. Adjusted upward for heavy truck or equipment traffic where needed." },
      { question: "What areas do you serve for parking lot work?", answer: "We serve the entire OKC metro — Oklahoma City (home base, fastest response), Edmond (~30–40 min north), Yukon (~20–25 min west), Norman, Moore, Mustang, Midwest City, and Del City." },
    ])}
    <h2>Related Services</h2>
    <ul>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Warehouse slabs, dock pads, retail site concrete, and equipment pads.</li>
      <li><a href="/sidewalks-oklahoma-city">Sidewalks &amp; Curb and Gutter</a> — Often part of the same commercial site scope as parking lot work.</li>
      <li><a href="/foundations-oklahoma-city">Foundations</a> — Commercial foundation work for the buildings your parking lot serves.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
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
      <li>Based in south OKC — serving OKC, Edmond, Yukon, Norman, Moore, Mustang, Midwest City, Del City</li>
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
      <li><a href="/foundations-oklahoma-city">Concrete Foundations</a> — Retaining walls and foundations often go hand-in-hand on sloped lots.</li>
      <li><a href="/patios-oklahoma-city">Patios &amp; Stamped Concrete</a> — Landscape walls frequently paired with patio or outdoor living projects.</li>
      <li><a href="/commercial-concrete-oklahoma-city">Commercial Concrete</a> — Retaining walls for commercial site development.</li>
    </ul>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/hvac-oklahoma-city": `
    <h1>Oklahoma City HVAC Repair, Installation &amp; Emergency Service</h1>
    <p>FDZ Construction LLC's licensed HVAC technicians handle repair, installation, replacement, and emergency no-heat/no-cool service for residential and commercial properties across the Oklahoma City metro. We size and service equipment for Oklahoma's actual climate — not a generic spec sheet.</p>
    <h2>HVAC Services We Offer</h2>
    <ul>
      <li><strong>AC Repair &amp; Replacement</strong> — Diagnostic service, repair, and new installation sized to your home's actual square footage.</li>
      <li><strong>Furnace Repair &amp; Replacement</strong> — Diagnostic and repair, full replacement for end-of-life units, proper venting and safety checks.</li>
      <li><strong>Heat Pump Service</strong> — Repair, maintenance, replacement, and new installation.</li>
      <li><strong>Emergency No-Heat / No-Cool Service</strong> — Priority response during cold snaps or peak summer heat.</li>
    </ul>
    <h2>Signs You Need HVAC Service</h2>
    <ul>
      <li>No cooling or no heating</li>
      <li>Unusual noises — banging, squealing, or grinding</li>
      <li>Utility bills spiking without a clear reason</li>
      <li>Uneven temperatures from room to room</li>
      <li>System cycling on and off frequently</li>
      <li>Weak or poor airflow from vents</li>
    </ul>
    <h2>Why Oklahoma City Climate Matters</h2>
    <p>Summers regularly push past 100°F and winters bring hard freezes and cold snaps. A system that's undersized or poorly installed struggles, or fails outright, exactly when you need it most. We size every installation for OKC's real seasonal swings, not a mild-climate average.</p>
    ${processSection("From Diagnosis to System Test", [
      { title: "Inspection & diagnosis", description: "We inspect the system and diagnose the actual problem before recommending anything." },
      { title: "Repair vs. replacement recommendation", description: "We tell you plainly whether a repair makes sense or whether the system is better replaced." },
      { title: "Service", description: "We complete the repair, replacement, or new installation sized and set up for your home." },
      { title: "System test & walkthrough", description: "We test the system under real conditions and walk you through what was done." },
    ])}
    <h2>Why FDZ for HVAC</h2>
    <ul>
      <li>Licensed HVAC technicians in Oklahoma. License #: [HVAC LICENSE # — TO BE PROVIDED]</li>
      <li>Part of a multi-trade team — useful when an HVAC issue overlaps with electrical, like panel capacity for a new system</li>
      <li>2-year workmanship warranty on all HVAC work</li>
      <li>Licensed, bonded, and insured in Oklahoma</li>
    </ul>
    ${faqSection("HVAC FAQ", [
      { question: "How do I know if I need repair vs. replacement?", answer: "It depends on the age of the system, the cost of the repair relative to a new install, and how many previous repairs it's needed. We'll inspect the system and tell you honestly which option makes more sense." },
      { question: "Do you offer emergency HVAC service?", answer: "Yes — no-heat and no-cool situations get priority response. See our emergency services page for details." },
      { question: "Do you install new systems for additions or new construction?", answer: "Yes — we size and install HVAC systems for additions, new construction, and full system replacements." },
      { question: "Do you work on both AC and furnace systems?", answer: "Yes — AC systems, furnaces, and heat pumps, so you're not calling a separate company for heating versus cooling." },
    ])}
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/plumbing-oklahoma-city": `
    <h1>Oklahoma City Plumbing Services</h1>
    <p>FDZ Construction LLC's licensed plumbers cover the full range of residential and commercial plumbing — general repair, drain cleaning, water heater service, and leak detection. Sewer line repair and installation is a distinct specialty of ours — see our <a href="/sewer-line-repair-oklahoma-city">dedicated sewer line repair page</a> for the full breakdown of methods, process, and FAQ.</p>
    <h2>Plumbing Services We Offer</h2>
    <ul>
      <li><strong>General Plumbing Repair</strong> — Leak repair, fixture repair and replacement, and general troubleshooting.</li>
      <li><strong>Drain Cleaning</strong> — Clearing slow or clogged drains, diagnosis of recurring clogs.</li>
      <li><strong>Water Heater Repair &amp; Installation</strong> — Repair and full replacement, including gas and electrical coordination.</li>
      <li><strong>Leak Detection</strong> — Locating hidden leaks before they cause structural or water damage.</li>
      <li><strong>Sewer Line Repair &amp; Installation</strong> — Trenchless pipe bursting, traditional excavation repair, spot repair, and full replacement. <a href="/sewer-line-repair-oklahoma-city">See our dedicated sewer line repair page →</a></li>
    </ul>
    <h2>Signs You Need a Plumber</h2>
    <ul>
      <li>Active leaks, even small ones</li>
      <li>Low water pressure throughout the house</li>
      <li>Slow drains in more than one fixture</li>
      <li>Water heater issues — no hot water, inconsistent temperature, or leaking</li>
      <li>Unexplained increases in your water bill</li>
    </ul>
    <h2>Why Oklahoma City Conditions Matter</h2>
    <p>Oklahoma's hard water accelerates mineral buildup in pipes and water heaters over time, and the same expansive clay soil that stresses driveways and foundations also stresses buried plumbing lines. See our <a href="/sewer-line-repair-oklahoma-city">sewer line repair page</a> for more on how OKC soil affects underground lines.</p>
    <h2>Why FDZ for Plumbing</h2>
    <ul>
      <li>Licensed plumbers in Oklahoma. License #: 75456</li>
      <li>Part of a multi-trade team — a water heater replacement often touches plumbing, electrical, and gas</li>
      <li>Sewer line work handled by the same crew that does the excavation and concrete restoration</li>
      <li>2-year workmanship warranty on all plumbing work</li>
    </ul>
    ${faqSection("Plumbing FAQ", [
      { question: "Do you handle sewer line repair, or is that a separate company?", answer: "Sewer line repair is one of our specialties, handled by the same team. See our dedicated sewer line repair page for full detail." },
      { question: "Do you offer emergency plumbing service?", answer: "Yes — active leaks and no-water situations get priority response. See our emergency services page for details." },
      { question: "Can you replace a water heater that involves electrical or gas work?", answer: "Yes — we coordinate plumbing, electrical, and gas work internally rather than requiring separate contractors." },
      { question: "How does Oklahoma's hard water affect my plumbing?", answer: "Hard water accelerates mineral buildup inside pipes and water heaters, which can reduce lifespan and water pressure over time." },
    ])}
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/electrical-oklahoma-city": `
    <h1>Oklahoma City Electrical Services</h1>
    <p>FDZ Construction LLC's licensed electricians handle residential and commercial electrical repair and installation across the OKC metro — panel upgrades, wiring and outlet repair, lighting, generator and EV charger installation, and emergency electrical service.</p>
    <h2>Electrical Services We Offer</h2>
    <ul>
      <li><strong>Panel Upgrades &amp; Repairs</strong> — Upgrades for outdated or undersized service, repairs, capacity checks before adding major equipment.</li>
      <li><strong>Outlet &amp; Wiring Repair</strong> — Repair and replacement of faulty outlets, switches, and wiring; rewiring for older homes.</li>
      <li><strong>Lighting Installation</strong> — Interior and exterior lighting for residential and commercial properties.</li>
      <li><strong>Generator Installation</strong> — Backup generator installation with proper transfer switch setup.</li>
      <li><strong>EV Charger Installation</strong> — Home EV charger installation with panel capacity evaluation.</li>
      <li><strong>Emergency Electrical Service</strong> — Priority response for active hazards — burning smells, sparking, total power loss.</li>
    </ul>
    <h2>Signs You Need an Electrician</h2>
    <ul>
      <li>Flickering lights</li>
      <li>Breakers that trip frequently</li>
      <li>Warm or discolored outlets</li>
      <li>Any burning smell — treat this as urgent</li>
      <li>Outdated wiring in an older home you haven't had inspected</li>
    </ul>
    <h2>Why Oklahoma City Conditions Matter</h2>
    <p>OKC's severe storm season — high winds, hail, and tornado activity — brings real power surge and outage risk. A properly protected panel and, for some homes, a backup generator are a practical response to conditions this area sees every spring.</p>
    ${processSection("From Inspection to Final Test", [
      { title: "Inspection & diagnosis", description: "We inspect the panel, wiring, or fixture and diagnose the actual issue." },
      { title: "Written estimate", description: "We give you a clear, written estimate before any work starts." },
      { title: "Code-compliant service", description: "We complete the work to current electrical code — no shortcuts." },
      { title: "Test & walkthrough", description: "We test everything under load and walk you through what was done." },
    ])}
    <h2>Why FDZ for Electrical</h2>
    <ul>
      <li>Licensed electricians in Oklahoma. License #: [ELECTRICAL LICENSE # — TO BE PROVIDED]</li>
      <li>Part of a multi-trade team — panel capacity checks before an HVAC or generator install</li>
      <li>2-year workmanship warranty on all electrical work</li>
      <li>Licensed, bonded, and insured in Oklahoma</li>
    </ul>
    ${faqSection("Electrical FAQ", [
      { question: "Do you handle both residential and commercial electrical work?", answer: "Yes — panel upgrades, wiring, lighting, and installation work for homes and businesses across the OKC metro." },
      { question: "Do you offer emergency electrical service?", answer: "Yes — active hazards like burning smells, sparking, or total power loss get priority response." },
      { question: "Can you check if my panel can handle a new HVAC system or EV charger?", answer: "Yes — panel capacity checks are routine before installing a new HVAC system, generator, or EV charger." },
      { question: "Do you install generators and EV chargers?", answer: "Yes — including the panel and transfer switch work both require." },
    ])}
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/emergency-services-oklahoma-city": `
    <h1>24/7 Emergency Services in Oklahoma City</h1>
    <p>One call handles concrete, HVAC, plumbing, and electrical emergencies — no juggling separate contractors while you're dealing with an active problem.</p>
    <h2>Concrete Emergencies</h2>
    <p>A collapsed or heaving slab, a driveway or sidewalk that's become a safety hazard, or storm damage to a concrete structure. <a href="/driveways-oklahoma-city">See Concrete Services →</a></p>
    <h2>HVAC Emergencies</h2>
    <p>No heat during a cold snap or no cooling during peak OKC summer heat. <a href="/hvac-oklahoma-city">See HVAC Services →</a></p>
    <h2>Plumbing Emergencies</h2>
    <p>Active leaks, no water, and sewer line failures. <a href="/plumbing-oklahoma-city">See Plumbing Services →</a> · <a href="/sewer-line-repair-oklahoma-city">Sewer Line Repair →</a></p>
    <h2>Electrical Emergencies</h2>
    <p>A burning smell, sparking, or total loss of power. <a href="/electrical-oklahoma-city">See Electrical Services →</a></p>
    <h2>Why One Company for Every Trade</h2>
    <p>FDZ Construction LLC covers concrete, HVAC, plumbing, and electrical under one roof — faster response, one point of contact, no coordinating multiple contractors during an already stressful situation. Every technician is licensed in their trade, and every job is backed by the same 2-year workmanship warranty.</p>
    <p><strong>Call now:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,

  "/our-approach": `
    <h1>Self-Performed Concrete. Managed Trades.</h1>
    <p>FDZ Construction LLC delivers every project one of two ways, depending on the trade — and we think you should know exactly which one applies before you hire us.</p>
    <h2>Concrete — Self-Performed</h2>
    <p>Concrete is where FDZ Construction started, and it's still 100% self-performed. Driveways, patios, slabs, foundations, retaining walls, sidewalks, sewer line excavation and restoration, and commercial concrete are all poured and finished by our own employees — using our own equipment, on our own schedule. Nothing gets handed off to a subcontractor we don't control.</p>
    <h2>HVAC, Plumbing &amp; Electrical — General Contracted</h2>
    <p>For HVAC, plumbing, and electrical work, FDZ Construction acts as your general contractor. We manage licensed, vetted trade specialists on your project so you only have to deal with one company — a single point of contact, a single itemized invoice, and a single workmanship warranty covering the whole job, even though the on-the-tools work is performed by our licensed partner tradespeople, not FDZ's in-house concrete crew.</p>
    <h2>What to Expect — Concrete</h2>
    <ol>
      <li>Free on-site estimate from our own crew</li>
      <li>Written, itemized quote — no subcontractor markup</li>
      <li>Our crew handles excavation, base prep, and forming</li>
      <li>Our crew pours, finishes, and cures the concrete</li>
      <li>Final walkthrough, backed by our 2-year warranty</li>
    </ol>
    <h2>What to Expect — HVAC, Plumbing &amp; Electrical</h2>
    <ol>
      <li>You call FDZ — one number for every trade</li>
      <li>We scope the job and give you a written estimate</li>
      <li>We schedule a licensed specialist from our vetted partner network</li>
      <li>FDZ oversees the work through completion</li>
      <li>You get one invoice and one workmanship warranty from FDZ</li>
    </ol>
    <p><strong>Free estimate:</strong> <a href="tel:4054584805">(405) 458-4805</a> · <a href="mailto:jesus@fdzconstruction.com">jesus@fdzconstruction.com</a> · 7004 S Indiana Ave, Oklahoma City, OK 73159</p>
    ${trustParagraph()}
  `,
};

export function getPrerenderBody(path: string): string | undefined {
  return prerenderBodies[path];
}

export function getSkipFooterNav(path: string): boolean {
  return path === "/";
}
