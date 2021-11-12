import React from "react";
import Menu from "../components/Menu/Menu";
import {Redirect, Switch, Route} from "react-router-dom";
import Dashboard from "../views/Dashboard";
import routes from "../routes/routesDashboard";

const DashboardLayout = () => {

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {

    })
  }

  return (
      <>
        <Menu />
        <Dashboard />
          {/*<Switch>*/}
          {/*  */}
          {/*</Switch>*/}
        {/*  /!*<Redirect from="/" to="/dashboard" />*!/*/}
      </>
  )
}

export default DashboardLayout