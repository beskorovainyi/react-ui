import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Auth from "./layouts/Auth";

const App = () => {


  return (
      <BrowserRouter>
        <Switch>
            <Route path="/auth" component={(props) => <Auth {...props} />} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;