import React from "react";
import { Card, Col, Table, Spinner } from "react-bootstrap";

const SystemLogs = ({ eventsList, eventLoading }) => {
  return (
    <>
      {eventLoading ? (
        <Spinner
          animation="border"
          style={{ margin: "auto", display: "block" }}
          className="my-3"
        />
      ) : (
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
                  {eventsList.map((event) => (
                    <tr key={event._id}>
                      <td>{event.user}</td>
                      <td>{event.activity}</td>
                      <td>{new Date(event.createdAt).getFullYear()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default SystemLogs;
