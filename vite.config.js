import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path';import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    Vue(),
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    })
  ],
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "/assets": resolve(__dirname, "src/assets/"),
      "/img": resolve(__dirname, "src/assets/images")
    },
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 2000,
    strictPort: true,
    // cors: false,
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
})
