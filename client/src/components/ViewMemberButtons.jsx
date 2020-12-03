import React from "react";
import {
  ButtonGroup,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";

const ViewMemberButtons = ({ editSwal, handleShowSet }) => {
  return (
    <>
      <ButtonGroup className="float-right mt-2" size="sm">
        <OverlayTrigger overlay={<Tooltip>Set as</Tooltip>}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i className="fas fa-edit"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleShowSet}>APC Officer</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Council Officer</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Chapter Officer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
          <Button variant="warning" onClick={() => editSwal()}>
            {" "}
            <i className="fas fa-edit"></i>
          </Button>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip>Generate COL</Tooltip>}>
          <Button variant="primary">
            {" "}
            <i className="fas fa-print"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </>
  );
};

export default ViewMemberButtons;
