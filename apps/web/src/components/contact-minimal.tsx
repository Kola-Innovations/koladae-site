import { useState } from "react";
import { motion } from "motion/react";

/**
 * Option D: Minimal centered (like the reference image)
 * Full-width artist image as background (faded)
 * Centered content block with large heading, contact info, and form
 * Clean, editorial feel
 */

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

interface ContactMinimalProps {
  title?: string;
  backgroundImage?: string;
  contactInfo?: ContactInfo[];
  websiteUrl?: string;
  bgColor?: string;
  accentColor?: string;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1470&auto=format&fit=crop";

const defaultContactInfo: ContactInfo[] = [
  { label: "Management", value: "Koladae Management", href: "mailto:management@koladae.com" },
];

// Film grain CSS
const grainStyles = `
  .film-grain-minimal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
`;

export default function ContactMinimal({
  title = "Contact",
  backgroundImage = DEFAULT_IMAGE,
  contactInfo = defaultContactInfo,
  websiteUrl = "koladae.com",
  bgColor = "#f8f8f8",
  accentColor = "#c4956a",
}: ContactMinimalProps) {
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
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <style>{grainStyles}</style>

      {/* Background Image - Left Side */}
      <div className="absolute left-0 top-0 hidden h-full w-1/2 lg:block">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.9 }}
        />
        {/* Gradient fade to background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, transparent 60%, ${bgColor} 100%)`,
          }}
        />
      </div>

      {/* Film Grain */}
      <div className="film-grain-minimal" />

      {/* Accent Bar */}
      <div
        className="absolute right-[15%] top-[10%] hidden h-32 w-16 lg:block"
        style={{ backgroundColor: accentColor }}
      />

      {/* Content - Right Aligned */}
      <div className="relative z-10 flex min-h-screen items-end justify-end px-8 py-20 lg:px-20">
        <div className="w-full max-w-xl">
          {/* Title with accent bar */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mb-4 h-1 w-12"
              style={{ backgroundColor: accentColor }}
            />
            <h2
              className="font-bold uppercase tracking-[0.15em] text-gray-800"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
              }}
            >
              {title}
            </h2>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-10 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactInfo.map((info) => (
              <div key={info.label}>
                <span className="text-sm uppercase tracking-wider text-gray-500">
                  {info.label} :{" "}
                </span>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm uppercase tracking-wider text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-sm uppercase tracking-wider text-gray-700">
                    {info.value}
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="mb-12 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Name & Email Row */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name-minimal" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name-minimal"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm uppercase tracking-wider text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
                  required
                />
              </div>
              <div>
                <label htmlFor="email-minimal" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email-minimal"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm uppercase tracking-wider text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject-minimal" className="sr-only">
                Subject
              </label>
              <select
                id="subject-minimal"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm uppercase tracking-wider text-gray-800 outline-none transition-colors focus:border-gray-800"
              >
                <option value="general">General Inquiry</option>
                <option value="booking">Booking</option>
                <option value="press">Press</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message-minimal" className="sr-only">
                Message
              </label>
              <textarea
                id="message-minimal"
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-gray-800"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="mt-4 border border-gray-800 bg-gray-800 px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-gray-800"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send
            </motion.button>
          </motion.form>

          {/* Website URL */}
          <motion.p
            className="text-center text-sm font-bold uppercase tracking-[0.3em] text-gray-800 lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {websiteUrl}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
