// src/components/Particles.jsx
export default function ParticlesBackground() {
  const particles = Array.from({ length: 80 }); // Number of particles

  return (
    <div className="particles-container">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // Random size between 2px - 6px
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 100}px`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${8 + Math.random() * 12}s`, // Random animation duration
              animationDelay: `${Math.random() * 5}s`, // Random delay for each particle
            }}
          />
        );
      })}
    </div>
  );
}
