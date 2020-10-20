import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/pages/pharmasist dashboard/Dashboard";
import CreateDeilivaryToken from "./components/pages/Delivary Token/CreateDelivaryToken";
import DelivaryTokenDetails from "./components/pages/DelivaryTokenDetails/DelivaryTokenDetails";
import UpdateDelivaryToken from "./components/pages/UpdateDelivaryToken/UpdateDelivaryToken";
import Footer from "./components/Footer";
import Login from "./components/pages/Login/Login";
import Tokens from "./components/pages/Report/Servicers/TokenReport";
import Prescription from "./components/pages/Prescriptions/Prescription";

import { Provider } from "react-redux";
import { axios } from "axios";

function App() {
  // render() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />

        <Switch>
          <Route path="/DashBoard" component={Dashboard}></Route>
          <Route path="/CreateDeilivaryToken">
            <CreateDeilivaryToken />
          </Route>
          <Route path="/DelivaryTokenDetails">
            <DelivaryTokenDetails />
          </Route>
          <Route path="/UpdateDelivaryToken">
            <UpdateDelivaryToken />
          </Route>
          {/* <Route path="/DashBoard">
              <Dashboard />
            </Route> */}
          <Route path="/Report">
            <Tokens />
          </Route>
          <Route path="/Prescription">
            <Prescription />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
// }

export default App;
