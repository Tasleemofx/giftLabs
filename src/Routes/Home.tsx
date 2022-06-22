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
       <section >
        <SignIn />
        <SignUp />
          
        </section>
        <Info />
      <Footer Products="Products" About="About" Services="Services"/>
    </div>
  )
}

export default Home