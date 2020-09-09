import React from "react";

import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/pages/pharmasist dashboard/Dashboard";
import CreateDeilivaryToken from './components/pages/Delivary Token/CreateDelivaryToken';
import DelivaryTokenDetails from './components/pages/DelivaryTokenDetails/DelivaryTokenDetails'
import UpdateDelivaryToken from './components/pages/UpdateDelivaryToken/UpdateDelivaryToken'

function App() {
  return (
    <div>
      <HeaderBar />
      <UpdateDelivaryToken/>
      <CreateDeilivaryToken/>
      
    </div>
  );
}

export default App;
