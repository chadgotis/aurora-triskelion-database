import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const loggedIn = true;
  return (
    <header className="mb-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/dashboard">
            <Navbar.Brand>Aurora Triskelion Database</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {loggedIn ? (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="#">
                  <Nav.Link>
                    <i className="fas fa-tasks"></i> Management
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="#">
                  <Nav.Link>
                    <i className="fas fa-flag"></i> Reports
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="#">
                  <Nav.Link>
                    <i className="fas fa-cogs"></i> System Settings
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="#">
                  <Nav.Link>
                    <i className="fas fa-info-circle"></i> About
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="#">
                  <Nav.Link href="#">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#">Please Log-in First</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
