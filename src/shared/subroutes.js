import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = (route) => (
  <Route
    exact={route.path === "/" ? true : false}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default RouteWithSubRoutes;