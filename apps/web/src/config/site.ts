import ContactImage from "@/images/resto_blue_flip2.png";

export interface Release {
  title: string;
  rotatingWords: string[];
  presaveUrl: string;
  isReleased: boolean;
  primaryPhoto: string;
  isCurrent: boolean;
  displayOnPdf: boolean;
  description: string;
  links: {
    all: string;
    spotify: string;
    appleMusic: string;
    youtubeMusic: string;
    amazonMusic: string;
    tidal: string;
    deezer: string;
  };
}
export const releases: Release[] = [
  {
    title: "Keep Rolling",
    rotatingWords: ["KEEP", "ON", "ROLLING"],
    presaveUrl: "#", // UPDATE with actual presave link
    isReleased: false,
    primaryPhoto: ContactImage,
    isCurrent: true,
    displayOnPdf: true,
    description: `A soulful track that blends smooth R&B vibes with contemporary production. This song captures the essence of perseverance and the journey of staying true to yourself.

Featuring heartfelt lyrics and a melody that stays with you long after the music stops.`,
    links: {
      all: "#",
      spotify: "#",
      appleMusic: "#",
      youtubeMusic: "#",
      amazonMusic: "#",
      tidal: "#",
      deezer: "#",
    },
  },
  {
    title: "Anabella",
    rotatingWords: ["ANABELLA"],
    presaveUrl: "https://music.apple.com/ca/album/anabella-single/1716626323",
    isReleased: true,
    primaryPhoto:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1470&auto=format&fit=crop",
    isCurrent: false,
    displayOnPdf: true,
    description: `An afro beat infused R&B track that tells the story of a captivating woman named Anabella, whose charm and allure leave a lasting impression.`,
    links: {
      all: "",
      spotify: "",
      appleMusic: "",
      youtubeMusic: "",
      amazonMusic: "",
      tidal: "",
      deezer: "",
    },
  },
  {
    title: "Yeea Yea Yea",
    rotatingWords: ["YEA", "YEA", "YEA"],
    presaveUrl:
      "https://music.apple.com/ca/album/yea-yea-yea-single/1708974895",
    isReleased: true,
    primaryPhoto:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop",
    isCurrent: false,
    displayOnPdf: true,
    description: `A catchy R&B anthem that combines upbeat rhythms with infectious melodies. "Yeea Yea Yea" is all about embracing positivity and celebrating life's joyful moments.`,
    links: {
      all: "",
      spotify: "",
      appleMusic: "",
      youtubeMusic: "",
      amazonMusic: "",
      tidal: "",
      deezer: "",
    },
  },
];

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
  currentRelease: releases.filter((release) => release.isCurrent)[0],

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
