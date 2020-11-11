import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import classnames from "classnames";

const MemberForm = () => {
  const [member, setMember] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "",
    birthDate: "",
    homeAddress: "",
    triskelionBirth: "",
    triskelionSponsor: "",
    municipalCouncil: "",
    rootChapter: "",
    grandTriskelion: "",
    masterInitiator: "",
    batchName: "",
    alias: "",
    errors: {},
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const newMember = {
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

    axios
      .post("/api/members/add", newMember)
      .then((res) => console.log(res.data))
      .catch((err) => setMember({ ...member, errors: err.response.data }));
  };

  const errors = member.errors;
  return (
    <>
      <Form>
        <h3>Personal Information</h3>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={member.firstName}
            onChange={(e) =>
              setMember({ ...member, firstName: e.target.value })
            }
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
            onChange={(e) =>
              setMember({ ...member, municipalCouncil: e.target.value })
            }
            className={classnames({ "is-invalid": errors.municipalCouncil })}
          >
            <option value="">--Select--</option>
            <option value="Maria Aurora">Maria Aurora</option>
            <option value="San Luis">San Luis</option>
            <option value="Baler">Baler</option>
          </Form.Control>
          {errors.municipalCouncil && (
            <Form.Control.Feedback type="invalid">
              {errors.municipalCouncil}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Root Chapter</Form.Label>
          <Form.Control
            as="select"
            value={member.rootChapter}
            onChange={(e) =>
              setMember({ ...member, rootChapter: e.target.value })
            }
            className={classnames({ "is-invalid": errors.rootChapter })}
          >
            <option value="">--Select--</option>
            <option value="Wesleyan">Wesleyan</option>
            <option value="Ramada">Ramada</option>
            <option value="Maria Aurora">Maria Aurora</option>
            <option value="Poblacion">Poblacion</option>
          </Form.Control>
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
        <Form.Group>
          <Button type="submit" block onClick={submitHandler}>
            Add Member
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default MemberForm;
