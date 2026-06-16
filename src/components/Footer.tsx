import { Link } from "react-router-dom";

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/redwood_logo_transparent.png/:/rs=h:182,cg:true,m/qt=q:80";

export default function Footer() {
  return (
    <footer className="bg-darker px-4 md:px-12 py-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {/* HubSpot Contact Form */}
      <div className="max-w-xl mx-auto mb-8">
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
            <a href="mailto:jesus.f@myconcreteestimate.com" className="text-orange text-sm font-medium no-underline hover:underline">jesus.f@myconcreteestimate.com</a>
            <a href="tel:4054584805" className="text-orange text-sm font-medium no-underline hover:underline">(405) 458-4805</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div>
          <img src={LOGO_URL} alt="FDZ Construction LLC — Oklahoma City Concrete Contractor" className="h-9 opacity-70 mb-3" />
          <p className="text-[0.74rem] text-muted-text">Oklahoma City's concrete contractor. Licensed &amp; insured in Oklahoma.</p>
          <p className="text-[0.74rem] text-muted-text mt-2">© {new Date().getFullYear()} FDZ Construction LLC. All rights reserved.</p>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Concrete Services</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/driveways-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Driveways OKC</Link>
            <Link to="/patios-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Patios, Slabs & Stamped Concrete</Link>
            <Link to="/foundations-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Foundations & Retaining Walls</Link>
            <Link to="/sidewalks-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Sidewalks, Curb & Gutter</Link>
            <Link to="/commercial-concrete-oklahoma-city" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Commercial Concrete OKC</Link>
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
          </div>
        </div>
        <div>
          <div className="text-[0.66rem] tracking-[0.12em] uppercase text-concrete font-semibold mb-3">Company</div>
          <div className="flex flex-col gap-1.5">
            <Link to="/our-projects" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Our Work</Link>
            <Link to="/blog" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Concrete Tips Blog</Link>
            <span className="text-[0.74rem] text-muted-text">Workmanship Warranty</span>
            <a href="tel:4054584805" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">(405) 458-4805</a>
            <a href="mailto:jesus.f@myconcreteestimate.com" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">jesus.f@myconcreteestimate.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
