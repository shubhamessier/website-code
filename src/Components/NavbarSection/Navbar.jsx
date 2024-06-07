import React, { useEffect, useState } from "react";
import $ from "jquery";
import logoImage from "./AntiAilogo.png";
import "./NavbarStyle.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoImage} alt="Company Logo" className="logo-image" />
        </div>
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-links">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
