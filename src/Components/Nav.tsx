import React from "react";
import { FaStream, FaRegTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Nav.css"

interface Navbar{
  Home? : string,
  About?: string,
  Products?: string,
  Services?: string
}

const Nav = ({Home, About, Products, Services}: Navbar) => {
  return (
    <nav>
        <div>
            <Link to="/">
                GiftLabs
            </Link>
        </div>
        <div>
            <FaStream/>
            <ul className="hidden dropdown">
                <FaRegTimesCircle/>
                <li>
                    <Link to="/">
                        {Home}
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                        {About}
                    </Link>
                </li>
                <li>
                    <Link to="/Products">
                        {Products}
                    </Link>
                </li>
                <li>
                    <Link to="/Services">
                        {Services}
                    </Link>
                </li>
            </ul>
        </div>
        <div>
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
        </div>
    </nav>
  )
}

export default Nav