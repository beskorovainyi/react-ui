import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
// import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
// import "assets/css/demo.css";

const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={(props) => <AuthLayout {...props} />}/>
          <Route path="/dashboard" component={(props) => <DashboardLayout {...props} />}/>
          <Redirect from="/" to="/auth" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;