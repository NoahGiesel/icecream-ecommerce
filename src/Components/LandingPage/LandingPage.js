import React   from 'react';
import './LandingPage.css';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

import black_cone from '../../img/black_cone.png'  

function LandingPage() { 

  return (
    <div className="LandingPage">  
        <div className="ice-section">
       <a  href="##"><img className="black_cone" src={black_cone} alt={"black_cone"}/> </a>  
        </div>
        <div className="text-section">
          <h3> ICE CREAM CAFE </h3>
          <div className="paragraf">
            <p>One of its kind! Dicover more than 20 different flavors  one different from another </p> 
            <p>Check out our current open positions to be part of this amazing group of talented people!</p>
             
            <div className="socials">
              <FaTwitter className="icon twitter" />
              <FaLinkedinIn className="icon Linkedin"/>
              <FaInstagram className="icon instagram"/>
              <FaYoutube className="icon  youtube"/>
              </div>
          </div>
        </div>
    </div>
  );
}

export default LandingPage;
