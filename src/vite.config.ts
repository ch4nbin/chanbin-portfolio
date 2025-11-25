import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  server: {
    port: 4321,
    host: true,
    open: false,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['motion'],
          icons: ['lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion', 'lucide-react']
  }
})
