import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Track {
  number: number;
  title: string;
  duration: string;
  featured?: string;
}

interface SongSectionAlbumProps {
  albumTitle?: string;
  artist?: string;
  releaseYear?: string;
  coverImage?: string;
  description?: string;
  tracks?: Track[];
  accentColor?: string;
  bgColor?: string;
  listenUrl?: string;
}

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1470&auto=format&fit=crop";

const defaultTracks: Track[] = [
  { number: 1, title: "Intro - First Light", duration: "1:42" },
  { number: 2, title: "Keep On Rolling", duration: "3:28" },
  { number: 3, title: "Midnight Dreams", duration: "4:15" },
  { number: 4, title: "City Lights", duration: "3:52", featured: "ft. Luna" },
  { number: 5, title: "Rising Up", duration: "3:45" },
  { number: 6, title: "Soul Sessions", duration: "4:02" },
  { number: 7, title: "Outro - New Dawn", duration: "2:18" },
];

export default function SongSectionAlbum({
  albumTitle = "First Chapter",
  artist = "Koladae",
  releaseYear = "2024",
  coverImage = DEFAULT_COVER,
  description = "A debut collection of songs exploring themes of growth, love, and self-discovery. Seven tracks that tell the story of a journey from darkness into light.",
  tracks = defaultTracks,
  accentColor = "#8b5cf6",
  bgColor = "#0a0a0a",
  listenUrl = "#",
}: SongSectionAlbumProps) {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const totalDuration = tracks.reduce((acc, track) => {
    const [mins, secs] = track.duration.split(":").map(Number);
    return acc + mins * 60 + secs;
  }, 0);

  const formatTotalDuration = () => {
    const mins = Math.floor(totalDuration / 60);
    return `${mins} min`;
  };

  return (
    <section
      className="min-h-screen w-full overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container-main">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left Side - Album Cover */}
          <motion.div
            className="flex-shrink-0 lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto w-full max-w-md lg:mx-0">
              {/* Album Cover with Play Button */}
              <motion.div
                className="group relative aspect-square cursor-pointer overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <img
                  src={coverImage}
                  alt={`${albumTitle} album cover`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play/Pause Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <motion.div
                    className="flex h-24 w-24 items-center justify-center rounded-full"
                    style={{ backgroundColor: accentColor }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      {isPlaying ? (
                        <motion.svg
                          key="pause"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          aria-hidden="true"
                        >
                          <title>Pause</title>
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </motion.svg>
                      ) : (
                        <motion.svg
                          key="play"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="ml-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          aria-hidden="true"
                        >
                          <title>Play</title>
                          <path d="M8 5v14l11-7z" />
                        </motion.svg>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                {/* Vinyl Record Effect */}
                <motion.div
                  className="pointer-events-none absolute -right-1/4 top-1/2 -z-10 aspect-square w-full -translate-y-1/2 rounded-full bg-black"
                  style={{
                    background: `radial-gradient(circle at center, ${bgColor} 20%, #1a1a1a 21%, #1a1a1a 40%, #0d0d0d 41%, #0d0d0d 100%)`,
                  }}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{
                    duration: 3,
                    repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />
              </motion.div>

              {/* Album Info */}
              <motion.div
                className="mt-6 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2
                  className="mb-1 font-bold text-white"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                >
                  {albumTitle}
                </h2>
                <p className="mb-3 text-gray-400">
                  {artist} • {releaseYear}
                </p>
                <p className="text-sm text-gray-500">
                  {tracks.length} tracks • {formatTotalDuration()}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="mt-6 hidden text-gray-400 lg:block"
                style={{ lineHeight: 1.8 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {description}
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href={listenUrl}
                className="mt-8 hidden w-full items-center justify-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 lg:inline-flex"
                style={{ backgroundColor: accentColor }}
                whileHover={{ scale: 1.02, brightness: 1.1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>Play</title>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Album
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Track List */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-500">
              Tracklist
            </h3>

            <div className="space-y-1">
              {tracks.map((track, idx) => (
                <motion.div
                  key={track.number}
                  className="group flex cursor-pointer items-center gap-4 rounded-lg px-4 py-4 transition-all duration-200"
                  style={{
                    backgroundColor:
                      hoveredTrack === track.number
                        ? `${accentColor}15`
                        : "transparent",
                  }}
                  onMouseEnter={() => setHoveredTrack(track.number)}
                  onMouseLeave={() => setHoveredTrack(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                >
                  {/* Track Number / Play Icon */}
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                    {hoveredTrack === track.number ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        aria-hidden="true"
                      >
                        <title>Play track</title>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <span className="text-sm text-gray-500">
                        {track.number.toString().padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Track Info */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate font-medium transition-colors duration-200"
                      style={{
                        color:
                          hoveredTrack === track.number ? accentColor : "white",
                      }}
                    >
                      {track.title}
                    </p>
                    {track.featured && (
                      <p className="text-sm text-gray-500">{track.featured}</p>
                    )}
                  </div>

                  {/* Duration */}
                  <span className="flex-shrink-0 text-sm text-gray-500">
                    {track.duration}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Mobile Description & CTA */}
            <div className="mt-8 lg:hidden">
              <p className="mb-6 text-gray-400" style={{ lineHeight: 1.8 }}>
                {description}
              </p>
              <motion.a
                href={listenUrl}
                className="inline-flex w-full items-center justify-center gap-3 py-4 text-sm font-semibold uppercase tracking-wider text-white"
                style={{ backgroundColor: accentColor }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <title>Play</title>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Album
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
