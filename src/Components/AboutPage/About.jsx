import React from "react";
import { Divider, Typography, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import "./About.css";
import { Carousel } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

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
        AntV has been used in more than 200,000 business systems of Alibaba
        Group, serving millions of users every day. It has been tested and
        verified in various harsh environments, and has become a reliable choice
        for data visualization in the industry.
      </Paragraph>
      <Divider />
      <Title level={3} className="about-us-title">
        Join Us
      </Title>
      <Paragraph className="about-us-text">
        We are always looking for talented developers and designers to join our
        team. If you are passionate about data visualization and have a strong
        interest in open-source projects, please don't hesitate to contact us.
      </Paragraph>
      <Button
        type="primary"
        icon={<GithubOutlined />}
        href="https://github.com/antvis/antv"
        target="_blank"
        className="about-us-button"
      >
        View on Github
      </Button>
    </div>
  </div>
);

export default App;
