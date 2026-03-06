// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://goncaloguimaraes.com",
  // base: "/portfolio/", // descomente se a URL for ghoes18.github.io/portfolio/
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});