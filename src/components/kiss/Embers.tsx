import { useMemo } from "react";

const Embers = () => {
  const embers = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        delay: Math.random() * 10,
        duration: 6 + Math.random() * 8,
        size: 2 + Math.random() * 3,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {embers.map((e) => (
        <div
          key={e.id}
          className="absolute rounded-full"
          style={{
            left: `${e.left}%`,
            bottom: "0%",
            width: e.size,
            height: e.size,
            background: "radial-gradient(circle, hsla(30, 100%, 60%, 0.9), hsla(15, 100%, 40%, 0) 70%)",
            boxShadow: "0 0 6px hsla(30, 100%, 50%, 0.5)",
            animation: `emberRise ${e.duration}s ease-out ${e.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes emberRise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.9; }
          50% { transform: translateY(-40vh) translateX(${Math.random() > 0.5 ? '' : '-'}15px); opacity: 0.6; }
          100% { transform: translateY(-90vh) translateX(${Math.random() > 0.5 ? '' : '-'}30px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Embers;
