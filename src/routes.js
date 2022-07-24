import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";
import pages from './pages'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path ="/" component={ pages.Login } />
    <PrivateRoute exact path ="/ativos" component={ pages.Ativos } />
    <PrivateRoute exact path ="/movimentacao" component={ pages.SaquesDepositos } />
  </Switch>
);

export default Routes;