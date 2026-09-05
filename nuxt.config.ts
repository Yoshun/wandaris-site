export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  ssr: true,

  app: {
    head: {
      title: 'Wandaris — L\'aventure commence à chaque pas',
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'description', content: 'Wandaris est un jeu mobile d\'aventure RPG en monde réel. Explorez, combattez, craftez — chaque sentier cache un secret.' },
        { name: 'theme-color', content: '#1a1410' },
        { property: 'og:title', content: 'Wandaris — L\'aventure commence à chaque pas' },
        { property: 'og:description', content: 'Jeu mobile d\'aventure RPG en monde réel. Balades, exploration, craft.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://wandaris.com' },
        { property: 'og:image', content: 'https://wandaris.com/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  colorMode: {
    preference: 'dark'
  },

  fonts: {
    families: [
      { name: 'Cinzel Decorative', provider: 'google', weights: [400, 700, 900] },
      { name: 'Cinzel', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Lora', provider: 'google', weights: [400, 500, 600, 700], italic: true }
    ]
  },

  nitro: {
    prerender: {
      routes: ['/', '/contact', '/team', '/support']
    }
  }
})
