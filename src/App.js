
import'./App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import { Routes ,Route } from "react-router-dom";
import Blog from './components/Blog';
import Contact from './components/contact';



function App() {
  return (
    <div className='App' >
     <Navbar />
     <switch>
    <Routes>

      <Route path="/" element={<Home />} />
      
      <Route path="/about" element={<About />} />
      
      <Route path="/project" element={<Project />} />
      <Route path="/blog" element={<Blog />} />
    
      
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </switch>
    </div>
  );
}

export default App;
