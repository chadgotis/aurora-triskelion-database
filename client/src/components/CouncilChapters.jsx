import React, { useState } from "react";
import ChapterForm from "./ChapterForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteChapter } from "../actions/councilActions";
import { LinkContainer } from "react-router-bootstrap";

import {
  Card,
  Spinner,
  Button,
  Table,
  Modal,
  OverlayTrigger,
  Tooltip,
  ButtonGroup,
} from "react-bootstrap";

const CouncilChapters = ({ chapters, councilId }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const isSuperAdmin = useSelector((state) => state.auth.user.role);
  const account = useSelector((state) => state.auth.user);

  const deleteHandler = (id, name, account) => {
    dispatch(deleteChapter(councilId, id, name, account));
  };

  if (!chapters) {
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Chapter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChapterForm c_id={councilId} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card>
        <Card.Header>
          <Button variant="success" className="float-left" onClick={handleShow}>
            <i className="fas fa-plus mr-1"></i>
            Add New
          </Button>
          <span className="align-middle float-right mt-2">
            Council Chapters
          </span>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {chapters.map((chapter) => (
                <tr key={chapter._id}>
                  <td>{chapter.name}</td>
                  <td>
                    <ButtonGroup className="m-auto" size="sm">
                      <OverlayTrigger overlay={<Tooltip>View</Tooltip>}>
                        <LinkContainer
                          to={`/settings/council/${councilId}/${chapter._id}`}
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
                              deleteHandler(chapter._id, chapter.name, account)
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
        </Card.Body>
      </Card>
    </>
  );
};

export default CouncilChapters;
