import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Jumbotron from '../Components/Jumbotron'
import Nav from '../Components/Nav'

const About = () => {
  return (
    <div>
      <Nav Products="Products" Home="Home" Services="Services"/>
        <Info />
        < Jumbotron />
       
      <Footer Home="Home" Products="Products" Services="Services"/>
    </div>
  )
}

export default About