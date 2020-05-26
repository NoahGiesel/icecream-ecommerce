import React  from 'react';
import './About.css'; 

  

function About( props ) {  
    
  return (
    <div className="About"> 
        <div className="container">
            <div className="left-section">
                <div className="wrapper">
                    <h2 className="first-h2"> {props.Title1}</h2>
                    <h2 className="second-h2">{props.Title2} </h2>
                    <p>  {props.p} </p>
                </div>
            </div>
            <div className="right-section" >
                <img className="leftImg" src={props.img1} alt={"leftImg"}/> 
                <img className="rightImg" src={props.img2} alt={"rightImg"}/>  
            </div>
            </div>  
    </div>
        

          
  );
}

export default About;
