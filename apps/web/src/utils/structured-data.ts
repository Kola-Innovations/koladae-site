import { siteConfig } from "@/config/site"

export function getArtistStructuredData() {
  const socialLinks = Object.values(siteConfig.socials).filter(
    (url) => url !== "#"
  )

  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    genre: "R&B",
    description: siteConfig.description,
    url: siteConfig.url,
    ...(socialLinks.length > 0 && { sameAs: socialLinks }),
  }
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }
}
