// Shop Coming Soon - Component Variations
// Uncomment the one you want to test:

// Original version
// import ShopComingSoon from "@/components/shop-coming-soon";

// Variation 1: Rotating category words in the center bar
import ShopComingSoonPolaroid from "@/components/shop/shop-coming-soon-polaroid";
import ShopComingSoon from "@/components/shop/shop-coming-soon-rotating";
import ShopComingSoonSplit from "@/components/shop/shop-coming-soon-split";
import ShopComingSoonVinyl from "@/components/shop/shop-coming-soon-vinyl";

// Variation 2: Polaroid-style product grid
// import ShopComingSoon from "@/components/shop/shop-coming-soon-polaroid";

// Variation 3: Spinning vinyl record showcase
// import ShopComingSoon from "@/components/shop/shop-coming-soon-vinyl";

// Variation 4: Split-screen scrollable categories
// import ShopComingSoon from "@/components/shop/shop-coming-soon-split";

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
  return (
    <>
      <ShopComingSoon />
      <ShopComingSoonPolaroid />
      <ShopComingSoonVinyl />
      <ShopComingSoonSplit />
    </>
  );
}
