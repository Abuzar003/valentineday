import { useEffect, useRef } from "react";
import bgMusic from "@/assets/propose-bg-music.mp3";

const FADE_DURATION = 3000; // 3s fade

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    // Fade in
    audio.play().catch(() => {});
    let start = performance.now();
    const fadeIn = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / FADE_DURATION, 1);
      audio.volume = progress * 0.6; // max volume 60%
      if (progress < 1) requestAnimationFrame(fadeIn);
    };
    requestAnimationFrame(fadeIn);

    return () => {
      // Fade out on unmount
      const a = audio;
      let s = performance.now();
      const currentVol = a.volume;
      const fadeOut = (now: number) => {
        const elapsed = now - s;
        const progress = Math.min(elapsed / FADE_DURATION, 1);
        a.volume = currentVol * (1 - progress);
        if (progress < 1) {
          requestAnimationFrame(fadeOut);
        } else {
          a.pause();
        }
      };
      requestAnimationFrame(fadeOut);
    };
  }, []);

  return null;
};

export default BackgroundMusic;
