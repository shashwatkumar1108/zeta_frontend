import React, { useState, useEffect } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const LendingRequest = () => {
    const [principal, setPrincipal] = useState(0);
    const [interest, setInterest] = useState(0);
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    useEffect(() => {
        const a = parseFloat(principal) + parseFloat((principal * interest) / 100);
        setAmount(a);
      }, [principal, interest]);

      const handleSubmit = (e) => {
          
      }

  return (
    <Container>
        <h1 className="heading">Apply for Lending</h1>
      <Form>
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

export default LendingRequest;
