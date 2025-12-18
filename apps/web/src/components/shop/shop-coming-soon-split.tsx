import { useEffect, useState } from "react";
import { motion } from "motion/react";
import MainNav from "../nav";
import EmailSignupSocials from "../email-signup-socials";
import { PARTICLES, PRODUCT_CATEGORIES } from "./shared/shop-constants";

interface ShopComingSoonSplitProps {
  artistName?: string;
}

export default function ShopComingSoonSplit({
  artistName = "KOLADAE",
}: ShopComingSoonSplitProps) {
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
            className="absolute h-0.5 w-0.5 rounded-full bg-white/60 animate-float"
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
        className="relative flex h-screen flex-col items-center justify-center transition-opacity duration-800"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        {/* Navigation - positioned absolutely */}
        <div className="absolute left-0 right-0 top-0 z-50 px-8 pt-12">
          <div className="flex flex-col items-center">
            <h1
              className="mb-4 text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-[0.3em] text-white opacity-0 animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
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
          className="px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="mb-4 block text-[clamp(0.7rem,2vw,0.9rem)] font-medium tracking-widest text-[#c4956a]">
            COMING SOON
          </span>
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-bold leading-[0.95] tracking-wide text-white">
            SHOP
          </h2>
          <p className="mt-4 text-[clamp(0.9rem,2vw,1.1rem)] text-gray-400">
            Explore what&apos;s dropping
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/50 animate-bounce-scroll">
          <span>Scroll</span>
          <svg
            className="h-5 w-5 stroke-white/50"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Category Sections */}
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
                className="h-full w-full object-cover opacity-35 saturate-[0.6] contrast-[1.1]"
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

      {/* Footer Section with Email Signup */}
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
