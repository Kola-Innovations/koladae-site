import ShopComingSoon from "@/components/shop-coming-soon";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shop")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ShopComingSoon />;
}
