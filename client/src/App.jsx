import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Mhome from "./member/Mhome";
import Services from "./pages/Home/Services";
import About from "./pages/Home/About";
import PricingPlan from "./pages/Home/PricingPlan";
import Contact from "./pages/Home/Contact";
import Tication from "./components/Authen/Tication";
import Login from './components/Authen/Login';
import Trainers from "./pages/Home/Trainers";
import Mabout from "./member/Mabout";
import Mservices from "./member/Mservices";
import MpricingPlan from "./member/MpricingPlan";
import Mcontact from "./member/Mcontact";
import Mtrainers from "./member/Mtrainers";
import Fitness from "./service/Fitness";
import Gym from "./service/Gym";
import Locsho from "./service/Locsho";
import Boxing from "./service/Boxing";
import Nutrition from "./service/Nutrition";
import Mfitness from "./mservice/Mfitness";
import Mgym from "./mservice/Mgym";
import Mlocsho from "./mservice/Mlocsho";
import Mboxing from "./mservice/Mboxing";
import Mnutrition from "./mservice/Mnutrition";
import Bayad from "./components/Payment/Bayad";
import Dashprof from "./components/Dashboarb/dashprof";
import Progress from "./components/Dashboarb/Progress";
import Plan from "./components/Dashboarb/Plan";

function App() {
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/plan" element={<PricingPlan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tication" element={<Tication />} />
            <Route path="/sign" element={<Login />} />

            <Route path="/bayad" element={<Bayad />} />
            <Route path="/dash" element={<Dashprof />} />
            <Route path="/prog" element={<Progress />} />
            <Route path="/read" element={<Plan />} />
            
            <Route path="*" element={<Mhome />} />
            <Route path="/train" element={<Trainers />} />
            <Route path="/mabout" element={<Mabout />} />
            <Route path="/mservices" element={<Mservices />} />
            <Route path="/mplan" element={<MpricingPlan />} />
            <Route path="/mcontact" element={<Mcontact />} />
            
            <Route path="/fit" element={<Fitness />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/locsho" element={<Locsho />} />
            <Route path="/boxing" element={<Boxing />} />
            <Route path="/nutrient" element={<Nutrition />} />

            <Route path="/mtrain" element={<Mtrainers />} />
            <Route path="/mfit" element={<Mfitness />} />
            <Route path="/mgym" element={<Mgym />} />
            <Route path="/mlocsho" element={<Mlocsho />} />
            <Route path="/mboxing" element={<Mboxing />} />
            <Route path="/mnutrient" element={<Mnutrition />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
