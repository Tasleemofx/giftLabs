import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Info from "../Components/Info";
import Hero from "../Components/Hero";


const Home = () => {
  return (
    <div>
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
      <main className="d-flex ai-center jc-center">
        <Hero 
        heading="The best gifts for the best people"
        p2="Professional, affectionate, romantic?"
        p3="Whatever the occassion, we have a gift to match it"
        banner="banner"/>
        <a href="#" className="btn"> Get Started</a>       
      </main>
   
        <SignIn />
        <SignUp />
          
        
        <Info 
        p1=" Getting the best gift for that special person requires in depth knowledge
            of the occassion,
            understanding of the individuals or groups involved, and an understanding 
            of the perfect timing of delivery. This is an art we have perfected at 
            Giftlabs."
        p2=" We combine all of these with the art of perfect gift wrapping 
               and delivery, making all of this a stress-free, user first task."
        p3="Patronise us today and enjoy our express delivery of super amzing gift items
            embellished in perfection."/>
      <Footer Products="Products" About="About" Services="Services"/>
    </div>
  )
}

export default Home