import React, { useRef, useState } from "react";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const formatter = (value) => <CountUp end={value} separator="," />;

const darkTheme = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "10px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.5s", // Move transition here for consistency
};

const titleStyle = {
  fontSize: "30px",
  marginBottom: "10px",
  color: "#fff",
};

const valueStyle = {
  fontSize: "60px",
  color: "#fff",
};

const AnimatedStatistic = ({ title, value, precision }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when component comes into view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });
  const [startAnimation, setStartAnimation] = useState(false);

  if (inView && !startAnimation) {
    setStartAnimation(true);
  }

  return (
    <div ref={ref}>
      <Statistic
        title={title}
        value={value}
        precision={precision}
        formatter={formatter}
        style={{
          ...darkTheme,
          opacity: startAnimation ? 1 : 0, // Initially set opacity to 0
          transform: `translateY(${startAnimation ? 0 : "20px"})`, // Slide up when in view
          width: "50%", // Set width to 100%
          height: "50%", // Set height to 100%
        }}
        titleStyle={titleStyle}
        valueStyle={valueStyle}
      />
    </div>
  );
};

const App = () => (
  <Row gutter={16}>
    <Col span={12} style={{ width: "50%", height: "50%" }}>
      {" "}
      {/* Adjust width and height here */}
      <Statistic
        title="AI Companies in Market"
        value={12579}
        formatter={formatter}
        style={darkTheme}
        titleStyle={titleStyle}
        valueStyle={valueStyle}
      />
    </Col>
    <Col span={12} style={{ width: "50px", height: "50%" }}>
      {" "}
      {/* Adjust width and height here */}
      <AnimatedStatistic title="Companies Against AI" value={1} precision={2} />
    </Col>
  </Row>
);

export default App;
