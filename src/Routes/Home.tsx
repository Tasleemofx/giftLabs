import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";



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
        <div className="d-flex ai-center jc-center">
            <h3>Already have an account?</h3>
            <p> Please sign In</p>
            <form className="form d-flex ai-center jc-center">
              <input type="text" placeholder="username"
              />
              <input type="password" placeholder="password"
              />
              <input type="submit" value="LogIn" />
            </form>
          </div>
          <div className="d-flex ai-center jc-center">
            <h3>I don't have an account</h3>
            <p> Please sign Up</p>
            <form className="form d-flex ai-center jc-center">
              <input type="text" placeholder="FullName"
              />
              <input type="date" placeholder="D.O.B"
              />
              <input type="email" placeholder="email" /> 
              <input type="password" placeholder="password"
              />
              <input type="submit" value="SignUp" />
            </form>
          </div>
        </section>
        <section className="info">
          <p>
            Getting the best gifts require in depth knowledge of the occassion,
            understanding of the individuals or groups involved, and an understanding 
            of the perfect timing of delivery. This is an art we have perfected at 
            Giftlabs.
            </p>
            <p>
               We combine all of these with the art of perfect giftwrapping 
               and delivery, making all of this a stress-free, user first task.
          </p>
          <p>
            Patronise us today and enjoy our express delivery of super amzing gift items
            embellished in perfection.
          </p>
        </section>
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home