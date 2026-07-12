import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-darker px-4 md:px-12 py-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {/* HubSpot Contact Form */}
      <div id="contact" className="max-w-xl mx-auto mb-8 scroll-mt-24">
        <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3 text-center">Get In Touch</div>
        <div
          className="hs-form-frame"
          data-region="na1"
          data-form-id="b4b62043-9569-4050-aee6-30622dda3654"
          data-portal-id="51244012"
        />
      </div>
      {/* Contact info */}
      <div className="flex flex-wrap gap-6 justify-center mb-6 text-center">
        <div>
          <div className="text-[0.6rem] tracking-[0.14em] uppercase text-muted-text font-semibold mb-1">Contact FDZ Construction directly</div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:jesus@fdzconstruction.com" className="text-orange text-sm font-medium no-underline hover:underline">jesus@fdzconstruction.com</a>
            <a href="tel:4054584805" className="text-orange text-sm font-medium no-underline hover:underline">(405) 458-4805</a>
          </div>
          <address className="not-italic text-[0.74rem] text-muted-text mt-2">7004 S Indiana Ave, Oklahoma City, OK 73159</address>
        </div>
      </div>
      {/* Licensing / trust section */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-2">Licensed, Bonded &amp; Insured in Oklahoma</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-[0.72rem] text-muted-text">
          <span>Concrete Contractor License #: [CONCRETE LICENSE # — TO BE PROVIDED]</span>
          <span>HVAC License #: [HVAC LICENSE # — TO BE PROVIDED]</span>
          <span>Plumbing License #: 75456</span>
          <span>Electrical License #: [ELECTRICAL LICENSE # — TO BE PROVIDED]</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <Logo className="h-12 w-auto opacity-90 mb-3" />
          <p className="text-[0.74rem] text-muted-text">Oklahoma City's concrete, HVAC, plumbing &amp; electrical contractor. Licensed &amp; insured in Oklahoma.</p>
          <p className="text-[0.74rem] text-muted-text mt-2">© {new Date().getFullYear()} FDZ Construction LLC. All rights reserved.</p>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Our Trades</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/#concrete-services" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete</Link>
            <Link to="/hvac-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">HVAC</Link>
            <Link to="/plumbing-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Plumbing</Link>
            <Link to="/electrical-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Electrical</Link>
            <Link to="/emergency-services-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">24/7 Emergency Services</Link>
          </div>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Concrete Services</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/driveways-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Driveways OKC</Link>
            <Link to="/patios-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Patios, Slabs & Stamped Concrete</Link>
            <Link to="/foundations-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Foundations OKC</Link>
            <Link to="/retaining-walls-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Retaining Walls OKC</Link>
            <Link to="/sidewalks-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Sidewalks, Curb & Gutter</Link>
            <Link to="/sewer-line-repair-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Sewer Line Repair OKC</Link>
            <Link to="/commercial-concrete-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Commercial Concrete OKC</Link>
            <Link to="/parking-lots-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Parking Lots OKC</Link>
          </div>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Service Areas</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/oklahoma-city-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Oklahoma City</Link>
            <Link to="/edmond-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Edmond OK</Link>
            <Link to="/norman-ok-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Norman OK</Link>
            <Link to="/yukon-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Yukon OK</Link>
            <Link to="/mustang-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Mustang OK</Link>
            <Link to="/moore-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Moore OK</Link>
            <Link to="/midwest-city-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Midwest City</Link>
            <Link to="/del-city-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Contractor Del City OK</Link>
            <Link to="/stillwater-oklahoma-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete & Sewer Contractor Stillwater OK</Link>
          </div>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Company</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/our-projects" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Projects</Link>
            <Link to="/blog" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Tips Blog</Link>
            <span className="text-[0.74rem] text-muted-text">Workmanship Warranty</span>
            <a href="tel:4054584805" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">(405) 458-4805</a>
            <a href="mailto:jesus@fdzconstruction.com" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">jesus@fdzconstruction.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
