import React, { useState } from 'react';
import Axios from "axios";

function RepairRefuelDroneComponent() {
  const [droneStore, setDroneStore] = useState("");
  const [droneTag, setDroneTag] = useState(null);
  const [refueledTrips, setRefueledTrips] = useState(null);

  const repairRefuelDrone = () => {
    if (droneStore === "" || droneTag === null || refueledTrips === null || refueledTrips < 0) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/repairRefuelDrone", {
      droneStore: droneStore,
      droneTag: droneTag,
      refueledTrips: refueledTrips
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Drone Store: </label>
        <input
          type="text"
          onChange={(event) => {
            setDroneStore(event.target.value);
          }}
        />
        <label>Drone Tag: </label>
        <input
          type="number"
          onChange={(event) => {
            setDroneTag(event.target.value);
          }}
        />
        <label>Refueled Trips: </label>
        <input
          type="number"
          onChange={(event) => {
            setRefueledTrips(event.target.value);
          }}
        />
        <button onClick={repairRefuelDrone}>Repair and Refuel Drone</button>
      </div>
    </div>
  );
}

export default RepairRefuelDroneComponent;
