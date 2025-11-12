import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/figma-menu-screen/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

