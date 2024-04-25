import './App.css';
import { useState } from 'react';
import Axios from "axios";


function Views() {
  
    const[roleList, setRoleList] = useState([]);
    const[customerCreditList, setCustomerCreditList] = useState([]);
    const[droneTrafficControlList, setDroneTrafficControlList] = useState([]);
    const[mostPopularProductsList, setMostPopularProductsList] = useState([]);
    const[dronePilotRosterList, setDronePilotRosterList] = useState([]);
    const[storeSalesOverviewList, setStoreSalesOverviewList] = useState([]);
    const[ordersInProgressList, setOrdersInProgressList] = useState([]);
  
    const roleDistribution = () => {
      Axios.get("http://localhost:3001/roleDistribution").then((response) => {
        setRoleList(response.data);
      });
    }

    const customerCreditCheck = () => {
      Axios.get("http://localhost:3001/customerCreditCheck").then((response) => {
        setCustomerCreditList(response.data);
      });
    }
  
    const droneTrafficControl = () => {
        Axios.get("http://localhost:3001/droneTrafficControl").then((response) => {
            setDroneTrafficControlList(response.data);
        });
    }

    const mostPopularProducts = () => {
        Axios.get("http://localhost:3001/mostPopularProducts").then((response) => {
            setMostPopularProductsList(response.data);
        });
    }

    const dronePilotRoster = () => {
        Axios.get("http://localhost:3001/dronePilotRoster").then((response) => {
            setDronePilotRosterList(response.data);
        });
    }
    
    const storeSalesOverview = () => {
        Axios.get("http://localhost:3001/storeSalesOverview").then((response) => {
            setStoreSalesOverviewList(response.data);
        });
    }

    const ordersInProgress = () => { 
        Axios.get("http://localhost:3001/ordersInProgress").then((response) => {
            setOrdersInProgressList(response.data);
        });
    }

    return (
        <div className="App">
        <button onClick={roleDistribution}>Show Role Distribution</button>
        <div classname="roles">
            <table>
              <tr>
                  <th>Category</th>
                  <th>Total</th>
                </tr>
              {roleList.map((val, key) => {
                return ( 
                  <tr key={key}>
                      <td>{val.category}</td>
                      <td>{val.total}</td>
                  </tr>
                );
              })}
            </table>
        </div>
        
        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={customerCreditCheck}>Show Customer Credit Check</button>
        <div classname="customercreditcheck">
            <table>
              <tr>
                  <th>customer_name</th>
                  <th>rating</th>
                  <th>current_credit</th>
                  <th>credit_already_allocated</th>
                </tr>
              {customerCreditList.map((val, key) => {
                return ( 
                  <tr key={key}>
                      <td>{val.customer_name}</td>
                      <td>{val.rating}</td>
                      <td>{val.current_credit}</td>
                      <td>{val.credit_already_allocated}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>
    
        <button onClick={droneTrafficControl}>Show Drone Traffic Control</button>
        <div classname="dtc">
            <table>
                <tr>
                    <th>drone_serves_store</th>
                    <th>drone_tag</th>
                    <th>pilot</th>
                    <th>total_weight_allowed</th>
                    <th>current_weight</th>
                    <th>deliveries_allowed</th>
                    <th>deliveries_in_progress</th>
                    </tr>
                {droneTrafficControlList.map((val, key) => {
                    return ( 
                    <tr key={key}>
                            <td>{val.drone_serves_store}</td>
                            <td>{val.drone_tag}</td>
                            <td>{val.pilot}</td>
                            <td>{val.total_weight_allowed}</td>
                            <td>{val.current_weight}</td>
                            <td>{val.deliveries_allowed}</td>
                            <td>{val.deliveries_in_progress}</td>
                    </tr>
                    );
                })}
                </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={dronePilotRoster}>Show Drone Pilot Roster</button>
        <div classname="dronePilotRoster">
            <table>
              <tr>
                  <th>pilot</th>
                  <th>licenseID</th>
                  <th>drone_serves_store</th>
                  <th>drone_tag</th>
                  <th>successful_deliveries</th>
                  <th>pending_deliveries</th>
                </tr>
              {dronePilotRosterList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.pilot}</td>
                        <td>{val.licenseID}</td>
                        <td>{val.drone_serves_store}</td>
                        <td>{val.drone_tag}</td>
                        <td>{val.successful_deliveries}</td>
                        <td>{val.pending_deliveries}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={storeSalesOverview}>Show Store Sales Overview</button>
        <div classname="sto">
            <table>
              <tr>
                  <th>store_id</th>
                  <th>sname</th>
                  <th>manager</th>
                  <th>revenue</th>
                  <th>incoming_revenue</th>
                  <th>incoming_orders</th>
                </tr>
              {storeSalesOverviewList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.store_id}</td>
                        <td>{val.sname}</td>
                        <td>{val.manager}</td>
                        <td>{val.revenue}</td>
                        <td>{val.incoming_revenue}</td>
                        <td>{val.incoming_orders}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={mostPopularProducts}>Show Most Popular Products</button>
        <div classname="mostpopularproducts">
            <table>
              <tr>
                  <th>barcode</th>
                  <th>product_name</th>
                  <th>weight</th>
                  <th>lowest_price</th>
                  <th>highest_price</th>
                  <th>lowest_quantity</th>
                  <th>highest_quantity</th>
                  <th>total_quantity</th>
                </tr>
              {mostPopularProductsList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.barcode}</td>
                        <td>{val.product_name}</td>
                        <td>{val.weight}</td>
                        <td>{val.lowest_price}</td>
                        <td>{val.highest_price}</td>
                        <td>{val.lowest_quantity}</td>
                        <td>{val.highest_quantity}</td>
                        <td>{val.total_quantity}</td>
                  </tr>
                );
              })}
            </table>
        </div>
        
        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={ordersInProgress}>Show Orders In Progress</button>
        <div classname="ordersInProgress">
            <table>
              <tr>
                  <th>orderID</th>
                  <th>cost</th>
                  <th>num_products</th>
                  <th>payload</th>
                  <th>contents</th>
                </tr>
              {ordersInProgressList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.orderID}</td>
                        <td>{val.cost}</td>
                        <td>{val.num_products}</td>
                        <td>{val.payload}</td>
                        <td>{val.contents}</td>
                  </tr>
                );
              })}
            </table>
        </div>

      </div>
    );
  }

  const Divider = () => {
    return (
        <hr
            style={{ borderTop: "1px solid lightgrey" }}
        ></hr>
    );
};
  
  export default Views;
  