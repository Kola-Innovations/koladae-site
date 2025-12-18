import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";
import {
  getArtistStructuredData,
  getWebsiteStructuredData,
} from "@/utils/structured-data";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import appCss from "../index.css?url";
import type { QueryClient } from "@tanstack/react-query";

import type { orpc } from "@/utils/orpc";
export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: siteConfig.url,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          getWebsiteStructuredData(),
          getArtistStructuredData(),
        ]),
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* <div className="grid h-svh grid-rows-[auto_1fr]">
					<Header />
					<Outlet />
				</div> */}
        <div className="">
          <Outlet />
        </div>
        <Toaster richColors />
        <TanStackRouterDevtools position="bottom-left" />
        <ReactQueryDevtools position="bottom" buttonPosition="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
