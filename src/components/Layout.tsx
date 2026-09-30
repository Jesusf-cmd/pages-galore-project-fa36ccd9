import { Component, type ReactNode, Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { phoneForPath } from "@/lib/phones";
import { trackPhoneClick } from "@/lib/dataLayer";
import { syncLocalBusinessJsonLd } from "@/lib/localBusinessSchema";

function ContentLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-[#888] text-sm tracking-widest uppercase">Loading...</div>
    </div>
  );
}

class RouteErrorBoundary extends Component<{ children: ReactNode; phoneDisplay: string; phoneTel: string }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[40vh] flex items-center justify-center p-8 text-center">
          <p className="text-muted-text">
            This page failed to load. Call{" "}
            <a href={`tel:${this.props.phoneTel}`} className="text-orange no-underline">
              {this.props.phoneDisplay}
            </a>{" "}
            for a free estimate.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Layout() {
  const { pathname } = useLocation();
  const phone = phoneForPath(pathname);
  useEffect(() => {
    // Single GeneralContractor#business on / and /oklahoma-city-concrete; omit elsewhere.
    syncLocalBusinessJsonLd(pathname);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href^='tel:']");
      if (!anchor) return;
      trackPhoneClick(pathname);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="pb-14 nav:pb-0">
        <RouteErrorBoundary key={pathname} phoneDisplay={phone.display} phoneTel={phone.tel}>
          <Suspense fallback={<ContentLoader />}>
            <Outlet />
          </Suspense>
        </RouteErrorBoundary>
      </div>
      {/* Sticky mobile call button — hidden on desktop */}
      <a
        href={`tel:${phone.tel}`}
        className="fixed bottom-0 left-0 right-0 z-[90] flex items-center justify-center gap-2 py-4 text-white font-display text-base font-extrabold tracking-[0.06em] uppercase nav:hidden"
        style={{
          background: "hsl(var(--orange))",
          borderTop: "2px solid rgba(255,255,255,0.2)",
          minHeight: "56px",
        }}
        aria-label="Call FDZ Construction LLC"
      >
        📞 Call {phone.display} — Free Estimate
      </a>
      <Footer />
    </>
  );
}
