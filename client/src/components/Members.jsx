import React, { useState, useEffect } from "react";
import { Col, Button, Spinner } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import AddMember from "./AddMember";
import MemberButtons from "../components/MemberButtons";
import { listMembers } from "../actions/memberActions";

import { useDispatch, useSelector } from "react-redux";

const { SearchBar } = Search;

const Members = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const memberList = useSelector((state) => state.memberList);
  const isUser = useSelector((state) => state.auth.user.role);

  const { loading, error, members } = memberList;

  useEffect(() => {
    dispatch(listMembers());
  }, [dispatch]);

  const columns = [
    {
      dataField: "t_id",
      text: "T-ID",
    },
    {
      dataField: "firstName",
      text: "First",
    },
    {
      dataField: "middleName",
      text: "Middle",
    },
    {
      dataField: "lastName",
      text: "Last",
    },
    {
      dataField: "sex",
      text: "Sex",
      sort: true,
    },
    {
      dataField: "rootChapter",
      text: "Root",
    },
    {
      dataField: "municipalCouncil.name",
      text: "Council",
      sort: true,
    },
    {
      dataField: "batchName",
      text: "Batch",
      sort: true,
    },
    {
      dataField: "alias",
      text: "Alias",
    },
    {
      dataField: "actions",
      text: "Actions",
      isDummyField: true,
      formatter: (cell, row) => <MemberButtons values={row} id={row._id} />,
    },
  ];

  return (
    <>
      {loading ? (
        <Col>
          <Spinner
            animation="border"
            style={{ margin: "auto", display: "block" }}
            className="my-3"
          />
        </Col>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <div>
          {isUser === "user" ? null : (
            <AddMember show={show} handleClose={handleClose} />
          )}
          <Col className="mb-3">
            <ToolkitProvider
              bootstrap4
              keyField="_id"
              data={members}
              columns={columns}
              search
            >
              {(props) => (
                <div>
                  <div className="float-left">
                    <Button onClick={handleShow} className="bg-success">
                      New Member
                    </Button>
                  </div>
                  <div className="float-right">
                    <SearchBar
                      {...props.searchProps}
                      placeholder="Search ..."
                    />
                  </div>
                  <BootstrapTable
                    striped
                    hover
                    pagination={paginationFactory()}
                    bordered={false}
                    wrapperClasses="table-responsive"
                    {...props.baseProps}
                  />
                </div>
              )}
            </ToolkitProvider>
          </Col>
        </div>
      )}
    </>
  );
};

export default Members;
