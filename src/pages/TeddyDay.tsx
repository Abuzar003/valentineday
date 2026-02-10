import { useState } from "react";
import { Link } from "react-router-dom";
import FloatingTeddies from "@/components/teddy/FloatingTeddies";
import TeddyMusic from "@/components/teddy/TeddyMusic";
import iqraTeddy from "@/assets/iqra-teddy.png";
import abuzarTeddy from "@/assets/abuzar-teddy.png";

const POEM_LINES = [
  "Soft like a teddy, warm like a hug,",
  "You're my comfort, my heart, my love bug.",
  "In your arms, the world feels right,",
  "My cuddly bear, my guiding light.",
  "Two teddy bears, one beating heart—",
  "Nothing in this world can keep us apart. 🧸💕",
];

const TeddyDay = () => {
  const [iqraHearts, setIqraHearts] = useState<number[]>([]);
  const [abuzarHearts, setAbuzarHearts] = useState<number[]>([]);

  const popHearts = (setter: React.Dispatch<React.SetStateAction<number[]>>) => {
    const id = Date.now();
    setter((prev) => [...prev, id]);
    setTimeout(() => setter((prev) => prev.filter((h) => h !== id)), 1200);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none flex flex-col items-center px-4 py-10"
      style={{
        background:
          "linear-gradient(160deg, hsl(30, 30%, 90%) 0%, hsl(350, 40%, 90%) 35%, hsl(25, 35%, 88%) 65%, hsl(340, 30%, 92%) 100%)",
      }}
    >
      <TeddyMusic />
      <FloatingTeddies />

      {/* Title */}
      <div className="relative z-10 text-center animate-fade-in" style={{ fontSize: "clamp(3.5rem, 10vw, 5rem)", marginBottom: "0.25rem" }}>
        🧸
      </div>
      <h1
        className="relative z-10 text-center animate-fade-in"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(1.8rem, 6vw, 3rem)",
          color: "hsl(25, 45%, 35%)",
          textShadow: "0 0 20px hsla(25, 40%, 50%, 0.2)",
          marginBottom: "0.3rem",
        }}
      >
        Happy Teddy Day, Iqra! 🧸💕
      </h1>
      <p
        className="relative z-10 text-center animate-fade-in max-w-md"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
          color: "hsla(25, 30%, 40%, 0.7)",
          marginBottom: "2rem",
        }}
      >
        Because every cuddle is better with you ✨
      </p>

      {/* Teddy Images */}
      <div className="relative z-10 flex flex-col items-center gap-4 mb-8 animate-fade-in">
        {/* Heart string connecting images */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Iqra's image — larger & prominent */}
          <div className="flex flex-col items-center" onClick={() => popHearts(setIqraHearts)}>
            <div
              className="relative cursor-pointer transition-transform duration-300 hover:rotate-2"
              style={{
                padding: "10px",
                background: "hsla(0, 0%, 100%, 0.85)",
                borderRadius: "16px",
                boxShadow:
                  "0 8px 30px hsla(350, 40%, 50%, 0.2), 0 2px 8px hsla(0, 0%, 0%, 0.08)",
                border: "3px solid hsla(350, 60%, 75%, 0.5)",
                animation: "wobble 3s ease-in-out infinite",
              }}
            >
              <img
                src={iqraTeddy}
                alt="Iqra in teddy bear outfit"
                className="rounded-xl object-cover"
                style={{
                  width: "clamp(200px, 45vw, 300px)",
                  height: "clamp(260px, 55vw, 380px)",
                  filter: "brightness(1.03) saturate(1.1)",
                }}
              />
              {/* Ribbon bow */}
              <div className="absolute -top-3 -right-3 text-2xl" style={{ animation: "wobble 2.5s ease-in-out infinite 0.5s" }}>🎀</div>
              {/* Pop hearts */}
              {iqraHearts.map((id) => (
                <span key={id} className="absolute text-2xl" style={{ top: "40%", left: "50%", animation: "popHeart 1.2s ease-out forwards" }}>
                  💖
                </span>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.2rem",
                color: "hsl(350, 50%, 45%)",
                marginTop: "0.6rem",
                textShadow: "0 0 10px hsla(350, 50%, 50%, 0.15)",
              }}
            >
              My Teddy 🧸
            </p>
          </div>

          {/* Heart string */}
          <div className="hidden sm:flex flex-col items-center gap-1 text-lg" style={{ color: "hsl(350, 60%, 65%)", opacity: 0.6 }}>
            {"💕".split("").map((_, i) => (
              <span key={i} style={{ animation: `pulse 2s ease-in-out ${i * 0.3}s infinite` }}>💕</span>
            ))}
          </div>

          {/* Abuzar's image — smaller */}
          <div className="flex flex-col items-center" onClick={() => popHearts(setAbuzarHearts)}>
            <div
              className="relative cursor-pointer transition-transform duration-300 hover:-rotate-2"
              style={{
                padding: "8px",
                background: "hsla(0, 0%, 100%, 0.8)",
                borderRadius: "14px",
                boxShadow:
                  "0 6px 24px hsla(30, 30%, 40%, 0.15), 0 2px 6px hsla(0, 0%, 0%, 0.06)",
                border: "2px solid hsla(30, 40%, 70%, 0.4)",
                animation: "wobble 3s ease-in-out infinite 1s",
              }}
            >
              <img
                src={abuzarTeddy}
                alt="Abuzar in teddy bear outfit"
                className="rounded-xl object-cover"
                style={{
                  width: "clamp(150px, 32vw, 210px)",
                  height: "clamp(195px, 40vw, 270px)",
                  filter: "brightness(1.03) saturate(1.05)",
                }}
              />
              {abuzarHearts.map((id) => (
                <span key={id} className="absolute text-xl" style={{ top: "40%", left: "50%", animation: "popHeart 1.2s ease-out forwards" }}>
                  💖
                </span>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "1.05rem",
                color: "hsl(25, 40%, 40%)",
                marginTop: "0.5rem",
              }}
            >
              Your Teddy 🧸
            </p>
          </div>
        </div>

        {/* Quote below images */}
        <p
          className="text-center mt-4 animate-fade-in"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "hsl(350, 40%, 50%)",
            opacity: 0.8,
          }}
        >
          "Two teddy bears, one heart 💕"
        </p>
      </div>

      {/* Poem Card */}
      <div
        className="relative z-10 max-w-lg w-full rounded-2xl p-8 animate-fade-in"
        style={{
          background: "hsla(0, 0%, 100%, 0.6)",
          backdropFilter: "blur(14px)",
          border: "1px solid hsla(350, 50%, 70%, 0.3)",
          boxShadow: "0 10px 40px hsla(350, 30%, 50%, 0.12), inset 0 1px 0 hsla(0, 0%, 100%, 0.5)",
        }}
      >
        {POEM_LINES.map((line, i) => (
          <p
            key={i}
            className="text-center leading-relaxed"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "hsl(25, 35%, 30%)",
              marginBottom: i < POEM_LINES.length - 1 ? "0.5rem" : 0,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-10 mt-10 flex gap-6">
        <Link
          to="/chocolate"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(25, 40%, 40%, 0.6)",
            textDecoration: "none",
          }}
        >
          ← Chocolate Day
        </Link>
        <Link
          to="/promise"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(25, 40%, 40%, 0.6)",
            textDecoration: "none",
          }}
        >
          Promise Day 💍 →
        </Link>
      </div>

      <style>{`
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(1.5deg) scale(1.02); }
          75% { transform: rotate(-1.5deg) scale(1.02); }
        }
        @keyframes popHeart {
          0% { transform: translate(-50%, 0) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -80px) scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TeddyDay;
