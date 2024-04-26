import React, { useState } from 'react';
import Axios from "axios";

function CancelOrderComponent() {
  const [orderId, setOrderId] = useState("");

  const cancelOrder = () => {
    if (orderId === "") {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/cancelOrder", {
      orderId: orderId
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
        <button onClick={cancelOrder}>Cancel Order</button>
      </div>
    </div>
  );
}

export default CancelOrderComponent;
