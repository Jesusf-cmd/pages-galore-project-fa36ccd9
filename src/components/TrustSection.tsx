import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Umbrella,
  MapPin,
  ThumbsUp,
  ClipboardList,
  Zap,
  DollarSign,
  Sparkles,
  Clock,
  MessageCircle,
} from "lucide-react";
import CountUp from "react-countup";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

/* ── primary badges ── */
const primaryBadges = [
  {
    icon: Shield,
    title: "Licensed Contractor",
    line1: "Oklahoma Licensed",
    line2: "State Verified",
    sub: "Verified with Oklahoma Construction Industries Board",
  },
  {
    icon: Umbrella,
    title: "Fully Insured",
    line1: "Liability & Workers Comp",
    line2: "Full Coverage",
    sub: "Your property and our workers are protected",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    line1: "Oklahoma City Based",
    line2: "Family Operated",
    sub: "Proudly serving the OKC metro community",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    line1: "Quality Workmanship",
    line2: "Guaranteed",
    sub: "We're not done until you're completely satisfied",
  },
];

/* ── secondary credentials ── */
const secondaryBadges = [
  { icon: ClipboardList, label: "Free Estimates" },
  { icon: Zap, label: "Same-Day Response" },
  { icon: DollarSign, label: "No Hidden Fees" },
  { icon: Sparkles, label: "Clean Job Sites" },
  { icon: Clock, label: "On-Time Completion" },
  { icon: MessageCircle, label: "Bilingual Service" },
];

/* ── stats ── */
const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Customers" },
  { value: 8, suffix: "", label: "Cities Served" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

/* ── service area cities ── */
const cities = [
  "Oklahoma City",
  "Edmond",
  "Norman",
  "Moore",
  "Yukon",
  "Mustang",
  "Midwest City",
  "Del City",
];

/* ── count-up trigger hook ── */
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export default function TrustSection() {
  const counter = useInView();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* header */}
        <ScrollReveal className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground">
            Why Trust FDZ Construction
          </h2>
          <p className="mt-3 text-muted-text text-base max-w-xl mx-auto">
            Licensed, insured, and committed to quality concrete work
          </p>
        </ScrollReveal>

        {/* primary badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {primaryBadges.map((b, i) => (
            <ScrollReveal key={i}>
              <div className="group rounded-lg border border-border/20 bg-concrete/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                <b.icon
                  className="mx-auto w-10 h-10 text-orange mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-foreground/80">
                  {b.line1}
                </p>
                <p className="text-sm font-semibold text-orange">{b.line2}</p>
                <p className="mt-2 text-xs text-muted-text leading-relaxed">
                  {b.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* secondary credentials */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {secondaryBadges.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 py-4 px-2 rounded-md transition-all duration-200 hover:bg-concrete/30 hover:-translate-y-0.5"
              >
                <b.icon className="w-6 h-6 text-orange" strokeWidth={1.75} />
                <span className="font-display text-xs font-bold uppercase tracking-wide text-foreground text-center">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* stats */}
        <div
          ref={counter.ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-stone rounded-lg py-10 px-6"
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-orange">
                {counter.visible ? (
                  <CountUp end={s.value} duration={2} suffix={s.suffix} />
                ) : (
                  `0${s.suffix}`
                )}
              </span>
              <p className="mt-1 text-sm text-concrete/70 uppercase tracking-wide font-display font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* certifications placeholder */}
        <ScrollReveal className="mb-16">
          <div className="border border-dashed border-muted-text/30 rounded-lg py-8 px-6 text-center">
            <p className="text-muted-text text-sm uppercase tracking-wide font-display font-semibold mb-2">
              Certifications & Affiliations
            </p>
            <p className="text-muted-text/60 text-xs">
              BBB Accredited Business &bull; Add your certification logos here
            </p>
          </div>
        </ScrollReveal>

        {/* service areas */}
        <ScrollReveal className="mb-16">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground text-center mb-6">
            Proudly Serving
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 rounded-full border border-border/20 text-sm font-display font-semibold uppercase tracking-wide text-foreground hover:bg-orange hover:text-primary-foreground transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-foreground">
            Ready to work with a contractor you can trust?
          </h3>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/estimate"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-orange text-primary-foreground font-display font-bold uppercase tracking-wide text-sm hover:bg-orange-light transition-colors"
            >
              Get Your Free Estimate
            </Link>
            <a
              href="tel:4054584805"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border border-foreground/20 text-foreground font-display font-bold uppercase tracking-wide text-sm hover:bg-foreground/5 transition-colors"
            >
              Call (405) 458-4805
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-text">
            Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang,
            Midwest City &amp; Del City
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
