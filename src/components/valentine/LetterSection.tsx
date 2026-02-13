import { useEffect, useRef, useState } from "react";

interface LetterSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const LetterSection = ({ children, delay = 0, className = "" }: LetterSectionProps) => {
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-2xl mx-auto px-6 py-10 transition-all duration-[2s] ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
      }}
    >
      {children}
    </div>
  );
};

export default LetterSection;
