import React  from 'react';
import './ParallaxSection.css';
  
function ParallaxSection( props ) {  
  return (
    <div className="ParallaxSection container">  
        
        <div className="parallax"style={{ backgroundImage: `url(${props.Background})`
}}>
          <div className="text">
            <h2>{props.msg}</h2>
            <h3>{props.msg1} </h3>
          </div>
         </div>
    </div>
  );
}

export default ParallaxSection;
