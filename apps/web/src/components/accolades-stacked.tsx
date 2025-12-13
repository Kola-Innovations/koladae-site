import { motion } from "motion/react";

/**
 * Option B: Stacked header style (like SongSectionStacked)
 * Hero image/video at top with fade
 * Below: Press quotes and publication mentions
 */

interface PressQuote {
  quote: string;
  publication: string;
  articleTitle?: string;
  url?: string;
}

interface AccoladesStackedProps {
  title?: string;
  headerImage?: string;
  headerVideo?: string;
  pressQuotes?: PressQuote[];
  bgColor?: string;
}

const DEFAULT_HEADER =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop";

const defaultPressQuotes: PressQuote[] = [
  {
    quote:
      "One of our favourite new discoveries, and one of the most stunning debuts of the year.",
    publication: "Complex",
    articleTitle: "Best Canadian EP's of 2024",
    url: "#",
  },
  {
    quote:
      "A body of work that should help establish them as an artist that deserves attention outside the music blogosphere.",
    publication: "Hillydilly",
    articleTitle: "EP Review",
    url: "#",
  },
  {
    quote: "Get ready for the summer with this infectious new single.",
    publication: "The Fader",
    url: "#",
  },
  {
    quote: "One of the most exciting new voices in Canadian music.",
    publication: "CBC Radio One",
    articleTitle: "Q with Shad",
    url: "#",
  },
];

// Film grain CSS
const grainStyles = `
  .film-grain-stacked-accolades {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.08;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
`;

export default function AccoladesStacked({
  title = "Press + Accolades",
  headerImage = DEFAULT_HEADER,
  headerVideo,
  pressQuotes = defaultPressQuotes,
  bgColor = "#f5f0e8",
}: AccoladesStackedProps) {
  return (
    <section
      className="relative min-h-screen w-full"
      style={{ backgroundColor: bgColor }}
    >
      <style>{grainStyles}</style>

      {/* Film Grain Overlay */}
      <div className="film-grain-stacked-accolades" />

      {/* Header Media */}
      <motion.div
        className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {headerVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            style={{ opacity: 0.6 }}
          >
            <source src={headerVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={headerImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: 0.6 }}
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 30%, ${bgColor} 100%)`,
          }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="container-main relative z-10 -mt-16 pb-20 md:-mt-24">
        {/* Title */}
        <motion.h2
          className="mb-12 text-center font-bold text-gray-800"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Press Quotes Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {pressQuotes.map((item, idx) => (
            <motion.div
              key={item.publication + idx}
              className="border-l-2 border-gray-300 py-2 pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              {/* Quote */}
              <p
                className="mb-4 italic text-gray-700"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  lineHeight: 1.7,
                }}
              >
                "{item.quote}"
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-2">
                <span className="font-semibold uppercase tracking-wider text-gray-800">
                  {item.publication}
                </span>
                {item.articleTitle && (
                  <>
                    <span className="text-gray-400">—</span>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="text-gray-500 transition-colors hover:text-gray-800"
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
