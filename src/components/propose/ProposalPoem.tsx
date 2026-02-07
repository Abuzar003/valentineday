interface ProposalPoemProps {
  title: string;
  lines: string[];
}

const ProposalPoem = ({ title, lines }: ProposalPoemProps) => {
  return (
    <div
      key={title}
      className="text-center p-8 rounded-2xl animate-fade-in"
      style={{
        background: "hsla(340, 30%, 20%, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid hsla(340, 60%, 60%, 0.2)",
        boxShadow: "0 8px 32px hsla(340, 60%, 30%, 0.3)",
      }}
    >
      <h3
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(1.4rem, 4vw, 2rem)",
          color: "hsl(340, 80%, 80%)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h3>
      {lines.map((line, i) => (
        <p
          key={i}
          className="leading-relaxed"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "hsla(0, 0%, 100%, 0.85)",
            marginBottom: "0.4rem",
            animationDelay: `${i * 0.15}s`,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
};

export default ProposalPoem;
