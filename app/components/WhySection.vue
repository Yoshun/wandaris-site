<script setup lang="ts">
useReveal()

const reasons = [
  {
    icon: 'i-lucide-map-pin',
    title: 'De vrais lieux à découvrir',
    description: 'Châteaux, ruines, cascades, sommets... les points d\'intérêt du jeu sont de vrais lieux autour de vous. Wandaris vous donne une raison de sortir explorer votre région — et de découvrir des endroits que vous ne connaissiez même pas.'
  },
  {
    icon: 'i-lucide-footprints',
    title: 'À votre rythme',
    description: 'Pas besoin d\'être un grand marcheur. Une petite balade de 20 minutes suffit pour progresser. Que vous fassiez le tour du quartier ou une sortie en montagne, chaque pas vous fait avancer.'
  },
  {
    icon: 'i-lucide-puzzle',
    title: 'Jouez comme vous voulez',
    description: 'La partie RPG est là pour ceux qui aiment ça — combats, craft, équipement, métiers. Mais si vous préférez simplement découvrir les lieux et planifier des parcours de balade, ça marche aussi. À chacun son aventure.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Zéro pay-to-win',
    description: 'Votre progression ne dépend que de votre exploration et de vos choix. Aucun raccourci payant, aucun avantage à acheter. Tout le monde part sur un pied d\'égalité.'
  }
]
</script>

<template>
  <section class="relative py-20 md:py-32" aria-label="Pourquoi choisir Wandaris">

    <div class="relative max-w-5xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <h2 class="font-heading text-3xl md:text-5xl text-gradient text-glow mb-4">
          Pourquoi Wandaris ?
        </h2>
        <div class="divider-ornament my-6">✦</div>
      </div>

      <div class="space-y-6">
        <div
          v-for="(reason, i) in reasons"
          :key="reason.title"
          class="flex items-start gap-6 parchment-card p-8 md:p-10 hover:border-primary-400/30 transition-all duration-300 reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="shrink-0 w-14 h-14 flex items-center justify-center bg-primary-400/10 border border-primary-400/20">
            <UIcon :name="reason.icon" class="size-7 text-primary-400" />
          </div>
          <div>
            <h3 class="font-title text-lg md:text-xl text-neutral-100 mb-3">{{ reason.title }}</h3>
            <p class="text-neutral-400 leading-relaxed">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
