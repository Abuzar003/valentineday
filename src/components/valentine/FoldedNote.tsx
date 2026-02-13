import { useState } from "react";

const FoldedNote = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 my-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95"
        style={{
          width: open ? "min(90vw, 600px)" : "60px",
          height: open ? "auto" : "60px",
          minHeight: open ? "400px" : "60px",
          borderRadius: open ? "12px" : "4px",
          background: open
            ? "linear-gradient(135deg, #FFFDF9 0%, #FFF8F0 100%)"
            : "#F5F0E8",
          border: "1px solid hsla(30, 20%, 70%, 0.5)",
          boxShadow: open
            ? "0 8px 40px hsla(30, 20%, 30%, 0.15)"
            : "0 2px 10px hsla(30, 20%, 30%, 0.1)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          padding: open ? "32px 28px" : "0",
        }}
      >
        {!open ? (
          <span style={{ fontSize: "1.5rem" }}>📜</span>
        ) : (
          <div
            className="animate-fade-in overflow-y-auto"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#1C1C1C",
              lineHeight: 1.8,
              textAlign: "left",
              maxHeight: "70vh",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                fontWeight: "600",
                color: "#5C0A14",
                marginBottom: "20px",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              Apko kya acha laga tha mere bare mein?
            </p>
            <div style={{ color: "#2C2C2C", lineHeight: 1.9, letterSpacing: "0.01em" }}>
              <p style={{ marginBottom: "16px", fontWeight: "500" }}>Sab kuch. Literally everything.</p>
              <p style={{ marginBottom: "16px" }}>
                Pehli baar jab tumhe dekha, tumhari aankhon ne rokh liya tha. Tumhari aankhon mein jo gehrayi hai, jaise puri kahaani chhipi ho. Jab tum muskurati ho - that genuine, full smile - it's like the whole world lights up. Tumhari hasi mein jo masoomiyat hai, wo mujhe har baar pagal kar deti hai. Tumhare baalon ki wo khushbu, the way they fall on your face, choti choti cheezein jo main notice karta hoon. Tumhari voice - jab tum excited hokar baat karti ho, ya subah ki wo sleepy tone - I could listen to you forever. The way you carry yourself, tumhara grace, tumhara presence - it's magnetic.
              </p>
              <p style={{ marginBottom: "16px" }}>
                But it's so much more than that. Tumhare sochne ka tarika, tumhara perspective on life - it challenges me, inspires me. Tumhari intelligence, the way you analyze things, tumhara curiosity - I love how your mind works. Our conversations, wo 3 AM ki deep talks ya stupid jokes par hasna - everything. Tumhara sense of humor, the way you make me laugh even in the worst moments. Tumhare dreams, tumhare ambitions - how passionate you are about what you believe in. Tum sirf physically attractive nahi ho, mentally you're everything I've ever wanted. You make me think, you make me grow.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Aur emotionally - tum jaise ho waise ho, that's what I love the most. Tumhari kindness, the way you care for everyone around you. Jis tarah tum samajhti ho without me saying anything - that emotional connection is rare. Tumhara patience with me, even when I'm difficult. The way you love - unconditionally, genuinely, deeply. Tumhare saath jo peace milta hai, jo security feel hoti hai - I've never felt this safe with anyone. Tumhari strength during tough times, but also tumhari vulnerability when you trust me with your fears. You're real, you're authentic, and that's the most beautiful thing about you.
              </p>
              <p style={{ marginBottom: "16px" }}>
                Wo chhote chhote moments - jab tum apne nose ko scrunch karti ho while laughing, ya jis tarah tum excited hokar stories sunati ho. The way you play with your hair when you're thinking. These aren't just things I like - yeh sab mujhe tumse aur zyada pyaar karne par majboor kar dete hain.
              </p>
              <p
                style={{
                  marginTop: "20px",
                  fontStyle: "italic",
                  color: "#5C0A14",
                  fontWeight: "500",
                  fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
                  textAlign: "center",
                  paddingTop: "16px",
                  borderTop: "1px solid hsla(30, 20%, 70%, 0.3)",
                }}
              >
                To answer your question - apko kya acha laga tha mere bare mein? Everything. Your face, your mind, your heart, your soul. Physical attraction to emotional connection tak - at every level, tum perfect ho for me. And every single day, I discover something new to fall in love with.
              </p>
              <p
                style={{
                  marginTop: "16px",
                  textAlign: "center",
                  fontSize: "clamp(1.05rem, 2.3vw, 1.2rem)",
                  color: "#5C0A14",
                  fontWeight: "600",
                }}
              >
                Tum bas... tum ho. And that's more than enough. That's everything. 💌
              </p>
            </div>
          </div>
        )}
      </button>
      {!open && (
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.8rem",
            color: "hsla(30, 10%, 50%, 0.6)",
            fontStyle: "italic",
          }}
        >
          tap to unfold
        </p>
      )}
    </div>
  );
};

export default FoldedNote;
