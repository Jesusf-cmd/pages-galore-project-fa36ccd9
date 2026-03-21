import { Link } from "react-router-dom";

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/redwood_logo_transparent.png/:/rs=h:182,cg:true,m/qt=q:80";

export default function Footer() {
  return (
    <footer className="bg-darker px-4 md:px-12 py-8" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
      {/* Contact info */}
      <div className="flex flex-wrap gap-6 justify-center mb-6 text-center">
        <div>
          <div className="text-[0.6rem] tracking-[0.14em] uppercase text-muted-text font-semibold mb-1">Contact Redwood Construction directly</div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:jesus.f@myconcreteestimate.com" className="text-orange text-sm font-medium no-underline hover:underline">jesus.f@myconcreteestimate.com</a>
            <a href="tel:4052470027" className="text-orange text-sm font-medium no-underline hover:underline">(405) 247-0027</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div>
          <img src={LOGO_URL} alt="Redwood Construction LLC" className="h-9 opacity-70" />
        </div>
        <p className="text-[0.74rem] text-muted-text text-center">
          © {new Date().getFullYear()} Redwood Construction LLC — Oklahoma City Concrete Contractors. All rights reserved.
        </p>
        <div className="flex gap-6 justify-center md:justify-end flex-wrap">
          <Link to="/concrete-driveways" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Driveways</Link>
          <Link to="/concrete-slabs" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Slabs</Link>
          <Link to="/stamped-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Stamped</Link>
          <Link to="/parking-lot-concrete" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Commercial</Link>
          <Link to="/blog" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Blog</Link>
          <Link to="/our-projects" className="text-[0.74rem] text-muted-text no-underline hover:text-concrete transition-colors">Our Work</Link>
        </div>
      </div>
    </footer>
  );
}
