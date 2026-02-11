import { useMemo } from "react";

const PETAL_COLORS = [
  "hsla(340, 80%, 80%, 0.8)",
  "hsla(350, 70%, 85%, 0.7)",
  "hsla(330, 60%, 88%, 0.75)",
  "hsla(345, 75%, 82%, 0.65)",
  "hsla(355, 65%, 90%, 0.6)",
];

const SakuraPetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 110 - 5,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 8 + Math.random() * 14,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        swayAmount: 40 + Math.random() * 80,
        rotation: Math.random() * 360,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            width: p.size,
            height: p.size * 0.7,
            backgroundColor: p.color,
            borderRadius: "50% 0 50% 50%",
            filter: "blur(0.5px)",
            boxShadow: `0 0 4px ${p.color}`,
            animation: `sakuraFall ${p.duration}s ease-in-out ${p.delay}s infinite`,
            "--sway": `${p.swayAmount}px`,
            "--rot": `${p.rotation}deg`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes sakuraFall {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% { opacity: 1; }
          25% { transform: translateY(25vh) translateX(var(--sway)) rotate(90deg); }
          50% { transform: translateY(50vh) translateX(calc(var(--sway) * -0.5)) rotate(180deg); }
          75% { transform: translateY(75vh) translateX(var(--sway)) rotate(270deg); }
          95% { opacity: 0.8; }
          100% {
            transform: translateY(105vh) translateX(calc(var(--sway) * -0.3)) rotate(var(--rot));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SakuraPetals;
