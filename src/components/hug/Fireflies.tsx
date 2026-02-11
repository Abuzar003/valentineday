import { useMemo } from "react";

const Fireflies = () => {
  const flies = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        bottom: 5 + Math.random() * 60,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 5,
        size: 3 + Math.random() * 4,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {flies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            bottom: `${f.bottom}%`,
            width: f.size,
            height: f.size,
            background: "radial-gradient(circle, hsla(45, 100%, 85%, 0.9), hsla(45, 100%, 70%, 0) 70%)",
            boxShadow: "0 0 8px hsla(45, 100%, 80%, 0.6)",
            animation: `fireflyFloat ${f.duration}s ease-in-out ${f.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes fireflyFloat {
          0% { transform: translateY(0) translateX(0); opacity: 0.2; }
          30% { opacity: 0.9; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.5; }
          70% { opacity: 1; }
          100% { transform: translateY(-50px) translateX(-20px); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;
