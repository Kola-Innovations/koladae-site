import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});

//  tsConfigPaths({
//       projects: ['./tsconfig.json'],
//     }),
//     cloudflare({ viteEnvironment: { name: 'ssr' } }),
//     tanstackStart(),
//     viteReact(),
