import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </React.Fragment>
     );
  }
}
 
export default App;