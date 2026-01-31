import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import EngineeringConsulting from "./pages/EngineeringConsulting";
import AssemblyCommissioning from "./pages/AssemblyCommissioning";
import MaintenanceServices from "./pages/MaintenanceServices";
import ApprovedSuppliers from "./pages/ApprovedSuppliers";
import BusinessExpansion from "./pages/BusinessExpansion";
import PowerPlantProject from "./pages/PowerPlantProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/engineering-consulting" element={<EngineeringConsulting />} />
          <Route path="/services/assembly-commissioning" element={<AssemblyCommissioning />} />
          <Route path="/services/maintenance-services" element={<MaintenanceServices />} />
          <Route path="/services/approved-suppliers" element={<ApprovedSuppliers />} />
          <Route path="/services/business-expansion" element={<BusinessExpansion />} />
          <Route path="/projects/power-plant-modernization" element={<PowerPlantProject />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
