import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
  import Home from './Home/Home';
  import Navbar from './Navbar/Navbar'
  
 
  
  
  function App() {
    return (
      <div>
        <Router>
        <Navbar />
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route   path="/detail/:imdbID" element={<Detail/>}/>
          
        </Routes>
        <Footer/>
        </Router>
      </div>
    );
  }
  export default App;