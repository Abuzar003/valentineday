import { useEffect, useState } from "react";

interface PetalProps {
  x: number;
  y: number;
  color: string;
  onRemove: () => void;
}

const Petal = ({ x, y, color, onRemove }: PetalProps) => {
  const [style, setStyle] = useState({
    left: x,
    top: y,
    opacity: 0.8,
    transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
  });

  const dx = (Math.random() - 0.5) * 120;
  const dy = (Math.random() - 0.5) * 120 - 40;
  const rot = (Math.random() - 0.5) * 360;

  useEffect(() => {
    requestAnimationFrame(() => {
      setStyle({
        left: x + dx,
        top: y + dy,
        opacity: 0,
        transform: `translate(-50%, -50%) rotate(${rot}deg) scale(0.3)`,
      });
    });
    const timer = setTimeout(onRemove, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        ...style,
        width: 8 + Math.random() * 6,
        height: 10 + Math.random() * 6,
        backgroundColor: color,
        borderRadius: "50% 50% 50% 0",
        filter: "blur(1px)",
        transition: "all 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
};

export default Petal;
