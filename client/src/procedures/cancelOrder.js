import React, { useState } from 'react';
import Axios from "axios";

function CancelOrderComponent() {
  const [orderId, setOrderId] = useState("");

  const cancelOrder = () => {
    Axios.post("http://localhost:3001/cancelOrder", {
      orderId: orderId
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
        <button onClick={cancelOrder}>Cancel Order</button>
      </div>
    </div>
  );
}

export default CancelOrderComponent;
