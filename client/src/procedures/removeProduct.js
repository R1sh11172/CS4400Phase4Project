import React, { useState } from 'react';
import Axios from "axios";

function RemoveProductComponent() {
  const [barcode, setBarcode] = useState("");

  const removeProduct = () => {
    Axios.post("http://localhost:3001/removeProduct", {
      barcode: barcode
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
        <button onClick={removeProduct}>Remove Product</button>
      </div>
    </div>
  );
}

export default RemoveProductComponent;
