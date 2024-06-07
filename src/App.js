import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeScene from "./Components/Background/ThreeScene";
import Navbar from "./Components/NavbarPage/Navbar";
import Career from "./Components/CareersPage/Career";

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
      </Routes>
    </Router>
  );
}

export default App;
