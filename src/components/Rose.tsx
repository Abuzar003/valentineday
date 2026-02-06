import { useEffect, useState } from "react";

interface RoseProps {
  x: number;
  y: number;
  color: string;
  onRemove: () => void;
}

const Rose = ({ x, y, color, onRemove }: RoseProps) => {
  const [phase, setPhase] = useState<"growing" | "blooming" | "fading">("growing");

  useEffect(() => {
    const bloomTimer = setTimeout(() => setPhase("blooming"), 100);
    const fadeTimer = setTimeout(() => setPhase("fading"), 4000);
    const removeTimer = setTimeout(onRemove, 5500);
    return () => {
      clearTimeout(bloomTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onRemove]);

  const isActive = phase !== "growing";
  const isFading = phase === "fading";

  // Parse hue from HSL color for variations
  const hueMatch = color.match(/hsl\((\d+)/);
  const baseHue = hueMatch ? parseInt(hueMatch[1]) : 340;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -100%)",
        opacity: isFading ? 0 : 1,
        transition: "opacity 1.5s ease-out",
      }}
    >
      {/* Stem */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 3,
          height: isActive ? 80 : 0,
          background: `linear-gradient(to top, hsl(120, 40%, 25%), hsl(120, 50%, 35%))`,
          transform: "translateX(-50%)",
          transformOrigin: "bottom center",
          transition: "height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
          borderRadius: 2,
        }}
      />

      {/* Left leaf */}
      <div
        style={{
          position: "absolute",
          bottom: 25,
          left: "50%",
          width: 18,
          height: 10,
          background: `hsl(130, 45%, 35%)`,
          borderRadius: "0 80% 0 80%",
          transform: `translateX(-100%) rotate(${isActive ? -30 : -90}deg)`,
          transformOrigin: "right center",
          transition: "transform 0.8s 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: isActive ? 1 : 0,
        }}
      />

      {/* Right leaf */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          width: 18,
          height: 10,
          background: `hsl(130, 45%, 38%)`,
          borderRadius: "80% 0 80% 0",
          transform: `rotate(${isActive ? 30 : 90}deg)`,
          transformOrigin: "left center",
          transition: "transform 0.8s 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          opacity: isActive ? 1 : 0,
        }}
      />

      {/* Flower head */}
      <div
        style={{
          position: "absolute",
          bottom: isActive ? 75 : 0,
          left: "50%",
          transform: `translate(-50%, 50%) scale(${isActive ? 1 : 0})`,
          transition: "all 1.4s 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Outer petals (5) */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (360 / 5) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const px = Math.cos(rad) * 14;
          const py = Math.sin(rad) * 14;
          return (
            <div
              key={`outer-${i}`}
              style={{
                position: "absolute",
                width: 20,
                height: 26,
                background: `radial-gradient(ellipse at 50% 70%, hsl(${baseHue}, 75%, 80%), hsl(${baseHue}, 70%, 70%))`,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                left: px - 10,
                top: py - 13,
                transform: `rotate(${angle + 90}deg) scale(${isActive ? 1 : 0})`,
                transition: `transform 0.6s ${1.0 + i * 0.1}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                boxShadow: `inset 0 -4px 8px hsl(${baseHue}, 60%, 60%), 0 0 12px hsla(${baseHue}, 70%, 75%, 0.4)`,
              }}
            />
          );
        })}

        {/* Inner petals (5, smaller, rotated) */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (360 / 5) * i - 90 + 36;
          const rad = (angle * Math.PI) / 180;
          const px = Math.cos(rad) * 8;
          const py = Math.sin(rad) * 8;
          return (
            <div
              key={`inner-${i}`}
              style={{
                position: "absolute",
                width: 14,
                height: 18,
                background: `radial-gradient(ellipse at 50% 70%, hsl(${baseHue}, 80%, 85%), hsl(${baseHue}, 75%, 75%))`,
                borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                left: px - 7,
                top: py - 9,
                transform: `rotate(${angle + 90}deg) scale(${isActive ? 1 : 0})`,
                transition: `transform 0.5s ${1.3 + i * 0.08}s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                boxShadow: `inset 0 -3px 6px hsl(${baseHue}, 65%, 65%)`,
              }}
            />
          );
        })}

        {/* Center pistil */}
        <div
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            background: `radial-gradient(circle, hsl(${baseHue + 30}, 60%, 85%), hsl(${baseHue + 20}, 50%, 70%))`,
            borderRadius: "50%",
            left: -5,
            top: -5,
            transform: `scale(${isActive ? 1 : 0})`,
            transition: "transform 0.4s 1.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: `0 0 8px hsla(${baseHue}, 70%, 80%, 0.6)`,
          }}
        />
      </div>
    </div>
  );
};

export default Rose;
