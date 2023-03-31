import "./App.css";
import React, { useEffect } from "react";
import "./script.js";
import { NavLink } from "react-router-dom";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Imagecarousel from "./components/ImageCarousal.jsx";

function App() {
  return (
    <div>
      <Hero />
      {/* <ImageSlider /> */}
      <Imagecarousel />
      {/* <ImageDetails /> */}
      <Contact />
      <Footer />
      {/* <ImageSlider /> */}
    </div>
  );
}

export default App;
