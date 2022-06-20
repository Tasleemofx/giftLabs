import React, {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "../Styles/Nav.css"

interface Navbar{
  Home? : string,
  About?: string,
  Products?: string,
  Services?: string
}

const Nav = ({Home, About, Products, Services}: Navbar) => {

    const [openDropdown, setOpenDropdown] = useState(false)
  return (<>
    <nav>
        
        <div>
            <Link to="/">
                <h2>GiftLabs</h2>
            </Link>
        </div>
        <div className="hidden-lg">
            {!openDropdown ?
                <GiHamburgerMenu  onClick={
                ()=> setOpenDropdown(!openDropdown)
                }/>:
                <AiOutlineClose onClick={
                ()=> setOpenDropdown(!openDropdown)
                }/> }
        </div>
            
        <div className="hidden-mb">
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
    { openDropdown ?
    <div className="dropdown"> 
            <ul className="hidden-lg">
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
        </div>:
            <></> }
    </>
  )
}

export default Nav