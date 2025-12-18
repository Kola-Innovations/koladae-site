import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHS_STYLES, VHSOverlay, BackgroundImage } from "./shared/vhs-effects";
import {
  PRODUCT_CATEGORIES,
  POLAROID_POSITIONS,
  ACCENT_COLOR,
} from "./shared/shop-constants";

interface ShopComingSoonPolaroidProps {
  artistName?: string;
  backgroundImage?: string;
  imageOpacity?: number;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop";

const POLAROID_STYLES = `
  .polaroid {
    background: #fefefe;
    padding: 12px 12px 45px 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .polaroid:hover {
    transform: scale(1.05) rotate(0deg) !important;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .polaroid-image {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    filter: saturate(0.75) contrast(1.05) brightness(0.95);
  }

  .polaroid-label {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #1a1a1a;
    text-transform: uppercase;
  }

  .coming-soon-badge {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 8px 16px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }

  .polaroid:hover .coming-soon-badge {
    opacity: 1;
  }

  /* Noise overlay for polaroid */
  .polaroid-noise {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 45px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.08;
    pointer-events: none;
    mix-blend-mode: overlay;
  }
`;

export default function ShopComingSoonPolaroid({
  artistName = "KOLADAE",
  backgroundImage = DEFAULT_IMAGE,
  imageOpacity = 0.15,
}: ShopComingSoonPolaroidProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <style>
        {VHS_STYLES}
        {POLAROID_STYLES}
      </style>

      {/* Background Image */}
      <BackgroundImage src={backgroundImage} opacity={imageOpacity} />

      {/* VHS Effects */}
      <VHSOverlay />

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

        {/* Hero Text */}
        <motion.div
          className="mt-8 text-center sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2
            className="font-bold tracking-widest text-white"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              letterSpacing: "0.15em",
            }}
          >
            SHOP COMING SOON
          </h2>
          <p
            className="mt-2 tracking-wide"
            style={{ color: ACCENT_COLOR, fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
          >
            Exclusive merch dropping soon
          </p>
        </motion.div>

        {/* Polaroid Grid */}
        <div className="relative mx-auto mt-8 flex w-full max-w-4xl flex-1 items-center justify-center sm:mt-12">
          {/* Desktop: Scattered layout */}
          <div className="hidden w-full grid-cols-4 gap-4 px-4 md:grid lg:gap-6">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className="polaroid relative"
                style={{
                  transform: `rotate(${POLAROID_POSITIONS[index].rotation}deg)`,
                  marginTop: index % 2 === 0 ? "0" : "30px",
                }}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: POLAROID_POSITIONS[index].rotation,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <img
                  src={category.placeholderImage}
                  alt={category.name}
                  className="polaroid-image"
                  loading="lazy"
                />
                <div className="polaroid-noise" />
                <div className="coming-soon-badge">Coming Soon</div>
                <span className="polaroid-label">{category.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile: 2x2 Grid */}
          <div className="grid w-full grid-cols-2 gap-4 px-2 md:hidden">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className="polaroid relative"
                style={{
                  transform: `rotate(${POLAROID_POSITIONS[index].rotation * 0.5}deg)`,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <img
                  src={category.placeholderImage}
                  alt={category.name}
                  className="polaroid-image"
                  loading="lazy"
                />
                <div className="polaroid-noise" />
                <span className="polaroid-label">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Email Signup */}
        <motion.div
          className="mt-8 pb-4 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <EmailSignupSocials buttonTitle="Get Notified" />
        </motion.div>
      </div>
    </div>
  );
}
