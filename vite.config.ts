import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@lib': path.resolve(__dirname, 'src/core'),
    },
  },
});
