import { resolve } from 'path';
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    modules: [
        '@pinia/nuxt',
        'nuxt-icons',
    ],
    css: ['@/assets/global.css', 'vue3-carousel/dist/carousel.css'],
    alias: {
        'UI': resolve(__dirname, './UI'),
        '@src': resolve(__dirname, './src'),
        '@modules': resolve(__dirname, './modules'),
        '@models': resolve(__dirname, './src/models'),
    }
})
