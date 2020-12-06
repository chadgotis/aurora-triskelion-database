import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { updateSetOfOfficers } from "../actions/officerActions";

const SetOfficer = ({ name, handleCloseSet }) => {
  const officerSet = useSelector((state) => state.officers.officerSet);
  const [formData, setFormData] = useState({
    year: "",
    position: "",
    name,
  });

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(updateSetOfOfficers(formData, handleCloseSet));
  };
  const errors = useSelector((state) => state.errors);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Series Year</Form.Label>
          <Form.Control
            as="select"
            value={formData.year}
            required
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            className={classnames({ "is-invalid": errors.seriesYear })}
          >
            <option value="">--Select Series Year--</option>
            {officerSet.map((year) => (
              <option key={year._id} value={year._id}>
                {year.year}
              </option>
            ))}
          </Form.Control>
          {errors.seriesYear && (
            <Form.Control.Feedback type="invalid">
              {errors.seriesYear}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            as="select"
            placeholder="First Name"
            value={formData.position}
            required
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            className={classnames({ "is-invalid": errors.position })}
          >
            <option value="">--Select Position--</option>
            <option value="Governor General">Governor General</option>
            <option value="Vice Governor General - District">
              Vice Governor General - District
            </option>
            <option value="Vice Governor General - Executive">
              Vice Governor General - Executive
            </option>
            <option value="Provincial Executive Secretary">
              Provincial Executive Secretary
            </option>
            <option value="Provincial Keeper of the Chest">
              Provincial Keeper of the Chest
            </option>
            <option value="Provincial Auditor">Provincial Auditor</option>
            <option value="Regent for Information and Communications">
              Regent for Information and Communications
            </option>
            <option value="Regent for Membership and Organization">
              Regent for Membership and Organization
            </option>
            <option value="Regent for Budget and Finance">
              Regent for Budget and Finance
            </option>
            <option value="Regent Interior">Regent Interior</option>
            <option value="Regent for Special Projects">
              Regent for Special Projects
            </option>
            <option value="Regent for Alumni Affairs">
              Regent for Alumni Affairs
            </option>
          </Form.Control>

          {errors.position && (
            <Form.Control.Feedback type="invalid">
              {errors.position}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button variant="primary" block onClick={() => submitHandler()}>
          Save Changes
        </Button>
      </Form>
    </>
  );
};

export default SetOfficer;
