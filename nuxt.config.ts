export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: false},
    app: {
        head: {
            title: 'Nuxt & Laravel',
            meta: [
                {name: 'charset', content: 'UTF-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
                {name: 'description', content: 'Bu sayfa nuxt ve laravel ile oluşturulmuştur.'},
                {name: 'keywords', content: 'nuxt, laravel, vue, javascript, typescript'},
                {name: 'robots', content: 'index, follow'},
                {name: 'author', content: 'Okan Aras'},
                {property: 'og:title', content: 'Nuxt & Laravel'},
                {property: 'og:description', content: 'Bu sayfanın sosyal medya açıklaması'},
                {property: 'og:image', content: '/favicon.ico'},
                {property: 'og:url', content: 'https://22www.okanaras.com.tr/'},
                {property: 'og:type', content: 'website'},
                {name: 'twitter:card', content: 'summary_large_image'},
                {name: 'twitter:title', content: 'Nuxt & Laravel - Twitter Title'},
                {name: 'twitter:description', content: 'Bu sayfanın Twitter açıklaması'},
                {name: 'twitter:image', content: '/favicon.ico'}
            ],
            link: [
                {rel: 'canonical', href: 'https://www.22okanaras.com.tr/'}
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt'
    ],
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        hid: 'nuxt-color-mode-script',
        globalName: '__NUXT_COLOR_MODE__',
        // componentName: 'ColorScheme',
        classSuffix: '',
        storage: 'localStorage', // or 'sessionStorage' or 'cookie'
        storageKey: 'nuxt-color-mode'
    },
    tailwindcss: {
        cssPath: ["~/assets/css/input.css", {injectPosition: 0}],
        configPath: '~/tailwind.config.js',
        exposeConfig: false,
        config: {},
        viewer: true,
    },

    imports: {
        dirs: ['./store']
    },
    pinia: {
        autoImport: [
            'defineStore',
            ['defineStore', 'definePiniaStore']
        ]
    },
});
