import React  , { useState} from 'react';
import './App.css';

import Navigation from "./Components/navigation/Navigation"
import SideBar from "./Components/navigation/SideBar"
import LandingPage from "./Components/LandingPage/LandingPage"
import ParallaxSection from "./Components/ParallaxSection/PrallaxSection"
import Selection from "./Components/Selection/Selection"
import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"

import icecafe from "./img/ice-cafe.jpg"
import banana_split from "./img/banana_split.jpg"
import our_cafe_1 from './img/our-cafes-1.jpg'    
import our_cafe_2 from './img/our-cafes-2.jpg'   
import we_are_searching_1 from './img/we-are-searching-1.jpg'    
import we_are_searching_2 from './img/we-are-searching-2.jpg'   

function App() {

const About_p = "It all began, now more than six years ago, with two people wanting to bring an alternative way of eating and drinking. The idea was to bring something new to a Renaissance and very traditional city – emphasizing on health, freshness, simplicity and quickness. We are proud to offer locals and visitors healthy, greener and fresh fast food […]"
const Searching_p = " Always expanding and searching for new motivated employees.Contribute to our project to provide a healthy fast food in a peaceful and quiet environment, always welcome to send us your application!"
 
const [isToggled, setIsToggled] = useState(true) ;

const menuToggler = () => {
  setIsToggled(!isToggled) 
}



  return (
    <div className="App"> 
       <Navigation onMenuClick={menuToggler }/> 
       <SideBar listentoClick={isToggled} /> 
       <LandingPage /> 
       <Selection/> 
       <ParallaxSection Background={icecafe} msg={"work"}msg1={"with us"}/> 
       <About Title1={"Let's talk"} Title2={"ABOUT US"}  p={About_p } img1={our_cafe_1} img2={our_cafe_2}  />
       <ParallaxSection Background={banana_split}  msg={"Check our"}msg1={"MENU"}/> 
       <About Title1={"We Are"} Title2={"SEARCHING"}  p={Searching_p } img1={we_are_searching_1} img2={we_are_searching_2} />
       <Footer/>
    </div>
  );
}

export default App;
