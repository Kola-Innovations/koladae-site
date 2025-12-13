import { motion } from "motion/react";

/**
 * Option A: Split-screen style (like AboutSection)
 * Left side: Faded image of artist
 * Right side: Press mentions organized by publication
 */

interface PressItem {
  title: string;
  url?: string;
  quote?: string;
}

interface PressCategory {
  publication: string;
  items: PressItem[];
}

interface AccoladesSplitProps {
  title?: string;
  imageUrl?: string;
  pressCategories?: PressCategory[];
  bgColor?: string;
  imageOpacity?: number;
  reversed?: boolean;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

const defaultPressCategories: PressCategory[] = [
  {
    publication: "Complex",
    items: [
      { title: "The Best Canadian EP's of 2024", url: "#" },
      { title: "'Colours' Premiere", url: "#" },
      { title: "'Flashlight' Premiere", url: "#" },
    ],
  },
  {
    publication: "The Fader",
    items: [
      {
        title: "Get Ready for Summer with Koladae's Latest Single",
        url: "#",
      },
    ],
  },
  {
    publication: "CBC Radio One",
    items: [
      {
        title: "Debut Interview + Performance on Q",
        url: "#",
        quote: "One of the most exciting new voices in Canadian music",
      },
    ],
  },
  {
    publication: "Hillydilly",
    items: [
      { title: "Best New Artists of the Month", url: "#" },
      { title: "EP Review", url: "#" },
    ],
  },
];

// Film grain CSS
const grainStyles = `
  .film-grain-accolades {
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
`;

export default function AccoladesSplit({
  title = "Press + Accolades",
  imageUrl = DEFAULT_IMAGE,
  pressCategories = defaultPressCategories,
  bgColor = "#f5f0e8",
  imageOpacity = 0.3,
  reversed = false,
}: AccoladesSplitProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <style>{grainStyles}</style>

      <div
        className={`flex min-h-screen ${reversed ? "flex-row-reverse" : ""}`}
      >
        {/* Sticky Image Panel */}
        <div className="sticky top-0 hidden h-screen w-[55%] lg:block">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: imageOpacity }}
          />
          {/* Gradient overlay blending to background color */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${
                reversed ? "to left" : "to right"
              }, transparent 0%, ${bgColor} 100%)`,
            }}
          />
        </div>

        {/* Content Panel */}
        <motion.div
          className="relative flex min-h-screen w-full flex-col justify-center px-8 py-20 lg:w-[45%] lg:px-16"
          style={{ backgroundColor: bgColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Film Grain */}
          <div className="film-grain-accolades" />

          {/* Title */}
          <motion.h2
            className="relative z-10 mb-12 font-bold text-gray-800"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          {/* Press Categories */}
          <div className="relative z-10 space-y-8">
            {pressCategories.map((category, catIdx) => (
              <motion.div
                key={category.publication}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.1 }}
              >
                {/* Publication Name */}
                <h3
                  className="mb-3 font-semibold uppercase tracking-widest text-gray-800"
                  style={{ fontSize: "0.875rem" }}
                >
                  {category.publication}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item.title}>
                      {item.url ? (
                        <a
                          href={item.url}
                          className="text-gray-600 transition-colors duration-200 hover:text-gray-900"
                          style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                        >
                          • {item.title}
                        </a>
                      ) : (
                        <span
                          className="text-gray-600"
                          style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                        >
                          • {item.title}
                        </span>
                      )}
                      {item.quote && (
                        <p
                          className="mt-1 pl-3 italic text-gray-500"
                          style={{ fontSize: "0.875rem" }}
                        >
                          "{item.quote}"
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
