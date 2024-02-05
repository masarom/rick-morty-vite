import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://masarom.github.io/rick-morty-vite',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $nuclear-green: #28e116;
          $text-clr:#d2c9b8;
          $white: #fff;
          $black: #000;
          $primary-font: 'Rubik', sans-serif;
          $accent-font: 'The Get Schwifty', sans-serif;
        `,
      },
    }
  }
})
