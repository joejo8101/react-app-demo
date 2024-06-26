import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});
