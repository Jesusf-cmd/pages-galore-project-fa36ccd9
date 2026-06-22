import { Link } from "react-router-dom";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import InternalLinksHub from "@/components/InternalLinksHub";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";

const BASE = "https://fdzconstruction.com";

interface RepairData {
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1Lead: string;
  h1Accent: string;
  heroBlurbHtml: string;

  // problem-first intro
  problemTitle: string;
  problemAccent: string;
  problemHtml: string[];

  // repair vs replace diagnostic
  diagnosticTitle: string;
  diagnosticAccent: string;
  repairCases: string[];
  replaceCases: string[];

  // what we fix
  scopeBullets: { title: string; body: string }[];

  // process
  processTitle: string;
  processAccent: string;
  processSteps: { title: string; body: string }[];

  // pricing reality
  pricingHtml: string[];

  // FAQ
  faq: { question: string; answer: string }[];

  // related
  parentService: { label: string; to: string };
  related: { label: string; to: string }[];
}

const data: Record<string, RepairData> = {
  "driveway-repair-oklahoma-city": {
    path: "/driveway-repair-oklahoma-city",
    metaTitle: "Concrete Driveway Repair in Oklahoma City | FDZ Construction LLC",
    metaDescription:
      "Concrete driveway repair, leveling, joint sealing, and replacement in Oklahoma City. Honest repair-vs-replace evaluation. Free on-site estimate: (405) 458-4805.",
    eyebrow: "OKC Metro · Driveway Repair · Licensed & Insured",
    h1Lead: "Concrete Driveway Repair in",
    h1Accent: "Oklahoma City.",
    heroBlurbHtml:
      "Honest repair-vs-replace evaluation, joint sealing, leveling, and section replacement for <strong>Oklahoma City homeowners</strong> — across the full OKC metro. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Most Driveway Repairs Don't",
    problemAccent: "Solve the Real Problem.",
    problemHtml: [
      "<strong>Most quick driveway repairs we see — caulk over a crack, mudjacking under a sunken slab, surface patches — don't address the reason the driveway failed in the first place.</strong> The base moved. The drainage was wrong. The original joints weren't cut on time. The crack is the symptom; the cause is upstream.",
      "We do real repairs that solve real problems. That sometimes means joint sealing and section replacement. Sometimes it means slab leveling. And honestly — sometimes it means recommending replacement instead of repair, because the base is gone and a repair is throwing money at a slab that's going to fail again in two years.",
      "Every driveway repair we quote starts with a free on-site evaluation: what's the actual failure mode, is the base still sound, and what's the cheapest fix that will actually last. We give you the answer, even if it's not a job we end up doing.",
    ],
    diagnosticTitle: "Repair or Replace?",
    diagnosticAccent: "Here's How We Decide.",
    repairCases: [
      "Single isolated crack with no displacement — joint can be cleaned, filled, and sealed",
      "Settled or sunken section with a sound base around it — slab leveling is a candidate",
      "Spalling or scaling on the surface from de-icing salt or finish issues — resurfacing may work",
      "One panel of a multi-panel driveway has moved — replace just that panel, leave the rest",
      "Apron pulled away from the garage but the main slab is flat — apron-only replacement",
    ],
    replaceCases: [
      "Multiple cracks running in different directions across the slab — base is moving, repair won't stick",
      "Settled sections with no sound base around them — nothing to level against",
      "Slab tilting toward the house instead of away from it — drainage is wrong and repair won't fix that",
      "Visible heave from clay swelling — base has failed, slab needs to come out",
      "Driveway is more than ~20 years old and showing multiple failure modes — replacement is cheaper long-term",
    ],
    scopeBullets: [
      { title: "On-site evaluation", body: "Free, honest read on whether repair makes sense or replacement is the cheaper long-term answer. We tell you straight." },
      { title: "Joint sealing", body: "Clean, prep, and seal control joints and isolation joints with proper sealant. Stops water entry before it widens the crack." },
      { title: "Crack repair", body: "Routed, cleaned, and filled with structural epoxy or flexible sealant — depending on whether the crack is structural or movement." },
      { title: "Section replacement", body: "Saw-cut, remove, re-base, and re-pour individual panels where the rest of the slab is sound. Cheaper than full replacement when it works." },
      { title: "Apron replacement", body: "Pulled-away or cracked aprons replaced and tied properly to the existing slab and the garage or street." },
      { title: "Full replacement", body: "When repair isn't the right answer, we tear out, re-base properly, and pour a driveway built to last. See our <a href='/driveways-oklahoma-city' class='text-orange no-underline'>main driveway page</a>." },
    ],
    processTitle: "How a Driveway Repair",
    processAccent: "Actually Runs.",
    processSteps: [
      { title: "Evaluation", body: "We come out, walk the driveway, identify the failure mode, and give you an honest repair-vs-replace recommendation. Free." },
      { title: "Scope + quote", body: "Written scope with what we'll do, what we won't, and a fixed price. No surprises mid-job." },
      { title: "Prep + repair", body: "Sawcut, removal, base prep, or sealant work depending on the scope. Done to the same standards as a new pour." },
      { title: "Cure + handoff", body: "Joints sealed once cured. We walk the finished work with you before we leave." },
    ],
    pricingHtml: [
      "Driveway repair pricing varies more than new construction. Joint sealing on a typical residential driveway runs $300–$800. Single-panel replacement runs $400–$1,200 per panel depending on size and access. Apron replacement runs $1,500–$4,000. Full driveway tear-out and replacement follows our standard $6–$10 per square foot rate.",
      "When repair will cost more than 40–50% of replacement, replacement is almost always the better long-term answer — and we'll tell you so. Exact pricing after an on-site read.",
    ],
    faq: [
      {
        question: "Can a cracked concrete driveway actually be repaired, or does it always need replacement?",
        answer:
          "Depends on the crack and what caused it. A single isolated crack with no displacement can be cleaned and sealed. Multiple cracks running different directions usually mean the base is moving and repair won't last. We give an honest evaluation on site — repair when it makes sense, replacement when it doesn't.",
      },
      {
        question: "Is mudjacking or slab leveling a real fix?",
        answer:
          "It can be — when the slab settled but the surrounding base is sound. When the whole base has failed, leveling just gives you a flat slab on a bad base, and it sinks again. We evaluate the base before recommending leveling.",
      },
      {
        question: "How much does driveway repair cost in OKC?",
        answer:
          "Joint sealing on a typical residential driveway: $300–$800. Single-panel replacement: $400–$1,200. Apron replacement: $1,500–$4,000. Full replacement at standard $6–$10/sq ft. Exact pricing after we see the driveway.",
      },
      {
        question: "When is repair cheaper than replacement?",
        answer:
          "When the failure is isolated — one crack, one panel, an apron — and the rest of the slab and base is sound. When multiple failure modes are showing or the slab is 20+ years old, replacement is usually cheaper long-term.",
      },
      {
        question: "Will repair match the existing concrete color?",
        answer:
          "Section replacements and apron repairs will be visibly newer concrete that lightens over the first 12–18 months. Joint sealing and crack repair are largely invisible once cured. We're honest about the cosmetic outcome before the job starts.",
      },
      {
        question: "How long does a driveway repair last?",
        answer:
          "Depends on the failure cause being addressed. A joint sealing on a sound slab can last 5–10 years. A section replacement on a sound base can last decades. Repairs that don't address the underlying base or drainage issue typically fail again in 2–5 years.",
      },
    ],
    parentService: { label: "All Concrete Driveways", to: "/driveways-oklahoma-city" },
    related: [
      { label: "Foundation Repair", to: "/foundation-repair-oklahoma-city" },
      { label: "Driveways in Edmond", to: "/driveways-edmond" },
      { label: "Driveways in Norman", to: "/driveways-norman" },
      { label: "Driveways in Yukon", to: "/driveways-yukon" },
      { label: "Driveways in Moore", to: "/driveways-moore" },
      { label: "Driveways in Mustang", to: "/driveways-mustang" },
    ],
  },

  "foundation-repair-oklahoma-city": {
    path: "/foundation-repair-oklahoma-city",
    metaTitle: "Concrete Foundation Repair in Oklahoma City | FDZ Construction LLC",
    metaDescription:
      "Concrete foundation repair, slab leveling, drainage correction, and partial replacement in Oklahoma City. Honest evaluation — repair vs replace. Free estimate: (405) 458-4805.",
    eyebrow: "OKC Metro · Foundation Repair · Licensed & Insured",
    h1Lead: "Concrete Foundation Repair in",
    h1Accent: "Oklahoma City.",
    heroBlurbHtml:
      "Honest evaluation, drainage correction, slab leveling, and partial replacement for <strong>Oklahoma homeowners</strong> facing foundation movement on expansive clay. <a href='tel:4054584805'>(405) 458-4805</a>.",
    problemTitle: "Foundation Repair Is Usually a",
    problemAccent: "Drainage Problem.",
    problemHtml: [
      "<strong>Most foundation movement we evaluate in OKC isn't a foundation problem — it's a drainage problem causing a foundation problem.</strong> Water trapped against the perimeter accelerates the expansive clay's swell-shrink cycle under the slab edge. The clay heaves. The foundation moves. The drywall cracks inside. Pier-and-beam contractors get called.",
      "The piers might be part of the fix, but they aren't the whole fix. If the drainage that caused the original movement isn't corrected, the foundation moves again — just slower. We've seen homeowners spend $30,000 on piers and have the same cracks reopen in five years because the gutters were still dumping water at the foundation.",
      "We don't sell piers. What we do: evaluate the actual cause of the movement, correct the drainage that's driving it, level slabs where leveling is the right answer, and recommend a structural engineer for cases where piers are genuinely required. Honest first, fix second.",
    ],
    diagnosticTitle: "Repair, Stabilize, or Pier?",
    diagnosticAccent: "Here's the Real Decision.",
    repairCases: [
      "Drywall cracks above doors and windows with no slab tilt — usually a drainage and humidity issue, not structural",
      "Hairline cracks in the slab with no displacement — typically shrinkage, not movement",
      "Doors sticking seasonally that work fine in dry months — clay swelling, fixable with drainage correction",
      "Sunken section of a slab with surrounding slab sound — slab leveling is a candidate",
      "Perimeter drainage issues (gutter dumps, negative slope toward house) — fixable without touching the foundation itself",
    ],
    replaceCases: [
      "Visible slab tilt or displacement at multiple locations — structural movement, engineer needed",
      "Cracks in the slab wider than 1/4\" with displacement on either side — base has failed",
      "Foundation cracks running through brick or block — structural, engineer needed",
      "Floor visibly out of level by more than 1\" across a room — pier evaluation needed",
      "Pier-and-thickened-slab original lot — failure mode is rare but serious when it occurs",
    ],
    scopeBullets: [
      { title: "On-site evaluation", body: "Walk the property, identify the actual failure mode, check drainage, and give you a straight answer. We are not a pier sales operation." },
      { title: "Drainage correction", body: "Re-grading around perimeter, gutter extensions, French drains where the lot requires them. The fix that prevents the next round of movement." },
      { title: "Slab leveling", body: "Where a section has sunk and the surrounding base is sound. We don't level slabs on a failing base — it just sinks again." },
      { title: "Partial slab replacement", body: "Saw-cut, remove, re-base, re-pour sections of slab where the failure is contained to one area." },
      { title: "Engineer coordination", body: "For cases where structural piers or beam work is genuinely required, we coordinate with a structural engineer for the spec." },
      { title: "Full foundation replacement", body: "When the foundation is past the point of repair — rare but real. Tear-out, proper base prep, engineered new foundation. See our <a href='/foundations-oklahoma-city' class='text-orange no-underline'>foundations page</a>." },
    ],
    processTitle: "How a Foundation Repair",
    processAccent: "Actually Runs.",
    processSteps: [
      { title: "Free on-site evaluation", body: "We walk the property, look at the cracks, check the slope around the perimeter, and identify the failure mode before quoting anything." },
      { title: "Honest recommendation", body: "Drainage correction, slab leveling, partial replacement, structural engineer referral — whichever actually solves the problem. Sometimes we recommend doing nothing." },
      { title: "Written scope + quote", body: "Fixed scope, fixed price. No surprises mid-job. We tell you what's covered and what's not." },
      { title: "Repair + follow-up", body: "Repair to the scope. After the fix, we walk the property with you and explain what to watch for going forward." },
    ],
    pricingHtml: [
      "Foundation repair pricing varies enormously by cause and scope. Drainage correction work runs $500–$3,000 depending on extent. Slab leveling for a sunken section runs $800–$2,500. Partial slab replacement runs $1,500–$6,000 depending on size and access. Structural pier work (when actually needed) runs $3,500–$25,000+ and requires engineered plans.",
      "We give a real number after we walk the property. What we won't do: quote piers over the phone or recommend work that won't actually solve your problem.",
    ],
    faq: [
      {
        question: "Do I need foundation piers?",
        answer:
          "Probably not. Most foundation movement in OKC is driven by drainage problems against the perimeter, and correcting the drainage stops the movement. Piers are required for actual structural failure — visible slab displacement, floor more than 1\" out of level, cracks through brick or block. We evaluate first and recommend honestly.",
      },
      {
        question: "What's causing the cracks in my drywall?",
        answer:
          "Usually one of three things: seasonal humidity and lumber movement (cosmetic, not structural), foundation movement from drainage issues (fixable with drainage correction), or actual foundation failure (needs an engineer). We can tell the difference on site.",
      },
      {
        question: "Will the cracks come back after repair?",
        answer:
          "If the underlying cause is fixed (drainage, base, structural), repaired cracks typically don't return. If only the cosmetic crack is patched without addressing the cause, they reopen within seasons. We address the cause.",
      },
      {
        question: "How much does foundation repair cost in Oklahoma City?",
        answer:
          "Drainage correction: $500–$3,000. Slab leveling: $800–$2,500. Partial slab replacement: $1,500–$6,000. Structural pier work (when actually needed): $3,500–$25,000+. Honest pricing after an on-site evaluation. No phone quotes for foundation work — it's not responsible.",
      },
      {
        question: "Do you do structural pier installation?",
        answer:
          "We coordinate with a structural engineer on cases where piers are genuinely required and execute the spec. We are not a pier sales operation — we won't push piers when drainage correction or slab leveling solves the problem.",
      },
      {
        question: "How urgent is foundation repair?",
        answer:
          "Depends on what's moving and how fast. Drainage problems left uncorrected get worse — not always quickly, but predictably. Visible structural displacement that's still moving is urgent. Hairline cracks in a slab with no displacement are rarely urgent. We tell you what's urgent and what can wait.",
      },
    ],
    parentService: { label: "All Concrete Foundations", to: "/foundations-oklahoma-city" },
    related: [
      { label: "Driveway Repair", to: "/driveway-repair-oklahoma-city" },
      { label: "Foundations in Edmond", to: "/foundations-edmond" },
      { label: "Foundations in Norman", to: "/foundations-norman" },
      { label: "Foundations in Yukon", to: "/foundations-yukon" },
      { label: "Retaining Walls", to: "/retaining-walls-oklahoma-city" },
    ],
  },
};

