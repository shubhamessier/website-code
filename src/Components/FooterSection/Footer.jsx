// Footer.js
import React from "react";

import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  LinkedinFilled,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const CustomFooter = () => (
  <Footer
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "white",
      padding: "40px 60px",
      backdropFilter: "blur(5px)",
      marginTop: "40px",
    }}
  >
    <Row justify="space-between" gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Title level={4} style={{ color: "white" }}>
              Company
            </Title>

            <Text style={{ color: "white" }}>
              <a href="/about">About Us</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/career">Careers</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/home">Home</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <a href="/contact">Contact Us</a>
            </Text>
            <br />
          </Col>
          <Col span={12}>
            <Title level={4} style={{ color: "white" }}>
              Follow Us
            </Title>
            <Space size="middle">
              <Link
                href="https://www.instagram.com/antiai.ltd/"
                target="_blank"
              >
                <InstagramFilled style={{ fontSize: "24px", color: "white" }} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/anti-ai"
                target="_blank"
              >
                <LinkedinFilled style={{ fontSize: "24px", color: "white" }} />
              </Link>
            </Space>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
          <Col span={24}>
            <Title level={4} style={{ color: "white" }}>
              Contact Us
            </Title>
            <Text style={{ color: "white" }}>
              <PhoneOutlined />{" "}
              <a href="tel:+919116665513">Call Us: +91 9116-665513</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <MailOutlined />{" "}
              <a href="mailto:hello@antiai.ltd">hello@antiai.ltd</a>
            </Text>
            <br />
            <Text style={{ color: "white" }}>
              <HomeOutlined />{" "}
              <a href="https://maps.app.goo.gl/4Sr5njL6XP9Qnyma6">
                52/210, Padmani VT Rd, Ward 27, Mansarovar Sector 5, Mansarovar,
                Jaipur, Rajasthan 302020
              </a>
            </Text>
            <br />
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12}>
        <Title level={4} style={{ color: "white" }}>
          Our Location
        </Title>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.7146240066236!2d75.76371110656719!3d26.86437353759361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56004ec6873%3A0xa3eb53f21a5c227d!2sCo-work%20Town%20-%20Coworking%20space%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1717999928338!5m2!1sen!2sin"
          width="100%"
          height="300"
          border-radius="5px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: "20px" }}>
      <Text style={{ color: "white" }}>
        &copy; 2024 Anti AI. All rights reserved.
      </Text>
    </Row>
  </Footer>
);

export default CustomFooter;
