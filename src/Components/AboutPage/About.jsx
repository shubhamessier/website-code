import React from "react";
import { Divider, Typography, Carousel } from "antd";
// import Cards from "../Cards/CardsPage";

import "./About.css";
const { Title, Paragraph } = Typography;

const contentstyle = {
  display: "flex", // Use flexbox to center the image
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  overflow: "hidden", // Hide any overflow
  width: "100%",
  height: "100%",
  objectFit: "cover",
}; // Set a background color (optional)};

const App = () => (
  <div className="about-us-container">
    <div className="about-us-content">
      {/* <Cards /> */}
      <Title level={1} className="about-us-title">
        About Us
      </Title>

      <Paragraph className="about-us-text">
        Anti AI is an AI research and deployment company. Our mission is to
        ensure that the threat from artificial general intelligence are
        mitigated even before they arise.
      </Paragraph>
      <Paragraph className="about-us-text">
        We believe that humanity should benefit from AI, and we're developing
        our own first-in-class Anti AI software to ensure safe usage.
      </Paragraph>
      <Carousel effect="fade">
        <div>
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 1"
            style={{ contentstyle }}
          />
        </div>
        <div>
          <img
            class="contentstyle"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 2"
            style={{ contentstyle }}
          />
        </div>
        <div>
          <img
            class="contentstyle"
            src="https://images.unsplash.com/photo-1531539427495-97c44a449837?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image 3"
            style={{ contentstyle }}
          />
        </div>
        <div>
          <img
            class="contentstyle"
            src="https://images.unsplash.com/photo-1565350897149-38dfafa81d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHx0ZWFtfGVufDB8MHwwfHx8MA%3D%3D"
            alt="Image 4"
            style={{ contentstyle }}
          />
        </div>
      </Carousel>
      <Title className="about-us-title">
        We are building safe and smart soultions against AGI, but will also
        consider our mission fulfilled if our work aids others to achieve this
        outcome.
      </Title>
      <Paragraph className="about-us-text">
        We're a small team of passionate people working together to make a dream
        come true, a dream of making AI Safe and accessible for everyone. Our
        motto is
      </Paragraph>
      <Title level={3} className="about-us-title">
        अन्ते सत्यं विजयते।
      </Title>
      <Divider />

      <Paragraph className="about-us-text">
        We are always looking for talented & stubborn individuals to join our
        team. If you are passionate about our goal enough and have a strong
        interest, you can visit our careers page.
      </Paragraph>
    </div>
  </div>
);

export default App;
