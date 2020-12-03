import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Button,
  Col,
  Spinner,
  Tooltip,
  OverlayTrigger,
  ButtonGroup,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSetOfOfficers, deleteOfficers } from "../actions/officerActions";
import OfficersForm from "./OfficersForm";

const SettingsOfficers = () => {
  const dispatch = useDispatch();

  const officers = useSelector((state) => state.officers);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = (id) => {
    dispatch(deleteOfficers(id));
  };

  useEffect(() => {
    dispatch(getSetOfOfficers());
  }, [dispatch]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Set of Officers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OfficersForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="mb-3">
        <Card.Header>
          <Button
            variant="success"
            onClick={handleShow}
            className="float-left "
          >
            <i className="fas fa-plus mr-1"></i>
            Create New
          </Button>
          <span className="align-middle float-right mt-2">
            APC Set of Officers
          </span>
        </Card.Header>
        <Card.Body>
          {officers.loading ? (
            <Col>
              <Spinner
                animation="border"
                style={{ margin: "auto", display: "block" }}
                className="my-3"
              />
            </Col>
          ) : (
            <Table
              size="sm"
              responsive
              striped
              bordered
              hover
              className="text-center"
            >
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {officers.officerSet.map((officer) => (
                  <tr key={officer._id}>
                    <td>{officer.year}</td>
                    <td>{officer.current.toString()}</td>
                    <td>
                      <ButtonGroup className="m-auto" size="sm">
                        <OverlayTrigger overlay={<Tooltip>View</Tooltip>}>
                          <LinkContainer
                            to={`/settings/officers/${officer._id}`}
                          >
                            <Button variant="info">
                              {" "}
                              <i className="fas fa-eye"></i>
                            </Button>
                          </LinkContainer>
                        </OverlayTrigger>

                        <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
                          <Button
                            variant="danger"
                            onClick={() => deleteHandler(officer._id)}
                          >
                            {" "}
                            <i className="fas fa-trash"></i>
                          </Button>
                        </OverlayTrigger>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SettingsOfficers;
