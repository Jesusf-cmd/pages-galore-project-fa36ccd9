import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://myconcreteestimate.com/#business",
  name: "Redwood Construction LLC",
  description: "Oklahoma City's concrete contractor for driveways, patios, slabs, foundations & more. Licensed & insured. Serving the OKC metro area.",
  url: "https://myconcreteestimate.com",
  telephone: "+1-405-247-0027",
  email: "jesus.f@myconcreteestimate.com",
  image: "https://img1.wsimg.com/isteam/ip/e58b3d42-c6ef-4001-afe8-1a0cde6bd652/redwood_logo_transparent.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Oklahoma City",
    addressRegion: "OK",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.4676,
    longitude: -97.5164,
  },
  areaServed: [
    { "@type": "City", name: "Oklahoma City", sameAs: "https://en.wikipedia.org/wiki/Oklahoma_City" },
    { "@type": "City", name: "Edmond" },
    { "@type": "City", name: "Norman" },
    { "@type": "City", name: "Moore" },
    { "@type": "City", name: "Yukon" },
    { "@type": "City", name: "Mustang" },
    { "@type": "City", name: "Midwest City" },
    { "@type": "City", name: "Del City" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  sameAs: [],
};

export default function Layout() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Navbar />
      <div className="pb-14 nav:pb-0">
        <Outlet />
      </div>
      {/* Sticky mobile call button — hidden on desktop */}
      <a
        href="tel:4052470027"
        className="fixed bottom-0 left-0 right-0 z-[90] flex items-center justify-center gap-2 py-4 text-white font-display text-base font-extrabold tracking-[0.06em] uppercase nav:hidden"
        style={{
          background: "hsl(var(--orange))",
          borderTop: "2px solid rgba(255,255,255,0.2)",
          minHeight: "56px",
        }}
        aria-label="Call Redwood Construction LLC"
      >
        📞 Call (405) 247-0027 — Free Estimate
      </a>
      <Footer />
    </>
  );
}
