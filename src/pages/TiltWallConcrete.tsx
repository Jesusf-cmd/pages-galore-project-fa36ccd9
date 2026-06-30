import ServicePage from "@/components/ServicePageTemplate";

export default function TiltWallConcrete() {
  return (
    <ServicePage
      enriched
      currentServiceSlug="tilt-wall-concrete-oklahoma-city"
      metaTitle="Tilt-Wall Concrete Oklahoma City | FDZ Construction LLC"
      metaDescription="Tilt-wall concrete construction in Oklahoma City — casting slabs, grade beams, panel pours, site concrete. I-40/I-35 industrial corridor. Call (405) 458-4805."
      eyebrow="OKC Metro · Tilt-Wall Concrete · Licensed & Insured"
      title="Tilt-Wall Concrete in"
      titleAccent="Oklahoma City."
      description='Casting slabs, grade beams, tilt-up panel pours, and site concrete for tilt-wall construction in Oklahoma City. Flatness tolerances matter — we hit them. <a href="tel:4054584805">(405) 458-4805</a>.'
      introText="Tilt-wall construction depends on concrete in ways other building types don't. The casting slab must be super-flat — FF35 minimum — or panels won't release cleanly and will warp as they cure. Grade beams must be at exact elevation to receive panels. Panel pours require precise embedded hardware placement and proper bond breaker application. Interior slabs are poured after panels are tilted and braced. FDZ Construction provides concrete scope for tilt-wall projects in the OKC metro — I-40 corridor, I-35 corridor, Meridian industrial area, and the broader OKC industrial market. Call (405) 458-4805."
      localExpertiseNote="OKC's Permian red clay requires aggressive subgrade treatment before any tilt-wall casting slab or grade beam pour. Clay with high plasticity index (PI) will move seasonally and compromise panel geometry. FDZ requires subgrade lime stabilization or replacement to stable fill on all tilt-wall casting slab work — this is not optional and is specified before bid."
      serviceLabel="Commercial"
      serviceCards={[
        {
          icon: "🏗️",
          title: "Tilt-Wall Casting Slabs",
          description: "Super-flat casting slabs (FF35+) with bond breaker — the foundation of clean panel release and warp-free tilt-up panels.",
        },
        {
          icon: "🔩",
          title: "Grade Beams",
          description: "Precision grade beams at exact elevation — panels land on properly placed, properly cured grade beams or they don't plumb.",
        },
        {
          icon: "🧱",
          title: "Tilt-Up Panel Pours",
          description: "Panel concrete placement, consolidation around embedded hardware, and surface finishing — no voids, no cold joints.",
        },
        {
          icon: "⚙️",
          title: "Interior Slab on Grade",
          description: "FF35+ interior slab poured after panel erection and bracing — flatness tolerances for rack storage and forklift operations.",
        },
        {
          icon: "🛣️",
          title: "Truck Court & Site Concrete",
          description: "Truck aprons, dock approaches, tractor trailer turning radii, and site flatwork around tilt-wall buildings.",
        },
        {
          icon: "📐",
          title: "Subgrade Stabilization",
          description: "Lime or cement stabilization of OKC clay subgrade before casting slab or interior slab pour — required, not optional.",
        },
      ]}
      subServices={{
        sectionEyebrow: "Concrete Scope",
        sectionTitle: "Tilt-Wall Concrete We Provide",
        items: [
          {
            title: "Casting Slab (Super-Flat)",
            bullets: [
              "FF35 floor flatness minimum — higher tolerance available for projects requiring it",
              "Bond breaker applied uniformly to casting slab surface before panel pour — critical for panel release",
              "Slab thickness and reinforcement designed for panel weight during tilting",
              "Laser screed finishing for flatness tolerance — not achievable with conventional screeding",
            ],
          },
          {
            title: "Grade Beams",
            bullets: [
              "Poured to exact panel-base elevation — surveyed and confirmed before pour",
              "Embedded anchor hardware placed per structural drawings — bolt pattern is not field-adjusted",
              "Properly cured before panel erection — panels should not land on green concrete",
              "Dowel placement for slab-to-grade-beam connection after panel erection",
            ],
          },
          {
            title: "Interior Slab on Grade",
            bullets: [
              "Poured after panel erection and bracing is complete and inspected",
              "FF35 minimum for light warehouse — FF45+ for narrow-aisle rack storage operations",
              "Vapor barrier and granular base required on OKC clay sites",
              "Joint layout coordinated with rack row placement to minimize joint crossings under load",
            ],
          },
          {
            title: "OKC Industrial Corridor Context",
            bullets: [
              "Active tilt-wall construction market along I-40 west, I-35 south, Meridian Avenue, and NW Expressway industrial corridors",
              "FDZ coordinates with general contractors and tilt-wall erectors — we understand the construction sequence",
              "Concrete scope typically: casting slab → grade beams → panel pour → erection → interior slab → site",
              "Pre-bid subgrade assessment available — clay PI testing and stabilization scope before bid",
            ],
          },
        ],
      }}
      sections={[
        {
          eyebrow: "Specifications",
          title: "Tilt-Wall Concrete",
          titleAccent: "Tolerance Requirements.",
          content: [
            "Tilt-wall concrete is tolerance-critical in ways standard commercial flatwork is not. Flatness, elevation, and embedded hardware placement are checked — not estimated.",
          ],
          table: {
            headers: ["Concrete Element", "Key Specification"],
            rows: [
              ["Casting slab flatness", "FF35 minimum (laser screed required)"],
              ["Grade beam elevation", "±1/8\" from structural design elevation"],
              ["Embedded hardware location", "Per structural drawings, surveyed before pour"],
              ["Interior slab flatness", "FF35 standard, FF45+ for narrow-aisle"],
              ["Panel concrete strength", "5,000 psi minimum at 28 days"],
              ["Subgrade bearing capacity", "Per geotechnical report — tested, not assumed"],
            ],
          },
        },
        {
          eyebrow: "Related Services",
          title: "Other Industrial",
          titleAccent: "Concrete Services.",
          content: [
            "<a href='/warehouse-floor-replacement-oklahoma-city' class='text-orange no-underline font-medium'>Warehouse Floor Replacement</a> — Phased floor replacement with flatness tolerances for rack storage and forklift operations.",
            "<a href='/loading-dock-construction-oklahoma-city' class='text-orange no-underline font-medium'>Loading Dock Construction</a> — Dock pits, aprons, truck courts, and dock leveler pocket construction.",
            "<a href='/equipment-foundations-oklahoma-city' class='text-orange no-underline font-medium'>Equipment Foundations</a> — Isolated machine foundations and anchor bolt pours for industrial equipment.",
            "<a href='/commercial-concrete-oklahoma-city' class='text-orange no-underline font-medium'>All Commercial Concrete</a> — Full range of commercial and industrial concrete services in OKC.",
          ],
        },
      ]}
      processEyebrow="Construction Sequence"
      processTitle="Tilt-Wall Concrete"
      processTitleAccent="Construction Sequence."
      processSteps={[
        { title: "Subgrade assessment and stabilization", description: "Test subgrade bearing capacity and PI on OKC clay sites. Lime or cement stabilization of clay subgrade before any concrete work begins." },
        { title: "Grade beam excavation and forming", description: "Excavate, set forms, and place reinforcement per structural drawings. Survey grade beam top elevation before pour." },
        { title: "Grade beam pour", description: "Pour grade beams to exact elevation with embedded anchor hardware placed per structural drawings. Cure before panel erection." },
        { title: "Casting slab pour", description: "Pour super-flat casting slab with bond breaker. Laser screed to FF35+ tolerance. Bond breaker applied uniformly after finishing." },
        { title: "Panel pour", description: "Pour tilt-up panels on casting slab with embedded hardware placed per panel drawings. Consolidate concrete around all inserts and blockouts." },
        { title: "Panel erection (by erector)", description: "Crane tilts panels and sets to grade beams. FDZ coordinates schedule — interior slab is not poured until erection and bracing is complete." },
        { title: "Interior slab pour", description: "Pour interior slab after erection inspection. Laser screed to FF tolerance. Joint layout per coordinated drawing with rack placement." },
      ]}
      faq={[
        {
          question: "What floor flatness is required for a tilt-wall casting slab?",
          answer: "FF35 is the standard minimum for tilt-wall casting slabs. Higher tolerances (FF45–FF50) are achievable with laser screed and experienced crews. A flat casting slab produces flatter panels — warped casting slabs produce warped panels. FDZ uses laser screed on all tilt-wall casting slab work.",
        },
        {
          question: "Why is subgrade stabilization required in Oklahoma City?",
          answer: "OKC sits on Permian red clay with high plasticity index (PI). Unstabilized clay will move seasonally with moisture changes, causing slab heave, panel warp, and grade beam cracking. FDZ requires PI testing before bid and specifies lime or cement stabilization to reduce PI to acceptable levels before any slab pour.",
        },
        {
          question: "Can FDZ handle the full concrete scope on a tilt-wall project?",
          answer: "Yes. FDZ provides casting slab, grade beams, panel pours, interior slab, and site concrete. We coordinate with the GC and tilt-wall erector on construction sequence. We don't do the structural engineering or panel design — but we execute the concrete scope to specification.",
        },
        {
          question: "When is the interior slab poured in tilt-wall construction?",
          answer: "Interior slab is poured after panel erection and bracing is complete and inspected — never before. Pouring interior slab before erection restricts equipment access and risks damaging the slab during tilting operations. FDZ follows the correct construction sequence on every tilt-wall project.",
        },
        {
          question: "What concrete strength do tilt-wall panels require?",
          answer: "Tilt-up panels typically require 5,000 psi concrete at 28 days — higher than standard 4,000 psi slab mix. The higher strength is required for tilting stresses and long-term structural performance. FDZ specifies panel mix design per structural engineering requirements, not standard residential specs.",
        },
      ]}
    />
  );
}
