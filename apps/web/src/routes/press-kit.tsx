import PressKitHero from "@/components/press-kit-hero";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/press-kit")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <PressKitHero
        artistName="KOLADAE"
        imageUrl="https://plus.unsplash.com/premium_photo-1683299265520-928021064f4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwYXJ0aXN0fGVufDB8fDB8fHww"
      />
    </div>
  );
}
