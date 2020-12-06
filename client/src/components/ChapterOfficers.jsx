import React, { useEffect } from "react";

import { Card, Table, Spinner, Breadcrumb } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import { getSingleChapter } from "../actions/councilActions";

import { useDispatch, useSelector } from "react-redux";

const ChapterOfficers = ({ council_id, chapter_id }) => {
  const dispatch = useDispatch();

  const chapter = useSelector(
    (state) => state.councilList.singleChapter.chapters
  );
  const isLoading = useSelector((state) => state.councilList.loading);

  useEffect(() => {
    dispatch(getSingleChapter(council_id, chapter_id));
  }, [dispatch, council_id, chapter_id]);

  if (!chapter) {
    return (
      <Spinner
        animation="border"
        style={{ margin: "auto", display: "block" }}
        className="my-3"
      />
    );
  }
  if (isLoading) {
    return (
      <Spinner
        animation="border"
        style={{ margin: "auto", display: "block" }}
        className="my-3"
      />
    );
  }

  return (
    <>
      <Breadcrumb>
        <LinkContainer to="/settings">
          <Breadcrumb.Item>Settings</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item>Council</Breadcrumb.Item>
        <Breadcrumb.Item active>{chapter[0].name} </Breadcrumb.Item>
      </Breadcrumb>
      <Card className="mb-3">
        <Card.Header>{chapter[0].name} Chapter Officers</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Position</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grand Triskelion</td>
                <td>{chapter[0].officers.grandTriskelion}</td>
              </tr>
              <tr>
                <td>Deputy Grand Triskelion</td>
                <td>{chapter[0].officers.deputyGrandTriskelion}</td>
              </tr>
              <tr>
                <td>Master Wielder of the Whip</td>
                <td>{chapter[0].officers.masterWilderOfTheWhip}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChapterOfficers;
