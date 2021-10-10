import React from "react";
import Menu from "../components/Menu";
import {Redirect, Switch, Route} from "react-router-dom";
import Dashboard from "../views/Dashboard";

const DashboardLayout = () => {


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