export const REPAIR_SLUGS = Object.keys(data);

export default function RepairService({ slug }: { slug: string }) {
  const d = data[slug];
  if (!d) {
    return (
      <main className="page-hero">
        <h1>Page Not Found</h1>
        <Link to="/" className="btn-primary mt-8">← Back home</Link>
      </main>
    );
  }
  const canonical = `${BASE}${d.path}`;
  useSEO({
    title: d.metaTitle,
    description: d.metaDescription,
    canonical,
    og: { title: d.metaTitle, description: d.metaDescription, type: "website", url: canonical },
  });

  return (
    <main>
      <section className="page-hero">
        <div className="hero-glow" />
        <span className="eyebrow mb-5 block">{d.eyebrow}</span>
        <h1 className="max-w-[820px] mb-5">{d.h1Lead}<br/><span className="text-orange">{d.h1Accent}</span></h1>
        <p className="prose-muted max-w-[680px] mb-8" dangerouslySetInnerHTML={{ __html: d.heroBlurbHtml }} />
        <div className="flex gap-4 flex-wrap">
          <Link to="/#estimate" className="btn-primary">Free On-Site Evaluation →</Link>
          <a href="tel:4054584805" className="btn-outline">📞 (405) 458-4805</a>
        </div>
      </section>
      <TrustBar />

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">The Honest Conversation</div>
          <h2 className="mb-4">{d.problemTitle}<br/><em className="h2-accent">{d.problemAccent}</em></h2>
          {d.problemHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Diagnostic Guide</div>
          <h2 className="mb-8">{d.diagnosticTitle}<br/><em className="h2-accent">{d.diagnosticAccent}</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <div className="bg-stone p-8">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-3">Repair Makes Sense When</div>
              <ul className="space-y-3">
                {d.repairCases.map((c, i) => (
                  <li key={i} className="text-[0.86rem] text-muted-text leading-relaxed flex gap-3">
                    <span className="text-orange font-bold mt-1">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone p-8">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-3">Replace Instead When</div>
              <ul className="space-y-3">
                {d.replaceCases.map((c, i) => (
                  <li key={i} className="text-[0.86rem] text-muted-text leading-relaxed flex gap-3">
                    <span className="text-orange font-bold mt-1">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">What We Do</div>
          <h2 className="mb-8">Our Repair<br/><em className="h2-accent">Scope.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.scopeBullets.map((b, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2 text-orange">{b.title}</div>
                <p className="text-[0.86rem] text-muted-text leading-relaxed" dangerouslySetInnerHTML={{ __html: b.body }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <div className="section-eye">Process</div>
          <h2 className="mb-8">{d.processTitle}<br/><em className="h2-accent">{d.processAccent}</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            {d.processSteps.map((s, i) => (
              <div key={i} className="bg-stone p-6">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">Step {i + 1}</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] mb-2">{s.title}</div>
                <p className="text-[0.82rem] text-muted-text leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Pricing Reality</div>
          <h2 className="mb-4">What Repair<br/><em className="h2-accent">Actually Costs.</em></h2>
          {d.pricingHtml.map((p, i) => (
            <p key={i} className="prose-muted mb-4 max-w-[820px]">{p}</p>
          ))}
          <div className="mt-6">
            <Link to="/#estimate" className="btn-primary">Request Free On-Site Evaluation →</Link>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding section-alt">
          <FAQ items={d.faq} />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="section-padding">
          <div className="section-eye">Related</div>
          <h2 className="mb-6">More From<br/><em className="h2-accent">FDZ Construction.</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
            <Link to={d.parentService.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
              <div className="text-[0.6rem] tracking-[0.12em] uppercase text-orange font-bold mb-2">New Construction</div>
              <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{d.parentService.label} →</div>
            </Link>
            {d.related.map((r, i) => (
              <Link key={i} to={r.to} className="bg-stone p-6 no-underline hover:bg-orange/[0.05] transition-colors">
                <div className="text-[0.6rem] tracking-[0.12em] uppercase text-muted-text font-bold mb-2">Related</div>
                <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{r.label} →</div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <InternalLinksHub />
      <FinalCTA />
    </main>
  );
}
