<script setup lang="ts">
import { DISCORD_URL } from '~/utils/links'

useReveal()
</script>

<template>
  <section class="relative py-24 md:py-36" aria-label="Rejoindre Wandaris">

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="reveal">
        <h2 class="font-heading text-3xl md:text-5xl text-gradient text-glow mb-8">
          Prêt à partir ?
        </h2>

        <p class="text-neutral-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Wandaris est en développement actif. Rejoignez la communauté pour suivre
          l'avancement et être parmi les premiers à fouler les sentiers.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="DISCORD_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-10 py-4 bg-primary-700 hover:bg-primary-600 border border-primary-400/30 text-primary-100 font-title text-sm uppercase tracking-widest transition-all duration-300 btn-glow"
          >
            <UIcon name="i-simple-icons-discord" class="size-4" />
            Rejoindre le Discord
          </a>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-10 py-4 border border-primary-400/15 hover:border-primary-400/40 text-neutral-300 hover:text-primary-400 font-title text-sm uppercase tracking-widest transition-all duration-300"
          >
            <UIcon name="i-lucide-mail" class="size-4" />
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
