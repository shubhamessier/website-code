import React, { useEffect, useRef } from "react";
import "./HeroStyle.css";

const HeroSection = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroContent = heroContentRef.current;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > heroHeight) {
        heroContent.style.opacity = 1 - (scrollPosition - heroHeight) / 200;
      } else {
        heroContent.style.opacity = 1;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <h1>We're Anti AI, An Innovation Powerhouse.</h1>
          <p>
            We're An Innovative Software Company. Protecting Humanity from the{" "}
            uncontrolled rise of Artificial Intelligence, Safeguarding people
            across the globe through our Innovative Software solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
