import { useState, useEffect } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { VHSOverlay, BackgroundImage } from "./shared/vhs-effects";
import { PRODUCT_CATEGORIES, POLAROID_POSITIONS } from "./shared/shop-constants";

interface ShopComingSoonPolaroidProps {
  artistName?: string;
  backgroundImage?: string;
  imageOpacity?: number;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1470&auto=format&fit=crop";

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
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <BackgroundImage src={backgroundImage} opacity={imageOpacity} />

      {/* VHS Effects */}
      <VHSOverlay />

      {/* Content Container */}
      <div
        className="relative z-40 flex min-h-screen flex-col items-center px-4 py-12 transition-opacity duration-[800ms] sm:px-8"
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
          className="mt-8 text-center sm:mt-12"
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
        <div className="relative mx-auto mt-8 flex w-full max-w-4xl flex-1 items-center justify-center sm:mt-12">
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
                    className="h-full w-full object-cover saturate-[0.75] contrast-[1.05] brightness-95"
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
          <div className="grid w-full grid-cols-2 gap-4 px-2 md:hidden">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className="relative bg-[#fefefe] p-3 pb-11 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
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
                    className="h-full w-full object-cover saturate-[0.75] contrast-[1.05] brightness-95"
                    loading="lazy"
                  />
                  {/* Noise overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
                {/* Label */}
                <span className="absolute bottom-2.5 left-0 right-0 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1a1a1a]">
                  {category.name}
                </span>
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
