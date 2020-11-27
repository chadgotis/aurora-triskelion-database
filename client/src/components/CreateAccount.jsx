import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";
import { createUserAccount } from "../actions/accountActions";
import { useDispatch, useSelector } from "react-redux";

const CreateAccount = ({ handleClose }) => {
  const errors = useSelector((state) => state.accounts.errors);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    username: "",
  });

  const [pass, setPass] = useState("");
  const submit = () => {
    const newAccount = {
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      username: user.username,
      password: pass,
    };
    dispatch(createUserAccount(newAccount, handleClose));
  };

  const generateRandomPass = () => {
    return setPass(Math.random().toString(36).slice(-10));
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            className={classnames({ "is-invalid": errors.firstName })}
          />
          {errors.firstName && (
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Middle Name"
            value={user.middleName}
            onChange={(e) => setUser({ ...user, middleName: e.target.value })}
            className={classnames({ "is-invalid": errors.middleName })}
          />
          {errors.middleName && (
            <Form.Control.Feedback type="invalid">
              {errors.middleName}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            className={classnames({ "is-invalid": errors.lastName })}
          />
          {errors.lastName && (
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className={classnames({ "is-invalid": errors.username })}
          />
          {errors.username && (
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={pass}
            readOnly
            className={classnames({ "is-invalid": errors.password })}
          />
          {errors.password && (
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          )}
          <Button
            className="mt-3"
            variant="warning"
            onClick={() => generateRandomPass()}
          >
            Generate Password
          </Button>
        </Form.Group>
        <Button className="mt-3" block onClick={() => submit()}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateAccount;
