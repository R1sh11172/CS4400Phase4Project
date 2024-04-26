import React, { useState } from 'react';
import Axios from "axios";

function RemoveDronePilotComponent() {
  const [username, setUsername] = useState("");

  const removeDronePilot = () => {
    Axios.post("http://localhost:3001/removeDronePilot", {
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
        <button onClick={removeDronePilot}>Remove Drone Pilot</button>
      </div>
    </div>
  );
}

export default RemoveDronePilotComponent;
