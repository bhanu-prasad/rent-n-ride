import React from "react"
import Home from "./home"

const NavBar = (props) => {
  return (
    <div>
        <nav className="navbar navbar-default fixed-top">
        <div className="container">
          <a href="#home" className="nav-logo nav-link">Brand Logo</a>
          <ul className="nav-menu">
              <li className="nav-item">
                  <a href="#about" className="nav-link">About <i className="nav-icons fas fa-info fa-xs"></i></a>
              </li>
              <li className="nav-item">
                  <a href="#bookride" className="nav-link">Book Now <i className="nav-icons fas fa-car"></i></a>
              </li>
              <li className="nav-item">
                  <a href="#contact" className="nav-link">Contact Us <i className="nav-icons fas fa-at "></i></a>
              </li>
          </ul>
          <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </div>
        </div> 
      </nav>
      <Home/>
    </div>

  )
};

export default NavBar;
