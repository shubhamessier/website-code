import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
// import { Button } from "antd";
import Button from "@mui/material/Button";

import "./Hero.css"; // Import CSS file

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
    <div className="hero-container">
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <div className="text-wrapper">
            <h1>We're Anti AI,</h1>
            <h1 className="typewriter-wrapper">
              <Typewriter
                words={[
                  "Of course we don't pay our employees.",
                  "An Innovation Powerhouse.",
                  "Driving the Future of Technology.",
                  "Using AI for making world a better place.",
                  "Protecting Humanity.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h1>
            <p>
              We're An Innovative Software Company. Protecting Humanity from the{" "}
              uncontrolled rise of Artificial Intelligence, Safeguarding people
              across the globe through our Innovative Software solutions.
            </p>
            {/* <p>
              <Button className="custom-button">See More</Button>
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
