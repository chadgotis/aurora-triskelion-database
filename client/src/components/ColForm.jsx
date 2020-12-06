import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Form, Button } from "react-bootstrap";
import { getLatestSetOfOfficers } from "../actions/officerActions";
import { certificateOfLegitimacy } from "../printing/col";
import { useDispatch, useSelector } from "react-redux";

const ColForm = ({ values }) => {
  const errors = {};

  const latest = useSelector((state) => state.officers.latest);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    requestedBy: "",
  });

  const submitHandler = () => {
    certificateOfLegitimacy(values, form.requestedBy, latest.governorGeneral);
  };

  useEffect(() => {
    dispatch(getLatestSetOfOfficers());
  }, [dispatch]);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Requested By</Form.Label>
          <Form.Control
            type="text"
            value={form.requestedBy}
            placeholder="Requested By"
            onChange={(e) => setForm({ ...form, requestedBy: e.target.value })}
            className={classnames({ "is-invalid": errors.requestedBy })}
          />
          {errors.requestedBy && (
            <Form.Control.Feedback type="invalid">
              {errors.requestedBy}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" onClick={() => submitHandler()} block>
          Create Certificate
        </Button>
      </Form>
    </>
  );
};

export default ColForm;
