import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";
import { releases, siteConfig } from "@/config/site";

// Import images - these will be resolved to URLs by the bundler
import coverImage from "@/images/resto_blue_flip2.png";
import aboutImage from "@/images/side_look.png";

// Register Inter font
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuBWYAZ9hjp-Ek-_EeA.woff",
      fontWeight: 900,
    },
  ],
});

// Colors
const colors = {
  black: "#000000",
  cream: "#f5f0e8",
  accent: "#c4956a",
  white: "#ffffff",
  gray: "#9ca3af",
  darkGray: "#374151",
};

// Press data (from accolades-marquee)
const publications = [
  "Complex",
  "The Fader",
  "CBC Radio One",
  "Hillydilly",
  "Spotify Editorial",
  "Apple Music",
  "Converse Rubber Tracks",
  "Soho House",
];

interface PressQuote {
  quote: string;
  publication: string;
  articleTitle?: string;
  url?: string;
}

const featuredQuotes: PressQuote[] = [
  {
    quote:
      "One of our favourite new discoveries, and one of the most stunning debuts of the year.",
    publication: "Complex",
    articleTitle: "Best Canadian EP's of 2024",
    url: "#",
  },
  {
    quote:
      "A body of work that should help establish them as an artist that deserves attention.",
    publication: "Hillydilly",
    url: "#",
  },
  {
    quote: "One of the most exciting new voices in Canadian music.",
    publication: "CBC Radio One",
    articleTitle: "Q with Shad",
    url: "#",
  },
];

// Get releases for PDF
const currentRelease = releases.find((r) => r.isCurrent && r.displayOnPdf);
const otherReleases = releases.filter((r) => !r.isCurrent && r.displayOnPdf);

// Styles
const styles = StyleSheet.create({
  // Page styles
  pageDark: {
    backgroundColor: colors.black,
    padding: 40,
    fontFamily: "Inter",
  },
  pageCream: {
    backgroundColor: colors.cream,
    padding: 40,
    fontFamily: "Inter",
  },

  // Cover page
  coverContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coverTitle: {
    fontSize: 72,
    fontWeight: 900,
    color: colors.white,
    letterSpacing: 8,
    marginBottom: 20,
  },
  coverSubtitle: {
    fontSize: 14,
    fontWeight: 400,
    color: colors.white,
    letterSpacing: 12,
    textTransform: "uppercase",
    opacity: 0.8,
  },
  coverDivider: {
    width: 60,
    height: 1,
    backgroundColor: colors.white,
    opacity: 0.5,
    marginVertical: 15,
  },
  coverImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 250,
    height: 350,
    opacity: 0.3,
  },

  // Section titles
  sectionTitle: {
    fontSize: 36,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 30,
  },
  sectionTitleDark: {
    fontSize: 36,
    fontWeight: 700,
    color: colors.black,
    marginBottom: 30,
  },

  // Body text
  bodyText: {
    fontSize: 11,
    fontWeight: 400,
    color: colors.white,
    lineHeight: 1.8,
    marginBottom: 15,
    opacity: 0.9,
  },
  bodyTextDark: {
    fontSize: 11,
    fontWeight: 400,
    color: colors.darkGray,
    lineHeight: 1.8,
    marginBottom: 15,
  },

  // Labels
  label: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.accent,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  // Music section
  songCard: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    borderBottomStyle: "solid",
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: colors.white,
    marginBottom: 8,
  },
  songDescription: {
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.6,
  },

  // Press quotes
  quoteContainer: {
    marginBottom: 25,
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
    borderLeftStyle: "solid",
  },
  quoteText: {
    fontSize: 12,
    fontWeight: 400,
    color: colors.white,
    lineHeight: 1.6,
    marginBottom: 8,
  },
  quoteSource: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.accent,
  },
  quoteArticle: {
    fontSize: 9,
    color: colors.gray,
    marginTop: 2,
  },

  // Publications row
  publicationsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 30,
    gap: 15,
  },
  publicationName: {
    fontSize: 10,
    color: colors.gray,
    letterSpacing: 1,
  },

  // Contact
  contactItem: {
    marginBottom: 20,
  },
  contactLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.accent,
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  contactValue: {
    fontSize: 14,
    color: colors.white,
  },

  // Social links row
  socialRow: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  socialLink: {
    fontSize: 10,
    color: colors.accent,
    textDecoration: "none",
  },

  // Footer
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
  },
  footerText: {
    fontSize: 8,
    color: colors.gray,
    textAlign: "center",
  },

  // Two column layout
  twoColumn: {
    flexDirection: "row",
    gap: 30,
  },
  column: {
    flex: 1,
  },
});

