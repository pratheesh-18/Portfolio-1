// src/App.jsx
import Home from "./components/landing";

import "./App.css";
import ParticlesBackground from "./components/Particles";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div>
      <Cursor/>
      <ParticlesBackground />
      <Home />
    </div>
  );
}

export default App;
