import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { editCouncilOfficers } from "../actions/councilActions";

const SetCouncilOfficer = ({ handleCloseCouncil, name }) => {
  const councilSet = useSelector((state) => state.councilList.councils);

  const dispatch = useDispatch();

  const errors = {};

  const [formData, setFormData] = useState({
    council: "",
    position: "",
    name,
  });

  const submitHandler = () => {
    dispatch(editCouncilOfficers(formData, handleCloseCouncil));
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Series Council</Form.Label>
          <Form.Control
            as="select"
            value={formData.year}
            required
            onChange={(e) =>
              setFormData({ ...formData, council: e.target.value })
            }
            className={classnames({ "is-invalid": errors.council })}
          >
            <option value="">--Select Council--</option>
            {councilSet.map((council) => (
              <option key={council._id} value={council._id}>
                {council.name}
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
            <option value="Chairman">Chairman</option>
            <option value="Vice Chairman">Vice Chairman</option>
            <option value="Secretary">Secretary</option>
            <option value="Keeper of the Chest">Keeper of the Chest</option>
            <option value="Auditor">Auditor</option>
            <option value="Budget and Finance">Budget and Finance</option>
            <option value="Membership and Organization">
              Membership and Organization
            </option>
            <option value="Communication and Information">
              Communication and Information
            </option>
            <option value="Special Projects">Special Projects</option>
            <option value="Alumni Affairs">Alumni Affairs</option>
            <option value="Interior">Interior</option>
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

export default SetCouncilOfficer;
