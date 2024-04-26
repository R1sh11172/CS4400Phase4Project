import React, { useState } from 'react';
import Axios from "axios";

function AddDronePilotComponent() {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [taxID, setTaxID] = useState("");
  const [service, setService] = useState("");
  const [salary, setSalary] = useState(0);
  const [licenseID, setLicenseID] = useState("");
  const [experience, setExperience] = useState("");

  const addDronePilot = () => {
    Axios.post("http://localhost:3001/addDronePilot", {
      username: username,
      first_name: first_name,
      last_name: last_name,
      address: address,
      birthdate: birthdate,
      taxID: taxID,
      service: service,
      salary: salary,
      licenseID: licenseID,
      experience: experience
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>username: </label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>first_name: </label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label>last_name: </label>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label>address: </label>
        <input
          type="text"
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <label>birthdate: </label>
        <input
          type="date"
          onChange={(event) => {
            setBirthdate(event.target.value);
          }}
        />
        <label>taxID: </label>
        <input
          type="text"
          onChange={(event) => {
            setTaxID(event.target.value);
          }}
        />
        <label>service: </label>
        <input
          type="text"
          onChange={(event) => {
            setService(event.target.value);
          }}
        />
        <label>salary: </label>
        <input
        type="number"
        onChange={(event) => {
            setSalary(event.target.value);
        }}
        />

        <label>licenseID: </label>
        <input
        type="number"
        onChange={(event) => {
            setLicenseID(event.target.value);
        }}
        />

        <label>experience: </label>
        <input
        type="number"
        onChange={(event) => {
            setExperience(event.target.value);
        }}
        />
        <button onClick={addDronePilot}>Add Drone Pilot</button>
      </div>
    </div>
  );
}

export default AddDronePilotComponent;