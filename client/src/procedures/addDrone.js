import React, { useState } from 'react';
import Axios from "axios";

function AddDroneComponent() {
  const [storeID, setStoreID] = useState("");
  const [droneTag, setDroneTag] = useState(null);
  const [capacity, setCapacity] = useState(null);
  const [trips, setTrips] = useState(null);
  const [pilot, setPilot] = useState("");

  const addDrone = () => {
    if (storeID === "" || droneTag === null || capacity === null || trips === null || pilot === "" || capacity < 0 || trips < 0 || droneTag < 0) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

    Axios.post("http://localhost:3001/addDrone", {
      storeID: storeID,
      droneTag: droneTag,
      capacity: capacity,
      trips: trips,
      pilot: pilot
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
        <label>Capacity: </label>
        <input
          type="number"
          onChange={(event) => {
            setCapacity(event.target.value);
          }}
        />
        <label>Trips: </label>
        <input
          type="number"
          onChange={(event) => {
            setTrips(event.target.value);
          }}
        />
        <label>Pilot: </label>
        <input
          type="text"
          onChange={(event) => {
            setPilot(event.target.value);
          }}
        />
        <button onClick={addDrone}>Add Drone</button>
      </div>
    </div>
  );
}

export default AddDroneComponent;