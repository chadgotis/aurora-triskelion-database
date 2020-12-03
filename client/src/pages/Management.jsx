import React, { useEffect } from "react";
import Members from "../components/Members";
import { Row, Breadcrumb } from "react-bootstrap";
import { getSetOfOfficers } from "../actions/officerActions";
import { councilAction } from "../actions/councilActions";
import { useDispatch } from "react-redux";

const Management = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(councilAction());
    dispatch(getSetOfOfficers());
  }, [dispatch]);
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
