const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "MySQL123#",
    database: "drone_dispatch"
});

// Stored Procedures
app.post("/addCustomer", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const address = req.body.address;
    const birthdate = req.body.birthdate;
    const rating = req.body.rating;
    const credit = req.body.credit;

    // db.query(
    //     "INSERT INTO users (uname, first_name, last_name, address, birthdate) VALUES (?,?,?,?,?)",
    //     [username, first_name, last_name, address, birthdate],
    //     (err, result) => {
    //         if(err) {
    //             console.log(err);
    //         } else {
    //             res.send("Values Inserted");
    //         }
    //     }
    // );
    db.query(
        "CALL add_customer(?,?,?,?,?,?,?)",
        [username, first_name, last_name, address, birthdate, rating, credit],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/addDronePilot", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const address = req.body.address;
    const birthdate = req.body.birthdate;
    const taxID = req.body.taxID;
    const service = req.body.service;
    const salary = req.body.salary;
    const licenseID = req.body.licenseID
    const experience = req.body.experience;
    db.query(
        "CALL add_drone_pilot(?,?,?,?,?,?,?)",
        [username, first_name, last_name, address, birthdate, taxID, service, salary, licenseID, experience],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/addProduct", (req, res) => {
    console.log(req.body);
    const barcode = req.body.barcode;
    const name = req.body.name;
    const weight = req.body.weight;
    db.query(
        "CALL add_product(?,?,?)",
        [barcode, name, weight],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/addDrone", (req, res) => {
    console.log(req.body);
    const storeID = req.body.storeID;
    const droneTag = req.body.droneTag;
    const capacity = req.body.capacity;
    const pilot = req.body.pilot;
    db.query(
        "CALL add_drone(?,?,?,?,?)",
        [storeID, droneTag, capacity, pilot],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/increaseCustomerCredits", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const money = req.body.money;
    db.query(
        "CALL increase_customer_credits(?,?)",
        [username, money],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/swapDroneControl", (req, res) => {
    console.log(req.body);
    const incomingPilot = req.body.incomingPilot;
    const outgoingPilot = req.body.outgoingPilot;
    db.query(
        "CALL swap_drone_control(?,?)",
        [incomingPilot, outgoingPilot],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/repairRefuelDrone", (req, res) => {
    console.log(req.body);
    const droneStore = req.body.droneStore;
    const droneTag = req.body.droneTag;
    const refueledTrips = req.body.refueledTrips;
    db.query(
        "CALL repair_refuel_drone(?,?,?)",
        [droneStore, droneTag, refueledTrips],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/beginOrder", (req, res) => {
    console.log(req.body);
    const orderId = req.body.orderId;
    const soldOn = req.body.soldOn;
    const purchasedBy = req.body.purchasedBy;
    const carrierStore = req.body.carrierStore;
    const carrierTag = req.body.carrierTag;
    const barcode = req.body.barcode;
    const price = req.body.price;
    const quantity = req.body.quantity;

    db.query(
        "CALL begin_order(?,?,?,?,?,?,?,?,?)",
        [orderId, soldOn, purchasedBy, carrierStore, carrierTag, barcode, price, quantity],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/addOrderLine", (req, res) => {
    console.log(req.body);
    const orderId = req.body.orderId;
    const barcode = req.body.barcode;
    const price = req.body.price;
    const quantity = req.body.quantity;

    db.query(
        "CALL add_order_line(?,?,?,?)",
        [orderId, barcode, price, quantity],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/deliverOrder", (req, res) => {
    console.log(req.body);
    const orderId = req.body.orderId;

    db.query(
        "CALL deliver_order(?)",
        [orderId],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/cancelOrder", (req, res) => {
    console.log(req.body);
    const orderId = req.body.orderId;

    db.query(
        "CALL cancel_order(?)",
        [orderId],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    )
});

app.post("/removeCustomer", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    db.query(
        "CALL remove_customer(?)",
        [username],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Removed");
            }
        }
    )
});

app.post("/removeDronePilot", (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    db.query(
        "CALL remove_drone_pilot(?)",
        [username],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Removed");
            }
        }
    )
});

app.post("/removeProduct", (req, res) => {
    console.log(req.body);
    const barcode = req.body.barcode;
    db.query(
        "CALL remove_product(?)",
        [barcode],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Removed");
            }
        }
    )
});

app.post("/removeDrone", (req, res) => {
    console.log(req.body);
    const storeID = req.body.storeID;
    const droneTag = req.body.droneTag;
    db.query(
        "CALL remove_drone(?,?)",
        [storeID, droneTag],
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("Values Removed");
            }
        }
    )
});



// Views
app.get("/roleDistribution", (req, res) => {
    db.query(
        "SELECT * FROM role_distribution",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/customerCreditCheck", (req, res) => {
    db.query(
        "SELECT * FROM customer_credit_check",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/droneTrafficControl", (req, res) => {
    db.query(
        "SELECT * FROM drone_traffic_control",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/mostPopularProducts", (req, res) => {
    db.query(
        "SELECT * FROM most_popular_products",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/dronePilotRoster", (req, res) => {
    db.query(
        "SELECT * FROM drone_pilot_roster",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/storeSalesOverview", (req, res) => {
    db.query(
        "SELECT * FROM store_sales_overview",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/ordersInProgress", (req, res) => {
    db.query(
        "SELECT * FROM orders_in_progress",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});



// Table Display
app.get("/showUsers", (req, res) => {
    db.query(
        "SELECT * FROM users",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showCustomers", (req, res) => {
    db.query(
        "SELECT * FROM customers",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showEmployees", (req, res) => {
    db.query(
        "SELECT * FROM employees",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showDronePilots", (req, res) => {
    db.query(
        "SELECT * FROM drone_pilots",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showStoreWorkers", (req, res) => {
    db.query(
        "SELECT * FROM store_workers",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showProducts", (req, res) => {
    db.query(
        "SELECT * FROM products",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showOrders", (req, res) => {
    db.query(
        "SELECT * FROM orders",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showStores", (req, res) => {
    db.query(
        "SELECT * FROM stores",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showDrones", (req, res) => {
    db.query(
        "SELECT * FROM drones",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showOrderLines", (req, res) => {
    db.query(
        "SELECT * FROM order_lines",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get("/showEmployedWorkers", (req, res) => {
    db.query(
        "SELECT * FROM employed_workers",
        (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

