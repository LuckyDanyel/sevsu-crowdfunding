// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    modules: [
        '@pinia/nuxt',
    ],
    css: ['@/static/global.css'],
})