// Content data using siteConfig
const content = {
  artist: siteConfig.name,
  tagline: siteConfig.tagline,
  website: "koladae.com",

  bio: [
    "Koladae is a rising artist blending soulful melodies with contemporary beats, creating a unique sound that resonates with listeners worldwide. With roots in R&B and influences spanning across genres, each track tells a story of passion, growth, and authenticity.",
    "From intimate acoustic sessions to electrifying live performances, Koladae brings raw emotion and undeniable energy to every stage. The journey began in small venues and has grown into a movement that connects with fans on a deeply personal level.",
    "With upcoming releases and collaborations in the works, Koladae continues to push creative boundaries while staying true to the authentic sound that started it all.",
  ],

  contact: siteConfig.contact,

  socials: {
    instagram: "@koladaeofficial",
    instagramUrl: siteConfig.socials.instagram,
    tiktok: "@koladae",
    tiktokUrl: siteConfig.socials.tiktok,
    twitter: "@koladaemusic",
    twitterUrl: siteConfig.socials.twitter,
    spotify: "Koladae",
    spotifyUrl: siteConfig.socials.spotify,
  },
};

// PDF Document Component
export default function PressKitPdf() {
  return (
    <Document>
      {/* Page 1: Cover with low opacity background image */}
      <Page size="A4" style={styles.pageDark}>
        {/* Background image with low opacity */}
        <Image
          src={coverImage}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.15,
          }}
        />
        <View style={styles.coverContainer}>
          <Text style={styles.coverTitle}>{content.artist}</Text>
          <View style={styles.coverDivider} />
          <Text style={styles.coverSubtitle}>Press Kit</Text>
          <View style={styles.coverDivider} />
          <Text style={[styles.coverSubtitle, { fontSize: 10, marginTop: 10 }]}>
            {content.tagline}
          </Text>
        </View>
        <View style={styles.footer}>
          <Link src={`https://${content.website}`} style={styles.footerText}>
            {content.website}
          </Link>
        </View>
      </Page>

      {/* Page 2: About with Image */}
      <Page size="A4" style={styles.pageCream}>
        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.sectionTitleDark}>About</Text>
            {content.bio.map((paragraph: string, index: number) => (
              <Text key={index} style={styles.bodyTextDark}>
                {paragraph}
              </Text>
            ))}

            <View style={{ marginTop: 30 }}>
              <Text style={[styles.label, { color: colors.darkGray }]}>
                Connect
              </Text>
              <View style={styles.socialRow}>
                <Link
                  src={content.socials.instagramUrl}
                  style={[styles.socialLink, { color: colors.darkGray }]}
                >
                  Instagram: {content.socials.instagram}
                </Link>
              </View>
              <View style={[styles.socialRow, { marginTop: 5 }]}>
                <Link
                  src={content.socials.tiktokUrl}
                  style={[styles.socialLink, { color: colors.darkGray }]}
                >
                  TikTok: {content.socials.tiktok}
                </Link>
              </View>
              <View style={[styles.socialRow, { marginTop: 5 }]}>
                <Link
                  src={content.socials.spotifyUrl}
                  style={[styles.socialLink, { color: colors.darkGray }]}
                >
                  Spotify: {content.socials.spotify}
                </Link>
              </View>
            </View>
          </View>
          <View style={[styles.column, { alignItems: "center" }]}>
            <Image
              src={aboutImage}
              style={{
                width: 200,
                height: 280,
                objectFit: "cover",
              }}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Link
            src={`https://${content.website}`}
            style={[styles.footerText, { color: colors.darkGray }]}
          >
            {content.website}
          </Link>
        </View>
      </Page>

      {/* Page 3: Featured Release (Current Release - Full Page) */}
      {currentRelease && (
        <Page size="A4" style={styles.pageDark}>
          <Text style={styles.label}>Featured Release</Text>
          <Text style={styles.sectionTitle}>{currentRelease.title}</Text>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            {typeof currentRelease.primaryPhoto === "string" &&
            currentRelease.primaryPhoto.startsWith("http") ? (
              <Image
                src={currentRelease.primaryPhoto}
                style={{
                  width: 300,
                  height: 300,
                  objectFit: "cover",
                }}
              />
            ) : (
              <Image
                src={coverImage}
                style={{
                  width: 300,
                  height: 300,
                  objectFit: "cover",
                }}
              />
            )}
          </View>

          <Text style={[styles.bodyText, { textAlign: "center", marginTop: 20 }]}>
            {currentRelease.description}
          </Text>

          {currentRelease.isReleased && currentRelease.links.spotify && (
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Text style={styles.label}>Listen Now</Text>
              <View style={[styles.socialRow, { justifyContent: "center" }]}>
                {currentRelease.links.spotify !== "#" && (
                  <Link src={currentRelease.links.spotify} style={styles.socialLink}>
                    Spotify
                  </Link>
                )}
                {currentRelease.links.appleMusic !== "#" && (
                  <Link src={currentRelease.links.appleMusic} style={styles.socialLink}>
                    Apple Music
                  </Link>
                )}
              </View>
            </View>
          )}

          {!currentRelease.isReleased && currentRelease.presaveUrl !== "#" && (
            <View style={{ marginTop: 30, alignItems: "center" }}>
              <Link src={currentRelease.presaveUrl} style={styles.socialLink}>
                Pre-save Now
              </Link>
            </View>
          )}

          <View style={styles.footer}>
            <Link src={`https://${content.website}`} style={styles.footerText}>
              {content.website}
            </Link>
          </View>
        </Page>
      )}

      {/* Page 4: Other Releases */}
      {otherReleases.length > 0 && (
        <Page size="A4" style={styles.pageDark}>
          <Text style={styles.label}>Discography</Text>
          <Text style={styles.sectionTitle}>More Releases</Text>

          {otherReleases.map((release, index: number) => (
            <View key={index} style={styles.songCard}>
              <Text style={styles.songTitle}>{release.title}</Text>
              <Text style={styles.songDescription}>{release.description}</Text>
              {release.isReleased && release.presaveUrl !== "#" && (
                <Link
                  src={release.presaveUrl}
                  style={[styles.socialLink, { marginTop: 8 }]}
                >
                  Listen Now →
                </Link>
              )}
            </View>
          ))}

          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>Stream Everywhere</Text>
            <Text style={[styles.bodyText, { fontSize: 10 }]}>
              Available on Spotify, Apple Music, YouTube Music, and all major
              streaming platforms.
            </Text>
          </View>

          <View style={styles.footer}>
            <Link src={`https://${content.website}`} style={styles.footerText}>
              {content.website}
            </Link>
          </View>
        </Page>
      )}

      {/* Page 5: Press & Accolades */}
      <Page size="A4" style={styles.pageDark}>
        <Text style={styles.label}>Press & Media</Text>
        <Text style={styles.sectionTitle}>As Seen In</Text>

        <View style={styles.publicationsRow}>
          {publications.map((pub: string, index: number) => (
            <Text key={index} style={styles.publicationName}>
              {pub}
              {index < publications.length - 1 ? "  •" : ""}
            </Text>
          ))}
        </View>

        <Text style={[styles.label, { marginTop: 20, marginBottom: 20 }]}>
          Featured Press
        </Text>

        {featuredQuotes.map((quote: PressQuote, index: number) => (
          <View key={index} style={styles.quoteContainer}>
            <Text style={styles.quoteText}>"{quote.quote}"</Text>
            <Text style={styles.quoteSource}>— {quote.publication}</Text>
            {quote.articleTitle && (
              <Text style={styles.quoteArticle}>{quote.articleTitle}</Text>
            )}
          </View>
        ))}

        <View style={styles.footer}>
          <Link src={`https://${content.website}`} style={styles.footerText}>
            {content.website}
          </Link>
        </View>
      </Page>

      {/* Page 6: Contact */}
      <Page size="A4" style={styles.pageDark}>
        <Text style={styles.label}>Get In Touch</Text>
        <Text style={styles.sectionTitle}>Contact</Text>

        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Management</Text>
          <Link
            src={`mailto:${content.contact.management}`}
            style={styles.contactValue}
          >
            {content.contact.management}
          </Link>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Booking</Text>
          <Link
            src={`mailto:${content.contact.booking}`}
            style={styles.contactValue}
          >
            {content.contact.booking}
          </Link>
        </View>

        <View style={[styles.contactItem, { marginTop: 30 }]}>
          <Text style={styles.contactLabel}>Website</Text>
          <Link src={`https://${content.website}`} style={styles.contactValue}>
            {content.website}
          </Link>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.label}>Social Media</Text>
          <View style={{ marginTop: 10 }}>
            <Link
              src={content.socials.instagramUrl}
              style={[styles.bodyText, { marginBottom: 5 }]}
            >
              Instagram: {content.socials.instagram}
            </Link>
            <Link
              src={content.socials.tiktokUrl}
              style={[styles.bodyText, { marginBottom: 5 }]}
            >
              TikTok: {content.socials.tiktok}
            </Link>
            <Link
              src={content.socials.twitterUrl}
              style={[styles.bodyText, { marginBottom: 5 }]}
            >
              Twitter: {content.socials.twitter}
            </Link>
            <Link
              src={content.socials.spotifyUrl}
              style={[styles.bodyText, { marginBottom: 5 }]}
            >
              Spotify: {content.socials.spotify}
            </Link>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} {content.artist}. All rights reserved.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
