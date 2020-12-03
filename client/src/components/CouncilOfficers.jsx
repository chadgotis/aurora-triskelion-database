import React from "react";
import { Card, Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const CouncilOfficers = ({ officers }) => {
  if (!officers) {
    return (
      <Spinner
        animation="border"
        style={{ margin: "auto", display: "block" }}
        className="my-3"
      />
    );
  }
  return (
    <>
      <Card className="mb-3">
        <Card.Header>Council Officers</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chairman</td>
                <td>{officers.chairman}</td>
              </tr>
              <tr>
                <td>Vice Chairman</td>
                <td>{officers.viceChairman}</td>
              </tr>
              <tr>
                <td>Secretary</td>
                <td>{officers.secretary}</td>
              </tr>
              <tr>
                <td>Keeper of the Chest</td>
                <td>{officers.keeperOftheChest}</td>
              </tr>
              <tr>
                <td>Auditor</td>
                <td>{officers.auditor}</td>
              </tr>
              <tr>
                <td>Budget and Finance</td>
                <td>{officers.budgetAndFinance}</td>
              </tr>
              <tr>
                <td>Membership and Organization</td>
                <td>{officers.membershipAndOrganization}</td>
              </tr>
              <tr>
                <td>Communication and Information</td>
                <td>{officers.communicationAndInformation}</td>
              </tr>
              <tr>
                <td>Special Projects</td>
                <td>{officers.specialProjects}</td>
              </tr>
              <tr>
                <td>Alumni Affairs</td>
                <td>{officers.alumniAffairs}</td>
              </tr>
              <tr>
                <td>Interior</td>
                <td>{officers.interior}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default CouncilOfficers;
