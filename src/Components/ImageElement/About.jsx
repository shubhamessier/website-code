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
            src="https://media.istockphoto.com/id/1205709428/photo/young-creative-business-people-meeting-at-office.jpg?s=1024x1024&w=is&k=20&c=D5EPWYltjgn3a1fqNlajL74WLWj3WeBg8boESklAG0Y="
            alt="Creative Business People Meeting"
          />{" "}
        </div>{" "}
        <div className="allText bottomText">
          {" "}
          <p className="text-blk headingText">Anti Ai</p>{" "}
          <p className="text-blk subHeadingText">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>{" "}
          <p className="text-blk description">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.{" "}
          </p>{" "}
          <a href="#services" className="explore">
            {" "}
            View Services{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
