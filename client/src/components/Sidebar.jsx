import React, { useState } from "react";

import Login from "../components/Login";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <div className={toggle ? "d-flex toggled" : "d-flex"} id="wrapper">
        {/* <!-- Sidebar --> */}
        <div className="bg-secondary " id="sidebar-wrapper">
          <div className="sidebar-heading">ATDBMS</div>
          <div className="list-group list-group-flush">
            <a
              href="/dashboard"
              className="list-group-item list-group-item-action bg-secondary"
            >
              Dashboard
            </a>
            <a
              href="/management"
              className="list-group-item list-group-item-action bg-secondary"
            >
              Management
            </a>
            <a
              href="/apc"
              className="list-group-item list-group-item-action bg-secondary"
            >
              APC Officers
            </a>
            <a
              href="/reports"
              className="list-group-item list-group-item-action bg-secondary"
            >
              Reports
            </a>
            <a
              href="/settings"
              className="list-group-item list-group-item-action bg-secondary"
            >
              System Settings
            </a>
            <a
              href="/about"
              className="list-group-item list-group-item-action bg-secondary"
            >
              About
            </a>
          </div>
        </div>
        {/* <!-- /#sidebar-wrapper -->

<!-- Page Content --> */}
        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-secondary bg-dark">
            <button
              className="btn btn-secondary"
              id="menu-toggle"
              onClick={toggleHandler}
            >
              <i class="fas fa-bars"></i>
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link light" href="/#">
                    Welcome Brod. Chadric
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* SCREENS */}
          <Login />
          {/* SCREENS */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
