import { useEffect, useRef } from "react";
import bgMusic from "@/assets/chocolate-bg-music.mp3";

const FADE_DURATION = 3000;

const ChocolateMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const fadeIn = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / FADE_DURATION, 1);
        audio.volume = progress * 0.6;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const tryPlay = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audio.play().then(fadeIn).catch(() => { startedRef.current = false; });
    };

    audio.play().then(() => {
      startedRef.current = true;
      fadeIn();
    }).catch(() => {
      document.addEventListener("click", tryPlay, { once: true });
      document.addEventListener("touchstart", tryPlay, { once: true });
    });

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      const a = audio;
      const currentVol = a.volume;
      const s = performance.now();
      const fadeOut = (now: number) => {
        const progress = Math.min((now - s) / FADE_DURATION, 1);
        a.volume = currentVol * (1 - progress);
        if (progress < 1) requestAnimationFrame(fadeOut);
        else a.pause();
      };
      requestAnimationFrame(fadeOut);
    };
  }, []);

  return null;
};

export default ChocolateMusic;
