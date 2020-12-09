import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/authActions";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.user.role);

  const admin = (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/management">
          <Nav.Link>
            <i className="fas fa-tasks"></i> Management
          </Nav.Link>
        </LinkContainer>
        {/* <LinkContainer to="/reports">
          <Nav.Link>
            <i className="fas fa-flag"></i> Reports
          </Nav.Link>
        </LinkContainer> */}
        <LinkContainer to="/accounts">
          <Nav.Link>
            <i className="fas fa-flag"></i> Accounts
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/settings">
          <Nav.Link>
            <i className="fas fa-cogs"></i> System Settings
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/logs">
          <Nav.Link>
            <i className="fas fa-cogs"></i> Logs
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>
            <i className="fas fa-info-circle"></i> About
          </Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => dispatch(logoutUser())}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  const user = (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <LinkContainer to="/management">
          <Nav.Link>
            <i className="fas fa-tasks"></i> Management
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>
            <i className="fas fa-info-circle"></i> About
          </Nav.Link>
        </LinkContainer>
        <Nav.Link onClick={() => dispatch(logoutUser())}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <header className="mb-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/dashboard">
            <Navbar.Brand>Aurora Triskelion Database</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {isAuthenticated ? (userRole === "user" ? user : admin) : ""}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
