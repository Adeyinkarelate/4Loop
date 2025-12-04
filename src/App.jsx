import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Java from "../src/pages/Java"
import Home from "./pages/Home";
import DevOPs from "./pages/DevOPs";
import Contact from "./pages/Contact";
import Frontend from "./pages/Frontend";
import AwsSolutionArchitect from "./pages/AwsSolutionArchitect";
import DemandPlanner from "./pages/DemandPlanner";
import CourseCategorySection from "./pages/CourseCategorySection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/dev" element={<DevOPs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/demand-planner" element={<DemandPlanner/>}/>
        <Route path="/solution-architect" element={<Frontend/>}/>
        <Route path="/front-end" element={<AwsSolutionArchitect/>}/>
        <Route path="/courses" element={<CourseCategorySection/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
