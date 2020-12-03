import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { getSingleCouncil } from "../actions/councilActions";
import { updateMember } from "../actions/memberActions";
import Swal from "sweetalert2";
import SetOfficer from "./SetOfficer";
import ViewMemberButtons from "./ViewMemberButtons";

const ViewMember = ({ handleClose, values }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleCloseSet = () => setShow(false);
  const handleShowSet = () => setShow(true);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const {
    firstName,
    middleName,
    lastName,
    sex,
    birthDate,
    homeAddress,
    triskelionBirth,
    triskelionSponsor,
    municipalCouncil,
    rootChapter,
    grandTriskelion,
    masterInitiator,
    batchName,
    alias,
    chapter,
    t_id,
  } = values;
  const errors = useSelector((state) => state.errors);
  const isUser = useSelector((state) => state.auth.user.role);
  const councilList = useSelector((state) => state.councilList);
  const [edit, setEdit] = useState(false);

  const [member, setMember] = useState({
    firstName,
    middleName,
    lastName,
    sex,
    birthDate,
    homeAddress,
    triskelionBirth,
    triskelionSponsor,
    municipalCouncil,
    rootChapter,
    grandTriskelion,
    masterInitiator,
    batchName,
    alias,
    chapter,
    t_id,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedValues = {
      firstName: member.firstName,
      middleName: member.middleName,
      lastName: member.lastName,
      sex: member.sex,
      birthDate: member.birthDate,
      homeAddress: member.homeAddress,
      triskelionBirth: member.triskelionBirth,
      triskelionSponsor: member.triskelionSponsor,
      municipalCouncil: member.municipalCouncil,
      rootChapter: member.rootChapter,
      grandTriskelion: member.grandTriskelion,
      masterInitiator: member.masterInitiator,
      batchName: member.batchName,
      alias: member.alias,
    };

    dispatch(updateMember(updatedValues, values._id, handleClose));
  };

  const editSwal = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Editing member needs bla bla bla",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Edit Member",
    });
    if (result.isConfirmed) {
      setEdit(true);
    }
  };

  const initial = capitalizeFirstLetter(member.middleName);

  const fullName = `${capitalizeFirstLetter(member.firstName)} ${initial.charAt(
    0
  )}. ${capitalizeFirstLetter(member.lastName)}`;

  useEffect(() => {
    dispatch(getSingleCouncil(values.municipalCouncil._id));
  }, [dispatch, values.municipalCouncil._id]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseSet}
        centered
        backdrop="static"
        keyboard={false}
        className="light"
      >
        <Modal.Header closeButton>
          <Modal.Title>Set as APC Officer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SetOfficer handleCloseSet={handleCloseSet} name={fullName} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSet}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Form>
        <Row>
          <Col lg={9}>
            <h3>Personal Information</h3>
          </Col>
          {isUser === "user" ? null : (
            <Col>
              <ViewMemberButtons
                editSwal={editSwal}
                handleShowSet={handleShowSet}
              />
            </Col>
          )}
        </Row>
        <Form.Group>Triskelion ID: {member.t_id}</Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={member.firstName}
            onChange={(e) =>
              setMember({ ...member, firstName: e.target.value })
            }
            readOnly={edit ? false : true}
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
            value={member.middleName}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, middleName: e.target.value })
            }
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
            value={member.lastName}
            readOnly={edit ? false : true}
            onChange={(e) => setMember({ ...member, lastName: e.target.value })}
            className={classnames({ "is-invalid": errors.lastName })}
          />
          {errors.lastName && (
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Home Address"
            value={member.homeAddress}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, homeAddress: e.target.value })
            }
            className={classnames({ "is-invalid": errors.homeAddress })}
          />
          {errors.homeAddress && (
            <Form.Control.Feedback type="invalid">
              {errors.homeAddress}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Sex</Form.Label>
          <Form.Control
            as="select"
            value={member.sex}
            readOnly={edit ? false : true}
            onChange={(e) => setMember({ ...member, sex: e.target.value })}
            className={classnames({ "is-invalid": errors.sex })}
          >
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
          {errors.sex && (
            <Form.Control.Feedback type="invalid">
              {errors.sex}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={member.birthDate}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, birthDate: e.target.value })
            }
            className={classnames({ "is-invalid": errors.birthDate })}
          />
          {errors.birthDate && (
            <Form.Control.Feedback type="invalid">
              {errors.birthDate}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <h3>Fraternal Info</h3>
        <Form.Group>
          <Form.Label>Triskelion Sponsor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Triskelion Sponsor"
            value={member.triskelionSponsor}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, triskelionSponsor: e.target.value })
            }
            className={classnames({ "is-invalid": errors.triskelionSponsor })}
          />
          {errors.triskelionSponsor && (
            <Form.Control.Feedback type="invalid">
              {errors.triskelionSponsor}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group controlId="tb">
          <Form.Label>Triskelion Birth</Form.Label>
          <Form.Control
            type="date"
            name="tb"
            placeholder="Triskelion Birth"
            value={member.triskelionBirth}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, triskelionBirth: e.target.value })
            }
            className={classnames({ "is-invalid": errors.triskelionBirth })}
          />
          {errors.triskelionBirth && (
            <Form.Control.Feedback type="invalid">
              {errors.triskelionBirth}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Municipal Council</Form.Label>
          <Form.Control
            as="select"
            value={member.municipalCouncil}
            disabled={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, municipalCouncil: e.target.value })
            }
            className={classnames({ "is-invalid": errors.municipalCouncil })}
          >
            <option value="">{values.municipalCouncil.name}</option>
            {councilList.councils.map((council) => (
              <option key={council._id} value={council._id}>
                {council.name}
              </option>
            ))}
          </Form.Control>
          {errors.municipalCouncil && (
            <Form.Control.Feedback type="invalid">
              {errors.municipalCouncil}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Chapter</Form.Label>
          <Form.Control
            as="select"
            value={member.chapter}
            disabled={edit ? false : true}
            onChange={(e) => setMember({ ...member, chapter: e.target.value })}
            className={classnames({ "is-invalid": errors.rootChapter })}
          >
            <option value={values.municipalCouncil.chapters[0].name}>
              {values.municipalCouncil.chapters[0].name}
            </option>
            {councilList.councils
              .filter((council) => {
                return council._id === member.municipalCouncil;
              })
              .map((council) => {
                return council.chapters.map((chap) => (
                  <option key={chap._id} value={chap.name}>
                    {chap.name}
                  </option>
                ));
              })}
          </Form.Control>
          {errors.chapter && (
            <Form.Control.Feedback type="invalid">
              {errors.chapter}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Root Chapter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Root Chapter"
            value={member.rootChapter}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, rootChapter: e.target.value })
            }
            className={classnames({ "is-invalid": errors.rootChapter })}
          />
          {errors.rootChapter && (
            <Form.Control.Feedback type="invalid">
              {errors.rootChapter}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Batch Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Batch Name"
            value={member.batchName}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, batchName: e.target.value })
            }
            className={classnames({ "is-invalid": errors.batchName })}
          />
          {errors.batchName && (
            <Form.Control.Feedback type="invalid">
              {errors.batchName}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Alias</Form.Label>
          <Form.Control
            type="text"
            placeholder="Alias"
            value={member.alias}
            readOnly={edit ? false : true}
            onChange={(e) => setMember({ ...member, alias: e.target.value })}
            className={classnames({ "is-invalid": errors.alias })}
          />
          {errors.alias && (
            <Form.Control.Feedback type="invalid">
              {errors.alias}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Grand Triskelion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Grand Triskelion"
            value={member.grandTriskelion}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, grandTriskelion: e.target.value })
            }
            className={classnames({ "is-invalid": errors.grandTriskelion })}
          />
          {errors.grandTriskelion && (
            <Form.Control.Feedback type="invalid">
              {errors.grandTriskelion}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Master Initiator</Form.Label>
          <Form.Control
            type="text"
            placeholder="Master Initiator"
            value={member.masterInitiator}
            readOnly={edit ? false : true}
            onChange={(e) =>
              setMember({ ...member, masterInitiator: e.target.value })
            }
            className={classnames({ "is-invalid": errors.masterInitiator })}
          />
          {errors.masterInitiator && (
            <Form.Control.Feedback type="invalid">
              {errors.masterInitiator}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        {edit && (
          <Form.Group>
            <Button
              type="submit"
              variant="warning"
              block
              onClick={submitHandler}
            >
              Update Member
            </Button>
          </Form.Group>
        )}
      </Form>
    </>
  );
};

export default ViewMember;
