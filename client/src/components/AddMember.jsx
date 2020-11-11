import React from "react";
import { Modal, Button } from "react-bootstrap";
import MemberForm from "./MemberForm";

const AddMember = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Member Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MemberForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMember;
