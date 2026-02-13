import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import InkDrop from "@/components/valentine/InkDrop";
import LetterSection from "@/components/valentine/LetterSection";
import InkDivider from "@/components/valentine/InkDivider";
import FoldedNote from "@/components/valentine/FoldedNote";

const prose: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
  lineHeight: 2.2,
  color: "#1C1C1C",
  fontStyle: "italic",
};

const shayari: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 2.4vw, 1.12rem)",
  lineHeight: 2.2,
  color: "#5C0A14",
  fontStyle: "italic",
  textAlign: "center",
};

const promise: React.CSSProperties = {
  fontFamily: "'EB Garamond', 'Cormorant Garamond', Georgia, serif",
  fontSize: "clamp(1rem, 2.4vw, 1.12rem)",
  lineHeight: 2.2,
  color: "#0D1B2A",
  textAlign: "center",
};

const ValentineDay = () => {
  const [showContent, setShowContent] = useState(false);
  const onInkComplete = useCallback(() => setShowContent(true), []);

  return (
    <div
      className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden select-none"
      style={{ background: "#FFFDF9" }}
    >
      {!showContent && <InkDrop onComplete={onInkComplete} />}

      {showContent && (
        <div className="flex flex-col items-center px-4 py-20 gap-0">

          {/* Title */}
          <LetterSection>
            <h1
              className="text-center animate-fade-in"
              style={{
                fontFamily: "'Great Vibes', 'Pinyon Script', cursive",
                fontSize: "clamp(2rem, 7vw, 3.5rem)",
                color: "#1C1C1C",
                letterSpacing: "0.02em",
                lineHeight: 1.4,
              }}
            >
              Happy Valentine's Day, Iqra.
            </h1>
          </LetterSection>

          <InkDivider />

          {/* Section 1 — What She Is */}
          <LetterSection delay={200}>
            <div className="space-y-6">
              <p className="text-center" style={prose}>
                I don't know how to explain you to people who haven't felt you. So I stopped trying. You are not something I describe. You are something that happened to me. Like weather. Like gravity. Like the moment you realize you've been holding your breath for years and someone finally told you — it's okay. Breathe now.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                You are my favorite kind of chaos. The kind that makes everything else make sense.
              </p>
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 2 — The Dream Confession */}
          <LetterSection delay={100}>
            <div className="space-y-6">
              <p className="text-center" style={{ ...prose, color: "#0A0A0A", fontStyle: "normal" }}>
                I need to tell you something I've never told anyone.
              </p>
              <p className="text-center" style={prose}>
                There are nights I find you in my dreams — laughing, safe, close. And sometimes in those dreams, something threatens that. Something comes between us or pulls you away. And Iqra — my chest doesn't just ache. It seizes. A sharp, physical, real pain. Like my body forgot it was dreaming and decided to feel the loss anyway.
              </p>
              <p className="text-center" style={prose}>
                I wake up and my hand is reaching. For a second I don't know where I am. And then I remember — you're real. You exist. You're somewhere in this world right now. And that realization — that you are real and you are mine — is the best feeling I have ever had at 3am.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                That's how I know, Iqra. My body loves you without asking my permission. What am I supposed to do with that except love you with everything I have?
              </p>
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 3 — I See You */}
          <LetterSection delay={100}>
            <div className="space-y-6">
              <p className="text-center" style={prose}>
                I see you. I need you to know that. I see every single thing you do. Every small act of love you think goes unnoticed. Every time you swallowed your pride for peace. Every time you stayed when leaving was easier. Every message typed with care. Every time you chose me — quietly, without announcement. I see it all.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                You love loudly in the most silent ways, Iqra. And I notice. Every single time. I notice.
              </p>
              <p className="text-center mt-6" style={shayari}>
                Tu jo karta hai khamoshi mein, woh shor se zyada bolti hai. Teri har choti si koshish ne mujhe teri taraf kheechi hai — aur main rukna nahi chahta.
              </p>
              <p className="text-center" style={{ ...prose, fontSize: "clamp(0.8rem, 1.6vw, 0.88rem)", color: "hsla(30, 10%, 45%, 0.7)" }}>
                What you do in silence speaks louder than any noise. Your every small effort has pulled me toward you — and I don't want to stop.
              </p>
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 4 — Shayaris */}
          <LetterSection delay={100}>
            <div className="space-y-10">
              {[
                "Tujhe dekha toh jaana sanam, pyaar hota hai deewana sanam. Teri aankhon mein kho jaata hoon main, yeh dil chahta hai bas tera sanam.",
                "Woh jo tum ho, woh jo main hoon, dono mein kuch ajeeb si kahani hai. Na main poora hoon tere bina, na tu adhoori hai — par phir bhi tere bina yeh zindagi sooni sooni lagti hai.",
                "Dard bhi teri yaad mein meetha lagta hai, intezaar bhi tera, ibadat lagta hai. Dur hoke bhi teri zulf ki khushbu aati hai — yeh kya hai Iqra, yeh kya ho gaya hai mujhe?",
                "Main woh nahi jo alfaaz mein aaun, tu woh nahi jo bayaan ho sakey. Hum woh hain jo khamoshi mein baat kar letey hain — aur yahi humari sabse khoobsoorat zubaan hai.",
              ].map((text, i) => (
                <div key={i}>
                  <p style={shayari}>{text}</p>
                  {i < 3 && (
                    <div className="flex justify-center mt-6">
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "hsla(30, 15%, 40%, 0.3)" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </LetterSection>

          <InkDivider />

          {/* Folded Note */}
          <FoldedNote />

          <InkDivider />

          {/* Section 5 — Two Idiots in Love */}
          <LetterSection delay={100}>
            <div className="space-y-6">
              <p className="text-center" style={{ ...prose, fontStyle: "normal" }}>
                Can I tell you something that makes me smile every single time?
              </p>
              <p className="text-center" style={prose}>
                We're both a little stupid. You know it. I know it. We overthink, we under-explain, we get confused by our own feelings sometimes. We are, by all technical definitions, two absolute idiots.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                And somehow — somehow — these two idiots found each other. And nothing has made more sense since.
              </p>
              <p className="text-center" style={prose}>
                I wouldn't trade your particular brand of stupid for anyone else's wisdom. You are my favorite mistake that turned out to be the best thing that ever happened to me.
              </p>
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 6 — Promises */}
          <LetterSection delay={100}>
            <div className="space-y-6">
              <p className="text-center" style={{ ...promise, fontStyle: "italic" }}>
                On this Valentine's Day I want to make you promises. Not the kind that sound good. The kind I intend to keep.
              </p>
              {[
                "I promise to always — always — notice your efforts. Every single one. Even the ones you think I missed. Especially those.",
                "I promise that the day I hold you, I will hold you like someone who waited. Who counted days. Who never stopped choosing you. Because that is exactly what I am.",
                "I promise to love your mind before your face, your soul before your presence, your peace before my desires. Always.",
                "I promise that when you are tired, I will be your rest. When you are lost, I will not give you directions — I will walk with you until we find it together.",
                "I promise to marry you not as a destination but as a beginning. The first page of the longest, most beautiful story either of us will ever live.",
                "I promise that fifty years from now, when someone asks me what love is — I will simply say your name.",
              ].map((text, i) => (
                <p key={i} className="text-center" style={promise}>{text}</p>
              ))}
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 7 — Marriage Promise */}
          <LetterSection delay={200}>
            <div className="space-y-6">
              <p className="text-center" style={{ ...prose, fontStyle: "normal", fontSize: "clamp(1.3rem, 3vw, 1.5rem)", color: "#0A0A0A" }}>
                Iqra.
              </p>
              <p className="text-center" style={{ ...prose, fontStyle: "normal", fontSize: "clamp(1.2rem, 2.8vw, 1.4rem)", color: "#0A0A0A" }}>
                Soon.
              </p>
              <p className="text-center" style={prose}>
                That word carries everything. Every prayer I've whispered at night. Every future I've imagined. Every version of tomorrow I've pictured — you are in all of them. Every single one.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                I am going to marry you. Not because the world expects it. Not because it's the next step. But because I have never been more certain of anything in my entire life than I am of you.
              </p>
              <p className="text-center mt-6" style={shayari}>
                Teri aankhon mein jo khwaab hain, unhe main apni zindagi se poora karoonga. Tera haath jo mere haath mein aayega — woh rishta main kabhi nahi todne doonga. Yeh waada hai. Yeh ibadat hai. Yeh meri zindagi ka maqsad hai.
              </p>
              <p className="text-center" style={{ ...prose, fontSize: "clamp(0.8rem, 1.6vw, 0.88rem)", color: "hsla(30, 10%, 45%, 0.7)" }}>
                The dreams in your eyes — I will fulfill them with my life. The hand that will find mine — that bond I will never let break. This is a promise. This is a prayer. This is the purpose of my life.
              </p>
            </div>
          </LetterSection>

          <InkDivider />

          {/* Section 8 — Final Poem */}
          <LetterSection delay={200}>
            <div className="space-y-6">
              <p className="text-center" style={{ ...prose, color: "#0A0A0A" }}>
                You are not my better half. You are my favorite whole. The person I became when I stopped pretending I was already complete.
              </p>
              <p className="text-center" style={prose}>
                You are Tuesday mornings and 2am thoughts. You are the reason I believe in things I cannot see. You are every answered prayer that came in a shape I didn't expect but needed more than I knew.
              </p>
              <p className="text-center" style={{ ...prose, color: "#0A0A0A", fontSize: "clamp(1.1rem, 2.8vw, 1.25rem)" }}>
                Stupid, beautiful, extraordinary you. My Iqra. My home. My Valentine. My forever.
              </p>
              <p className="text-center mt-4" style={{ ...prose, color: "#1C1C1C" }}>
                Happy Valentine's Day. Every one from now until the last one — all of them are yours.
              </p>
            </div>
          </LetterSection>

          {/* Signature */}
          <div className="text-center mt-16 mb-4">
            <p
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                color: "#0A0A0A",
                lineHeight: 1.8,
              }}
            >
              — Tumhara. Hamesha. Poori tarah.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)",
                color: "hsla(30, 10%, 40%, 0.6)",
                fontStyle: "italic",
                marginTop: "0.5rem",
              }}
            >
              Yours. Always. Completely.
            </p>
          </div>

          {/* Closing ink dot */}
          <div className="flex justify-center mt-8 mb-4">
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#1C1C1C",
                opacity: 0.4,
              }}
            />
          </div>

          {/* Rings */}
          <div className="flex justify-center mt-8 mb-8">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <circle cx="22" cy="15" r="12" stroke="hsla(30, 20%, 40%, 0.3)" strokeWidth="1" fill="none" />
              <circle cx="38" cy="15" r="12" stroke="hsla(30, 20%, 40%, 0.3)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          {/* Date */}
          <p
            className="text-center mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.85rem)",
              color: "hsla(30, 10%, 50%, 0.5)",
            }}
          >
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          {/* Navigation */}
          <div className="flex gap-6 mb-8">
            <Link
              to="/kiss"
              className="transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                color: "hsla(30, 10%, 40%, 0.5)",
                textDecoration: "none",
                fontStyle: "italic",
              }}
            >
              ← Kiss Day
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=EB+Garamond:ital@0;1&family=Great+Vibes&display=swap');
      `}</style>
    </div>
  );
};

export default ValentineDay;
