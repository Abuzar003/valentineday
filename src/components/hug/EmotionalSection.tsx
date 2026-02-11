import { useEffect, useRef, useState } from "react";

interface EmotionalSectionProps {
  children: React.ReactNode;
  delay?: number;
  darker?: boolean;
}

const EmotionalSection = ({ children, delay = 0, darker = false }: EmotionalSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="relative z-10 w-full max-w-2xl mx-auto px-6 py-10 rounded-2xl transition-all duration-[1.2s] ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        background: darker
          ? "linear-gradient(180deg, hsla(340, 20%, 15%, 0.25) 0%, hsla(340, 10%, 10%, 0.15) 100%)"
          : "transparent",
      }}
    >
      {children}
    </div>
  );
};

export default EmotionalSection;
