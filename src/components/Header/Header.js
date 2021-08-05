import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Header = () => {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <span className="title">LEND IT OUT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
