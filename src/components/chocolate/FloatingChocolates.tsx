import { useEffect, useState } from "react";

interface ChocItem {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  emoji: string;
}

let itemId = 0;

const EMOJIS = ["🍫", "🤎", "🍬", "🧁", "💝", "🫖"];

const FloatingChocolates = () => {
  const [items, setItems] = useState<ChocItem[]>([]);

  useEffect(() => {
    const initial: ChocItem[] = Array.from({ length: 18 }, () => ({
      id: itemId++,
      x: Math.random() * 100,
      size: 14 + Math.random() * 16,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 12,
      opacity: 0.12 + Math.random() * 0.18,
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
            animation: `chocFloat ${item.duration}s ${item.delay}s linear infinite`,
          }}
        >
          {item.emoji}
        </div>
      ))}

      <style>{`
        @keyframes chocFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingChocolates;
