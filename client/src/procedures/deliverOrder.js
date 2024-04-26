import React, { useState } from 'react';
import Axios from "axios";

function DeliverOrderComponent() {
  const [orderId, setOrderId] = useState("");

  const deliverOrder = () => {
    if (orderId === "") {
      alert("Procedure failed, please insert valid inputs for the fields");
      return;
    }
    Axios.post("http://localhost:3001/deliverOrder", {
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
        <button onClick={deliverOrder}>Deliver Order</button>
      </div>
    </div>
  );
}

export default DeliverOrderComponent;
