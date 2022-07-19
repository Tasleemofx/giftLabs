import React from "react";
import Footer from "../Components/Footer"
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import Mission from "../Components/Mission";
import Nav from "../Components/Nav"

const Services=()=>{

    return (
        <div>
            <Nav Home="Home" Products="Products" About="About" Services="Services"/>
            
            <Mission/>
            <Info
                p1=" Getting the best gift for that special person requires in depth knowledge
            of the occassion,
            understanding of the individuals or groups involved, and an understanding 
            of the perfect timing of delivery. This is an art we have perfected at 
            Giftlabs."
                p2=" We combine all of these with the art of perfect gift wrapping 
               and delivery, making all of this a stress-free, user first task."
                p3="Patronise us today and enjoy our express delivery of super amzing gift items
            embellished in perfection."/>
            <Hero
                heading="The best gifts to capture your feelings and thoughts"
                p2="We lead the way with no problems whatsoever."
                p3="With deliveries so fast you wish you didn't place your order so early."
                banner="bnr" />
            <Footer  Products="Products" About="About" Services="Services"/>
        </div>
    )
}

export default Services