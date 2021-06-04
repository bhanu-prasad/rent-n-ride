import React from "react"
import {Link} from "react-router-dom"
const NavBar = (props) => {
  return (
      <nav className="navbar navbar-light bg-dark">
              <div className="container justify-content-between">
                <Link to="/" className="navbar-brand text-light">Brand Logo</Link>
                <div>
                    <Link to="/" className="m-3">About</Link>
                    <Link to="/" className="m-3">Book Now</Link>
                    <Link to="/" className="m-3">Policy</Link>
                </div>
              </div>
      </nav>
  )
};

export default NavBar;
