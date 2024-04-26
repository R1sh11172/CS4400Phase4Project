import React, { useState } from 'react';
import Axios from "axios";

function AddProductComponent() {
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);

  const addProduct = () => {
    Axios.post("http://localhost:3001/addProduct", {
      barcode: barcode,
      name: name,
      weight: weight
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Barcode: </label>
        <input
          type="text"
          onChange={(event) => {
            setBarcode(event.target.value);
          }}
        />
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Weight: </label>
        <input
          type="number"
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}

export default AddProductComponent;