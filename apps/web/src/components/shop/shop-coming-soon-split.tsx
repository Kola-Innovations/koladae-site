import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHS_STYLES } from "./shared/vhs-effects";
import { PRODUCT_CATEGORIES, ACCENT_COLOR, PARTICLES } from "./shared/shop-constants";

interface ShopComingSoonSplitProps {
  artistName?: string;
}

const SPLIT_STYLES = `
  /* Category section */
  .category-section {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .category-section {
      flex-direction: row;
    }
  }

  /* Image panel */
  .image-panel {
    position: relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    .image-panel {
      position: sticky;
      top: 0;
      width: 55%;
      height: 100vh;
    }
  }

  .image-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.35;
    filter: saturate(0.6) contrast(1.1);
  }

  .image-gradient {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .image-gradient-left {
    background: linear-gradient(to left, transparent 0%, black 100%);
  }

  .image-gradient-right {
    background: linear-gradient(to right, transparent 0%, black 100%);
  }

  .image-gradient-bottom {
    background: linear-gradient(to bottom, transparent 60%, black 100%);
  }

  /* Content panel */
  .content-panel {
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .content-panel {
      width: 45%;
      min-height: 100vh;
      padding: 4rem 3rem;
    }
  }

  /* Coming soon badge */
  .section-badge {
    display: inline-block;
    padding: 6px 14px;
    border: 1px solid ${ACCENT_COLOR};
    color: ${ACCENT_COLOR};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  /* Category title */
  .category-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 800;
    letter-spacing: 0.05em;
    color: white;
    line-height: 0.95;
    margin-bottom: 1.5rem;
  }

  /* Category description */
  .category-description {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    max-width: 400px;
    margin-bottom: 2rem;
  }

  /* Divider line */
  .section-divider {
    width: 60px;
    height: 2px;
    background: ${ACCENT_COLOR};
    margin-bottom: 2rem;
  }

  /* Hero section for split layout */
  .hero-split {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10;
  }

  /* Scroll indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }

  .scroll-indicator svg {
    width: 20px;
    height: 20px;
    stroke: rgba(255, 255, 255, 0.5);
  }
`;

export default function ShopComingSoonSplit({
  artistName = "KOLADAE",
}: ShopComingSoonSplitProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full bg-black">
      <style>
        {VHS_STYLES}
        {SPLIT_STYLES}
      </style>

      {/* Film Grain - fixed overlay */}
      <div className="film-grain" />

      {/* Floating particles - fixed */}
      <div className="particles" style={{ position: "fixed" }}>
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

      {/* Hero Section */}
      <div
        className="hero-split shop-container"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {/* Navigation - positioned absolutely */}
        <div className="absolute top-0 left-0 right-0 z-50 px-8 pt-12">
          <div className="flex flex-col items-center">
            <h1
              className="text-center font-bold tracking-widest text-white mb-4"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                letterSpacing: "0.3em",
                animation: loaded ? "fadeInUp 1s ease forwards" : "none",
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {artistName}
            </h1>
            <MainNav />
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span
            className="block mb-4 font-medium tracking-widest"
            style={{ color: ACCENT_COLOR, fontSize: "clamp(0.7rem, 2vw, 0.9rem)" }}
          >
            COMING SOON
          </span>
          <h2
            className="font-bold tracking-wide text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)", lineHeight: 0.95 }}
          >
            SHOP
          </h2>
          <p
            className="mt-4 text-gray-400"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            Explore what's dropping
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Category Sections */}
      {PRODUCT_CATEGORIES.map((category, index) => {
        const isReversed = index % 2 === 1;

        return (
          <section key={category.id} className="category-section">
            {/* Image Panel */}
            <motion.div
              className="image-panel"
              style={{ order: isReversed ? 2 : 1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={category.placeholderImage}
                alt={category.name}
                loading="lazy"
              />
              {/* Gradient overlays */}
              <div
                className={`image-gradient ${
                  isReversed ? "image-gradient-left" : "image-gradient-right"
                } hidden md:block`}
              />
              <div className="image-gradient image-gradient-bottom md:hidden" />
            </motion.div>

            {/* Content Panel */}
            <div
              className="content-panel"
              style={{ order: isReversed ? 1 : 2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="section-badge">Coming Soon</span>
              </motion.div>

              <motion.div
                className="section-divider"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <motion.h3
                className="category-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {category.name}
              </motion.h3>

              <motion.p
                className="category-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {category.description}
              </motion.p>

              {/* Index number */}
              <motion.span
                className="font-bold tracking-widest"
                style={{
                  fontSize: "clamp(4rem, 10vw, 8rem)",
                  color: "rgba(255, 255, 255, 0.03)",
                  position: "absolute",
                  bottom: "2rem",
                  right: isReversed ? "auto" : "2rem",
                  left: isReversed ? "2rem" : "auto",
                  lineHeight: 1,
                  pointerEvents: "none",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                0{index + 1}
              </motion.span>
            </div>
          </section>
        );
      })}

      {/* Footer Section with Email Signup */}
      <section className="relative py-20 px-4">
        <div className="vignette" />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="mb-2 text-center font-bold tracking-widest text-white"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            STAY UPDATED
          </h3>
          <p className="mb-8 text-center text-gray-400">
            Be the first to know when we drop
          </p>
          <EmailSignupSocials buttonTitle="Get Notified" />
        </motion.div>
      </section>
    </div>
  );
}
