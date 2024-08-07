import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import TanStackRouterVite from '@tanstack/router-plugin/vite'
import path from 'path'
// vitest automatically sets NODE_ENV to 'test' when running tests
const isTest = process.env.NODE_ENV === 'test'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), isTest && TanStackRouterVite(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    },
  }
})
