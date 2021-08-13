import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Form,
  Col,
  Row,
  Container,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { publicBorrowRequestAdd } from "../../core/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const GetALoan = () => {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [id, setId] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [requestFrom, setRequestFrom] = useState("");

  useEffect(() => {
    const a = parseFloat(principal) + parseFloat((principal * interest) / 100);
    setAmount(a);
  }, [principal, interest]);

  const handleSubmit = (e) => {
    const presentDate = new Date();
    const duration = Math.floor(
      (new Date(date).getTime() - presentDate.getTime()) / (1000 * 3600 * 24)
    );
    const payload = {
      userId: id,
      amount: principal.toString(10),
      interestRate: interest.toString(10),
      duration: duration.toString(10),
      purpose: purpose,
    };
    publicBorrowRequestAdd(payload)
    .then(res => alert("Successfully submitted"))
    .catch(err => console.log(err));
  };

  let FromField;
  if (isPrivate) {
    FromField = (
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="2">
          Request from
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Enter ID"
            onChange={(e) => setRequestFrom(e.target.value)}
          ></Form.Control>
        </Col>
      </Form.Group>
    );
  } else {
    FromField = <></>;
  }

  return (
    <Container>
      <h1 className="heading">Apply for a Loan</h1>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            User Id
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="User ID"
              onChange={(e) => setId(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Amount
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="Amount"
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Maximum Interest
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              step=".01"
              placeholder="Interest"
              onChange={(e) => setInterest(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Net Payable Amount
          </Form.Label>
          <Col sm="10">
            <p>&#8377; {amount}</p>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Tentative Return Date
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="date"
              placeholder="Date"
              onChange={(e) => setDate(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Type of Request
          </Form.Label>
          <Col sm="10">
            <ButtonGroup aria-label="Toolbar with button groups">
              <Button variant="primary" onClick={() => setIsPrivate(false)}>
                Public
              </Button>
              <Button variant="danger" onClick={() => setIsPrivate(true)}>
                Private
              </Button>
            </ButtonGroup>
          </Col>
        </Form.Group>
        {FromField}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Purpose
          </Form.Label>
          <Col>
            <Form.Control
              rows={3}
              as="textarea"
              placeholder="Enter reason for your application"
              onChange={(e) => setPurpose(e.target.value)}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm="5"></Col>
          <Col>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default GetALoan;
