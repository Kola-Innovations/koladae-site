export const siteConfig = {
  // Basic Info
  name: "KOLADAE",
  tagline: "R&B Artist",
  description:
    "Rising R&B artist blending soulful melodies with contemporary beats. Listen to new music, watch videos, and join the journey.",

  // URLs - UPDATE THIS
  url: "https://koladae.com",
  ogImage: "/og-image.jpg",

  // Social Links - UPDATE THESE
  socials: {
    instagram: "#", // e.g., "https://instagram.com/koladae"
    tiktok: "#", // e.g., "https://tiktok.com/@koladae"
    twitter: "#", // e.g., "https://twitter.com/koladae"
    spotify: "#", // e.g., "https://open.spotify.com/artist/..."
    appleMusic: "#", // e.g., "https://music.apple.com/artist/..."
    youtube: "#", // e.g., "https://youtube.com/@koladae"
  },

  // Contact - UPDATE THIS
  email: "booking@koladae.com",

  // Per-page SEO
  pages: {
    home: {
      title: "KOLADAE | Afrobeat & R&B Artist - Official Website",
      description:
        "Discover KOLADAE - rising Afrobeat & R&B artist blending soulful melodies with contemporary beats. Listen to new music, watch videos, and join the journey.",
    },
    pressKit: {
      title: "Press Kit | KOLADAE - Media & Press Resources",
      description:
        "Access KOLADAE's official press kit. Download high-res photos, bio, music samples, and booking information for media and press inquiries.",
    },
    shop: {
      title: "Shop | KOLADAE - Official Merch",
      description:
        "Shop official KOLADAE merchandise. Coming soon - exclusive apparel, accessories, and limited edition items.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
