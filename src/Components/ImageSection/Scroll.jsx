// ScrollRevealElement.js
import React, { useEffect, useRef } from "react";
import "./ScrollStyle.css";

const ScrollRevealElement = ({ imageSrc, title, description }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          } else {
            entry.target.classList.remove("reveal");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="scroll-reveal-element">
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Scroll Reveal"
          className="image"
        />
      </div>
      <div className="content">
        <h3 className="title">ANTI.0</h3>
        <p className="description">
          Our first flagship product in response to the Rise of AI
        </p>
      </div>
    </div>
  );
};

export default ScrollRevealElement;
