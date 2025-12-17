import { motion } from "motion/react";

/**
 * Option D: Marquee/timeline style
 * Horizontal scrolling ticker of publication names
 * Below: Featured quotes with minimal editorial feel
 */

interface PressQuote {
  quote: string;
  publication: string;
  articleTitle?: string;
  url?: string;
}

interface AccoladesMarqueeProps {
  title?: string;
  publications?: string[];
  featuredQuotes?: PressQuote[];
  bgColor?: string;
  accentColor?: string;
}

const defaultPublications = [
  "Complex",
  "The Fader",
  "CBC Radio One",
  "Hillydilly",
  "Spotify Editorial",
  "Apple Music",
  "Converse Rubber Tracks",
  "Soho House",
];

const defaultFeaturedQuotes: PressQuote[] = [
  {
    quote:
      "One of our favourite new discoveries, and one of the most stunning debuts of the year.",
    publication: "Complex",
    articleTitle: "Best Canadian EP's of 2024",
    url: "#",
  },
  {
    quote:
      "A body of work that should help establish them as an artist that deserves attention.",
    publication: "Hillydilly",
    url: "#",
  },
  {
    quote: "One of the most exciting new voices in Canadian music.",
    publication: "CBC Radio One",
    articleTitle: "Q with Shad",
    url: "#",
  },
];

// Film grain + marquee CSS
const styles = `
  .film-grain-marquee {
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

  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee-content {
    display: inline-block;
    animation: marquee 30s linear infinite;
  }

  .marquee-content:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

export default function AccoladesMarquee({
  title = "As Seen In",
  publications = defaultPublications,
  featuredQuotes = defaultFeaturedQuotes,
  bgColor = "#0a0a0a",
  accentColor = "#c4956a",
}: AccoladesMarqueeProps) {
  // Duplicate publications for seamless loop
  const duplicatedPublications = [...publications, ...publications];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: bgColor }}
    >
      <style>{styles}</style>

      {/* Film Grain Overlay */}
      <div className="film-grain-marquee" />

      {/* Title */}
      <motion.h2
        className="container-main relative z-10 mb-12 text-sm font-medium uppercase tracking-[0.3em] text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Marquee */}
      <motion.div
        className="marquee-container relative z-10 mb-20 border-y border-gray-800 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="marquee-content">
          {duplicatedPublications.map((pub) => (
            <span
              key={`${pub}`}
              className="mx-8 inline-block text-2xl font-bold uppercase tracking-wider text-white md:mx-12 md:text-3xl"
              style={{ opacity: 0.8 }}
            >
              {pub}
              <span className="mx-8 text-gray-600 md:mx-12">•</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Featured Quotes */}
      <div className="container-main relative z-10">
        <motion.h3
          className="mb-10 text-sm font-medium uppercase tracking-[0.3em]"
          style={{ color: accentColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Featured Press
        </motion.h3>

        <div className="space-y-12">
          {featuredQuotes.map((item, idx) => (
            <motion.div
              key={item.publication}
              className="border-l-2 py-2 pl-8"
              style={{ borderColor: accentColor }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
            >
              {/* Quote */}
              <p
                className="mb-4 text-white"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                "{item.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <span
                  className="font-semibold uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  {item.publication}
                </span>
                {item.articleTitle && (
                  <>
                    <span className="text-gray-600">—</span>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="text-gray-500 transition-colors hover:text-white"
                      >
                        {item.articleTitle}
                      </a>
                    ) : (
                      <span className="text-gray-500">{item.articleTitle}</span>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
