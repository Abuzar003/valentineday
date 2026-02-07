import { useEffect, useState } from "react";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "heart" | "sparkle" | "petal";
}

let heartId = 0;

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 25 }, () => ({
      id: heartId++,
      x: Math.random() * 100,
      size: 10 + Math.random() * 20,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 10,
      opacity: 0.15 + Math.random() * 0.25,
      type: (["heart", "sparkle", "petal"] as const)[Math.floor(Math.random() * 3)],
    }));
    setHearts(initial);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            bottom: "-5%",
            fontSize: h.size,
            opacity: h.opacity,
            animation: `floatUp ${h.duration}s ${h.delay}s linear infinite`,
          }}
        >
          {h.type === "heart" ? "💕" : h.type === "sparkle" ? "✨" : "🌸"}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
