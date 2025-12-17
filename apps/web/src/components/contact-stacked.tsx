import { useState } from "react";
import { motion } from "motion/react";

/**
 * Option B: Stacked header style (like SongSectionStacked)
 * Top: Faded header image/video
 * Below: Two-column layout with contact info and form
 */

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

interface ContactStackedProps {
  title?: string;
  headerImage?: string;
  headerVideo?: string;
  contactInfo?: ContactInfo[];
  bgColor?: string;
}

const DEFAULT_HEADER =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1470&auto=format&fit=crop";

const defaultContactInfo: ContactInfo[] = [
  { label: "Management", value: "management@koladae.com", href: "mailto:management@koladae.com" },
  { label: "Booking", value: "booking@koladae.com", href: "mailto:booking@koladae.com" },
  { label: "Press", value: "press@koladae.com", href: "mailto:press@koladae.com" },
];

// Film grain CSS
const grainStyles = `
  .film-grain-contact-stacked {
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

export default function ContactStacked({
  title = "Contact",
  headerImage = DEFAULT_HEADER,
  headerVideo,
  contactInfo = defaultContactInfo,
  bgColor = "#f5f0e8",
}: ContactStackedProps) {
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

      {/* Film Grain Overlay */}
      <div className="film-grain-contact-stacked" />

      {/* Header Media */}
      <motion.div
        className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]"
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
            style={{ opacity: 0.6 }}
          >
            <source src={headerVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={headerImage}
            alt=""
            className="h-full w-full object-cover"
            style={{ opacity: 0.6 }}
          />
        )}
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent 30%, ${bgColor} 100%)`,
          }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="container-main relative z-10 -mt-16 pb-20 md:-mt-24">
        {/* Title */}
        <motion.h2
          className="mb-12 font-bold text-gray-800"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            lineHeight: 1.1,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="mb-1 text-sm font-medium uppercase tracking-wider text-gray-500">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-lg text-gray-800 transition-colors hover:text-gray-600"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-800">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links placeholder */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Follow
              </p>
              <div className="flex gap-4">
                {["Instagram", "TikTok", "Twitter", "Spotify"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Send a Message
            </h3>

            {/* Name */}
            <div>
              <label htmlFor="name-stacked" className="mb-2 block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name-stacked"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email-stacked" className="mb-2 block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email-stacked"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-gray-800 outline-none transition-colors focus:border-gray-800"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject-stacked" className="mb-2 block text-sm font-medium text-gray-600">
                Subject
              </label>
              <select
                id="subject-stacked"
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
              <label htmlFor="message-stacked" className="mb-2 block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message-stacked"
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
              className="mt-4 border border-gray-800 bg-gray-800 px-10 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-gray-800"
              whileHover={{ scale: 1.02 }}
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
