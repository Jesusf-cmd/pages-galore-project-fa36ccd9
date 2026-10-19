import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useBusinessPhone } from "@/hooks/quoteContact";
import { estimatePath } from "@/lib/estimatePath";
import { isKansasPath, normalizePath, regionalHomePath } from "@/lib/phones";

const serviceLinks = [
  { to: "/driveways-oklahoma-city", label: "Concrete Driveways" },
  { to: "/patios-oklahoma-city", label: "Patios, Slabs & Stamped" },
  { to: "/foundations-oklahoma-city", label: "Foundations" },
  { to: "/retaining-walls-oklahoma-city", label: "Retaining Walls" },
  { to: "/pool-deck-oklahoma-city", label: "Pool Decks" },
  { to: "/sidewalks-oklahoma-city", label: "Sidewalks, Curb & Gutter" },
];

const commercialLinks = [
  { to: "/commercial-concrete-oklahoma-city", label: "All Commercial Services" },
  { to: "/bollard-installation-oklahoma-city", label: "Bollard Installation" },
  { to: "/crane-foundation-installation-oklahoma-city", label: "Crane Foundations" },
  { to: "/loading-dock-concrete-repair-oklahoma-city", label: "Loading Dock Repair" },
  { to: "/loading-dock-construction-oklahoma-city", label: "Loading Dock Construction" },
  { to: "/loading-dock-replacement-oklahoma-city", label: "Loading Dock Replacement" },
  { to: "/dock-leveler-pit-concrete-oklahoma-city", label: "Dock Leveler Pits" },
  { to: "/truck-court-concrete-oklahoma-city", label: "Truck Courts" },
  { to: "/industrial-concrete-repair-oklahoma-city", label: "Industrial Concrete Repair" },
  { to: "/warehouse-slab-repair-oklahoma-city", label: "Warehouse Concrete & Slabs" },
  { to: "/equipment-pad-concrete-oklahoma-city", label: "Equipment Pads" },
  { to: "/dumpster-pad-concrete-oklahoma-city", label: "Dumpster Pads" },
  { to: "/ada-concrete-ramps-oklahoma-city", label: "ADA Concrete Ramps" },
  { to: "/commercial-curb-and-gutter-oklahoma-city", label: "Curb & Gutter" },
  { to: "/concrete-parking-lot-repair-oklahoma-city", label: "Parking Lot Repair" },
  { to: "/parking-lots-oklahoma-city", label: "Parking Lots (New)" },
  { to: "/polished-concrete-oklahoma-city", label: "Polished Concrete" },
  { to: "/epoxy-floor-coatings-oklahoma-city", label: "Epoxy Floor Coatings" },
  { to: "/retail-restaurant-concrete-oklahoma-city", label: "Retail & Restaurant Concrete" },
  { to: "/commercial-concrete-repair-oklahoma-city", label: "Commercial Concrete Repair" },
  { to: "/tilt-wall-concrete-oklahoma-city", label: "Tilt-Wall Concrete" },
  { to: "/soil-stabilization-oklahoma-city", label: "Soil Stabilization" },
  { to: "/concrete-maintenance-oklahoma-city", label: "Concrete Maintenance" },
];

const oklahomaAreaLinks = [
  { to: "/oklahoma-city-concrete", label: "Oklahoma City" },
  { to: "/edmond-concrete", label: "Edmond" },
  { to: "/norman-ok-concrete", label: "Norman" },
  { to: "/yukon-oklahoma-concrete", label: "Yukon" },
  { to: "/mustang-oklahoma-concrete", label: "Mustang" },
  { to: "/moore-oklahoma-concrete", label: "Moore" },
  { to: "/midwest-city-oklahoma-concrete", label: "Midwest City" },
  { to: "/del-city-oklahoma-concrete", label: "Del City" },
  { to: "/stillwater-oklahoma-concrete", label: "Stillwater" },
];

const wichitaAreaLinks = [
  { to: "/concrete-contractors-wichita-ks", label: "Wichita Concrete Contractors" },
  { to: "/commercial-concrete-wichita", label: "Wichita Commercial Concrete" },
  { to: "/industrial-concrete-wichita", label: "Wichita Industrial Concrete" },
  { to: "/retaining-walls-wichita", label: "Wichita Retaining Walls" },
  { to: "/stamped-concrete-wichita", label: "Wichita Stamped Concrete" },
];

