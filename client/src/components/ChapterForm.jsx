import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import classnames from "classnames";
import { createChapter } from "../actions/councilActions";
import { useDispatch, useSelector } from "react-redux";

const ChapterForm = ({ c_id, handleClose }) => {
  const [chapter, setChapter] = useState("");
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  const submitHandler = () => {
    const newChap = {
      name: chapter,
      c_id,
    };
    dispatch(createChapter(newChap, handleClose));
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Chapter Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Chapter Name"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            className={classnames({ "is-invalid": errors.chapter })}
          />
          {errors.chapter && (
            <Form.Control.Feedback type="invalid">
              {errors.chapter}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button onClick={() => submitHandler()} block>
          Create Chapter
        </Button>
      </Form>
    </>
  );
};

export default ChapterForm;
