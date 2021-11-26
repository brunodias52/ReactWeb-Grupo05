import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";

import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/pedidos" exact component={Pedidos} />

        <Route path="/QuemSomos" exact component={QuemSomos} />
        <Route path="/Contato" exact component={Contato} />
        <Route path="/Login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

