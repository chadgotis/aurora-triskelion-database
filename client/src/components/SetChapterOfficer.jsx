import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editChapterOfficer } from "../actions/councilActions";
import classnames from "classnames";

const SetChapterOfficer = ({ name, handleCloseChap }) => {
  const dispatch = useDispatch();

  const councilSet = useSelector((state) => state.councilList.councils);

  const councilList = useSelector((state) => state.councilList);
  const errors = {};

  const [formData, setFormData] = useState({
    council: "",
    position: "",
    chapter: "",
    name,
  });

  const submitHandler = () => {
    dispatch(editChapterOfficer(formData, handleCloseChap));
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Council</Form.Label>
          <Form.Control
            as="select"
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
        </Form.Group>
        <Form.Group>
          <Form.Label>Chapter</Form.Label>
          <Form.Control
            as="select"
            required
            onChange={(e) =>
              setFormData({ ...formData, chapter: e.target.value })
            }
            className={classnames({ "is-invalid": errors.council })}
          >
            <option value="">--Select Council--</option>
            {councilList.councils
              .filter((council) => {
                return council._id === formData.council;
              })
              .map((council) => {
                return council.chapters.map((chap) => (
                  <option key={chap._id} value={chap._id}>
                    {chap.name}
                  </option>
                ));
              })}
          </Form.Control>
          {errors.council && (
            <Form.Control.Feedback type="invalid">
              {errors.council}
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
            <option value="Grand Triskelion">Grand Triskelion</option>
            <option value="Deputy Grand Triskelion">
              Deputy Grand Triskelion
            </option>
            <option value="Master Wielder of the Whip">
              Master Wielder of the Whip
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

export default SetChapterOfficer;
