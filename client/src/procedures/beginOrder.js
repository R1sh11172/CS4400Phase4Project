import React, { useState } from 'react';
import Axios from "axios";

function BeginOrderComponent() {
  const [orderId, setOrderId] = useState("");
  const [soldOn, setSoldOn] = useState(null);
  const [purchasedBy, setPurchasedBy] = useState("");
  const [carrierStore, setCarrierStore] = useState("");
  const [carrierTag, setCarrierTag] = useState(null);
  const [barcode, setBarcode] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const beginOrder = () => {
    if (orderId === "" || soldOn === null || purchasedBy === "" || carrierStore === "" || carrierTag === null || barcode === "" || price === null || quantity === null || price < 0 || quantity < 1) {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }

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
          type="number"
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