import logo from './logo.svg';
import './App.css';
import Homepage from './components/Hompage/Homepage';
import Nav from './components/Navbarr/Navbarr';
import Footer from './components/Footer/Footer';
import Cartpage from './components/Cartpage/Cartpage';
import {BrowserRouter as Router,Route,Routes,withRouter,} from "react-router-dom";

function App() {
  return (
<Router>

  <div className="App">

    <Nav></Nav>

    
        <Routes>
          <Route path="/" element={<Homepage />} />
    

          <Route path="/cart" element={<Cartpage />} />
        </Routes>
    
    <Footer></Footer>

  </div>
</Router>

  );
}

export default App;
