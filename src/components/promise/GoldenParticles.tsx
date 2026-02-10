import { useMemo } from "react";

const GoldenParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 2 + Math.random() * 4,
      opacity: 0.2 + Math.random() * 0.5,
      symbol: ["✦", "✧", "·", "💍", "∞"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            fontSize: `${p.size * 3}px`,
            opacity: p.opacity,
            color: "hsl(43, 80%, 65%)",
            textShadow: "0 0 6px hsla(43, 80%, 65%, 0.4)",
            animation: `goldenFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.symbol}
        </span>
      ))}
      <style>{`
        @keyframes goldenFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default GoldenParticles;
