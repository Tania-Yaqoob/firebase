import {useState} from 'react';
import {db} from './firebase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './Signup';
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
function App() {
  return(
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  </div>
  );

  
}
  
export default App;