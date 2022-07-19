import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Hero from "../Components/Hero";
import Nav from '../Components/Nav'
import "../Styles/About.css";
import Plans from '../Components/Plans';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';

const About = () => {
  return (
    <div className="About">
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
        <Plans/>
        <SignIn />
        <SignUp />
        <section className="mission">
          <h3>Our Mission</h3>
          <ul>
            <li className="m-list df-row">
              <h4>We prioritise our customers</h4>
              <p>
                We believe in putting our customers first and so we prioritise their needs
                everytime. It is not just about saying it, we walk the talk everytime. Only a person
                understands why they think their friend, lover or colleague would love a particular gift.
                Our job is to make it happen, as long as it is legal, no questions asked.
              </p>
            </li>
          <li className="m-list df-row">
              <h4>We take great care</h4>
              <p>
                We handle all persons with care and consideration. Every small detail is essential when curating
                the perfect gift. A red ribbon is different from a blue one. We therefore take great care of the 
                small details.
              </p>
            </li>
          <li className="m-list df-row">
              <h4>We prioritise our customers</h4>
              <p>
                We believe in putting our customers first and so we prioritise their needs
                everytime. It is not just about saying it, we walk the talk everytime. Only a person
                understands why they think their friend, lover or colleague would love a particular gift.
                Our job is to make it happen, as long as it is legal, no questions asked.
              </p>
            </li>
          <li className="m-list df-row">
              <h4>We are environment friendly</h4>
              <p>
                There is only one planet earth. We should treat it right and leave it better than we met it
                so that future generations can live a better life. We make sure that all of our products are
                "environment-friendly" and biodegradable. Bioplastics are damaging sea habitats every year
                and so we avoid them.
              </p>
            </li>
          <li className="m-list df-row">
              <h4>We cultivate curiosity</h4>
              <p>
                Curiosity makes us brighter, kinder and quicker. Our mantra is listen, observe and try to perfect.
                Learn and keep learning. Think big, but start small. Be nimble and courageous. Move at pace, generate 
                momentum, help us build a future that's still unfolding.
              </p>
            </li>
          </ul>
        </section>
        
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