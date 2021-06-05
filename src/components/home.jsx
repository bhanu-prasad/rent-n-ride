import React, { Component } from 'react'
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="home" className="component-size home_bg">
                <div className="home-title">
                    <span>Car Hire at <span className="title-color">lowest prices</span></span>
                </div>
                <div className="form-container my-xs-3">
                   <div>
                    <form action="/" method="post" className="form-body">
                            <div className="d-flex flex-column">
                                <label for="pickl">Pickup Location :</label>
                                <input type="text" name="pickl" placeholder="Pickup Location"/>
                                <label for="dropl">Drop Location :</label>
                                <input type="text" name="dropl" placeholder="Drop Location"/>
                                
                            </div>
                            <div className="row date-time">
                                <div className="col p-0">
                                    <label htmlFor="pickd">Pickup Date & Time :</label>
                                    <div className="row justify-content-between">
                                        <input type="date" name="fromd" id="fromd" className="col-8"/>
                                        <input type="time" name="pickt" id="pickt"  className="col-3"/>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <label htmlFor="dropd">Drop Date & Time :</label>
                                    <div className="row justify-content-between">
                                        <input type="date" name="tod" id="tod" className="col-8"/>
                                        <input type="time" name="dropt" id="dropt"  className="col-3"/>
                                    </div>
                                </div>  
                                <div className="col-md-4 mt-5 p-0 d-flex justify-content-center">
                                    <button type="submit" className="enq-btn">Send Enquiry <i className="fas fa-paper-plane"></i></button>
                                </div>
                            </div>
                            
                            
                        </form>
                   </div>
                </div>
            </div>
        );
    }
}
 
export default Home;