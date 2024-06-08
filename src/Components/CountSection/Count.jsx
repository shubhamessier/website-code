import React, { useRef, useState, useEffect } from "react";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import "./Count.css";
import { useInView } from "react-intersection-observer";

const formatter = (value) => <CountUp end={value} separator="," duration={4} />;

const titleStyle = {
  fontSize: "24px",
  marginBottom: "10px",
  color: "white", // Changed to white
};

const valueStyle = {
  fontSize: "48px",
  color: "#fff",
};

const AnimatedStatistic = ({ title, value, precision }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView && !startAnimation) {
      setStartAnimation(true);
    }
  }, [inView, startAnimation]);

  return (
    <div
      className={`animatedStatisticContainer ${
        startAnimation ? "animate" : ""
      }`}
      ref={ref}
    >
      <Statistic
        title={title}
        value={value}
        precision={precision}
        formatter={formatter}
        style={{ textAlign: "center", padding: "20px", borderRadius: "8px" }}
        titleStyle={titleStyle}
        valueStyle={valueStyle}
      />
    </div>
  );
};

const App = () => (
  <Row gutter={16}>
    <Col span={12} style={{ width: "50%", height: "50%" }}>
      <Statistic
        title="AI Companies in Market"
        value={12579}
        formatter={formatter}
        style={{ textAlign: "center", padding: "20px", borderRadius: "8px" }}
        titleStyle={titleStyle}
        valueStyle={valueStyle}
      />
    </Col>
    <Col span={12} style={{ width: "50%", height: "50%" }}>
      <AnimatedStatistic title="Companies Against AI" value={1} precision={2} />
    </Col>
  </Row>
);

export default App;
