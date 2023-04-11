
export default defineNuxtConfig({
    modules: ['@vite-pwa/nuxt', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt',],
    css: ['~/assets/css/main.css','vue-final-modal/style.css'],
    pwa: {
        registerType: 'autoUpdate',
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
          autoprefixer: {},
        },
    },
  })