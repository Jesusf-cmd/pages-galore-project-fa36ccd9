import { Link } from "react-router-dom";

const services = [
  { tag: "Residential", name: "Concrete Driveways", to: "/concrete-driveways" },
  { tag: "Residential", name: "Concrete Slabs & Patios", to: "/concrete-slabs" },
  { tag: "Decorative", name: "Stamped Concrete", to: "/stamped-concrete" },
  { tag: "Residential", name: "Concrete Patio OKC", to: "/concrete-patio-okc" },
  { tag: "Structural", name: "Concrete Foundations", to: "/concrete-foundations" },
  { tag: "Residential", name: "Concrete Sidewalks", to: "/concrete-sidewalks" },
  { tag: "Structural", name: "Retaining Walls", to: "/retaining-walls" },
  { tag: "Commercial", name: "Parking Lot Concrete", to: "/parking-lot-concrete" },
  { tag: "Commercial", name: "Curb & Gutter", to: "/curb-and-gutter" },
  { tag: "Commercial", name: "Commercial Slabs", to: "/commercial-concrete-slabs" },
];

export default function ServicesFooterGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {services.map(s => (
        <Link key={s.to} to={s.to} className="bg-darker p-4 md:p-5 no-underline block transition-colors hover:bg-orange/[0.06]">
          <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-1">{s.tag}</div>
          <div className="font-display text-[0.95rem] font-extrabold uppercase tracking-[0.04em] text-concrete">{s.name} →</div>
        </Link>
      ))}
    </div>
  );
}
