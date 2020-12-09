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
import { councilAction } from "../actions/councilActions";
import CouncilForm from "./CouncilForm";
import { deleteCouncil } from "../actions/councilActions";

const SettingsCouncilList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const councils = useSelector((state) => state.councilList);
  const isSuperAdmin = useSelector((state) => state.auth.user.role);
  const account = useSelector((state) => state.auth.user);

  const deleteHandler = (id, name, account) => {
    dispatch(deleteCouncil(id, name, account));
  };

  useEffect(() => {
    dispatch(councilAction());
  }, [dispatch]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Council</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CouncilForm handleClose={handleClose} />
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
            Municipal Councils
          </span>
        </Card.Header>
        <Card.Body>
          {councils.loading ? (
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
                  <th>Name</th>
                  <th>Code</th>
                  <th>Total Chapters</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {councils.councils.map((council) => (
                  <tr key={council._id}>
                    <td>{council.name}</td>
                    <td>{council.code}</td>
                    <td>{council.chapters.length}</td>
                    <td>
                      <ButtonGroup className="m-auto" size="sm">
                        <OverlayTrigger overlay={<Tooltip>View</Tooltip>}>
                          <LinkContainer
                            to={`/settings/council/${council._id}`}
                            sample={1}
                          >
                            <Button variant="info">
                              {" "}
                              <i className="fas fa-eye"></i>
                            </Button>
                          </LinkContainer>
                        </OverlayTrigger>
                        {isSuperAdmin === "Super-Admin" ? (
                          <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
                            <Button
                              variant="danger"
                              onClick={() =>
                                deleteHandler(
                                  council._id,
                                  council.name,
                                  account
                                )
                              }
                            >
                              {" "}
                              <i className="fas fa-trash"></i>
                            </Button>
                          </OverlayTrigger>
                        ) : null}
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

export default SettingsCouncilList;
