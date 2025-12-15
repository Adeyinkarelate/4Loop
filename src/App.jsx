import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DevOPs from "./pages/DevOPs";
import Contact from "./pages/Contact";
import Frontend from "./pages/Frontend";
import AwsSolutionArchitect from "./pages/AwsSolutionArchitect";
// import DemandPlanner from "./pages/DemandPlanner";
import CourseCategorySection from "./pages/CourseCategorySection";
import BackToTop from "./components/BackToTop/BackToTop";
import PythonFullStack from "./pages/PythonFullStack";
import DataAnalysisDemandPlanning from "./pages/DataAnalysisDemandPlanning";
import ScrollToTop from "./components/ScrollToTop";
import LinuxAdmin from "./pages/LinuxAdmin";
import JavaFullStack from "./pages/JavaFullStack";
import OneYearAccess from "./pages/OneYearAccess";


const App = () => {
  return (
    <main>
      <BackToTop />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<PythonFullStack />} />
          <Route path="/dev" element={<DevOPs />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/demand-planner" element={<DemandPlanner />} /> */}
          <Route path="/solution-architect" element={<AwsSolutionArchitect />}/>
          <Route path="/front-end" element={<Frontend/>} />
          <Route path="/courses" element={<CourseCategorySection />} />
          <Route path="/data-analysis" element={<DataAnalysisDemandPlanning/>}/>
          <Route path="/linux-admin" element={<LinuxAdmin/>}/>
          <Route path="/java-programming" element={<JavaFullStack/>}/>
          <Route path="/OneYearAccess" element={<OneYearAccess/>}/>

        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
