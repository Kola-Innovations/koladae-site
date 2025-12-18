// import ContactImage from "@/images/resto_blue_flip2.png";
import KeepRollingArtwork from "@/images/keep-rolling-artwork.png";
import YeaCoverArt from "@/images/yea_cover.jpg";
import YeaYeaVid from "@/videos/intro-dimsum.mp4";
import anabellaVid from "@/videos/anabella_cover_vid.mp4";
export interface Release {
  title: string;
  rotatingWords: string[];
  isReleased: boolean;
  primaryPhoto?: string;
  primaryVideo?: string;
  isCurrent: boolean;
  displayOnPdf: boolean;
  description: string;
  artists: string[];
  releaseYear: number;
  releaseDate?: string;
  links: {
    // use this as presave link if isReleased is false
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
    releaseYear: 2026,
    releaseDate: "2026-01-30",
    title: "Keep Rolling",
    rotatingWords: ["KEEP", "ON", "ROLLING"],
    // presaveUrl: "", // UPDATE with actual presave link
    isReleased: false,
    primaryPhoto: KeepRollingArtwork,
    isCurrent: true,
    displayOnPdf: true,
    description: `I wrote this song a couple weeks before surgery to remove tumours after a thyroid cancer diagnosis. 

Facing that uncertainty, I needed an escape. I channeled that fear into warm 70s funk/soul textures, lush Rhodes, and R&B grooves.

The song reflects the daily choice to keep moving despite pressure, pain, or fear. “Keep Rolling” is for anyone carrying silent battles,  a reminder that even in heavy moments, forward motion is still possible.

This isn't a sad song; it's a resilience anthem. It’s for anyone fighting a silent battle, waking up to pressure and pain, but choosing to lace up their shoes anyway. It’s a reminder that no matter the obstacle, we keep rolling.`,
    links: {
      all: "https://temple.groover.co/koladae",
      spotify: "#",
      appleMusic: "#",
      youtubeMusic: "#",
      amazonMusic: "#",
      tidal: "#",
      deezer: "#",
    },
    artists: ["KOLADAE"],
  },
  {
    releaseYear: 2025,
    title: "Anabella",
    rotatingWords: ["ANABELLA"],
    // presaveUrl: "https://music.apple.com/ca/album/anabella-single/1716626323",
    isReleased: true,
    primaryVideo: anabellaVid,
    isCurrent: false,
    displayOnPdf: true,
    description: `A hypnotic Afrobeat track by Koladae that explores the dizzying pull of desire. Driven by pulsing percussion and a haunting chorus, the song captures the tension between craving and chaos—someone who burns and soothes all at once. Blending Nigerian rhythms with Western influences, “Anabella” marks Koladae’s return to the mic, delivering a sound that’s seductive, cross-cultural, and emotionally honest.`,
    links: {
      all: "https://hypeddit.com/koladae/anabella",
      spotify:
        "https://open.spotify.com/track/6QMJ8ZLBTh1ZWs2DVJcdxh?si=VYsRcv2xQ-Gcb94rALcyng",
      appleMusic: "",
      youtubeMusic: "",
      amazonMusic: "",
      tidal: "",
      deezer: "",
    },
    artists: ["KOLADAE"],
  },
  {
    releaseYear: 2025,
    title: "Yeah Yeah Yeah",
    rotatingWords: ["YEA", "YEA", "YEA"],
    isReleased: true,
    primaryPhoto: YeaCoverArt,
    primaryVideo: YeaYeaVid,
    isCurrent: false,
    displayOnPdf: true,
    description: `“Yeah Yeah Yeah” is an upbeat R&B collaboration from the Takes a Village Music collective, born out of a late-night Potluck session and powered by pure creative chemistry. Built on bouncy drums, hazy keys, and hip-hop–leaning rhythms, the track captures the thrill and disorientation of chasing success once the doors start opening.

Lyrically, the song offers a tongue-in-cheek look at the fantasy of “making it”—late nights, loud crowds, vices, and unfamiliar faces—while quietly questioning what’s real beneath the smoke. The repetitive, chant-ready chorus mirrors the cycle of indulgence and momentum, making the track both hypnotic and instantly catchy. Perfect for summer nights, “Yeah Yeah Yeah” balances celebration with self-awareness, reflecting the blurred line between freedom, excess, and purpose.`,
    links: {
      all: "https://hypeddit.com/yeahyeahyeah",
      spotify:
        "https://open.spotify.com/track/28Hqxnw6TkbPX6uyax9TPv?si=4m0ErkbKSYmbEkh66p5Dhw",
      appleMusic:
        "https://music.apple.com/us/album/oh-yeah/1703684273?i=1703684281&uo=4",
      youtubeMusic: "https://music.youtube.com/watch?v=wZQgUXQrXF4",
      amazonMusic:
        "https://music.amazon.com/albums/B0F84JDP5K?trackAsin=B0F84FSHSN",
      tidal: "https://listen.tidal.com/track/434989425",
      deezer: "https://www.deezer.com/track/3360603981",
    },
    artists: ["Takes a Village Music, Nilo Blues, Koladae, Shyo"],
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
    // TODO: get real youtube link
    youtubeMusic: "https://www.youtube.com/@Koladae", // e.g., ..."
    amazonMusic: "https://music.amazon.ca/artists/B0CJSS11GW/koladae", // e.g., "https://music.amazon.com/artists/..."
    tidal: "https://tidal.com/artist/42341469", // e.g., "https://tidal.com/artist/..."
    deezer: "https://www.deezer.com/en/artist/232312391",
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
  about: {
    title: "About",
    description: `Koladae is a Nigerian-born, Canadian-raised artist blending Afro rhythms with emotionally rich storytelling. Rooted in both African and Western influences, his music lives in the space between movement and reflection, where lush grooves meet raw, honest emotion.

After years working behind the scenes as a songwriter, producer, and creative, and spending much of his life in corporate environments that demanded he mute parts of himself, Koladae is now fully stepping into his voice. His sound moves effortlessly from feel-good, late-night anthems to intimate confessionals, reflecting the complexity of healing, love, identity, and becoming.

Visually and sonically, Koladae represents rebirth and self-acceptance. With his natural hair, bold aesthetic, and unfiltered lyrics, he shows up as his full self, unapologetic and present. Music has always been his way to feel, process, and heal. Now, he’s inviting listeners into that journey.`,
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
