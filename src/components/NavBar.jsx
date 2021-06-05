import React from "react"
import Home from "./home"

const NavBar = (props) => {
  return (
    <div>
        <nav class="navbar navbar-default fixed-top">
        <div className="container">
          <a href="#home" className="nav-logo">Brand Logo</a>
          <ul class="nav-menu">
              <li class="nav-item">
                  <a href="#about" class="nav-link">About <i className="nav-icons fas fa-info fa-xs"></i></a>
              </li>
              <li class="nav-item">
                  <a href="#bookride" class="nav-link">Book Now <i class="nav-icons fas fa-car"></i></a>
              </li>
              <li class="nav-item">
                  <a href="#contact" class="nav-link">Contact Us <i class="nav-icons fas fa-at "></i></a>
              </li>
          </ul>
          <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
        </div> 
      </nav>
      <Home/>
    </div>

  )
};

export default NavBar;
