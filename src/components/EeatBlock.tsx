import { Link } from "react-router-dom";

/** Owner and company trust signals — use on homepage, sewer page, and key landers. */
export default function EeatBlock({ compact }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "p-5 md:p-6" : "p-6 md:p-8"}
      style={{ border: "1px solid hsl(var(--concrete) / 0.1)", background: "hsl(var(--stone))" }}
    >
      <div className="text-[0.66rem] tracking-[0.12em] uppercase text-orange font-bold mb-3">Who We Are</div>
      <h3 className="text-base md:text-lg mb-3">Owner-Led. Oklahoma Licensed.</h3>
      <p className="text-[0.85rem] text-muted-text leading-relaxed font-light mb-4">
        <strong className="text-concrete">David Fernandez</strong> owns and operates FDZ Construction LLC from our south Oklahoma City shop at{" "}
        <a href="https://www.google.com/maps/search/?api=1&query=7004+S+Indiana+Ave,+Oklahoma+City,+OK+73159" className="text-orange no-underline" rel="noopener noreferrer">
          7004 S Indiana Ave
        </a>
        . David leads the crew on concrete and sewer line work across the OKC metro — not a dispatcher, not a subcontractor network.
      </p>
      <ul className="text-[0.82rem] text-muted-text leading-relaxed font-light space-y-2 mb-4" style={{ listStyle: "none", padding: 0 }}>
        <li>▸ <strong className="text-concrete">8+ years</strong> serving Oklahoma City, Edmond, Norman, Moore, and surrounding communities</li>
        <li>▸ <strong className="text-concrete">Licensed, bonded &amp; insured</strong> Oklahoma contractor — certificate of insurance available on request</li>
        <li>▸ <strong className="text-concrete">Hundreds of residential projects</strong> completed across the metro — driveways, slabs, foundations, and sewer line repair with concrete restoration</li>
        <li>▸ <strong className="text-concrete">2-year workmanship warranty</strong> on concrete and sewer work, including hardscape restoration after excavation</li>
      </ul>
      {!compact && (
        <p className="text-[0.78rem] text-muted-text">
          Questions before you book? Call David&apos;s team at <a href="tel:4054584805" className="text-orange no-underline font-medium">(405) 458-4805</a> or email{" "}
          <a href="mailto:jesus@fdzconstruction.com" className="text-orange no-underline">jesus@fdzconstruction.com</a>.
          {" "}See our <Link to="/sewer-line-repair-oklahoma-city#warranty" className="text-orange no-underline">warranty details</Link> and full{" "}
          <Link to="/sewer-line-repair-oklahoma-city" className="text-orange no-underline">sewer line repair process</Link>.
        </p>
      )}
    </div>
  );
}
