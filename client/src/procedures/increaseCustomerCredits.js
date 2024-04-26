import React, { useState } from 'react';
import Axios from "axios";

function IncreaseCustomerCreditsComponent() {
  const [username, setUsername] = useState("");
  const [money, setMoney] = useState(0);

  const increaseCustomerCredits = () => {
    Axios.post("http://localhost:3001/increaseCustomerCredits", {
      username: username,
      money: money
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
