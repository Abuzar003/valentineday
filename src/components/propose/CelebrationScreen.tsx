import { useEffect, useState } from "react";

interface Confetti {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const CONFETTI_COLORS = [
  "hsl(340, 80%, 70%)",
  "hsl(20, 90%, 75%)",
  "hsl(45, 80%, 80%)",
  "hsl(280, 60%, 75%)",
  "hsl(0, 85%, 65%)",
  "hsl(50, 90%, 85%)",
];

const FINAL_POEM = {
  title: "🎉💖",
  lines: [
    "From this moment, my heart is forever yours,",
    "Through every sunrise and every storm that pours.",
    "You are my dream that finally came true,",
    "My world begins and ends with you.",
    "",
    "I promise to love you with all that I am,",
    "To hold your hand through every plan.",
    "Together we'll write the most beautiful story,",
    "A love so deep, eternal in its glory.",
    "",
    "You are my today, my tomorrow, my always,",
    "My love for you will last all of my days. 💍✨",
  ],
};

let confettiId = 0;

const CelebrationScreen = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showPoem, setShowPoem] = useState(false);

  useEffect(() => {
    const pieces: Confetti[] = Array.from({ length: 80 }, () => ({
      id: confettiId++,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 6 + Math.random() * 10,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 1.5,
      rotation: Math.random() * 720,
    }));
    setConfetti(pieces);

    const timer = setTimeout(() => setShowPoem(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, hsl(340, 50%, 15%) 0%, hsl(330, 60%, 20%) 30%, hsl(350, 70%, 25%) 60%, hsl(10, 50%, 18%) 100%)",
      }}
    >
      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {confetti.map((c) => (
          <div
            key={c.id}
            className="absolute"
            style={{
              left: `${c.x}%`,
              top: "-5%",
              width: c.size,
              height: c.size * 1.4,
              backgroundColor: c.color,
              borderRadius: "2px",
              animation: `confettiFall ${c.duration}s ${c.delay}s ease-in forwards`,
              transform: `rotate(${c.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {/* Big hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
              fontSize: 20 + Math.random() * 30,
              animation: `floatUpCelebrate ${4 + Math.random() * 4}s ${i * 0.3}s linear infinite`,
              opacity: 0.6,
            }}
          >
            {["💖", "💕", "❤️", "🌹", "✨", "💗"][i % 6]}
          </div>
        ))}
      </div>

      {/* Poem */}
      {showPoem && (
        <div
          className="relative z-10 max-w-lg w-full text-center p-8 rounded-3xl animate-scale-in"
          style={{
            background: "hsla(340, 30%, 15%, 0.7)",
            backdropFilter: "blur(16px)",
            border: "1px solid hsla(340, 60%, 60%, 0.3)",
            boxShadow:
              "0 0 60px hsla(340, 80%, 50%, 0.3), 0 12px 40px hsla(0, 0%, 0%, 0.4)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(2rem, 6vw, 3rem)",
              color: "hsl(340, 80%, 80%)",
              textShadow: "0 0 30px hsla(340, 80%, 65%, 0.6)",
              marginBottom: "1.5rem",
              animation: "heartbeat 2s ease-in-out infinite",
            }}
          >
            {FINAL_POEM.title}
          </h2>
          {FINAL_POEM.lines.map((line, i) =>
            line === "" ? (
              <br key={i} />
            ) : (
              <p
                key={i}
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  color: "hsla(0, 0%, 100%, 0.9)",
                  marginBottom: "0.3rem",
                  animation: `fadeInLine 0.5s ${0.8 + i * 0.15}s both`,
                }}
              >
                {line}
              </p>
            )
          )}

          <div
            className="mt-8 text-4xl"
            style={{ animation: "heartbeat 2s ease-in-out infinite" }}
          >
            💍
          </div>
        </div>
      )}

      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes floatUpCelebrate {
          0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
            transform: translateY(-20vh) scale(1);
          }
          100% {
            transform: translateY(-120vh) scale(0.3);
            opacity: 0;
          }
        }
        @keyframes fadeInLine {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes animate-scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: animate-scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CelebrationScreen;
