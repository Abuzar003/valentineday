const SilhouetteScene = () => {
  return (
    <div className="relative w-full flex justify-center items-end z-[3]" style={{ height: "clamp(200px, 35vh, 350px)" }}>
      {/* Tree trunk & branches */}
      <svg
        viewBox="0 0 400 300"
        className="absolute bottom-0 w-full max-w-lg"
        style={{ filter: "drop-shadow(0 0 20px hsla(340, 50%, 70%, 0.2))" }}
      >
        {/* Ground mist */}
        <ellipse cx="200" cy="290" rx="180" ry="15" fill="hsla(340, 30%, 90%, 0.3)" />

        {/* Tree trunk */}
        <path d="M200 290 Q195 240 190 200 Q185 160 195 130 Q200 120 205 130 Q215 160 210 200 Q205 240 200 290Z" fill="hsl(20, 15%, 25%)" />

        {/* Branches */}
        <path d="M195 170 Q160 140 120 125 Q130 120 145 128 Q170 135 195 165Z" fill="hsl(20, 15%, 28%)" />
        <path d="M205 170 Q240 140 280 125 Q270 120 255 128 Q230 135 205 165Z" fill="hsl(20, 15%, 28%)" />
        <path d="M198 145 Q175 110 150 95 Q160 88 170 100 Q185 115 200 140Z" fill="hsl(20, 15%, 28%)" />
        <path d="M202 145 Q225 110 250 95 Q240 88 230 100 Q215 115 200 140Z" fill="hsl(20, 15%, 28%)" />
        <path d="M200 130 Q200 90 195 60" stroke="hsl(20, 15%, 28%)" strokeWidth="3" fill="none" />

        {/* Cherry blossom canopy */}
        {[
          { cx: 130, cy: 115, r: 30 },
          { cx: 170, cy: 90, r: 35 },
          { cx: 210, cy: 80, r: 38 },
          { cx: 250, cy: 90, r: 35 },
          { cx: 280, cy: 115, r: 30 },
          { cx: 195, cy: 55, r: 28 },
          { cx: 225, cy: 60, r: 25 },
          { cx: 155, cy: 100, r: 25 },
          { cx: 240, cy: 100, r: 25 },
        ].map((c, i) => (
          <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill={`hsla(340, ${55 + i * 3}%, ${78 + i * 2}%, ${0.5 + i * 0.04})`} />
        ))}

        {/* Left silhouette (him) */}
        <g style={{ animation: "silBreath 4s ease-in-out infinite" }}>
          <ellipse cx="165" cy="255" rx="10" ry="4" fill="hsla(320, 20%, 20%, 0.3)" />
          <path d="M160 285 Q160 270 162 260 Q163 255 165 250 Q167 255 168 260 Q170 270 170 285Z" fill="hsl(320, 20%, 22%)" />
          <circle cx="165" cy="242" r="7" fill="hsl(320, 20%, 22%)" />
        </g>

        {/* Right silhouette (her) */}
        <g style={{ animation: "silBreath 4s ease-in-out 0.5s infinite" }}>
          <ellipse cx="235" cy="255" rx="10" ry="4" fill="hsla(320, 20%, 20%, 0.3)" />
          <path d="M228 285 Q229 270 230 260 Q232 255 235 248 Q238 255 240 260 Q241 270 242 285Z" fill="hsl(320, 20%, 22%)" />
          <path d="M228 285 Q225 275 224 270 Q230 278 235 280 Q240 278 246 270 Q245 275 242 285Z" fill="hsl(320, 20%, 22%)" />
          <circle cx="235" cy="240" r="7.5" fill="hsl(320, 20%, 22%)" />
        </g>
      </svg>

      <style>{`
        @keyframes silBreath {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
};

export default SilhouetteScene;
