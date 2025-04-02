import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@lib': path.resolve(__dirname, 'src/core'),
    },
  },
});
