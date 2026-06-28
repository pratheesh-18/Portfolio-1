import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lenis from "lenis";

const lenis = new Lenis({
  duration: 2.2, 
  smoothWheel: true,
  wheelMultiplier: 0.8, 
  touchMultiplier: 1.2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
