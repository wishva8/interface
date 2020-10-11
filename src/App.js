import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Dashboard from "./components/pages/pharmasist dashboard/Dashboard";
import CreateDeilivaryToken from "./components/pages/Delivary Token/CreateDelivaryToken";
import DelivaryTokenDetails from "./components/pages/DelivaryTokenDetails/DelivaryTokenDetails";
import UpdateDelivaryToken from "./components/pages/UpdateDelivaryToken/UpdateDelivaryToken";
import Footer from "./components/Footer";
import Login from "./components/pages/Login/Login";
import {store} from "./components/pages/action/store"
import {Provider} from "react-redux"

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
          <Provider store={store}><DelivaryTokenDetails /></Provider>
            
          </Route>
          <Route path="/UpdateDelivaryToken">
           
            <UpdateDelivaryToken />
          </Route>
          <Route path="/DashBoard">
            <Dashboard />
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

export default App;
