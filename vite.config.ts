/* eslint-env node */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isGH = process.env.GITHUB_PAGES === 'true';
const base = isGH ? '/react-tv-movie-ui/' : '/';


export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});