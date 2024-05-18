import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Content } from "./components/content";
import { Contact } from "./components/contact";
import { Staffing } from "./components/staffing";
import { Resourceing } from "./components/resourceing";
import { Webapp } from "./components/webapp";
import { Mobility } from "./components/mobility";
import { Modelling } from "./components/modelling";
import { Analytics } from "./components/analytics";
import { Appliedai } from "./components/appliedai";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Header data={landingPageData.Header} />
              <Features data={landingPageData.Features} />
              <About data={landingPageData.About} />
              <Services data={landingPageData.Services} />
              <Content data={landingPageData.Content} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="staffing"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Staffing data={landingPageData.Staffing} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="resourceing"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Resourceing data={landingPageData.Resourceing} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="webapp"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Webapp data={landingPageData.Webapp} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="mobility"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Mobility data={landingPageData.Mobility} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="modelling"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Modelling data={landingPageData.Modelling} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="analytics"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Analytics data={landingPageData.Analytics} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
        <Route
          path="appliedai"
          element={
            <div>
              <Navigation data={landingPageData.Navigation} />
              <Appliedai data={landingPageData.Appliedai} />
              <Contact data={landingPageData.Contact} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
