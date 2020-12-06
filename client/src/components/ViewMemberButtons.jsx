import React, { useState } from "react";
import {
  ButtonGroup,
  Dropdown,
  OverlayTrigger,
  Tooltip,
  Button,
  Modal,
} from "react-bootstrap";

import SetChapterOfficer from "./SetChapterOfficer";
import SetCouncilOfficer from "./SetCouncilOfficer";
import ColForm from "./ColForm";

const ViewMemberButtons = ({ editSwal, handleShowSet, name, values }) => {
  const [show, setShow] = useState(false);
  const [showChap, setShowChap] = useState(false);
  const [showPrint, setShowPrint] = useState(false);

  const handleCloseCouncil = () => setShow(false);
  const handleShowCouncil = () => setShow(true);

  const handleCloseChap = () => setShowChap(false);
  const handleShowChap = () => setShowChap(true);

  const handleClosePrint = () => setShowPrint(false);
  const handleShowPrint = () => setShowPrint(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseCouncil}
        centered
        backdrop="static"
        keyboard={false}
        className="light"
      >
        <Modal.Header closeButton>
          <Modal.Title>Set as Council Officer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SetCouncilOfficer
            handleCloseCouncil={handleCloseCouncil}
            name={name}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCouncil}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showChap}
        onHide={handleCloseChap}
        centered
        backdrop="static"
        keyboard={false}
        className="light"
      >
        <Modal.Header closeButton>
          <Modal.Title>Set as Chapters Officer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SetChapterOfficer handleCloseChap={handleCloseChap} name={name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseChap}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showPrint}
        onHide={handleClosePrint}
        centered
        backdrop="static"
        keyboard={false}
        className="light"
      >
        <Modal.Header closeButton>
          <Modal.Title>Print COL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ColForm values={values} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePrint}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ButtonGroup className="float-right mt-2" size="sm">
        <OverlayTrigger overlay={<Tooltip>Set as</Tooltip>}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i className="fas fa-edit"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleShowSet}>APC Officer</Dropdown.Item>
              <Dropdown.Item onClick={handleShowCouncil}>
                Council Officer
              </Dropdown.Item>
              <Dropdown.Item onClick={handleShowChap}>
                Chapter Officer
              </Dropdown.Item>
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
          <Button
            variant="primary"
            // onClick={() => certificateOfLegitimacy(values)}
            onClick={handleShowPrint}
          >
            {" "}
            <i className="fas fa-print"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </>
  );
};

export default ViewMemberButtons;
