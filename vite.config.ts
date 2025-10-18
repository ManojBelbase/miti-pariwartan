import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'miti-pariwartan': new URL('./src', import.meta.url).pathname
    }
  }
})
