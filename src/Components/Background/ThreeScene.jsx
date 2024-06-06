import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "../NavbarPage/Navbar";
import Hero from "../HeroSection/Hero";
import Image from "../ImageElement/About";
// import Contact from "../ContactSection/Contact";
import Career from "../CareersPage/Career";
import Count from "../CountSection/Count";

const ThreeScene = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 1.0,
      color: 0xf5f5f5,
      backgroundColor: 0x0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "transparent",
      }}
    >
      <div
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Navbar />

      <Hero />
      <Count />
      <Image />
      <Career />

      {/* <Contact /> */}
    </div>
  );
};

export default ThreeScene;
