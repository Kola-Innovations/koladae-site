export const siteConfig = {
  // Basic Info
  name: "KOLADAE",
  tagline: "R&B Artist",
  description:
    "Rising R&B artist blending soulful melodies with contemporary beats. Listen to new music, watch videos, and join the journey.",

  // URLs - UPDATE THIS
  url: "https://koladae.com",
  ogImage: "/og-image.jpg",

  // Social & Streaming Links - UPDATE THESE
  socials: {
    instagram: "https://instagram.com/koladaeofficial", // e.g., ""
    tiktok: "https://tiktok.com/@koladae", // e.g., ""
    twitter: "https://twitter.com/koladaemusic",
    facebook: "https://facebook.com/koladaeofficial",
    spotify: "https://open.spotify.com/artist/4tVQpJprSrjd2RQQf2XQJM",
    appleMusic: "https://music.apple.com/ca/artist/koladae/1708974896", // e.g., "https://music.apple.com/artist/..."
    youtube: "https://www.youtube.com/@Koladae", // e.g., "https://youtube.com/@koladae"
    youtubeMusic: "#", // e.g., "https://music.youtube.com/channel/..."
    amazonMusic: "", // e.g., "https://music.amazon.com/artists/..."
    tidal: "#", // e.g., "https://tidal.com/artist/..."
    deezer: "#", // e.g., "https://deezer.com/artist/..."
  },

  // Contact - UPDATE THESE
  contact: {
    management: "management@koladae.com",
    booking: "booking@koladae.com",
  },

  // Navigation Links
  navigation: [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/press-kit", label: "Press Kit" },
    { to: "/contact", label: "Reach Out" },
  ],

  // Current Release / Hero Section
  currentRelease: {
    title: "Keep Rolling",
    rotatingWords: ["KEEP", "ON", "ROLLING"],
    presaveUrl: "#", // UPDATE with actual presave link
    isReleased: false,
  },

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

// Helper: Get streaming platform links for Listen sections
export function getStreamingPlatforms() {
  return [
    { name: "Spotify", url: siteConfig.socials.spotify },
    { name: "Apple Music", url: siteConfig.socials.appleMusic },
    { name: "YouTube Music", url: siteConfig.socials.youtubeMusic },
    { name: "Amazon Music", url: siteConfig.socials.amazonMusic },
    { name: "Tidal", url: siteConfig.socials.tidal },
    { name: "Deezer", url: siteConfig.socials.deezer },
  ];
}

// Helper: Get social media links
export function getSocialLinks() {
  return [
    { name: "Instagram", url: siteConfig.socials.instagram },
    { name: "TikTok", url: siteConfig.socials.tiktok },
    { name: "Twitter", url: siteConfig.socials.twitter },
    { name: "YouTube", url: siteConfig.socials.youtube },
  ];
}

// Helper: Get contact info for contact forms/sections
export function getContactInfo() {
  return [
    {
      label: "Management",
      value: siteConfig.contact.management,
      href: `mailto:${siteConfig.contact.management}`,
    },
    {
      label: "Booking",
      value: siteConfig.contact.booking,
      href: `mailto:${siteConfig.contact.booking}`,
    },
  ];
}
