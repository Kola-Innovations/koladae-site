import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import video1 from "@/videos/ye-ye-ye.mp4";
import video2 from "@/videos/yea-lean-with-it.mp4";
import video3 from "@/videos/intro-dimsum.mp4";
// import { Link } from "@tanstack/react-router";
import MainNav from "./nav";
import EmailSignupSocials from "./email-signup-socials";

const VIDEO_SOURCES = [video1, video2, video3];
const VIDEO_DURATION = 4000; // 8 seconds per video
const STATIC_DURATION = 2000; // 2 seconds of static screen

// Pre-generated particle positions (static values to avoid re-renders)
const PARTICLES = [
  { id: "p1", left: 12, top: 45, delay: 0.2, duration: 2.5 },
  { id: "p2", left: 87, top: 23, delay: 1.1, duration: 3.2 },
  { id: "p3", left: 34, top: 78, delay: 0.8, duration: 2.8 },
  { id: "p4", left: 56, top: 12, delay: 2.3, duration: 3.5 },
  { id: "p5", left: 91, top: 67, delay: 0.5, duration: 2.2 },
  { id: "p6", left: 23, top: 34, delay: 1.7, duration: 3.1 },
  { id: "p7", left: 67, top: 89, delay: 2.8, duration: 2.6 },
  { id: "p8", left: 45, top: 56, delay: 0.3, duration: 3.8 },
  { id: "p9", left: 78, top: 41, delay: 1.9, duration: 2.4 },
  { id: "p10", left: 8, top: 92, delay: 2.1, duration: 3.3 },
  { id: "p11", left: 52, top: 18, delay: 0.9, duration: 2.9 },
  { id: "p12", left: 29, top: 63, delay: 1.4, duration: 3.6 },
  { id: "p13", left: 83, top: 37, delay: 2.6, duration: 2.3 },
  { id: "p14", left: 41, top: 84, delay: 0.6, duration: 3.4 },
  { id: "p15", left: 96, top: 52, delay: 1.2, duration: 2.7 },
  { id: "p16", left: 15, top: 29, delay: 2.4, duration: 3.0 },
  { id: "p17", left: 63, top: 71, delay: 0.4, duration: 3.7 },
  { id: "p18", left: 38, top: 8, delay: 1.6, duration: 2.1 },
  { id: "p19", left: 74, top: 95, delay: 2.9, duration: 3.9 },
  { id: "p20", left: 19, top: 47, delay: 1.0, duration: 2.5 },
];

// Vinyl records floating on static screen
const VINYLS = [
  { id: "v1", left: 15, top: 20, size: 60, duration: 8, delay: 0 },
  { id: "v2", left: 75, top: 70, size: 45, duration: 6, delay: 0.5 },
  { id: "v3", left: 85, top: 15, size: 35, duration: 10, delay: 1 },
  { id: "v4", left: 25, top: 75, size: 50, duration: 7, delay: 0.3 },
];

