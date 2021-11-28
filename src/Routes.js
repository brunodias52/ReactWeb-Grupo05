import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ShoppingCart from "./pages/ShoppingCart";


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

       

        <Route path="/QuemSomos" exact component={QuemSomos} />
        <Route path="/Contato" exact component={Contato} />
        <Route path="/Cadastro" exact component={Cadastro} />
        <Route path="/Login" exact component={Login} />
        <Route path="/ShoppingCart" exact component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

