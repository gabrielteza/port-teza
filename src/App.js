import "./App.css";
import ParticlesComponent from "./components/particle/Particle";
import About from "./pages/about/About";
import Content from "./pages/content-home/content"; // Import com a primeira letra maiúscula
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Content />} /> 
        </Routes> 
        <Routes>
          <Route path="/sobre-mim" element={<About />} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
