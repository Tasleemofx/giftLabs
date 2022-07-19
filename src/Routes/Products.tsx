import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { data } from '../data/data'
import "../Styles/Products.css";

const Products = () => {
  return (
    <div>
      <Nav Home="Home" Products="Products" About="About" Services="Services"/>
       <section className="products">
          {
            data.map(({name, img, id})=>{
              return(
                <div key={id} className="product">
                  <div>
                    <img src={img} className="product-img" alt="giftitem"/>
                    <h3>{name}</h3>
                  </div>
                  <a href="#" className="btn product-btn"> Buy Item</a>
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