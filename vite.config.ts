import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['22e0-148-113-163-35.ngrok-free.app']
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
