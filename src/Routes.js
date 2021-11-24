import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/QuemSomos" exact component={QuemSomos} />
        <Route path="/Contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

