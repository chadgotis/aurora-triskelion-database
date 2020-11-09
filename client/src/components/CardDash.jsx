import React from "react";
import { Card, Col } from "react-bootstrap";

const CardDash = ({ number, text, icon }) => {
  return (
    <>
      <Col className="mb-3">
        <Card className="text-center">
          <Card.Body>
            <Card.Text style={{ fontSize: "4em" }}>
              {icon} {number}
            </Card.Text>
          </Card.Body>
          <Card.Footer>{text}</Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default CardDash;
