import React from "react";
import { Card, Col, Table } from "react-bootstrap";

const SystemLogs = () => {
  return (
    <>
      <Col className="mb-3">
        <Card>
          <Card.Header className="bg-dark">
            <i className="fas fa-clipboard"></i> System Logs
          </Card.Header>
          <Card.Body className="bg-secondary">
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  <th>Account Name</th>
                  <th>Activity</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Add new Member</td>
                  <td>9:00pm 11-05-20</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Add new Member</td>
                  <td>8:46pm 11-05-20</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Add new Member</td>
                  <td>8:42pm 11-05-20</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SystemLogs;
