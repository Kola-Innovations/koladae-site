import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface SongSectionHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  listenUrl?: string;
  buttonText?: string;
  overlayOpacity?: number;
  textPosition?: "center" | "left" | "right";
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

export default function SongSectionHero({
  title = "Midnight Dreams",
  subtitle = "New Single Out Now",
  description = "An atmospheric journey through sound and emotion",
  backgroundImage = DEFAULT_IMAGE,
  backgroundVideo,
  listenUrl = "#",
  buttonText = "Listen Now",
  overlayOpacity = 0.5,
  textPosition = "center",
}: SongSectionHeroProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  const positionClasses = {
    center: "items-center justify-center text-center",
    left: "items-center justify-start text-left pl-8 md:pl-16 lg:pl-24",
    right: "items-center justify-end text-right pr-8 md:pr-16 lg:pr-24",
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Media with Parallax */}
      <motion.div
        className="absolute inset-0 h-[140%] w-full"
        style={{ y: backgroundY, top: "-20%" }}
      >
        {backgroundVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={backgroundImage}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
      </motion.div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      {/* Gradient Overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Content */}
      <motion.div
        className={`relative z-10 flex h-full w-full flex-col ${positionClasses[textPosition]}`}
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-3xl px-8">
          {/* Subtitle */}
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {subtitle}
          </motion.p>

          {/* Title */}
          <motion.h2
            className="mb-6 font-bold text-white"
            style={{
              fontSize: "clamp(3rem, 10vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mb-10 max-w-xl text-lg text-white/80 md:text-xl"
            style={{ lineHeight: 1.6 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href={listenUrl}
            className="group inline-flex items-center gap-4 border-2 border-white bg-white px-10 py-5 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            >
              <title>Play</title>
              <path d="M8 5v14l11-7z" />
            </svg>
            {buttonText}
          </motion.a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex h-14 w-8 items-start justify-center rounded-full border-2 border-white/30 p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
