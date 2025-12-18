import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHS_STYLES, VHSOverlay } from "./shared/vhs-effects";
import {
  PRODUCT_CATEGORIES,
  BUTTERFLIES,
  ACCENT_COLOR,
} from "./shared/shop-constants";

interface ShopComingSoonVinylProps {
  artistName?: string;
}

const VINYL_STYLES = `
  /* Main vinyl record - larger, centered */
  .vinyl-main {
    width: clamp(200px, 45vw, 320px);
    height: clamp(200px, 45vw, 320px);
    border-radius: 50%;
    background: radial-gradient(
      circle at center,
      #1a1a1a 0%,
      #1a1a1a 12%,
      #333 13%,
      #111 14%,
      #222 25%,
      #111 26%,
      #333 38%,
      #111 39%,
      #222 52%,
      #111 53%,
      #333 66%,
      #111 67%,
      #222 80%,
      #111 81%,
      #1a1a1a 92%,
      #333 100%
    );
    box-shadow:
      0 0 0 4px #111,
      0 0 0 8px #333,
      0 0 40px rgba(0, 0, 0, 0.6),
      0 20px 60px rgba(0, 0, 0, 0.4);
    animation: spinVinylMain 10s linear infinite;
    position: relative;
  }

  .vinyl-main::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    height: 35%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      #c4956a 0%,
      #a67c52 40%,
      #8b6b4a 60%,
      #1a1a1a 61%,
      #1a1a1a 100%
    );
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .vinyl-main::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8%;
    height: 8%;
    border-radius: 50%;
    background: #0a0a0a;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  @keyframes spinVinylMain {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Vinyl label text */
  .vinyl-label-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(8px, 2vw, 12px);
    font-weight: 700;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
    z-index: 2;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* Category pills */
  .category-pill {
    padding: 10px 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: transparent;
    color: rgba(255, 255, 255, 0.8);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: all 0.3s ease;
    cursor: default;
  }

  .category-pill:hover {
    border-color: rgba(255, 255, 255, 0.6);
    color: white;
    background: rgba(255, 255, 255, 0.05);
  }

  /* Floating small vinyls in background */
  .vinyl-float {
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
      #1a1a1a 90%
    );
    opacity: 0.4;
    animation: floatVinyl ease-in-out infinite;
  }

  .vinyl-float::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: #c4956a;
    opacity: 0.7;
  }

  @keyframes floatVinyl {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  /* Background product images - faded corners */
  .bg-product {
    position: absolute;
    width: 200px;
    height: 200px;
    object-fit: cover;
    opacity: 0.08;
    filter: grayscale(100%);
    pointer-events: none;
  }
`;

export default function ShopComingSoonVinyl({
  artistName = "KOLADAE",
}: ShopComingSoonVinylProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <style>
        {VHS_STYLES}
        {VINYL_STYLES}
      </style>

      {/* Background product images in corners */}
      {PRODUCT_CATEGORIES.map((category, index) => (
        <img
          key={category.id}
          src={category.placeholderImage}
          alt=""
          className="bg-product"
          style={{
            top: index < 2 ? "5%" : "auto",
            bottom: index >= 2 ? "5%" : "auto",
            left: index % 2 === 0 ? "3%" : "auto",
            right: index % 2 === 1 ? "3%" : "auto",
          }}
          loading="lazy"
        />
      ))}

      {/* Floating small vinyls */}
      <div
        className="vinyl-float"
        style={{
          left: "8%",
          top: "20%",
          width: "60px",
          height: "60px",
          animationDuration: "6s",
        }}
      />
      <div
        className="vinyl-float"
        style={{
          right: "10%",
          top: "15%",
          width: "45px",
          height: "45px",
          animationDuration: "8s",
          animationDelay: "1s",
        }}
      />
      <div
        className="vinyl-float"
        style={{
          right: "12%",
          bottom: "25%",
          width: "55px",
          height: "55px",
          animationDuration: "7s",
          animationDelay: "0.5s",
        }}
      />

      {/* VHS Effects */}
      <VHSOverlay />

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
            zIndex: 25,
          }}
        >
          <div className="butterfly-wing left" style={{ animationDuration: "0.3s" }} />
          <div className="butterfly-wing right" style={{ animationDuration: "0.3s" }} />
          <div className="butterfly-body" />
        </div>
      ))}

      {/* Content Container */}
      <div
        className="shop-container relative z-40 flex min-h-screen flex-col items-center px-4 py-12 sm:px-8"
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

        {/* Main Content - Vinyl + Text */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {/* Coming Soon Text - Above Vinyl */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span
              className="font-medium tracking-widest"
              style={{ color: ACCENT_COLOR, fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
            >
              SHOP COMING SOON
            </span>
          </motion.div>

          {/* Main Vinyl Record */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="vinyl-main">
              <span className="vinyl-label-text">{artistName}</span>
            </div>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.span
                key={category.id}
                className="category-pill"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              >
                {category.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Email Signup */}
        <motion.div
          className="pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <EmailSignupSocials buttonTitle="Get Notified" />
        </motion.div>
      </div>
    </div>
  );
}
