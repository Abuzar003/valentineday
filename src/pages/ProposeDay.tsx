import { useState, useCallback, useRef, useEffect } from "react";
import FloatingHearts from "@/components/propose/FloatingHearts";
import ProposalPoem from "@/components/propose/ProposalPoem";
import CelebrationScreen from "@/components/propose/CelebrationScreen";
import BackgroundMusic from "@/components/propose/BackgroundMusic";

const INITIAL_POEM = {
  title: "For You, My Love 💕",
  lines: [
    "In a world of billions, my heart chose you,",
    "Every moment with you feels like a dream come true.",
    "Your smile lights up my darkest days,",
    "Your love sets my soul ablaze.",
    "So here I stand, with heart in hand…",
  ],
};

const CONVINCING_POEMS = [
  {
    title: "Wait… Don't Go! 🥺",
    lines: [
      "You really want to say no to this face?",
      "My heart is breaking all over the place!",
      "Just give love a chance, let your walls come down,",
      "I promise to never let you frown.",
    ],
  },
  {
    title: "Pretty Please? 🌹",
    lines: [
      "Roses are red, violets are blue,",
      "There's no one on earth quite like you.",
      "My love is patient, my love is true,",
      "All I'm asking is… me and you?",
    ],
  },
  {
    title: "One More Try… 💗",
    lines: [
      "The stars aligned the day we met,",
      "A moment I will never forget.",
      "Don't let this chance just slip away,",
      "Say yes, and make my day today!",
    ],
  },
  {
    title: "Last Chance! 😭",
    lines: [
      "I'll write you poems every single day,",
      "I'll love you in every possible way.",
      "My heart beats only for your name,",
      "Without you, life won't be the same.",
    ],
  },
];

const ProposeDay = () => {
  const [accepted, setAccepted] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const [noPos, setNoPos] = useState<{ top: string; left: string } | null>(null);
  const [poem, setPoem] = useState(INITIAL_POEM);
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = useCallback(() => {
    const top = Math.random() * 70 + 10;
    const left = Math.random() * 70 + 10;
    setNoPos({ top: `${top}%`, left: `${left}%` });
    setNoAttempts((prev) => {
      const next = prev + 1;
      setPoem(CONVINCING_POEMS[Math.min(next - 1, CONVINCING_POEMS.length - 1)]);
      return next;
    });
  }, []);

  const handleYes = useCallback(() => {
    setAccepted(true);
  }, []);

  const noScale = Math.max(0.5, 1 - noAttempts * 0.1);

  if (accepted) {
    return <CelebrationScreen />;
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden select-none flex flex-col items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg, hsl(330, 60%, 18%) 0%, hsl(280, 40%, 20%) 40%, hsl(340, 50%, 25%) 70%, hsl(20, 60%, 22%) 100%)",
      }}
    >
      <BackgroundMusic />
      <FloatingHearts />

      <div className="relative z-10 max-w-xl w-full flex flex-col items-center gap-8">
        <ProposalPoem title={poem.title} lines={poem.lines} />

        <h2
          className="text-center"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
            color: "hsl(340, 80%, 80%)",
            textShadow: "0 0 20px hsla(340, 80%, 70%, 0.4)",
          }}
        >
          Will you be mine? 💍
        </h2>

        <div className="flex gap-6 items-center mt-4">
          <button
            onClick={handleYes}
            className="relative z-20 px-10 py-4 rounded-full font-bold text-lg cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1.5rem",
              background: "linear-gradient(135deg, hsl(340, 80%, 60%), hsl(350, 90%, 65%))",
              color: "hsl(0, 0%, 100%)",
              boxShadow:
                "0 0 30px hsla(340, 80%, 60%, 0.5), 0 4px 15px hsla(0, 0%, 0%, 0.3)",
              border: "2px solid hsla(340, 80%, 80%, 0.4)",
            }}
          >
            YES 💖
          </button>

          <button
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            onClick={moveNoButton}
            className="px-8 py-3 rounded-full font-bold cursor-pointer transition-all duration-500"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: `${1.3 * noScale}rem`,
              background: "linear-gradient(135deg, hsl(0, 0%, 30%), hsl(0, 0%, 40%))",
              color: "hsl(0, 0%, 70%)",
              boxShadow: "0 2px 10px hsla(0, 0%, 0%, 0.3)",
              border: "1px solid hsla(0, 0%, 50%, 0.3)",
              transform: `scale(${noScale})`,
              position: noPos ? "fixed" : "relative",
              top: noPos?.top,
              left: noPos?.left,
              zIndex: 50,
            }}
          >
            No 😢
          </button>
        </div>

        {noAttempts > 0 && (
          <p
            className="text-center animate-fade-in"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1rem",
              color: "hsla(0, 0%, 100%, 0.4)",
            }}
          >
            That button seems to have a mind of its own… 😏
          </p>
        )}
      </div>
    </div>
  );
};

export default ProposeDay;
