import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "./nav";
import EmailSignupSocials from "./email-signup-socials";

interface ShopComingSoonProps {
  artistName?: string;
  backgroundImage?: string;
  imageOpacity?: number;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop";

// Pre-generated particle positions
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
];

export default function ShopComingSoon({
  artistName = "KOLADAE",
  backgroundImage = DEFAULT_IMAGE,
  imageOpacity = 0.2,
}: ShopComingSoonProps) {
  const [loaded, setLoaded] = useState(false);
  const [barsReady, setBarsReady] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setTimeout(() => setBarsReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .shop-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* Film grain overlay */
        .film-grain-shop {
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

        /* Vignette overlay */
        .vignette-shop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 20;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
        }

        /* VHS Scanlines */
        .vhs-scanlines-shop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
        }

        /* VHS Tracking lines - horizontal bands that move */
        .vhs-tracking-shop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
        }

        .vhs-line-shop {
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
          animation: vhsTrackShop 2s linear infinite;
        }

        @keyframes vhsTrackShop {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }

        /* VHS Color bleed / RGB separation */
        .vhs-color-bleed-shop {
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

        .vhs-color-bleed-shop::before {
          content: '';
          position: absolute;
          top: 0;
          left: -2px;
          width: 100%;
          height: 100%;
          background: rgba(255, 0, 0, 0.3);
          animation: colorShiftShop 0.1s steps(2) infinite;
        }

        .vhs-color-bleed-shop::after {
          content: '';
          position: absolute;
          top: 0;
          left: 2px;
          width: 100%;
          height: 100%;
          background: rgba(0, 255, 255, 0.3);
          animation: colorShiftShop 0.1s steps(2) infinite reverse;
        }

        @keyframes colorShiftShop {
          0% { transform: translateX(0); }
          50% { transform: translateX(2px); }
          100% { transform: translateX(-1px); }
        }

        /* Floating particles */
        .particles-shop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 6;
        }

        .particle-shop {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: floatShop 3s ease-in-out infinite;
        }

        @keyframes floatShop {
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

        /* Faded black denim bar texture - matching home page */
        .grainy-bar-shop {
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
        .grainy-bar-shop::before {
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
          animation: grainMove 0.5s steps(10) infinite;
        }

        /* Subtle fade variation like washed denim */
        .grainy-bar-shop::after {
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
      `}</style>

      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-1">
          <img
            src={backgroundImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: imageOpacity }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 20%, black 80%)",
            }}
          />
        </div>
      )}

      {/* VHS Effects */}
      {/* Floating particles */}
      <div className="particles-shop">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="particle-shop"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* VHS Color bleed / RGB separation */}
      <div className="vhs-color-bleed-shop" />

      {/* VHS Tracking lines moving down the screen */}
      <div className="vhs-tracking-shop">
        <div className="vhs-line-shop" style={{ animationDelay: "0s" }} />
        <div className="vhs-line-shop" style={{ animationDelay: "0.5s" }} />
        <div className="vhs-line-shop" style={{ animationDelay: "1s" }} />
        <div className="vhs-line-shop" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Scanlines */}
      <div className="vhs-scanlines-shop" />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Vignette */}
      <div className="vignette-shop" />

      {/* Film Grain */}
      <div className="film-grain-shop" />

      {/* Content Container */}
      <div
        className="shop-container relative z-40 flex h-full flex-col items-center justify-between px-8 py-12"
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
        <MainNav />

        {/* Center Section - The Bar */}
        <div className="flex flex-col items-center gap-6">
          <div
            className="relative flex w-screen items-center justify-center"
            style={{ height: "140px" }}
          >
            {/* Left Bar Half */}
            <motion.div
              className="grainy-bar-shop absolute left-0 h-full"
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
                COMING
              </motion.span>
            </motion.div>

            {/* Right Bar Half */}
            <motion.div
              className="grainy-bar-shop absolute right-0 h-full"
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
                SOON
              </motion.span>
            </motion.div>

            {/* SHOP - Centered */}
            <div
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ minWidth: "300px", textAlign: "center" }}
            >
              <motion.span
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
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                SHOP
              </motion.span>
            </div>
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
          <EmailSignupSocials buttonTitle="Get Notified" />
        </div>
      </div>
    </div>
  );
}
