import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import CardDash from "../components/CardDash";
import Recent from "../components/Recent";
import SystemLogs from "../components/SystemLogs";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="justify-content-center" lg={4} md={2} xs={1}>
        <CardDash
          number={72}
          text={" Phi Registered"}
          icon={<i className="fas fa-male"></i>}
        />
        <CardDash
          number={52}
          text={" Sigma Registered"}
          icon={<i className="fas fa-female"></i>}
        />
        <CardDash
          number={124}
          text={" Total Members Registered"}
          icon={<i className="fas fa-users"></i>}
        />
        <CardDash
          number={4}
          text={"Total Councils"}
          icon={<i className="fas fa-house-user"></i>}
        />
      </Row>
      <Row lg={2}>
        <Recent />
        <SystemLogs />
      </Row>
    </>
  );
};

export default Dashboard;
