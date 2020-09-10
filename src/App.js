import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/pages/pharmasist dashboard/Dashboard";
import CreateDeilivaryToken from "./components/pages/Delivary Token/CreateDelivaryToken";
import DelivaryTokenDetails from "./components/pages/DelivaryTokenDetails/DelivaryTokenDetails";
import UpdateDelivaryToken from "./components/pages/UpdateDelivaryToken/UpdateDelivaryToken";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />
        <Switch>
          <Route path="/CreateDeilivaryToken">
            <CreateDeilivaryToken />
          </Route>
          <Route path="/DelivaryTokenDetails">
            <DelivaryTokenDetails />
          </Route>
          <Route path="/UpdateDelivaryToken">
            <UpdateDelivaryToken />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
