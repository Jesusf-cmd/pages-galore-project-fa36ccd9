import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://img1.wsimg.com/isteam/ip/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/redwood_logo_transparent.png/:/rs=h:182,cg:true,m/qt=q:80";

const residentialLinks = [
  { to: "/concrete-driveways", label: "Concrete Driveways" },
  { to: "/concrete-slabs", label: "Concrete Slabs & Patios" },
  { to: "/concrete-patio-okc", label: "Concrete Patio OKC" },
  { to: "/stamped-concrete", label: "Stamped Concrete" },
  { to: "/concrete-foundations", label: "Concrete Foundations" },
  { to: "/concrete-sidewalks", label: "Concrete Sidewalks" },
  { to: "/retaining-walls", label: "Retaining Walls" },
];

const commercialLinks = [
  { to: "/parking-lot-concrete", label: "Parking Lot Concrete" },
  { to: "/curb-and-gutter", label: "Curb & Gutter" },
  { to: "/commercial-concrete-slabs", label: "Commercial Slabs" },
  { to: "/concrete-foundations", label: "Commercial Foundations" },
];

const areaLinks = [
  { to: "/oklahoma-city-concrete", label: "Oklahoma City" },
  { to: "/edmond-concrete", label: "Edmond" },
  { to: "/norman-ok-concrete", label: "Norman" },
  { to: "/yukon-oklahoma-concrete", label: "Yukon" },
  { to: "/mustang-oklahoma-concrete", label: "Mustang" },
  { to: "/moore-oklahoma-concrete", label: "Moore" },
  { to: "/midwest-city-oklahoma-concrete", label: "Midwest City" },
  { to: "/del-city-oklahoma-concrete", label: "Del City" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleSection = (section: string) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-4 md:px-12 py-3 transition-all duration-200 ${
        scrolled ? "bg-darker/98 backdrop-blur-xl" : "bg-darker/96 backdrop-blur-md"
      }`}
      style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}
    >
      <Link to="/" className="flex flex-col gap-0.5">
        <img src={LOGO_URL} alt="Redwood Construction LLC — Concrete Contractors Oklahoma City" className="h-[40px] md:h-[50px] w-auto object-contain" loading="eager" />
        <span className="hidden sm:block text-[0.58rem] tracking-[0.14em] uppercase text-muted-text font-medium">
          Powered by <span className="text-orange">Redwood Construction LLC</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-0 list-none">
        <NavDropdown label="Residential Concrete" items={residentialLinks} />
        <NavDropdown label="Commercial Concrete" items={commercialLinks} />
        <NavDropdown label="Service Areas" items={areaLinks} />
        <li><Link to="/our-projects" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">Our Work</Link></li>
        <li><Link to="/blog" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">Blog</Link></li>
      </ul>

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
        <div className="flex flex-col items-end">
          <span className="text-[0.56rem] tracking-[0.14em] uppercase text-muted-text">Free Estimate</span>
          <a href="tel:4052470027" className="font-display text-lg font-extrabold text-orange no-underline leading-tight">(405) 247-0027</a>
        </div>
        <Link to="/#estimate" className="bg-orange text-white px-5 py-2 font-display text-[0.8rem] font-extrabold tracking-[0.08em] uppercase no-underline transition-colors hover:bg-orange-light whitespace-nowrap">
          Get Quote →
        </Link>
      </div>

      {/* Mobile: phone + hamburger */}
      <div className="flex lg:hidden items-center gap-2">
        <a href="tel:4052470027" className="bg-orange text-white px-3 py-2 font-display text-[0.72rem] font-extrabold tracking-[0.06em] uppercase no-underline whitespace-nowrap">
          📞 Call
        </a>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-concrete p-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[56px] bg-darker/98 backdrop-blur-xl lg:hidden z-[99] overflow-y-auto overscroll-contain" style={{ borderTop: "1px solid hsl(var(--concrete) / 0.08)" }}>
          <div className="p-5 pb-24 space-y-0">
            {/* Accordion sections for touch */}
            <MobileAccordion label="Residential Concrete" isOpen={openSection === "residential"} onToggle={() => toggleSection("residential")}>
              {residentialLinks.map(l => <Link key={l.to} to={l.to} className="block py-3 px-4 text-[0.9rem] text-muted-text active:text-concrete active:bg-concrete/[0.04] no-underline">{l.label}</Link>)}
            </MobileAccordion>
            <MobileAccordion label="Commercial Concrete" isOpen={openSection === "commercial"} onToggle={() => toggleSection("commercial")}>
              {commercialLinks.map(l => <Link key={l.to} to={l.to} className="block py-3 px-4 text-[0.9rem] text-muted-text active:text-concrete active:bg-concrete/[0.04] no-underline">{l.label}</Link>)}
            </MobileAccordion>
            <MobileAccordion label="Service Areas" isOpen={openSection === "areas"} onToggle={() => toggleSection("areas")}>
              {areaLinks.map(l => <Link key={l.to} to={l.to} className="block py-3 px-4 text-[0.9rem] text-muted-text active:text-concrete active:bg-concrete/[0.04] no-underline">{l.label}</Link>)}
            </MobileAccordion>
            <Link to="/our-projects" className="block py-4 text-[0.9rem] text-concrete font-medium no-underline uppercase tracking-wider" style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}>Our Work</Link>
            <Link to="/blog" className="block py-4 text-[0.9rem] text-concrete font-medium no-underline uppercase tracking-wider" style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}>Blog</Link>

            {/* Sticky-feeling CTA block */}
            <div className="pt-6 flex flex-col gap-3">
              <a href="tel:4052470027" className="btn-primary text-center text-base py-4 w-full">📞 (405) 247-0027</a>
              <Link to="/#estimate" className="btn-outline text-center text-base py-4 w-full">Get Free Estimate →</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileAccordion({ label, isOpen, onToggle, children }: { label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left cursor-pointer bg-transparent border-none min-h-[48px]"
      >
        <span className="text-[0.72rem] tracking-[0.14em] uppercase text-orange font-bold">{label}</span>
        <span className={`text-muted-text text-sm transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▾</span>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[500px] pb-2" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}

function NavDropdown({ label, items }: { label: string; items: { to: string; label: string }[] }) {
  return (
    <li className="relative group">
      <span className="block cursor-pointer text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors group-hover:text-concrete select-none">
        {label} ▾
      </span>
      <div className="absolute top-full left-0 min-w-[210px] pt-2 z-[200] opacity-0 pointer-events-none translate-y-1.5 transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
        <div
          className="bg-stone"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)", borderTop: "2px solid hsl(var(--orange))" }}
        >
          {items.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2.5 text-[0.76rem] text-muted-text no-underline transition-colors hover:text-concrete hover:bg-concrete/[0.04]"
              style={{ borderBottom: i < items.length - 1 ? "1px solid hsl(var(--concrete) / 0.08)" : "none" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
