// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // Corrected: Call the function with no arguments
      tailwindcss()
    ]
  }
});