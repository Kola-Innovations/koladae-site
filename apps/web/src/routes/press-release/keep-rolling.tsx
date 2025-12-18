import { createFileRoute } from "@tanstack/react-router";
import { PressRelease } from "@/components/press-release";
import { releases } from "@/config/site";
import { seo } from "@/utils/seo";

const VIDEO_URL =
  "https://stream.mux.com/SVldDkmBAGk9sHvCK4NdKwvm02YJ43dq16uQx00BJN5Y4.m3u8";

export const Route = createFileRoute("/press-release/keep-rolling")({
  head: () => ({
    meta: [
      ...seo({
        title: "Press Release: Keep Rolling | KOLADAE",
        description:
          "Official press release for KOLADAE's new single 'Keep Rolling' - a resilience anthem born from a cancer journey.",
        url: "/press-release/keep-rolling",
      }),
    ],
  }),
  component: KeepRollingPressRelease,
});

function KeepRollingPressRelease() {
  const release = releases.find((r) => r.title === "Keep Rolling");

  if (!release) {
    return <div>Release not found</div>;
  }

  return <PressRelease release={release} videoUrl={VIDEO_URL} />;
}
