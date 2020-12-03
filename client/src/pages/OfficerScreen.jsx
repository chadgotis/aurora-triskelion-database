import React, { useEffect } from "react";
import { Breadcrumb, Row, Col, Table, Button, Spinner } from "react-bootstrap";
import { getSingleSet } from "../actions/officerActions";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const OfficerScreen = ({ match }) => {
  const dispatch = useDispatch();
  const officers = useSelector((state) => state.officers.officers.set);
  const isLoading = useSelector((state) => state.officers.officers.loading);

  useEffect(() => {
    dispatch(getSingleSet(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <>
      <Breadcrumb>
        <LinkContainer to="/settings">
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Officers</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <Button className="mb-3">Set as Active</Button>
          {isLoading ? (
            <Spinner
              animation="border"
              style={{ margin: "auto", display: "block" }}
              className="my-3"
            />
          ) : (
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Full Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Governor General</td>
                  <td>{officers.governorGeneral}</td>
                </tr>
                <tr>
                  <td>Vice Governor General - Executive</td>
                  <td>{officers.executiveViceGovernorGeneral}</td>
                </tr>
                <tr>
                  <td>Vice Governor General - District</td>
                  <td>{officers.districtViceGovernorGeneral}</td>
                </tr>
                <tr>
                  <td>Provincial Executive Secretary</td>
                  <td>{officers.provExecutiveSecretary}</td>
                </tr>
                <tr>
                  <td>Provincial Keeper of the Chest</td>
                  <td>{officers.provKeeperOfTheChest}</td>
                </tr>
                <tr>
                  <td>Provincial Auditor</td>
                  <td>{officers.provAuditor}</td>
                </tr>
                <tr>
                  <td>Regent for Information and Communications</td>
                  <td>{officers.regentInformationAndCommunication}</td>
                </tr>
                <tr>
                  <td>Regent for Membership and Organization</td>
                  <td>{officers.regentMembershipAndOrganization}</td>
                </tr>
                <tr>
                  <td>Regent for Budget and Finance</td>
                  <td>{officers.regentBudgetAndFinance}</td>
                </tr>
                <tr>
                  <td>Regent Interior</td>
                  <td>{officers.regentInterior}</td>
                </tr>
                <tr>
                  <td>Regent for Special Projects</td>
                  <td>{officers.regentSpecialProjects}</td>
                </tr>
                <tr>
                  <td>Regent for Alumni Affairs</td>
                  <td>{officers.regentAlumniAffairs}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default OfficerScreen;
