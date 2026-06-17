import { Link } from "react-router-dom";

const services = [
  { tag: "Residential", name: "Concrete Driveways", to: "/driveways-oklahoma-city" },
  { tag: "Residential", name: "Patios, Slabs & Stamped", to: "/patios-oklahoma-city" },
  { tag: "Structural", name: "Foundations", to: "/foundations-oklahoma-city" },
  { tag: "Structural", name: "Retaining Walls", to: "/retaining-walls-oklahoma-city" },
  { tag: "Residential", name: "Sidewalks, Curb & Gutter", to: "/sidewalks-oklahoma-city" },
  { tag: "Commercial", name: "Commercial Concrete", to: "/commercial-concrete-oklahoma-city" },
  { tag: "Commercial", name: "Parking Lots", to: "/parking-lots-oklahoma-city" },
];

export default function ServicesFooterGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-concrete/[0.08]" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {services.map(s => (
        <Link key={s.to} to={s.to} className="bg-darker p-4 md:p-5 no-underline block transition-colors hover:bg-orange/[0.06]">
          <div className="text-[0.58rem] tracking-[0.14em] uppercase text-orange font-bold mb-1">{s.tag}</div>
          <div className="font-display text-[0.95rem] font-extrabold uppercase tracking-[0.04em] text-concrete">{s.name} →</div>
        </Link>
      ))}
    </div>
  );
}
