import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  base: "/bank_landing_page",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})