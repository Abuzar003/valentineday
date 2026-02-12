import { useMemo } from "react";

const SmokeMist = () => {
  const tendrils = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: i * 14 - 5 + Math.random() * 10,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
        width: 120 + Math.random() * 200,
        height: 80 + Math.random() * 120,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {tendrils.map((t) => (
        <div
          key={t.id}
          className="absolute"
          style={{
            left: `${t.left}%`,
            bottom: "-40px",
            width: t.width,
            height: t.height,
            background: "radial-gradient(ellipse at center, hsla(340, 100%, 8%, 0.4), transparent 70%)",
            borderRadius: "50%",
            filter: "blur(30px)",
            animation: `smokeCurl ${t.duration}s ease-in-out ${t.delay}s infinite alternate`,
          }}
        />
      ))}
      {/* Crimson ambient glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background: "linear-gradient(to top, hsla(340, 100%, 5%, 0.6), transparent)",
          pointerEvents: "none",
        }}
      />
      <style>{`
        @keyframes smokeCurl {
          0% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-60px) scale(1.3); opacity: 0.5; }
          100% { transform: translateY(-120px) scale(0.8); opacity: 0.1; }
        }
      `}</style>
    </div>
  );
};

export default SmokeMist;
