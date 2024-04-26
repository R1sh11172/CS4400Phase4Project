import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Views from './Views';
import Tables from './Tables';
import Procedures from './Procedures';
import AddCustomerComponent from './procedures/addCustomer';
import AddDronePilotComponent from './procedures/addDronePilot';
import AddProductComponent from './procedures/addProduct';
import AddDroneComponent from './procedures/addDrone';
import IncreaseCustomerCreditsComponent from './procedures/increaseCustomerCredits';
import SwapDroneControlComponent from './procedures/swapDroneControl';
import RepairRefuelDroneComponent from './procedures/repairRefuelDrone';
import BeginOrderComponent from './procedures/beginOrder';
import AddOrderLineComponent from './procedures/addOrderLine';
import DeliverOrderComponent from './procedures/deliverOrder';
import CancelOrderComponent from './procedures/cancelOrder';
import RemoveCustomerComponent from './procedures/removeCustomer';
import RemoveDronePilotComponent from './procedures/removeDronePilot';
import RemoveProductComponent from './procedures/removeProduct';
import RemoveDroneComponent from './procedures/removeDrone';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} />
        <Route path="/Views" element={<Views />} />
        <Route path="/Tables" element={<Tables />} />
        <Route path="/Procedures" element={<Procedures />} />
        <Route path="/procedures/addCustomer" element={<AddCustomerComponent />} />
        <Route path="/procedures/addDronePilot" element={<AddDronePilotComponent />} />
        <Route path="/procedures/addProduct" element={<AddProductComponent />} />
        <Route path="/procedures/addDrone" element={<AddDroneComponent />} />
        <Route path="/procedures/increaseCustomerCredits" element={<IncreaseCustomerCreditsComponent />} />
        <Route path="/procedures/swapDroneControl" element={<SwapDroneControlComponent />} />
        <Route path="/procedures/repairRefuelDrone" element={<RepairRefuelDroneComponent />} />
        <Route path="/procedures/beginOrder" element={<BeginOrderComponent />} />
        <Route path="/procedures/addOrderLine" element={<AddOrderLineComponent />} />
        <Route path="/procedures/deliverOrder" element={<DeliverOrderComponent />} />
        <Route path="/procedures/cancelOrder" element={<CancelOrderComponent />} />
        <Route path="/procedures/removeCustomer" element={<RemoveCustomerComponent />} />
        <Route path="/procedures/removeDronePilot" element={<RemoveDronePilotComponent />} />
        <Route path="/procedures/removeProduct" element={<RemoveProductComponent />} />
        <Route path="/procedures/removeDrone" element={<RemoveDroneComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;