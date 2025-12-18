import HeroSection from "@/components/hero-section-3";
import { siteConfig } from "@/config/site";
import { seo } from "@/utils/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      ...seo({
        ...siteConfig.pages.home,
        url: "/",
      }),
    ],
  }),
  component: HomeComponent,
});

function HomeComponent() {
  return <HeroSection />;
}
