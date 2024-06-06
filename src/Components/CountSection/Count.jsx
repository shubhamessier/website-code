import React, { useRef } from "react";
import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const formatter = (value) => <CountUp end={value} separator="," />;

const darkTheme = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.5s", // Move transition here for consistency
};

const titleStyle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#fff",
};

const valueStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
};

const App = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when component comes into view
    threshold: 0.2, // Trigger when 20% of the component is visible
  });
  const startAnimation = useRef(false);

  if (inView && !startAnimation.current) {
    startAnimation.current = true;
  }

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic
          title="AI Companies in Market"
          value={12579}
          formatter={formatter}
          style={darkTheme}
          titleStyle={titleStyle}
          valueStyle={valueStyle}
        />
      </Col>
      <Col span={12}>
        <div ref={ref}>
          <Statistic
            title="Companies Against AI"
            value={1}
            precision={2}
            formatter={formatter}
            style={{
              ...darkTheme,
              opacity: startAnimation.current ? 1 : 0, // Initially set opacity to 0
              transform: `translateY(${startAnimation.current ? 0 : "20px"})`, // Slide up when in view
            }}
            titleStyle={titleStyle}
            valueStyle={valueStyle}
          />
        </div>
      </Col>
    </Row>
  );
};

export default App;
