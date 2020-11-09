import React from "react";
import { Row, Form, Col, Button, Image } from "react-bootstrap";
import logo1 from "../assets/TGP.jpeg";
import logo2 from "../assets/APC.jpg";
import logo3 from "../assets/TGS.jpeg";

const Login = () => {
  return (
    <div className="login">
      <Row className="py-4 d-flex flex-column justify-content-center align-content-center">
        <Col lg={4} md={6} xs={10}>
          <h3 className="text-center">Login Page</h3>
          <Row className="py-2 d-flex justify-content-center align-content-center">
            <Col>
              <Image
                src={logo1}
                alt="Logo"
                fluid
                roundedCircle
                className="logo"
              />
            </Col>
            <Col>
              <Image
                src={logo2}
                alt="Logo"
                fluid
                roundedCircle
                className="logo"
              />
            </Col>
            <Col>
              <Image
                src={logo3}
                alt="Logo"
                fluid
                roundedCircle
                className="logo"
              />
            </Col>
          </Row>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="text-center mt-4"
              block
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
