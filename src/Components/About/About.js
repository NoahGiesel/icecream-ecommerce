import React  from 'react';
import './About.css'; 

import leftImg from '../../img/our-cafes-1.jpg'    
import rightImg from '../../img/our-cafes-2.jpg'    

function About() {  
    
  return (
    <div className="About"> 
        <div className="container">
            <div className="left-section">
                <div className="wrapper">
                    <h2 className="first-h2">Let's talk</h2>
                    <h2 className="second-h2">ABOUT US</h2>
                    <p>It all began, now more than six years ago, with two people wanting to bring an alternative way 
                        of eating and drinking. The idea was to bring something new to a Renaissance and very traditional city 
                        – emphasizing on health, freshness, simplicity and quickness. We are proud to offer locals and visitors
                         healthy, greener and fresh fast food […]</p>
                </div>
            </div>
            <div className="right-section">
                <img className="leftImg" src={leftImg} alt={"leftImg"}/> 
                <img className="rightImg" src={rightImg} alt={"rightImg"}/>  
            </div>
            </div>  
    </div>
        

          
  );
}

export default About;
