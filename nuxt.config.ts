// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }, // devtools u devre devre dışı bırakmak için false yapmak gerekiyor
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
