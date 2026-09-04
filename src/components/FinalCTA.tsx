import { Link } from "react-router-dom";

type FinalCTAProps = {
  heading?: string;
  headingAccent?: string;
  description?: string;
  buttonLabel?: string;
};

export default function FinalCTA({
  heading = "Ready to Pour?",
  headingAccent = "Get Your Free Estimate.",
  description = "Respond within one business day. No phone estimates — we visit your property before quoting.",
  buttonLabel = "Get Free Estimate →",
}: FinalCTAProps = {}) {
  return (
    <div className="bg-orange px-4 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
      <div>
        <div className="font-display text-[clamp(2.2rem,4vw,3.8rem)] font-black uppercase leading-[0.95] text-white">
          {heading}<br />
          <span className="text-white/40">{headingAccent}</span>
        </div>
        <p className="text-[0.9rem] text-white/70 mt-3 font-light max-w-[400px]">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <Link to="/#estimate" className="btn-white text-center">{buttonLabel}</Link>
        <div className="text-[0.75rem] text-white/70 text-center">
          or call <a href="tel:4054584805" className="text-white font-bold no-underline">(405) 458-4805</a>
        </div>
      </div>
    </div>
  );
}