const concreteGroups = [
  { heading: "Residential", links: serviceLinks },
  { heading: "Commercial", links: commercialLinks },
];

const oklahomaAreaGroup = { heading: "Oklahoma", links: oklahomaAreaLinks };
const wichitaAreaGroup = { heading: "Wichita, Kansas", links: wichitaAreaLinks };

const mobilePrimaryLinks = [
  { to: "/sewer-line-repair-oklahoma-city", label: "Sewer Line Repair" },
  { to: "/skid-steer-services-oklahoma-city", label: "Skid Steer Services" },
  { to: "/excavator-services-oklahoma-city", label: "Excavator Services" },
  { to: "/our-projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const phone = useBusinessPhone();
  const kansasRoute = isKansasPath(location.pathname);
  const homeTo = regionalHomePath(location.pathname);
  const areaGroups = kansasRoute
    ? [wichitaAreaGroup, oklahomaAreaGroup]
    : [oklahomaAreaGroup, wichitaAreaGroup];
  const concreteMenu = kansasRoute
    ? [
        { heading: "Residential — Oklahoma City", links: serviceLinks },
        { heading: "Commercial — Oklahoma City", links: commercialLinks },
      ]
    : concreteGroups;
  const mobileSections = [
    {
      title: kansasRoute ? "Concrete — Oklahoma City" : "Concrete",
      links: [...serviceLinks, ...commercialLinks],
    },
    ...(kansasRoute
      ? [
          { title: "Wichita, Kansas", links: wichitaAreaLinks },
          { title: "Oklahoma", links: oklahomaAreaLinks },
        ]
      : [
          { title: "Oklahoma", links: oklahomaAreaLinks },
          { title: "Wichita, Kansas", links: wichitaAreaLinks },
        ]),
  ];
  const mobileMenuPrimaryLinks = [{ to: homeTo, label: "Home" }, ...mobilePrimaryLinks];
  const estimateTo = isKansasPath(location.pathname)
    ? estimatePath(normalizePath(location.pathname).replace(/^\//, ""))
    : "/#estimate";

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-4 md:px-12 py-3 transition-all duration-200 ${
          scrolled ? "bg-darker/98 backdrop-blur-xl" : "bg-darker/96 backdrop-blur-md"
        }`}
        style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.08)" }}
      >
        <Link to={homeTo} className="flex flex-col gap-0.5" aria-label="FDZ Construction LLC home">
          <Logo className="h-[40px] md:h-[50px] w-auto" />
        </Link>

        <ul className="hidden nav:flex gap-0 list-none">
          <li>
            <Link to={homeTo} className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">
              Home
            </Link>
          </li>
          <NavDropdown label="Concrete" groups={concreteMenu} />
          <li>
            <Link to="/sewer-line-repair-oklahoma-city" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete whitespace-nowrap">
              Sewer Line
            </Link>
          </li>
          <li>
            <Link to="/skid-steer-services-oklahoma-city" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete whitespace-nowrap">
              Skid Steer
            </Link>
          </li>
          <li>
            <Link to="/excavator-services-oklahoma-city" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete whitespace-nowrap">
              Excavator
            </Link>
          </li>
          <NavDropdown label="Service Areas" groups={areaGroups} />
          <li>
            <Link to="/our-projects" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="block text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors hover:text-concrete">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden nav:flex items-center gap-5 flex-shrink-0">
          <div className="flex flex-col items-end">
            <span className="text-[0.56rem] tracking-[0.14em] uppercase text-muted-text">Free Estimate</span>
            {phone ? (
              <a href={`tel:${phone.tel}`} className="font-display text-lg font-extrabold text-orange no-underline leading-tight">{phone.display}</a>
            ) : (
              <span className="font-display text-lg font-extrabold text-muted-text leading-tight">Call</span>
            )}
          </div>
          <Link to={estimateTo} className="bg-orange text-white px-5 py-2 font-display text-[0.8rem] font-extrabold tracking-[0.08em] uppercase no-underline transition-colors hover:bg-orange-light whitespace-nowrap">
            Get Quote →
          </Link>
        </div>

        <div className="flex nav:hidden items-center gap-2">
          {phone ? (
            <a href={`tel:${phone.tel}`} className="bg-orange text-white px-3 py-2 font-display text-[0.72rem] font-extrabold tracking-[0.06em] uppercase no-underline whitespace-nowrap">
              📞 Call
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="text-concrete p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {mobileOpen && typeof document !== "undefined"
        ? createPortal(
            <MobileMenuOverlay
              onClose={() => setMobileOpen(false)}
              phoneDisplay={phone?.display ?? ""}
              phoneTel={phone?.tel ?? ""}
              estimateTo={estimateTo}
              homeTo={homeTo}
              primaryLinks={mobileMenuPrimaryLinks}
              sections={mobileSections}
            />,
            document.body,
          )
        : null}
    </>
  );
}

function MobileMenuOverlay({
  onClose,
  phoneDisplay,
  phoneTel,
  estimateTo,
  homeTo,
  primaryLinks,
  sections,
}: {
  onClose: () => void;
  phoneDisplay: string;
  phoneTel: string;
  estimateTo: string;
  homeTo: string;
  primaryLinks: { to: string; label: string }[];
  sections: { title: string; links: { to: string; label: string }[] }[];
}) {
  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 nav:hidden z-[9999] h-[100dvh] overflow-hidden bg-darker"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex h-full flex-col bg-darker text-concrete">
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: "1px solid hsl(var(--concrete) / 0.1)" }}
        >
          <Link to={homeTo} onClick={onClose} className="flex items-center" aria-label="FDZ Construction LLC home">
            <Logo className="h-[38px] w-auto" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex min-h-[48px] min-w-[48px] items-center justify-center text-concrete"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-10 pt-6">
          <div className="space-y-8">
            {sections.map((section) => (
              <MobileSection key={section.title} title={section.title} links={section.links} onClose={onClose} />
            ))}

            <div className="space-y-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className="block w-full rounded-sm px-4 py-4 text-[1.02rem] font-semibold leading-7 text-concrete no-underline transition-colors active:bg-stone"
                  style={{ border: "1px solid hsl(var(--concrete) / 0.1)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {phoneTel ? (
                <a href={`tel:${phoneTel}`} className="btn-primary w-full py-4 text-center text-base">
                  📞 {phoneDisplay}
                </a>
              ) : null}
              <Link to={estimateTo} onClick={onClose} className="btn-outline w-full py-4 text-center text-base">
                Get Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  links,
  onClose,
}: {
  title: string;
  links: { to: string; label: string }[];
  onClose: () => void;
}) {
  return (
    <section className="space-y-3">
      <div className="text-[0.82rem] font-bold uppercase tracking-[0.14em] text-orange">
        {title}
      </div>
      <div className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={onClose}
            className="block w-full rounded-sm px-4 py-4 text-[1rem] font-medium leading-7 text-concrete no-underline transition-colors active:bg-stone"
            style={{ border: "1px solid hsl(var(--concrete) / 0.1)", background: "hsl(var(--stone))" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function NavDropdown({
  label,
  items,
  groups,
}: {
  label: string;
  items?: { to: string; label: string }[];
  groups?: { heading: string; links: { to: string; label: string }[] }[];
}) {
  return (
    <li className="relative group">
      <span className="block cursor-pointer text-muted-text no-underline text-[0.76rem] tracking-[0.05em] uppercase font-medium px-3.5 py-2 transition-colors group-hover:text-concrete select-none">
        {label} ▾
      </span>
      <div className="absolute top-full left-0 min-w-[210px] pt-2 z-[200] opacity-0 pointer-events-none translate-y-1.5 transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
        <div
          className="bg-stone max-h-[70vh] overflow-y-auto"
          style={{ border: "1px solid hsl(var(--concrete) / 0.08)", borderTop: "2px solid hsl(var(--orange))" }}
        >
          {groups
            ? groups.map((group, gi) => (
                <div key={group.heading}>
                  <div
                    className="px-4 pt-2.5 pb-1 text-[0.62rem] tracking-[0.1em] uppercase font-bold text-orange"
                    style={{ borderTop: gi > 0 ? "1px solid hsl(var(--concrete) / 0.08)" : "none" }}
                  >
                    {group.heading}
                  </div>
                  {group.links.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2.5 text-[0.76rem] text-muted-text no-underline transition-colors hover:text-concrete hover:bg-concrete/[0.04]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))
            : items?.map((item, i) => (
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

