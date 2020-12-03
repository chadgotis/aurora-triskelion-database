import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCouncil } from "../actions/councilActions";
import { Spinner, Breadcrumb, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CouncilOfficers from "../components/CouncilOfficers";
import CouncilChapters from "../components/CouncilChapters";

const MunicipalCouncilSreen = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCouncil(match.params.id));
  }, [dispatch, match.params.id]);

  const councilId = match.params.id;

  const council = useSelector((state) => state.councilList.singleCouncil);
  const isLoading = useSelector((state) => state.councilList.loading);
  const error = useSelector((state) => state.errors);

  if (error.msg) {
    return (
      <Col>
        <h2>Not Found</h2>
      </Col>
    );
  }

  return (
    <>
      <Breadcrumb>
        <LinkContainer to="/settings">
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Council</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          {isLoading ? (
            <Spinner
              animation="border"
              style={{ margin: "auto", display: "block" }}
              className="my-3"
            />
          ) : (
            <h2 className="text-center mb-3">
              {council.name} Municipal Council
            </h2>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <CouncilOfficers officers={council.officers} />
        </Col>
        <Col>
          <CouncilChapters chapters={council.chapters} councilId={councilId} />
        </Col>
      </Row>
    </>
  );
};

export default MunicipalCouncilSreen;
