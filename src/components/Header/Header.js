import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Header = () => {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/home">
            <img
              alt=""
              src="logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <span className="title">LEND IT OUT</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/lendingRequest"
              style={{ color: "white", marginRight: 15 }}
            >
              Lending Request
            </Link>
            <Link to="/loanRequest" style={{ color: "white", marginRight: 15 }}>
              Loan Request
            </Link>
            <Link to="/giveLoan" style={{ color: "white" }}>
              Give Loan
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
