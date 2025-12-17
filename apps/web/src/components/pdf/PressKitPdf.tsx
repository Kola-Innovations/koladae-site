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

// Content data
const content = {
  artist: "KOLADAE",
  tagline: "R&B Artist",
  website: "koladae.com",

  bio: [
    "Koladae is a rising artist blending soulful melodies with contemporary beats, creating a unique sound that resonates with listeners worldwide. With roots in R&B and influences spanning across genres, each track tells a story of passion, growth, and authenticity.",
    "From intimate acoustic sessions to electrifying live performances, Koladae brings raw emotion and undeniable energy to every stage. The journey began in small venues and has grown into a movement that connects with fans on a deeply personal level.",
    "With upcoming releases and collaborations in the works, Koladae continues to push creative boundaries while staying true to the authentic sound that started it all.",
  ],

  songs: [
    {
      title: "Keep Rolling",
      description:
        "An Afrobeat-infused R&B anthem about perseverance and staying true to your path. The track blends smooth vocals with infectious rhythms that capture the spirit of resilience.",
    },
    {
      title: "Anabella",
      description:
        "An Afrobeat infused R&B track that tells the story of a captivating woman named Anabella, whose charm and allure leave a lasting impression.",
    },
    {
      title: "Yea Yea Yea",
      description:
        "A vibrant celebration of life and love, featuring dynamic production and memorable hooks that showcase Koladae's versatility as an artist.",
    },
  ],

  publications: [
    "Complex",
    "The Fader",
    "CBC Radio One",
    "Hillydilly",
    "Spotify Editorial",
    "Apple Music",
    "Converse Rubber Tracks",
    "Soho House",
  ],

  quotes: [
    {
      text: "One of our favourite new discoveries, and one of the most stunning debuts of the year.",
      source: "Complex",
      article: "Best Canadian EP's of 2024",
    },
    {
      text: "A body of work that should help establish them as an artist that deserves attention.",
      source: "Hillydilly",
    },
    {
      text: "One of the most exciting new voices in Canadian music.",
      source: "CBC Radio One",
      article: "Q with Shad",
    },
  ],

  contact: {
    management: "management@koladae.com",
    booking: "booking@koladae.com",
  },

  socials: {
    instagram: "@koladaeofficial",
    tiktok: "@koladae",
    twitter: "@koladaemusic",
    spotify: "Koladae",
  },
};

// PDF Document Component
export default function PressKitPdf() {
  return (
    <Document>
      {/* Page 1: Cover */}
      <Page size="A4" style={styles.pageDark}>
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
          <Text style={styles.footerText}>{content.website}</Text>
        </View>
      </Page>

      {/* Page 2: About */}
      <Page size="A4" style={styles.pageCream}>
        <Text style={styles.sectionTitleDark}>About</Text>
        {content.bio.map((paragraph, index) => (
          <Text key={index} style={styles.bodyTextDark}>
            {paragraph}
          </Text>
        ))}

        <View style={{ marginTop: 30 }}>
          <Text style={[styles.label, { color: colors.darkGray }]}>
            Connect
          </Text>
          <View style={styles.socialRow}>
            <Text style={[styles.socialLink, { color: colors.darkGray }]}>
              Instagram: {content.socials.instagram}
            </Text>
            <Text style={[styles.socialLink, { color: colors.darkGray }]}>
              TikTok: {content.socials.tiktok}
            </Text>
          </View>
          <View style={[styles.socialRow, { marginTop: 5 }]}>
            <Text style={[styles.socialLink, { color: colors.darkGray }]}>
              Twitter: {content.socials.twitter}
            </Text>
            <Text style={[styles.socialLink, { color: colors.darkGray }]}>
              Spotify: {content.socials.spotify}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.darkGray }]}>
            {content.website}
          </Text>
        </View>
      </Page>

      {/* Page 3: Music */}
      <Page size="A4" style={styles.pageDark}>
        <Text style={styles.label}>Featured Music</Text>
        <Text style={styles.sectionTitle}>Latest Releases</Text>

        {content.songs.map((song, index) => (
          <View key={index} style={styles.songCard}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songDescription}>{song.description}</Text>
          </View>
        ))}

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Listen Now</Text>
          <Text style={[styles.bodyText, { fontSize: 10 }]}>
            Available on Spotify, Apple Music, YouTube Music, and all major
            streaming platforms.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{content.website}</Text>
        </View>
      </Page>

      {/* Page 4: Press & Accolades */}
      <Page size="A4" style={styles.pageDark}>
        <Text style={styles.label}>Press & Media</Text>
        <Text style={styles.sectionTitle}>As Seen In</Text>

        <View style={styles.publicationsRow}>
          {content.publications.map((pub, index) => (
            <Text key={index} style={styles.publicationName}>
              {pub}
              {index < content.publications.length - 1 ? "  •" : ""}
            </Text>
          ))}
        </View>

        <Text style={[styles.label, { marginTop: 20, marginBottom: 20 }]}>
          Featured Press
        </Text>

        {content.quotes.map((quote, index) => (
          <View key={index} style={styles.quoteContainer}>
            <Text style={styles.quoteText}>"{quote.text}"</Text>
            <Text style={styles.quoteSource}>— {quote.source}</Text>
            {quote.article && (
              <Text style={styles.quoteArticle}>{quote.article}</Text>
            )}
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>{content.website}</Text>
        </View>
      </Page>

      {/* Page 5: Contact */}
      <Page size="A4" style={styles.pageDark}>
        <Text style={styles.label}>Get In Touch</Text>
        <Text style={styles.sectionTitle}>Contact</Text>

        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Management</Text>
          <Text style={styles.contactValue}>{content.contact.management}</Text>
        </View>

        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>Booking</Text>
          <Text style={styles.contactValue}>{content.contact.booking}</Text>
        </View>

        <View style={[styles.contactItem, { marginTop: 30 }]}>
          <Text style={styles.contactLabel}>Website</Text>
          <Text style={styles.contactValue}>{content.website}</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text style={styles.label}>Social Media</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={[styles.bodyText, { marginBottom: 5 }]}>
              Instagram: {content.socials.instagram}
            </Text>
            <Text style={[styles.bodyText, { marginBottom: 5 }]}>
              TikTok: {content.socials.tiktok}
            </Text>
            <Text style={[styles.bodyText, { marginBottom: 5 }]}>
              Twitter: {content.socials.twitter}
            </Text>
            <Text style={[styles.bodyText, { marginBottom: 5 }]}>
              Spotify: {content.socials.spotify}
            </Text>
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
