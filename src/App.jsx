// src/App.jsx
import Home from "./components/landing";

import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import ParticlesBackground from "./components/Particles";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={10}
        outerSize={40}
        color="6,182,212"
        outerAlpha={0.15}
        innerScale={1}
        outerScale={2.5}
        clickables={[
          "a",
          "button",
          ".project-card",
          ".skill-card",
          "input",
          "textarea",
        ]}
      />
      <ParticlesBackground />
      <Home />
    </div>
  );
}

export default App;
