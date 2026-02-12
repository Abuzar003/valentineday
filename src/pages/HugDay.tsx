import { Link } from "react-router-dom";
import SakuraPetals from "@/components/hug/SakuraPetals";
import Fireflies from "@/components/hug/Fireflies";
import SilhouetteScene from "@/components/hug/SilhouetteScene";
import EmotionalSection from "@/components/hug/EmotionalSection";

const proseStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  lineHeight: 2,
  color: "hsl(340, 15%, 25%)",
  fontStyle: "italic",
};

const HugDay = () => (
  <div
    className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none"
    style={{
      background: "linear-gradient(180deg, hsl(340, 30%, 97%) 0%, hsl(340, 40%, 92%) 40%, hsl(40, 50%, 93%) 70%, hsl(340, 35%, 95%) 100%)",
    }}
  >
    <SakuraPetals />
    <Fireflies />

    <div className="flex flex-col items-center px-4 py-16 gap-2">
      {/* Title */}
      <EmotionalSection>
        <h1
          className="text-center"
          style={{
            fontFamily: "'Great Vibes', 'Dancing Script', cursive",
            fontSize: "clamp(2.2rem, 8vw, 4rem)",
            color: "hsl(340, 45%, 55%)",
            textShadow: "0 0 30px hsla(340, 50%, 70%, 0.3)",
            marginBottom: "0.5rem",
          }}
        >
          Happy Hug Day, Iqra 🌸
        </h1>
        <p
          className="text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "hsla(340, 20%, 40%, 0.7)",
            fontStyle: "italic",
          }}
        >
          Some distances are measured not in miles, but in heartbeats...
        </p>
      </EmotionalSection>

      {/* Scene */}
      <SilhouetteScene />

      {/* Section 2 — What She Means */}
      <EmotionalSection delay={200}>
        <p style={proseStyle}>
          You are not just someone I love, Iqra. You are the warmth I search for in every cold morning.
          You are the calm that my restless heart has been looking for since before I even knew your name.
          The world makes sense when you are near. Everything else is just noise.
        </p>
      </EmotionalSection>

      {/* Section 3 — The Dream / Absence */}
      <EmotionalSection delay={300} darker>
        <p style={{ ...proseStyle, color: "hsl(340, 20%, 30%)" }}>
          There are nights I reach for you in my dreams. And I find you there — laughing, close, within reach.
          But then I wake up. And the moment my eyes open, it hits me. Like something heavy placed directly on my chest.
          Not pain exactly. Worse than pain. A hollow, pressing weight. Like breathing through water.
          Like the air forgot how to enter my lungs.
        </p>
        <p style={{ ...proseStyle, color: "hsl(340, 20%, 30%)", marginTop: "1.5rem" }}>
          They call it longing. But longing sounds too gentle. This is something that sits inside my ribs and squeezes.
          This is what your absence feels like, Iqra. A beautiful, aching, unbearable thing.
        </p>
        {/* Heartbeat pulse */}
        <div className="flex justify-center mt-6">
          <div
            className="rounded-full"
            style={{
              width: 12,
              height: 12,
              background: "hsla(340, 60%, 60%, 0.6)",
              animation: "heartbeatPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </EmotionalSection>

      {/* Section 4 — Promise of the Hug */}
      <EmotionalSection delay={300}>
        <p style={proseStyle}>
          But I want you to know something. The hug I am saving for you — it is not just a hug.
          It is every sleepless night folded into one embrace. It is every dream I woke up from,
          compressed into the moment my arms finally find you. It is every time I typed
          &ldquo;I miss you&rdquo; and deleted it because words felt too small.
        </p>
        <p style={{ ...proseStyle, marginTop: "1.5rem" }}>
          When I finally hold you, Iqra — and I will — I will hold you like someone who has been drowning
          and finally found shore. I will hold you like time stopped and I never want it to start again.
        </p>
      </EmotionalSection>

      {/* Section 5 — What Her Hug Does */}
      <EmotionalSection delay={300}>
        <div
          className="rounded-2xl p-8"
          style={{
            background: "linear-gradient(135deg, hsla(40, 60%, 92%, 0.5), hsla(340, 40%, 93%, 0.5))",
            border: "1px solid hsla(340, 40%, 80%, 0.3)",
          }}
        >
          <p style={proseStyle}>
            You want to know what your hug feels like? It feels like every heavy thing I carry just... falls.
            Like my shoulders finally remember they don&apos;t have to be walls. Like I am allowed to be soft again.
            Like the world shrinks down to just this — just you, just warmth, just the sound of my heartbeat
            slowing down because it finally feels safe.
          </p>
          <p style={{ ...proseStyle, marginTop: "1.5rem" }}>
            Your hug doesn&apos;t just hold me, Iqra. It reminds me that I exist. That I matter.
            That someone in this world chose to wrap their arms around me and mean it.
          </p>
        </div>
      </EmotionalSection>

      {/* Section 6 — Closing */}
      <EmotionalSection delay={400}>
        <p style={{ ...proseStyle, textAlign: "center" }}>
          So on this Hug Day, I am not sending you a hug through a screen. I refuse to.
          Because what I have for you cannot travel through WiFi. It needs to be felt. Properly. Completely.
        </p>
        <p
          className="text-center mt-8"
          style={{
            fontFamily: "'Great Vibes', 'Dancing Script', cursive",
            fontSize: "clamp(1.4rem, 4vw, 2rem)",
            color: "hsl(340, 50%, 55%)",
            textShadow: "0 0 20px hsla(340, 50%, 65%, 0.25)",
            lineHeight: 1.8,
          }}
        >
          Soon, Iqra. Very soon.<br />
          Until then, close your eyes. Feel this.<br />
          This is me, across every mile between us,<br />
          wrapping everything I am around everything you are.
        </p>
        <p
          className="text-center mt-6"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "hsl(340, 40%, 65%)",
          }}
        >
          Wait for me. I am already on my way to you. 🌸
        </p>
      </EmotionalSection>

      {/* Signature */}
      <div className="relative z-10 text-center mt-12 mb-8">
        <p
          style={{
            fontFamily: "'Great Vibes', 'Dancing Script', cursive",
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            color: "hsl(340, 35%, 50%)",
          }}
        >
          Yours, always — Abuzar 💕
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
            color: "hsla(340, 20%, 50%, 0.5)",
            marginTop: "0.5rem",
          }}
        >
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex gap-6 mb-8">
        <Link
          to="/promise"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(340, 30%, 55%, 0.6)",
            textDecoration: "none",
          }}
        >
          ← Promise Day
        </Link>
        <Link
          to="/kiss"
          className="transition-all duration-300 hover:scale-105"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "hsla(340, 30%, 55%, 0.6)",
            textDecoration: "none",
          }}
        >
          Kiss Day 🥀 →
        </Link>
      </div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Great+Vibes&display=swap');
      @keyframes heartbeatPulse {
        0%, 100% { transform: scale(1); opacity: 0.5; }
        15% { transform: scale(1.8); opacity: 0.9; }
        30% { transform: scale(1); opacity: 0.5; }
        45% { transform: scale(1.4); opacity: 0.7; }
        60% { transform: scale(1); opacity: 0.5; }
      }
    `}</style>
  </div>
);

export default HugDay;
