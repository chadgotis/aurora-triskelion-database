import React, { useState } from "react";
import {
  Button,
  Row,
  ButtonGroup,
  OverlayTrigger,
  Tooltip,
  Modal,
} from "react-bootstrap";
import ViewMember from "./ViewMember";

import { removeMember } from "../actions/memberActions";
import { useDispatch } from "react-redux";

const MemberButtons = ({ id, values }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>View Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewMember values={values} handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <ButtonGroup className="m-auto" size="sm">
          <OverlayTrigger overlay={<Tooltip>View</Tooltip>}>
            <Button variant="info" onClick={handleShow}>
              {" "}
              <i className="fas fa-eye"></i>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
            <Button variant="warning">
              {" "}
              <i className="fas fa-edit"></i>
            </Button>
          </OverlayTrigger>
          <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
            <Button variant="danger" onClick={() => dispatch(removeMember(id))}>
              {" "}
              <i className="fas fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </Row>
    </>
  );
};

export default MemberButtons;
