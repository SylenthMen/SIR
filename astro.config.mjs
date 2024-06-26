import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';


import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapters: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
  integrations: [tailwind(), svelte()]
});