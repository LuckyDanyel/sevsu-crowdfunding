import { resolve } from 'path';
import babel from 'vite-plugin-babel';

export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    build: {
        transpile: ['date-fns'],
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/logo.svg' }]
        }
    },
    modules: [
        ['@pinia/nuxt', { autoImports: ['storeToRefs', 'defineStore'] }],
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
