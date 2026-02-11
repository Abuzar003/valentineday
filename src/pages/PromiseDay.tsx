import { Link } from "react-router-dom";
import GoldenParticles from "@/components/promise/GoldenParticles";
import PromiseMusic from "@/components/promise/PromiseMusic";
import PromiseCard from "@/components/promise/PromiseCard";
import SealAnimation from "@/components/promise/SealAnimation";

const PROMISES = [
  {
    icon: "😊",
    promise: "I promise to always make you smile, even on the hardest days",
    detail: "Because your smile is my greatest treasure — I'll be your reason to laugh when the world feels heavy.",
  },
  {
    icon: "💎",
    promise: "I promise to cherish every moment we share together",
    detail: "Every second with you is a memory I'll hold forever — I'll never take a single one for granted.",
  },
  {
    icon: "🏠",
    promise: "I promise to be your safe place, your comfort, your home",
    detail: "Whenever life storms rage around you, you'll always find shelter in my arms.",
  },
  {
    icon: "⭐",
    promise: "I promise to support your dreams as if they were my own",
    detail: "Your ambitions are my ambitions — I'll be your biggest cheerleader, always.",
  },
  {
    icon: "💕",
    promise: "I promise to love you more with each passing day",
    detail: "Every sunrise brings a deeper love — what I feel today is only the beginning.",
  },
  {
    icon: "🤝",
    promise: "I promise to never let you face the world alone",
    detail: "Hand in hand, heart to heart — whatever comes, we face it together.",
  },
  {
    icon: "🔐",
    promise: "I promise to be honest, loyal, and true — always",
    detail: "My heart is an open book that only you can read — no secrets, no walls, just pure love.",
  },
];

const PromiseDay = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none flex flex-col items-center px-4 py-12"
      style={{
        background:
          "linear-gradient(160deg, hsl(270, 40%, 10%) 0%, hsl(260, 35%, 15%) 30%, hsl(280, 30%, 12%) 60%, hsl(250, 40%, 14%) 100%)",
      }}
    >
      <PromiseMusic />
      <GoldenParticles />

      {/* Ornamental top divider */}
      <div
        className="relative z-10 text-center mb-2"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          color: "hsla(43, 60%, 60%, 0.5)",
          letterSpacing: "0.3em",
        }}
      >
        ✦ ─── ✦ ─── ✦
      </div>

      {/* Title */}
      <h1
        className="relative z-10 text-center animate-fade-in"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(2rem, 7vw, 3.5rem)",
          color: "hsl(43, 60%, 75%)",
          textShadow: "0 0 30px hsla(43, 60%, 60%, 0.3), 0 0 60px hsla(43, 60%, 50%, 0.15)",
          marginBottom: "0.5rem",
        }}
      >
        My Promises to You, Iqra 💍
      </h1>

      <p
        className="relative z-10 text-center animate-fade-in max-w-md mb-10"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
          color: "hsla(270, 20%, 75%, 0.6)",
        }}
      >
        Words written on the heart never fade ∞
      </p>

      {/* Promise Cards */}
      <div className="relative z-10 flex flex-col gap-5 w-full max-w-xl mb-10">
        {PROMISES.map((p, i) => (
          <PromiseCard key={i} icon={p.icon} promise={p.promise} detail={p.detail} index={i} />
        ))}
      </div>

      {/* Final Promise */}
      <div
        className="relative z-10 max-w-lg w-full text-center rounded-2xl p-8 mb-6"
        style={{
          animation: `promiseSlideIn 0.7s ease-out ${PROMISES.length * 0.35}s both`,
          background: "hsla(270, 30%, 15%, 0.7)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsla(43, 70%, 55%, 0.3)",
          boxShadow: "0 0 50px hsla(43, 70%, 55%, 0.12), inset 0 1px 0 hsla(43, 60%, 70%, 0.15)",
        }}
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1.3rem, 3.5vw, 1.7rem)",
            color: "hsl(43, 60%, 80%)",
            lineHeight: 1.6,
            textShadow: "0 0 20px hsla(43, 60%, 60%, 0.25)",
          }}
        >
          Above all, I promise to love you unconditionally — today, tomorrow, and always 💕
        </p>
      </div>

      {/* Seal */}
      <div className="relative z-10">
        <SealAnimation />
      </div>

      {/* Signature */}
      <div
        className="relative z-10 text-center mt-10 mb-6"
        style={{
          animation: `promiseSlideIn 0.7s ease-out ${(PROMISES.length + 1) * 0.35}s both`,
        }}
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "hsla(43, 50%, 70%, 0.7)",
          }}
        >
          Forever yours, Abuzar 💕
        </p>
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.85rem, 2vw, 1rem)",
            color: "hsla(270, 20%, 60%, 0.5)",
            marginTop: "0.5rem",
          }}
        >
          {today}
        </p>
      </div>

      {/* Divider */}
      <div
        className="relative z-10 text-center mb-6"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          color: "hsla(43, 60%, 60%, 0.4)",
          letterSpacing: "0.3em",
        }}
      >
        ✦ ─── ✦ ─── ✦
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex gap-6">
        <Link
          to="/teddy"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(43, 40%, 60%, 0.5)",
            textDecoration: "none",
          }}
        >
          ← Teddy Day
        </Link>
        <Link
          to="/hug"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(43, 40%, 60%, 0.5)",
            textDecoration: "none",
          }}
        >
          Hug Day 🌸 →
        </Link>
      </div>

      <style>{`
        @keyframes promiseSlideIn {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PromiseDay;
