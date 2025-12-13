import { useState } from "react";
import { motion } from "motion/react";

/**
 * Option A: Split-screen style (like AboutSection)
 * Left: Faded image panel
 * Right: Contact form on cream/sage background with grainy texture
 */

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

interface ContactSplitProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  contactInfo?: ContactInfo[];
  bgColor?: string;
  imageOpacity?: number;
  reversed?: boolean;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

const defaultContactInfo: ContactInfo[] = [
  { label: "Management", value: "management@koladae.com", href: "mailto:management@koladae.com" },
  { label: "Booking", value: "booking@koladae.com", href: "mailto:booking@koladae.com" },
];

// Film grain CSS
const grainStyles = `
  .film-grain-contact {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.06;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
`;

export default function ContactSplit({
  title = "Contact",
  subtitle = "Get in touch",
  imageUrl = DEFAULT_IMAGE,
  contactInfo = defaultContactInfo,
  bgColor = "#f5f0e8",
  imageOpacity = 0.3,
  reversed = false,
}: ContactSplitProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <style>{grainStyles}</style>

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
              }, transparent 0%, ${bgColor} 100%)`,
            }}
          />
        </div>

        {/* Content Panel */}
        <motion.div
          className="relative flex min-h-screen w-full flex-col justify-center px-8 py-20 lg:w-[45%] lg:px-16"
          style={{ backgroundColor: bgColor }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Film Grain */}
          <div className="film-grain-contact" />

          {/* Title */}
          <motion.div
            className="relative z-10 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2
              className="mb-2 font-bold text-gray-800"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              {subtitle}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="relative z-10 mb-10 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                  {info.label}:
                </span>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-700">{info.value}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Name & Email Row */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-600">
                Subject
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
              >
                <option value="general">General Inquiry</option>
                <option value="booking">Booking</option>
                <option value="press">Press</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-6 border border-gray-800 bg-gray-800 px-10 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-gray-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
