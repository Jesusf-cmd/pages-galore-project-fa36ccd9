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
];

export const prerenderBodies: Record<string, string> = {
  "/": `
    <h1>Oklahoma City Concrete Contractors</h1>
    <p>FDZ Construction LLC is a licensed, bonded, and insured concrete contractor based in south Oklahoma City at 7004 S Indiana Ave. We pour driveways, patios, slabs, foundations, retaining walls, sidewalks, and commercial concrete across the OKC metro.</p>
    ${trustParagraph()}
    <h2>Concrete Services</h2>
    ${linkList(SERVICE_LINKS)}
    <h2>Why Oklahoma City Soil Matters</h2>
    <p>The OKC metro sits on Permian-age clay and shale that expands when wet and shrinks in drought. That movement is why proper sub-base compaction, reinforcement, and drainage grading matter on every driveway, slab, and foundation here — not just on problem lots.</p>
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
      <li>1-year workmanship warranty on all driveway work</li>
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
      <li>1-year workmanship warranty on all patio and slab work</li>
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
      <li>1-year workmanship warranty on all foundation and retaining wall work</li>
      <li>Based in south OKC — fastest response time in the metro</li>
      <li>Free on-site estimates, no pressure</li>
      <li>COI and bonding documentation available for commercial bid process</li>
    </ul>
    <h2>How Much Do Foundations and Retaining Walls Cost in Oklahoma City?</h2>
    <p>Foundation pricing depends on project size, depth, reinforcement, site access, and excavation conditions. Retaining wall cost depends on wall height, drainage complexity, soil conditions, and whether engineering is required. We provide free on-site estimates — call <a href="tel:4054584805">(405) 458-4805</a> or use the quote form above.</p>
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
      <li>1-year workmanship warranty on all sidewalk and curb work</li>
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

  "/parking-lots-oklahoma-city": `
    <h1>Concrete Parking Lots in Oklahoma City</h1>
    <p>FDZ Construction LLC builds commercial concrete parking lots in Oklahoma City — new construction, full replacement, and major repairs for businesses, retail centers, churches, and industrial properties across the OKC metro.</p>
    <h2>Commercial Parking Lot Scope</h2>
    <p>We pour 5–6 inch reinforced slabs with engineered drainage grading, sealed joints, curb and gutter, and ADA-compliant accessible spaces. Concrete parking lots typically last 30–40 years versus asphalt's 15–20, with lower long-term maintenance on Oklahoma's expansive clay when the base is built correctly.</p>
    ${faqSection("Parking Lot FAQ", [
      { question: "How much does a concrete parking lot cost in OKC?", answer: "Commercial parking lots typically run $7–$12 per square foot installed, depending on thickness, reinforcement, and site prep." },
      { question: "Concrete parking lot vs asphalt?", answer: "Concrete costs more upfront but lasts roughly twice as long with lower maintenance — especially important on Oklahoma clay when the base is engineered for heavy traffic." },
    ])}
    ${trustParagraph()}
  `,

  "/retaining-walls-oklahoma-city": `
    <h1>Retaining Walls in Oklahoma City</h1>
    <p>FDZ Construction LLC builds retaining walls in Oklahoma City engineered for the lateral pressure of expansive clay soil — poured concrete for maximum strength, reinforced CMU block for walls under four feet, and interlocking segmental walls for landscape terracing.</p>
    <h2>Drainage Behind the Wall</h2>
    <p>Every wall includes footings below frost line and drainage behind the wall — gravel backfill, weep holes, and sometimes a French drain — because hydrostatic pressure from Oklahoma clay is the leading cause of retaining wall failure in this region.</p>
    <p>Retaining walls typically run $25–$45 per linear foot depending on height, material, and site access.</p>
    ${trustParagraph()}
  `,
};

export function getPrerenderBody(path: string): string | undefined {
  return prerenderBodies[path];
}

export function getSkipFooterNav(path: string): boolean {
  return path === "/";
}
