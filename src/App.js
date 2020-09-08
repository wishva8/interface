import React from "react";

import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/pages/pharmasist dashboard/Dashboard";
import CreateDeilivaryToken from './components/pages/Delivary Token/CreateDelivaryToken';

function App() {
  return (
    <div>
      <HeaderBar />
      <CreateDeilivaryToken/>
    </div>
  );
}

export default App;
