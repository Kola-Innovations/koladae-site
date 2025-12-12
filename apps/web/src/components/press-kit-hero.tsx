import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "./nav";

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1657042855066-7f09c6c2c350?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface PressKitHeroProps {
  artistName?: string;
  imageUrl?: string;
  imageOpacity?: number;
}

export default function PressKitHero({
  artistName = "KOLADAE",
  imageUrl = DEFAULT_IMAGE_URL,
  imageOpacity = 0.3,
}: PressKitHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .press-kit-container {
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
          z-index: 1;
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

        /* VHS Tracking lines */
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

        /* VHS Color bleed */
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

        /* VHS Tape strips */
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

        /* Roll bar */
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

        /* Press Kit specific styles */
        .press-kit-title {
          font-size: clamp(4rem, 12vw, 10rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          line-height: 0.9;
          color: white;
        }

        .press-kit-subtitle {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .press-kit-subtitle-line {
          width: 60px;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
        }

        .press-kit-subtitle-text {
          font-size: clamp(0.875rem, 2vw, 1.25rem);
          font-weight: 400;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
        }

      `}</style>

      {/* TV Static Background - Always visible */}
      <div className="tv-static" />

      {/* VHS Effects */}
      <div className="vhs-color-bleed" />

      {/* <div className="vhs-tracking">
        <div className="vhs-line" style={{ animationDelay: "0s" }} />
        <div className="vhs-line" style={{ animationDelay: "0.5s" }} />
        <div className="vhs-line" style={{ animationDelay: "1s" }} />
        <div className="vhs-line" style={{ animationDelay: "1.5s" }} />
      </div> */}

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

      {/* <div className="vhs-glitch" />
      <div className="vhs-roll" /> */}

      {/* Vignette */}
      <div className="vignette" />

      {/* Film Grain */}
      <div className="film-grain" />

      {/* Faded Image Panel - Right Side */}
      <motion.div
        className="absolute top-0 right-0 z-5 hidden h-full w-1/2 lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: imageOpacity }}
        />
        {/* Gradient overlay - smooth fade to black on left */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, transparent 0%, black 100%)",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div
        className="press-kit-container relative z-40 flex h-full flex-col px-8 py-12 md:px-16"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {/* Navigation */}
        <MainNav />

        {/* Main Content */}
        <div className="container-main flex flex-1 items-center">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="press-kit-title">{artistName}</h1>
            <div className="press-kit-subtitle">
              <div className="press-kit-subtitle-line" />
              <span className="press-kit-subtitle-text">Press Kit</span>
              <div className="press-kit-subtitle-line" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
