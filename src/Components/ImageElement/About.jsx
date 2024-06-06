import React from "react";
import "./AboutStyle.css";

export default function App() {
  return (
    <div className="responsive-container-block bigContainer">
      {" "}
      <div className="responsive-container-block Container bottomContainer">
        {" "}
        <div className="ultimateImg">
          {" "}
          <img
            className="mainImg"
            src="https://plus.unsplash.com/premium_photo-1664041273166-58f5fdf2e6d3?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Creative Business People Meeting"
          />{" "}
        </div>{" "}
        <div className="allText bottomText">
          {" "}
          <p className="headingText">Anti.0</p>{" "}
          <p className="description">
            {" "}
            Anti.0 Is our first indegniously developed solutions against AI,
            with it's boundless capabilites and functionalities, it's our first
            step in the direction to mitigate AI on a smaller scale.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
