import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IssueProvider } from "@/contexts/IssueContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Issues from "./pages/Issues";
import Report from "./pages/Report";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ProjectReport from "./pages/ProjectReport";
import "@/styles/print.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <IssueProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/issues" element={<Issues />} />
              <Route path="/report" element={<Report />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/project-report" element={<ProjectReport />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </IssueProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
