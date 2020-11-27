import React, { useEffect, useState } from "react";
import { Col, Card, Table, Button, Modal, Spinner } from "react-bootstrap";
import { getUserAccounts } from "../actions/accountActions";
import { useDispatch, useSelector } from "react-redux";
import CreateAccount from "./CreateAccount";
import { deleteUserAccount } from "../actions/accountActions";

const AccountList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAccounts());
  }, [dispatch]);

  const delUser = (id) => {
    dispatch(deleteUserAccount(id));
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateAccount handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Col className="mb-3">
        <Card>
          <Card.Header className="bg-dark">
            <Button
              variant="success"
              className="float-left "
              onClick={handleShow}
            >
              <i className="fas fa-plus mr-1"></i>
              Create Account
            </Button>
            <span className="align-middle float-right mt-2">
              Active Accounts
            </span>
          </Card.Header>
          <Card.Body className="bg-secondary text-center">
            {accounts.loading ? (
              <Col>
                <Spinner
                  animation="border"
                  style={{ margin: "auto", display: "block" }}
                  className="my-3"
                />
              </Col>
            ) : (
              <Table striped bordered hover responsive variant="dark">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>username</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.accountList.map((account, index) => (
                    <tr key={index}>
                      <th>{account.type}</th>
                      <th>{account.lastName}</th>
                      <th>{account.firstName}</th>
                      <th>{account.username}</th>
                      <th>
                        <Button
                          variant="danger"
                          onClick={() => delUser(account._id)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AccountList;
