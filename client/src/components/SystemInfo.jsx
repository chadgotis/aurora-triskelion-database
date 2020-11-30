import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const SystemInfo = () => {
  return (
    <>
      <Card className="mb-3">
        <Card.Header as="h5">System Info</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Card.Text>System Name:</Card.Text>
              <Card.Text>Stack:</Card.Text>
              <Card.Text>Frontend:</Card.Text>
              <Card.Text>Backend:</Card.Text>
              <Card.Text>Database:</Card.Text>
              <Card.Text>Database Type:</Card.Text>
              <Card.Text>Date Published:</Card.Text>
            </Col>
            <Col>
              <Card.Text>Aurora Triskelion Database</Card.Text>
              <Card.Text>M.E.R.N Stack</Card.Text>
              <Card.Text>React.js</Card.Text>
              <Card.Text>Node/Express</Card.Text>
              <Card.Text>MongoDB</Card.Text>
              <Card.Text>NoSql</Card.Text>
              <Card.Text>December 17, 2020</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default SystemInfo;
