
import Home from './Routes/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import About from './Routes/About';
import Products from './Routes/Products';
import Services from './Routes/Services';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
