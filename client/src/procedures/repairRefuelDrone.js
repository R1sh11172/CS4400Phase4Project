import React, { useState } from 'react';
import Axios from "axios";

function RepairRefuelDroneComponent() {
  const [droneStore, setDroneStore] = useState("");
  const [droneTag, setDroneTag] = useState("");
  const [refueledTrips, setRefueledTrips] = useState(0);

  const repairRefuelDrone = () => {
    Axios.post("http://localhost:3001/repairRefuelDrone", {
      droneStore: droneStore,
      droneTag: droneTag,
      refueledTrips: refueledTrips
    }).then(() => {
      console.log("success");
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
          type="text"
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
