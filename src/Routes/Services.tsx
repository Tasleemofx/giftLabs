import React from "react";
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

const Services=()=>{

    return (
        <div>
            <Nav Home="Home" Products="Products" About="About" Services="Services"/>
            <Footer  Products="Products" About="About" Services="Services"/>
        </div>
    )
}

export default Services