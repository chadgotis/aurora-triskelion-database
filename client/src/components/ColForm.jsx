import React, { useState } from "react";
import classnames from "classnames";
import { Form, Button } from "react-bootstrap";
import { certificateOfLegitimacy } from "../printing/col";
import axios from "axios";
import { useSelector } from "react-redux";

const ColForm = ({ values, latest }) => {
  const errors = {};

  const account = useSelector((state) => state.auth.user);

  const chapSingle = values.municipalCouncil.chapters.filter(
    (res) => res.name === values.chapter
  );

  let sigGrandTriskelion;
  let sigChap;

  if (Array.isArray(chapSingle)) {
    sigGrandTriskelion = chapSingle[0].officers.grandTriskelion;
    sigChap = chapSingle[0].name;
  } else {
    sigGrandTriskelion = chapSingle.officers.grandTriskelion;
    sigChap = chapSingle.name;
  }

  const [form, setForm] = useState({
    requestedBy: "",
    grandTriskelion: sigGrandTriskelion,
    chairman: values.municipalCouncil.officers.chairman,
    governorGeneral: latest.governorGeneral,
  });

  const submitHandler = async () => {
    certificateOfLegitimacy(
      values,
      form.requestedBy,
      form.grandTriskelion,
      form.chairman,
      form.governorGeneral,
      sigChap
    );
    const newEvent = {
      user: `${account.firstName} ${account.lastName}`,
      activity: `Generated COL for : '${values.firstName} ${values.middleName} ${values.lastName}' by the request of ${form.requestedBy}  `,
    };
    await axios.post(`/api/events/create`, newEvent);
  };

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
        <Form.Group>
          <Form.Label>Chapters Grand Triskelion</Form.Label>
          <Form.Control
            type="text"
            value={form.grandTriskelion}
            placeholder="Grand Triskelion"
            onChange={(e) =>
              setForm({ ...form, grandTriskelion: e.target.value })
            }
            className={classnames({ "is-invalid": errors.grandTriskelion })}
          />
          {errors.requestedBy && (
            <Form.Control.Feedback type="invalid">
              {errors.requestedBy}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Chairman</Form.Label>
          <Form.Control
            type="text"
            value={form.chairman}
            placeholder="Chairman"
            onChange={(e) => setForm({ ...form, chairman: e.target.value })}
            className={classnames({ "is-invalid": errors.chairman })}
          />
          {errors.chairman && (
            <Form.Control.Feedback type="invalid">
              {errors.chairman}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Governor General</Form.Label>
          <Form.Control
            type="text"
            value={form.governorGeneral}
            placeholder="Governor General"
            onChange={(e) =>
              setForm({ ...form, governorGeneral: e.target.value })
            }
            className={classnames({ "is-invalid": errors.governorGeneral })}
          />
          {errors.governorGeneral && (
            <Form.Control.Feedback type="invalid">
              {errors.governorGeneral}
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
