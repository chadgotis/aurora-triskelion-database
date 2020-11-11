import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import AddMember from "./AddMember";
import axios from "axios";

const { SearchBar } = Search;

const Members = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/todos");
      setUsers(result.data);
    };

    fetchData();
  }, []);

  const columns = [
    {
      dataField: "userId",
      text: "ID",
    },
    {
      dataField: "title",
      text: "title",
    },
    {
      dataField: "completed",
      text: "status",
    },
    {
      dataField: "actions",
      text: "Actions",
      isDummyField: true,
      formatter: (cell, row) => <p>add</p>,
    },
  ];

  return (
    <>
      <AddMember show={show} handleClose={handleClose} />
      <Col className="mb-3">
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={users}
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
                <SearchBar {...props.searchProps} placeholder="Search ..." />
              </div>
              <BootstrapTable
                striped
                hover
                pagination={paginationFactory()}
                {...props.baseProps}
              />
            </div>
          )}
        </ToolkitProvider>
      </Col>
    </>
  );
};

export default Members;
