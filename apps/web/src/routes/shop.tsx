import ShopComingSoon from "@/components/shop-coming-soon";
import { siteConfig } from "@/config/site";
import { seo } from "@/utils/seo";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      ...seo({
        ...siteConfig.pages.shop,
        url: "/shop",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <ShopComingSoon />;
}
