import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/landing";

import "./App.css";
import ParticlesBackground from "./components/Particles";
import Cursor from "./components/Cursor";
import SocialSidebar from "./components/SocialSidebar";
import RaceLoader from "./components/RaceLoader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-slate-100 min-h-screen">
      <AnimatePresence mode="wait">
        {loading && (
          <RaceLoader key="race-loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Cursor />
          <ParticlesBackground />
          <SocialSidebar />
          <Home />
        </motion.div>
      )}
    </div>
  );
}

export default App;
