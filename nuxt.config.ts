
export default defineNuxtConfig({
    modules: ['@vite-pwa/nuxt', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt','@vueuse/nuxt'],
    css: ['~/assets/css/main.css', 'vue-final-modal/style.css','@fortawesome/fontawesome-svg-core/styles.css'],
    pwa: {
        disable: false,
        includeAssets: ["/favicon.png"],
        strategies: "injectManifest",
        injectManifest: {
            globPatterns: ["**/*.{js,css,html,png,json}"],
        },
        manifest: {
            name: 'Nuxt Vite PWA',
            short_name: 'NuxtVitePWA',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'pwa-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                },
                {
                    src: 'pwa-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },
    },
    // pinia
    pinia: {
        autoImports: [
            // automatically import `defineStore`
            'defineStore',
        ]
    },
    // tailwind
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        },
    },
    ssr: false
  })