import { useState, useEffect } from "react";

const InkDrop = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"drop" | "bloom" | "done">("drop");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("bloom"), 800);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        style={{
          width: phase === "bloom" ? "20px" : "6px",
          height: phase === "bloom" ? "20px" : "6px",
          borderRadius: "50%",
          background: "#1C1C1C",
          opacity: phase === "drop" ? 0 : 1,
          transform: phase === "drop" ? "translateY(-100px)" : "translateY(0)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          boxShadow: phase === "bloom" ? "0 0 60px 30px hsla(0, 0%, 10%, 0.15)" : "none",
        }}
      />
    </div>
  );
};

export default InkDrop;
