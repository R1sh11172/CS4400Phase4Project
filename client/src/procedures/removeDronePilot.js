import React, { useState } from 'react';
import Axios from "axios";

function RemoveDronePilotComponent() {
  const [username, setUsername] = useState("");

  const removeDronePilot = () => {
    if (username === "") {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/removeDronePilot", {
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
        <button onClick={removeDronePilot}>Remove Drone Pilot</button>
      </div>
    </div>
  );
}

export default RemoveDronePilotComponent;
