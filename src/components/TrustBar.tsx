import { Shield, Award, Users, MapPin, Star } from "lucide-react";

export type TrustBarProps = {
  /**
   * Optional Google rating display. Renders nothing until set.
   * TODO(FDZ): set googleRating once a verified Google Business Profile rating is confirmed.
   * Never hard-code a rating.
   */
  googleRating?: {
    score: number;
    reviewCount?: number;
  } | null;
};

const items = [
  { icon: Shield, label: "Licensed, bonded & insured in Oklahoma" },
  { icon: MapPin, label: "8+ years in the OKC metro" },
  { icon: Award, label: "2-year workmanship warranty" },
  { icon: Users, label: "One self-performing crew" },
] as const;

export default function TrustBar({ googleRating = null }: TrustBarProps) {
  const showRating =
    googleRating != null &&
    typeof googleRating.score === "number" &&
    Number.isFinite(googleRating.score);

  const badges = [
    ...(showRating
      ? [
          {
            icon: Star,
            label:
              googleRating!.reviewCount != null
                ? `${googleRating!.score}★ Google · ${googleRating!.reviewCount} reviews`
                : `${googleRating!.score}★ Google`,
          },
        ]
      : []),
    ...items,
  ];

  return (
    <div className="bg-white border-b border-border/30 px-4 md:px-12 py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-y-2">
        {badges.map((badge, i) => (
          <div
            key={badge.label}
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
