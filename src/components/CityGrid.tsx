import { Link } from "react-router-dom";

const cities = [
  { county: "Oklahoma County", name: "Oklahoma City", to: "/oklahoma-city-concrete" },
  { county: "Oklahoma County", name: "Edmond", to: "/edmond-concrete" },
  { county: "Cleveland County", name: "Norman", to: "/norman-ok-concrete" },
  { county: "Canadian County", name: "Yukon", to: "/yukon-oklahoma-concrete" },
  { county: "Canadian County", name: "Mustang", to: "/mustang-oklahoma-concrete" },
  { county: "Cleveland County", name: "Moore", to: "/moore-oklahoma-concrete" },
  { county: "Oklahoma County", name: "Midwest City", to: "/midwest-city-oklahoma-concrete" },
  { county: "Oklahoma County", name: "Del City", to: "/del-city-oklahoma-concrete" },
  { county: "Payne County", name: "Stillwater", to: "/stillwater-oklahoma-concrete" },
];

export default function CityGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-concrete/[0.08] mt-8" style={{ border: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {cities.map(c => (
        <Link key={c.to} to={c.to} className="bg-stone p-4 md:p-5 no-underline block transition-colors hover:bg-orange/[0.06]">
          <div className="text-[0.6rem] tracking-[0.14em] uppercase text-orange font-bold mb-1">{c.county}</div>
          <div className="font-display text-base font-extrabold uppercase tracking-[0.04em] text-concrete">{c.name} →</div>
        </Link>
      ))}
    </div>
  );
}
