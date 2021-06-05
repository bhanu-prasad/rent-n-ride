import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="contact" className="component-size contact-page flex-column justify-content-center align-items-center"> 
            <h2 className="page-title text-dark text-center">Contact Us</h2>
                <div className="container contact-details">
                    <div className="contact-card">
                        <h2>Mobile</h2>
                        <label htmlFor="tel1">Person 1: <a href="tel:+91 99999 99999" id="tel1">+91 99999 99999</a></label>
                        <label htmlFor="tel1">Person 2: <a href="tel:+91 99999 99999" id="tel2">+91 99999 99999</a></label>
                        <h2>Email</h2>
                        <a href="mailto:abcdefg@123.com">abcdefg@123.com</a>
                        <h2>Business Hours</h2>
                        <p>{"************************ \n***************************"}</p>
                    </div>
                    <div className="query-form">
                        <form action="/" method="get">
                            <div className="d-flex flex-column ">
                                <input type="text" name="cname" placeholder="Enter Your Name"/>
                                <input type="tel" name="tel" pattern="[6-9]{1}[0-9]{9}" placeholder="Enter Valid Mobile Number"/>
                                <textarea name="message" id="" cols="50" rows="5" placeholder="Enter Your Query"></textarea>
                            </div>
                            <button type="submit" className="send-que">Send Query</button>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Contact;