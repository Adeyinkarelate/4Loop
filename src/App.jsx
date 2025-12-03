import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Java from "../src/pages/Java"
import Home from "./pages/Home";
import DevOPs from "./pages/DevOPs";
import Contact from "./pages/Contact";
import CourseCategorySection from "./pages/CourseCategorySection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/dev" element={<DevOPs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/courses" element={<CourseCategorySection/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
