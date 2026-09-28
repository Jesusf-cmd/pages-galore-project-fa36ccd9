import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import MailtoLink from "./MailtoLink";
import { useRegionalPhone } from "@/hooks/useRegionalPhone";
import { isKansasPath, normalizePath } from "@/lib/phones";
import { estimatePath } from "@/lib/estimatePath";

export default function Footer() {
  const phone = useRegionalPhone();
  const location = useLocation();
  return (
    <footer className="bg-darker px-4 md:px-12 py-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {/* Direct contact and the existing estimate form */}
      <div id="contact" className="max-w-xl mx-auto mb-8 scroll-mt-24 text-center">
        <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Get In Touch</div>
        <p className="text-sm text-muted-text mb-5">Tell us about your project and we’ll follow up with an estimate.</p>
        <Link
          to={isKansasPath(location.pathname) ? estimatePath(normalizePath(location.pathname).slice(1)) : "/#estimate"}
          className="btn-primary inline-block"
        >
          Request an Estimate →
        </Link>
      </div>
      {/* Contact info */}
      <div className="flex flex-wrap gap-6 justify-center mb-6 text-center">
        <div>
          <div className="text-[0.6rem] tracking-[0.14em] uppercase text-muted-text font-semibold mb-1">Contact FDZ Construction directly</div>
          <div className="flex flex-wrap gap-4 justify-center">
            <MailtoLink className="text-orange text-sm font-medium no-underline hover:underline" />
            <a href={`tel:${phone.tel}`} className="text-orange text-sm font-medium no-underline hover:underline">{phone.display}</a>
          </div>
          {!isKansasPath(location.pathname) && (
            <address className="not-italic text-[0.74rem] text-muted-text mt-2">
              7004 S Indiana Ave, Oklahoma City, OK 73159
            </address>
          )}
        </div>
      </div>
      {/* Licensing / trust section */}
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-2">{isKansasPath(location.pathname) ? "Wichita-area concrete crew" : "Licensed, Bonded &amp; Insured in Oklahoma"}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        <div className="col-span-2 md:col-span-1">
          <Logo className="h-12 w-auto opacity-90 mb-3" />
          <p className="text-[0.74rem] text-muted-text">{isKansasPath(location.pathname) ? "Concrete work in Wichita and nearby Sedgwick County." : "Oklahoma City's concrete & sewer line contractor. Licensed & insured in Oklahoma."}</p>
          <p className="text-[0.74rem] text-muted-text mt-2">© {new Date().getFullYear()} FDZ Construction LLC. All rights reserved.</p>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Our Services</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/#concrete-services" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Services</Link>
            <Link to="/sewer-line-repair-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Sewer Line Repair &amp; Installation</Link>
            <Link to="/skid-steer-services-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Skid Steer Services</Link>
            <Link to="/excavator-services-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Excavator Services</Link>
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
            <Link to="/commercial-concrete-wichita" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Commercial Concrete Wichita KS</Link>
            <Link to="/industrial-concrete-wichita" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Industrial Concrete Wichita KS</Link>
            <Link to="/retaining-walls-wichita" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Retaining Walls Wichita KS</Link>
            <Link to="/stamped-concrete-wichita" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Stamped Concrete Wichita KS</Link>
          </div>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Company</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/our-projects" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Projects</Link>
            <Link to="/blog" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Tips Blog</Link>
            <Link to="/sewer-line-repair-oklahoma-city#warranty" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Workmanship Warranty</Link>
            <a href={`tel:${phone.tel}`} className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">{phone.display}</a>
            <MailtoLink className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
