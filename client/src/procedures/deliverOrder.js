import React, { useState } from 'react';
import Axios from "axios";

function DeliverOrderComponent() {
  const [orderId, setOrderId] = useState("");

  const deliverOrder = () => {
    Axios.post("http://localhost:3001/deliverOrder", {
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
        <button onClick={deliverOrder}>Deliver Order</button>
      </div>
    </div>
  );
}

export default DeliverOrderComponent;
