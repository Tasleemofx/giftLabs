import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

interface Paragraphs{
  p1: string,
  p2: string,
  p3: string,
}
const Info = ({p1, p2, p3}: Paragraphs) => {
  return (
    <div className="info">
      <h1 className='al'><FaQuoteLeft/></h1>
    <section className=" d-flex ai-center">
          
          <p className="infop">
            
           {p1}
            </p>
            <p className="infop">
              {p2}
          </p>
          <p className="infop">
            {p3}
          </p>
          
          
        </section>
        <h1 className="ar"><FaQuoteRight/></h1>
        <div className="d-flex ai-center">
        <img src="images/ceo.jpg" className="ceo" alt="ceo" />
        <p>Salman Grites</p>
        <h4>CEO giftlabs</h4>
        </div>
      </div>
  )
}

export default Info