import { Link } from "react-router-dom";
import DarkRosePetals from "@/components/kiss/DarkRosePetals";
import SmokeMist from "@/components/kiss/SmokeMist";
import Embers from "@/components/kiss/Embers";
import DarkSection from "@/components/kiss/DarkSection";
import KissMusic from "@/components/kiss/KissMusic";

const prose: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
  lineHeight: 2,
  color: "hsl(350, 30%, 90%)",
  fontStyle: "italic",
};

const whisper: React.CSSProperties = {
  ...prose,
  fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
  color: "hsl(350, 20%, 80%)",
};

const divider = (
  <div className="flex justify-center my-6">
    <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, hsl(0, 80%, 30%), transparent)" }} />
  </div>
);

const KissDay = () => (
  <div
    className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none"
    style={{
      background: "linear-gradient(180deg, hsl(300, 10%, 3%) 0%, hsl(340, 100%, 4%) 30%, hsl(340, 80%, 5%) 60%, hsl(300, 10%, 3%) 100%)",
    }}
  >
    {/* Drip effect at top */}
    <div
      className="absolute top-0 inset-x-0 h-16 z-[3]"
      style={{
        background: "linear-gradient(to bottom, hsla(0, 80%, 15%, 0.6), transparent)",
        maskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 64'%3E%3Cpath d='M0,0 L1200,0 L1200,20 Q1100,25 1050,40 Q1000,55 950,30 Q900,20 800,25 Q700,35 650,50 Q600,60 550,35 Q500,20 400,30 Q300,45 250,55 Q200,40 150,25 Q100,15 0,20 Z' fill='white'/%3E%3C/svg%3E\")",
        WebkitMaskImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 64'%3E%3Cpath d='M0,0 L1200,0 L1200,20 Q1100,25 1050,40 Q1000,55 950,30 Q900,20 800,25 Q700,35 650,50 Q600,60 550,35 Q500,20 400,30 Q300,45 250,55 Q200,40 150,25 Q100,15 0,20 Z' fill='white'/%3E%3C/svg%3E\")",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
      }}
    />

    {/* Spotlight */}
    <div
      className="fixed inset-0 pointer-events-none z-[0]"
      style={{
        background: "radial-gradient(ellipse 40% 50% at 50% 40%, hsla(350, 60%, 12%, 0.35), transparent 70%)",
        animation: "spotlightBreathe 6s ease-in-out infinite alternate",
      }}
    />

    {/* Heartbeat pulse overlay */}
    <div
      className="fixed inset-0 pointer-events-none z-[0]"
      style={{
        background: "radial-gradient(circle at 50% 50%, hsla(0, 80%, 20%, 0.08), transparent 60%)",
        animation: "pagePulse 3s ease-in-out infinite",
      }}
    />

    <DarkRosePetals />
    <SmokeMist />
    <Embers />
    <KissMusic />

    <div className="flex flex-col items-center px-4 py-24 gap-0">

      {/* Section 1 — Title */}
      <DarkSection>
        <h1
          className="text-center"
          style={{
            fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
            fontSize: "clamp(2rem, 7vw, 3.5rem)",
            color: "hsl(350, 30%, 85%)",
            textShadow: "0 0 40px hsla(0, 80%, 25%, 0.5), 0 0 80px hsla(0, 60%, 15%, 0.3)",
            letterSpacing: "0.02em",
          }}
        >
          Kiss Day, Iqra...
        </h1>
        <p
          className="text-center mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
            color: "hsla(350, 20%, 65%, 0.7)",
            fontStyle: "italic",
          }}
        >
          Some words aren't meant to be read. They're meant to be felt.
        </p>
      </DarkSection>

      {/* Section 2 — Dark Compliments */}
      {[
        "The way you exist, Iqra — it's unfair. Genuinely unfair. You don't just walk into a room. You change its temperature.",
        "There is something about the way you look when you're unaware anyone is watching. Something that completely undid me. Still does.",
        "Your lips were designed to be a problem. The kind of problem I would walk into knowingly, repeatedly, without a single regret.",
        "You are the kind of beautiful that makes a person forget what they were about to say. Mid-sentence. Every time.",
        "I have thought about your smile more than I have thought about anything necessary. It is deeply inconvenient and I wouldn't change it.",
        "The way you speak — low sometimes, then sudden warmth — it does something to the air around you. Makes it harder to breathe in the best possible way.",
        "You don't know what you do, do you. That's the most dangerous thing about you, Iqra. You are devastating without even trying.",
      ].map((text, i) => (
        <DarkSection key={i} delay={i * 100}>
          <p className="text-center" style={whisper}>{text}</p>
          {divider}
        </DarkSection>
      ))}

      {/* Section 3 — The Distance */}
      <DarkSection delay={200}>
        <div className="space-y-8">
          <p className="text-center" style={prose}>
            And the cruelest thing about today — the absolute cruelest — is that you are not here.
          </p>
          <p className="text-center" style={prose}>
            Kiss Day. And there is this distance between us that has no business existing. Miles that have no right being there. Space that should not be allowed.
          </p>
          <p className="text-center" style={prose}>
            Do you know what it is like to know exactly what you want and have nothing between you and it except geography. It is maddening, Iqra. Quietly, completely maddening.
          </p>
          <p className="text-center" style={prose}>
            I think about it more than I should. The moment this distance finally collapses. When there is nothing left between us — no screen, no miles, no waiting.
          </p>
          <p
            className="text-center mt-8"
            style={{
              ...prose,
              fontSize: "clamp(1.1rem, 2.8vw, 1.3rem)",
              color: "hsl(350, 40%, 75%)",
              textShadow: "0 0 20px hsla(0, 60%, 30%, 0.3)",
            }}
          >
            Just you. Just me. Just the end of all this distance.
          </p>
        </div>
      </DarkSection>

      {/* Section 4 — The Kiss That Hasn't Happened Yet */}
      <DarkSection delay={300}>
        <div className="space-y-8">
          <p className="text-center" style={whisper}>
            I have imagined it, I'll admit that. The moment I finally see you after all of this waiting.
          </p>
          <p className="text-center" style={whisper}>
            I won't rush it. That's the thing. After all this time, after all this distance — I won't rush a single second of it.
          </p>
          <p className="text-center" style={whisper}>
            I'll look at you first. Just look. Because you deserve to be seen before anything else.
          </p>
          <p className="text-center" style={{
            ...prose,
            color: "hsl(350, 25%, 70%)",
          }}>
            And then — slowly — the way things that matter should always happen — slowly.
          </p>
          <p className="text-center" style={prose}>
            One kiss, Iqra. One kiss that carries every night I spent missing you. Every morning I woke up and you weren't there. Every time I typed your name just to feel something real.
          </p>
          <p className="text-center" style={{
            ...prose,
            fontSize: "clamp(1.05rem, 2.6vw, 1.2rem)",
            color: "hsl(350, 35%, 80%)",
          }}>
            It won't just be a kiss. It will be the end of waiting. The beginning of everything.
          </p>
          <p className="text-center" style={{
            ...prose,
            fontSize: "clamp(1.1rem, 2.8vw, 1.3rem)",
            color: "hsl(0, 50%, 70%)",
            textShadow: "0 0 30px hsla(0, 80%, 30%, 0.4)",
          }}>
            And I promise you this — when that moment comes, the whole world is going to feel it.
          </p>
          {/* Heartbeat */}
          <div className="flex justify-center pt-4">
            <div
              className="rounded-full"
              style={{
                width: 10,
                height: 10,
                background: "hsla(0, 80%, 40%, 0.7)",
                animation: "slowHeartbeat 3s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </DarkSection>

      {/* Section 5 — Seductive Closing */}
      <DarkSection delay={400}>
        <div className="space-y-8">
          <p className="text-center" style={whisper}>
            So tonight, on Kiss Day, I am not sending you a kiss through a screen.
          </p>
          <p className="text-center" style={whisper}>
            What I have for you is not something emojis were built to carry.
          </p>
          <p className="text-center" style={prose}>
            Instead I am sending you this — the promise of a kiss that hasn't happened yet but already means everything.
          </p>
          <p className="text-center" style={{
            ...prose,
            color: "hsl(350, 30%, 75%)",
          }}>
            A kiss that is waiting for you. Patient. Certain. Inevitable.
          </p>
          <p
            className="text-center mt-6"
            style={{
              fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              color: "hsl(350, 40%, 70%)",
              textShadow: "0 0 30px hsla(0, 70%, 25%, 0.4)",
              lineHeight: 1.8,
            }}
          >
            Soon, Iqra.
          </p>
          <p
            className="text-center"
            style={{
              fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
              fontSize: "clamp(1.3rem, 4vw, 2rem)",
              color: "hsl(350, 35%, 60%)",
            }}
          >
            Very soon.
          </p>
          <p className="text-center mt-4" style={{
            ...whisper,
            color: "hsla(350, 20%, 60%, 0.7)",
          }}>
            And when that day comes — you'll know I meant every word of this.
          </p>
        </div>
      </DarkSection>

      {/* Signature */}
      <div className="relative z-10 text-center mt-16 mb-8">
        <p
          style={{
            fontFamily: "'Pinyon Script', 'Great Vibes', cursive",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "hsl(0, 40%, 45%)",
            textShadow: "0 0 20px hsla(0, 60%, 25%, 0.3)",
          }}
        >
          Yours in every way that matters — Abuzar 🥀
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
            color: "hsla(350, 15%, 40%, 0.5)",
            marginTop: "0.5rem",
          }}
        >
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex gap-6 mb-8">
        <Link
          to="/hug"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "hsla(350, 25%, 50%, 0.5)",
            textDecoration: "none",
          }}
        >
          ← Hug Day
        </Link>
      </div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Pinyon+Script&family=Great+Vibes&display=swap');
      @keyframes spotlightBreathe {
        0% { opacity: 0.6; transform: scale(1); }
        100% { opacity: 1; transform: scale(1.1); }
      }
      @keyframes pagePulse {
        0%, 100% { opacity: 0.3; }
        15% { opacity: 0.8; }
        30% { opacity: 0.3; }
        45% { opacity: 0.6; }
        60% { opacity: 0.3; }
      }
      @keyframes slowHeartbeat {
        0%, 100% { transform: scale(1); opacity: 0.4; }
        15% { transform: scale(2); opacity: 0.9; }
        30% { transform: scale(1); opacity: 0.4; }
        45% { transform: scale(1.5); opacity: 0.7; }
        60% { transform: scale(1); opacity: 0.4; }
      }
    `}</style>
  </div>
);

export default KissDay;
