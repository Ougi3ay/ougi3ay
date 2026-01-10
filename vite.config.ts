import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/ougi3ay/',
  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('scheduler')) {
              return 'vendor-dom';
            }
            if (id.includes('framer-motion') || id.includes('@radix-ui') || id.includes('lucide')) {
              return 'vendor-ui';
            }
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
      // https://rollupjs.org/guide/en/#big-list-of-options
    }
  }
})
