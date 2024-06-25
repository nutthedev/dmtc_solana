import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['bootstrap'],
    },
  },
  assetsInclude: ['**/*.pdf']
});