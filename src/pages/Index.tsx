import { useCallback, useRef, useState } from "react";
import Rose from "@/components/Rose";
import Petal from "@/components/Petal";
import Heart from "@/components/Heart";

const COLORS = [
  "hsl(340, 80%, 80%)",
  "hsl(20, 85%, 82%)",
  "hsl(45, 70%, 88%)",
  "hsl(55, 75%, 80%)",
  "hsl(270, 60%, 82%)",
];

interface RoseData {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface PetalData {
  id: number;
  x: number;
  y: number;
  color: string;
}

let nextId = 0;

const Index = () => {
  const [roses, setRoses] = useState<RoseData[]>([]);
  const [petals, setPetals] = useState<PetalData[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const spawn = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const roseId = nextId++;

    setRoses((prev) => [...prev, { id: roseId, x, y, color }]);

    const petalCount = 6 + Math.floor(Math.random() * 5);
    const newPetals = Array.from({ length: petalCount }, () => ({
      id: nextId++,
      x,
      y,
      color,
    }));
    setPetals((prev) => [...prev, ...newPetals]);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => spawn(e.clientX, e.clientY),
    [spawn]
  );

  const handleTouch = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) spawn(touch.clientX, touch.clientY);
    },
    [spawn]
  );

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onTouchStart={handleTouch}
      className="relative min-h-screen w-full overflow-hidden cursor-pointer select-none"
      style={{
        background: "linear-gradient(135deg, hsl(240, 15%, 12%) 0%, hsl(270, 25%, 15%) 50%, hsl(220, 30%, 10%) 100%)",
      }}
    >
      {/* Hero Text */}
      <h1
        className="absolute top-12 left-0 right-0 text-center z-10 pointer-events-none"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          color: "hsl(340, 80%, 85%)",
          textShadow: "0 0 30px hsla(340, 80%, 70%, 0.5), 0 0 60px hsla(340, 80%, 60%, 0.2)",
          letterSpacing: "0.04em",
        }}
      >
        Happy Rose Day 🌹
      </h1>

      {/* Heart */}
      <Heart />

      {/* Hint */}
      <p
        className="absolute bottom-8 left-0 right-0 text-center z-10 pointer-events-none"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
          color: "hsla(0, 0%, 100%, 0.35)",
        }}
      >
        Tap anywhere to bloom a rose
      </p>

      {/* Roses */}
      {roses.map((r) => (
        <Rose
          key={r.id}
          x={r.x}
          y={r.y}
          color={r.color}
          onRemove={() => setRoses((prev) => prev.filter((rose) => rose.id !== r.id))}
        />
      ))}

      {/* Petals */}
      {petals.map((p) => (
        <Petal
          key={p.id}
          x={p.x}
          y={p.y}
          color={p.color}
          onRemove={() => setPetals((prev) => prev.filter((petal) => petal.id !== p.id))}
        />
      ))}
    </div>
  );
};

export default Index;
