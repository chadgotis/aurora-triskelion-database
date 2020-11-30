import React from "react";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import SettingsCouncilList from "../components/SettingsCouncilList";
import SettingsOfficers from "../components/SettingsOfficers";
import SystemInfo from "../components/SystemInfo";
import ImportExport from "../components/ImportExport";

const Settings = () => {
  return (
    <>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item active>Settings</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <ImportExport />
          <SystemInfo />
        </Col>
        <Col>
          <SettingsOfficers />
          <SettingsCouncilList />
        </Col>
      </Row>
    </>
  );
};

export default Settings;
