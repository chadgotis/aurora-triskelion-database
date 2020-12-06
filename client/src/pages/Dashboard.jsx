import React, { useEffect } from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import CardDash from "../components/CardDash";
import Recent from "../components/Recent";
import SystemLogs from "../components/SystemLogs";
import { useDispatch, useSelector } from "react-redux";
import { listMembers, getLatestAddedMember } from "../actions/memberActions";
import { councilAction } from "../actions/councilActions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const members = useSelector((state) => state.memberList);
  const councils = useSelector((state) => state.councilList);
  const councilLoading = useSelector((state) => state.councilList.loading);
  const memberLoading = useSelector((state) => state.memberList.loading);

  const latest = members.latest;

  const phi = members.members.filter((member) => {
    return member.sex === "Male";
  });
  const sigma = members.members.filter((member) => {
    return member.sex === "Female";
  });
  useEffect(() => {
    dispatch(listMembers());
    dispatch(councilAction());
    dispatch(getLatestAddedMember());
  }, [dispatch]);

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="justify-content-center" lg={4} md={2} xs={1}>
        <CardDash
          number={phi.length}
          text={" Phi Registered"}
          icon={<i className="fas fa-male"></i>}
          memberLoading={memberLoading}
        />
        <CardDash
          number={sigma.length}
          text={" Sigma Registered"}
          icon={<i className="fas fa-female"></i>}
          memberLoading={memberLoading}
        />
        <CardDash
          number={members.members.length}
          text={" Total Members Registered"}
          icon={<i className="fas fa-users"></i>}
          memberLoading={memberLoading}
        />{" "}
        <CardDash
          number={councils.councils.length}
          text={"Total Councils"}
          icon={<i className="fas fa-house-user"></i>}
          councilLoading={councilLoading}
        />
      </Row>
      <Row lg={2}>
        <Recent latest={latest} memberLoading={memberLoading} />
        <SystemLogs />
      </Row>
    </>
  );
};

export default Dashboard;
