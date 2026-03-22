import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
    <>
      {/* ── Top bar (always visible) ── */}
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
        <ul className="hidden nav:flex gap-0 list-none">
          <NavDropdown label="Residential Concrete" items={residentialLinks} />
          <NavDropdown label="Commercial Concrete" items={commercialLinks} />
          <NavDropdown label="Service Areas" items={areaLinks} />
          <li><Link to="/our-projects" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">Our Work</Link></li>
          <li><Link to="/blog" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">Blog</Link></li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden nav:flex items-center gap-5 flex-shrink-0">
          <div className="flex flex-col items-end">
            <span className="text-[0.56rem] tracking-[0.14em] uppercase text-muted-text">Free Estimate</span>
            <a href="tel:4052470027" className="font-display text-lg font-extrabold text-orange no-underline leading-tight">(405) 247-0027</a>
          </div>
          <Link to="/#estimate" className="bg-orange text-white px-5 py-2 font-display text-[0.8rem] font-extrabold tracking-[0.08em] uppercase no-underline transition-colors hover:bg-orange-light whitespace-nowrap">
            Get Quote →
          </Link>
        </div>

        {/* Mobile hamburger trigger */}
        <div className="flex nav:hidden items-center gap-2">
          <a href="tel:4052470027" className="bg-orange text-white px-3 py-2 font-display text-[0.72rem] font-extrabold tracking-[0.06em] uppercase no-underline whitespace-nowrap">
            📞 Call
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="text-concrete p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay (rendered OUTSIDE <nav>) ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[9999] nav:hidden flex flex-col"
          style={{ backgroundColor: "#141210" }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={LOGO_URL} alt="Redwood Construction" className="h-[38px] w-auto object-contain" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-concrete p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Scrollable menu body */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-6 pt-4 pb-28">
            <MobileSection
              title="Residential Services"
              links={residentialLinks}
              isOpen={openSection === "residential"}
              onToggle={() => toggleSection("residential")}
              onClose={() => setMobileOpen(false)}
            />
            <MobileSection
              title="Commercial Services"
              links={commercialLinks}
              isOpen={openSection === "commercial"}
              onToggle={() => toggleSection("commercial")}
              onClose={() => setMobileOpen(false)}
            />
            <MobileSection
              title="Service Areas"
              links={areaLinks}
              isOpen={openSection === "areas"}
              onToggle={() => toggleSection("areas")}
              onClose={() => setMobileOpen(false)}
            />

            {/* Standalone links */}
            <Link
              to="/our-projects"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-5 text-[1.05rem] leading-7 text-white font-semibold no-underline uppercase tracking-[0.06em]"
              style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}
            >
              Our Work
            </Link>
            <Link
              to="/blog"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-5 text-[1.05rem] leading-7 text-white font-semibold no-underline uppercase tracking-[0.06em]"
              style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}
            >
              Blog
            </Link>

            {/* CTAs */}
            <div className="pt-8 flex flex-col gap-3">
              <a href="tel:4052470027" className="btn-primary text-center text-base py-4 w-full">
                📞 (405) 247-0027
              </a>
              <Link to="/#estimate" onClick={() => setMobileOpen(false)} className="btn-outline text-center text-base py-4 w-full">
                Get Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Mobile accordion section ── */
function MobileSection({
  title,
  links,
  isOpen,
  onToggle,
  onClose,
}: {
  title: string;
  links: { to: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-left cursor-pointer bg-transparent border-none min-h-[56px]"
      >
        <span className="text-[0.88rem] tracking-[0.1em] uppercase text-orange font-bold">{title}</span>
        <ChevronDown
          size={18}
          className={`text-concrete/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-250 ease-out ${isOpen ? "max-h-[700px] pb-2" : "max-h-0"}`}
        style={{ backgroundColor: "hsl(var(--concrete) / 0.04)" }}
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="block w-full px-5 py-4 text-[1.02rem] leading-7 font-medium text-white/90 no-underline transition-colors active:bg-orange/10 active:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Desktop dropdown (unchanged) ── */
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
