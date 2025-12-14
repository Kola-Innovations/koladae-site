import ContactDark from "@/components/contact-dark";
import { createFileRoute } from "@tanstack/react-router";
import ContactImage from "@/images/bench_back.png";
import MainNav from "@/components/nav";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative">
      <MainNav />
      <ContactDark imageUrl={ContactImage} reversed />
    </div>
  );
}
