import ToatImage from "@/images/toat-bag.png";
import VinylImage from "@/images/vinyl.png";
import Keychain from "@/images/keychain-sample.png";
import MerchSample from "@/images/metch-sample.png";

export const PRODUCT_CATEGORIES = [
  {
    id: "apparel",
    name: "APPAREL",
    description: "Premium streetwear designed for the culture",
    placeholderImage: MerchSample,
    // "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format",
  },
  {
    id: "totes",
    name: "TOTES",
    description: "Carry the vibe everywhere you go",
    placeholderImage: ToatImage,
  },
  {
    id: "vinyl",
    name: "VINYL",
    description: "Limited edition pressings for true collectors",
    placeholderImage: VinylImage,
  },
  {
    id: "keychains",
    name: "KEYCHAINS",
    description: "Small pieces, big statements",
    placeholderImage: Keychain,
  },
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const ROTATING_WORDS = PRODUCT_CATEGORIES.map((c) => c.name);

export const ACCENT_COLOR = "#c4956a";

// Pre-generated particle positions
export const PARTICLES = [
  { id: "p1", left: 12, top: 45, delay: 0.2, duration: 2.5 },
  { id: "p2", left: 87, top: 23, delay: 1.1, duration: 3.2 },
  { id: "p3", left: 34, top: 78, delay: 0.8, duration: 2.8 },
  { id: "p4", left: 56, top: 12, delay: 2.3, duration: 3.5 },
  { id: "p5", left: 91, top: 67, delay: 0.5, duration: 2.2 },
  { id: "p6", left: 23, top: 34, delay: 1.7, duration: 3.1 },
  { id: "p7", left: 67, top: 89, delay: 2.8, duration: 2.6 },
  { id: "p8", left: 45, top: 56, delay: 0.3, duration: 3.8 },
  { id: "p9", left: 78, top: 41, delay: 1.9, duration: 2.4 },
  { id: "p10", left: 8, top: 92, delay: 2.1, duration: 3.3 },
  { id: "p11", left: 52, top: 18, delay: 0.9, duration: 2.9 },
  { id: "p12", left: 29, top: 63, delay: 1.4, duration: 3.6 },
  { id: "p13", left: 83, top: 37, delay: 2.6, duration: 2.3 },
  { id: "p14", left: 41, top: 84, delay: 0.6, duration: 3.4 },
  { id: "p15", left: 96, top: 52, delay: 1.2, duration: 2.7 },
];

// Butterflies for vinyl showcase
export const BUTTERFLIES = [
  { id: "b1", left: 20, top: 35, delay: 0, duration: 4 },
  { id: "b2", left: 75, top: 30, delay: 1.5, duration: 5 },
  { id: "b3", left: 85, top: 55, delay: 0.8, duration: 4.5 },
];

// Polaroid positions for scattered layout
export const POLAROID_POSITIONS = [
  { rotation: -4, offsetX: -30, offsetY: 20 },
  { rotation: 5, offsetX: 25, offsetY: -10 },
  { rotation: -2, offsetX: -15, offsetY: -25 },
  { rotation: 6, offsetX: 35, offsetY: 30 },
];
