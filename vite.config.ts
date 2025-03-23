import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/shorten': {
        target: 'https://cleanuri.com/api/v1/shorten',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/shorten/, ''),
      },
    },
  },
})
