import AboutSection from "@/components/about-section";
import PressKitHero from "@/components/press-kit-hero";
import SongSection from "@/components/song-section";
import { createFileRoute } from "@tanstack/react-router";
import video3 from "@/videos/intro-dimsum.mp4";
import SongSectionStacked from "@/components/song-section-stacked";
import SongSectionHero from "@/components/song-section-hero";
import SongSectionAlbum from "@/components/song-section-album";

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
      <AboutSection bgColor="cream" />
      <SongSection videoUrl={video3} reversed />
      <SongSectionStacked />
      <SongSectionHero />
      <SongSectionAlbum />
    </div>
  );
}
