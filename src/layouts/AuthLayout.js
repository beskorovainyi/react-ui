import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import {Switch, Route} from "react-router-dom";
import routes from "../routes/routesAuth"

const AuthLayout = () => {


  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
            <Route
            path={prop.layout + prop.path}
            key={key}
            component={prop.component}
            />
        )
      }
    })
  }

  return (
      <>
        <Menu />
        <Switch>{getRoutes(routes)}</Switch>
        <Footer />
      </>
  )
}

export default AuthLayout