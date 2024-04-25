import './App.css';
import { useState } from 'react';
import Axios from "axios";


function Tables() {
  
    const[userList, setUserList] = useState([]);
    const[customerList, setCustomerList] = useState([]);
    const[employeeList, setEmployeeList] = useState([]);
    const[dronePilotList, setDronePilotList] = useState([]);
    const[storeWorkerList, setStoreWorkerList] = useState([]);
    const[productList, setProductList] = useState([]);
    const[orderList, setOrderList] = useState([]);
    const[storeList, setStoreList] = useState([]);
    const[droneList, setDroneList] = useState([]);
    const[orderLineList, setOrderLineList] = useState([]);
    const[employedWorkerList, setEmployedWorkerList] = useState([]);
  
    const showUsers = () => {
      Axios.get("http://localhost:3001/showUsers").then((response) => {
        setUserList(response.data);
      });
    }

    const showCustomers = () => {
      Axios.get("http://localhost:3001/showCustomers").then((response) => {
        setCustomerList(response.data);
      });
    }
  
    const showEmployees = () => {
        Axios.get("http://localhost:3001/showEmployees").then((response) => {
            setEmployeeList(response.data);
        });
    }

    const showDronePilots = () => {
        Axios.get("http://localhost:3001/showDronePilots").then((response) => {
            setDronePilotList(response.data);
        });
    }

    const showStoreWorkers = () => {
        Axios.get("http://localhost:3001/showStoreWorkers").then((response) => {
            setStoreWorkerList(response.data);
        });
    }

    const showProducts = () => {
        Axios.get("http://localhost:3001/showProducts").then((response) => {
            setProductList(response.data);
        });
    }
    
    const showOrders = () => {
        Axios.get("http://localhost:3001/showOrders").then((response) => {
            setOrderList(response.data);
        });
    }

    const showStores = () => { 
        Axios.get("http://localhost:3001/showStores").then((response) => {
            setStoreList(response.data);
        });
    }

    const showDrones = () => { 
        Axios.get("http://localhost:3001/showDrones").then((response) => {
            setDroneList(response.data);
        });
    }

    const showOrderLines = () => { 
        Axios.get("http://localhost:3001/showOrderLines").then((response) => {
            setOrderLineList(response.data);
        });
    }

    const showEmployedWorkers = () => { 
        Axios.get("http://localhost:3001/showEmployedWorkers").then((response) => {
            setEmployedWorkerList(response.data);
        });
    }

    const formatDate = (birthdate) => {
        const date = new Date(birthdate);
        const formattedDate = date.toISOString().split('T')[0];
        return formattedDate;
      };

    return (
        <div className="App">
        <button onClick={showUsers}>Show Users</button>
        <div classname="ShowUsers">
            <table>
              <tr>
                  <th>uname</th>
                  <th>first_name</th>
                  <th>last_name</th>
                <th>address</th>
                    <th>birthdate</th>
                </tr>
              {userList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.uname}</td>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.address}</td>
                        <td>{formatDate(val.birthdate)}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showCustomers}>Show Customers</button>
        <div classname="ShowCustomers">
            <table>
              <tr>
                  <th>uname</th>
                  <th>rating</th>
                  <th>credit</th>
                </tr>
              {customerList.map((val, key) => {
                return ( 
                  <tr key={key}>
                    <td>{val.uname}</td>
                    <td>{val.rating}</td>
                    <td>{val.credit}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

    
        <button onClick={showEmployees}>Show Employees</button>
        <div classname="ShowEmployees">
            <table>
                <tr>
                    <th>uname</th>
                    <th>taxID</th>
                    <th>service</th>
                    <th>salary</th>
                    </tr>
                {employeeList.map((val, key) => {
                    return ( 
                    <tr key={key}>
                        <td>{val.uname}</td>
                        <td>{val.taxID}</td>
                        <td>{val.service}</td>
                        <td>{val.salary}</td>
                    </tr>
                    );
                })}
                </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showDronePilots}>Show Drone Pilot Roster</button>
        <div classname="ShowDronePilots">
            <table>
              <tr>
                  <th>uname</th>
                  <th>licenseID</th>
                  <th>experience</th>
                </tr>
              {dronePilotList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.uname}</td>
                        <td>{val.licenseID}</td>
                        <td>{val.experience}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showStoreWorkers}>Show Store Workers</button>
        <div classname="ShowStoreWorkers">
            <table>
              <tr>
                  <th>uname</th>
                </tr>
              {storeWorkerList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.uname}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showProducts}>Show Products</button>
        <div classname="ShowProducts">
            <table>
              <tr>
                  <th>barcode</th>
                  <th>pname</th>
                  <th>weight</th>
                </tr>
              {productList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.barcode}</td>
                        <td>{val.pname}</td>
                        <td>{val.weight}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showOrders}>Show Orders</button>
        <div classname="ShowOrders">
            <table>
              <tr>
                  <th>orderID</th>
                  <th>sold_on</th>
                  <th>purchased_by</th>
                  <th>carrier_store</th>
                  <th>carrier_tag</th>
                </tr>
              {orderList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.orderID}</td>
                        <td>{formatDate(val.sold_on)}</td>
                        <td>{val.purchased_by}</td>
                        <td>{val.carrier_store}</td>
                        <td>{val.carrier_tag}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showStores}>Show Stores</button>
        <div classname="ShowStores">
            <table>
              <tr>
                  <th>storeID</th>
                  <th>sname</th>
                  <th>revenue</th>
                  <th>manager</th>
                </tr>
              {storeList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.storeID}</td>
                        <td>{val.sname}</td>
                        <td>{val.revenue}</td>
                        <td>{val.manager}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showDrones}>Show Drones</button>
        <div classname="ShowDrones">
            <table>
              <tr>
                  <th>storeID</th>
                  <th>droneTag</th>
                  <th>capacity</th>
                  <th>remaining_trips</th>
                  <th>pilot</th>
                </tr>
              {droneList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.storeID}</td>
                        <td>{val.droneTag}</td>
                        <td>{val.capacity}</td>
                        <td>{val.remaining_trips}</td>
                        <td>{val.pilot}</td>
                  </tr>
                );
              })}
            </table>
        </div>

        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showOrderLines}>Show Order Lines</button>
        <div classname="ShowOrderLines">
            <table>
              <tr>
                  <th>orderID</th>
                  <th>barcode</th>
                  <th>price</th>
                  <th>quantity</th>
                </tr>
              {orderLineList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.orderID}</td>
                        <td>{val.barcode}</td>
                        <td>{val.price}</td>
                        <td>{val.quantity}</td>
                  </tr>
                );
              })}
            </table>
        </div>
        
        <div style={{ display: "block", padding: 10 }}>
            <Divider />
        </div>

        <button onClick={showEmployedWorkers}>Show Employed Workers</button>
        <div classname="ShowEmployedWorkers">
            <table>
              <tr>
                  <th>storeID</th>
                  <th>uname</th>
                </tr>
              {employedWorkerList.map((val, key) => {
                return ( 
                  <tr key={key}>
                        <td>{val.storeID}</td>
                        <td>{val.uname}</td>
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
            style={{ borderTop: "1px solid black" }}
        ></hr>
    );
};
  
  
  export default Tables;
  