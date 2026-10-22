import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // /api/taches → http://localhost:3001/taches (json-server, lancé avec "bun run mock")
      '/api': {
        target: 'http://localhost:3001',
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
