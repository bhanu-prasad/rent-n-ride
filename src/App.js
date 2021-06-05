import React, { Component } from 'react';
import NavBar from "./components/NavBar"

import About from "./components/about"
import Footer from "./components/footer"
import Contact from "./components/contact"
class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
            <NavBar />

            <About/>
            <Contact/>
            <Footer/>
      </React.Fragment>
     );
  }
}
 
export default App;