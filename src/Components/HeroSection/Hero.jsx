import React from "react";
import styles from "./HeroStyle.css";

const HeroSection = () => {
  const handleConnectClick = () => {
    alert("Connecting you with our expert...");
    // Add functionality to connect with an expert
  };
  const handleConsultationClick = () => {
    alert("Scheduling your free consultation...");
    // Add functionality to schedule a free consultation
  };
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
