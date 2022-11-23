import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AskPropertyType from "./pages/AskPropertyType";
import AskContructionTime from "./pages/AskContructionTime";
import AskArea from "./pages/AskArea";
import AskGoals from "./pages/AskGoals";
import AskHeatingEnergy from "./pages/AskHeatingEnergy";
import NotEligibleForRenovation from "./pages/NotEligibleForRenovation";
import AskOilEquipment from "./pages/AskOilEquipment";
import AskElectricEquipment from "./pages/AskElectricEquipment";
import AskGasEquipment from "./pages/AskGasEquipment";
import AskIsolate from "./pages/AskIsolate";
import AskGarage from "./pages/AskGarage";
import AskAtticInsulation from "./pages/AskAtticInsulation";
import AskAtticArea from "./pages/AskAtticArea";
import AskWallArea from "./pages/AskWallArea";
import AskBasementArea from "./pages/AskBasementArea";
import AskwallInsulation from "./pages/AskWallInsulation";
import AskcrawlSpaceArea from "./pages/AskCrawlSpaceArea";
import AskSolarOption from "./pages/AskSolarOption";
import AskRoofOrientation from "./pages/AskRoofOrientation";
import AskRoofArea from "./pages/AskRoofArea";
import AskSlopeChoice from "./pages/AskSlopeChoice";
import AskSlopeChoice2 from "./pages/AskSlopeChoice2";
import AskElectricBill from "./pages/AskElectricBill";
import AskAccomodationAffected from "./pages/AskAccomodationAffected";
import AskName from "./pages/AskName";
import AskTelephone from "./pages/AskTelephone";
import EndScreen from "./pages/EndScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AskPropertyType />} />
        <Route path="/time" element={<AskContructionTime />} />
        <Route path="/noteligible" element={<NotEligibleForRenovation />} />
        <Route path="/area" element={<AskArea />} />
        <Route path="/goals" element={<AskGoals />} />
        <Route path="/heatenergy" element={<AskHeatingEnergy />} />
        <Route path="/oilequiqment" element={<AskOilEquipment />} />
        <Route path="/electricequipment" element={<AskElectricEquipment />} />
        <Route path="/gasequipment" element={<AskGasEquipment />} />
        <Route path="/solar" element={<AskSolarOption />} />
        <Route path="/isolate" element={<AskIsolate />} />
        <Route path="/garage" element={<AskGarage />} />
        <Route path="/atticInsulation" element={<AskAtticInsulation />} />
        <Route path="/atticArea" element={<AskAtticArea />} />
        <Route path="/basementArea" element={<AskBasementArea />} />
        <Route path="/wallInsulation" element={<AskwallInsulation />} />
        <Route path="/wallArea" element={<AskWallArea />} />
        <Route path="/crawlSpaceArea" element={<AskcrawlSpaceArea />} />
        <Route path="/rooforientation" element={<AskRoofOrientation />} />
        <Route path="/roofarea" element={<AskRoofArea />} />
        <Route path="/slopechoice" element={<AskSlopeChoice />} />
        <Route path="/slopechoice2" element={<AskSlopeChoice2 />} />
        <Route path="/electricbill" element={<AskElectricBill />} />
        <Route
          path="/accomodationaffected"
          element={<AskAccomodationAffected />}
        />
        <Route path="/name" element={<AskName />} />
        <Route path="/telephone" element={<AskTelephone />} />
        <Route path="/endscreen" element={<EndScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
