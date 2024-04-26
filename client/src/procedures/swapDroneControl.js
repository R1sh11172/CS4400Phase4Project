import React, { useState } from 'react';
import Axios from "axios";

function SwapDroneControlComponent() {
  const [incomingPilot, setIncomingPilot] = useState("");
  const [outgoingPilot, setOutgoingPilot] = useState("");

  const swapDroneControl = () => {
    if (incomingPilot === "" || outgoingPilot === "") {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/swapDroneControl", {
      incomingPilot: incomingPilot,
      outgoingPilot: outgoingPilot
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Incoming Pilot: </label>
        <input
          type="text"
          onChange={(event) => {
            setIncomingPilot(event.target.value);
          }}
        />
        <label>Outgoing Pilot: </label>
        <input
          type="text"
          onChange={(event) => {
            setOutgoingPilot(event.target.value);
          }}
        />
        <button onClick={swapDroneControl}>Swap Drone Control</button>
      </div>
    </div>
  );
}

export default SwapDroneControlComponent;
