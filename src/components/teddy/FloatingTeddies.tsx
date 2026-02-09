import { useEffect, useState } from "react";

interface TeddyItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  emoji: string;
}

let teddyId = 0;

const EMOJIS = ["🧸", "🐾", "💕", "🎀", "💗", "🧸", "🐻", "💝"];

const FloatingTeddies = () => {
  const [items, setItems] = useState<TeddyItem[]>([]);

  useEffect(() => {
    const initial: TeddyItem[] = Array.from({ length: 20 }, () => ({
      id: teddyId++,
      x: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 12,
      opacity: 0.15 + Math.random() * 0.25,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setItems(initial);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            bottom: "-5%",
            fontSize: item.size,
            opacity: item.opacity,
            animation: `teddyFloat ${item.duration}s ${item.delay}s linear infinite`,
          }}
        >
          {item.emoji}
        </div>
      ))}
      <style>{`
        @keyframes teddyFloat {
          0% { transform: translateY(0) rotate(0deg) scale(0.8); opacity: 0; }
          10% { opacity: 1; transform: translateY(-10vh) rotate(15deg) scale(1); }
          50% { transform: translateY(-55vh) rotate(-10deg) scale(1.05); }
          90% { opacity: 1; }
          100% { transform: translateY(-115vh) rotate(20deg) scale(0.9); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingTeddies;
