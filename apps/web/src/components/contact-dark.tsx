import { useState } from "react";
import { motion } from "motion/react";

/**
 * Option C: Dark VHS style (like PressKitHero)
 * Black background with TV static/grain effects
 * Faded image panel on one side
 * Contact form with white/light text on dark
 */

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

interface ContactDarkProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  contactInfo?: ContactInfo[];
  imageOpacity?: number;
  accentColor?: string;
  reversed?: boolean;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

const defaultContactInfo: ContactInfo[] = [
  { label: "Management", value: "management@koladae.com", href: "mailto:management@koladae.com" },
  { label: "Booking", value: "booking@koladae.com", href: "mailto:booking@koladae.com" },
];

// VHS/Grain styles
const vhsStyles = `
  .contact-dark-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .film-grain-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    opacity: 0.1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  .vignette-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 3;
    background: radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%);
  }

  .vhs-scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

export default function ContactDark({
  title = "Contact",
  subtitle = "Get in touch",
  imageUrl = DEFAULT_IMAGE,
  contactInfo = defaultContactInfo,
  imageOpacity = 0.3,
  accentColor = "#c4956a",
  reversed = false,
}: ContactDarkProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-dark-container relative min-h-screen w-full overflow-hidden bg-black">
      <style>{vhsStyles}</style>

      {/* VHS Effects */}
      <div className="film-grain-dark" />
      <div className="vignette-dark" />
      <div className="vhs-scanlines" />

      {/* Faded Image Panel */}
      <motion.div
        className={`absolute top-0 z-1 hidden h-full w-1/2 lg:block ${
          reversed ? "left-0" : "right-0"
        }`}
        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: imageOpacity }}
        />
        {/* Gradient overlay - smooth fade to black */}
        <div
          className="absolute inset-0"
          style={{
            background: reversed
              ? "linear-gradient(to right, transparent 0%, black 100%)"
              : "linear-gradient(to left, transparent 0%, black 100%)",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex min-h-screen flex-col justify-center px-8 py-20 md:px-16 lg:w-1/2 ${
          reversed ? "ml-auto" : ""
        }`}
      >
        <div className="container-main max-w-xl">
          {/* Title */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-3 font-bold text-white"
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              {title}
            </h2>
            <p
              className="text-sm uppercase tracking-[0.3em]"
              style={{ color: accentColor }}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <span
                  className="text-xs font-medium uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  {info.label}:
                </span>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-300">{info.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <div
            className="mb-10 h-px w-20"
            style={{ backgroundColor: accentColor, opacity: 0.5 }}
          />

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Name & Email Row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name-dark" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name-dark"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-gray-700 bg-transparent px-0 py-3 text-white outline-none transition-colors focus:border-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email-dark" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email-dark"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-gray-700 bg-transparent px-0 py-3 text-white outline-none transition-colors focus:border-white"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject-dark" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Subject
              </label>
              <select
                id="subject-dark"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border-b border-gray-700 bg-transparent px-0 py-3 text-white outline-none transition-colors focus:border-white"
              >
                <option value="general" className="bg-black">General Inquiry</option>
                <option value="booking" className="bg-black">Booking</option>
                <option value="press" className="bg-black">Press</option>
                <option value="collaboration" className="bg-black">Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message-dark" className="mb-2 block text-xs font-medium uppercase tracking-wider text-gray-500">
                Message
              </label>
              <textarea
                id="message-dark"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full resize-none border-b border-gray-700 bg-transparent px-0 py-3 text-white outline-none transition-colors focus:border-white"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-6 border px-10 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300"
              style={{
                borderColor: accentColor,
                color: accentColor,
              }}
              whileHover={{
                backgroundColor: accentColor,
                color: "black",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
