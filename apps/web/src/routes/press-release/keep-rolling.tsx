import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { releases, siteConfig, getSocialLinks } from "@/config/site";
import { seo } from "@/utils/seo";

const VIDEO_URL =
  "https://stream.mux.com/SVldDkmBAGk9sHvCK4NdKwvm02YJ43dq16uQx00BJN5Y4.m3u8";

export const Route = createFileRoute("/press-release/keep-rolling")({
  head: () => ({
    meta: [
      ...seo({
        title: "Press Release: Keep Rolling | KOLADAE",
        description:
          "Official press release for KOLADAE's new single 'Keep Rolling' - a resilience anthem born from a cancer journey.",
        url: "/press-release/keep-rolling",
      }),
    ],
  }),
  component: KeepRollingPressRelease,
});

function KeepRollingPressRelease() {
  const release = releases.find((r) => r.title === "Keep Rolling");
  const socials = getSocialLinks();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const releaseDate = release?.releaseDate
    ? formatDate(release.releaseDate)
    : "2026";

  // Shortened bio for press release
  const shortBio = siteConfig.about.description.split("\n\n")[0];

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
          <div className="container-main">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-600 mb-2">
              For Immediate Release
            </p>
            <p className="text-sm text-neutral-500">{releaseDate}</p>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container-main py-12 md:py-16">
          {/* Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* Artwork */}
            <div className="aspect-square max-w-md mx-auto lg:mx-0">
              {release?.primaryPhoto && (
                <img
                  src={release.primaryPhoto}
                  alt={`${release.title} - Official Artwork`}
                  className="w-full h-full object-cover shadow-lg"
                />
              )}
            </div>

            {/* Video - Hidden on print */}
            <div className="no-print aspect-square max-w-md mx-auto lg:mx-0 bg-black flex items-center justify-center overflow-hidden">
              <video
                src={VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {siteConfig.name} Releases New Single
              <br />
              <span className="accent-text text-[#c4956a]">
                "{release?.title}"
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
              A resilience anthem born from a cancer journey, blending warm 70s
              funk/soul with R&B grooves
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-[#c4956a] mb-10" />

          {/* Body Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl space-y-6 text-neutral-700 leading-relaxed"
          >
            {/* Opening Paragraph */}
            <p className="text-lg">
              <strong>TORONTO, ON — {releaseDate}</strong> — Nigerian-born,
              Canadian-raised artist{" "}
              <strong className="text-neutral-900">{siteConfig.name}</strong>{" "}
              announces the release of his new single{" "}
              <em>"{release?.title}"</em>, available on all major streaming
              platforms. The track marks a deeply personal chapter in the
              artist's journey—written just weeks before surgery to remove
              tumors following a thyroid cancer diagnosis.
            </p>

            {/* Story Context */}
            <p>
              Facing the uncertainty of his health, KOLADAE channeled his fear
              into music, creating a warm sonic landscape built on 70s funk/soul
              textures, lush Rhodes piano, and smooth R&B grooves. Rather than
              dwelling in darkness, the song emerged as something
              unexpected—a celebration of resilience and forward motion.
            </p>

            {/* Artist Quote */}
            <blockquote className="border-l-4 border-[#c4956a] pl-6 py-2 my-8 italic text-neutral-600">
              <p className="mb-4">
                "This isn't a sad song; it's a resilience anthem. It's for
                anyone fighting a silent battle, waking up to pressure and pain,
                but choosing to lace up their shoes anyway. It's a reminder that
                no matter the obstacle, we keep rolling."
              </p>
              <cite className="not-italic text-sm font-medium text-neutral-900">
                — {siteConfig.name}
              </cite>
            </blockquote>

            {/* Availability */}
            <p>
              "Keep Rolling" reflects the daily choice to keep moving despite
              pressure, pain, or fear—a message that resonates with anyone
              carrying silent battles. The single is available for pre-save now
              and will be released on {releaseDate}.
            </p>
          </motion.article>

          {/* Divider */}
          <div className="w-24 h-px bg-[#c4956a] my-12" />

          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              About {siteConfig.name}
            </h2>
            <p className="text-neutral-700 leading-relaxed max-w-3xl">
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
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Links
            </h2>
            <div className="flex flex-wrap gap-4 text-sm">
              {release?.links.all && release.links.all !== "#" && (
                <a
                  href={release.links.all}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c4956a] hover:text-[#a67d5a] underline underline-offset-4"
                >
                  Pre-save "Keep Rolling"
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
                      className="text-[#c4956a] hover:text-[#a67d5a] underline underline-offset-4"
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
            <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">
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
          <div className="text-center mt-12 text-neutral-400 text-sm">###</div>
        </main>
      </div>
    </>
  );
}
