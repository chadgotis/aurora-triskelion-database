import React from "react";
import { Col, Card, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const CurrentUser = () => {
  const profile = useSelector((state) => state.auth.user);
  const isUser = useSelector((state) => state.auth.user.role);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      <Col className="mb-3">
        <Card>
          <Card.Header className="bg-dark">
            <span className="align-middle">Profile Info</span>
          </Card.Header>
          <Card.Body className="bg-secondary">
            <Form.Group>
              <Form.Label>Previlege</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                readOnly
                value={isUser === "user" ? "Read Only" : "Read / Write"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                readOnly
                value={profile.username}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                readOnly
                value={capitalizeFirstLetter(profile.firstName)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                readOnly
                value={capitalizeFirstLetter(profile.lastName)}
              />
            </Form.Group>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CurrentUser;
