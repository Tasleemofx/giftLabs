import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


const Home = () => {
  return (
    <div>
      <Nav About="About" Products="Products" Services="Services"/>
      <Footer About="About" Products="Products" Services="Services"/>
    </div>
  )
}

export default Home