import { motion } from "motion/react";

/**
 * Option C: Stats + Press hybrid
 * Top section: Key stats in a clean row
 * Below: Press mentions organized by publication
 */

interface Stat {
  label: string;
  value: string;
}

interface PressItem {
  title: string;
  url?: string;
  quote?: string;
}

interface PressCategory {
  publication: string;
  items: PressItem[];
}

interface AccoladesStatsProps {
  title?: string;
  stats?: Stat[];
  pressCategories?: PressCategory[];
  bgColor?: string;
  accentColor?: string;
}

const defaultStats: Stat[] = [
  { label: "Monthly Listeners", value: "50K+" },
  { label: "Press Features", value: "25+" },
  { label: "Shows Played", value: "100+" },
  { label: "Years Active", value: "5" },
];

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
    items: [{ title: "Get Ready for Summer with Koladae's Latest Single", url: "#" }],
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
  .film-grain-stats {
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

export default function AccoladesStats({
  title = "Press + Accolades",
  stats = defaultStats,
  pressCategories = defaultPressCategories,
  bgColor = "#f5f0e8",
  accentColor = "#c4956a",
}: AccoladesStatsProps) {
  return (
    <section
      className="relative min-h-screen w-full py-20 md:py-32"
      style={{ backgroundColor: bgColor }}
    >
      <style>{grainStyles}</style>

      {/* Film Grain Overlay */}
      <div className="film-grain-stats" />

      <div className="container-main relative z-10">
        {/* Title */}
        <motion.h2
          className="mb-16 font-bold text-gray-800"
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

        {/* Stats Row */}
        <motion.div
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <div key={stat.label} className="text-center md:text-left">
              <motion.p
                className="mb-2 font-bold"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: accentColor,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p
                className="text-sm uppercase tracking-widest text-gray-500"
                style={{ fontSize: "0.75rem" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div
          className="mb-16 h-px w-full"
          style={{ backgroundColor: accentColor, opacity: 0.3 }}
        />

        {/* Press Categories - Two Column Layout */}
        <div className="grid gap-12 md:grid-cols-2">
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
                className="mb-4 font-semibold uppercase tracking-widest"
                style={{ fontSize: "0.875rem", color: accentColor }}
              >
                {category.publication}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.title}>
                    {item.url ? (
                      <a
                        href={item.url}
                        className="text-gray-700 transition-colors duration-200 hover:text-gray-900"
                        style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
                      >
                        • {item.title}
                      </a>
                    ) : (
                      <span
                        className="text-gray-700"
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
      </div>
    </section>
  );
}
