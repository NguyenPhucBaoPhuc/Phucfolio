import { defineConfig } from 'vite';
import { resolve } from 'path';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
