import React from "react";
import Members from "../components/Members";
import { Row, Breadcrumb } from "react-bootstrap";

const Management = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>Management</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Members />
      </Row>
    </>
  );
};

export default Management;
