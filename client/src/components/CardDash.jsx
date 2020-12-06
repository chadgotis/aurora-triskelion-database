import React from "react";
import { Card, Col, Spinner } from "react-bootstrap";

const CardDash = ({ number, text, icon, memberLoading, councilLoading }) => {
  return (
    <>
      <Col className="mb-3">
        {memberLoading || councilLoading ? (
          <Spinner
            animation="border"
            style={{ margin: "auto", display: "block" }}
            className="my-3"
          />
        ) : (
          <Card className="text-center">
            <Card.Body>
              <Card.Text style={{ fontSize: "4em" }}>
                {icon} {number}
              </Card.Text>
            </Card.Body>
            <Card.Footer>{text}</Card.Footer>
          </Card>
        )}
      </Col>
    </>
  );
};

export default CardDash;
