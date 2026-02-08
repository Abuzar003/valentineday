import { Link } from "react-router-dom";
import FloatingChocolates from "@/components/chocolate/FloatingChocolates";
import ChocolateMusic from "@/components/chocolate/ChocolateMusic";

const POEM_LINES = [
  "You're sweeter than the finest chocolate kiss,",
  "Every moment with you is pure cocoa bliss.",
  "Like truffles wrapped in love so true,",
  "My world tastes better because of you.",
  "So here's a treat, from my heart to yours—",
  "A love as rich as chocolate pours. 🤎",
];

const ChocolateDay = () => {
  return (
    <div
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none flex flex-col items-center px-4 py-12"
      style={{
        background:
          "linear-gradient(160deg, hsl(25, 30%, 12%) 0%, hsl(15, 40%, 16%) 40%, hsl(10, 35%, 20%) 70%, hsl(30, 25%, 14%) 100%)",
      }}
    >
      <ChocolateMusic />
      <FloatingChocolates />

      {/* Chocolate Icon */}
      <div
        className="relative z-10 text-center animate-fade-in"
        style={{ fontSize: "clamp(4rem, 12vw, 6rem)", marginBottom: "0.5rem" }}
      >
        🍫
      </div>

      {/* Title */}
      <h1
        className="relative z-10 text-center animate-fade-in"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(2rem, 7vw, 3.5rem)",
          color: "hsl(30, 60%, 78%)",
          textShadow:
            "0 0 25px hsla(30, 60%, 50%, 0.4), 0 0 50px hsla(30, 60%, 40%, 0.15)",
          letterSpacing: "0.03em",
          marginBottom: "0.5rem",
        }}
      >
        Happy Chocolate Day, Iqra!
      </h1>

      {/* Subtitle */}
      <p
        className="relative z-10 text-center animate-fade-in max-w-md"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
          color: "hsla(30, 40%, 75%, 0.7)",
          marginBottom: "2.5rem",
        }}
      >
        Because every sweet moment is better when shared with you ✨
      </p>

      {/* Poem Card */}
      <div
        className="relative z-10 max-w-lg w-full rounded-2xl p-8 animate-fade-in"
        style={{
          background: "hsla(25, 30%, 18%, 0.7)",
          backdropFilter: "blur(14px)",
          border: "1px solid hsla(30, 50%, 45%, 0.25)",
          boxShadow:
            "0 10px 40px hsla(25, 40%, 10%, 0.5), inset 0 1px 0 hsla(30, 50%, 60%, 0.08)",
        }}
      >
        {POEM_LINES.map((line, i) => (
          <p
            key={i}
            className="text-center leading-relaxed"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
              color: "hsla(30, 30%, 90%, 0.9)",
              marginBottom: i < POEM_LINES.length - 1 ? "0.5rem" : 0,
              animationDelay: `${i * 0.12}s`,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* CTA Section */}
      <div
        className="relative z-10 max-w-md w-full mt-10 rounded-2xl p-8 text-center animate-fade-in"
        style={{
          background: "hsla(30, 35%, 22%, 0.6)",
          backdropFilter: "blur(12px)",
          border: "1px solid hsla(30, 50%, 50%, 0.2)",
          boxShadow: "0 8px 30px hsla(25, 40%, 10%, 0.4)",
        }}
      >
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
            color: "hsl(30, 60%, 78%)",
            marginBottom: "0.3rem",
          }}
        >
          Pick your favorite chocolate treat!
        </p>
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "hsla(30, 40%, 70%, 0.65)",
            marginBottom: "1.8rem",
          }}
        >
          Choose something sweet, just like you 🍫
        </p>

        <a
          href="https://blinkit.com/cn/chocolates/cid/14/963"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full font-bold cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.4rem",
            background:
              "linear-gradient(135deg, hsl(25, 60%, 40%), hsl(15, 70%, 35%), hsl(350, 50%, 45%))",
            color: "hsl(30, 50%, 95%)",
            boxShadow:
              "0 0 25px hsla(25, 60%, 40%, 0.4), 0 4px 15px hsla(0, 0%, 0%, 0.3)",
            border: "1px solid hsla(30, 60%, 60%, 0.3)",
            textDecoration: "none",
          }}
        >
          Choose Your Sweet Treat 🍫
        </a>
      </div>

      {/* Navigation */}
      <div className="relative z-10 mt-10 flex gap-6">
        <Link
          to="/propose"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(30, 50%, 70%, 0.6)",
            textDecoration: "none",
          }}
        >
          ← Propose Day
        </Link>
      </div>
    </div>
  );
};

export default ChocolateDay;
