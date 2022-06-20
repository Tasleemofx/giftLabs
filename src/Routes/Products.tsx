import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { data } from '../data/data'

const Products = () => {
  return (
    <div>
      <Nav About="About" Home="Home" Services="Services"/>
       <section>
          {
            data.map(({name, img, id})=>{
              return(
                <div key={id}>
                  <img src={img} alt="giftitem"/>
                  <p>{name}</p>
                </div>
              )
            })
          }
        </section>
      <Footer About="About" Home="Home" Services="Services"/>
    </div>
  )
}

export default Products