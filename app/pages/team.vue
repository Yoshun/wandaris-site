<script setup lang="ts">
useHead({
  title: 'Équipe — Wandaris',
  meta: [
    { name: 'description', content: 'Découvrez l\'équipe derrière Wandaris, le jeu mobile d\'aventure RPG en monde réel. Développé en France par des passionnés de randonnée et de jeux vidéo.' },
    { property: 'og:title', content: 'Équipe — Wandaris' },
    { property: 'og:description', content: 'Découvrez l\'équipe derrière Wandaris, le jeu mobile d\'aventure RPG en monde réel.' },
    { property: 'og:url', content: 'https://wandaris.com/team' }
  ],
  link: [
    { rel: 'canonical', href: 'https://wandaris.com/team' }
  ]
})

useSchemaOrg([
  defineWebPage({
    '@type': 'AboutPage',
    name: 'Équipe — Wandaris',
    description: 'L\'équipe derrière Wandaris, le jeu mobile d\'aventure RPG en monde réel.'
  })
])

const team = [
  {
    name: 'Anthony',
    role: 'Créateur & Développeur',
    description: 'Passionné de balades en plein air et de jeux vidéo, Anthony a imaginé Wandaris pour fusionner ses deux passions. Il assure le développement complet du projet : backend, application mobile et panel d\'administration.',
    icon: 'i-lucide-code-2'
  }
  // Ajouter d'autres membres ici
]
</script>

<template>
  <div class="pt-24 pb-16 min-h-screen">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="font-heading text-3xl md:text-4xl text-primary-400 text-glow mb-4">
          L'Équipe
        </h1>
        <div class="divider-ornament my-6">✦</div>
        <p class="text-neutral-400 max-w-xl mx-auto">
          Les aventuriers derrière Wandaris — ceux qui construisent le monde
          pour que vous puissiez l'explorer.
        </p>
      </div>

      <!-- Team members -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <div
          v-for="member in team"
          :key="member.name"
          class="parchment-card p-8 text-center hover:border-primary-400/30 transition-all duration-300"
        >
          <!-- Avatar placeholder -->
          <div class="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-primary-400/10 border-2 border-primary-400/20 rounded-full">
            <UIcon :name="member.icon" class="size-10 text-primary-400" />
          </div>

          <h2 class="font-title text-xl text-neutral-100 mb-1">{{ member.name }}</h2>
          <p class="font-title text-sm text-primary-400 uppercase tracking-wider mb-4">{{ member.role }}</p>
          <p class="text-neutral-400 text-sm leading-relaxed">{{ member.description }}</p>
        </div>
      </div>

    </div>
  </div>
</template>
