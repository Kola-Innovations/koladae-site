import { siteConfig } from "@/config/site"

interface SeoOptions {
  title: string
  description: string
  image?: string
  url?: string
  type?: "website" | "music.song" | "profile"
}

export function seo({
  title,
  description,
  image = siteConfig.ogImage,
  url,
  type = "website",
}: SeoOptions) {
  const fullImage = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return [
    { title },
    { name: "description", content: description },
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:image", content: fullImage },
    { property: "og:url", content: fullUrl },
    { property: "og:site_name", content: siteConfig.name },
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: fullImage },
  ]
}
