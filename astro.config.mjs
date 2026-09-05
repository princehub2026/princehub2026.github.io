import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://yakubulaw.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
