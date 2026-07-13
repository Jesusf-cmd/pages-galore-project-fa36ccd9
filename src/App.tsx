import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = lazy(() => import("./pages/NotFound"));
const DrivewaysOklahomaCity = lazy(() => import("./pages/DrivewaysOklahomaCity"));
const PatiosOklahomaCity = lazy(() => import("./pages/PatiosOklahomaCity"));
const FoundationsOklahomaCity = lazy(() => import("./pages/FoundationsOklahomaCity"));
const SidewalksOklahomaCity = lazy(() => import("./pages/SidewalksOklahomaCity"));
const CommercialConcreteOklahomaCity = lazy(() => import("./pages/CommercialConcreteOklahomaCity"));
const ParkingLotConcrete = lazy(() => import("./pages/ParkingLotConcrete"));
const RetainingWalls = lazy(() => import("./pages/RetainingWalls"));
const SewerLineRepairOklahomaCity = lazy(() => import("./pages/SewerLineRepairOklahomaCity"));
const HvacOklahomaCity = lazy(() => import("./pages/HvacOklahomaCity"));
const PlumbingOklahomaCity = lazy(() => import("./pages/PlumbingOklahomaCity"));
const ElectricalOklahomaCity = lazy(() => import("./pages/ElectricalOklahomaCity"));
const EmergencyServicesOklahomaCity = lazy(() => import("./pages/EmergencyServicesOklahomaCity"));
const OurApproach = lazy(() => import("./pages/OurApproach"));
const CityPage = lazy(() => import("./pages/CityPage"));
const OurProjects = lazy(() => import("./pages/OurProjects"));
const ServiceInCity = lazy(() => import("./pages/ServiceInCity"));
const RepairService = lazy(() => import("./pages/RepairService"));
const QuotePage = lazy(() => import("./pages/QuotePage"));
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const PoolDeckOklahomaCity = lazy(() => import("./pages/PoolDeckOklahomaCity"));
const BollardInstallation = lazy(() => import("./pages/BollardInstallation"));
const CraneFoundation = lazy(() => import("./pages/CraneFoundation"));
const LoadingDockConcreteRepair = lazy(() => import("./pages/LoadingDockConcreteRepair"));
const ConcreteParkinglotRepair = lazy(() => import("./pages/ConcreteParkinglotRepair"));
const LoadingDockConstruction = lazy(() => import("./pages/LoadingDockConstruction"));
const LoadingDockReplacement = lazy(() => import("./pages/LoadingDockReplacement"));
const DockLevelerPits = lazy(() => import("./pages/DockLevelerPits"));
const TruckCourts = lazy(() => import("./pages/TruckCourts"));
const IndustrialConcreteRepair = lazy(() => import("./pages/IndustrialConcreteRepair"));
const WarehouseFloorReplacement = lazy(() => import("./pages/WarehouseFloorReplacement"));
const EquipmentFoundations = lazy(() => import("./pages/EquipmentFoundations"));
const ADACompliance = lazy(() => import("./pages/ADACompliance"));
const DumpsterPads = lazy(() => import("./pages/DumpsterPads"));
const CommercialConcreteRepair = lazy(() => import("./pages/CommercialConcreteRepair"));
const CommercialCurbGutter = lazy(() => import("./pages/CommercialCurbGutter"));
const PolishedConcrete = lazy(() => import("./pages/PolishedConcrete"));
const EpoxyFloorCoatings = lazy(() => import("./pages/EpoxyFloorCoatings"));
const RetailRestaurantConcrete = lazy(() => import("./pages/RetailRestaurantConcrete"));
const TiltWallConcrete = lazy(() => import("./pages/TiltWallConcrete"));
const SoilStabilization = lazy(() => import("./pages/SoilStabilization"));
const ConcreteMaintenance = lazy(() => import("./pages/ConcreteMaintenance"));
const BuilderPricing = lazy(() => import("./pages/BuilderPricing"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f1eb]">
      <div className="text-[#888] text-sm tracking-widest uppercase">Loading...</div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  if (loading) return <PageLoader />;
  if (!session) return <AdminLogin />;
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/driveways-oklahoma-city" element={<DrivewaysOklahomaCity />} />
                <Route path="/patios-oklahoma-city" element={<PatiosOklahomaCity />} />
                <Route path="/foundations-oklahoma-city" element={<FoundationsOklahomaCity />} />
                <Route path="/sidewalks-oklahoma-city" element={<SidewalksOklahomaCity />} />
                <Route path="/commercial-concrete-oklahoma-city" element={<CommercialConcreteOklahomaCity />} />
                <Route path="/parking-lots-oklahoma-city" element={<ParkingLotConcrete />} />
                <Route path="/retaining-walls-oklahoma-city" element={<RetainingWalls />} />
                <Route path="/sewer-line-repair-oklahoma-city" element={<SewerLineRepairOklahomaCity />} />
                <Route path="/hvac-oklahoma-city" element={<HvacOklahomaCity />} />
                <Route path="/plumbing-oklahoma-city" element={<PlumbingOklahomaCity />} />
                <Route path="/electrical-oklahoma-city" element={<ElectricalOklahomaCity />} />
                <Route path="/emergency-services-oklahoma-city" element={<EmergencyServicesOklahomaCity />} />
                <Route path="/our-approach" element={<OurApproach />} />
                <Route path="/pool-deck-oklahoma-city" element={<PoolDeckOklahomaCity />} />
                <Route path="/bollard-installation-oklahoma-city" element={<BollardInstallation />} />
                <Route path="/crane-foundation-installation-oklahoma-city" element={<CraneFoundation />} />
                <Route path="/loading-dock-concrete-repair-oklahoma-city" element={<LoadingDockConcreteRepair />} />
                <Route path="/loading-dock-construction-oklahoma-city" element={<LoadingDockConstruction />} />
                <Route path="/loading-dock-replacement-oklahoma-city" element={<LoadingDockReplacement />} />
                {/* New preferred URLs for moved pages */}
                <Route path="/dock-leveler-pit-concrete-oklahoma-city" element={<DockLevelerPits />} />
                <Route path="/truck-court-concrete-oklahoma-city" element={<TruckCourts />} />
                <Route path="/industrial-concrete-repair-oklahoma-city" element={<IndustrialConcreteRepair />} />
                <Route path="/warehouse-slab-repair-oklahoma-city" element={<WarehouseFloorReplacement />} />
                <Route path="/equipment-pad-concrete-oklahoma-city" element={<EquipmentFoundations />} />
                <Route path="/ada-concrete-ramps-oklahoma-city" element={<ADACompliance />} />
                <Route path="/dumpster-pad-concrete-oklahoma-city" element={<DumpsterPads />} />
                <Route path="/concrete-parking-lot-repair-oklahoma-city" element={<ConcreteParkinglotRepair />} />
                <Route path="/commercial-concrete-repair-oklahoma-city" element={<CommercialConcreteRepair />} />
                <Route path="/commercial-curb-and-gutter-oklahoma-city" element={<CommercialCurbGutter />} />
                {/* 301 redirects: old URLs → new preferred URLs */}
                <Route path="/dock-leveler-pits-oklahoma-city" element={<Navigate to="/dock-leveler-pit-concrete-oklahoma-city" replace />} />
                <Route path="/truck-courts-oklahoma-city" element={<Navigate to="/truck-court-concrete-oklahoma-city" replace />} />
                <Route path="/warehouse-floor-replacement-oklahoma-city" element={<Navigate to="/warehouse-slab-repair-oklahoma-city" replace />} />
                <Route path="/equipment-foundations-oklahoma-city" element={<Navigate to="/equipment-pad-concrete-oklahoma-city" replace />} />
                <Route path="/ada-ramps-oklahoma-city" element={<Navigate to="/ada-concrete-ramps-oklahoma-city" replace />} />
                <Route path="/dumpster-pads-oklahoma-city" element={<Navigate to="/dumpster-pad-concrete-oklahoma-city" replace />} />
                <Route path="/commercial-curb-gutter-oklahoma-city" element={<Navigate to="/commercial-curb-and-gutter-oklahoma-city" replace />} />
                <Route path="/polished-concrete-oklahoma-city" element={<PolishedConcrete />} />
                <Route path="/epoxy-floor-coatings-oklahoma-city" element={<EpoxyFloorCoatings />} />
                <Route path="/retail-restaurant-concrete-oklahoma-city" element={<RetailRestaurantConcrete />} />
                <Route path="/tilt-wall-concrete-oklahoma-city" element={<TiltWallConcrete />} />
                <Route path="/soil-stabilization-oklahoma-city" element={<SoilStabilization />} />
                <Route path="/concrete-maintenance-oklahoma-city" element={<ConcreteMaintenance />} />
                <Route path="/concrete-driveways" element={<Navigate to="/driveways-oklahoma-city" replace />} />
                <Route path="/concrete-slabs" element={<Navigate to="/patios-oklahoma-city" replace />} />
                <Route path="/stamped-concrete" element={<Navigate to="/patios-oklahoma-city" replace />} />
                <Route path="/concrete-patio-okc" element={<Navigate to="/patios-oklahoma-city" replace />} />
                <Route path="/concrete-foundations" element={<Navigate to="/foundations-oklahoma-city" replace />} />
                <Route path="/retaining-walls" element={<Navigate to="/retaining-walls-oklahoma-city" replace />} />
                <Route path="/concrete-sidewalks" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
                <Route path="/curb-and-gutter" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
                <Route path="/curb-gutter" element={<Navigate to="/sidewalks-oklahoma-city" replace />} />
                <Route path="/parking-lot-concrete" element={<Navigate to="/parking-lots-oklahoma-city" replace />} />
                <Route path="/commercial-concrete-slabs" element={<Navigate to="/commercial-concrete-oklahoma-city" replace />} />
                <Route path="/oklahoma-city-concrete" element={<CityPage slug="oklahoma-city" />} />
                <Route path="/edmond-concrete" element={<CityPage slug="edmond" />} />
                <Route path="/norman-ok-concrete" element={<CityPage slug="norman" />} />
                <Route path="/yukon-oklahoma-concrete" element={<CityPage slug="yukon" />} />
                <Route path="/mustang-oklahoma-concrete" element={<CityPage slug="mustang" />} />
                <Route path="/moore-oklahoma-concrete" element={<CityPage slug="moore" />} />
                <Route path="/midwest-city-oklahoma-concrete" element={<CityPage slug="midwest-city" />} />
                <Route path="/del-city-oklahoma-concrete" element={<CityPage slug="del-city" />} />
                <Route path="/stillwater-oklahoma-concrete" element={<CityPage slug="stillwater" />} />
                <Route path="/driveways-edmond" element={<ServiceInCity slug="driveways-edmond" />} />
                <Route path="/driveways-norman" element={<ServiceInCity slug="driveways-norman" />} />
                <Route path="/driveways-yukon" element={<ServiceInCity slug="driveways-yukon" />} />
                <Route path="/foundations-edmond" element={<ServiceInCity slug="foundations-edmond" />} />
                <Route path="/retaining-walls-edmond" element={<ServiceInCity slug="retaining-walls-edmond" />} />
                <Route path="/patios-norman" element={<ServiceInCity slug="patios-norman" />} />
                <Route path="/patios-edmond" element={<ServiceInCity slug="patios-edmond" />} />
                <Route path="/foundations-norman" element={<ServiceInCity slug="foundations-norman" />} />
                <Route path="/foundations-yukon" element={<ServiceInCity slug="foundations-yukon" />} />
                <Route path="/driveways-moore" element={<ServiceInCity slug="driveways-moore" />} />
                <Route path="/patios-moore" element={<ServiceInCity slug="patios-moore" />} />
                <Route path="/driveways-mustang" element={<ServiceInCity slug="driveways-mustang" />} />
                <Route path="/retaining-walls-norman" element={<ServiceInCity slug="retaining-walls-norman" />} />
                <Route path="/patios-yukon" element={<ServiceInCity slug="patios-yukon" />} />
                <Route path="/driveway-repair-oklahoma-city" element={<RepairService slug="driveway-repair-oklahoma-city" />} />
                <Route path="/foundation-repair-oklahoma-city" element={<RepairService slug="foundation-repair-oklahoma-city" />} />
                <Route path="/driveway-repair" element={<Navigate to="/driveway-repair-oklahoma-city" replace />} />
                <Route path="/foundation-repair" element={<Navigate to="/foundation-repair-oklahoma-city" replace />} />
                <Route path="/our-projects" element={<OurProjects />} />
                <Route path="/quote/:id" element={<QuotePage />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
              {/* Gated builder pricing page — no nav/footer, noindex */}
              <Route path="/builders" element={<BuilderPricing />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
