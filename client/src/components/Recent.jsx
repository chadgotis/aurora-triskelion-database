import React from "react";
import { Card, Col, Table } from "react-bootstrap";

const Recent = () => {
  return (
    <>
      <Col className="mb-3">
        <Card>
          <Card.Header className="bg-dark">
            <i className="fas fa-sign-out-alt"></i> Recently Added
          </Card.Header>
          <Card.Body className="bg-secondary text-center">
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  <th>T-ID</th>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>M.I</th>
                  <th>Council</th>
                  <th>Chapter</th>
                  <th>Alias</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MA-4146123</td>
                  <td>Gotis</td>
                  <td>Chadric</td>
                  <td>M.</td>
                  <td>Maria Aurora</td>
                  <td>Wesleyan</td>
                  <td>Joker</td>
                </tr>
                <tr>
                  <td>MA-4146123</td>
                  <td>Gotis</td>
                  <td>Chadric</td>
                  <td>M.</td>
                  <td>Maria Aurora</td>
                  <td>Wesleyan</td>
                  <td>Joker</td>
                </tr>
                <tr>
                  <td>MA-4146123</td>
                  <td>Gotis</td>
                  <td>Chadric</td>
                  <td>M.</td>
                  <td>Maria Aurora</td>
                  <td>Wesleyan</td>
                  <td>Joker</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Recent;
