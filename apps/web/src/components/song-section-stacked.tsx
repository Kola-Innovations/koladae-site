import { motion } from "motion/react";

// Film grain CSS for grainy effect
const grainStyles = `
  .film-grain-stacked {
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

interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtubeMusic?: string;
  amazonMusic?: string;
  tidal?: string;
  deezer?: string;
  soundcloud?: string;
}

interface SongSectionStackedProps {
  title?: string;
  artist?: string;
  description?: string | string[];
  coverImage?: string;
  headerImage?: string;
  headerVideo?: string;
  releaseDate?: string;
  streamingLinks?: StreamingLinks;
  bgColor?: string;
}

// Icons for each streaming platform
const StreamingIcons = {
  spotify: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  ),
  appleMusic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.635-1.93-1.638-.083-.65.106-1.2.587-1.635.326-.294.718-.472 1.14-.586.36-.097.728-.17 1.09-.26.273-.067.5-.2.604-.486a.942.942 0 00.06-.348V9.348a.477.477 0 00-.394-.5c-.12-.025-.243-.04-.366-.053l-3.07-.383c-.063-.008-.125-.02-.188-.024a.394.394 0 00-.453.37c-.005.058-.002.117-.002.176v7.69c0 .376-.047.746-.2 1.095-.263.598-.712.987-1.32 1.184-.372.12-.756.18-1.15.197-.728.03-1.376-.18-1.855-.753-.387-.463-.516-1.01-.413-1.603.132-.755.612-1.24 1.282-1.55.378-.175.78-.273 1.188-.345.28-.05.56-.104.84-.16.226-.046.417-.15.542-.358a.773.773 0 00.105-.403V7.178c0-.21.038-.403.196-.56a.722.722 0 01.4-.208c.238-.042.478-.074.718-.107l2.836-.352 2.394-.296c.075-.01.15-.023.224-.026.283-.012.478.168.503.45.005.057.003.114.003.17l.002 3.865z" />
    </svg>
  ),
  youtubeMusic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" />
    </svg>
  ),
  amazonMusic: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705a.66.66 0 01-.753.077c-1.059-.881-1.247-1.29-1.829-2.131-1.75 1.784-2.991 2.32-5.258 2.32-2.686 0-4.779-1.657-4.779-4.967 0-2.585 1.401-4.349 3.393-5.21 1.727-.752 4.14-.886 5.98-1.095v-.41c0-.752.058-1.643-.383-2.294-.385-.58-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.566-.549.58l-3.063-.331c-.259-.056-.548-.266-.472-.66C6.057 1.926 9.311 1 12.152 1c1.448 0 3.337.385 4.479 1.478 1.448 1.379 1.31 3.218 1.31 5.221v4.73c0 1.422.59 2.044 1.145 2.812.197.275.24.606-.01.811-.624.521-1.737 1.49-2.349 2.034l-.583-.29zM21.779 19.318C19.424 21.199 15.865 22.2 12.8 22.2c-4.368 0-8.301-1.615-11.276-4.303-.234-.212-.025-.501.255-.336 3.21 1.867 7.177 2.992 11.28 2.992 2.765 0 5.805-.574 8.601-1.762.422-.182.776.278.369.527z" />
    </svg>
  ),
  tidal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004-4.004 4.004 4.004 4.004 4.004-4.004 4.004 4.004 4.004-4.004-4.004-4.004 4.004-4.004-4.004-4.004zm3.999 4.004l4.004-4.004L24.019 7.996l-4.004 4.004-4.004-4.004z" />
    </svg>
  ),
  deezer: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38H6.27zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.566v3.027h5.189v-3.027H6.27zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.752v3.027h5.19v-3.027H0zm6.27 0v3.027h5.189v-3.027H6.27zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19z" />
    </svg>
  ),
  soundcloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.052-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.21-1.308-.21-1.319c-.01-.057-.044-.094-.09-.094l.012-.012zm1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.104.106.104.061 0 .12-.044.12-.104l.24-2.458-.24-2.563c0-.06-.059-.104-.121-.104zm.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.138l.24-2.544-.24-2.625c-.015-.09-.075-.15-.166-.15zm.96-.091c-.089 0-.165.075-.165.164l-.21 2.731.225 2.594c0 .089.075.164.165.164.089 0 .165-.075.18-.164l.24-2.609-.24-2.716c-.015-.089-.091-.164-.195-.164zm.976-.086c-.104 0-.18.074-.195.179l-.21 2.818.24 2.611c.014.104.09.179.194.179.09 0 .181-.075.181-.179l.255-2.611-.24-2.818c-.015-.105-.091-.179-.225-.179zm1.005-.12c-.119 0-.21.089-.225.209l-.21 2.908.225 2.611c.015.119.105.209.225.209.119 0 .224-.09.224-.209l.254-2.611-.24-2.908c-.014-.12-.104-.209-.253-.209zm.99-.149c-.12 0-.225.09-.225.224l-.24 3.044.254 2.581c0 .135.105.239.239.239.12 0 .226-.104.226-.239l.27-2.581-.27-3.044c0-.135-.09-.224-.254-.224zm1.006-.045c-.135 0-.24.105-.255.24l-.24 3.074.255 2.565c.015.149.12.254.255.254.12 0 .239-.105.254-.254l.271-2.565-.271-3.074c-.015-.135-.119-.24-.269-.24zm1.021-.002c-.15 0-.271.12-.271.27l-.225 3.059.271 2.534c0 .164.12.285.27.285.149 0 .27-.12.27-.285l.285-2.534-.285-3.059c0-.15-.121-.27-.285-.27h.001zm1.71.195c0-.165-.12-.3-.285-.3-.164 0-.285.135-.3.3l-.24 2.85.255 2.505c.015.165.135.3.3.3.149 0 .285-.135.285-.3l.27-2.505-.285-2.85zm.736-1.38c-.18 0-.314.135-.33.315l-.24 4.245.255 2.475c.015.18.149.315.33.315.165 0 .314-.135.314-.315l.285-2.49-.285-4.23c-.014-.18-.149-.315-.329-.315zm.99-.089c-.194 0-.344.149-.359.344l-.24 4.335.254 2.46c.015.194.165.344.36.344.179 0 .33-.15.345-.344l.284-2.46-.284-4.335c-.016-.195-.166-.344-.36-.344zm1.005-.09c-.21 0-.359.15-.375.36l-.24 4.424.256 2.43c.014.21.164.36.374.36.195 0 .345-.15.36-.36l.285-2.43-.285-4.424c-.015-.21-.165-.36-.375-.36zm.99-.18c-.209 0-.374.165-.389.374l-.24 4.605.255 2.4c.015.21.18.375.39.375.209 0 .374-.165.374-.375l.285-2.4-.285-4.605c-.015-.21-.165-.374-.39-.374zm6.395 1.741c-.375 0-.72.074-1.035.209-.225-2.581-2.385-4.605-5.011-4.605-.645 0-1.275.135-1.845.359-.224.091-.284.18-.284.36v9.39c0 .195.149.359.344.375h7.846c1.62 0 2.925-1.32 2.925-2.955-.015-1.636-1.321-2.955-2.94-2.955v-.178z" />
    </svg>
  ),
};

// Platform order for rendering
const PLATFORM_ORDER: (keyof StreamingLinks)[] = [
  "spotify",
  "appleMusic",
  "youtubeMusic",
  "amazonMusic",
  "tidal",
  "deezer",
  "soundcloud",
];

// Display names for platforms
const PlatformNames: Record<keyof StreamingLinks, string> = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  youtubeMusic: "YouTube Music",
  amazonMusic: "Amazon Music",
  tidal: "Tidal",
  deezer: "Deezer",
  soundcloud: "SoundCloud",
};

const DEFAULT_COVER =
  "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1470&auto=format&fit=crop";

const DEFAULT_HEADER =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop";

const defaultDescription = [
  "A powerful anthem about self-discovery and growth. This track combines soulful vocals with modern production, creating an unforgettable listening experience.",
  "Written during a transformative period, every lyric tells a story of resilience and hope.",
];

export default function SongSectionStacked({
  title = "Rising Up",
  artist = "Koladae",
  description = defaultDescription,
  coverImage = DEFAULT_COVER,
  headerImage = DEFAULT_HEADER,
  headerVideo,
  releaseDate = "2024",
  streamingLinks,
  bgColor = "#f5f0e8",
}: SongSectionStackedProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Grain Styles */}
      <style>{grainStyles}</style>

      {/* Film Grain Overlay - covers entire section */}
      <div className="film-grain-stacked" />

      {/* Header Media - Full Width with horizontal blend */}
      <motion.div
        className="relative h-[50vh] w-full overflow-hidden md:h-[60vh]"
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
            style={{ opacity: 0.7 }}
          >
            <source src={headerVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={headerImage}
            alt={title}
            className="h-full w-full object-cover"
            style={{ opacity: 0.7 }}
          />
        )}
        {/* Gradient overlay - smooth vertical fade to background color */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 40%, ${bgColor} 100%)`,
          }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="container-main relative z-10 -mt-24 pb-20 md:-mt-32">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Album Cover - Overlapping */}
          <motion.div
            className="relative mx-auto w-full max-w-xs flex-shrink-0 md:mx-0 md:max-w-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square overflow-hidden shadow-2xl">
              <img
                src={coverImage}
                alt={`${title} album cover`}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Play Button Overlay */}
            <motion.button
              type="button"
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 hover:opacity-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="ml-1"
                  aria-hidden="true"
                >
                  <title>Play</title>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.button>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 pt-4 md:pt-32"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Release Date */}
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
              {releaseDate}
            </p>

            {/* Title */}
            <h2
              className="mb-2 font-bold text-black"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>

            {/* Artist */}
            <p className="mb-6 text-xl text-gray-600">{artist}</p>

            {/* Description */}
            <div className="mb-8 space-y-4">
              {descriptionArray.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    lineHeight: 1.8,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Streaming Links */}
            {streamingLinks && (
              <div className="flex flex-wrap gap-3">
                {PLATFORM_ORDER.map((platform) => {
                  const url = streamingLinks[platform];
                  if (!url) return null;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {StreamingIcons[platform]}
                      {PlatformNames[platform]}
                    </motion.a>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
