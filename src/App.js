import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeScene from "./Components/Background/ThreeScene";
import Navbar from "./Components/NavbarSection/Navbar";
import Career from "./Components/CareersPage/Career";
// import Footer from "./Components/FooterSection/Footer";

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
        <Route path="/" element={<ThreeScene />} />
        <Route path="/Career" element={<Career />} />
        {/* <Route path="/About" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
