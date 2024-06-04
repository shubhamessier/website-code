import React, { useEffect } from "react";
import $ from "jquery";
import "./NavbarStyle.css";
const Navbar = () => {
  useEffect(() => {
    // This code runs after the component mounts
    const handleMenuToggle = () => {
      $(".main-nav").toggleClass("main-nav-open", 500);
      $(".menu-toggle").toggleClass("open");
    };
    $(".menu-toggle").on("click", handleMenuToggle);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      $(".menu-toggle").off("click", handleMenuToggle);
    };
  }, []);
  return (
    <header>
      <div className="wrapper">
        <h1 className="logo">
          Generic<span>Logo</span>
        </h1>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-home nav-icon"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-info nav-icon"></i>About
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-usd nav-icon"></i>Service
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pencil nav-icon"></i>Blog
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope nav-icon"></i>Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
