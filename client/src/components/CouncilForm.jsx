import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { createCouncil } from "../actions/councilActions";

const CouncilForm = ({ handleClose }) => {
  const errors = useSelector((state) => state.errors);
  const account = useSelector((state) => state.auth.user);
  const [council, setCouncil] = useState({
    name: "",
    code: "",
  });

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(createCouncil(council, handleClose, account));
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Council Name</Form.Label>
          <Form.Control
            type="text"
            value={council.name}
            placeholder="Example: Maria Aurora"
            onChange={(e) => setCouncil({ ...council, name: e.target.value })}
            className={classnames({ "is-invalid": errors.cname })}
          />
          {errors.cname && (
            <Form.Control.Feedback type="invalid">
              {errors.cname}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Council Code</Form.Label>
          <Form.Control
            type="text"
            maxLength="3"
            value={council.code}
            placeholder="Example: MA"
            style={{ textTransform: "uppercase" }}
            onChange={(e) =>
              setCouncil({ ...council, code: e.target.value.toUpperCase() })
            }
            className={classnames({ "is-invalid": errors.code })}
          />
          {errors.code && (
            <Form.Control.Feedback type="invalid">
              {errors.code}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" onClick={() => submitHandler()} block>
          Create
        </Button>
      </Form>
    </>
  );
};

export default CouncilForm;
