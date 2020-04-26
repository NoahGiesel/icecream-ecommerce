import React , { useState, useEffect } from 'react';

import './Navigation.css';
import logo from '../../img/ice-cream_default.png'  
import cone from '../../img/cone.png'  

 

function Navigation( props ) {

 
  return (
    <div className="Navigation">  
       <a  href="##"><img className="immages" src={logo} alt={"logo"}/> </a>  
        <ul className="u-list">
            <li><a  href="##">Home</a></li>
            <li><a href="##">Shop</a></li>
            <li><a  href="##">About</a></li>
            <li><a  href="##">Contact</a></li> 
        </ul>
        <a  href="##" onClick={() => props.onMenuClick()} ><img className="immages cone" src={cone} alt={"cone"}/></a>  
     </div>
  );
}

export default Navigation;
