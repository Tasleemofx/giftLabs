import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { data } from '../data/data'

const Products = () => {
  return (
    <div>
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
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
      <Footer Products="Products" About="About" Services="Services"/>
    </div>
  )
}

export default Products