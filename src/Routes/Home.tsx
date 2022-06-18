import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";



const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <main>
        <section >
          <div className="banner">
            <h1>The best gifts for the best people</h1>
              <p>Professional, affectionate, love?</p>
              <p>Whatever the occassion, we have a gift to match it</p>
              <a href="#" className="btn"> Get Started</a>
          </div>
          
        </section>
      </main>
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home