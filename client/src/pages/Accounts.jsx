import React from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import AccountList from "../components/AccountList";
import CurrentUser from "../components/CurrentUser";

const Accounts = () => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Accounts</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <CurrentUser />
        <AccountList />
      </Row>
    </>
  );
};

export default Accounts;
