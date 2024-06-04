import "./App.css";
import React, { useEffect } from "react";
import ThreeScene from "./Components/Background/ThreeScene";
// import Home from "./Components/Home"
function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App">
      <ThreeScene />
    </div>
  );
}
export default App;
