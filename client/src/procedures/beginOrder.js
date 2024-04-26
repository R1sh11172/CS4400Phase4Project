import React, { useState } from 'react';
import Axios from "axios";

function BeginOrderComponent() {
  const [orderId, setOrderId] = useState("");
  const [soldOn, setSoldOn] = useState("");
  const [purchasedBy, setPurchasedBy] = useState("");
  const [carrierStore, setCarrierStore] = useState("");
  const [carrierTag, setCarrierTag] = useState("");
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const beginOrder = () => {
    Axios.post("http://localhost:3001/beginOrder", {
      orderId: orderId,
      soldOn: soldOn,
      purchasedBy: purchasedBy,
      carrierStore: carrierStore,
      carrierTag: carrierTag,
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
        <label>Sold On: </label>
        <input
          type="date"
          onChange={(event) => {
            setSoldOn(event.target.value);
          }}
        />
        <label>Purchased By: </label>
        <input
          type="text"
          onChange={(event) => {
            setPurchasedBy(event.target.value);
          }}
        />
        <label>Carrier Store: </label>
        <input
          type="text"
          onChange={(event) => {
            setCarrierStore(event.target.value);
          }}
        />
        <label>Carrier Tag: </label>
        <input
          type="text"
          onChange={(event) => {
            setCarrierTag(event.target.value);
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
        <button onClick={beginOrder}>Begin Order</button>
      </div>
    </div>
  );
}

export default BeginOrderComponent;