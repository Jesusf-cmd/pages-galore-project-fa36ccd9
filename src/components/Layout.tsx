import { Component, type ReactNode, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContentLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-[#888] text-sm tracking-widest uppercase">Loading...</div>
    </div>
  );
}

class RouteErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
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
            <a href="tel:4054584805" className="text-orange no-underline">
              (405) 458-4805
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
  return (
    <>
      <Navbar />
      <div className="pb-14 nav:pb-0">
        <RouteErrorBoundary key={pathname}>
          <Suspense fallback={<ContentLoader />}>
            <Outlet />
          </Suspense>
        </RouteErrorBoundary>
      </div>
      {/* Sticky mobile call button — hidden on desktop */}
      <a
        href="tel:4054584805"
        className="fixed bottom-0 left-0 right-0 z-[90] flex items-center justify-center gap-2 py-4 text-white font-display text-base font-extrabold tracking-[0.06em] uppercase nav:hidden"
        style={{
          background: "hsl(var(--orange))",
          borderTop: "2px solid rgba(255,255,255,0.2)",
          minHeight: "56px",
        }}
        aria-label="Call FDZ Construction LLC"
      >
        📞 Call (405) 458-4805 — Free Estimate
      </a>
      <Footer />
    </>
  );
}
