import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <div>
            <Link to="/">
                GiftLabs
            </Link>
        </div>
        <div>
            <Link to="/">
                Home
            </Link>
            <Link to="About">
                About
            </Link>
            <Link to="Product">
                Products
            </Link>
        </div>
    </nav>
  )
}

export default Nav