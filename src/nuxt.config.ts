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
  }
})
