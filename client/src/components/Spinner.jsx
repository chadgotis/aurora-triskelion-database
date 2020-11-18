import React from "react";
import spinner from "../assets/spinner.gif";
import { Row } from "react-bootstrap";

const Spinner = () => {
  return (
    <>
      <Row>
        <img
          src={spinner}
          alt="Loadin..."
          style={{ width: "200px", margin: "auto", display: "block" }}
        />
      </Row>
    </>
  );
};

export default Spinner;
