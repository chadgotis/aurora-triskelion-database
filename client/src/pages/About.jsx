import React from "react";
import { Row, Col } from "react-bootstrap";
import { samplePDF } from "../printing/col";

const About = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>Hello from About Page</h2>
          <button onClick={() => samplePDF()}>Sample PDF</button>
        </Col>
      </Row>
    </>
  );
};

export default About;
