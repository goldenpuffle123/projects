import { defineConfig } from 'vite'

export default defineConfig({
  base: '/projects/weather_app/',
  build: {
    outDir: '../dist/weather_app',
    emptyOutDir: true,
  },
})