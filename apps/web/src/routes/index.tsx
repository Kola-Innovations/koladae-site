import { createFileRoute } from "@tanstack/react-router";
// import HeroSection from "@/components/hero-section";
import HeroSection from "@/components/hero-section-3";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      {/* <HeroSection />; */}
      <HeroSection />
    </>
  );
}
