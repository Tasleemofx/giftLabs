import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

const Info = () => {
  return (
    <section className="info d-flex ai-center">
          <h1><FaQuoteLeft/></h1>
          <p>
            
            Getting the best gift for that special person requires in depth knowledge
            of the occassion,
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
          <h1><FaQuoteRight/></h1>
          {/* <img src={Stock} alt="gift"/> */}
        </section>
  )
}

export default Info