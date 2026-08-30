import React, { useMemo } from "react";

export default function ParticlesBackground() {
  // Memoize white balls generation so properties remain consistent across renders
  const particles = useMemo(() => {
    return Array.from({ length: 90 }).map((_, i) => {
      const size = Math.random() * 5 + 2.5; // Size between 2.5px - 7.5px
      return {
        id: i,
        left: Math.random() * 100,
        bottom: -(Math.random() * 20 + 5),
        size,
        duration: 7 + Math.random() * 14, // 7s - 21s float duration
        delay: Math.random() * 8,
      };
    });
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: `${p.bottom}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
