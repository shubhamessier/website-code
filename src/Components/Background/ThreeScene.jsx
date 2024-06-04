import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Navbar from "../NavbarPage/Navbar";
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
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xf5f5f5,
      backgroundColor: 0x0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Navbar />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
          top: "50%",
          transform: "translateY(-30%)",
        }}
      ></div>
    </div>
  );
};
export default ThreeScene;
