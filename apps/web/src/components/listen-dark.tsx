import { motion } from "motion/react";

/**
 * Option B: Dark/VHS style Listen section
 * Centered content with streaming platforms + social links
 * VHS grain aesthetic matching PressKitHero
 */

interface StreamingPlatform {
  name: string;
  url: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
}

interface ListenDarkProps {
  title?: string;
  subtitle?: string;
  streamingPlatforms?: StreamingPlatform[];
  socialLinks?: SocialLink[];
  accentColor?: string;
  imageUrl?: string;
  imageOpacity?: number;
  reversed?: boolean;
}

const defaultStreamingPlatforms: StreamingPlatform[] = [
  { name: "Spotify", url: "#" },
  { name: "Apple Music", url: "#" },
  { name: "YouTube Music", url: "#" },
  { name: "Amazon Music", url: "#" },
  { name: "Tidal", url: "#" },
  { name: "Deezer", url: "#" },
];

const defaultSocialLinks: SocialLink[] = [
  { name: "Instagram", url: "#" },
  { name: "TikTok", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "YouTube", url: "#" },
];

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

// VHS/Dark styles
const vhsStyles = `
  .film-grain-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  .vignette-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%);
  }

  .vhs-scanlines-listen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

export default function ListenDark({
  title = "Listen",
  subtitle = "Stream everywhere",
  streamingPlatforms = defaultStreamingPlatforms,
  socialLinks = defaultSocialLinks,
  accentColor = "#c4956a",
  imageUrl = DEFAULT_IMAGE,
  imageOpacity = 0.3,
  reversed = false,
}: ListenDarkProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <style>{vhsStyles}</style>

      {/* VHS Effects */}
      <div className="film-grain-listen" />
      <div className="vignette-listen" />
      <div className="vhs-scanlines-listen" />

      {/* Faded Image Panel */}
      <motion.div
        className={`absolute top-0 z-1 hidden h-full w-1/2 lg:block ${
          reversed ? "left-0" : "right-0"
        }`}
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: imageOpacity }}
        />
        {/* Gradient overlay - smooth fade to black */}
        <div
          className="absolute inset-0"
          style={{
            background: reversed
              ? "linear-gradient(to right, transparent 0%, black 100%)"
              : "linear-gradient(to left, transparent 0%, black 100%)",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex min-h-screen flex-col justify-center lg:w-1/2 ${
          reversed ? "ml-auto" : ""
        }`}
      >
        <div className="container-main max-w-xl">
          {/* Title */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-3 font-bold uppercase tracking-widest text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Streaming Platforms */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Stream Now
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {streamingPlatforms.map((platform, idx) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  className="group flex items-center justify-center border border-gray-700 bg-transparent px-4 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {platform.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
              Follow
            </h3>
            <div className="flex flex-wrap gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-sm uppercase tracking-wider transition-colors duration-300"
                  style={{ color: accentColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = accentColor)
                  }
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
