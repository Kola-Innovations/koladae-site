import AboutSection from "@/components/about-section";
import AccoladesMarquee from "@/components/accolades-marquee";
import AccoladesSplit from "@/components/accolades-split";
import AccoladesStacked from "@/components/accolades-stacked";
import AccoladesStats from "@/components/accolades-stats";
import ContactDark from "@/components/contact-dark";
import ContactMinimal from "@/components/contact-minimal";
import ContactSplit from "@/components/contact-split";
import ContactStacked from "@/components/contact-stacked";
import ListenDark from "@/components/listen-dark";
import ListenMarquee from "@/components/listen-marquee";
import PressKitHero from "@/components/press-kit-hero";
import SongSection from "@/components/song-section";
import SongSectionAlbum from "@/components/song-section-album";
import SongSectionHero from "@/components/song-section-hero";
import SongSectionStacked from "@/components/song-section-stacked";
import { siteConfig } from "@/config/site";
import { seo } from "@/utils/seo";
import video3 from "@/videos/intro-dimsum.mp4";
import { createFileRoute } from "@tanstack/react-router";
import restoblue from "@/images/resto_blue_flip2.png";
import pic2 from "@/images/side_look.png";

export const Route = createFileRoute("/press-kit")({
  head: () => ({
    meta: [
      ...seo({
        ...siteConfig.pages.pressKit,
        url: "/press-kit",
      }),
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <PressKitHero
        artistName="KOLADAE"
        imageUrl={restoblue}
        // imageOpacity={0.6}
        // imageUrl="https://plus.unsplash.com/premium_photo-1683299265520-928021064f4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwYXJ0aXN0fGVufDB8fDB8fHww"
      />
      <AboutSection bgColor="cream" imageUrl={pic2} />
      <SongSection videoUrl={video3} reversed />
      <SongSectionHero title="Anabella" />
      <SongSectionStacked headerVideo={video3} />
      <SongSectionAlbum />
      <AccoladesSplit />
      <AccoladesStacked />
      <AccoladesMarquee />
      <AccoladesStats />
      <ContactSplit />
      <ContactDark />
      <ContactMinimal />
      <ContactStacked />
      <ListenDark />
      <ListenMarquee />
    </div>
  );
}
