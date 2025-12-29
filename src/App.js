import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ApplicationProcess from "./pages/ApplicationProcess";
import ClaimsProcess from "./pages/ClaimsProcess";
import Exclusions from "./pages/Exclusions";
import SelectPlan from "./pages/SelectPlan";
import Riders from "./pages/Riders";
import RiderWaiverPremium from "./pages/RiderWaiverPremium";
import RiderCriticalIllness from "./pages/RiderCriticalIllness";
import RiderDisability from "./pages/RiderDisability";
import WhyDitto from "./pages/WhyDitto";
import Nominees from "./pages/Nominees";
import FAQ from "./pages/FAQ";
import MWPA from "./pages/MWPA";
import ControlPanel from "./pages/ControlPanel";
import { Toaster } from "./components/ui/sonner";
import "@/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/application-process" element={<ApplicationProcess />} />
          <Route path="/claims-process" element={<ClaimsProcess />} />
          <Route path="/exclusions" element={<Exclusions />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/riders" element={<Riders />} />
          <Route path="/riders/waiver-of-premium" element={<RiderWaiverPremium />} />
          <Route path="/riders/critical-illness" element={<RiderCriticalIllness />} />
          <Route path="/riders/disability" element={<RiderDisability />} />
          <Route path="/why-ditto" element={<WhyDitto />} />
          <Route path="/nominees" element={<Nominees />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mwpa" element={<MWPA />} />
          <Route path="/control-panel" element={<ControlPanel />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
