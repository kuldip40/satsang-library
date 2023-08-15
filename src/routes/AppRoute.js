import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "container/Home";
import Signin from "components/Signin/Signin";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/home" render={(props) => <Home {...props} />} />

      <Route path="/signin" render={(props) => <Signin {...props} />} />

      <Redirect to="/home" />
    </Switch>
  );
};

export default AppRoute;
