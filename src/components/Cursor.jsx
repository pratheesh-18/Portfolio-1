import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      {/* Glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          fixed
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          blur-xl
          opacity-40
          pointer-events-none
          z-[9999]
        "
      />

      {/* Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="
          fixed
          w-2
          h-2
          bg-white
          rounded-full
          pointer-events-none
          z-[10000]
        "
      />
    </>
  );
}