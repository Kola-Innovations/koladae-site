import { useEffect, useState } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHSOverlay, BackgroundImage } from "./shared/vhs-effects";
import {
  PARTICLES,
  POLAROID_POSITIONS,
  PRODUCT_CATEGORIES,
} from "./shared/shop-constants";

interface ShopComingSoonCombinedProps {
  artistName?: string;
  backgroundImage?: string;
  imageOpacity?: number;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop";

export default function ShopComingSoonCombined({
  artistName = "KOLADAE",
  backgroundImage = DEFAULT_IMAGE,
  imageOpacity = 0.15,
}: ShopComingSoonCombinedProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full bg-black font-sans">
      {/* Film Grain - fixed overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Floating particles - fixed */}
      <div className="pointer-events-none fixed inset-0 z-[6] overflow-hidden">
        {PARTICLES.map((particle) => (
          <div
            key={particle.id}
            className="absolute h-0.5 w-0.5 animate-float rounded-full bg-white/60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* ========== HERO SECTION - Polaroid Style (75vh) ========== */}
      <section className="relative h-[75vh] min-h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <BackgroundImage src={backgroundImage} opacity={imageOpacity} />

        {/* VHS Effects */}
        <VHSOverlay />

        {/* Content Container */}
        <div
          className="relative z-40 flex h-full flex-col items-center px-4 pb-8 pt-12 transition-opacity duration-800 sm:px-8"
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

          {/* Hero Text */}
          <motion.div
            className="mt-6 text-center sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-[0.15em] text-white">
              SHOP COMING SOON
            </h2>
            <p className="mt-2 text-[clamp(0.75rem,2vw,1rem)] tracking-wide text-[#c4956a]">
              Exclusive merch dropping soon
            </p>
          </motion.div>

          {/* Polaroid Grid */}
          <div className="relative mx-auto mt-6 flex w-full max-w-4xl flex-1 items-center justify-center sm:mt-8">
            {/* Desktop: Scattered layout */}
            <div className="hidden w-full grid-cols-4 gap-4 px-4 md:grid lg:gap-6">
              {PRODUCT_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="group relative cursor-pointer bg-[#fefefe] p-3 pb-11 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
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
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.placeholderImage}
                      alt={category.name}
                      className="h-full w-full object-cover brightness-95 contrast-[1.05] saturate-[0.75]"
                      loading="lazy"
                    />
                    {/* Noise overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                      }}
                    />
                    {/* Coming Soon badge on hover */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-black/85 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Coming Soon
                    </div>
                  </div>
                  {/* Label */}
                  <span className="absolute bottom-2.5 left-0 right-0 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]">
                    {category.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile: 2x2 Grid */}
            <div className="grid w-full grid-cols-2 gap-3 px-2 md:hidden">
              {PRODUCT_CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="relative bg-[#fefefe] p-2 pb-9 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
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
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.placeholderImage}
                      alt={category.name}
                      className="h-full w-full object-cover brightness-95 contrast-[1.05] saturate-[0.75]"
                      loading="lazy"
                    />
                  </div>
                  {/* Label */}
                  <span className="absolute bottom-2 left-0 right-0 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1a1a1a]">
                    {category.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-auto flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 animate-bounce-scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <span>Explore</span>
            <svg
              className="h-5 w-5 stroke-white/50"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* ========== CATEGORY SECTIONS - Split Screen ========== */}
      {PRODUCT_CATEGORIES.map((category, index) => {
        const isReversed = index % 2 === 1;

        return (
          <section
            key={category.id}
            className="relative flex min-h-screen flex-col md:flex-row"
          >
            {/* Image Panel */}
            <motion.div
              className={`relative h-[40vh] w-full overflow-hidden md:sticky md:top-0 md:h-screen md:w-[55%] ${
                isReversed ? "md:order-2" : "md:order-1"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={category.placeholderImage}
                alt={category.name}
                className="h-full w-full object-cover opacity-35 contrast-[1.1] saturate-[0.6]"
                loading="lazy"
              />
              {/* Gradient overlays */}
              <div
                className={`pointer-events-none absolute inset-0 hidden md:block ${
                  isReversed
                    ? "bg-gradient-to-l from-transparent to-black"
                    : "bg-gradient-to-r from-transparent to-black"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black md:hidden" />
            </motion.div>

            {/* Content Panel */}
            <div
              className={`relative flex w-full flex-col justify-center px-8 py-12 md:min-h-screen md:w-[45%] md:px-12 ${
                isReversed ? "md:order-1" : "md:order-2"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="mb-6 inline-block border border-[#c4956a] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c4956a]">
                  Coming Soon
                </span>
              </motion.div>

              <motion.div
                className="mb-8 h-0.5 w-[60px] bg-[#c4956a]"
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              <motion.h3
                className="mb-6 text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[0.95] tracking-[0.05em] text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {category.name}
              </motion.h3>

              <motion.p
                className="mb-8 max-w-[400px] text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-white/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {category.description}
              </motion.p>

              {/* Index number */}
              <motion.span
                className={`pointer-events-none absolute bottom-8 text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-widest text-white/[0.03] ${
                  isReversed ? "left-8 md:left-8" : "right-8 md:right-8"
                }`}
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

      {/* ========== FOOTER SECTION - Email Signup ========== */}
      <section className="relative px-4 py-20">
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-2 text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-widest text-white">
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
