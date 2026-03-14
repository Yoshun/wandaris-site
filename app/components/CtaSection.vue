<script setup lang="ts">
useReveal()
</script>

<template>
  <section class="relative py-24 md:py-36">
    <div class="absolute inset-0 bg-atmosphere" />
    <!-- Extra vignette for dramatic close -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4))]" />

    <div class="relative max-w-3xl mx-auto px-6 text-center">
      <div class="reveal">
        <!-- Decorative -->
        <div class="flex justify-center mb-10 opacity-30">
          <div class="flex items-center gap-4">
            <div class="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span class="text-primary-400 text-xs tracking-[0.4em] font-title uppercase">Rejoignez-nous</span>
            <div class="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
        </div>

        <h2 class="font-heading text-3xl md:text-5xl text-gradient text-glow mb-8">
          Prêt à partir ?
        </h2>

        <p class="text-neutral-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Wandaris est en développement actif. Rejoignez la communauté pour suivre
          l'avancement et être parmi les premiers à fouler les sentiers.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://discord.gg/Cacq5xYX6Z"
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
