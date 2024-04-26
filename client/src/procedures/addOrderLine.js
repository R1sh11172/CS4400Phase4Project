import React, { useState } from 'react';
import Axios from "axios";

function AddOrderLineComponent() {
  const [orderId, setOrderId] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addOrderLine = () => {
    Axios.post("http://localhost:3001/addOrderLine", {
      orderId: orderId,
      barcode: barcode,
      price: price,
      quantity: quantity
    }).then(() => {
      console.log("success");
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
