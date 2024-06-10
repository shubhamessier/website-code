import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeScene from "./Components/Background/ThreeScene";
import Navbar from "./Components/NavbarSection/Navbar";
import Career from "./Components/CareersPage/Career";
import About from "./Components/AboutPage/About";
import Footer from "./Components/FooterSection/Footer";
import Contact from "./Components/ContactSection/Contact";

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<ThreeScene />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
