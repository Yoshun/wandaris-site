<template>
  <div class="page-gradient">
    <HeroSection />
    <FeaturesSection />
    <div class="section-divider"><span class="divider-diamond">✦</span></div>
    <WorldSection />
    <div class="section-divider"><span class="divider-diamond">✦</span></div>
    <WhySection />
    <div class="section-divider"><span class="divider-diamond">✦</span></div>
    <FaqSection />
    <div class="section-divider"><span class="divider-diamond">✦</span></div>
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Wandaris — L\'aventure commence à chaque pas',
  meta: [
    { name: 'description', content: 'Wandaris est un jeu mobile d\'aventure RPG en monde réel. Explorez votre environnement à pied, découvrez de vrais châteaux, ruines et cascades, combattez des créatures, récoltez des ressources et maîtrisez 5 métiers d\'artisanat. Gratuit, sans pay-to-win. Bientôt sur Android.' },
    { property: 'og:title', content: 'Wandaris — L\'aventure commence à chaque pas' },
    { property: 'og:description', content: 'Jeu mobile d\'aventure RPG en monde réel. Explorez de vrais lieux, combattez, craftez — chaque sentier cache un secret.' },
    { property: 'og:url', content: 'https://wandaris.com' }
  ],
  link: [
    { rel: 'canonical', href: 'https://wandaris.com' }
  ]
})

// JSON-LD: VideoGame + MobileApplication (co-typed for Google rich results)
useSchemaOrg([
  defineWebPage({
    '@type': 'WebPage',
    name: 'Wandaris — L\'aventure commence à chaque pas',
    description: 'Wandaris est un jeu mobile d\'aventure RPG en monde réel. Explorez, combattez, craftez — chaque sentier cache un secret.'
  }),
  {
    '@type': ['VideoGame', 'MobileApplication'],
    'name': 'Wandaris',
    'description': 'Jeu mobile d\'aventure RPG en monde réel. Explorez votre environnement à pied, découvrez de vrais châteaux, ruines et cascades, combattez des créatures, récoltez des ressources et maîtrisez 5 métiers d\'artisanat.',
    'operatingSystem': 'Android',
    'applicationCategory': 'GameApplication',
    'genre': ['RPG', 'Adventure', 'Outdoor'],
    'gamePlatform': 'Android',
    'inLanguage': 'fr',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'EUR',
      'availability': 'https://schema.org/PreOrder'
    },
    'author': {
      '@type': 'Person',
      'name': 'Anthony Tetrel'
    },
    'url': 'https://wandaris.com',
    'image': 'https://wandaris.com/og-image.jpg'
  } as any
])
</script>
