import axios from "axios";
import React from 'react';

  const endpoint = "https://morning-earth-97573.herokuapp.com";

  export const userAdd = async (payload) => {
    try {
        const res = await axios.post(endpoint + "/users/add", payload);
        return res;
    } catch (err) {
        return err;
    }
  }
    export const loanRequestAdd = async (payload) => {
        try {
            const res = await axios.post(endpoint + "/loans/request", payload);
            return res;
        } catch (err) {
            return err;
        }
    }
  
    export const publicBorrowRequestAdd = async (payload) => {
        try {
            const res = await axios.post(endpoint + "/public/borrowrequest/add", payload);
            return res;
        } catch (err) {
            return err;
        }
    }
    export const publicBorrowRequestDelete = async (payload) => {
        try {
            const res = await axios.post(endpoint + "/public/borrowrequest/delete", payload);
            return res;
        } catch (err) {
            return err;
        }
    }
    export const publicBorrowRequestList = async () => {
        try {
            const res = await axios.get(endpoint + "/public/borrowrequest/list");
            return res;
        } catch (err) {
            return err;
        }
    };
