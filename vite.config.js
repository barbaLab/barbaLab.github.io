import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { use } from 'react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100
    }
  }
})
