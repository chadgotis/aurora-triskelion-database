import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Form, Button } from "react-bootstrap";

import classnames from "classnames";

import { createNewOfficers } from "../actions/officerActions";

const OfficersForm = ({ handleClose }) => {
  const errors = useSelector((state) => state.errors);
  const account = useSelector((state) => state.auth.user);
  const [year, setYear] = useState("");
  const d = new Date();
  const dispatch = useDispatch();

  // useEffect(() => {

  // },[])

  const submitHandler = () => {
    const newSet = {
      year,
    };
    dispatch(createNewOfficers(newSet, handleClose, account));
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Series Year</Form.Label>
          <Form.Control
            type="number"
            placeholder={`Example: ${d.getFullYear()}`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1900"
            max="2199"
            step="1"
            className={classnames({ "is-invalid": errors.year })}
          />
          {errors.year && (
            <Form.Control.Feedback type="invalid">
              {errors.year}
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

export default OfficersForm;
