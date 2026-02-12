import { useMemo } from "react";

const PETAL_COLORS = [
  "hsla(0, 100%, 27%, 0.8)",
  "hsla(0, 72%, 42%, 0.7)",
  "hsla(348, 72%, 40%, 0.75)",
  "hsla(350, 80%, 30%, 0.65)",
  "hsla(345, 90%, 20%, 0.6)",
];

const DarkRosePetals = () => {
  const petals = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 110 - 5,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 14,
        size: 10 + Math.random() * 16,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        swayAmount: 30 + Math.random() * 60,
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
            height: p.size * 0.75,
            backgroundColor: p.color,
            borderRadius: "50% 0 50% 50%",
            filter: "blur(0.5px)",
            boxShadow: `0 0 8px ${p.color}, 0 0 20px hsla(0, 80%, 20%, 0.3)`,
            animation: `darkPetalFall ${p.duration}s ease-in-out ${p.delay}s infinite`,
            "--sway": `${p.swayAmount}px`,
            "--rot": `${p.rotation}deg`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes darkPetalFall {
          0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
          5% { opacity: 0.9; }
          25% { transform: translateY(25vh) translateX(var(--sway)) rotate(90deg); }
          50% { transform: translateY(50vh) translateX(calc(var(--sway) * -0.5)) rotate(180deg); }
          75% { transform: translateY(75vh) translateX(var(--sway)) rotate(270deg); }
          95% { opacity: 0.7; }
          100% { transform: translateY(105vh) translateX(calc(var(--sway) * -0.3)) rotate(var(--rot)); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default DarkRosePetals;
