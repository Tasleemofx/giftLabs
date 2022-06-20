import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai";
import "../Styles/Footer.css";

interface Navbar{
  Home : string,
  About: string,
  Products: string,
  Services: string
}
const Footer = ({Home, About, Products, Services}: Navbar) => {
  return (
    <footer>
        <section>
            <p>
              <Link to="/">
                GiftLabs
              </Link>
            </p>
            <p>Helping you make the best decision on gift items,
                packaging and deliveries since 2000</p>
            
            
             <Link to="/">
                    {Home}
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