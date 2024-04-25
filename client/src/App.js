import './App.css';
import { useState } from 'react';
import Axios from "axios";
import NavBar from './navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import Layout from './layout'



function App() {

  const[username, setUsername] = useState("");
  const[first_name, setFirstName] = useState("");
  const[last_name, setLastName] = useState("");
  const[address, setAddress] = useState("");
  const[birthdate, setBirthdate] = useState(null);
  const[rating, setRating] = useState(0);
  const[credit, setCredit] = useState(0);

  const[roleList, setRoleList] = useState([]);

  const addCustomer = () => {
    Axios.post("http://localhost:3001/addCustomer", { // change immediately!!!!
      username: username, 
      first_name: first_name, 
      last_name: last_name, 
      address: address, 
      birthdate: birthdate, 
      rating: rating, 
      credit: credit
    }).then(() => {
      console.log("success");
    });
  };

  const roleDistribution = () => {
    Axios.get("http://localhost:3001/roleDistribution").then((response) => {
      setRoleList(response.data);
    });
  }

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
