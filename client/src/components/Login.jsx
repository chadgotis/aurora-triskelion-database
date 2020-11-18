import React, { useState } from "react";
import { Row, Form, Col, Button, Image } from "react-bootstrap";
import logo1 from "../assets/TGP.jpeg";
import logo2 from "../assets/APC.jpg";
import logo3 from "../assets/TGS.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/authActions";

import classnames from "classnames";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);
  // const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const submitHandler = (e) => {
    e.preventDefault();
    const credentials = {
      username,
      password,
    };
    dispatch(loginUser(credentials, history));
  };

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
          {errors.message && errors.message}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={classnames({ "is-invalid": errors.username })}
              />
              {errors.username && (
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={classnames({ "is-invalid": errors.password })}
              />
              {errors.password && (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              className="text-center mt-4"
              block
              onClick={submitHandler}
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
