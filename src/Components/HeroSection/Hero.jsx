import React from "react";
import styles from "./HeroStyle.css";

const HeroSection = () => {
  return (
    <div>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
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
