import React, { Component } from 'react';
import NavBar from "./components/NavBar"
import Home from "./components/home"
import About from "./components/about"
import Footer from "./components/footer"
import Contact from "./components/contact"
class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
            <NavBar />
            <Home/>
            <About/>
            <Contact/>
            <Footer/>
      </React.Fragment>
     );
  }
}
 
export default App;