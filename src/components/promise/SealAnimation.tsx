import { useState } from "react";

const SealAnimation = () => {
  const [sealed, setSealed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      {!sealed ? (
        <button
          onClick={() => setSealed(true)}
          className="relative px-10 py-4 rounded-full font-bold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            background: "linear-gradient(135deg, hsl(43, 70%, 50%), hsl(35, 80%, 45%))",
            color: "hsl(270, 20%, 10%)",
            boxShadow: "0 0 30px hsla(43, 70%, 50%, 0.4), 0 4px 15px hsla(0, 0%, 0%, 0.3)",
            border: "2px solid hsla(43, 80%, 70%, 0.5)",
          }}
        >
          Seal These Promises 💍
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          {/* Wax seal */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, hsl(0, 60%, 45%), hsl(0, 50%, 30%))",
              boxShadow: "0 4px 20px hsla(0, 50%, 30%, 0.5), inset 0 2px 4px hsla(0, 0%, 100%, 0.15)",
              animation: "sealStamp 0.6s ease-out",
            }}
          >
            <span style={{ fontSize: "2.5rem", filter: "drop-shadow(0 2px 4px hsla(0,0%,0%,0.3))" }}>💕</span>
          </div>

          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "hsl(43, 50%, 75%)",
              textShadow: "0 0 15px hsla(43, 60%, 60%, 0.3)",
            }}
          >
            Sealed with love, forever yours 💍
          </p>

          {/* Burst hearts */}
          {Array.from({ length: 12 }).map((_, i) => (
            <span
              key={i}
              className="absolute text-lg pointer-events-none"
              style={{
                animation: `burstHeart 1.5s ease-out ${i * 0.08}s forwards`,
                opacity: 0,
                color: ["hsl(340, 70%, 60%)", "hsl(43, 80%, 65%)", "hsl(280, 50%, 70%)"][i % 3],
              }}
            >
              {["💖", "✨", "💍", "💕"][i % 4]}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes sealStamp {
          0% { transform: scale(3) rotate(-30deg); opacity: 0; }
          60% { transform: scale(0.9) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes burstHeart {
          0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
          100% { 
            transform: translate(
              ${Array.from({ length: 12 }).map(() => "0px").join(", ")}
            ) scale(1.5); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
};

export default SealAnimation;
