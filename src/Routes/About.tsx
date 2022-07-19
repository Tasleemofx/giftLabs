import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Hero from "../Components/Hero";
import Nav from '../Components/Nav'
import "../Styles/About.css";
import Plans from '../Components/Plans';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Mission from '../Components/Mission';

const About = () => {
  return (
    <div className="About">
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
        <Plans/>
        <div className="signs">
          <SignIn />
          <SignUp />
        </div>
        <Mission/>
        <Info 
        p1="Amazing gifts take a lot of thought, it requires an understanding
        of the proposed reciepient and what would make a lot of meaning to them.
        We are experienced in curating your gifts exactly how you want it.
        Nurture your relationships today and you will be glad you did."
        p2="Our gifts include a card which could convey whatever message you want,
        Let us help you to do the work"
        p3=" Try us today."/>
        
        <Hero 
        heading="The best gifts to capture your feelings and thoughts"
        p2="We lead the way with no problems whatsoever."
        p3="With deliveries so fast you wish you didn't place your order so early."
        banner="bnr"/>
     
       
      <Footer  Products="Products" About="About" Services="Services"/>
    </div>
  )
}

export default About