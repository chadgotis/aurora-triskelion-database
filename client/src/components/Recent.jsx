import React from "react";
import { Card, Col, Table, Spinner } from "react-bootstrap";

const Recent = ({ latest, memberLoading }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <Col className="mb-3">
        {memberLoading ? (
          <Spinner
            animation="border"
            style={{ margin: "auto", display: "block" }}
            className="my-3"
          />
        ) : (
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
                  {latest.map((recent) => (
                    <tr key={recent._id}>
                      <td>{recent.t_id}</td>
                      <td>{capitalizeFirstLetter(recent.lastName)}</td>
                      <td>{capitalizeFirstLetter(recent.firstName)}</td>
                      <td>
                        {capitalizeFirstLetter(recent.middleName.charAt(0))}.
                      </td>
                      <td>{recent.municipalCouncil.name}</td>
                      <td>{capitalizeFirstLetter(recent.chapter)}</td>
                      <td>{capitalizeFirstLetter(recent.alias)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        )}
      </Col>
    </>
  );
};

export default Recent;
