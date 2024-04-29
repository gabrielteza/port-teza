import "./App.css";
import Header from "./components/header/Header";
import Infos from "./components/infos/Infos";
import ParticlesComponent from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
        <ParticlesComponent id="particles"/>
        <Header />
        <Infos />
    </div>
  );
}

export default App;
