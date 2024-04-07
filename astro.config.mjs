import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astro/vercel/serverless";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapters: vercel({
    webAnalytics: { enabled: true}
  }),
  integrations: [tailwind(), svelte()]
});