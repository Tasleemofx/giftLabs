import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Hero from "../Components/Hero";
import Nav from '../Components/Nav'
import "../Styles/About.css";

const About = () => {
  return (
    <div>
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
        <Info />
        < Hero 
        heading="The best gifts that capture your feelings and thoughts"
        p2="Leading the way with no problems"
        p3="Deliveries so fast you wish you didn't place your order so early"
        banner="bnr"/>
       
      <Footer  Products="Products" About="About" Services="Services"/>
    </div>
  )
}

export default About