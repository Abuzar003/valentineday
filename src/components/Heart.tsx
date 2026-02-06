import { useEffect, useState } from "react";

const Heart = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
    >
      <div
        style={{
          transform: pulse ? "scale(1)" : "scale(0)",
          transition: "transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            filter: "drop-shadow(0 0 20px hsla(340, 80%, 65%, 0.6)) drop-shadow(0 0 40px hsla(340, 80%, 60%, 0.3))",
            animation: "heartbeat 2s ease-in-out infinite",
          }}
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heartGrad)"
          />
          <defs>
            <linearGradient id="heartGrad" x1="2" y1="3" x2="22" y2="21">
              <stop offset="0%" stopColor="hsl(340, 80%, 75%)" />
              <stop offset="50%" stopColor="hsl(350, 85%, 65%)" />
              <stop offset="100%" stopColor="hsl(330, 70%, 70%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Heart;
