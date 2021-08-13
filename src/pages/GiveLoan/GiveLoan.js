import React, { useEffect, useState } from "react";
import {
  publicBorrowRequestDelete,
  publicBorrowRequestList,
} from "../../core/api";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getElementError } from "@testing-library/react";

const GiveLoan = () => {
  
    const [list, setList] = useState([]);
  useEffect(() => {
    publicBorrowRequestList()
      .then((res) => {
        setList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const handleClick = (userId, borrowRequestId) => {
      const payload = {
          "userId": userId,
          "borrowRequestId": borrowRequestId
      }
      publicBorrowRequestDelete(payload)
      .then(res => {
          alert('Loan Given');
          publicBorrowRequestList()
          .then((res) => {
              setList(res.data.result);
          })
        })
      .catch(err => console.log(err))
  }

  const renderLoans = () => {
    return list.map((item, index) => {
        console.log(item);
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.phoneNo}</td>
          <td>{item.amount}</td>
          <td>{item.interestRate}</td>
          <td>{item.duration}</td>
          <td>
            <Button variant="danger" onClick={() => handleClick(item.email, item.borrowRequestId)}>Pay</Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone No.</th>
          <th>Amount</th>
          <th>Interest</th>
          <th>Duration (Days)</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{renderLoans()}</tbody>
    </Table>
  );
};

export default GiveLoan;
