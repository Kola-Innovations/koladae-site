import { useEffect, useState } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import {
  Butterfly,
  SpinningVinyl,
  VHSOverlay,
} from "./shared/vhs-effects";
import { BUTTERFLIES, PRODUCT_CATEGORIES } from "./shared/shop-constants";

interface ShopComingSoonVinylProps {
  artistName?: string;
}

export default function ShopComingSoonVinyl({
  artistName = "KOLADAE",
}: ShopComingSoonVinylProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background product images in corners */}
      {PRODUCT_CATEGORIES.map((category, index) => (
        <img
          key={category.id}
          src={category.placeholderImage}
          alt=""
          className="pointer-events-none absolute h-[200px] w-[200px] object-cover opacity-[0.08] grayscale"
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
        className="animate-float-vinyl absolute h-[60px] w-[60px] rounded-full opacity-40"
        style={{
          left: "8%",
          top: "20%",
          animationDuration: "6s",
          background: `radial-gradient(circle at center, #1a1a1a 0%, #1a1a1a 15%, #333 16%, #111 17%, #222 30%, #111 31%, #333 45%, #111 46%, #1a1a1a 90%)`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4956a] opacity-70" />
      </div>
      <div
        className="animate-float-vinyl absolute h-[45px] w-[45px] rounded-full opacity-40"
        style={{
          right: "10%",
          top: "15%",
          animationDuration: "8s",
          animationDelay: "1s",
          background: `radial-gradient(circle at center, #1a1a1a 0%, #1a1a1a 15%, #333 16%, #111 17%, #222 30%, #111 31%, #333 45%, #111 46%, #1a1a1a 90%)`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4956a] opacity-70" />
      </div>
      <div
        className="animate-float-vinyl absolute h-[55px] w-[55px] rounded-full opacity-40"
        style={{
          right: "12%",
          bottom: "25%",
          animationDuration: "7s",
          animationDelay: "0.5s",
          background: `radial-gradient(circle at center, #1a1a1a 0%, #1a1a1a 15%, #333 16%, #111 17%, #222 30%, #111 31%, #333 45%, #111 46%, #1a1a1a 90%)`,
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4956a] opacity-70" />
      </div>

      {/* VHS Effects */}
      <VHSOverlay />

      {/* Butterflies */}
      {BUTTERFLIES.map((butterfly) => (
        <Butterfly
          key={butterfly.id}
          left={butterfly.left}
          top={butterfly.top}
          delay={butterfly.delay}
          duration={butterfly.duration}
        />
      ))}

      {/* Content Container */}
      <div
        className="relative z-40 flex min-h-screen flex-col items-center px-4 py-12 transition-opacity duration-800 sm:px-8"
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

        {/* Main Content - Vinyl + Text */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {/* Coming Soon Text - Above Vinyl */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-[clamp(0.7rem,2vw,0.9rem)] font-medium tracking-widest text-[#c4956a]">
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
            <SpinningVinyl size="medium" />
            {/* Label text */}
            <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(8px,2vw,12px)] font-bold uppercase tracking-[0.1em] text-white/90">
              {artistName}
            </span>
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
                className="cursor-default border border-white/30 bg-transparent px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-white/60 hover:bg-white/5 hover:text-white"
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
