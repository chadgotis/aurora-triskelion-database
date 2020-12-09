import React, { useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { getEvents } from "../actions/eventActions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spinner } from "react-bootstrap";
const { SearchBar } = Search;

const Logs = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const columns = [
    {
      dataField: "user",
      text: "User",

      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "activity",
      text: "Activity",
    },
    {
      dataField: "createdAt",
      text: "Date",
      headerStyle: () => {
        return { width: "25%" };
      },
    },
  ];

  return (
    <>
      {events.loading ? (
        <Col>
          <Spinner
            animation="border"
            style={{ margin: "auto", display: "block" }}
            className="my-3"
          />
        </Col>
      ) : (
        <div>
          <Col className="mb-3">
            <ToolkitProvider
              bootstrap4
              keyField="_id"
              data={events.eventList}
              columns={columns}
              search
            >
              {(props) => (
                <div>
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

export default Logs;
