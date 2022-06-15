
import Home from './Routes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Product from './Routes/Product';
import About from './Routes/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Product" element={<Product/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
