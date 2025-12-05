import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DevOPs from "./pages/DevOPs";
import Contact from "./pages/Contact";
import Frontend from "./pages/Frontend";
import AwsSolutionArchitect from "./pages/AwsSolutionArchitect";
import DemandPlanner from "./pages/DemandPlanner";
import CourseCategorySection from "./pages/CourseCategorySection"; 
import BackToTop from "./components/BackToTop/BackToTop";
import PythonFullStack from "./pages/PythonFullStack";
import DataAnalysisDemandPlanning from "./pages/DataAnalysisDemandPlanning"

const App = () => {
  return (
    <main>
      <BackToTop/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/python" element={<PythonFullStack/>}/>
        <Route path="/dev" element={<DevOPs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/demand-planner" element={<DemandPlanner/>}/>
        <Route path="/solution-architect" element={<Frontend/>}/>
        <Route path="/front-end" element={<AwsSolutionArchitect/>}/>
        <Route path="/courses" element={<CourseCategorySection/>}/>
        <Route path="/data-analysis" element={<DataAnalysisDemandPlanning/>}/>
      </Routes>
    </BrowserRouter>
    </main>
  );
};

export default App;
