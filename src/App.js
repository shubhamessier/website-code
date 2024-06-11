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
    // Enforce HTTPS redirection
    if (window.location.protocol !== 'https:' && process.env.NODE_ENV === 'production') {
      window.location.href = `https:${window.location.href.substring(window.location.protocol.length)}`;
    }

    // Prevent the default context menu from appearing
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Router>
      
      <Routes>
      <Navbar />
        <Route path="/" element={<ThreeScene />} />
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
