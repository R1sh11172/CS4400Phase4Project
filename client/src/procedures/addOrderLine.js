import React, { useState } from 'react';
import Axios from "axios";

function AddOrderLineComponent() {
  const [orderId, setOrderId] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const addOrderLine = () => {
    if (orderId === "" || barcode === "" || price === null || quantity === null || price < 0 || quantity < 1) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/addOrderLine", {
      orderId: orderId,
      barcode: barcode,
      price: price,
      quantity: quantity
    }).then(() => {
      console.log("success");
      alert("Procedure called");
    });
  };

  return (
    <div className="App">
      <div className="customerinfo">
        <label>Order ID: </label>
        <input
          type="text"
          onChange={(event) => {
            setOrderId(event.target.value);
          }}
        />
        <label>Barcode: </label>
        <input
          type="text"
          onChange={(event) => {
            setBarcode(event.target.value);
          }}
        />
        <label>Price: </label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <label>Quantity: </label>
        <input
          type="number"
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
        />
        <button onClick={addOrderLine}>Add Order Line</button>
      </div>
    </div>
  );
}

export default AddOrderLineComponent;
