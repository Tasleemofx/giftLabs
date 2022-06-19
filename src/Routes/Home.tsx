import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import Info from "../Components/Info";




const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <main className="d-flex ai-center jc-center">
        <section className="banner">
            <h1>The best gifts for the best people</h1>
              <p>Professional, affectionate, love?</p>
              <p>Whatever the occassion, we have a gift to match it</p>
              <a href="#" className="btn"> Get Started</a>
        </section>
       
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