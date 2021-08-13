import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import {userAdd} from '../../core/api';
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    let form = new FormData();
    form.append("firstName", firstName);
    form.append("email", email);
    form.append("phoneNo", phone);
    form.append("password", password);
    form.append("address", address);
    form.append("city", city);
    form.append("pincode", pincode);
    form.append("lastName", lastName);
    console.log(userAdd(form));
  };

  return (
    <Container>
      <h1 className="heading">Sign Up</h1>
      <Form>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="1">
            First Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Form.Label column sm="1">
            Last Name
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="1">
            Email ID
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Form.Label column sm="1">
            Password
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="1">
            Address
          </Form.Label>
          <Col>
            <Form.Control
              rows={3}
              as="textarea"
              placeholder="Enter your address"
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="1">
            City
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Form.Label column sm="1">
            Pincode
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="Pincode"
              onChange={(e) => setPincode(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm="1">
            Phone Number
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm="5"></Col>
          <Col>
            <Button variant="primary" onClick={handleSubmit}>
              Sign Up
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Signup;
