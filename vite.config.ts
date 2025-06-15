import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-map-gl': 'react-map-gl/dist/esm',
    },
  },
  optimizeDeps: {
    include: ['react-map-gl'],
  },
})
