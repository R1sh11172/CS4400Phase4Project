import React, { useState } from 'react';
import Axios from "axios";

function AddCustomerComponent() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [rating, setRating] = useState(null);
  const [credit, setCredit] = useState(null);

  const addCustomer = () => {
    if (username === "" || first_name === "" || last_name === "" || address === "" || rating === null || credit === null || rating < 1 || rating > 5 || credit < 0) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/addCustomer", {
      username: username,
      first_name: first_name,
      last_name: last_name,
      address: address,
      birthdate: birthdate,
      rating: rating,
      credit: credit
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>username: </label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>first_name: </label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label>last_name: </label>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label>address: </label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <label>birthdate: </label>
        <input
          type="date"
          onChange={(event) => {
            setBirthdate(event.target.value);
          }}
        />
        <label>rating: </label>
        <input
          type="number"
          onChange={(event) => {
            setRating(event.target.value);
          }}
        />
        <label>credit: </label>
        <input
          type="number"
          onChange={(event) => {
            setCredit(event.target.value);
          }}
        />
        <button onClick={addCustomer}>Add Customer</button>
      </div>
    </div>
  );
}

export default AddCustomerComponent;
