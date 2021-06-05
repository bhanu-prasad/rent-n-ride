/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="footer">
                <div className="container foot-content">
                    <div className="cp-rt">
                        Copyrights © | Rent Your Ride
                    </div>
                    <div>
                        Find Us: 
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </footer>
         );
    }
}
 
export default Footer;