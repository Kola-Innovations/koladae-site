import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import video1 from "@/videos/ye-ye-ye.mp4";
import video2 from "@/videos/yea-lean-with-it.mp4";
import video3 from "@/videos/intro-dimsum.mp4";

const VIDEO_SOURCES = [video1, video2, video3];
const VIDEO_DURATION = 8000; // 8 seconds per video
const STATIC_DURATION = 2000; // 2 seconds of static screen

interface HeroSectionV3Props {
  artistName?: string;
  rotatingWords?: string[];
  presaveUrl?: string;
  isReleased?: boolean;
  animatedGrain?: boolean;
  enableGlitch?: boolean;
}

export default function HeroSectionV3({
  artistName = "KOLADAE",
  rotatingWords = ["KEEP", "ON", "ROLLING"],
  presaveUrl = "#",
  isReleased = false,
  animatedGrain = true,
  enableGlitch = false,
}: HeroSectionV3Props) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [barsReady, setBarsReady] = useState(false);
  const [email, setEmail] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showStatic, setShowStatic] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setLoaded(true);
    // Bars animation completes after ~1s, then show text
    const timer = setTimeout(() => setBarsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Video carousel with static screen transition
  useEffect(() => {
    const cycleVideo = () => {
      const isLastVideo = currentVideoIndex === VIDEO_SOURCES.length - 1;

      if (isLastVideo) {
        // After last video, show static screen
        setShowStatic(true);
        setTimeout(() => {
          setShowStatic(false);
          setCurrentVideoIndex(0);
        }, STATIC_DURATION);
      } else {
        // Brief static flash between videos
        setShowStatic(true);
        setTimeout(() => {
          setShowStatic(false);
          setCurrentVideoIndex((prev) => prev + 1);
        }, 300); // Quick flash between videos
      }
    };

    const timer = setTimeout(cycleVideo, VIDEO_DURATION);
    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextWord = () => {
      const isLastWord = currentWordIndex === rotatingWords.length - 1;
      // Fast switch (400ms) between words, 2 second pause on last word
      const delay = isLastWord ? 2000 : 300;

      timeoutId = setTimeout(() => {
        if (enableGlitch) {
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 100);
        }
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }, delay);
    };

    if (barsReady) {
      scheduleNextWord();
    }

    return () => clearTimeout(timeoutId);
  }, [currentWordIndex, rotatingWords.length, enableGlitch, barsReady]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .hero-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Film grain overlay */
        .film-grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 30;
          opacity: 0.1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        /* TV Static Screen */
        .tv-static {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
          z-index: 5;
        }

        .tv-static::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='staticNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' seed='15' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23staticNoise)'/%3E%3C/svg%3E");
          animation: staticMove 0.1s steps(8) infinite;
          opacity: 0.4;
        }

        /* Scanlines for TV effect */
        .tv-static::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
        }

        @keyframes staticMove {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(5%, 5%); }
          30% { transform: translate(-3%, 3%); }
          40% { transform: translate(3%, -3%); }
          50% { transform: translate(-5%, 2%); }
          60% { transform: translate(5%, -4%); }
          70% { transform: translate(-2%, -2%); }
          80% { transform: translate(4%, 4%); }
          90% { transform: translate(-4%, 3%); }
          100% { transform: translate(0, 0); }
        }

        /* Floating particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 6;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        /* Vignette overlay */
        .vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 20;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
        }

        /* Faded black denim bar texture */
        .grainy-bar {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.6) 20%,
            rgba(0, 0, 0, 0.55) 50%,
            rgba(0, 0, 0, 0.6) 80%,
            rgba(0, 0, 0, 0.7) 100%
          );
          position: relative;
          overflow: hidden;
        }

        /* Denim weave texture - diagonal lines like fabric */
        .grainy-bar::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background-image:
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='denim'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23denim)'/%3E%3C/svg%3E"),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 1px,
              rgba(255, 255, 255, 0.02) 1px,
              rgba(255, 255, 255, 0.02) 2px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 1px,
              rgba(0, 0, 0, 0.03) 1px,
              rgba(0, 0, 0, 0.03) 2px
            );
          opacity: 0.4;
          pointer-events: none;
        }

        /* Subtle fade variation like washed denim */
        .grainy-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.03) 0%,
            transparent 30%,
            transparent 70%,
            rgba(0, 0, 0, 0.05) 100%
          );
          pointer-events: none;
        }

        .grainy-bar.animated::before {
          animation: grainMove 0.5s steps(10) infinite;
        }

        @keyframes grainMove {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, 2%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-2%, 1%); }
          60% { transform: translate(2%, -2%); }
          70% { transform: translate(-1%, -1%); }
          80% { transform: translate(1%, 1%); }
          90% { transform: translate(-2%, 2%); }
        }

        /* Glitch effect */
        @keyframes glitch {
          0% {
            transform: translate(0);
            opacity: 1;
          }
          20% {
            transform: translate(-3px, 2px);
            opacity: 0.8;
          }
          40% {
            transform: translate(3px, -2px);
            opacity: 0.9;
          }
          60% {
            transform: translate(-2px, -1px);
            opacity: 0.7;
          }
          80% {
            transform: translate(2px, 1px);
            opacity: 0.85;
          }
          100% {
            transform: translate(0);
            opacity: 1;
          }
        }

        @keyframes glitchColor {
          0% {
            text-shadow: 2px 0 #ff0000, -2px 0 #00ffff;
          }
          25% {
            text-shadow: -2px 0 #ff0000, 2px 0 #00ffff;
          }
          50% {
            text-shadow: 2px 2px #ff0000, -2px -2px #00ffff;
          }
          75% {
            text-shadow: -2px -2px #ff0000, 2px 2px #00ffff;
          }
          100% {
            text-shadow: 0 0 transparent;
          }
        }

        .glitching {
          animation: glitch 0.15s ease-in-out, glitchColor 0.15s ease-in-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .cta-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.8);
          color: white;
          padding: 14px 40px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: white;
          transition: left 0.4s ease;
          z-index: -1;
        }

        .cta-btn:hover {
          color: black;
        }

        .cta-btn:hover::before {
          left: 0;
        }

        .email-input {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 20px;
          font-family: inherit;
          font-size: 13px;
          width: 280px;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .email-input:focus {
          border-color: rgba(255, 255, 255, 0.6);
        }

        .email-btn {
          background: white;
          border: 1px solid white;
          color: black;
          padding: 12px 24px;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .email-btn:hover {
          background: transparent;
          color: white;
        }

        .social-icon {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          color: white;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Video Background */}
      <AnimatePresence mode="wait">
        {!showStatic && (
          <motion.video
            key={currentVideoIndex}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <source src={VIDEO_SOURCES[currentVideoIndex]} type="video/mp4" />
          </motion.video>
        )}
      </AnimatePresence>

      {/* TV Static Screen */}
      <AnimatePresence>
        {showStatic && (
          <motion.div
            className="tv-static"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {/* Floating particles */}
            <div className="particles">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Vignette */}
      <div className="vignette" />

      {/* Film Grain */}
      <div className="film-grain" />

      {/* Content Container */}
      <div
        className="hero-container relative z-40 flex h-full flex-col items-center justify-between px-8 py-12"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {/* Top Section - Artist Name */}
        <div
          className="flex w-full flex-col items-center pt-4"
          style={{
            animation: loaded ? "fadeInUp 1s ease forwards" : "none",
            animationDelay: "0.2s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <h1
            className="text-center font-bold tracking-widest text-white"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              letterSpacing: "0.3em",
            }}
          >
            {artistName}
          </h1>
        </div>

        {/* Navigation */}
        <nav
          className="absolute top-12 flex w-full justify-center gap-12"
          style={{
            animation: loaded ? "fadeIn 1s ease forwards" : "none",
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Shop
          </a>
          <a href="#" className="nav-link">
            Press Kit
          </a>
        </nav>

        {/* Center Section - The Bar */}
        <div
          className="relative flex w-screen items-center justify-center"
          style={{ height: "140px" }}
        >
          {/* Left Bar Half */}
          <motion.div
            className={`grainy-bar absolute left-0 h-full ${
              animatedGrain ? "animated" : ""
            }`}
            style={{ width: "50%" }}
            initial={{ x: "-100%" }}
            animate={loaded ? { x: 0 } : { x: "-100%" }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            {/* COMING label */}
            <motion.span
              className="absolute left-8 top-1/2 -translate-y-1/2 font-bold uppercase tracking-widest"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                color: "rgba(255, 250, 245, 0.9)",
                letterSpacing: "0.2em",
              }}
              initial={{ opacity: 0 }}
              animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isReleased ? "OUT" : "COMING"}
            </motion.span>
          </motion.div>

          {/* Right Bar Half */}
          <motion.div
            className={`grainy-bar absolute right-0 h-full ${
              animatedGrain ? "animated" : ""
            }`}
            style={{ width: "50%" }}
            initial={{ x: "100%" }}
            animate={loaded ? { x: 0 } : { x: "100%" }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
          >
            {/* SOON label */}
            <motion.span
              className="absolute right-8 top-1/2 -translate-y-1/2 font-bold uppercase tracking-widest"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                color: "rgba(255, 250, 245, 0.9)",
                letterSpacing: "0.2em",
              }}
              initial={{ opacity: 0 }}
              animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isReleased ? "NOW" : "SOON"}
            </motion.span>
          </motion.div>

          {/* Rotating Text - Centered */}
          <div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ minWidth: "300px", textAlign: "center" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className={enableGlitch && isGlitching ? "glitching" : ""}
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 800,
                  letterSpacing: "0.05em",
                  color: "white",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}
                initial={{ opacity: 0 }}
                animate={barsReady ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="flex w-full flex-col items-center gap-8"
          style={{
            animation: loaded ? "fadeInUp 1s ease forwards" : "none",
            animationDelay: "1.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {/* Pre-save / Listen Now Button */}
          <a href={presaveUrl} className="cta-btn">
            {isReleased ? "Listen Now" : "Pre-Save"}
          </a>

          {/* Email Signup */}
          <form onSubmit={handleEmailSubmit} className="flex gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
            <button type="submit" className="email-btn">
              Join
            </button>
          </form>

          {/* Social & Streaming Icons */}
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="18"
                    cy="6"
                    r="1.5"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="social-icon" aria-label="TikTok">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Divider */}
            <div className="h-4 w-px bg-white/20" />

            {/* Streaming Icons */}
            <div className="flex items-center gap-5">
              {/* Spotify */}
              <a href="#" className="social-icon" aria-label="Spotify">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>

              {/* Apple Music */}
              <a href="#" className="social-icon" aria-label="Apple Music">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.635-1.93-1.638-.083-.65.106-1.2.587-1.635.326-.294.718-.472 1.14-.586.36-.097.728-.17 1.09-.26.273-.067.5-.2.604-.486a.942.942 0 00.06-.348V9.348a.477.477 0 00-.394-.5c-.12-.025-.243-.04-.366-.053l-3.07-.383c-.063-.008-.125-.02-.188-.024a.394.394 0 00-.453.37c-.005.058-.002.117-.002.176v7.69c0 .376-.047.746-.2 1.095-.263.598-.712.987-1.32 1.184-.372.12-.756.18-1.15.197-.728.03-1.376-.18-1.855-.753-.387-.463-.516-1.01-.413-1.603.132-.755.612-1.24 1.282-1.55.378-.175.78-.273 1.188-.345.28-.05.56-.104.84-.16.226-.046.417-.15.542-.358a.773.773 0 00.105-.403V7.178c0-.21.038-.403.196-.56a.722.722 0 01.4-.208c.238-.042.478-.074.718-.107l2.836-.352 2.394-.296c.075-.01.15-.023.224-.026.283-.012.478.168.503.45.005.057.003.114.003.17l.002 3.865z" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="social-icon" aria-label="YouTube">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
