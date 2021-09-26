import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Auth from "./layouts/Auth";
import Dashboard from "./layouts/Dashboard";

const App = () => {


  return (
      <BrowserRouter>
        <Switch>
          <Route path="/auth" component={(props) => <Auth {...props} />}/>
          <Route path="/dashboard" component={(props) => <Dashboard {...props} />}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;