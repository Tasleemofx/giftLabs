import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Info from "../Components/Info";
import Jumbotron from "../Components/Jumbotron";


const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <main className="d-flex ai-center jc-center">
        <Jumbotron />
        <a href="#" className="btn"> Get Started</a>       
      </main>
       <section >
        <SignIn />
        <SignUp />
          
        </section>
        <Info />
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home