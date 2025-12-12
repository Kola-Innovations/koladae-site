import { motion } from "motion/react";

const DEFAULT_IMAGE_URL =
  "https://images.unsplash.com/photo-1657042855066-7f09c6c2c350?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface AboutSectionProps {
  title?: string;
  description?: string | string[];
  imageUrl?: string;
  socialLinks?: SocialLink[];
  bgColor?: "cream" | "sage" | "taupe";
  imageOpacity?: number;
  reversed?: boolean;
}

// Color presets with text color configurations
const COLOR_PRESETS: Record<
  string,
  {
    bg: string;
    title: string;
    text: string;
    socialDefault: string;
    socialHover: string;
  }
> = {
  cream: {
    bg: "#f5f0e8",
    title: "text-gray-800",
    text: "text-gray-600",
    socialDefault: "text-gray-500",
    socialHover: "hover:text-gray-800",
  },
  sage: {
    bg: "#4a5548",
    title: "text-white",
    text: "text-gray-200",
    socialDefault: "text-gray-300",
    socialHover: "hover:text-white",
  },
  taupe: {
    bg: "#8b7d6b",
    title: "text-white",
    text: "text-gray-200",
    socialDefault: "text-gray-300",
    socialHover: "hover:text-white",
  },
};

const defaultSocialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <title>Instagram</title>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <title>TikTok</title>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <title>Twitter</title>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <title>Spotify</title>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Music",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <title>Apple Music</title>
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.635-1.93-1.638-.083-.65.106-1.2.587-1.635.326-.294.718-.472 1.14-.586.36-.097.728-.17 1.09-.26.273-.067.5-.2.604-.486a.942.942 0 00.06-.348V9.348a.477.477 0 00-.394-.5c-.12-.025-.243-.04-.366-.053l-3.07-.383c-.063-.008-.125-.02-.188-.024a.394.394 0 00-.453.37c-.005.058-.002.117-.002.176v7.69c0 .376-.047.746-.2 1.095-.263.598-.712.987-1.32 1.184-.372.12-.756.18-1.15.197-.728.03-1.376-.18-1.855-.753-.387-.463-.516-1.01-.413-1.603.132-.755.612-1.24 1.282-1.55.378-.175.78-.273 1.188-.345.28-.05.56-.104.84-.16.226-.046.417-.15.542-.358a.773.773 0 00.105-.403V7.178c0-.21.038-.403.196-.56a.722.722 0 01.4-.208c.238-.042.478-.074.718-.107l2.836-.352 2.394-.296c.075-.01.15-.023.224-.026.283-.012.478.168.503.45.005.057.003.114.003.17l.002 3.865z" />
      </svg>
    ),
  },
];

const defaultDescription = [
  "Koladae is a rising artist blending soulful melodies with contemporary beats, creating a unique sound that resonates with listeners worldwide. With roots in R&B and influences spanning across genres, each track tells a story of passion, growth, and authenticity.",
  "From intimate acoustic sessions to electrifying live performances, Koladae brings raw emotion and undeniable energy to every stage. The journey began in small venues and has grown into a movement that connects with fans on a deeply personal level.",
  "With upcoming releases and collaborations in the works, Koladae continues to push creative boundaries while staying true to the authentic sound that started it all.",
];

export default function AboutSection({
  title = "About",
  description = defaultDescription,
  imageUrl = DEFAULT_IMAGE_URL,
  socialLinks = defaultSocialLinks,
  bgColor = "cream",
  imageOpacity = 0.2,
  reversed = false,
}: AboutSectionProps) {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  // Get color configuration - either from preset or use custom color
  const colorConfig = COLOR_PRESETS[bgColor] || {
    bg: bgColor,
    title: "text-white",
    text: "text-gray-200",
    socialDefault: "text-gray-300",
    socialHover: "hover:text-white",
  };

  const actualBgColor = COLOR_PRESETS[bgColor]?.bg || bgColor;

  return (
    <section className="relative min-h-screen w-full">
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
              }, transparent 0%, ${actualBgColor} 100%)`,
            }}
          />
        </div>

        {/* Content Panel */}
        <motion.div
          className="flex min-h-screen w-full flex-col justify-center px-8 py-20 lg:w-[45%] lg:px-16"
          style={{ backgroundColor: actualBgColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <motion.h2
            className={`mb-6 font-bold ${colorConfig.title}`}
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <div className="mb-10 space-y-5">
            {descriptionArray.map((paragraph, idx) => (
              <motion.p
                key={paragraph.slice(0, 30)}
                className={colorConfig.text}
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                  lineHeight: 1.8,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className={`${colorConfig.socialDefault} ${colorConfig.socialHover} transition-colors duration-300`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
