// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss'],
    buildModules: ['@nuxtjs/color-mode', '@pinia/nuxt'],
    publicRuntimeConfig: {
        DOMAIN: "http://localhost:8080"
    },
    meta: {
        link: [
            {
                href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined',
                rel: 'stylesheet',
            },
        ],
    },
})
