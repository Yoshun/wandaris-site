<script setup lang="ts">
useReveal()

const biomes = [
  { name: 'Forêts', description: 'Bois et herbes, créatures en embuscade. Le terrain des bûcherons et alchimistes.', icon: '🌲' },
  { name: 'Montagnes', description: 'Minerai à profusion, ennemis redoutables. Le domaine des forgerons les plus courageux.', icon: '⛰️' },
  { name: 'Zones urbaines', description: 'Tissu et cuir, dangers modérés. Le repaire des couturiers entre deux balades.', icon: '🏰' },
  { name: 'Terres sauvages', description: 'Ressources variées, menaces imprévisibles. L\'aventure au-delà des sentiers battus.', icon: '🌿' }
]

const crafts = [
  { name: 'Bûcheron', description: 'Récoltez le bois pour les ateliers de craft', icon: '🪓' },
  { name: 'Mineur', description: 'Extrayez le minerai essentiel aux forgerons', icon: '⛏️' },
  { name: 'Forgeron', description: 'Forgez armes et armures lourdes en métal', icon: '🔨' },
  { name: 'Couturier', description: 'Confectionnez capes et équipements légers', icon: '🧵' },
  { name: 'Alchimiste', description: 'Préparez potions de soin et enchantements', icon: '⚗️' }
]
</script>

<template>
  <section id="world" class="relative py-20 md:py-32" aria-label="Le monde de Wandaris — biomes et métiers">

    <div class="relative max-w-6xl mx-auto px-6">
      <!-- Section header -->
      <div class="text-center mb-16 reveal">
        <h2 class="font-heading text-3xl md:text-5xl text-gradient text-glow mb-4">
          Le Monde de Wandaris
        </h2>
        <div class="divider-ornament my-6">✦</div>
        <p class="text-neutral-400 max-w-2xl mx-auto text-lg">
          Un monde superposé au nôtre, où chaque environnement recèle
          des ressources à récolter, des créatures à rencontrer et des lieux à explorer.
        </p>
      </div>

      <!-- Biomes -->
      <div class="mb-24">
        <h3 class="font-title text-xl text-neutral-200 text-center mb-10 tracking-wider uppercase reveal">
          Les Biomes
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(biome, i) in biomes"
            :key="biome.name"
            class="parchment-card p-7 text-center hover:border-primary-400/30 transition-all duration-300 reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <span class="text-4xl block mb-4">{{ biome.icon }}</span>
            <h4 class="font-title text-base text-neutral-100 mb-2">{{ biome.name }}</h4>
            <p class="text-neutral-400 text-sm leading-relaxed">{{ biome.description }}</p>
          </div>
        </div>
      </div>

      <!-- Crafting -->
      <div>
        <h3 class="font-title text-xl text-neutral-200 text-center mb-10 tracking-wider uppercase reveal">
          Les Métiers
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="(craft, i) in crafts"
            :key="craft.name"
            class="parchment-card p-6 text-center hover:border-primary-400/30 transition-all duration-300 reveal"
            :class="`reveal-delay-${(i % 4) + 1}`"
          >
            <span class="text-3xl block mb-3">{{ craft.icon }}</span>
            <h4 class="font-title text-sm text-neutral-100 mb-1">{{ craft.name }}</h4>
            <p class="text-neutral-500 text-xs leading-relaxed">{{ craft.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
