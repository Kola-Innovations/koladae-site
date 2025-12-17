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
import anabellaVid from "@/videos/anabella_cover_vid.mp4";
import RollingPress from "@/videos/rolling_press.mp4";
import ContactImage from "@/images/bench_back.png";

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
        artistName={siteConfig.name}
        imageUrl={restoblue}
        // imageOpacity={0.6}
        // imageUrl="https://plus.unsplash.com/premium_photo-1683299265520-928021064f4c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwYXJ0aXN0fGVufDB8fDB8fHww"
      />
      <AboutSection bgColor="cream" imageUrl={pic2} />
      <SongSection
        title="Keep Rolling"
        videoUrl={RollingPress}
        reversed
        videoOpacity={0.4}
      />
      <SongSectionHero
        title="Anabella"
        subtitle=""
        backgroundVideo={anabellaVid}
        description="An afro beat infused R&B track that tells the story of a captivating woman named Anabella, whose charm and allure leave a lasting impression."
      />
      {/* <SongSection
        videoUrl={video3}
        reversed
        title="Yea Yea Yea"
        // darkBgColor="#8b7d6b"
      /> */}

      <SongSectionStacked headerVideo={video3} title="Yea Yea Yea" />
      <ListenDark subtitle="To Koladae Everywhere" />
      {/* <ListenMarquee /> */}
      {/* <SongSectionAlbum /> */}
      {/* <AccoladesSplit /> */}
      {/* <AccoladesStacked /> */}
      <AccoladesMarquee />
      {/* //TODO: ADD STATS ONCE THEY LOOK BETTER */}
      {/*   <AccoladesStats /> */}
      <ContactDark imageUrl={ContactImage} reversed />
      {/* <ContactSplit imageUrl={ContactImage} />

      <ContactMinimal backgroundImage={ContactImage} /> */}
      {/* <ContactStacked /> */}
    </div>
  );
}
