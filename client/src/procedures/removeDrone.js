import React, { useState } from 'react';
import Axios from "axios";

function RemoveDroneComponent() {
  const [storeID, setStoreID] = useState("");
  const [droneTag, setDroneTag] = useState(null);

  const removeDrone = () => {
    if (storeID === "" || droneTag === null) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/removeDrone", {
      storeID: storeID,
      droneTag: droneTag
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Store ID: </label>
        <input
          type="text"
          onChange={(event) => {
            setStoreID(event.target.value);
          }}
        />
        <label>Drone Tag: </label>
        <input
          type="number"
          onChange={(event) => {
            setDroneTag(event.target.value);
          }}
        />
        <button onClick={removeDrone}>Remove Drone</button>
      </div>
    </div>
  );
}

export default RemoveDroneComponent;