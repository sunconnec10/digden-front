// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  plugins: [
    // add not automatically scanned plugins
    // '~/plugins/foo/foo.ts'
  ],
  runtimeConfig: {
    public: {
      backendURL: 'http://localhost:8080',
      backendURLServer: 'http://digden_api_nginx',
    }
  },
  css: [
   '@/assets/css/foundation/index.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/mixin/index.scss" as *;'
        },
      },
    },
  },
  devServer: {
    port: 8000,
  },
})
