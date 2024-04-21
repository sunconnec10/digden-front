export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.provide('backendURL', () => {
    if (process.server) {
      
      return config.public.backendURLServer
    } else {
      return config.public.backendURL
    }
  });
})
