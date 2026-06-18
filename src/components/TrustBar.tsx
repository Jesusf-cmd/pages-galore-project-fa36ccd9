import { Shield, MapPin, Award, Clock, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed, Bonded & Insured" },
  { icon: MapPin, label: "Locally Owned" },
  { icon: Award, label: "1-Year Warranty" },
  { icon: Clock, label: "Free Estimates" },
  { icon: BadgeCheck, label: "8+ Years Experience" },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-border/30 px-4 md:px-12 py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-y-2">
        {badges.map((badge, i) => (
          <div
            key={i}
            className="group flex items-center gap-2 px-4 md:px-6 py-1.5 transition-transform duration-200 hover:scale-105"
          >
            <badge.icon className="w-5 h-5 text-orange shrink-0" strokeWidth={1.75} />
            <span className="font-display text-[0.82rem] font-bold uppercase tracking-wide text-foreground whitespace-nowrap">
              {badge.label}
            </span>
            {i < badges.length - 1 && (
              <span className="hidden md:block ml-4 w-px h-4 bg-muted-text/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
