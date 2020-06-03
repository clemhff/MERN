import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Menu';
import QuotesList from './QuotesList';
import Home from './Home';
import BadRequest from './BadRequest';


function App() {


  return (
    <Router>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + ''} >
            <Home/>
          </Route>
          <Route exact path={process.env.PUBLIC_URL + '/quoteapp'} >
            <QuotesList/>
          </Route>
          <Route>
            <BadRequest/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
