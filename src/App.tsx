import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DrivewaysOklahomaCity from "./pages/DrivewaysOklahomaCity";
import PatiosOklahomaCity from "./pages/PatiosOklahomaCity";
import FoundationsOklahomaCity from "./pages/FoundationsOklahomaCity";
import SidewalksOklahomaCity from "./pages/SidewalksOklahomaCity";
import CommercialConcreteOklahomaCity from "./pages/CommercialConcreteOklahomaCity";
import CityPage from "./pages/CityPage";
import OurProjects from "./pages/OurProjects";
import QuotePage from "./pages/QuotePage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            {/* Service Pages */}
            <Route path="/driveways-oklahoma-city" element={<DrivewaysOklahomaCity />} />
            <Route path="/patios-oklahoma-city" element={<PatiosOklahomaCity />} />
            <Route path="/foundations-oklahoma-city" element={<FoundationsOklahomaCity />} />
            <Route path="/sidewalks-oklahoma-city" element={<SidewalksOklahomaCity />} />
            <Route path="/commercial-concrete-oklahoma-city" element={<CommercialConcreteOklahomaCity />} />
            {/* 301 Redirects from old URLs */}
            <Route path="/concrete-driveways" element={<Navigate to="/driveways-oklahoma-city" replace />} />
            <Route path="/concrete-slabs" element={<Navigate to="/patios-oklahoma-city" replace />} />
            <Route path="/stamped-concrete" element={<Navigate to="/patios-oklahoma-city" replace />} />
            <Route path="/concrete-patio-okc" element={<Navigate to="/patios-oklahoma-city" replace />} />
            <Route path="/concrete-foundations" element={<Navigate to="/foundations-oklahoma-city" replace />} />
            <Route path="/retaining-walls" element={<Navigate to="/foundations-oklahoma-city" replace />} />
            <Route path="/concrete-sidewalks" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
            <Route path="/curb-and-gutter" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
            <Route path="/curb-gutter" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
            <Route path="/parking-lot-concrete" element={<Navigate to="/commercial-concrete-oklahoma-city" replace />} />
            <Route path="/commercial-concrete-slabs" element={<Navigate to="/commercial-concrete-oklahoma-city" replace />} />
            {/* Service Areas */}
            <Route path="/oklahoma-city-concrete" element={<CityPage slug="oklahoma-city" />} />
            <Route path="/edmond-concrete" element={<CityPage slug="edmond" />} />
            <Route path="/norman-ok-concrete" element={<CityPage slug="norman" />} />
            <Route path="/yukon-oklahoma-concrete" element={<CityPage slug="yukon" />} />
            <Route path="/mustang-oklahoma-concrete" element={<CityPage slug="mustang" />} />
            <Route path="/moore-oklahoma-concrete" element={<CityPage slug="moore" />} />
            <Route path="/midwest-city-oklahoma-concrete" element={<CityPage slug="midwest-city" />} />
            <Route path="/del-city-oklahoma-concrete" element={<CityPage slug="del-city" />} />
            {/* Other */}
            <Route path="/our-projects" element={<OurProjects />} />
            <Route path="/quote/:id" element={<QuotePage />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
