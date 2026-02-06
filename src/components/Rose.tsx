import { useEffect, useState } from "react";

interface RoseProps {
  x: number;
  y: number;
  color: string;
  onRemove: () => void;
}

const Rose = ({ x, y, color, onRemove }: RoseProps) => {
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    requestAnimationFrame(() => setScale(1));
    const fadeTimer = setTimeout(() => setOpacity(0), 3000);
    const removeTimer = setTimeout(onRemove, 4200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onRemove]);

  const petalLayers = [
    { size: 18, count: 5, offset: 12, rotation: 0 },
    { size: 14, count: 5, offset: 8, rotation: 36 },
    { size: 10, count: 4, offset: 5, rotation: 20 },
    { size: 6, count: 3, offset: 2, rotation: 30 },
  ];

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.2s ease-out",
      }}
    >
      {petalLayers.map((layer, li) =>
        Array.from({ length: layer.count }).map((_, pi) => {
          const angle = (360 / layer.count) * pi + layer.rotation;
          const rad = (angle * Math.PI) / 180;
          const px = Math.cos(rad) * layer.offset;
          const py = Math.sin(rad) * layer.offset;
          return (
            <div
              key={`${li}-${pi}`}
              className="absolute rounded-full"
              style={{
                width: layer.size,
                height: layer.size * 1.3,
                backgroundColor: color,
                left: px,
                top: py,
                transform: `rotate(${angle}deg)`,
                opacity: 0.7 + li * 0.08,
                filter: `blur(${0.5 + li * 0.3}px)`,
                boxShadow: `0 0 ${6 + li * 2}px ${color}`,
              }}
            />
          );
        })
      )}
      {/* Center */}
      <div
        className="absolute rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: color,
          left: -4,
          top: -4,
          filter: "blur(1px)",
          opacity: 0.9,
        }}
      />
    </div>
  );
};

export default Rose;
