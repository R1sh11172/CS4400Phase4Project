import React, { useState } from 'react';
import Axios from "axios";

function IncreaseCustomerCreditsComponent() {
  const [username, setUsername] = useState("");
  const [money, setMoney] = useState(null);

  const increaseCustomerCredits = () => {
    if (username === "" || money === null || money < 0) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/increaseCustomerCredits", {
      username: username,
      money: money
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
        <label>Money: </label>
        <input
          type="number"
          onChange={(event) => {
            setMoney(event.target.value);
          }}
        />
        <button onClick={increaseCustomerCredits}>Increase Customer Credits</button>
      </div>
    </div>
  );
}

export default IncreaseCustomerCreditsComponent;
