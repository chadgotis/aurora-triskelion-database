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
import { useDispatch, useSelector } from "react-redux";

const MemberButtons = ({ id, values }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isUser = useSelector((state) => state.auth.user.role);
  const account = useSelector((state) => state.auth.user);
  const name = `${values.firstName} ${values.middleName} ${values.lastName}`;
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
          {isUser === "user" ? null : (
            <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
              <Button
                variant="danger"
                onClick={() => dispatch(removeMember(id, name, account))}
              >
                {" "}
                <i className="fas fa-trash"></i>
              </Button>
            </OverlayTrigger>
          )}
        </ButtonGroup>
      </Row>
    </>
  );
};

export default MemberButtons;
