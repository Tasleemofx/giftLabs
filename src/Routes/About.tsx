import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Hero from "../Components/Hero";
import Nav from '../Components/Nav'
import "../Styles/About.css";
import Plans from '../Components/Plans';

const About = () => {
  return (
    <div>
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
        <Plans/>
        <Info 
        p1="Amazing gifts take a lot of thought, it requires an understanding
        of the proposed reciepient and what would make a lot of meaning to them.
        We are experienced in curating it however you want it.
        Nurture your relationships today and you will be glad you did."
        p2="our gifts include a card which could conver whatever message you want,
        Let us help you to do the work"
        p3=" Try us today."/>
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