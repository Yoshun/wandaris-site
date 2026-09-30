export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  ssr: true,

  // ─── SEO: site identity ───
  site: {
    url: 'https://wandaris.com',
    name: 'Wandaris',
    description: 'Wandaris est un jeu mobile d\'aventure RPG en monde réel. Explorez votre environnement à pied, découvrez de vrais lieux, combattez des créatures, récoltez des ressources et maîtrisez 5 métiers d\'artisanat.',
    defaultLocale: 'fr'
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'theme-color', content: '#1a1410' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Wandaris' },
        { property: 'og:image', content: 'https://wandaris.com/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Wandaris — Jeu mobile d\'aventure RPG en monde réel' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://wandaris.com/og-image.jpg' },
        { name: 'twitter:image:alt', content: 'Wandaris — Jeu mobile d\'aventure RPG en monde réel' },
        // App meta
        { name: 'application-name', content: 'Wandaris' },
        { name: 'apple-mobile-web-app-title', content: 'Wandaris' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        // Geo
        { name: 'geo.region', content: 'FR' },
        { name: 'geo.placename', content: 'France' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
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

  // ─── Sitemap ───
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '65%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' }
    ]
  },

  // ─── Robots ───
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      }
    ],
    sitemap: 'https://wandaris.com/sitemap.xml'
  },

  // ─── Schema.org ───
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Wandaris',
      url: 'https://wandaris.com',
      logo: 'https://wandaris.com/og-image.jpg'
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/contact', '/team', '/support', '/confidentialite', '/mentions-legales']
    }
  }
})
