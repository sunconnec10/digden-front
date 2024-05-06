require('dotenv').config()

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
      seniorRootUrl: 'https://senior.rakuten.co.jp',
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
  imports: {
    dirs: [
      'composables/*/index.{ts,js,mjs,mts}',
    ]
  },
  devServer: {
    port: 8000,
  },
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
})
