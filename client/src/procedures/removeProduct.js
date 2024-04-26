import React, { useState } from 'react';
import Axios from "axios";

function RemoveProductComponent() {
  const [barcode, setBarcode] = useState(null);

  const removeProduct = () => {
    if (barcode === null) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/removeProduct", {
      barcode: barcode
    }).then(() => {
      console.log("success");
      alert("Procedure called");
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
