import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
import mkcert from 'vite-plugin-mkcert'
import { imagetools } from 'vite-imagetools'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  build: {
    outDir: './dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  preview: {
    open: true,
  },
  plugins: [
    svelte(),
    tsconfigPaths(),
    mkcert(),
    imagetools(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
    }),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.{js,ts,jsx,tsx,svelte}'],
      exclude: ['node_modules/**', 'dist/**'],
      fix: true,
    }),
  ],
})
