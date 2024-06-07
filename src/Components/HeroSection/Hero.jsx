import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
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
          <h1>We're Anti AI,</h1>
          <h1 className="typewriter-wrapper">
            <Typewriter
              words={[
                // "Ofcourse we don't pay our employees.",
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
          </p>
          <p>
            uncontrolled rise of Artificial Intelligence, Safeguarding people
          </p>
          <p>across the globe through our Innovative Software solutions.</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
