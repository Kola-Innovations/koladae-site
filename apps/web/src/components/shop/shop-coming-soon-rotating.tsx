import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHSOverlay, BackgroundImage, GrainyBar } from "./shared/vhs-effects";
import { ROTATING_WORDS } from "./shared/shop-constants";

interface ShopComingSoonRotatingProps {
  artistName?: string;
  backgroundImage?: string;
  imageOpacity?: number;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop";

export default function ShopComingSoonRotating({
  artistName = "KOLADAE",
  backgroundImage = DEFAULT_IMAGE,
  imageOpacity = 0.2,
}: ShopComingSoonRotatingProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [barsReady, setBarsReady] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setBarsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Rotating words logic - 2s pause on last word, 300ms between others
  useEffect(() => {
    if (!barsReady) return;

    const isLastWord = currentWordIndex === ROTATING_WORDS.length - 1;
    const delay = isLastWord ? 2000 : 300;

    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, barsReady]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <BackgroundImage src={backgroundImage} opacity={imageOpacity} />

      {/* VHS Effects */}
      <VHSOverlay />

      {/* Content Container */}
      <div
        className="relative z-40 flex h-full flex-col items-center justify-between px-8 py-12 transition-opacity duration-[800ms]"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        {/* Top Section - Artist Name */}
        <div
          className="flex w-full flex-col items-center pt-4 opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
        >
          <h1 className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[0.3em] text-white">
            {artistName}
          </h1>
        </div>

        {/* Navigation */}
        <MainNav />

        {/* Center Section - The Bar with Rotating Words */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative flex h-[140px] w-screen items-center justify-center">
            {/* Left Bar Half */}
            <motion.div
              className="absolute left-0 h-full w-1/2"
              initial={{ x: "-100%" }}
              animate={loaded ? { x: 0 } : { x: "-100%" }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
            >
              <GrainyBar className="h-full w-full">
                {/* COMING label - desktop */}
                <motion.span
                  className="absolute left-8 top-1/2 hidden -translate-y-1/2 text-[clamp(1.2rem,3vw,2rem)] font-bold uppercase tracking-[0.2em] text-white/90 sm:block"
                  initial={{ opacity: 0 }}
                  animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  COMING
                </motion.span>
              </GrainyBar>
            </motion.div>

            {/* Right Bar Half */}
            <motion.div
              className="absolute right-0 h-full w-1/2"
              initial={{ x: "100%" }}
              animate={loaded ? { x: 0 } : { x: "100%" }}
              transition={{
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
            >
              <GrainyBar className="h-full w-full">
                {/* SOON label - desktop */}
                <motion.span
                  className="absolute right-8 top-1/2 hidden -translate-y-1/2 text-[clamp(1.2rem,3vw,2rem)] font-bold uppercase tracking-[0.2em] text-white/90 sm:block"
                  initial={{ opacity: 0 }}
                  animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  SOON
                </motion.span>
              </GrainyBar>
            </motion.div>

            {/* Rotating Category Word - Centered (desktop) */}
            <div className="absolute left-1/2 top-1/2 z-10 hidden min-w-[300px] -translate-x-1/2 -translate-y-1/2 text-center sm:block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="inline-block text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-[0.05em] text-white"
                  initial={{ opacity: 0 }}
                  animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  {ROTATING_WORDS[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Stacked layout - Mobile only */}
            <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 sm:hidden">
              {/* COMING - mobile */}
              <motion.span
                className="text-[clamp(0.7rem,3vw,1rem)] font-bold uppercase tracking-[0.2em] text-white/90"
                initial={{ opacity: 0 }}
                animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                COMING
              </motion.span>

              {/* Rotating word - mobile */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="inline-block text-[clamp(1.8rem,8vw,2.5rem)] font-extrabold uppercase tracking-[0.05em] text-white"
                  initial={{ opacity: 0 }}
                  animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  {ROTATING_WORDS[currentWordIndex]}
                </motion.span>
              </AnimatePresence>

              {/* SOON - mobile */}
              <motion.span
                className="text-[clamp(0.7rem,3vw,1rem)] font-bold uppercase tracking-[0.2em] text-white/90"
                initial={{ opacity: 0 }}
                animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SOON
              </motion.span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{
            animationDelay: "1.5s",
            animationFillMode: "forwards",
          }}
        >
          <EmailSignupSocials buttonTitle="Get Notified" />
        </div>
      </div>
    </div>
  );
}
