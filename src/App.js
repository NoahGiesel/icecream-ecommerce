import React  , { useState, useEffect } from 'react';
import './App.css';

import Navigation from "./Components/navigation/Navigation"
import SideBar from "./Components/navigation/SideBar"
import LandingPage from "./Components/LandingPage/LandingPage"

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
    </div>
  );
}

export default App;
