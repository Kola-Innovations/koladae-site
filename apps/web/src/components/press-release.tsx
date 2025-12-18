import { motion } from "motion/react";
import { siteConfig, getSocialLinks, type Release } from "@/config/site";

interface PressReleaseProps {
  release: Release;
  videoUrl?: string;
  location?: string;
}

export function PressRelease({
  release,
  videoUrl,
  location = "Toronto, ON",
}: PressReleaseProps) {
  const socials = getSocialLinks();

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return `${months[Number.parseInt(month, 10) - 1]} ${Number.parseInt(day, 10)}, ${year}`;
  };

  const releaseDate = release.releaseDate
    ? formatDate(release.releaseDate)
    : release.releaseYear.toString();

  // Shortened bio for press release
  const shortBio = siteConfig.about.description.split("\n\n")[0];

  // Get first paragraph of description for the quote
  const descriptionParagraphs = release.description.split("\n\n");
  const lastParagraph = descriptionParagraphs[descriptionParagraphs.length - 1];

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; color: black !important; }
          .press-release {
            background: white !important;
            color: black !important;
            padding: 0.5in !important;
          }
          .press-release * { color: black !important; }
          .press-release a { text-decoration: underline; }
          .press-header { border-bottom: 2px solid black !important; }
          .accent-text { color: #333 !important; }
        }
      `}</style>

      <div className="press-release min-h-screen bg-[#f5f0e8]">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="press-header border-b border-[#c4956a]/30 py-8"
        >
          <div className="container-main flex items-start justify-between">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-600">
                For Immediate Release
              </p>
              <p className="text-sm text-neutral-500">{releaseDate}</p>
            </div>
            <button
              type="button"
              onClick={() => window.print()}
              className="no-print flex items-center gap-2 border border-[#c4956a] px-4 py-2 text-xs uppercase tracking-wider text-[#c4956a] transition-colors hover:bg-[#c4956a] hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </button>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container-main py-12 md:py-16">
          {/* Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-12 grid grid-cols-1 gap-8 ${videoUrl ? "lg:grid-cols-2" : ""}`}
          >
            {/* Artwork */}
            <div
              className={`aspect-square ${videoUrl ? "mx-auto max-w-md lg:mx-0" : "mx-auto max-w-lg"}`}
            >
              {release.primaryPhoto && (
                <img
                  src={release.primaryPhoto}
                  alt={`${release.title} - Official Artwork`}
                  className="h-full w-full object-cover shadow-lg"
                />
              )}
            </div>

            {/* Video - Hidden on print */}
            {videoUrl && (
              <div className="no-print mx-auto flex aspect-square max-w-md items-center justify-center overflow-hidden bg-black lg:mx-0">
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-5xl">
              {siteConfig.name} Releases New Single
              <br />
              <span className="accent-text text-[#c4956a]">
                "{release.title}"
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-neutral-600 md:text-xl">
              {descriptionParagraphs[1] ||
                `A new single from ${siteConfig.name}`}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="mb-10 h-px w-24 bg-[#c4956a]" />

          {/* Body Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl space-y-6 leading-relaxed text-neutral-700"
          >
            {/* Opening Paragraph */}
            <p className="text-lg">
              <strong>
                {location.toUpperCase()} — {releaseDate}
              </strong>{" "}
              — Nigerian-born, Canadian-raised artist{" "}
              <strong className="text-neutral-900">{siteConfig.name}</strong>{" "}
              announces the release of his new single <em>"{release.title}"</em>
              , available on all major streaming platforms.{" "}
              {descriptionParagraphs[0]}
            </p>

            {/* Story Context */}
            {descriptionParagraphs[2] && <p>{descriptionParagraphs[2]}</p>}

            {/* Artist Quote */}
            <blockquote className="my-8 border-l-4 border-[#c4956a] py-2 pl-6 italic text-neutral-600">
              <p className="mb-4">"{lastParagraph}"</p>
              <cite className="text-sm font-medium not-italic text-neutral-900">
                — {siteConfig.name}
              </cite>
            </blockquote>

            {/* Availability */}
            <p>
              "{release.title}" is{" "}
              {release.isReleased
                ? "available now"
                : `available for pre-save now and will be released on ${releaseDate}`}{" "}
              on all major streaming platforms.
            </p>
          </motion.article>

          {/* Divider */}
          <div className="my-12 h-px w-24 bg-[#c4956a]" />

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              About {siteConfig.name}
            </h2>
            <p className="max-w-3xl leading-relaxed text-neutral-700">
              {shortBio}
            </p>
          </motion.section>

          {/* Links Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Links
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href={siteConfig.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c4956a] underline underline-offset-4 hover:text-[#a67d5a]"
              >
                Official Website
              </a>
              {release.links.all && release.links.all !== "#" && (
                <a
                  href={release.links.all}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4956a] underline underline-offset-4 hover:text-[#a67d5a]"
                >
                  {release.isReleased ? "Listen Now" : "Pre-save"} "
                  {release.title}"
                </a>
              )}
              {socials.map(
                (social) =>
                  social.url && (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c4956a] underline underline-offset-4 hover:text-[#a67d5a]"
                    >
                      {social.name}
                    </a>
                  )
              )}
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-[#c4956a]/30 pt-8"
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Press Contact
            </h2>
            <div className="space-y-2 text-sm text-neutral-700">
              <p>
                <span className="text-neutral-500">Management:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.management}`}
                  className="text-[#c4956a] hover:text-[#a67d5a]"
                >
                  {siteConfig.contact.management}
                </a>
              </p>
              <p>
                <span className="text-neutral-500">Booking:</span>{" "}
                <a
                  href={`mailto:${siteConfig.contact.booking}`}
                  className="text-[#c4956a] hover:text-[#a67d5a]"
                >
                  {siteConfig.contact.booking}
                </a>
              </p>
            </div>
          </motion.section>

          {/* End Mark */}
          <div className="mt-12 text-center text-sm text-neutral-400">###</div>
        </main>
      </div>
    </>
  );
}
