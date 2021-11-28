import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroProduto from "./pages/CadastroProduto";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

       

        <Route path="/QuemSomos" exact component={QuemSomos} />
        <Route path="/Contato" exact component={Contato} />
        <Route path="/CadastroUsuario" exact component={CadastroUsuario} />
        <Route path="/CadastroProduto" exact component={CadastroProduto} />
        <Route path="/Login" exact component={Login} />
        <Route path="/ShoppingCart" exact component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

