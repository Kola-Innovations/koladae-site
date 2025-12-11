import { motion } from "motion/react";

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop",
];

interface SongSectionProps {
  title?: string;
  description?: string | string[];
  images?: [string, string, string];
  videoUrl?: string;
  videoOpacity?: number;
  listenUrl?: string;
  buttonText?: string;
  reversed?: boolean;
  darkBgColor?: string;
}

const defaultDescription = [
  "A soulful track that blends smooth R&B vibes with contemporary production. This song captures the essence of perseverance and the journey of staying true to yourself.",
  "Featuring heartfelt lyrics and a melody that stays with you long after the music stops.",
];

export default function SongSection({
  title = "Keep On Rolling",
  description = defaultDescription,
  images = DEFAULT_IMAGES as [string, string, string],
  videoUrl,
  videoOpacity = 0.2,
  listenUrl = "#",
  buttonText = "Listen Now",
  reversed = false,
  darkBgColor = "#3d3d3d",
}: SongSectionProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  // If video is provided, use sticky split-screen layout
  if (videoUrl) {
    return (
      <section className="relative min-h-screen w-full">
        <div className={`flex min-h-screen ${reversed ? "flex-row-reverse" : ""}`}>
          {/* Sticky Video Panel */}
          <div className="sticky top-0 hidden h-screen w-[55%] lg:block">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ opacity: videoOpacity }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {/* Dark overlay for better contrast */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${reversed ? "to left" : "to right"}, transparent 0%, ${darkBgColor} 100%)`,
              }}
            />
          </div>

          {/* Scrolling Content Panel */}
          <motion.div
            className="flex min-h-screen w-full flex-col justify-center px-8 py-20 lg:w-[45%] lg:px-16"
            style={{ backgroundColor: darkBgColor }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="mb-6 font-bold text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {title}
            </motion.h2>
            <div className="mb-10 space-y-5">
              {descriptionArray.map((paragraph, idx) => (
                <motion.p
                  key={paragraph.slice(0, 30)}
                  className="text-gray-300"
                  style={{
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.a
              href={listenUrl}
              className="inline-flex w-fit items-center gap-3 border border-white px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:text-black hover:bg-white"
              style={{ letterSpacing: "0.1em" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {buttonText}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <title>Arrow</title>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Fallback: Original image grid layout
  const darkPanel = (
    <motion.div
      className="flex flex-1 flex-col justify-center px-8 py-16 md:px-12 lg:px-16"
      style={{ backgroundColor: darkBgColor }}
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2
        className="mb-6 font-bold text-white"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <div className="mb-8 space-y-4">
        {descriptionArray.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-300"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: 1.7,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <a
        href={listenUrl}
        className="inline-flex w-fit items-center gap-2 border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
        style={{ letterSpacing: "0.05em" }}
      >
        {buttonText}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );

  const imageGrid = (
    <motion.div
      className="flex-[1.5] bg-white p-6 md:p-8"
      initial={{ opacity: 0, x: reversed ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className="grid h-full gap-4"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          minHeight: "450px",
        }}
      >
        {/* Image 1 - Top Left */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={images[0]}
            alt={`${title} - Image 1`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Image 3 - Right side (spans 2 rows) */}
        <motion.div
          className="relative row-span-2 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img
            src={images[2]}
            alt={`${title} - Image 3`}
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Image 2 - Bottom Left */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            src={images[1]}
            alt={`${title} - Image 2`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen w-full">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {reversed ? (
          <>
            {imageGrid}
            {darkPanel}
          </>
        ) : (
          <>
            {darkPanel}
            {imageGrid}
          </>
        )}
      </div>
    </section>
  );
}
