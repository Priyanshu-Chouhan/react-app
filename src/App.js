//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter , Routes ,Route} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboar";
import About from './About';


function App() {
  return (
    
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path= "/login" element={<Login />} />
    <Route path= "/signup" element={<Signup />} />
    <Route path= "/dashboard" element={<Dashboard />} />
    <Route path= "/about" element={<About />} />
   </Routes>
    </BrowserRouter>
  );
}

export default App;
