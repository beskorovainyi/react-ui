import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
// import "assets/css/demo.css";

const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={(props) => <AuthLayout {...props} />}/>
          <Route path="/dashboard" component={(props) => <DashboardLayout {...props} />}/>
          <Route path="/action_1" component={(props) => <DashboardLayout {...props} />}/>
          <Redirect from="" to="/auth/login" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;