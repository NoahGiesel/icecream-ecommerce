import React  , { useState, useEffect } from 'react';
import './LandingPage.css';
 
import black_cone from '../../img/black_cone.png'  

function LandingPage() { 

  return (
    <div className="LandingPage">  
        <div className="ice-section">
       <a  href="##"><img className="black_cone" src={black_cone} alt={"black_cone"}/> </a>  
        </div>
        <div className="text-section">
          <h3> Lorem ciao come va io sto bnene </h3>
          <p>Lorem40 adjkasoid erfpkk rpfr erpofkg rpeofkop reeropkf oprefk op</p> 
          <p>Lorem40 adjkasoid erfpkk rpfr erpofkg rpeofkop reeropkf oprefk op</p> 
        </div>
    </div>
  );
}

export default LandingPage;
