// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "flex",
        cssVariable: "--font-flex",
        variants: [
          {
            weight: 700,
            stretch: "200% 1000%",
            src: ["./src/assets/fonts/flex.woff2"],
          },
        ],
      },
    ],
  },
});
