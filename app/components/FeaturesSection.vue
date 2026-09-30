<script setup lang="ts">
useReveal()

const features = [
  {
    icon: 'i-lucide-map',
    title: 'Explorez',
    description: 'Parcourez les sentiers du monde réel. Chaque chemin, chaque forêt, chaque sommet est une aventure qui n\'attend que vous. La carte s\'adapte à votre position GPS et révèle les trésors qui vous entourent.',
    screenshot: '/screenshots/map.png',
    screenshotAlt: 'Capture d\'écran de la carte interactive de Wandaris montrant les points d\'intérêt proches'
  },
  {
    icon: 'i-lucide-swords',
    title: 'Combattez',
    description: 'Affrontez des créatures qui se dressent sur votre route. Un système de combat en temps réel où vos stats, votre équipement et votre stratégie font la différence.',
    screenshot: '/screenshots/combat.png',
    screenshotAlt: 'Capture d\'écran du système de combat en temps réel de Wandaris'
  },
  {
    icon: 'i-lucide-hammer',
    title: 'Craftez',
    description: 'Récoltez des ressources en chemin et maîtrisez 5 métiers d\'artisanat. Forgez armes et armures, préparez des potions — chaque pièce d\'équipement est unique.',
    screenshot: '/screenshots/craft.png',
    screenshotAlt: 'Capture d\'écran de l\'interface d\'artisanat de Wandaris avec les 5 métiers'
  },
  {
    icon: 'i-lucide-compass',
    title: 'Découvrez',
    description: 'Des centaines de points d\'intérêt vous attendent : châteaux, ruines, cascades, sommets... Visitez-les, explorez votre région et débloquez de nouvelles récompenses.',
    screenshot: '/screenshots/poi.png',
    screenshotAlt: 'Capture d\'écran d\'un point d\'intérêt réel dans Wandaris — château, ruine ou cascade'
  },
  {
    icon: 'i-lucide-route',
    title: 'Planifiez',
    description: 'Générez automatiquement un parcours de balade optimisé pour visiter les points d\'intérêt autour de vous. Choisissez votre rayon, et l\'app trace le chemin idéal — avec distance et durée estimées pour chaque étape.',
    screenshot: '/screenshots/route.png',
    screenshotAlt: 'Capture d\'écran du planificateur de parcours de balade de Wandaris'
  }
]
</script>

<template>
  <section id="features" class="relative py-20 md:py-32" aria-label="Fonctionnalités du jeu">

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-20 reveal">
        <h2 class="font-heading text-3xl md:text-5xl text-gradient text-glow mb-4">
          Votre Aventure
        </h2>
        <div class="divider-ornament my-6" aria-hidden="true">✦</div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-lg">
          Wandaris transforme chaque sortie en une aventure.
          Marchez, et le monde s'anime autour de vous.
        </p>
      </div>

      <!-- Feature rows (asymmetric) -->
      <div class="space-y-24 md:space-y-32">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-row reveal"
          :class="{ reverse: index % 2 === 1 }"
        >
          <!-- Text side -->
          <div class="flex flex-col justify-center">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-12 h-12 flex items-center justify-center bg-primary-400/10 border border-primary-400/20">
                <UIcon :name="feature.icon" class="size-6 text-primary-400" />
              </div>
              <h3 class="font-title text-2xl md:text-3xl text-neutral-100">
                {{ feature.title }}
              </h3>
            </div>
            <p class="text-neutral-400 leading-relaxed text-base md:text-lg">
              {{ feature.description }}
            </p>
          </div>

          <!-- Visual side (phone mockup) -->
          <div class="feature-visual flex justify-center">
            <div class="phone-mockup">
              <!-- Screenshot with fallback -->
              <div class="aspect-[9/19.5] bg-gradient-to-b from-neutral-800 to-neutral-900 flex items-center justify-center">
                <img
                  :src="feature.screenshot"
                  :alt="feature.screenshotAlt"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                />
                <div class="text-center p-6 flex-col items-center justify-center" style="display:none">
                  <UIcon :name="feature.icon" class="size-12 text-primary-400/30 mx-auto mb-3" />
                  <span class="text-neutral-600 text-xs font-title uppercase tracking-wider">{{ feature.screenshotAlt }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
