import React, { Component } from 'react'
const services =[{
    id:1,
    tileclass:"lni-rupee",
    title:"Affodable",
    desc:"Short description for the ones \n who look for something new. "
    
},
{
    id:2,
    tileclass:"lni-car",
    title:"Regular maintanance of Cars",
    desc:"Short description for the ones \n who look for something new."
    
},
{
    id:3,
    tileclass:"fas fa-tools",
    title:"Easy Renting",
    desc:"Short description for the ones \n who look for something new."
    
},
{
    id:4,
    tileclass:"far fa-clock",
    title:"Around Clock",
    desc:"24/7 Service."
    
}

]

const Servcomp = (props)=>{
    return(
         <div className="col-md-6">
             <div className="services-content mt-40 d-sm-flex">
                <div className="services-icon">
                    <i className={props.tileclass}></i>
                </div>
                <div className="services-content media-body">
                    <h4 className="services-title">{props.title}</h4>
                    <p className="text">{props.desc.split("\n")}</p>
                </div>
            </div>
        </div>
    )
}


class About extends Component {
    state = {  }
    render() { 
        return ( 
        <div id="about" className="component-size about-page"> 
            <h2 className="page-title">About Us</h2>
            <section id="service" className="services-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-10">
                                
                             </div>  
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <Servcomp tileclass={services[0].tileclass} title={services[0].title} desc={services[0].desc}/>
                                <Servcomp tileclass={services[1].tileclass} title={services[1].title} desc={services[1].desc}/>
                                <Servcomp tileclass={services[2].tileclass} title={services[2].title} desc={services[2].desc}/>
                                <Servcomp tileclass={services[3].tileclass} title={services[3].title} desc={services[3].desc}/>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>   
		</div>
         );
    }
}
 
export default About;