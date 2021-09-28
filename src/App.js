import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";

const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={(props) => <Auth {...props} />}/>
          <Route path="/dashboard" component={(props) => <Dashboard {...props} />}/>
          <Redirect from="/" to="/auth" />
        </Switch>
      </BrowserRouter>
  );
}

export default App;