import { motion } from "motion/react";

/**
 * Option C: Marquee/ticker style Listen section
 * Scrolling ticker with platform names
 * Below: Large clickable platform buttons + social links
 */

interface StreamingPlatform {
  name: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
}

interface ListenMarqueeProps {
  title?: string;
  streamingPlatforms?: StreamingPlatform[];
  socialLinks?: SocialLink[];
  bgColor?: string;
  accentColor?: string;
}

const defaultStreamingPlatforms: StreamingPlatform[] = [
  { name: "Spotify", url: "#" },
  { name: "Apple Music", url: "#" },
  { name: "YouTube Music", url: "#" },
  { name: "Amazon Music", url: "#" },
  { name: "Tidal", url: "#" },
  { name: "Deezer", url: "#" },
  { name: "SoundCloud", url: "#" },
];

const defaultSocialLinks: SocialLink[] = [
  { name: "Instagram", url: "#" },
  { name: "TikTok", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "YouTube", url: "#" },
  { name: "Facebook", url: "#" },
];

// Film grain + marquee CSS
const styles = `
  .film-grain-listen-marquee {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.06;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  .listen-marquee-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .listen-marquee-content {
    display: inline-block;
    animation: listenMarquee 25s linear infinite;
  }

  .listen-marquee-content:hover {
    animation-play-state: paused;
  }

  @keyframes listenMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export default function ListenMarquee({
  title = "Listen Now",
  streamingPlatforms = defaultStreamingPlatforms,
  socialLinks = defaultSocialLinks,
  bgColor = "#0a0a0a",
  accentColor = "#c4956a",
}: ListenMarqueeProps) {
  // Duplicate platforms for seamless loop
  const duplicatedPlatforms = [...streamingPlatforms, ...streamingPlatforms];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: bgColor }}
    >
      <style>{styles}</style>

      {/* Film Grain Overlay */}
      <div className="film-grain-listen-marquee" />

      {/* Title */}
      <motion.h2
        className="container-main relative z-10 mb-8 text-sm font-medium uppercase tracking-[0.3em] text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Marquee */}
      <motion.div
        className="listen-marquee-container relative z-10 mb-16 border-y border-gray-800 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="listen-marquee-content">
          {duplicatedPlatforms.map((platform, idx) => (
            <span
              key={`${platform.name}-${idx}`}
              className="mx-8 inline-block text-3xl font-bold uppercase tracking-wider text-white md:mx-12 md:text-4xl"
              style={{ opacity: 0.8 }}
            >
              {platform.name}
              <span className="mx-8 text-gray-600 md:mx-12">•</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="container-main relative z-10">
        {/* Streaming Platforms Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className="mb-8 text-sm font-medium uppercase tracking-[0.3em]"
            style={{ color: accentColor }}
          >
            Stream Everywhere
          </h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {streamingPlatforms.map((platform, idx) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                className="group flex items-center justify-center border border-gray-700 bg-transparent px-6 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {platform.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="mb-16 h-px w-full"
          style={{ backgroundColor: accentColor, opacity: 0.3 }}
        />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3
            className="mb-8 text-sm font-medium uppercase tracking-[0.3em]"
            style={{ color: accentColor }}
          >
            Follow Along
          </h3>

          <div className="flex flex-wrap gap-8">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="text-xl font-light uppercase tracking-wider text-white transition-colors duration-300 hover:opacity-100"
                style={{ opacity: 0.6 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
