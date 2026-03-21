import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConcreteDriveways from "./pages/ConcreteDriveways";
import ConcreteSlabs from "./pages/ConcreteSlabs";
import StampedConcrete from "./pages/StampedConcrete";
import ConcreteFoundations from "./pages/ConcreteFoundations";
import ConcretePatioOKC from "./pages/ConcretePatioOKC";
import ConcreteSidewalks from "./pages/ConcreteSidewalks";
import RetainingWalls from "./pages/RetainingWalls";
import CurbGutter from "./pages/CurbGutter";
import ParkingLotConcrete from "./pages/ParkingLotConcrete";
import CityPage from "./pages/CityPage";
import OurProjects from "./pages/OurProjects";
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
            <Route path="/concrete-driveways" element={<ConcreteDriveways />} />
            <Route path="/concrete-slabs" element={<ConcreteSlabs />} />
            <Route path="/stamped-concrete" element={<StampedConcrete />} />
            <Route path="/concrete-foundations" element={<ConcreteFoundations />} />
            <Route path="/concrete-patio-okc" element={<ConcretePatioOKC />} />
            <Route path="/concrete-sidewalks" element={<ConcreteSidewalks />} />
            <Route path="/retaining-walls" element={<RetainingWalls />} />
            <Route path="/curb-gutter" element={<CurbGutter />} />
            <Route path="/parking-lot-concrete" element={<ParkingLotConcrete />} />
            <Route path="/oklahoma-city-concrete" element={<CityPage slug="oklahoma-city" />} />
            <Route path="/edmond-concrete" element={<CityPage slug="edmond" />} />
            <Route path="/norman-ok-concrete" element={<CityPage slug="norman" />} />
            <Route path="/yukon-oklahoma-concrete" element={<CityPage slug="yukon" />} />
            <Route path="/mustang-oklahoma-concrete" element={<CityPage slug="mustang" />} />
            <Route path="/moore-oklahoma-concrete" element={<CityPage slug="moore" />} />
            <Route path="/midwest-city-oklahoma-concrete" element={<CityPage slug="midwest-city" />} />
            <Route path="/del-city-oklahoma-concrete" element={<CityPage slug="del-city" />} />
            <Route path="/our-projects" element={<OurProjects />} />
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
