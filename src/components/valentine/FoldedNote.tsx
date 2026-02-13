import { useState } from "react";

const FoldedNote = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 my-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95"
        style={{
          width: open ? "280px" : "60px",
          height: open ? "auto" : "60px",
          minHeight: open ? "120px" : "60px",
          borderRadius: open ? "8px" : "4px",
          background: open ? "#FFFDF9" : "#F5F0E8",
          border: "1px solid hsla(30, 20%, 70%, 0.5)",
          boxShadow: open
            ? "0 8px 40px hsla(30, 20%, 30%, 0.15)"
            : "0 2px 10px hsla(30, 20%, 30%, 0.1)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          padding: open ? "24px" : "0",
        }}
      >
        {!open ? (
          <span style={{ fontSize: "1.5rem" }}>📜</span>
        ) : (
          <p
            className="animate-fade-in"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
              color: "#1C1C1C",
              fontStyle: "italic",
              lineHeight: 2,
              textAlign: "center",
            }}
          >
            You once told me you were hard to love.
            <br />
            That was the funniest thing anyone has ever said to me.
            <br />
            <span style={{ color: "#5C0A14", marginTop: "8px", display: "inline-block" }}>
              Loving you is the easiest thing I do. 💌
            </span>
          </p>
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
