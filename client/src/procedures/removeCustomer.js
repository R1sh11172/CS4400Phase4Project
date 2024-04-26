import React, { useState } from 'react';
import Axios from "axios";

function RemoveCustomerComponent() {
  const [username, setUsername] = useState("");

  const removeCustomer = () => {
    if (username === "") {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/removeCustomer", {
      username: username
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Username: </label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={removeCustomer}>Remove Customer</button>
      </div>
    </div>
  );
}

export default RemoveCustomerComponent;
