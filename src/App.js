import React  , { useState, useEffect } from 'react';
import './App.css';

import Navigation from "./Components/navigation/Navigation"
import SideBar from "./Components/navigation/SideBar"
import LandingPage from "./Components/LandingPage/LandingPage"
import ParallaxSection from "./Components/ParallaxSection/PrallaxSection"
import Selection from "./Components/Selection/Selection"
import About from "./Components/About/About"

function App() {


 
const [isToggled, setIsToggled] = useState(true);

const menuToggler = () => {
  setIsToggled(!isToggled) 
}



  return (
    <div className="App"> 
       <Navigation onMenuClick={menuToggler }/> 
       <SideBar listentoClick={isToggled} /> 
       <LandingPage /> 
       <Selection/> 
       <ParallaxSection /> 
       <About />
    </div>
  );
}

export default App;
