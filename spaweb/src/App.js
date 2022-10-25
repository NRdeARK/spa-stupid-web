import "./App.css";
import Navbar from './components/navbar'
import Home  from './pages/home'
import About from './pages/about'
import Login from './pages/adminLogin'
import { BrowserRouter as Router,  Routes ,Route  } from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/adminloginonly4321234' element={<Login/>}/>
      </Routes>
    </Router>
        
      
    </div>
  );
}

export default App;
