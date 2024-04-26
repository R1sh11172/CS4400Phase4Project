import React, { useState } from 'react';
import Axios from "axios";

function RemoveCustomerComponent() {
  const [username, setUsername] = useState("");

  const removeCustomer = () => {
    Axios.post("http://localhost:3001/removeCustomer", {
      username: username
    }).then(() => {
      console.log("success");
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
