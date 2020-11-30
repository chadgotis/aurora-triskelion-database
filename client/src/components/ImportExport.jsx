import React from "react";

import { Card, Row, Col, Button } from "react-bootstrap";

const ImportExport = () => {
  return (
    <>
      <Card className="mb-3 text-center">
        <Card.Header as="h5">System Actions</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Button block>Import CSV</Button>
            </Col>
            <Col>
              <Button block>Export CSV</Button>
            </Col>
            <Col>
              <Button block>Import CSV</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImportExport;
