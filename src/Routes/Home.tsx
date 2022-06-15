import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import React from "react";

const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home