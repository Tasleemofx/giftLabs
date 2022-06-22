import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai";
import "../Styles/Footer.css";

interface Navbar{
  About: string,
  Products: string,
  Services: string
}
const Footer = ({ About, Products, Services}: Navbar) => {
  return (
    <footer>
            
            <section>
                <Link to="/">
                  GiftLabs
                </Link> 
                <Link to="/About">
                    {About}
                </Link>
                <Link to="/Products">
                    {Products}
                </Link>
                <Link to="/Services">
                    {Services}
                </Link>
        </section>
        <section>
          <p>Solutions we create</p>
          <ul>
            <li>Deliveries</li>
            <li>Gift items</li>
            <li>Gift wrap</li>
          </ul>
        </section>
        <section>
          <p> Company </p>
          <ul>
            <li>Contact</li>
            <li>+2347030020010</li>
            <li>abc@giftlabs.com</li>
            <span className="socials" >
              <li className="fb"> <FaFacebookF /></li>
              <li className="wa"> < FaWhatsapp /></li>
              <li className="yt"> <AiFillYoutube /></li>
            </span>
          </ul>
        </section>
    </footer>
  )
}

export default Footer