// Butterflies floating around
const BUTTERFLIES = [
  { id: "b1", left: 20, top: 40, delay: 0, duration: 4 },
  // { id: "b2", left: 70, top: 30, delay: 1.5, duration: 5 },
  // { id: "b3", left: 50, top: 60, delay: 0.8, duration: 4.5 },
  // { id: "b4", left: 80, top: 55, delay: 2, duration: 3.5 },
  // { id: "b5", left: 35, top: 25, delay: 1, duration: 5.5 },
];

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
        }, 2000); // Quick flash between videos
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

        /* VHS Tracking lines - horizontal bands that move */
        .vhs-tracking {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
        }

        .vhs-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 10%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0.1) 90%,
            transparent 100%
          );
          animation: vhsTrack 2s linear infinite;
        }

        @keyframes vhsTrack {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        /* VHS Color bleed / RGB separation */
        .vhs-color-bleed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 7;
          mix-blend-mode: screen;
          opacity: 0.15;
        }

        .vhs-color-bleed::before {
          content: '';
          position: absolute;
          top: 0;
          left: -2px;
          width: 100%;
          height: 100%;
          background: rgba(255, 0, 0, 0.3);
          animation: colorShift 0.1s steps(2) infinite;
        }

        .vhs-color-bleed::after {
          content: '';
          position: absolute;
          top: 0;
          left: 2px;
          width: 100%;
          height: 100%;
          background: rgba(0, 255, 255, 0.3);
          animation: colorShift 0.1s steps(2) infinite reverse;
        }

        @keyframes colorShift {
          0% { transform: translateX(0); }
          50% { transform: translateX(2px); }
          100% { transform: translateX(-1px); }
        }

        /* VHS Tape strips - horizontal bands of interference */
        .vhs-strip {
          position: absolute;
          left: 0;
          width: 100%;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(255, 255, 255, 0.05) 20%,
            rgba(255, 255, 255, 0.15) 40%,
            rgba(100, 100, 100, 0.3) 50%,
            rgba(255, 255, 255, 0.15) 60%,
            rgba(255, 255, 255, 0.05) 80%,
            transparent 100%
          );
          animation: stripWobble 0.3s ease-in-out infinite;
        }

        @keyframes stripWobble {
          0%, 100% { transform: scaleX(1) translateX(0); }
          25% { transform: scaleX(1.02) translateX(-5px); }
          50% { transform: scaleX(0.98) translateX(5px); }
          75% { transform: scaleX(1.01) translateX(-3px); }
        }

        /* VHS Glitch flicker */
        .vhs-glitch {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9;
          background: transparent;
          animation: vhsFlicker 0.15s steps(1) infinite;
        }

        @keyframes vhsFlicker {
          0% { opacity: 0; }
          5% { opacity: 0.1; background: white; }
          10% { opacity: 0; }
          15% { opacity: 0.05; background: white; }
          20% { opacity: 0; }
          80% { opacity: 0; }
          85% { opacity: 0.08; background: white; }
          90% { opacity: 0; }
          100% { opacity: 0; }
        }

        /* Horizontal hold issue - screen roll effect */
        .vhs-roll {
          position: absolute;
          left: 0;
          width: 100%;
          height: 30px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.8) 30%,
            black 50%,
            rgba(0, 0, 0, 0.8) 70%,
            transparent 100%
          );
          animation: rollBar 3s linear infinite;
          z-index: 10;
        }

        @keyframes rollBar {
          0% { top: -30px; }
          100% { top: 100%; }
        }

        /* Spinning vinyl record */
        .vinyl {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            #1a1a1a 0%,
            #1a1a1a 15%,
            #333 16%,
            #111 17%,
            #222 30%,
            #111 31%,
            #333 45%,
            #111 46%,
            #222 60%,
            #111 61%,
            #333 75%,
            #111 76%,
            #1a1a1a 90%,
            #333 100%
          );
          box-shadow:
            0 0 0 3px #111,
            0 0 0 6px #333,
            0 0 20px rgba(0,0,0,0.5);
          animation: spinVinyl linear infinite, floatVinyl ease-in-out infinite;
          opacity: 0.7;
        }

        .vinyl::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: 30%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            #ff6b35 0%,
            #f7931e 50%,
            #1a1a1a 51%,
            #1a1a1a 100%
          );
        }

        .vinyl::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8%;
          height: 8%;
          border-radius: 50%;
          background: #111;
        }

        @keyframes spinVinyl {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes floatVinyl {
          0%, 100% {
            transform: rotate(0deg) translateY(0px);
          }
          50% {
            transform: rotate(180deg) translateY(-15px);
          }
        }

        /* Butterfly */
        .butterfly {
          position: absolute;
          width: 30px;
          height: 20px;
          animation: butterflyFloat ease-in-out infinite;
        }

        .butterfly-wing {
          position: absolute;
          width: 12px;
          height: 18px;
          background: linear-gradient(135deg,
            rgba(255, 200, 150, 0.6) 0%,
            rgba(255, 150, 100, 0.4) 50%,
            rgba(200, 100, 50, 0.3) 100%
          );
          border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
          animation: flapWing ease-in-out infinite;
        }

        .butterfly-wing.left {
          left: 0;
          transform-origin: right center;
        }

        .butterfly-wing.right {
          right: 0;
          transform-origin: left center;
          animation-delay: 0.05s;
        }

        .butterfly-body {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 3px;
          height: 14px;
          background: rgba(100, 70, 50, 0.7);
          border-radius: 50%;
        }

        @keyframes flapWing {
          0%, 100% { transform: rotateY(0deg) scaleX(1); }
          50% { transform: rotateY(70deg) scaleX(0.5); }
        }

        @keyframes butterflyFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(-5deg);
          }
          25% {
            transform: translate(20px, -30px) rotate(5deg);
          }
          50% {
            transform: translate(40px, -10px) rotate(-3deg);
          }
          75% {
            transform: translate(20px, 20px) rotate(8deg);
          }
        }

        /* Pre-save arrows (inline next to button) */
        .presave-arrow-inline {
          display: flex;
          align-items: center;
        }

        @keyframes arrowPulseRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(8px);
          }
        }

        @keyframes arrowPulseLeft {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-8px);
          }
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
              {PARTICLES.map((particle) => (
                <div
                  key={particle.id}
                  className="particle"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: `${particle.duration}s`,
                  }}
                />
              ))}
            </div>

            {/* VHS Effects */}
            {/* Color bleed / RGB separation */}
            <div className="vhs-color-bleed" />

            {/* Tracking lines moving down the screen */}
            <div className="vhs-tracking">
              <div className="vhs-line" style={{ animationDelay: "0s" }} />
              <div className="vhs-line" style={{ animationDelay: "0.5s" }} />
              <div className="vhs-line" style={{ animationDelay: "1s" }} />
              <div className="vhs-line" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* VHS tape strips - interference bands */}
            <div
              className="vhs-strip"
              style={{ top: "15%", height: "40px", animationDelay: "0s" }}
            />
            <div
              className="vhs-strip"
              style={{ top: "45%", height: "25px", animationDelay: "0.15s" }}
            />
            <div
              className="vhs-strip"
              style={{ top: "70%", height: "50px", animationDelay: "0.08s" }}
            />

            {/* Random white flicker */}
            <div className="vhs-glitch" />

            {/* Horizontal hold / roll bar */}
            <div className="vhs-roll" />

            {/* Vinyl Records */}
            {VINYLS.map((vinyl) => (
              <div
                key={vinyl.id}
                className="vinyl"
                style={{
                  left: `${vinyl.left}%`,
                  top: `${vinyl.top}%`,
                  width: `${vinyl.size}px`,
                  height: `${vinyl.size}px`,
                  animationDelay: `${vinyl.delay}s`,
                  animationDuration: `${vinyl.duration}s, ${
                    vinyl.duration * 1.5
                  }s`,
                }}
              />
            ))}

            {/* Butterflies */}
            {BUTTERFLIES.map((butterfly) => (
              <div
                key={butterfly.id}
                className="butterfly"
                style={{
                  left: `${butterfly.left}%`,
                  top: `${butterfly.top}%`,
                  animationDelay: `${butterfly.delay}s`,
                  animationDuration: `${butterfly.duration}s`,
                }}
              >
                <div
                  className="butterfly-wing left"
                  style={{ animationDuration: "0.3s" }}
                />
                <div
                  className="butterfly-wing right"
                  style={{ animationDuration: "0.3s" }}
                />
                <div className="butterfly-body" />
              </div>
            ))}
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
        {/* <nav
          className="absolute top-12 flex w-full justify-center gap-12"
          style={{
            animation: loaded ? "fadeIn 1s ease forwards" : "none",
            animationDelay: "0.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Link to="/" className="nav-link">
            About
          </Link>
          <Link to="/" className="nav-link">
            Shop
          </Link>
          <Link to="/" className="nav-link">
            Press Kit
          </Link>
        </nav> */}
        <MainNav />

        {/* Center Section - The Bar + Pre-save */}
        <div className="flex flex-col items-center gap-6">
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

          {/* Pre-save Button with Arrows - Right under the bar */}
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <AnimatePresence>
              {showStatic && (
                <motion.div
                  className="presave-arrow-inline"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="1"
                    aria-hidden="true"
                    style={{
                      animation: "arrowPulseLeft 1s ease-in-out infinite",
                    }}
                  >
                    <title>Pre-save arrow</title>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={presaveUrl}
              className="cta-btn"
              initial={{ opacity: 0, y: 10 }}
              animate={barsReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isReleased ? "Listen Now" : "Pre-Save"}
            </motion.a>

            {/* Right Arrow */}
            <AnimatePresence>
              {showStatic && (
                <motion.div
                  className="presave-arrow-inline"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.8)"
                    strokeWidth="1"
                    aria-hidden="true"
                    style={{
                      animation: "arrowPulseRight 1s ease-in-out infinite",
                    }}
                  >
                    <title>Pre-save arrow</title>
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            animation: loaded ? "fadeInUp 1s ease forwards" : "none",
            animationDelay: "1.5s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <EmailSignupSocials buttonTitle="Join" />
        </div>
      </div>
    </div>
  );
}
