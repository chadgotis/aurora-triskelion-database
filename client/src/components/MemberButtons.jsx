import React from "react";
import { Button, Row, Col } from "react-bootstrap";

const MemberButtons = () => {
  return (
    <Row className="d-flex">
      <Col>
        <Button variant="success">E</Button>
      </Col>
      <Col>
        <Button variant="success">D</Button>
      </Col>
    </Row>
  );
};

export default MemberButtons;
