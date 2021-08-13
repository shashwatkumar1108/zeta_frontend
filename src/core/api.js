import axios from "axios";

  const endpoint = "https://morning-earth-97573.herokuapp.com";

  export const userAdd = (payload) => {
    axios
      .post(endpoint + "/users/add", payload)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
    export const loanRequestAdd = (payload) => {
      axios
        .post(endpoint + "/loans/request", payload)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    }
  
    export const publicBorrowRequestAdd = (payload) => {
      axios
        .post(endpoint + "/public/borrowrequest/add", payload)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    }
    export const publicBorrowRequestDelete = (payload) => {
      axios
        .delete(endpoint + "/public/borrowrequest/delete", payload)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    }
    export const publicBorrowRequestList = () => {
      axios
        .get(endpoint + "/public/borrowrequest/list")
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    };
