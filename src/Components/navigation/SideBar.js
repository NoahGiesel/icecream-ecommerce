import React from 'react';
 
import './SideBar.css'; 



function SideBar( props ) {


      let dynamicClass = 'SideBar';
   
        if ( props.listentoClick === true) {
          dynamicClass += ' menu-active'; 
          document.documentElement.style.overflow = 'auto'; 
        }else { 
          document.documentElement.style.overflow = 'hidden' ;  
          
        }
  

  return (
    <div className={dynamicClass}>   
        <ul className="u-list-sidebar">
            <li><a  href="##">Home</a></li>
            <li><a href="##">Shop</a></li>
            <li><a  href="##">About</a></li>
            <li><a  href="##">Contact</a></li>   
        </ul>  
    </div>
  );
}

export default SideBar;
