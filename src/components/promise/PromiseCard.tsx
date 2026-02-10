import { useState } from "react";

interface PromiseCardProps {
  icon: string;
  promise: string;
  detail: string;
  index: number;
}

const PromiseCard = ({ icon, promise, detail, index }: PromiseCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative w-full max-w-lg mx-auto cursor-pointer group"
      onClick={() => setExpanded((v) => !v)}
      style={{
        animation: `promiseSlideIn 0.7s ease-out ${index * 0.35}s both`,
      }}
    >
      <div
        className="relative rounded-2xl p-6 transition-all duration-500"
        style={{
          background: expanded
            ? "hsla(270, 30%, 18%, 0.85)"
            : "hsla(270, 25%, 15%, 0.6)",
          backdropFilter: "blur(16px)",
          border: "1px solid hsla(43, 60%, 55%, 0.25)",
          boxShadow: expanded
            ? "0 0 40px hsla(43, 70%, 55%, 0.2), inset 0 1px 0 hsla(43, 60%, 70%, 0.15)"
            : "0 8px 32px hsla(0, 0%, 0%, 0.2), inset 0 1px 0 hsla(43, 60%, 70%, 0.1)",
        }}
      >
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: "0 0 25px hsla(43, 70%, 55%, 0.15), inset 0 0 25px hsla(43, 70%, 55%, 0.05)",
          }}
        />

        <div className="flex items-start gap-4">
          <span
            className="text-3xl flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110"
            style={{
              filter: "drop-shadow(0 0 8px hsla(43, 80%, 60%, 0.4))",
            }}
          >
            {icon}
          </span>
          <div className="flex-1">
            <p
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)",
                color: "hsl(43, 50%, 85%)",
                lineHeight: 1.5,
              }}
            >
              {promise}
            </p>
            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                maxHeight: expanded ? "120px" : "0",
                opacity: expanded ? 1 : 0,
                marginTop: expanded ? "0.75rem" : "0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  color: "hsla(43, 30%, 75%, 0.7)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                {detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseCard;
