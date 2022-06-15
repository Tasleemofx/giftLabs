import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"

interface Navbar{
  Home? : string,
  About?: string,
  Products?: string,
  Services?: string
}
const Footer = ({Home, About, Products, Services}: Navbar) => {
  return (
    <footer>
        <section>
            <p>GiftLabs</p>
            <p>Helping you make the best decision on gift items,
                packaging and deliveries since 2000</p>
            <ul>
                <li>{Home}</li>
                <li>{About}</li>
                <li>{Products}</li>
                <li>{Services}</li>
            </ul>
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
              <li> <FaFacebookF /></li>
              <li> < FaWhatsapp /></li>
              <li> <AiFillYoutube /></li>
            </span>
          </ul>
        </section>
    </footer>
  )
}

export default Footer