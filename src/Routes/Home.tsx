import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";
import "../Styles/Home.css";
import flower from "../images/tulips-home.jpg";


const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <main>
        <section className="banner">
          <h3>The best gifts for the best people</h3>
          <div className="details">
            <p>Professional, affectionate, love?</p>
            <p>Whatever the occassion, we have a gift to match it</p>
          </div>
          {/* <div >
            <img src={flower} className="imagediv" alt="flower" />
          </div> */}
        </section>
      </main>
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home